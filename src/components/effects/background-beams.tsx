'use client'

import { cn } from '@/lib/cn'

interface BackgroundBeamsProps {
  className?: string
  color?: string
  beamCount?: number
}

export function BackgroundBeams({
  className,
  color = 'rgba(200, 135, 58, 0.12)',
  beamCount = 3,
}: BackgroundBeamsProps) {
  const beams = Array.from({ length: beamCount }, (_, i) => {
    const yStart = 20 + (i * 60) / beamCount + Math.sin(i * 1.5) * 10
    const yEnd = 30 + (i * 50) / beamCount + Math.cos(i * 2) * 15
    const cp1x = 25 + i * 8
    const cp1y = yStart + (i % 2 === 0 ? -20 : 20)
    const cp2x = 75 - i * 5
    const cp2y = yEnd + (i % 2 === 0 ? 15 : -25)
    return {
      d: `M 0 ${yStart} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, 100 ${yEnd}`,
      duration: 12 + i * 3,
      delay: i * 0.8,
      dashArray: 20 + i * 8,
    }
  })

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {beams.map((beam, i) => (
          <path
            key={i}
            d={beam.d}
            stroke={color}
            strokeWidth="0.3"
            filter="url(#beam-soft-blur)"
            strokeDasharray={`${beam.dashArray} ${beam.dashArray * 3}`}
            style={{
              animation: `beam-dash ${beam.duration}s linear ${beam.delay}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}
        <defs>
          <filter id="beam-soft-blur">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>
      </svg>
      <style>{`
        @keyframes beam-dash {
          from { stroke-dashoffset: 80; }
          to { stroke-dashoffset: -80; }
        }
      `}</style>
    </div>
  )
}
