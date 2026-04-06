'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface StaggerGroupProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  baseDelay?: number
}

const containerVariants = {
  hidden: {},
  visible: (custom: { stagger: number; base: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.base,
    },
  }),
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.08,
  baseDelay = 0,
}: StaggerGroupProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      custom={{ stagger: staggerDelay, base: baseDelay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
