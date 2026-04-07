'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  speed?: number // 0.1 = subtle, 0.5 = dramatic
  direction?: 'up' | 'down'
}

export function ParallaxContainer({
  children,
  className,
  speed = 0.2,
  direction = 'up',
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const factor = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [factor * speed * 100, factor * -speed * 100])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
