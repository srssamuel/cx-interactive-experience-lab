'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'

type HeartbeatState = 'healthy' | 'danger' | 'flatline'

interface HeartbeatLineProps {
  state?: HeartbeatState
  className?: string
}

const CANVAS_WIDTH = 1200
const CANVAS_HEIGHT = 200
const MID_Y = CANVAS_HEIGHT / 2
const SPEED = 3
const LINE_WIDTH = 3

// EKG waveform segment generators
function healthyBeat(x: number): number {
  const cycle = x % 180

  if (cycle < 15) {
    // P wave
    return MID_Y - Math.sin((cycle / 15) * Math.PI) * 14
  } else if (cycle < 30) {
    // PR segment
    return MID_Y
  } else if (cycle < 38) {
    // Q dip
    return MID_Y + ((cycle - 30) / 8) * 18
  } else if (cycle < 50) {
    // R spike -- tall dramatic peak
    const t = (cycle - 38) / 12
    return MID_Y - Math.sin(t * Math.PI) * 75
  } else if (cycle < 58) {
    // S dip
    return MID_Y + Math.sin(((cycle - 50) / 8) * Math.PI) * 22
  } else if (cycle < 75) {
    // ST segment
    return MID_Y
  } else if (cycle < 100) {
    // T wave
    return MID_Y - Math.sin(((cycle - 75) / 25) * Math.PI) * 20
  } else {
    // Baseline
    return MID_Y
  }
}

function dangerBeat(x: number): number {
  const cycle = x % 220

  if (cycle < 10) {
    return MID_Y - Math.sin((cycle / 10) * Math.PI) * 8
  } else if (cycle < 25) {
    return MID_Y + Math.random() * 8 - 4
  } else if (cycle < 35) {
    const t = (cycle - 25) / 10
    return MID_Y - Math.sin(t * Math.PI) * 50
  } else if (cycle < 45) {
    return MID_Y + Math.sin(((cycle - 35) / 10) * Math.PI) * 35
  } else if (cycle < 55) {
    return MID_Y - Math.sin(((cycle - 45) / 10) * Math.PI) * 28
  } else if (cycle < 80) {
    return MID_Y + Math.sin(((cycle - 55) / 25) * Math.PI) * 12
  } else {
    return MID_Y + Math.sin(cycle * 0.15) * 4
  }
}

function flatlineValue(): number {
  return MID_Y + (Math.random() - 0.5) * 1.5
}

