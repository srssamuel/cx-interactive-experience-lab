'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface EquationNode {
  label: string
  icon: React.ReactNode
}

interface AnimatedEquationProps {
  nodes: [EquationNode, EquationNode, EquationNode]
  className?: string
}

const PARTICLE_COUNT = 12

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

export function AnimatedEquation({ nodes, className }: AnimatedEquationProps) {
  const [time, setTime] = useState(0)
  const svgRef = useRef<SVGSVGElement>(null)

  useAnimationFrame((t) => {
    setTime(t)
  })

  // Triangle geometry -- centered in 500x500 viewBox
  const cx = 250
  const cy = 250
  const radius = 155
  const rotationSpeed = 0.06
  const baseAngle = time * rotationSpeed

  const vertices = [
    {
      x: cx + radius * Math.cos(baseAngle - Math.PI / 2),
      y: cy + radius * Math.sin(baseAngle - Math.PI / 2),
    },
    {
      x: cx + radius * Math.cos(baseAngle + (2 * Math.PI) / 3 - Math.PI / 2),
      y: cy + radius * Math.sin(baseAngle + (2 * Math.PI) / 3 - Math.PI / 2),
    },
    {
      x: cx + radius * Math.cos(baseAngle + (4 * Math.PI) / 3 - Math.PI / 2),
      y: cy + radius * Math.sin(baseAngle + (4 * Math.PI) / 3 - Math.PI / 2),
    },
  ]

  const edges: Array<{ from: number; to: number }> = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 0 },
  ]

  // Generate particles along edges
  function getParticlePositions(
    fromIdx: number,
    toIdx: number,
    count: number,
    t: number
  ) {
    const from = vertices[fromIdx]
    const to = vertices[toIdx]
    const positions: Array<{ x: number; y: number; opacity: number; size: number }> = []

    for (let i = 0; i < count; i++) {
      const phase = (t * 0.35 + i / count) % 1
      const px = from.x + (to.x - from.x) * phase
      const py = from.y + (to.y - from.y) * phase
      // Fade in/out at edges
      const fadeIn = Math.min(phase * 4, 1)
      const fadeOut = Math.min((1 - phase) * 4, 1)
      // Varying sizes for depth
      const size = 1.5 + Math.sin(phase * Math.PI) * 2
      positions.push({ x: px, y: py, opacity: fadeIn * fadeOut * 0.95, size })
    }

    return positions
  }

  const nodeColors = ['#C8873A', '#E8923A', '#F5A623']
  const lineColor = 'rgba(200, 135, 58, 0.4)'
  const particleColor = '#E8923A'
  const particleGlowColor = '#F5E6D0'

  // Center orb pulse
  const centerPulse = 0.6 + Math.sin(time * 1.8) * 0.25

  return (
    <div className={cn('relative w-full max-w-[560px] mx-auto', className)}>
      <svg
        ref={svgRef}
        viewBox="0 0 500 500"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 0 60px rgba(200, 135, 58, 0.2))' }}
      >
        <defs>
          {/* Node glow filter */}
          <filter id="aeq-node-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Line glow filter */}
          <filter id="aeq-line-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Particle glow */}
          <filter id="aeq-particle-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>

          {/* Center orb radial */}
          <radialGradient id="aeq-center-orb">
            <stop offset="0%" stopColor="rgba(232, 146, 58, 0.5)" />
            <stop offset="40%" stopColor="rgba(200, 135, 58, 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Outer ring gradient */}
          <radialGradient id="aeq-outer-ring">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="70%" stopColor="transparent" />
            <stop offset="85%" stopColor="rgba(200, 135, 58, 0.04)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Subtle outer ring */}
        <circle cx={cx} cy={cy} r={220} fill="url(#aeq-outer-ring)" />

        {/* Center pulsing orb */}
        <circle
          cx={cx}
          cy={cy}
          r={60 + Math.sin(time * 2) * 8}
          fill="url(#aeq-center-orb)"
          opacity={centerPulse}
        />
        <circle
          cx={cx}
          cy={cy}
          r={25 + Math.sin(time * 2.5) * 4}
          fill="rgba(232, 146, 58, 0.12)"
          filter="url(#aeq-node-glow)"
        />

        {/* Animated connecting lines */}
        {edges.map((edge, idx) => {
          const from = vertices[edge.from]
          const to = vertices[edge.to]

          return (
            <g key={`edge-${idx}`}>
              {/* Wide ambient glow behind line */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(200, 135, 58, 0.15)"
                strokeWidth={8}
                strokeLinecap="round"
                filter="url(#aeq-line-glow)"
              />
              {/* Base line */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={lineColor}
                strokeWidth={2.5}
                strokeLinecap="round"
              />
              {/* Animated dashes flowing along line */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={particleColor}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray="15 25"
                strokeDashoffset={-time * 55}
                opacity={0.75}
                filter="url(#aeq-line-glow)"
              />
              {/* Secondary faster dash layer */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#F5E6D0"
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="4 36"
                strokeDashoffset={-time * 80}
                opacity={0.5}
              />
            </g>
          )
        })}

        {/* Particles flowing along edges */}
        {edges.map((edge, edgeIdx) => {
          const particles = getParticlePositions(
            edge.from,
            edge.to,
            PARTICLE_COUNT,
            time + edgeIdx * 0.33
          )
          return particles.map((p, pIdx) => (
            <g key={`p-${edgeIdx}-${pIdx}`}>
              {/* Outer glow halo */}
              <circle
                cx={p.x}
                cy={p.y}
                r={8}
                fill={particleColor}
                opacity={p.opacity * 0.25}
                filter="url(#aeq-particle-glow)"
              />
              {/* Mid glow */}
              <circle
                cx={p.x}
                cy={p.y}
                r={p.size + 1}
                fill={particleColor}
                opacity={p.opacity * 0.5}
              />
              {/* Core bright particle */}
              <circle
                cx={p.x}
                cy={p.y}
                r={p.size}
                fill={particleGlowColor}
                opacity={p.opacity}
              />
            </g>
          ))
        })}

        {/* Nodes at vertices */}
        {vertices.map((v, idx) => {
          const pulseScale = 1 + Math.sin(time * 2.2 + idx * 2.09) * 0.1
          const breatheOpacity = 0.3 + Math.sin(time * 1.5 + idx * 1.2) * 0.15

          return (
            <g key={`node-${idx}`}>
              {/* Far outer pulse ring */}
              <circle
                cx={v.x}
                cy={v.y}
                r={50 * pulseScale}
                fill="none"
                stroke={nodeColors[idx]}
                strokeWidth={1}
                opacity={breatheOpacity * 0.5}
              />
              {/* Outer pulse ring */}
              <circle
                cx={v.x}
                cy={v.y}
                r={42 * pulseScale}
                fill="none"
                stroke={nodeColors[idx]}
                strokeWidth={1.5}
                opacity={breatheOpacity}
              />
              {/* Glow background */}
              <circle
                cx={v.x}
                cy={v.y}
                r={36}
                fill={nodeColors[idx]}
                opacity={0.18}
                filter="url(#aeq-node-glow)"
              />
              {/* Main circle */}
              <circle
                cx={v.x}
                cy={v.y}
                r={30}
                fill="rgba(10, 22, 40, 0.92)"
                stroke={nodeColors[idx]}
                strokeWidth={2.5}
              />
              {/* Inner highlight ring */}
              <circle
                cx={v.x}
                cy={v.y}
                r={26}
                fill="none"
                stroke={nodeColors[idx]}
                strokeWidth={0.5}
                opacity={0.3}
              />
              {/* Icon area */}
              <foreignObject
                x={v.x - 14}
                y={v.y - 14}
                width={28}
                height={28}
                style={{ overflow: 'visible' }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: nodeColors[idx],
                    filter: `drop-shadow(0 0 6px ${nodeColors[idx]})`,
                  }}
                >
                  {nodes[idx].icon}
                </div>
              </foreignObject>
            </g>
          )
        })}

        {/* Labels positioned outside the triangle */}
        {vertices.map((v, idx) => {
          const dx = v.x - cx
          const dy = v.y - cy
          const dist = Math.sqrt(dx * dx + dy * dy)
          const labelDist = 62
          const lx = v.x + (dx / dist) * labelDist
          const ly = v.y + (dy / dist) * labelDist

          return (
            <g key={`label-${idx}`}>
              {/* Label shadow for readability */}
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(10, 22, 40, 0.8)"
                fontSize={15}
                fontWeight={700}
                letterSpacing={1}
              >
                {nodes[idx].label}
              </text>
              {/* Label text */}
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#F5E6D0"
                fontSize={15}
                fontWeight={700}
                letterSpacing={1}
                style={{
                  textShadow: `0 0 16px rgba(200, 135, 58, 0.5), 0 0 30px rgba(200, 135, 58, 0.2)`,
                }}
              >
                {nodes[idx].label}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Entrance animation overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        style={{ background: 'var(--bg-primary, #0A1628)' }}
      />
    </div>
  )
}
