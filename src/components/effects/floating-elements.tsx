'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface FloatingElementsProps {
  className?: string
  count?: number
  color?: string
}

const elements = [
  { size: 3, x: '12%', y: '20%', duration: 8, delay: 0 },
  { size: 4, x: '85%', y: '15%', duration: 10, delay: 0.5 },
  { size: 2, x: '70%', y: '75%', duration: 7, delay: 1 },
  { size: 5, x: '25%', y: '80%', duration: 9, delay: 0.3 },
  { size: 3, x: '55%', y: '35%', duration: 11, delay: 0.8 },
  { size: 4, x: '90%', y: '55%', duration: 8.5, delay: 0.2 },
  { size: 2, x: '40%', y: '10%', duration: 9.5, delay: 1.2 },
  { size: 3, x: '8%', y: '60%', duration: 7.5, delay: 0.6 },
]

export function FloatingElements({
  className,
  count = 6,
  color = 'var(--accent-amber)',
}: FloatingElementsProps) {
  const visibleElements = elements.slice(0, count)

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {visibleElements.map((el) => (
        <motion.div
          key={`float-${el.x}-${el.y}`}
          className="absolute rounded-full"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            backgroundColor: color,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
