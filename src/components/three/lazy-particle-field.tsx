'use client'

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

export function LazyParticleField(props: LazyParticleFieldProps) {
  return <ParticleField {...props} />
}
