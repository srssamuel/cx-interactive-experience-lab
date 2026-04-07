'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const ParticleField = dynamic(
  () => import('./particle-field').then((mod) => mod.ParticleField),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0" aria-hidden />,
  }
)

interface LazyParticleFieldProps {
  className?: string
  color?: string
  count?: number
  interactive?: boolean
  bloom?: boolean
}

function useResponsiveCount(desktopCount: number): number {
  const [count, setCount] = useState(desktopCount)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const isLowEnd = navigator.hardwareConcurrency != null && navigator.hardwareConcurrency <= 4
    if (isMobile || isLowEnd) {
      setCount(Math.round(desktopCount * 0.35))
    } else if (window.innerWidth < 1024) {
      setCount(Math.round(desktopCount * 0.6))
    }
  }, [desktopCount])

  return count
}

export function LazyParticleField({ count = 1500, ...props }: LazyParticleFieldProps) {
  const responsiveCount = useResponsiveCount(count)
  return <ParticleField count={responsiveCount} {...props} />
}
