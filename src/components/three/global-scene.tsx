'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

const chapterPalette: Record<string, THREE.Color> = {
  abertura: new THREE.Color('#C8873A'),
  contexto: new THREE.Color('#C8873A'),
  cx: new THREE.Color('#C8873A'),
  cs: new THREE.Color('#4A7C5C'),
  data: new THREE.Color('#26C6DA'),
  ai: new THREE.Color('#7C4DFF'),
  convergencia: new THREE.Color('#C8873A'),
  workshop: new THREE.Color('#4A7C5C'),
  fechamento: new THREE.Color('#E8923A'),
}

function AtmosphericParticles({
  count = 600,
  activeColor,
  intensity,
}: {
  count: number
  activeColor: THREE.Color
  intensity: number
}) {
  const meshRef = useRef<THREE.Points>(null)
  const targetColor = useRef(activeColor.clone())
  const currentColor = useRef(activeColor.clone())

  useEffect(() => {
    targetColor.current.copy(activeColor)
  }, [activeColor])

  const [positions, velocities, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18 - 5
      vel[i * 3] = (Math.random() - 0.5) * 0.002
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.001
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001
      sz[i] = Math.random() * 1.5 + 0.3
    }
    return [pos, vel, sz]
  }, [count])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.elapsedTime

    currentColor.current.lerp(targetColor.current, 0.015)
    const mat = meshRef.current.material as THREE.PointsMaterial
    mat.color.copy(currentColor.current)
    mat.opacity = 0.12 + intensity * 0.15

    meshRef.current.rotation.y = t * 0.005
    meshRef.current.rotation.x = Math.sin(t * 0.004) * 0.03

    const posAttr = meshRef.current.geometry.attributes.position
    const posArray = posAttr.array as Float32Array
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      posArray[ix] += velocities[ix]
      posArray[ix + 1] += velocities[ix + 1]
      posArray[ix + 2] += velocities[ix + 2]

      if (Math.abs(posArray[ix]) > 14) posArray[ix] *= -0.95
      if (Math.abs(posArray[ix + 1]) > 9) posArray[ix + 1] *= -0.95
      if (posArray[ix + 2] > 2 || posArray[ix + 2] < -20) velocities[ix + 2] *= -1
    }
    posAttr.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.2}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color={activeColor}
      />
    </points>
  )
}

interface SceneContentProps {
  activeBlock: string
  intensity: number
}

function SceneContent({ activeBlock, intensity }: SceneContentProps) {
  const activeColor = useMemo(
    () => chapterPalette[activeBlock] || chapterPalette.abertura,
    [activeBlock]
  )

  return (
    <>
      <AtmosphericParticles count={600} activeColor={activeColor} intensity={intensity} />
      <EffectComposer>
        <Bloom
          intensity={0.3 + intensity * 0.2}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.7}
          mipmapBlur
        />
        <Vignette darkness={0.4} offset={0.25} blendFunction={BlendFunction.NORMAL} />
      </EffectComposer>
    </>
  )
}

interface GlobalSceneProps {
  activeBlock?: string
  intensity?: number
}

export function GlobalScene({ activeBlock = 'abertura', intensity = 0.3 }: GlobalSceneProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReduced) {
      setMounted(true)
    }
  }, [])

  if (!mounted) return <div className="global-scene-fallback" />

  return (
    <div className="global-scene">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <SceneContent activeBlock={activeBlock} intensity={intensity} />
      </Canvas>
    </div>
  )
}
