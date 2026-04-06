'use client'

import { cn } from '@/lib/cn'

type AmbientVariant =
  | 'radial-amber'
  | 'radial-green'
  | 'diagonal-split'
  | 'top-light'
  | 'bottom-fade'
  | 'corner-glow'
  | 'mesh-dark'
  | 'spotlight'

interface AmbientBackgroundProps {
  variant?: AmbientVariant
  className?: string
  opacity?: number
}

const variantStyles: Record<AmbientVariant, string> = {
  'radial-amber':
    'bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,135,58,0.08)_0%,transparent_60%)]',
  'radial-green':
    'bg-[radial-gradient(ellipse_at_70%_80%,rgba(74,124,92,0.08)_0%,transparent_60%)]',
  'diagonal-split':
    'bg-[linear-gradient(135deg,rgba(200,135,58,0.04)_0%,transparent_50%,rgba(74,124,92,0.04)_100%)]',
  'top-light':
    'bg-[radial-gradient(ellipse_at_50%_-20%,rgba(232,237,242,0.04)_0%,transparent_60%)]',
  'bottom-fade':
    'bg-[linear-gradient(0deg,rgba(12,15,20,1)_0%,transparent_40%)]',
  'corner-glow':
    'bg-[radial-gradient(ellipse_at_0%_0%,rgba(200,135,58,0.06)_0%,transparent_50%)]',
  'mesh-dark':
    'bg-[radial-gradient(ellipse_at_20%_50%,rgba(24,28,36,1)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(18,21,28,1)_0%,transparent_50%)]',
  'spotlight':
    'bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.03)_0%,transparent_40%)]',
}

export function AmbientBackground({
  variant = 'radial-amber',
  className,
  opacity,
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
