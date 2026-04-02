"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

function FloatingOrb({ position, color, speed, distort }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          distort={distort}
          speed={2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00e4b8" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00e4b8" />
      <pointLight position={[-10, -10, -5]} intensity={0.4} color="#818cf8" />

      <FloatingOrb position={[-3, 1, -2]} color="#00e4b8" speed={1.5} distort={0.4} />
      <FloatingOrb position={[3, -1, -3]} color="#818cf8" speed={1} distort={0.3} />
      <FloatingOrb position={[0, 2, -4]} color="#00e4b8" speed={0.8} distort={0.5} />

      <Particles />
    </>
  );
}

const lines = [
  "Seu cliente chegou",
  "ao destino. Mas não",
  "voltaria a viajar",
  "com você.",
];

export function Hero3D() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 6], fov: 60 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <Scene />
          </Canvas>
        </Suspense>
      </div>

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(6,9,15,0.3) 0%, rgba(6,9,15,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[950px] px-6">
        <motion.span
          className="inline-flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--color-primary)] mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="w-5 h-px bg-[var(--color-primary)]" />
          Experiência do Cliente — Repensada
          <span className="w-5 h-px bg-[var(--color-primary)]" />
        </motion.span>

        <h1
          className="text-[clamp(2.8rem,6.5vw,6rem)] font-bold leading-[1.05] tracking-[-0.035em] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "120%", filter: "blur(10px)" }}
                animate={{ y: "0%", filter: "blur(0px)" }}
                transition={{
                  delay: 0.5 + i * 0.12,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="text-[clamp(1rem,1.5vw,1.25rem)] text-[var(--color-text-secondary)] max-w-[40ch] mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Entregar o resultado certo da forma errada tem nome: fracasso
          silencioso. A maioria das empresas comete esse erro todos os dias.
        </motion.p>

        <motion.a
          href="#equation"
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--color-primary)] border border-[rgba(0,228,184,0.2)] bg-[rgba(0,228,184,0.04)] backdrop-blur-md transition-all duration-500 hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] hover:border-[var(--color-primary)] hover:shadow-[0_0_60px_rgba(0,228,184,0.25)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          Explorar a equação
          <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[0.5rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          scroll
        </span>
        <motion.div
          className="w-px bg-gradient-to-b from-transparent to-[var(--color-text-muted)]"
          animate={{ height: [24, 36, 24], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
