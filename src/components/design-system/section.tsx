'use client'

import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

type SectionBg =
  | 'primary'
  | 'surface'
  | 'elevated'
  | 'gradient-down'
  | 'gradient-up'
  | 'amber-glow'
  | 'green-glow'
  | 'vignette'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  bg?: SectionBg
  fullHeight?: boolean
  narrow?: boolean
  wide?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, bg = 'primary', fullHeight, narrow, wide }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          `section-bg-${bg}`,
          'relative',
          fullHeight && 'min-h-screen flex flex-col justify-center',
          className
        )}
      >
        <div
          className={cn(
            'mx-auto w-full px-6 md:px-12 py-24 md:py-32',
            narrow && 'max-w-[var(--max-width-content)]',
            wide && 'max-w-[var(--max-width-full)]',
            !narrow && !wide && 'max-w-[var(--max-width-wide)]'
          )}
        >
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
  wide?: boolean
}

export function Container({ children, className, narrow, wide }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-12',
        narrow && 'max-w-[var(--max-width-content)]',
        wide && 'max-w-[var(--max-width-full)]',
        !narrow && !wide && 'max-w-[var(--max-width-wide)]',
        className
      )}
    >
      {children}
    </div>
  )
}
