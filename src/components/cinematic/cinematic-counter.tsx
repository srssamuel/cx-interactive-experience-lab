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

/**
 * Dramatic number counter with glow effect.
 * The number counts up with GSAP and pulses with light.
 */
export function CinematicCounter({
  value,
  prefix = '',
  suffix = '',
  className,
  duration = 2.5,
  color = 'var(--accent-blue-vivid)',
  glowIntensity = 'high',
}: CinematicCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [displayValue, setDisplayValue] = useState(0)

  const glowMap = {
    low: '0 0 20px',
    medium: '0 0 40px',
    high: '0 0 60px',
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setDisplayValue(value)
      return
    }

    const obj = { val: 0 }

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        // Counter animation
        gsap.to(obj, {
          val: value,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplayValue(Math.round(obj.val * 10) / 10)
          },
        })

        // Glow pulse animation
        if (numberRef.current) {
          gsap.fromTo(
            numberRef.current,
            {
              textShadow: `${glowMap[glowIntensity]} transparent`,
              scale: 0.95,
              opacity: 0.5,
            },
            {
              textShadow: `${glowMap[glowIntensity]} ${color}, 0 0 120px ${color}`,
              scale: 1,
              opacity: 1,
              duration: duration * 0.6,
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
  }, [value, duration, color, glowIntensity])

  // Format the display value
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
