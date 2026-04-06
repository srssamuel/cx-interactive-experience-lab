'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'

interface TextRevealProps {
  children: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
}

export function TextReveal({ children, className, tag: Tag = 'h2', delay = 0 }: TextRevealProps) {
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

    let gsapModule: typeof import('gsap') | null = null

    const loadAndAnimate = async () => {
      const [gsap, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      gsapModule = gsap
      gsap.default.registerPlugin(ScrollTrigger)

      const words = el.querySelectorAll('.word-wrap')

      gsap.default.set(words, { yPercent: 110 })
      gsap.default.to(words, {
        yPercent: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
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

    return () => {
      if (gsapModule) {
        const { ScrollTrigger } = gsapModule as unknown as { ScrollTrigger: { getAll: () => Array<{ kill: () => void }> } }
        if (ScrollTrigger?.getAll) {
          ScrollTrigger.getAll().forEach((t: { kill: () => void }) => t.kill())
        }
      }
    }
  }, [delay])

  const words = children.split(' ')

  return (
    <div ref={containerRef} className={cn('opacity-0', className)} style={{ opacity: 0 }}>
      <Tag className="font-display leading-[1.1] tracking-tight">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <span className="word-wrap inline-block">{word}</span>
          </span>
        ))}
      </Tag>
    </div>
  )
}
