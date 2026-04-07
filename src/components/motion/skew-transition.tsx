'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface SkewTransitionProps {
  className?: string
  color?: 'primary' | 'surface' | 'amber' | 'green' | 'purple'
  direction?: 'down' | 'up'
}

const colors = {
  primary: 'bg-[var(--bg-primary)]',
  surface: 'bg-[var(--bg-surface)]',
  amber: 'bg-[var(--accent-amber)]/25',
  green: 'bg-[var(--accent-green)]/25',
  purple: 'bg-[var(--accent-purple)]/25',
}

export function SkewTransition({
  className,
  color = 'primary',
  direction = 'down',
}: SkewTransitionProps) {
  const skewDeg = direction === 'down' ? '-2deg' : '2deg'

  return (
    <div className={cn('relative w-full overflow-hidden', className)} aria-hidden>
      <motion.div
        className={cn('w-full h-24 md:h-32', colors[color])}
        style={{ transformOrigin: direction === 'down' ? 'top left' : 'bottom right' }}
        initial={{ skewY: '0deg', opacity: 0 }}
        whileInView={{ skewY: skewDeg, opacity: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}
