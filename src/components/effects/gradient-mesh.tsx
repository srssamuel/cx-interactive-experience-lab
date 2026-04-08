'use client'

import { cn } from '@/lib/cn'

interface GradientMeshProps {
  className?: string
  opacity?: number
}

export function GradientMesh({ className, opacity = 0.50 }: GradientMeshProps) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      style={{ opacity }}
    >
      {/* Blob 1 — Amber — LARGE and visible */}
      <div
        className="gradient-mesh-blob absolute w-[80%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #C8873A 0%, rgba(200,135,58,0.4) 40%, transparent 70%)',
          filter: 'blur(40px)',
          top: '0%',
          left: '5%',
          animation: 'mesh-blob-1 20s ease-in-out infinite',
        }}
      />
      {/* Blob 2 — Green */}
      <div
        className="gradient-mesh-blob absolute w-[65%] h-[65%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #4A7C5C 0%, rgba(74,124,92,0.4) 40%, transparent 70%)',
          filter: 'blur(40px)',
          top: '30%',
          right: '0%',
          animation: 'mesh-blob-2 25s ease-in-out infinite',
        }}
      />
      {/* Blob 3 — Blue */}
      <div
        className="gradient-mesh-blob absolute w-[60%] h-[60%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #5B8FB9 0%, rgba(91,143,185,0.4) 40%, transparent 70%)',
          filter: 'blur(40px)',
          bottom: '-5%',
          left: '20%',
          animation: 'mesh-blob-3 30s ease-in-out infinite',
        }}
      />
      {/* Blob 4 — Purple */}
      <div
        className="gradient-mesh-blob absolute w-[55%] h-[55%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #8B6FB0 0%, rgba(139,111,176,0.4) 40%, transparent 70%)',
          filter: 'blur(40px)',
          top: '15%',
          right: '15%',
          animation: 'mesh-blob-4 35s ease-in-out infinite',
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          .gradient-mesh-blob { filter: blur(60px) !important; opacity: 0.6; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gradient-mesh-blob { animation: none !important; }
        }
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
