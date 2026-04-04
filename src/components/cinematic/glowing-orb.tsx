"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function OrbCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  const coreVertex = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const coreFragment = `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.8);
      vec3 cyan = vec3(0.055, 0.647, 0.914);
      vec3 deep = vec3(0.024, 0.424, 0.678);
      vec3 hot = vec3(0.4, 0.85, 1.0);
      float n = sin(vPosition.x * 4.0 + uTime * 0.4) *
                cos(vPosition.y * 5.0 + uTime * 0.3) *
                sin(vPosition.z * 3.0 + uTime * 0.6);
      n = n * 0.5 + 0.5;
      vec3 color = mix(deep, cyan, n);
      color = mix(color, hot, fresnel * 0.5);
      float alpha = fresnel * 0.8 + 0.12 + n * 0.1;
      gl_FragColor = vec4(color, alpha);
    }
  `;

  const glowVertex = `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const glowFragment = `
    varying vec3 vNormal;
    void main() {
      float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.5);
      vec3 cyan = vec3(0.055, 0.647, 0.914);
      gl_FragColor = vec4(cyan, intensity * 0.35);
    }
  `;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    uniforms.uTime.value = t;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.06;
      meshRef.current.rotation.x = Math.sin(t * 0.04) * 0.12;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = t * 0.04;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.03;
      ringsRef.current.rotation.x = Math.sin(t * 0.02) * 0.2 + 0.4;
    }
  });

  return (
    <group>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          vertexShader={coreVertex}
          fragmentShader={coreFragment}
          uniforms={uniforms}
          transparent
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Outer glow */}
      <mesh ref={glowRef} scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <shaderMaterial
          vertexShader={glowVertex}
          fragmentShader={glowFragment}
          transparent
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Orbital rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.6, 0.005, 16, 100]} />
          <meshBasicMaterial
            color="#0EA5E9"
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, 0.3, 0.2]}>
          <torusGeometry args={[1.9, 0.003, 16, 100]} />
          <meshBasicMaterial
            color="#06B6D4"
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </group>
  );
}

interface GlowingOrbProps {
  className?: string;
}

export function GlowingOrb({ className }: GlowingOrbProps) {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <OrbCore />
      </Canvas>
    </div>
  );
}
