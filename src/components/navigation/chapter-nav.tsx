'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { useSlide } from './slide-deck'
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
  const { currentSlide, goTo } = useSlide()
  const [isOpen, setIsOpen] = useState(false)

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
          {String(currentSlide + 1).padStart(2, '0')}/{String(chapters.length).padStart(2, '0')}
        </span>
        {chapters.map((ch, i) => (
          <button
            key={ch.id}
            onClick={() => goTo(i)}
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
                i === currentSlide
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
        <span className="text-sm font-mono">{currentSlide + 1}</span>
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
                goTo(i)
                setIsOpen(false)
              }}
              className={cn(
                'w-full text-left px-3 py-2 text-sm rounded-lg transition-colors',
                i === currentSlide
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
