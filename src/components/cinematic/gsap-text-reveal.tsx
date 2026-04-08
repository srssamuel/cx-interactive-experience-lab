'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/cn'

gsap.registerPlugin(ScrollTrigger)

interface GsapTextRevealProps {
  children: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  variant?: 'chars' | 'words' | 'lines'
  stagger?: number
  duration?: number
  delay?: number
  scrub?: boolean
  color?: string
  glowColor?: string
}

/**
 * Cinematic GSAP-powered text reveal.
 * Splits text into chars/words and animates each with stagger.
 * Much more dramatic than CSS-only reveals.
 */
export function GsapTextReveal({
  children,
  className,
  tag: Tag = 'h2',
  variant = 'chars',
  stagger = 0.03,
  duration = 0.8,
  delay = 0,
  scrub = false,
  color,
  glowColor,
}: GsapTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.style.opacity = '1'
      return
    }

    // Split text into spans
    const text = children
    let elements: HTMLSpanElement[] = []

    if (variant === 'chars') {
      el.innerHTML = ''
      // Split into words first, then chars within each word
      const words = text.split(' ')
      words.forEach((word, wi) => {
        const wordSpan = document.createElement('span')
        wordSpan.style.display = 'inline-block'
        wordSpan.style.whiteSpace = 'nowrap'

        word.split('').forEach((char) => {
          const charSpan = document.createElement('span')
          charSpan.textContent = char
          charSpan.style.display = 'inline-block'
          charSpan.style.opacity = '0'
          charSpan.style.transform = 'translateY(40px) rotateX(45deg)'
          charSpan.style.filter = 'blur(4px)'
          if (color) charSpan.style.color = color
          wordSpan.appendChild(charSpan)
          elements.push(charSpan)
        })

        el.appendChild(wordSpan)
        if (wi < words.length - 1) {
          const space = document.createElement('span')
          space.innerHTML = '&nbsp;'
          space.style.display = 'inline-block'
          el.appendChild(space)
        }
      })
    } else if (variant === 'words') {
      el.innerHTML = ''
      const words = text.split(' ')
      words.forEach((word, wi) => {
        const wordSpan = document.createElement('span')
        wordSpan.textContent = word
        wordSpan.style.display = 'inline-block'
        wordSpan.style.opacity = '0'
        wordSpan.style.transform = 'translateY(30px)'
        wordSpan.style.filter = 'blur(3px)'
        if (color) wordSpan.style.color = color
        el.appendChild(wordSpan)
        elements.push(wordSpan)
        if (wi < words.length - 1) {
          const space = document.createElement('span')
          space.innerHTML = '&nbsp;'
          space.style.display = 'inline-block'
          el.appendChild(space)
        }
      })
    } else {
      // Lines mode - just fade the whole block
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.filter = 'blur(3px)'
      elements = [el as unknown as HTMLSpanElement]
    }

    const animProps: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      delay,
      ease: 'power3.out',
    }

    if (glowColor) {
      animProps.textShadow = `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`
    }

    if (scrub) {
      gsap.to(elements, {
        ...animProps,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      })
    } else {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(elements, animProps)
        },
        once: true,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [children, variant, stagger, duration, delay, scrub, color, glowColor])

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={cn('font-display leading-[1.05] tracking-tight', className)}
      style={{ perspective: '600px' }}
    >
      {children}
    </Tag>
  )
}
