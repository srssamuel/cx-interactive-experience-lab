'use client'

import { useActiveChapter } from '@/lib/active-chapter-context'
import { LazyGlobalScene } from './lazy-global-scene'

export function GlobalSceneRenderer() {
  const { activeBlock, intensity } = useActiveChapter()
  return <LazyGlobalScene activeBlock={activeBlock} intensity={intensity} />
}
