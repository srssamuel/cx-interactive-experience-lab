'use client'

import { cn } from '@/lib/cn'

interface TypographyProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function DisplayHeading({ children, className, as: Tag = 'h1' }: TypographyProps) {
  return (
    <Tag
      className={cn(
        'font-display leading-[1.05] tracking-tight',
        className
      )}
      style={{ fontSize: 'var(--text-hero)' }}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ children, className, as: Tag = 'h2' }: TypographyProps) {
  return (
    <Tag
      className={cn(
        'font-display leading-[1.1] tracking-tight',
        className
      )}
      style={{ fontSize: 'var(--text-display)' }}
    >
      {children}
    </Tag>
  )
}

export function SubHeading({ children, className, as: Tag = 'h3' }: TypographyProps) {
  return (
    <Tag
      className={cn(
        'leading-[1.3] font-medium',
        className
      )}
      style={{ fontSize: 'var(--text-heading)' }}
    >
      {children}
    </Tag>
  )
}

export function Body({ children, className, as: Tag = 'p' }: TypographyProps) {
  return (
    <Tag
      className={cn(
        'leading-[1.7] text-[var(--text-secondary)]',
        className
      )}
      style={{ fontSize: 'var(--text-body)' }}
    >
      {children}
    </Tag>
  )
}

export function Overline({ children, className }: Omit<TypographyProps, 'as'>) {
  return (
    <span className={cn('overline', className)}>
      {children}
    </span>
  )
}

export function StatNumber({ children, className }: Omit<TypographyProps, 'as'>) {
  return (
    <span
      className={cn('font-display text-[var(--accent-amber)] leading-none', className)}
      style={{ fontSize: 'var(--text-hero)' }}
    >
      {children}
    </span>
  )
}
