'use client'

import dynamic from 'next/dynamic'

const GlobalScene = dynamic(
  () => import('./global-scene').then((mod) => ({ default: mod.GlobalScene })),
  { ssr: false }
)

interface LazyGlobalSceneProps {
  activeBlock?: string
  intensity?: number
}

export function LazyGlobalScene(props: LazyGlobalSceneProps) {
  return <GlobalScene {...props} />
}
