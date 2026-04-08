'use client'

import { cn } from '@/lib/cn'

interface GlitchTextProps {
  children: string
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  color?: string
}

/**
 * Text with animated glitch/distortion effect.
 * Uses CSS clip-path and pseudo-elements for the glitch look.
 */
export function GlitchText({
  children,
  className,
  intensity = 'medium',
  color = 'var(--accent-blue-vivid)',
}: GlitchTextProps) {
  const intensityMap = {
    low: { offset: '1px', duration: '4s' },
    medium: { offset: '3px', duration: '3s' },
    high: { offset: '5px', duration: '2s' },
  }

  const { offset, duration } = intensityMap[intensity]

  return (
    <span
      className={cn('relative inline-block', className)}
      style={{ color }}
      data-text={children}
    >
      {children}
      <style>{`
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 85% 0); transform: translate(0); }
          10% { clip-path: inset(15% 0 65% 0); transform: translate(${offset}, -1px); }
          20% { clip-path: inset(50% 0 20% 0); transform: translate(-${offset}, 1px); }
          30% { clip-path: inset(30% 0 40% 0); transform: translate(0); }
          40% { clip-path: inset(70% 0 5% 0); transform: translate(${offset}, 0); }
          50% { clip-path: inset(10% 0 75% 0); transform: translate(-${offset}, 1px); }
          60% { clip-path: inset(45% 0 30% 0); transform: translate(0); }
          70% { clip-path: inset(60% 0 15% 0); transform: translate(${offset}, -1px); }
          80% { clip-path: inset(25% 0 55% 0); transform: translate(-${offset}, 0); }
          90% { clip-path: inset(80% 0 0% 0); transform: translate(0); }
        }
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(85% 0 0 0); transform: translate(0); }
          10% { clip-path: inset(65% 0 15% 0); transform: translate(-${offset}, 1px); }
          20% { clip-path: inset(20% 0 50% 0); transform: translate(${offset}, -1px); }
          30% { clip-path: inset(40% 0 30% 0); transform: translate(0); }
          40% { clip-path: inset(5% 0 70% 0); transform: translate(-${offset}, 0); }
          50% { clip-path: inset(75% 0 10% 0); transform: translate(${offset}, -1px); }
          60% { clip-path: inset(30% 0 45% 0); transform: translate(0); }
          70% { clip-path: inset(15% 0 60% 0); transform: translate(-${offset}, 1px); }
          80% { clip-path: inset(55% 0 25% 0); transform: translate(${offset}, 0); }
          90% { clip-path: inset(0% 0 80% 0); transform: translate(0); }
        }
        [data-text="${children}"]::before,
        [data-text="${children}"]::after {
          content: '${children}';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        [data-text="${children}"]::before {
          color: #E74C3C;
          animation: glitch-1 ${duration} infinite linear;
          mix-blend-mode: screen;
        }
        [data-text="${children}"]::after {
          color: #00BCD4;
          animation: glitch-2 ${duration} infinite linear reverse;
          mix-blend-mode: screen;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-text="${children}"]::before,
          [data-text="${children}"]::after {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </span>
  )
}
