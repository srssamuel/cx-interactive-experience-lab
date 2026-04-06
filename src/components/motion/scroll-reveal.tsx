'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  duration?: number
}

const directionMap = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance,
  duration = 0.7,
}: ScrollRevealProps) {
  const offset = directionMap[direction]
  const d = distance ?? (direction === 'up' || direction === 'down' ? offset.y : offset.x)

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        y: direction === 'up' ? Math.abs(d) : direction === 'down' ? -Math.abs(d) : 0,
        x: direction === 'left' ? Math.abs(d) : direction === 'right' ? -Math.abs(d) : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
