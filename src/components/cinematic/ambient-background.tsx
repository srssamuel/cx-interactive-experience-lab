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
    'bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,135,58,0.08)_0%,transparent_60%)]',
  'radial-blue':
    'bg-[radial-gradient(ellipse_at_30%_20%,rgba(38,198,218,0.06)_0%,transparent_60%)]',
  'radial-green':
    'bg-[radial-gradient(ellipse_at_70%_80%,rgba(74,124,92,0.08)_0%,transparent_60%)]',
  'radial-teal':
    'bg-[radial-gradient(ellipse_at_60%_70%,rgba(38,198,218,0.06)_0%,transparent_60%)]',
  'radial-purple':
    'bg-[radial-gradient(ellipse_at_40%_30%,rgba(124,77,255,0.06)_0%,transparent_60%)]',
  'diagonal-split':
    'bg-[linear-gradient(135deg,rgba(200,135,58,0.04)_0%,transparent_50%,rgba(74,124,92,0.04)_100%)]',
  'top-light':
    'bg-[radial-gradient(ellipse_at_50%_-20%,rgba(200,135,58,0.05)_0%,transparent_50%)]',
  'bottom-fade':
    'bg-[linear-gradient(0deg,rgba(10,22,40,0.4)_0%,transparent_40%)]',
  'corner-glow':
    'bg-[radial-gradient(ellipse_at_0%_0%,rgba(200,135,58,0.06)_0%,transparent_50%)]',
  'mesh-dark':
    'bg-[radial-gradient(ellipse_at_20%_50%,rgba(15,30,53,0.4)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(20,40,66,0.3)_0%,transparent_50%)]',
  'spotlight':
    'bg-[radial-gradient(circle_at_50%_30%,rgba(200,135,58,0.04)_0%,transparent_40%)]',
  'deep-ocean':
    'bg-[radial-gradient(ellipse_at_50%_80%,rgba(74,124,92,0.06)_0%,transparent_60%)]',
}

export function AmbientBackground({
  variant = 'radial-blue',
  className,
  opacity,
  breathe: _breathe = false,
}: AmbientBackgroundProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none',
        variantStyles[variant],
        className
      )}
      style={opacity !== undefined ? { opacity } : undefined}
      aria-hidden="true"
    />
  )
}
