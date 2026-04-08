'use client'

import { createContext, useContext, useState, useCallback, useMemo } from 'react'

interface ActiveChapterState {
  activeBlock: string
  slideIndex: number
  totalSlides: number
  intensity: number
}

interface ActiveChapterContextValue extends ActiveChapterState {
  setActiveChapter: (block: string, index: number, total: number) => void
}

const ActiveChapterContext = createContext<ActiveChapterContextValue>({
  activeBlock: 'abertura',
  slideIndex: 0,
  totalSlides: 1,
  intensity: 0.5,
  setActiveChapter: () => {},
})

export function useActiveChapter() {
  return useContext(ActiveChapterContext)
}

export function ActiveChapterProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ActiveChapterState>({
    activeBlock: 'abertura',
    slideIndex: 0,
    totalSlides: 1,
    intensity: 0.5,
  })

  const setActiveChapter = useCallback((block: string, index: number, total: number) => {
    // Intensity ramps up through the presentation — early chapters are calmer, later chapters more intense
    const progress = total > 1 ? index / (total - 1) : 0
    const intensity = 0.3 + progress * 0.5
    setState({ activeBlock: block, slideIndex: index, totalSlides: total, intensity })
  }, [])

  const value = useMemo(
    () => ({ ...state, setActiveChapter }),
    [state, setActiveChapter]
  )

  return (
    <ActiveChapterContext.Provider value={value}>
      {children}
    </ActiveChapterContext.Provider>
  )
}
