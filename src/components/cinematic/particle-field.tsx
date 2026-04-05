"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticlesProps {
  count: number;
  color: string;
  interactive: boolean;
  mouseRef: React.RefObject<THREE.Vector2 | null>;
}

function Particles({ count = 500, color = "#F59E0B", interactive = false, mouseRef }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const basePositions = useRef<Float32Array | null>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  // Store base positions for interactive mode
  useEffect(() => {
    if (interactive) {
      basePositions.current = new Float32Array(positions);
    }
  }, [interactive, positions]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;

    // Cursor repulsion
    if (interactive && mouseRef.current && ref.current.geometry.attributes.position) {
      const mouse = mouseRef.current;
      const posAttr = ref.current.geometry.attributes.position;
      const base = basePositions.current;
      if (!base) return;

      // Convert NDC mouse to world space (approximate)
      const mx = mouse.x * viewport.width * 0.5;
      const my = mouse.y * viewport.height * 0.5;
      const repulsionRadius = 2.5;
      const repulsionStrength = 0.8;

      for (let i = 0; i < count; i++) {
        const bx = base[i * 3];
        const by = base[i * 3 + 1];

        const dx = bx - mx;
        const dy = by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repulsionRadius && dist > 0) {
          const force = ((repulsionRadius - dist) / repulsionRadius) * repulsionStrength;
          posAttr.setX(i, bx + (dx / dist) * force);
          posAttr.setY(i, by + (dy / dist) * force);
        } else {
          // Lerp back to base position
          const cx = posAttr.getX(i);
          const cy = posAttr.getY(i);
          posAttr.setX(i, cx + (bx - cx) * 0.05);
          posAttr.setY(i, cy + (by - cy) * 0.05);
        }
      }

      posAttr.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

interface ParticleFieldProps {
  className?: string;
  count?: number;
  color?: string;
  /** Enable cursor-driven particle repulsion */
  interactive?: boolean;
}

export function ParticleField({
  className,
  count = 500,
  color = "#F59E0B",
  interactive = false,
}: ParticleFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(-10, -10));

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    // Convert to NDC (-1 to 1)
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.set(-10, -10);
  }, []);

  useEffect(() => {
    if (!interactive) return;
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [interactive, handleMouseMove, handleMouseLeave]);

  return (
    <div ref={containerRef} className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles count={count} color={color} interactive={interactive} mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
