'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

function CinematicParticles({
  count = 2000,
  color = '#3498DB',
  interactive = false,
}: {
  count?: number
  color?: string
  interactive?: boolean
}) {
  const mesh = useRef<THREE.Points>(null)
  const pointer = useRef(new THREE.Vector2(0, 0))

  const [positions, originalPositions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const orig = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2 + Math.random() * 5
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi) - 2
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z
      orig[i * 3] = x
      orig[i * 3 + 1] = y
      orig[i * 3 + 2] = z
      sz[i] = Math.random() * 3 + 0.5
    }
    return [pos, orig, sz]
  }, [count])

  const handlePointerMove = (e: { point: THREE.Vector3 }) => {
    if (!interactive) return
    pointer.current.set(e.point.x, e.point.y)
  }

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.elapsedTime
    mesh.current.rotation.y = t * 0.02
    mesh.current.rotation.x = Math.sin(t * 0.015) * 0.15
    mesh.current.rotation.z = Math.cos(t * 0.01) * 0.05

    if (interactive) {
      const posAttr = mesh.current.geometry.attributes.position
      const posArray = posAttr.array as Float32Array
      for (let i = 0; i < count; i++) {
        const ix = i * 3
        const iy = i * 3 + 1
        const iz = i * 3 + 2
        const ox = originalPositions[ix]
        const oy = originalPositions[iy]
        const dx = ox - pointer.current.x
        const dy = oy - pointer.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 2.5) {
          const force = (1 - dist / 2.5) * 1.2
          posArray[ix] += ((ox + (dx / dist) * force) - posArray[ix]) * 0.04
          posArray[iy] += ((oy + (dy / dist) * force) - posArray[iy]) * 0.04
        } else {
          posArray[ix] += (originalPositions[ix] - posArray[ix]) * 0.015
          posArray[iy] += (originalPositions[iy] - posArray[iy]) * 0.015
        }
        posArray[iz] += (originalPositions[iz] - posArray[iz]) * 0.015
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
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={0.04}
          sizeAttenuation
          transparent
          opacity={0.7}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

interface CinematicParticleFieldProps {
  className?: string
  color?: string
  count?: number
  interactive?: boolean
  bloomIntensity?: number
  chromaticAberration?: boolean
  vignette?: boolean
}

export function CinematicParticleField({
  className,
  color = '#3498DB',
  count = 2000,
  interactive = true,
  bloomIntensity = 1.2,
  chromaticAberration = true,
  vignette = true,
}: CinematicParticleFieldProps) {
  return (
    <div className={className} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <CinematicParticles count={count} color={color} interactive={interactive} />
        <EffectComposer>
          <Bloom
            intensity={bloomIntensity}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.5}
            mipmapBlur
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={new THREE.Vector2(
              chromaticAberration ? 0.0008 : 0,
              chromaticAberration ? 0.0008 : 0
            )}
            radialModulation={true}
            modulationOffset={0.2}
          />
          <Vignette
            darkness={vignette ? 0.5 : 0}
            offset={0.3}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
