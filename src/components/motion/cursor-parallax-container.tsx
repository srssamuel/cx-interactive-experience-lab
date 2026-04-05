"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useCursorParallax } from "@/lib/hooks/use-cursor-parallax";
import gsap from "gsap";

interface CursorParallaxContainerProps {
  children: ReactNode;
  className?: string;
  /** Perspective depth preset or custom px value */
  perspective?: "near" | "normal" | "far" | number;
  /** Parallax strength multiplier. Default 1 */
  strength?: number;
  /** Enable/disable parallax. Default true */
  enabled?: boolean;
}

const perspectiveMap = {
  near: "var(--perspective-near)",
  normal: "var(--perspective-normal)",
  far: "var(--perspective-far)",
} as const;

/**
 * CursorParallaxContainer — Applies perspective-based parallax
 * driven by cursor position.
 *
 * Children with `data-depth="1"` (foreground) move most,
 * `data-depth="2"` (midground) moderate,
 * `data-depth="3"` (background) least.
 *
 * Uses useCursorParallax hook + gsap.set() for smooth RAF updates.
 */
export function CursorParallaxContainer({
  children,
  className,
  perspective = "normal",
  strength = 1,
  enabled = true,
}: CursorParallaxContainerProps) {
  const { containerRef, normalizedX, normalizedY, isActive } = useCursorParallax({
    strength,
    enabled,
  });

  const depthElementsRef = useRef<Map<HTMLElement, number>>(new Map());

  // Discover depth elements on mount
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>("[data-depth]");
    const map = new Map<HTMLElement, number>();

    elements.forEach((el) => {
      const depth = parseInt(el.dataset.depth || "2", 10);
      map.set(el, depth);
    });

    depthElementsRef.current = map;
  }, [containerRef, children]);

  // Apply transforms based on cursor position
  useEffect(() => {
    const map = depthElementsRef.current;
    if (map.size === 0) return;

    // Depth multipliers: depth 1 = most movement, 3 = least
    const depthMultipliers: Record<number, number> = {
      1: 30,
      2: 15,
      3: 6,
    };

    map.forEach((depth, el) => {
      const mult = depthMultipliers[depth] || 15;
      const x = normalizedX * mult;
      const y = normalizedY * mult;
      const rotateY = normalizedX * (depth === 1 ? 2 : 1);
      const rotateX = -normalizedY * (depth === 1 ? 2 : 1);

      gsap.set(el, {
        x,
        y,
        rotateX,
        rotateY,
        transformPerspective: 600,
      });
    });
  }, [normalizedX, normalizedY]);

  // Reset transforms when inactive
  useEffect(() => {
    if (isActive) return;

    const map = depthElementsRef.current;
    map.forEach((_depth, el) => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }, [isActive]);

  const perspectiveValue =
    typeof perspective === "number"
      ? `${perspective}px`
      : perspectiveMap[perspective];

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ perspective: perspectiveValue }}
    >
      {children}
    </div>
  );
}
