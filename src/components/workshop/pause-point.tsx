'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface PausePointProps {
  label?: string
  className?: string
}

export function PausePoint({ label = 'Momento de reflexao', className }: PausePointProps) {
  return (
    <motion.div
      className={cn(
        'flex items-center gap-4 py-8',
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-1 h-px bg-[var(--border-default)]" />
      <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
        {label}
      </span>
      <div className="flex-1 h-px bg-[var(--border-default)]" />
    </motion.div>
  )
}
