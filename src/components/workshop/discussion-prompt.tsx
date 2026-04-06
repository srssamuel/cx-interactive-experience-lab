'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface DiscussionPromptProps {
  question: string
  context?: string
  className?: string
}

export function DiscussionPrompt({ question, context, className }: DiscussionPromptProps) {
  return (
    <motion.div
      className={cn(
        'border border-[var(--accent-amber)]/30 bg-[var(--accent-amber-soft)] rounded-2xl p-8 md:p-12',
        className
      )}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <span className="overline text-[var(--accent-amber)] mb-4 block">
        Pausa para discussao
      </span>
      <p className="font-display text-2xl md:text-3xl leading-[1.2] text-[var(--text-primary)]">
        {question}
      </p>
      {context && (
        <p className="mt-4 text-[var(--text-secondary)] text-base leading-relaxed">
          {context}
        </p>
      )}
    </motion.div>
  )
}
