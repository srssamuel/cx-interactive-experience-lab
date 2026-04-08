'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface HeroOrbProps {
  className?: string
  color?: string
  size?: number
  secondaryColor?: string
}

export function HeroOrb({
  className,
  color = '#3498DB',
  secondaryColor = '#5DADE2',
  size = 500,
}: HeroOrbProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Primary orb — large pulsing glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: '50%',
          top: '50%',
          marginLeft: -size / 2,
          marginTop: -size / 2,
          background: `radial-gradient(circle, ${color} 0%, ${color}88 25%, ${color}44 50%, transparent 70%)`,
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Secondary orb — offset, slower, different color */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          left: '35%',
          top: '40%',
          marginLeft: -(size * 0.7) / 2,
          marginTop: -(size * 0.7) / 2,
          background: `radial-gradient(circle, ${secondaryColor} 0%, ${secondaryColor}66 30%, transparent 65%)`,
          filter: 'blur(25px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Accent ring — subtle rotating ring of light */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: size * 1.2,
          height: size * 1.2,
          left: '50%',
          top: '50%',
          marginLeft: -(size * 1.2) / 2,
          marginTop: -(size * 1.2) / 2,
          borderColor: `${color}22`,
          boxShadow: `inset 0 0 60px ${color}15, 0 0 80px ${color}10`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </div>
  )
}
