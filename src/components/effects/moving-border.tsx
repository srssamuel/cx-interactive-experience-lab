'use client'

import { cn } from '@/lib/cn'

interface MovingBorderProps {
  children: React.ReactNode
  className?: string
  borderColor?: string
  duration?: number
  borderWidth?: number
}

export function MovingBorder({
  children,
  className,
  borderColor = 'var(--accent-amber)',
  duration = 4,
  borderWidth = 1,
}: MovingBorderProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Rotating conic gradient border */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          padding: `${borderWidth}px`,
          background: `conic-gradient(from var(--angle), transparent 60%, ${borderColor} 80%, transparent 100%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          animation: `moving-border-rotate ${duration}s linear infinite`,
        }}
      />
      {/* Content */}
      <div className="relative z-[1]">{children}</div>
      <style>{`
        @keyframes moving-border-rotate {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }
      `}</style>
    </div>
  )
}
