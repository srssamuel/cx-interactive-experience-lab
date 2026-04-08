'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { cn } from '@/lib/cn'

interface SpotlightProps {
  children: React.ReactNode
  className?: string
  color?: string
  size?: number
}

export function Spotlight({
  children,
  className,
  color = 'rgba(52, 152, 219, 0.30)',
  size = 800,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    setPrefersReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    },
    []
  )

  if (prefersReduced) {
    return <div className={cn('relative', className)}>{children}</div>
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('relative', className)}
    >
      {/* Ambient glow — always visible */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${color}, transparent 60%)`,
          opacity: 0.8,
        }}
      />
      {/* Spotlight gradient layer — follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${color}, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
