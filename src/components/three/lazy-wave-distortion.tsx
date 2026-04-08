'use client'

import dynamic from 'next/dynamic'

const WaveDistortion = dynamic(
  () => import('./wave-distortion').then((mod) => mod.WaveDistortion),
  { ssr: false }
)

export { WaveDistortion as LazyWaveDistortion }
