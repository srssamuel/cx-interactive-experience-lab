'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import type { Chapter } from '@/lib/types'

interface ChapterNavProps {
  chapters: Chapter[]
  className?: string
}

const blockColors: Record<string, string> = {
  abertura: 'bg-[var(--accent-amber)]',
  contexto: 'bg-[var(--text-secondary)]',
  cx: 'bg-[#5B8FB9]',
  cs: 'bg-[var(--accent-green)]',
  data: 'bg-[#8B6FB0]',
  ai: 'bg-[#C75B5B]',
  convergencia: 'bg-[var(--accent-amber)]',
  workshop: 'bg-[var(--accent-green)]',
  fechamento: 'bg-[var(--text-primary)]',
}

export function ChapterNav({ chapters, className }: ChapterNavProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = chapters.map((ch) => document.getElementById(ch.id))
      const scrollY = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollY) {
          setActiveIndex(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [chapters])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Skip if typing in inputs
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        const next = Math.min(activeIndex + 1, chapters.length - 1)
        document.getElementById(chapters[next].id)?.scrollIntoView({ behavior: 'smooth' })
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        const prev = Math.max(activeIndex - 1, 0)
        document.getElementById(chapters[prev].id)?.scrollIntoView({ behavior: 'smooth' })
      }
      // Home = first chapter, End = last chapter
      if (e.key === 'Home') {
        e.preventDefault()
        document.getElementById(chapters[0].id)?.scrollIntoView({ behavior: 'smooth' })
      }
      if (e.key === 'End') {
        e.preventDefault()
        document.getElementById(chapters[chapters.length - 1].id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex, chapters])

  return (
    <>
      {/* Dot indicators — always visible */}
      <nav
        className={cn(
          'fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2',
          'hidden lg:flex',
          className
        )}
        aria-label="Navegacao de capitulos"
      >
        {/* Chapter counter */}
        <span className="font-mono text-[10px] text-[var(--text-muted)] mb-1 tabular-nums">
          {String(activeIndex + 1).padStart(2, '0')}/{String(chapters.length).padStart(2, '0')}
        </span>
        {chapters.map((ch, i) => (
          <button
            key={ch.id}
            onClick={() => document.getElementById(ch.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center justify-end"
            aria-label={ch.title}
            title={ch.title}
          >
            {/* Tooltip on hover */}
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[var(--text-secondary)] whitespace-nowrap bg-[var(--bg-elevated)] px-2 py-1 rounded pointer-events-none">
              {ch.title}
            </span>
            <span
              className={cn(
                'rounded-full transition-all duration-300',
                i === activeIndex
                  ? cn('w-3 h-3', blockColors[ch.block])
                  : 'w-1.5 h-1.5 bg-[var(--text-muted)] hover:bg-[var(--text-tertiary)] hover:w-2 hover:h-2'
              )}
            />
          </button>
        ))}
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 lg:hidden w-12 h-12 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-full flex items-center justify-center"
        aria-label="Menu de capitulos"
      >
        <span className="text-sm font-mono">{activeIndex + 1}</span>
      </button>

      {/* Mobile drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 right-6 z-50 lg:hidden bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-xl p-4 max-h-[60vh] overflow-y-auto w-72"
        >
          {chapters.map((ch, i) => (
            <button
              key={ch.id}
              onClick={() => {
                document.getElementById(ch.id)?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
              className={cn(
                'w-full text-left px-3 py-2 text-sm rounded-lg transition-colors',
                i === activeIndex
                  ? 'text-[var(--text-primary)] bg-[var(--bg-hover)]'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
              )}
            >
              <span className="font-mono text-xs mr-2 text-[var(--text-muted)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              {ch.title}
            </button>
          ))}
        </motion.div>
      )}
    </>
  )
}
