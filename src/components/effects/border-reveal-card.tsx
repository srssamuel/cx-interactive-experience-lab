'use client'

import { useRef, useCallback, useState } from 'react'
import { cn } from '@/lib/cn'

interface BorderRevealCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  tilt?: boolean
  maxTilt?: number
}

export function BorderRevealCard({
  children,
  className,
  glowColor = 'rgba(200, 135, 58, 0.4)',
  tilt = true,
  maxTilt = 5,
}: BorderRevealCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty('--x', `${x}px`)
      card.style.setProperty('--y', `${y}px`)

      if (tilt) {
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateY = ((x - centerX) / centerX) * maxTilt
        const rotateX = -((y - centerY) / centerY) * maxTilt
        setTiltStyle({ rotateX, rotateY })
      }
    },
    [tilt, maxTilt]
  )

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({ rotateX: 0, rotateY: 0 })
    setIsHovered(false)
  }, [])

  const hasTilt = tiltStyle.rotateX !== 0 || tiltStyle.rotateY !== 0

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative rounded-2xl p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)]',
        'transition-[box-shadow] duration-300',
        'hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]',
        'will-change-transform',
        className
      )}
      style={{
        transform: tilt
          ? `perspective(600px) rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg) scale(${hasTilt ? 1.02 : 1})`
          : undefined,
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
      }}
    >
      {/* Border glow — follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), ${glowColor}, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Inner glow trail — follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(300px at var(--x, 50%) var(--y, 50%), ${glowColor.replace(/[\d.]+\)$/, '0.04)')}, transparent)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
