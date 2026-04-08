'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface PipelineStage {
  label: string
  description: string
}

interface DataPipelineProps {
  stages: PipelineStage[]
  className?: string
}

const PARTICLE_COUNT_PER_SEGMENT = 6

function useAnimationFrame(callback: (time: number) => void, active = true) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    if (!active) return
    let frameId: number
    let startTime: number | null = null

    function loop(timestamp: number) {
      if (startTime === null) startTime = timestamp
      callbackRef.current((timestamp - startTime) / 1000)
      frameId = requestAnimationFrame(loop)
    }

    frameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameId)
  }, [active])
}

export function DataPipeline({ stages, className }: DataPipelineProps) {
  const [time, setTime] = useState(0)

  useAnimationFrame((t) => {
    setTime(t)
  })

  const stageCount = stages.length
  const viewBoxWidth = 1000
  const viewBoxHeight = 280
  const stageWidth = 130
  const stageHeight = 60
  const arrowGap = (viewBoxWidth - stageCount * stageWidth) / (stageCount + 1)
  const stageY = 90

  // Calculate stage positions
  const stagePositions = stages.map((_, idx) => ({
    x: arrowGap + idx * (stageWidth + arrowGap),
    y: stageY,
    centerX: arrowGap + idx * (stageWidth + arrowGap) + stageWidth / 2,
    centerY: stageY + stageHeight / 2,
  }))

  // Colors from dark/muted to bright/vivid as pipeline flows
  const stageColors = stages.map((_, idx) => {
    const t = idx / (stageCount - 1)
    // Interpolate from dim teal to vivid blue
    const r = Math.round(20 + t * 32)
    const g = Math.round(60 + t * 120)
    const b = Math.round(100 + t * 119)
    return `rgb(${r}, ${g}, ${b})`
  })

  const stageGlowColors = stages.map((_, idx) => {
    const t = idx / (stageCount - 1)
    const r = Math.round(20 + t * 72)
    const g = Math.round(80 + t * 133)
    const b = Math.round(140 + t * 79)
    return `rgba(${r}, ${g}, ${b}, 0.5)`
  })

  const stageOpacities = stages.map((_, idx) => {
    return 0.45 + (idx / (stageCount - 1)) * 0.55
  })

  // Particle positions along connecting arrows
  function getArrowParticles(
    fromX: number,
    toX: number,
    y: number,
    count: number,
    t: number,
    segIdx: number
  ) {
    const particles: Array<{ x: number; y: number; opacity: number; size: number }> = []
    for (let i = 0; i < count; i++) {
      const phase = (t * 0.5 + i / count + segIdx * 0.15) % 1
      const px = fromX + (toX - fromX) * phase
      // Slight wave in y
      const py = y + Math.sin(phase * Math.PI * 2 + t * 3) * 4
      const fadeIn = Math.min(phase * 3, 1)
      const fadeOut = Math.min((1 - phase) * 3, 1)
      const size = 2 + Math.sin(phase * Math.PI) * 1.5
      particles.push({ x: px, y: py, opacity: fadeIn * fadeOut * 0.9, size })
    }
    return particles
  }

  const arrowY = stageY + stageHeight / 2

  return (
    <div className={cn('relative w-full max-w-[1100px] mx-auto', className)}>
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 0 30px rgba(52, 152, 219, 0.1))' }}
      >
        <defs>
          {/* Glow filter for stages */}
          <filter id="dp-stage-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Particle glow */}
          <filter id="dp-particle-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>

          {/* Arrow glow */}
          <filter id="dp-arrow-glow" x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Background gradient from left (dark) to right (bright) */}
          <linearGradient id="dp-bg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(10, 22, 40, 0)" />
            <stop offset="30%" stopColor="rgba(15, 30, 53, 0.3)" />
            <stop offset="100%" stopColor="rgba(52, 152, 219, 0.08)" />
          </linearGradient>

          {/* Arrow gradient per segment */}
          {stagePositions.slice(0, -1).map((pos, idx) => (
            <linearGradient
              key={`arrow-grad-${idx}`}
              id={`dp-arrow-grad-${idx}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={stageColors[idx]} stopOpacity={0.5} />
              <stop offset="100%" stopColor={stageColors[idx + 1]} stopOpacity={0.8} />
            </linearGradient>
          ))}
        </defs>

        {/* Background ambient glow */}
        <rect
          x="0"
          y="0"
          width={viewBoxWidth}
          height={viewBoxHeight}
          fill="url(#dp-bg-grad)"
          rx="8"
        />

        {/* Connecting arrows between stages */}
        {stagePositions.slice(0, -1).map((pos, idx) => {
          const nextPos = stagePositions[idx + 1]
          const fromX = pos.x + stageWidth
          const toX = nextPos.x

          return (
            <g key={`arrow-${idx}`}>
              {/* Wide ambient glow behind arrow */}
              <line
                x1={fromX + 4}
                y1={arrowY}
                x2={toX - 4}
                y2={arrowY}
                stroke={stageGlowColors[idx]}
                strokeWidth={10}
                strokeLinecap="round"
                opacity={0.2}
                filter="url(#dp-arrow-glow)"
              />
              {/* Base arrow line */}
              <line
                x1={fromX + 4}
                y1={arrowY}
                x2={toX - 4}
                y2={arrowY}
                stroke={`url(#dp-arrow-grad-${idx})`}
                strokeWidth={2.5}
                strokeLinecap="round"
              />
              {/* Animated flowing dashes */}
              <line
                x1={fromX + 4}
                y1={arrowY}
                x2={toX - 4}
                y2={arrowY}
                stroke={stageColors[idx + 1]}
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="8 16"
                strokeDashoffset={-time * 60}
                opacity={0.7}
                filter="url(#dp-arrow-glow)"
              />
              {/* Arrow head */}
              <polygon
                points={`${toX - 4},${arrowY - 8} ${toX + 4},${arrowY} ${toX - 4},${arrowY + 8}`}
                fill={stageColors[idx + 1]}
                opacity={stageOpacities[idx + 1]}
                filter="url(#dp-arrow-glow)"
              />
            </g>
          )
        })}

        {/* Particles flowing through arrows */}
        {stagePositions.slice(0, -1).map((pos, idx) => {
          const nextPos = stagePositions[idx + 1]
          const fromX = pos.x + stageWidth + 6
          const toX = nextPos.x - 6
          const particles = getArrowParticles(
            fromX,
            toX,
            arrowY,
            PARTICLE_COUNT_PER_SEGMENT,
            time,
            idx
          )

          return particles.map((p, pIdx) => (
            <g key={`dp-p-${idx}-${pIdx}`}>
              {/* Outer glow */}
              <circle
                cx={p.x}
                cy={p.y}
                r={6}
                fill={stageColors[idx + 1]}
                opacity={p.opacity * 0.2}
                filter="url(#dp-particle-glow)"
              />
              {/* Core */}
              <circle
                cx={p.x}
                cy={p.y}
                r={p.size}
                fill="#D6EAF8"
                opacity={p.opacity}
              />
            </g>
          ))
        })}

        {/* Stage boxes */}
        {stagePositions.map((pos, idx) => {
          const pulseIntensity = 0.08 + (idx / (stageCount - 1)) * 0.12
          const pulse = Math.sin(time * 2 + idx * 0.8) * pulseIntensity

          return (
            <g key={`stage-${idx}`}>
              {/* Ambient glow behind box */}
              <rect
                x={pos.x - 6}
                y={pos.y - 6}
                width={stageWidth + 12}
                height={stageHeight + 12}
                rx={12}
                fill={stageColors[idx]}
                opacity={0.08 + pulse}
                filter="url(#dp-stage-glow)"
              />
              {/* Main stage box */}
              <rect
                x={pos.x}
                y={pos.y}
                width={stageWidth}
                height={stageHeight}
                rx={8}
                fill="rgba(10, 22, 40, 0.85)"
                stroke={stageColors[idx]}
                strokeWidth={2}
                opacity={stageOpacities[idx]}
              />
              {/* Inner highlight border */}
              <rect
                x={pos.x + 2}
                y={pos.y + 2}
                width={stageWidth - 4}
                height={stageHeight - 4}
                rx={6}
                fill="none"
                stroke={stageColors[idx]}
                strokeWidth={0.5}
                opacity={0.2}
              />
              {/* Stage number badge */}
              <circle
                cx={pos.x + 18}
                cy={pos.y + stageHeight / 2}
                r={10}
                fill={stageColors[idx]}
                opacity={0.2}
              />
              <text
                x={pos.x + 18}
                y={pos.y + stageHeight / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={stageColors[idx]}
                fontSize={11}
                fontWeight={700}
                fontFamily="monospace"
              >
                {idx + 1}
              </text>
              {/* Stage label */}
              <text
                x={pos.x + stageWidth / 2 + 10}
                y={pos.y + stageHeight / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#E0ECF8"
                fontSize={12}
                fontWeight={600}
                letterSpacing={0.3}
              >
                {stages[idx].label}
              </text>
            </g>
          )
        })}

        {/* Description labels below stages */}
        {stagePositions.map((pos, idx) => (
          <text
            key={`desc-${idx}`}
            x={pos.x + stageWidth / 2}
            y={pos.y + stageHeight + 24}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#8BAAC8"
            fontSize={10}
            fontWeight={400}
            letterSpacing={0.2}
            opacity={stageOpacities[idx]}
          >
            {stages[idx].description}
          </text>
        ))}

        {/* Top decorative line */}
        <line
          x1={stagePositions[0].x}
          y1={stageY - 25}
          x2={stagePositions[stageCount - 1].x + stageWidth}
          y2={stageY - 25}
          stroke="rgba(52, 152, 219, 0.1)"
          strokeWidth={1}
          strokeDasharray="4 8"
        />
      </svg>

      {/* Entrance animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ background: 'var(--bg-primary, #0A1628)' }}
      />
    </div>
  )
}

export { DataPipeline as CapDataPipeline }
