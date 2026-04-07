'use client'

import { useState, useEffect, useCallback } from 'react'

export function useStageMode() {
  const [isStage, setIsStage] = useState(false)

  const toggle = useCallback(() => {
    setIsStage((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.requestFullscreen?.().catch(() => {})
        document.body.classList.add('stage-mode')
      } else {
        document.exitFullscreen?.().catch(() => {})
        document.body.classList.remove('stage-mode')
      }
      return next
    })
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // F key toggles stage mode (not when typing in inputs)
      if (e.key === 'f' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const tag = (e.target as HTMLElement)?.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
        e.preventDefault()
        toggle()
      }
      // Escape exits stage mode
      if (e.key === 'Escape' && isStage) {
        setIsStage(false)
        document.body.classList.remove('stage-mode')
      }
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isStage) {
        setIsStage(false)
        document.body.classList.remove('stage-mode')
      }
    }

    window.addEventListener('keydown', handleKey)
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [isStage, toggle])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('stage-mode')
    }
  }, [])

  return { isStage, toggle }
}
