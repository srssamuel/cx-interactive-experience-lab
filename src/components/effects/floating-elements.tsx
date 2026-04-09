'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface FloatingElementsProps {
  className?: string
  count?: number
  color?: string
}

const elements = [
  { size: 16, x: '12%', y: '20%', duration: 5, delay: 0 },
  { size: 22, x: '85%', y: '15%', duration: 6.5, delay: 0.5 },
  { size: 12, x: '70%', y: '75%', duration: 4.5, delay: 1 },
  { size: 28, x: '25%', y: '80%', duration: 5.5, delay: 0.3 },
  { size: 18, x: '55%', y: '35%', duration: 7, delay: 0.8 },
  { size: 32, x: '90%', y: '55%', duration: 6, delay: 0.2 },
  { size: 14, x: '40%', y: '10%', duration: 5.2, delay: 1.2 },
  { size: 20, x: '8%', y: '60%', duration: 4.8, delay: 0.6 },
]

export function FloatingElements({
  className,
  count = 6,
  color = 'var(--accent-amber)',
}: FloatingElementsProps) {
  const visibleElements = elements.slice(0, count)

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {visibleElements.map((el, i) => (
        <motion.div
          key={`float-${el.x}-${el.y}`}
          className="absolute rounded-full"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            backgroundColor: color,
            opacity: 0.5 + (i % 3) * 0.15,
            boxShadow: `0 0 ${el.size * 3}px ${color}, 0 0 ${el.size * 6}px ${color}`,
            filter: `blur(${el.size > 20 ? 3 : 1.5}px)`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.2, 1],
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
