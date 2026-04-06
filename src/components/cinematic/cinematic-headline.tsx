'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface CinematicHeadlineProps {
  overline?: string
  headline: string
  subline?: string
  className?: string
  align?: 'left' | 'center'
  size?: 'hero' | 'display' | 'section'
}

export function CinematicHeadline({
  overline,
  headline,
  subline,
  className,
  align = 'center',
  size = 'display',
}: CinematicHeadlineProps) {
  const sizeMap = {
    hero: 'var(--text-hero)',
    display: 'var(--text-display)',
    section: 'var(--text-heading)',
  }

  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'text-center',
        className
      )}
    >
      {overline && (
        <motion.span
          className="overline block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {overline}
        </motion.span>
      )}
      <motion.h2
        className="font-display leading-[1.05] tracking-tight"
        style={{ fontSize: sizeMap[size] }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      >
        {headline}
      </motion.h2>
      {subline && (
        <motion.p
          className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-[600px]"
          style={align === 'center' ? { marginInline: 'auto' } : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {subline}
        </motion.p>
      )}
    </div>
  )
}
