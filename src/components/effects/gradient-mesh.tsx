'use client'

import { cn } from '@/lib/cn'

interface GradientMeshProps {
  className?: string
  opacity?: number
}

export function GradientMesh({ className, opacity = 0.18 }: GradientMeshProps) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      style={{ opacity }}
    >
      {/* Blob 1 — Amber */}
      <div
        className="absolute w-[60%] h-[60%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #C8873A 0%, transparent 70%)',
          filter: 'blur(120px)',
          top: '10%',
          left: '15%',
          animation: 'mesh-blob-1 20s ease-in-out infinite',
        }}
      />
      {/* Blob 2 — Green */}
      <div
        className="absolute w-[50%] h-[50%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #4A7C5C 0%, transparent 70%)',
          filter: 'blur(120px)',
          top: '40%',
          right: '10%',
          animation: 'mesh-blob-2 25s ease-in-out infinite',
        }}
      />
      {/* Blob 3 — Blue */}
      <div
        className="absolute w-[45%] h-[45%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #5B8FB9 0%, transparent 70%)',
          filter: 'blur(120px)',
          bottom: '5%',
          left: '30%',
          animation: 'mesh-blob-3 30s ease-in-out infinite',
        }}
      />
      {/* Blob 4 — Purple */}
      <div
        className="absolute w-[40%] h-[40%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #8B6FB0 0%, transparent 70%)',
          filter: 'blur(120px)',
          top: '25%',
          right: '25%',
          animation: 'mesh-blob-4 35s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes mesh-blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, 10%) scale(1.1); }
          66% { transform: translate(-8%, -5%) scale(0.95); }
        }
        @keyframes mesh-blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-10%, 5%) scale(1.05); }
          66% { transform: translate(5%, -10%) scale(1.1); }
        }
        @keyframes mesh-blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(8%, -8%) scale(1.1); }
          66% { transform: translate(-5%, 5%) scale(0.9); }
        }
        @keyframes mesh-blob-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-6%, -10%) scale(1.05); }
          66% { transform: translate(10%, 8%) scale(1.1); }
        }
      `}</style>
    </div>
  )
}
