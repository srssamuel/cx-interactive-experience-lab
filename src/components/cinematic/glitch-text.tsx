'use client'

import { useId } from 'react'
import { cn } from '@/lib/cn'

interface GlitchTextProps {
  children: string
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  color?: string
}

export function GlitchText({
  children,
  className,
  intensity = 'medium',
  color = 'var(--accent-amber-vivid)',
}: GlitchTextProps) {
  const id = useId().replace(/:/g, '')

  const intensityMap = {
    low: { offset: '1px', duration: '6s', opacity: 0.3 },
    medium: { offset: '2px', duration: '4s', opacity: 0.4 },
    high: { offset: '3px', duration: '3s', opacity: 0.5 },
  }

  const { offset, duration, opacity } = intensityMap[intensity]

  return (
    <span
      className={cn('relative inline-block', `glitch-${id}`, className)}
      style={{ color }}
    >
      {children}
      <span className={`glitch-${id}-before`} aria-hidden="true">{children}</span>
      <span className={`glitch-${id}-after`} aria-hidden="true">{children}</span>
      <style>{`
        @keyframes glitch-a-${id} {
          0%, 90%, 100% { clip-path: inset(0 0 95% 0); transform: translate(0); }
          5% { clip-path: inset(15% 0 65% 0); transform: translate(${offset}, 0); }
          10% { clip-path: inset(50% 0 20% 0); transform: translate(-${offset}, 0); }
          15% { clip-path: inset(30% 0 40% 0); transform: translate(0); }
        }
        @keyframes glitch-b-${id} {
          0%, 90%, 100% { clip-path: inset(95% 0 0 0); transform: translate(0); }
          5% { clip-path: inset(65% 0 15% 0); transform: translate(-${offset}, 0); }
          10% { clip-path: inset(20% 0 50% 0); transform: translate(${offset}, 0); }
          15% { clip-path: inset(40% 0 30% 0); transform: translate(0); }
        }
        .glitch-${id}-before,
        .glitch-${id}-after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .glitch-${id}-before {
          color: currentColor;
          opacity: ${opacity};
          animation: glitch-a-${id} ${duration} infinite linear;
        }
        .glitch-${id}-after {
          color: currentColor;
          opacity: ${opacity * 0.7};
          animation: glitch-b-${id} ${duration} infinite linear reverse;
        }
        @media (prefers-reduced-motion: reduce) {
          .glitch-${id}-before,
          .glitch-${id}-after {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </span>
  )
}
