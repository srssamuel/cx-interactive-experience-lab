'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/cn'

gsap.registerPlugin(ScrollTrigger)

interface CinematicCounterProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
  duration?: number
  color?: string
  glowIntensity?: 'low' | 'medium' | 'high'
}

export function CinematicCounter({
  value,
  prefix = '',
  suffix = '',
  className,
  duration = 2.5,
  color = 'var(--accent-amber-vivid)',
  glowIntensity: _glowIntensity = 'medium',
}: CinematicCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setDisplayValue(value)
      return
    }

    // Start from 0 for animation
    setDisplayValue(0)
    const obj = { val: 0 }

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplayValue(Math.round(obj.val * 10) / 10)
          },
        })

        if (numberRef.current) {
          gsap.fromTo(
            numberRef.current,
            { opacity: 0.6, scale: 0.97 },
            {
              opacity: 1,
              scale: 1,
              duration: duration * 0.5,
              ease: 'power3.out',
            }
          )
        }
      },
      once: true,
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [value, duration, color, _glowIntensity])

  const formatted = Number.isInteger(value)
    ? Math.round(displayValue).toLocaleString()
    : displayValue.toFixed(1)

  return (
    <div ref={containerRef} className={cn('relative inline-block', className)}>
      <span
        ref={numberRef}
        className="font-display leading-none"
        style={{ color }}
      >
        {prefix}{formatted}{suffix}
      </span>
    </div>
  )
}
