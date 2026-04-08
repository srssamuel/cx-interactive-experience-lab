'use client'

import { cn } from '@/lib/cn'

interface GradientMeshProps {
  className?: string
  opacity?: number
}

export function GradientMesh({ className, opacity = 0.55 }: GradientMeshProps) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      style={{ opacity }}
    >
      {/* Blob 1 — Primary Blue */}
      <div
        className="gradient-mesh-blob absolute w-[80%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #3498DB 0%, rgba(52,152,219,0.4) 40%, transparent 70%)',
          filter: 'blur(40px)',
          top: '0%',
          left: '5%',
          animation: 'mesh-blob-1 20s ease-in-out infinite',
        }}
      />
      {/* Blob 2 — Teal */}
      <div
        className="gradient-mesh-blob absolute w-[65%] h-[65%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #00BCD4 0%, rgba(0,188,212,0.4) 40%, transparent 70%)',
          filter: 'blur(40px)',
          top: '30%',
          right: '0%',
          animation: 'mesh-blob-2 25s ease-in-out infinite',
        }}
      />
      {/* Blob 3 — Ice Blue */}
      <div
        className="gradient-mesh-blob absolute w-[60%] h-[60%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #5DADE2 0%, rgba(93,173,226,0.4) 40%, transparent 70%)',
          filter: 'blur(40px)',
          bottom: '-5%',
          left: '20%',
          animation: 'mesh-blob-3 30s ease-in-out infinite',
        }}
      />
      {/* Blob 4 — Deep Blue */}
      <div
        className="gradient-mesh-blob absolute w-[55%] h-[55%] rounded-full"
        style={{
          background: 'radial-gradient(circle, #1A6BA8 0%, rgba(26,107,168,0.4) 40%, transparent 70%)',
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