export function HeartbeatLine({ state = 'healthy', className }: HeartbeatLineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<HeartbeatState>(state)
  const pointsRef = useRef<number[]>([])
  const frameRef = useRef<number>(0)
  const xOffsetRef = useRef<number>(0)
  const animRef = useRef<number>(0)
  const [currentColor, setCurrentColor] = useState(
    state === 'danger' || state === 'flatline' ? '#E74C3C' : '#00BCD4'
  )

  useEffect(() => {
    stateRef.current = state
    if (state === 'healthy') {
      setCurrentColor('#00BCD4')
    } else {
      setCurrentColor('#E74C3C')
    }
  }, [state])

  useEffect(() => {
    const pts: number[] = []
    for (let i = 0; i < CANVAS_WIDTH; i++) {
      pts.push(MID_Y)
    }
    pointsRef.current = pts
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
    const displayWidth = canvas.clientWidth
    const displayHeight = canvas.clientHeight

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr
      ctx.scale(dpr, dpr)
    }

    // Generate new points
    for (let i = 0; i < SPEED; i++) {
      xOffsetRef.current++
      let y: number

      switch (stateRef.current) {
        case 'healthy':
          y = healthyBeat(xOffsetRef.current)
          break
        case 'danger':
          y = dangerBeat(xOffsetRef.current)
          break
        case 'flatline':
          y = flatlineValue()
          break
      }

      pointsRef.current.push(y)
      if (pointsRef.current.length > CANVAS_WIDTH) {
        pointsRef.current.shift()
      }
    }

    const pts = pointsRef.current
    const scaleX = displayWidth / CANVAS_WIDTH
    const scaleY = displayHeight / CANVAS_HEIGHT

    ctx.clearRect(0, 0, displayWidth, displayHeight)

    const mainColor = stateRef.current === 'healthy' ? '#00BCD4' : '#E74C3C'
    const glowColor =
      stateRef.current === 'healthy'
        ? 'rgba(0, 188, 212, 0.6)'
        : 'rgba(231, 76, 60, 0.6)'
    // Draw wide ambient glow layer
    ctx.save()
    ctx.shadowColor = glowColor
    ctx.shadowBlur = 35
    ctx.strokeStyle = mainColor
    ctx.lineWidth = LINE_WIDTH + 8
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.globalAlpha = 0.15
    ctx.beginPath()
    for (let i = 0; i < pts.length; i++) {
      const px = i * scaleX
      const py = pts[i] * scaleY
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.stroke()
    ctx.restore()

    // Draw medium glow layer
    ctx.save()
    ctx.shadowColor = glowColor
    ctx.shadowBlur = 20
    ctx.strokeStyle = mainColor
    ctx.lineWidth = LINE_WIDTH + 4
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.globalAlpha = 0.3
    ctx.beginPath()
    for (let i = 0; i < pts.length; i++) {
      const px = i * scaleX
      const py = pts[i] * scaleY
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.stroke()
    ctx.restore()

    // Draw second glow layer
    ctx.save()
    ctx.shadowColor = glowColor
    ctx.shadowBlur = 10
    ctx.strokeStyle = mainColor
    ctx.lineWidth = LINE_WIDTH + 1
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.globalAlpha = 0.5
    ctx.beginPath()
    for (let i = 0; i < pts.length; i++) {
      const px = i * scaleX
      const py = pts[i] * scaleY
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.stroke()
    ctx.restore()

    // Draw main line
    ctx.save()
    ctx.strokeStyle = mainColor
    ctx.lineWidth = LINE_WIDTH
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.globalAlpha = 1
    ctx.beginPath()
    for (let i = 0; i < pts.length; i++) {
      const px = i * scaleX
      const py = pts[i] * scaleY
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.stroke()
    ctx.restore()

    // Draw bright leading dot
    if (pts.length > 1) {
      const lastX = (pts.length - 1) * scaleX
      const lastY = pts[pts.length - 1] * scaleY

      // Ambient halo around leading edge
      ctx.save()
      ctx.shadowColor = mainColor
      ctx.shadowBlur = 40
      ctx.fillStyle = mainColor
      ctx.globalAlpha = 0.15
      ctx.beginPath()
      ctx.arc(lastX, lastY, 20, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // Outer halo
      ctx.save()
      ctx.shadowColor = mainColor
      ctx.shadowBlur = 20
      ctx.fillStyle = mainColor
      ctx.globalAlpha = 0.4
      ctx.beginPath()
      ctx.arc(lastX, lastY, 10, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // Bright core dot
      ctx.save()
      ctx.shadowColor = mainColor
      ctx.shadowBlur = 25
      ctx.fillStyle = '#FFFFFF'
      ctx.globalAlpha = 0.95
      ctx.beginPath()
      ctx.arc(lastX, lastY, 5, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    // Scanline fade effect (left side fades out)
    const fadeGradient = ctx.createLinearGradient(0, 0, displayWidth * 0.18, 0)
    fadeGradient.addColorStop(0, 'rgba(10, 22, 40, 1)')
    fadeGradient.addColorStop(1, 'rgba(10, 22, 40, 0)')
    ctx.fillStyle = fadeGradient
    ctx.fillRect(0, 0, displayWidth * 0.18, displayHeight)

    frameRef.current++
    animRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      {/* Ambient glow behind the line */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background:
            state === 'healthy'
              ? 'radial-gradient(ellipse at 70% 50%, rgba(0, 188, 212, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(ellipse at 70% 50%, rgba(231, 76, 60, 0.1) 0%, transparent 70%)',
        }}
        transition={{ duration: 1.5 }}
      />

      <canvas
        ref={canvasRef}
        className="w-full"
        style={{
          height: 160,
          display: 'block',
        }}
      />

      {/* State indicator */}
      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          className="absolute top-3 right-4 flex items-center gap-2"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: currentColor }}
            animate={{
              boxShadow: [
                `0 0 4px ${currentColor}`,
                `0 0 16px ${currentColor}`,
                `0 0 4px ${currentColor}`,
              ],
            }}
            transition={{
              duration: state === 'healthy' ? 1.2 : 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: currentColor }}
          >
            {state === 'healthy' ? 'VITALS OK' : state === 'danger' ? 'WARNING' : 'FLATLINE'}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Grid overlay for medical monitor feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hb-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5DADE2" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hb-grid)" />
        </svg>
      </div>
    </div>
  )
}

export { HeartbeatLine as CapHeartbeatLine }
