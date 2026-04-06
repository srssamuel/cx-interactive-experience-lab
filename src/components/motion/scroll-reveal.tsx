'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type RevealVariant = 'fade' | 'scale' | 'blur' | 'clip-up' | 'slide-left' | 'slide-right' | 'rise'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  duration?: number
  variant?: RevealVariant
}

const directionMap = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
}

function getVariantProps(variant: RevealVariant) {
  switch (variant) {
    case 'scale':
      return {
        initial: { opacity: 0, scale: 0.85, filter: 'blur(8px)' },
        whileInView: { opacity: 1, scale: 1, filter: 'blur(0px)' },
      }
    case 'blur':
      return {
        initial: { opacity: 0, filter: 'blur(12px)', y: 10 },
        whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
      }
    case 'clip-up':
      return {
        initial: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        whileInView: { opacity: 1, clipPath: 'inset(0% 0 0 0)' },
      }
    case 'slide-left':
      return {
        initial: { opacity: 0, x: 60 },
        whileInView: { opacity: 1, x: 0 },
      }
    case 'slide-right':
      return {
        initial: { opacity: 0, x: -60 },
        whileInView: { opacity: 1, x: 0 },
      }
    case 'rise':
      return {
        initial: { opacity: 0, y: 50, rotateX: 15 },
        whileInView: { opacity: 1, y: 0, rotateX: 0 },
      }
    default:
      return null
  }
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance,
  duration = 0.7,
  variant = 'fade',
}: ScrollRevealProps) {
  const variantProps = getVariantProps(variant)

  if (variantProps) {
    return (
      <motion.div
        className={cn(className)}
        initial={variantProps.initial}
        whileInView={variantProps.whileInView}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    )
  }

  // Default 'fade' with direction
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
