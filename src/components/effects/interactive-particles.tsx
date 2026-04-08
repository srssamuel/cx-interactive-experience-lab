'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'
import { cn } from '@/lib/cn'

type ParticlePreset = 'constellation' | 'fireflies' | 'neural-network' | 'snow' | 'rising-bubbles'

interface InteractiveParticlesProps {
  className?: string
  preset?: ParticlePreset
  color?: string
  count?: number
  speed?: number
  interactive?: boolean
}

const presets: Record<ParticlePreset, (color: string, count: number, speed: number, interactive: boolean) => ISourceOptions> = {
  constellation: (color, count, speed, interactive) => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: count, density: { enable: true } },
      color: { value: color },
      links: {
        enable: true,
        color,
        distance: 150,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: speed * 0.5,
        direction: 'none' as const,
        outModes: { default: 'bounce' as const },
      },
      opacity: { value: { min: 0.1, max: 0.5 } },
      size: { value: { min: 1, max: 3 } },
      shape: { type: 'circle' },
    },
    interactivity: {
      events: {
        onHover: { enable: interactive, mode: 'grab' as const },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.4 } },
      },
    },
    detectRetina: true,
  }),

  fireflies: (color, count, speed) => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: count },
      color: { value: color },
      move: {
        enable: true,
        speed: speed * 0.3,
        direction: 'none' as const,
        random: true,
        outModes: { default: 'out' as const },
      },
      opacity: {
        value: { min: 0.05, max: 0.6 },
        animation: { enable: true, speed: 0.8, sync: false },
      },
      size: {
        value: { min: 1, max: 4 },
        animation: { enable: true, speed: 2, sync: false },
      },
      shape: { type: 'circle' },
      shadow: {
        enable: true,
        color,
        blur: 10,
      },
    },
    detectRetina: true,
  }),

  'neural-network': (color, count, speed, interactive) => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: count, density: { enable: true } },
      color: { value: color },
      links: {
        enable: true,
        color,
        distance: 120,
        opacity: 0.2,
        width: 1,
        triangles: { enable: true, opacity: 0.03 },
      },
      move: {
        enable: true,
        speed: speed * 0.4,
        direction: 'none' as const,
        outModes: { default: 'bounce' as const },
      },
      opacity: { value: { min: 0.2, max: 0.7 } },
      size: { value: { min: 1, max: 2.5 } },
      shape: { type: 'circle' },
    },
    interactivity: {
      events: {
        onHover: { enable: interactive, mode: 'repulse' as const },
      },
      modes: {
        repulse: { distance: 150, speed: 0.5 },
      },
    },
    detectRetina: true,
  }),

  snow: (color, count, speed) => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: count },
      color: { value: color },
      move: {
        enable: true,
        speed: speed * 0.8,
        direction: 'bottom' as const,
        outModes: { default: 'out' as const },
        straight: false,
      },
      opacity: { value: { min: 0.1, max: 0.4 } },
      size: { value: { min: 1, max: 5 } },
      shape: { type: 'circle' },
      wobble: {
        enable: true,
        distance: 10,
        speed: 5,
      },
    },
    detectRetina: true,
  }),

  'rising-bubbles': (color, count, speed) => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: count },
      color: { value: color },
      move: {
        enable: true,
        speed: speed * 0.6,
        direction: 'top' as const,
        outModes: { default: 'out' as const },
        straight: false,
      },
      opacity: {
        value: { min: 0.05, max: 0.35 },
        animation: { enable: true, speed: 0.5, sync: false },
      },
      size: {
        value: { min: 2, max: 8 },
        animation: { enable: true, speed: 3, sync: false },
      },
      shape: { type: 'circle' },
    },
    detectRetina: true,
  }),
}

export function InteractiveParticles({
  className,
  preset = 'constellation',
  color = '#3498DB',
  count = 60,
  speed = 1,
  interactive = true,
}: InteractiveParticlesProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(
    () => presets[preset](color, count, speed, interactive),
    [preset, color, count, speed, interactive]
  )

  if (!ready) return null

  return (
    <div className={cn('absolute inset-0 z-[1] pointer-events-none', className)}>
      <Particles
        id={`particles-${preset}`}
        options={options}
        className="w-full h-full"
      />
    </div>
  )
}
