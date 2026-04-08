'use client'

import { cn } from '@/lib/cn'
import { useStageMode } from '@/lib/use-stage-mode'
import { ActiveChapterProvider, useActiveChapter } from '@/lib/active-chapter-context'
import type { Chapter } from '@/lib/types'
import { ChapterNav } from './chapter-nav'
import { SlideDeck } from './slide-deck'
import { LazyGlobalScene } from '@/components/three/lazy-global-scene'
import { Maximize, Minimize } from 'lucide-react'

interface PresentationShellProps {
  children: React.ReactNode
  chapters: Chapter[]
  title: string
  className?: string
}

function ReactiveGlobalScene() {
  const { activeBlock, intensity } = useActiveChapter()
  return <LazyGlobalScene activeBlock={activeBlock} intensity={intensity} />
}

export function PresentationShell({
  children,
  chapters,
  title,
  className,
}: PresentationShellProps) {
  const { isStage, toggle } = useStageMode()

  return (
    <ActiveChapterProvider>
      <div className={cn('relative', className)}>
        {/* Fixed WebGL background — reacts to chapter */}
        <ReactiveGlobalScene />

        {/* UI overlay layer */}
        <div className="ui-overlay">
          {/* Top bar */}
          <header
            className={cn(
              'fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-500',
              'bg-[rgba(0,0,0,0.4)] backdrop-blur-sm border-b border-[var(--border-subtle)]',
              isStage && 'opacity-0 hover:opacity-100'
            )}
          >
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
              {title}
            </span>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[var(--text-muted)]">
                {chapters.length} capitulos
              </span>
              <button
                onClick={toggle}
                className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
                aria-label={isStage ? 'Sair do modo palco' : 'Modo palco (F)'}
                title={isStage ? 'Sair do modo palco (Esc)' : 'Modo palco (F)'}
              >
                {isStage ? <Minimize size={14} /> : <Maximize size={14} />}
              </button>
            </div>
          </header>

          {/* Chapter navigation — reads from SlideContext */}
          <ChapterNav chapters={chapters} />

          {/* Slide engine */}
          <SlideDeck chapters={chapters}>
            {children}
          </SlideDeck>
        </div>
      </div>
    </ActiveChapterProvider>
  )
}
