'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

/*
 * Global WebGL Scene — fixed background Canvas
 * Responds to chapter index via context/props
 * Renders atmosphere: particles + depth fog + reactive lighting
 */

// Chapter color palette for reactive lighting
const chapterPalette: Record<string, THREE.Color> = {
  abertura: new THREE.Color('#3498DB'),
  contexto: new THREE.Color('#5DADE2'),
  cx: new THREE.Color('#42A5F5'),
  cs: new THREE.Color('#00BCD4'),
  data: new THREE.Color('#26C6DA'),
  ai: new THREE.Color('#7C4DFF'),
  convergencia: new THREE.Color('#3498DB'),
  workshop: new THREE.Color('#00BCD4'),
  fechamento: new THREE.Color('#AED6F1'),
}

function AtmosphericParticles({
  count = 1200,
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
      // Spread across a wide volume
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 3
      // Slow drift velocities
      vel[i * 3] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001
      sz[i] = Math.random() * 2.5 + 0.5
    }
    return [pos, vel, sz]
  }, [count])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.elapsedTime

    // Smooth color interpolation
    currentColor.current.lerp(targetColor.current, 0.02)
    const mat = meshRef.current.material as THREE.PointsMaterial
    mat.color.copy(currentColor.current)
    mat.opacity = 0.3 + intensity * 0.4

    // Slow global rotation
    meshRef.current.rotation.y = t * 0.008
    meshRef.current.rotation.x = Math.sin(t * 0.006) * 0.05

    // Drift particles
    const posAttr = meshRef.current.geometry.attributes.position
    const posArray = posAttr.array as Float32Array
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      posArray[ix] += velocities[ix] + Math.sin(t * 0.5 + i) * 0.0005
      posArray[ix + 1] += velocities[ix + 1] + Math.cos(t * 0.3 + i * 0.5) * 0.0003
      posArray[ix + 2] += velocities[ix + 2]

      // Wrap particles that drift too far
      if (Math.abs(posArray[ix]) > 12) posArray[ix] *= -0.95
      if (Math.abs(posArray[ix + 1]) > 8) posArray[ix + 1] *= -0.95
      if (posArray[ix + 2] > 2 || posArray[ix + 2] < -18) velocities[ix + 2] *= -1
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
        size={0.055}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color={activeColor}
      />
    </points>
  )
}

// Depth fog planes — creates foreground/midground/background separation
function DepthLayers({ activeColor }: { activeColor: THREE.Color }) {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.elapsedTime
    group.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh
      const mat = mesh.material as THREE.MeshBasicMaterial
      mat.opacity = 0.02 + Math.sin(t * (0.3 + i * 0.1)) * 0.015
    })
  })

  return (
    <group ref={group}>
      {/* Background layer — far */}
      <mesh position={[0, 0, -12]}>
        <planeGeometry args={[30, 18]} />
        <meshBasicMaterial
          color={activeColor}
          transparent
          opacity={0.06}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Midground layer */}
      <mesh position={[2, -1, -6]} rotation={[0, 0.1, 0]}>
        <planeGeometry args={[15, 10]} />
        <meshBasicMaterial
          color={activeColor}
          transparent
          opacity={0.04}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Foreground accent layer */}
      <mesh position={[-3, 2, -4]} rotation={[0.05, -0.1, 0.02]}>
        <planeGeometry args={[8, 6]} />
        <meshBasicMaterial
          color={activeColor}
          transparent
          opacity={0.025}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
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
      <AtmosphericParticles count={1800} activeColor={activeColor} intensity={intensity} />
      <DepthLayers activeColor={activeColor} />
      <EffectComposer>
        <Bloom
          intensity={0.9 + intensity * 0.6}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.5}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={new THREE.Vector2(0.0006 + intensity * 0.0006, 0.0006 + intensity * 0.0006)}
          radialModulation
          modulationOffset={0.3}
        />
        <Vignette darkness={0.5 + intensity * 0.25} offset={0.2} blendFunction={BlendFunction.NORMAL} />
      </EffectComposer>
    </>
  )
}

interface GlobalSceneProps {
  activeBlock?: string
  intensity?: number
}

export function GlobalScene({ activeBlock = 'abertura', intensity = 0.5 }: GlobalSceneProps) {
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
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <SceneContent activeBlock={activeBlock} intensity={intensity} />
      </Canvas>
    </div>
  )
}
