'use client'

import { cn } from '@/lib/cn'
import type { Chapter } from '@/lib/types'
import { ChapterNav } from './chapter-nav'

interface PresentationShellProps {
  children: React.ReactNode
  chapters: Chapter[]
  title: string
  className?: string
}

export function PresentationShell({
  children,
  chapters,
  title,
  className,
}: PresentationShellProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-[var(--bg-primary)]/80 backdrop-blur-sm border-b border-[var(--border-subtle)]">
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
          {title}
        </span>
        <span className="font-mono text-xs text-[var(--text-muted)]">
          {chapters.length} capitulos
        </span>
      </header>

      {/* Chapter navigation */}
      <ChapterNav chapters={chapters} />

      {/* Main content */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
