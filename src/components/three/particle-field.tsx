'use client'

import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

function Particles({
  count = 1500,
  color = '#C8873A',
  interactive = false,
}: {
  count?: number
  color?: string
  interactive?: boolean
}) {
  const mesh = useRef<THREE.Points>(null)
  const pointer = useRef(new THREE.Vector2(0, 0))
  const { camera } = useThree()

  // Store original positions for spring-back
  const [positions, originalPositions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const orig = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3 + Math.random() * 4
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z
      orig[i * 3] = x
      orig[i * 3 + 1] = y
      orig[i * 3 + 2] = z
      sz[i] = Math.random() * 2 + 0.5
    }
    return [pos, orig, sz]
  }, [count])

  const handlePointerMove = useCallback((e: { point: THREE.Vector3 }) => {
    if (!interactive) return
    pointer.current.set(e.point.x, e.point.y)
  }, [interactive])

  useFrame(({ clock }) => {
    if (!mesh.current) return
    mesh.current.rotation.y = clock.elapsedTime * 0.03
    mesh.current.rotation.x = Math.sin(clock.elapsedTime * 0.02) * 0.1

    // Mouse repulsion effect
    if (interactive) {
      const posAttr = mesh.current.geometry.attributes.position
      const posArray = posAttr.array as Float32Array
      const repelRadius = 2.0
      const repelStrength = 0.8

      for (let i = 0; i < count; i++) {
        const ix = i * 3
        const iy = i * 3 + 1
        const iz = i * 3 + 2

        // Get current world-space approximate position (ignoring rotation for perf)
        const ox = originalPositions[ix]
        const oy = originalPositions[iy]

        const dx = ox - pointer.current.x
        const dy = oy - pointer.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < repelRadius) {
          const force = (1 - dist / repelRadius) * repelStrength
          const targetX = ox + (dx / dist) * force
          const targetY = oy + (dy / dist) * force
          posArray[ix] += (targetX - posArray[ix]) * 0.05
          posArray[iy] += (targetY - posArray[iy]) * 0.05
        } else {
          // Spring back to original
          posArray[ix] += (originalPositions[ix] - posArray[ix]) * 0.02
          posArray[iy] += (originalPositions[iy] - posArray[iy]) * 0.02
        }
        posArray[iz] += (originalPositions[iz] - posArray[iz]) * 0.02
      }
      posAttr.needsUpdate = true
    }
  })

  return (
    <group>
      {interactive && (
        <mesh visible={false} onPointerMove={handlePointerMove}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      )}
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[sizes, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={0.03}
          sizeAttenuation
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

interface ParticleFieldProps {
  className?: string
  color?: string
  count?: number
  interactive?: boolean
  bloom?: boolean
}

export function ParticleField({
  className,
  color = '#C8873A',
  count = 1500,
  interactive = false,
  bloom = false,
}: ParticleFieldProps) {
  return (
    <div className={className} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Particles count={count} color={color} interactive={interactive} />
        {bloom && (
          <EffectComposer>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.6}
              luminanceSmoothing={0.4}
              mipmapBlur
            />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  )
}
