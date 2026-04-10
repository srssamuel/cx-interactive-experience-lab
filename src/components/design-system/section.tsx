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
  | 'blue-glow'
  | 'purple-glow'
  | 'vignette'

type SectionSpacing = 'compact' | 'normal' | 'generous' | 'dramatic'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  bg?: SectionBg
  fullHeight?: boolean
  narrow?: boolean
  wide?: boolean
  spacing?: SectionSpacing
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, bg = 'primary', fullHeight, narrow, wide, spacing = 'normal' }, ref) => {
    const spacingClasses = {
      compact: 'py-16 md:py-20',
      normal: 'py-24 md:py-32',
      generous: 'py-32 md:py-40',
      dramatic: 'py-40 md:py-56',
    }

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          `section-bg-${bg}`,
          'relative min-h-[100dvh] flex flex-col justify-center overflow-hidden',
          fullHeight && 'section-fullscreen',
          className
        )}
      >
        <div
          className={cn(
            'mx-auto w-full px-6 md:px-12',
            spacingClasses[spacing],
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
