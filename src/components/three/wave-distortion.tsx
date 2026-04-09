'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform float uSpeed;
  uniform float uIntensity;
  varying vec2 vUv;

  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * uSpeed;

    // Multiple layers of flowing noise
    float n1 = snoise(uv * 3.0 + t * 0.3) * 0.5 + 0.5;
    float n2 = snoise(uv * 5.0 - t * 0.2 + 10.0) * 0.5 + 0.5;
    float n3 = snoise(uv * 2.0 + t * 0.15 + 20.0) * 0.5 + 0.5;

    // Distort UV with noise for liquid effect
    vec2 distortedUv = uv;
    distortedUv.x += snoise(uv * 4.0 + t * 0.2) * uIntensity * 0.08;
    distortedUv.y += snoise(uv * 4.0 - t * 0.15 + 5.0) * uIntensity * 0.08;

    float n4 = snoise(distortedUv * 3.5 + t * 0.25) * 0.5 + 0.5;

    // Mix colors based on noise
    vec3 col = mix(uColor1, uColor2, n1 * n4);
    col = mix(col, uColor3, n2 * 0.4);

    // Add bright spots
    float bright = pow(n3 * n4, 3.0) * uIntensity;
    col += bright * 0.3;

    // Vignette
    float vig = 1.0 - length((uv - 0.5) * 1.4);
    vig = smoothstep(0.0, 0.7, vig);

    // Final with alpha
    float alpha = vig * (0.3 + n1 * 0.3) * uIntensity;
    gl_FragColor = vec4(col, alpha);
  }
`

function WavePlane({
  color1,
  color2,
  color3,
  speed,
  intensity,
}: {
  color1: string
  color2: string
  color3: string
  speed: number
  intensity: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(viewport.width, viewport.height) },
      uColor1: { value: new THREE.Color(color1) },
      uColor2: { value: new THREE.Color(color2) },
      uColor3: { value: new THREE.Color(color3) },
      uSpeed: { value: speed },
      uIntensity: { value: intensity },
    }),
    [color1, color2, color3, speed, intensity, viewport.width, viewport.height]
  )

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

interface WaveDistortionProps {
  className?: string
  color1?: string
  color2?: string
  color3?: string
  speed?: number
  intensity?: number
}

export function WaveDistortion({
  className,
  color1 = '#8B5E1A',
  color2 = '#C8873A',
  color3 = '#E8923A',
  speed = 0.4,
  intensity = 1.0,
}: WaveDistortionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReduced) {
      setMounted(true)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className={className}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <WavePlane
          color1={color1}
          color2={color2}
          color3={color3}
          speed={speed}
          intensity={intensity}
        />
      </Canvas>
    </div>
  )
}
