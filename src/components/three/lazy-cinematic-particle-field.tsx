'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const CinematicParticleField = dynamic(
  () => import('./cinematic-particle-field').then((mod) => mod.CinematicParticleField),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0" aria-hidden />,
  }
)

interface LazyCinematicParticleFieldProps {
  className?: string
  color?: string
  count?: number
  interactive?: boolean
  bloomIntensity?: number
  chromaticAberration?: boolean
  vignette?: boolean
}

function useResponsiveCount(desktopCount: number): number {
  const [count, setCount] = useState(desktopCount)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const isLowEnd = navigator.hardwareConcurrency != null && navigator.hardwareConcurrency <= 4
    if (isMobile || isLowEnd) {
      setCount(Math.round(desktopCount * 0.3))
    } else if (window.innerWidth < 1024) {
      setCount(Math.round(desktopCount * 0.5))
    }
  }, [desktopCount])

  return count
}

export function LazyCinematicParticleField({ count = 2000, ...props }: LazyCinematicParticleFieldProps) {
  const responsiveCount = useResponsiveCount(count)
  return <CinematicParticleField count={responsiveCount} {...props} />
}
