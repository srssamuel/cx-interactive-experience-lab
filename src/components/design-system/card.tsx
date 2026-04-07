'use client'

import { cn } from '@/lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'highlight' | 'stat' | 'minimal' | 'accent' | 'glow'
  accentColor?: 'amber' | 'green'
  hover?: boolean
}

export function Card({
  children,
  className,
  variant = 'default',
  accentColor = 'amber',
  hover = true,
}: CardProps) {
  const variants = {
    default: 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8',
    bordered: 'bg-transparent border border-[var(--border-default)] rounded-2xl p-8',
    highlight: cn(
      'border-l-[3px] bg-[var(--bg-surface)]/50 rounded-r-xl p-8',
      accentColor === 'amber' ? 'border-l-[var(--accent-amber)]' : 'border-l-[var(--accent-green)]'
    ),
    stat: cn(
      'bg-[var(--bg-surface)] rounded-2xl p-8 text-center',
      accentColor === 'amber' ? 'shadow-[var(--shadow-glow-amber)]' : 'shadow-[var(--shadow-glow-green)]'
    ),
    minimal: 'p-6',
    glow: cn(
      'bg-[var(--bg-surface)] rounded-2xl p-8 border border-[var(--border-subtle)]',
      accentColor === 'amber'
        ? 'shadow-[0_0_40px_rgba(200,135,58,0.1),inset_0_0_20px_rgba(200,135,58,0.03)]'
        : 'shadow-[0_0_40px_rgba(74,124,92,0.1),inset_0_0_20px_rgba(74,124,92,0.03)]'
    ),
    accent: cn(
      'rounded-2xl p-8 border',
      accentColor === 'amber'
        ? 'bg-[var(--accent-amber-soft)] border-[var(--accent-amber)]/20'
        : 'bg-[var(--accent-green-soft)] border-[var(--accent-green)]/20'
    ),
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
