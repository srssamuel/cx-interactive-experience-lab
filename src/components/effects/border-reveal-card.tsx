'use client'

import { useRef, useCallback } from 'react'
import { cn } from '@/lib/cn'

interface BorderRevealCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function BorderRevealCard({
  children,
  className,
  glowColor = 'rgba(200, 135, 58, 0.4)',
}: BorderRevealCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--y', `${e.clientY - rect.top}px`)
    },
    []
  )

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative rounded-2xl p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)]',
        'transition-all duration-300',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500',
        className
      )}
      style={{
        // @ts-expect-error CSS custom properties
        '--glow-color': glowColor,
        background: `var(--bg-surface)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), ${glowColor}, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
