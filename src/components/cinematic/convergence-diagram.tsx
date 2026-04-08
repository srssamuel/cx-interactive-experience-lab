'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface Quadrant {
  name: string
  color: string
  role: string
}

interface ConvergenceDiagramProps {
  quadrants: [Quadrant, Quadrant, Quadrant, Quadrant]
  className?: string
}

const PARTICLES_PER_STREAM = 10

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

export function ConvergenceDiagram({ quadrants, className }: ConvergenceDiagramProps) {
  const [time, setTime] = useState(0)

  useAnimationFrame((t) => {
    setTime(t)
  })

  const cx = 300
  const cy = 300
  const viewSize = 600
  const quadrantRadius = 160
  const orbRadius = 25
  const rotationSpeed = 0.03

  // Quadrant positions (top-right, bottom-right, bottom-left, top-left)
  const quadrantAngles = [
    -Math.PI / 4,    // top-right
    Math.PI / 4,     // bottom-right
    (3 * Math.PI) / 4,  // bottom-left
    -(3 * Math.PI) / 4, // top-left
  ]

  const quadrantPositions = quadrantAngles.map((angle) => ({
    x: cx + Math.cos(angle + time * rotationSpeed) * quadrantRadius,
    y: cy + Math.sin(angle + time * rotationSpeed) * quadrantRadius,
    angle: angle + time * rotationSpeed,
  }))

  // Generate particles streaming toward center
  function getStreamParticles(
    qx: number,
    qy: number,
    count: number,
    t: number,
    streamIdx: number
  ) {
    const particles: Array<{
      x: number
      y: number
      opacity: number
      size: number
    }> = []

    for (let i = 0; i < count; i++) {
      // Each particle spirals slightly as it flows inward
      const phase = (t * 0.3 + i / count + streamIdx * 0.25) % 1
      const progress = phase
      // Spiral offset
      const spiralAngle = progress * Math.PI * 1.5 + streamIdx * (Math.PI / 2)
      const spiralRadius = (1 - progress) * 12

      const baseX = qx + (cx - qx) * progress
      const baseY = qy + (cy - qy) * progress
      const px = baseX + Math.cos(spiralAngle) * spiralRadius
      const py = baseY + Math.sin(spiralAngle) * spiralRadius

      // Particles brighten as they approach center
      const fadeIn = Math.min(phase * 2.5, 1)
      const fadeOut = Math.min((1 - phase) * 5, 1)
      const brightness = 0.5 + progress * 0.5
      const size = 1.5 + progress * 2

      particles.push({
        x: px,
        y: py,
        opacity: fadeIn * fadeOut * brightness,
        size,
      })
    }

    return particles
  }

  // Center orb pulsing
  const orbPulse = 1 + Math.sin(time * 2) * 0.15
  const orbGlowIntensity = 0.5 + Math.sin(time * 1.5) * 0.3
  const orbOuterPulse = 1 + Math.sin(time * 1.2) * 0.2

  return (
    <div className={cn('relative w-full max-w-[620px] mx-auto', className)}>
      <svg
        viewBox={`0 0 ${viewSize} ${viewSize}`}
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 0 40px rgba(52, 152, 219, 0.12))' }}
      >
        <defs>
          {/* Glow filters per quadrant color */}
          {quadrants.map((q, idx) => (
            <filter
              key={`conv-glow-${idx}`}
              id={`conv-glow-${idx}`}
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}

          {/* Center orb filter */}
          <filter id="conv-orb-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Particle glow */}
          <filter id="conv-particle-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>

          {/* Line glow */}
          <filter id="conv-line-glow" x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Center radial gradient */}
          <radialGradient id="conv-center-ambient">
            <stop offset="0%" stopColor="rgba(93, 173, 226, 0.3)" />
            <stop offset="40%" stopColor="rgba(52, 152, 219, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Outer subtle ring gradient */}
          <radialGradient id="conv-outer-ring">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="75%" stopColor="transparent" />
            <stop offset="90%" stopColor="rgba(52, 152, 219, 0.03)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Outer ambient ring */}
        <circle cx={cx} cy={cy} r={260} fill="url(#conv-outer-ring)" />

        {/* Subtle cross-hair guides */}
        <line
          x1={cx - 220}
          y1={cy}
          x2={cx + 220}
          y2={cy}
          stroke="rgba(52, 152, 219, 0.06)"
          strokeWidth={0.5}
          strokeDasharray="6 12"
        />
        <line
          x1={cx}
          y1={cy - 220}
          x2={cx}
          y2={cy + 220}
          stroke="rgba(52, 152, 219, 0.06)"
          strokeWidth={0.5}
          strokeDasharray="6 12"
        />

        {/* Center ambient glow */}
        <circle
          cx={cx}
          cy={cy}
          r={100 * orbOuterPulse}
          fill="url(#conv-center-ambient)"
          opacity={orbGlowIntensity}
        />

        {/* Connecting lines from quadrants to center */}
        {quadrantPositions.map((pos, idx) => {
          const color = quadrants[idx].color

          return (
            <g key={`line-${idx}`}>
              {/* Wide ambient glow */}
              <line
                x1={pos.x}
                y1={pos.y}
                x2={cx}
                y2={cy}
                stroke={color}
                strokeWidth={8}
                strokeLinecap="round"
                opacity={0.08}
                filter="url(#conv-line-glow)"
              />
              {/* Base line */}
              <line
                x1={pos.x}
                y1={pos.y}
                x2={cx}
                y2={cy}
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                opacity={0.35}
              />
              {/* Animated dashes flowing inward */}
              <line
                x1={pos.x}
                y1={pos.y}
                x2={cx}
                y2={cy}
                stroke={color}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray="10 20"
                strokeDashoffset={time * 50}
                opacity={0.65}
                filter="url(#conv-line-glow)"
              />
              {/* Fast bright dash layer */}
              <line
                x1={pos.x}
                y1={pos.y}
                x2={cx}
                y2={cy}
                stroke="#D6EAF8"
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="3 40"
                strokeDashoffset={time * 75}
                opacity={0.35}
              />
            </g>
          )
        })}

        {/* Particle streams from quadrants to center */}
        {quadrantPositions.map((pos, idx) => {
          const color = quadrants[idx].color
          const particles = getStreamParticles(
            pos.x,
            pos.y,
            PARTICLES_PER_STREAM,
            time,
            idx
          )

          return particles.map((p, pIdx) => (
            <g key={`conv-p-${idx}-${pIdx}`}>
              {/* Outer glow */}
              <circle
                cx={p.x}
                cy={p.y}
                r={7}
                fill={color}
                opacity={p.opacity * 0.2}
                filter="url(#conv-particle-glow)"
              />
              {/* Mid layer */}
              <circle
                cx={p.x}
                cy={p.y}
                r={p.size + 0.5}
                fill={color}
                opacity={p.opacity * 0.6}
              />
              {/* Bright core */}
              <circle
                cx={p.x}
                cy={p.y}
                r={p.size}
                fill="#D6EAF8"
                opacity={p.opacity * 0.9}
              />
            </g>
          ))
        })}

        {/* Quadrant nodes */}
        {quadrantPositions.map((pos, idx) => {
          const color = quadrants[idx].color
          const pulse = 1 + Math.sin(time * 2.5 + idx * 1.57) * 0.08
          const breathe = 0.3 + Math.sin(time * 1.8 + idx * 0.9) * 0.15

          return (
            <g key={`quad-${idx}`}>
              {/* Far outer ring */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={48 * pulse}
                fill="none"
                stroke={color}
                strokeWidth={1}
                opacity={breathe * 0.4}
              />
              {/* Outer ring */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={40 * pulse}
                fill="none"
                stroke={color}
                strokeWidth={1.5}
                opacity={breathe}
              />
              {/* Glow disc */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={34}
                fill={color}
                opacity={0.15}
                filter={`url(#conv-glow-${idx})`}
              />
              {/* Main circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={28}
                fill="rgba(10, 22, 40, 0.9)"
                stroke={color}
                strokeWidth={2.5}
              />
              {/* Inner accent ring */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={24}
                fill="none"
                stroke={color}
                strokeWidth={0.5}
                opacity={0.3}
              />
              {/* Quadrant initial letter */}
              <text
                x={pos.x}
                y={pos.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color}
                fontSize={18}
                fontWeight={800}
                letterSpacing={1}
                style={{
                  textShadow: `0 0 10px ${color}`,
                }}
              >
                {quadrants[idx].name.charAt(0)}
              </text>
            </g>
          )
        })}

        {/* Quadrant labels */}
        {quadrantPositions.map((pos, idx) => {
          const color = quadrants[idx].color
          // Push label outward from center
          const dx = pos.x - cx
          const dy = pos.y - cy
          const dist = Math.sqrt(dx * dx + dy * dy)
          const labelDist = 55
          const lx = pos.x + (dx / dist) * labelDist
          const ly = pos.y + (dy / dist) * labelDist

          return (
            <g key={`qlabel-${idx}`}>
              {/* Name label */}
              <text
                x={lx}
                y={ly - 7}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#E0ECF8"
                fontSize={13}
                fontWeight={700}
                letterSpacing={0.8}
                style={{
                  textShadow: `0 0 12px ${color}40`,
                }}
              >
                {quadrants[idx].name}
              </text>
              {/* Role subtitle */}
              <text
                x={lx}
                y={ly + 10}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#8BAAC8"
                fontSize={10}
                fontWeight={400}
                letterSpacing={0.3}
              >
                {quadrants[idx].role}
              </text>
            </g>
          )
        })}

        {/* Center convergence orb */}
        <g>
          {/* Outermost glow ring */}
          <circle
            cx={cx}
            cy={cy}
            r={45 * orbOuterPulse}
            fill="none"
            stroke="#5DADE2"
            strokeWidth={1}
            opacity={orbGlowIntensity * 0.3}
          />
          {/* Outer glow */}
          <circle
            cx={cx}
            cy={cy}
            r={35 * orbPulse}
            fill="#3498DB"
            opacity={0.12}
            filter="url(#conv-orb-glow)"
          />
          {/* Mid glow ring */}
          <circle
            cx={cx}
            cy={cy}
            r={orbRadius + 6}
            fill="#5DADE2"
            opacity={orbGlowIntensity * 0.2}
            filter="url(#conv-orb-glow)"
          />
          {/* Main orb */}
          <circle
            cx={cx}
            cy={cy}
            r={orbRadius}
            fill="rgba(15, 30, 53, 0.8)"
            stroke="#5DADE2"
            strokeWidth={3}
          />
          {/* Inner orb highlight */}
          <circle
            cx={cx}
            cy={cy}
            r={orbRadius * 0.6}
            fill="#3498DB"
            opacity={orbGlowIntensity * 0.25}
          />
          {/* Bright center dot */}
          <circle
            cx={cx}
            cy={cy}
            r={4}
            fill="#D6EAF8"
            opacity={0.9}
          />
        </g>
      </svg>

      {/* Entrance animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{ background: 'var(--bg-primary, #0A1628)' }}
      />
    </div>
  )
}

export { ConvergenceDiagram as CapConvergenceDiagram }
