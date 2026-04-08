'use client'

import { cn } from '@/lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'highlight' | 'stat' | 'minimal' | 'accent' | 'glow'
  accentColor?: 'amber' | 'green' | 'blue' | 'teal'
  hover?: boolean
}

export function Card({
  children,
  className,
  variant = 'default',
  accentColor = 'blue',
  hover = true,
}: CardProps) {
  const accentMap = {
    amber: { border: 'var(--accent-blue)', soft: 'var(--accent-blue-soft)', shadow: 'var(--shadow-glow-blue)' },
    green: { border: 'var(--accent-teal)', soft: 'var(--accent-green-soft)', shadow: 'var(--shadow-glow-teal)' },
    blue: { border: 'var(--accent-blue)', soft: 'var(--accent-blue-soft)', shadow: 'var(--shadow-glow-blue)' },
    teal: { border: 'var(--accent-teal)', soft: 'var(--accent-green-soft)', shadow: 'var(--shadow-glow-teal)' },
  }
  const accent = accentMap[accentColor] || accentMap.blue

  const variants = {
    default: 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8',
    bordered: 'bg-transparent border border-[var(--border-default)] rounded-2xl p-8',
    highlight: `border-l-[3px] bg-[var(--bg-surface)]/50 rounded-r-xl p-8 border-l-[${accent.border}]`,
    stat: `bg-[var(--bg-surface)] rounded-2xl p-8 text-center shadow-[${accent.shadow}]`,
    minimal: 'p-6',
    glow: `bg-[var(--bg-surface)] rounded-2xl p-8 border border-[var(--border-subtle)] shadow-[0_0_40px_rgba(52,152,219,0.1),inset_0_0_20px_rgba(52,152,219,0.03)]`,
    accent: `rounded-2xl p-8 border bg-[${accent.soft}] border-[${accent.border}]/20`,
  }

  return (
    <div
      className={cn(
        variants[variant],
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[var(--border-hover)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]',
        className
      )}
    >
      {children}
    </div>
  )
}
