'use client'

import { cn } from '@/lib/cn'

type AmbientVariant =
  | 'radial-amber'
  | 'radial-green'
  | 'radial-blue'
  | 'radial-teal'
  | 'radial-purple'
  | 'diagonal-split'
  | 'top-light'
  | 'bottom-fade'
  | 'corner-glow'
  | 'mesh-dark'
  | 'spotlight'
  | 'deep-ocean'

interface AmbientBackgroundProps {
  variant?: AmbientVariant
  className?: string
  opacity?: number
  breathe?: boolean
}

const variantStyles: Record<AmbientVariant, string> = {
  'radial-amber':
    'bg-[radial-gradient(ellipse_at_30%_20%,rgba(52,152,219,0.50)_0%,rgba(52,152,219,0.12)_40%,transparent_70%)]',
  'radial-blue':
    'bg-[radial-gradient(ellipse_at_30%_20%,rgba(52,152,219,0.50)_0%,rgba(52,152,219,0.12)_40%,transparent_70%)]',
  'radial-green':
    'bg-[radial-gradient(ellipse_at_70%_80%,rgba(0,188,212,0.45)_0%,rgba(0,188,212,0.10)_40%,transparent_70%)]',
  'radial-teal':
    'bg-[radial-gradient(ellipse_at_60%_70%,rgba(0,188,212,0.45)_0%,rgba(0,188,212,0.10)_40%,transparent_70%)]',
  'radial-purple':
    'bg-[radial-gradient(ellipse_at_40%_30%,rgba(124,77,255,0.40)_0%,rgba(124,77,255,0.08)_40%,transparent_70%)]',
  'diagonal-split':
    'bg-[linear-gradient(135deg,rgba(52,152,219,0.30)_0%,transparent_50%,rgba(0,188,212,0.30)_100%)]',
  'top-light':
    'bg-[radial-gradient(ellipse_at_50%_-20%,rgba(174,214,241,0.25)_0%,rgba(174,214,241,0.05)_40%,transparent_70%)]',
  'bottom-fade':
    'bg-[linear-gradient(0deg,rgba(10,22,40,1)_0%,transparent_40%)]',
  'corner-glow':
    'bg-[radial-gradient(ellipse_at_0%_0%,rgba(52,152,219,0.45)_0%,rgba(52,152,219,0.10)_40%,transparent_60%)]',
  'mesh-dark':
    'bg-[radial-gradient(ellipse_at_20%_50%,rgba(15,30,53,1)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(20,40,66,1)_0%,transparent_50%)]',
  'spotlight':
    'bg-[radial-gradient(circle_at_50%_30%,rgba(174,214,241,0.20)_0%,rgba(52,152,219,0.08)_30%,transparent_50%)]',
  'deep-ocean':
    'bg-[radial-gradient(ellipse_at_50%_80%,rgba(26,107,168,0.50)_0%,rgba(10,22,40,0.8)_50%,transparent_80%)]',
}

export function AmbientBackground({
  variant = 'radial-blue',
  className,
  opacity,
  breathe = false,
}: AmbientBackgroundProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none mix-blend-screen',
        breathe && 'ambient-breathe',
        variantStyles[variant],
        className
      )}
      style={opacity !== undefined ? { opacity } : undefined}
      aria-hidden="true"
    />
  )
}
