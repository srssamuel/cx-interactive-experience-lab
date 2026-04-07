'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'

interface CharRevealProps {
  children: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'span'
  delay?: number
  stagger?: number
  color?: string
}

export function CharReveal({
  children,
  className,
  tag: Tag = 'h2',
  delay = 0,
  stagger = 0.02,
  color,
}: CharRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el || hasAnimated.current) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.style.opacity = '1'
      return
    }

    const loadAndAnimate = async () => {
      const [gsap, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      gsap.default.registerPlugin(ScrollTrigger)

      const chars = el.querySelectorAll('.char-wrap')
      gsap.default.set(chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        transformPerspective: 600,
      })

      gsap.default.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.6,
        stagger,
        ease: 'power4.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      })

      hasAnimated.current = true
    }

    loadAndAnimate()
  }, [delay, stagger])

  const words = children.split(' ')

  return (
    <div ref={containerRef} className={cn('opacity-0', className)}>
      <Tag className="font-display leading-[1.05] tracking-tight" style={color ? { color } : undefined}>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block mr-[0.25em]">
            {word.split('').map((char, ci) => (
              <span key={ci} className="inline-block overflow-hidden">
                <span className="char-wrap inline-block">{char}</span>
              </span>
            ))}
          </span>
        ))}
      </Tag>
    </div>
  )
}
