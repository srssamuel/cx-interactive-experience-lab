'use client'

import { useRef, useState, useEffect, useCallback, createContext, useContext } from 'react'
import { gsap } from 'gsap'
import { useLenis } from '@/lib/providers/smooth-scroll-provider'
import type { Chapter } from '@/lib/types'

interface SlideContextValue {
  currentSlide: number
  totalSlides: number
  goTo: (index: number) => void
  next: () => void
  prev: () => void
}

const SlideContext = createContext<SlideContextValue>({
  currentSlide: 0,
  totalSlides: 0,
  goTo: () => {},
  next: () => {},
  prev: () => {},
})

export function useSlide() {
  return useContext(SlideContext)
}

interface SlideDeckProps {
  children: React.ReactNode
  chapters: Chapter[]
}

const blockAccentMap: Record<string, string> = {
  abertura: '#3498DB',
  contexto: '#8BAAC8',
  cx: '#42A5F5',
  cs: '#00BCD4',
  data: '#26C6DA',
  ai: '#7C4DFF',
  convergencia: '#3498DB',
  workshop: '#00BCD4',
  fechamento: '#AED6F1',
}

export function SlideDeck({ children, chapters }: SlideDeckProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const isAnimatingRef = useRef(false)
  const currentSlideRef = useRef(0)
  const overlayRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()

  // Disable Lenis smooth scroll — SlideDeck handles its own navigation
  useEffect(() => {
    if (lenis) {
      lenis.stop()
      return () => { lenis.start() }
    }
  }, [lenis])

  const goTo = useCallback((index: number) => {
    const container = containerRef.current
    if (!container || isAnimatingRef.current) return
    if (index < 0 || index >= chapters.length) return
    if (index === currentSlideRef.current) return

    isAnimatingRef.current = true
    const direction = index > currentSlideRef.current ? 1 : -1
    const accent = blockAccentMap[chapters[index].block] || '#3498DB'

    // Animate transition overlay
    const overlay = overlayRef.current
    if (overlay) {
      const tl = gsap.timeline({
        onComplete: () => {
          // Snap to target slide
          const target = container.children[index] as HTMLElement
          if (target) {
            container.scrollTo({ top: target.offsetTop, behavior: 'instant' as ScrollBehavior })
          }
          currentSlideRef.current = index
          setCurrentSlide(index)

          // Fade out overlay
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
              isAnimatingRef.current = false
              gsap.set(overlay, { display: 'none' })
            },
          })

          // Animate slide content entrance
          const slideEl = container.children[index] as HTMLElement
          if (slideEl) {
            const contentElements = slideEl.querySelectorAll('.slide-animate')
            gsap.fromTo(
              contentElements,
              { opacity: 0, y: direction * 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.1,
              }
            )
          }
        },
      })

      gsap.set(overlay, {
        display: 'block',
        background: `radial-gradient(ellipse at 50% 50%, ${accent}22, #0C0F14 70%)`,
      })

      tl.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.in' }
      )
    }
  }, [chapters])

  const next = useCallback(() => {
    goTo(currentSlideRef.current + 1)
  }, [goTo])

  const prev = useCallback(() => {
    goTo(currentSlideRef.current - 1)
  }, [goTo])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (isAnimatingRef.current) return

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          next()
          break
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(chapters.length - 1)
          break
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev, goTo, chapters.length])

  // Touch/swipe support
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let touchStartY = 0
    let touchStartTime = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
      touchStartTime = Date.now()
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimatingRef.current) return
      const deltaY = touchStartY - e.changedTouches[0].clientY
      const deltaTime = Date.now() - touchStartTime
      const velocity = Math.abs(deltaY) / deltaTime

      // Require minimum swipe distance (50px) or high velocity
      if (Math.abs(deltaY) > 50 || velocity > 0.5) {
        if (deltaY > 0) next()
        else prev()
      }
    }

    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [next, prev])

  // Wheel navigation (debounced)
  useEffect(() => {
    let wheelTimeout: ReturnType<typeof setTimeout> | null = null
    let accumulatedDelta = 0

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isAnimatingRef.current) return

      accumulatedDelta += e.deltaY

      if (wheelTimeout) clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        if (Math.abs(accumulatedDelta) > 50) {
          if (accumulatedDelta > 0) next()
          else prev()
        }
        accumulatedDelta = 0
      }, 80)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }
    return () => {
      if (container) container.removeEventListener('wheel', handleWheel)
      if (wheelTimeout) clearTimeout(wheelTimeout)
    }
  }, [next, prev])

  return (
    <SlideContext.Provider value={{ currentSlide, totalSlides: chapters.length, goTo, next, prev }}>
      {/* Slide container — no native scroll, slides stacked */}
      <div
        ref={containerRef}
        className="relative w-full h-[100dvh] overflow-hidden"
      >
        {children}

        {/* Transition overlay */}
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[60] pointer-events-none"
          style={{ display: 'none', opacity: 0 }}
        />

        {/* Slide counter — bottom center */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
          <span className="font-mono text-xs tabular-nums text-[var(--text-muted)]">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <div className="w-24 h-px bg-[var(--border-subtle)] relative">
            <div
              className="absolute left-0 top-0 h-full bg-[var(--accent-blue)] transition-all duration-500 ease-out"
              style={{ width: `${((currentSlide + 1) / chapters.length) * 100}%` }}
            />
          </div>
          <span className="font-mono text-xs tabular-nums text-[var(--text-muted)]">
            {String(chapters.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </SlideContext.Provider>
  )
}
