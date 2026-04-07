'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/cn'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  radius?: number
  onClick?: () => void
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  radius = 100,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const dist = Math.sqrt(distX * distX + distY * distY)

      if (dist < radius) {
        x.set(distX * strength)
        y.set(distY * strength)
      }
    },
    [x, y, strength, radius]
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn('inline-block', className)}
      style={{
        x: springX,
        y: springY,
        scale: isHovered ? 1.02 : 1,
      }}
    >
      {children}
    </motion.div>
  )
}
