'use client'

import dynamic from 'next/dynamic'

const ParticleField = dynamic(
  () => import('./particle-field').then((mod) => mod.ParticleField),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0" aria-hidden />,
  }
)

export function LazyParticleField(props: { className?: string; color?: string; count?: number }) {
  return <ParticleField {...props} />
}
