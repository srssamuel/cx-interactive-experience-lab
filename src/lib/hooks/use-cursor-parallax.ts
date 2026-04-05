"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseCursorParallaxOptions {
  /** Parallax strength multiplier. Default 1 */
  strength?: number;
  /** CSS perspective value in px. Default 600 */
  perspective?: number;
  /** Smoothing factor 0-1 (lower = smoother). Default 0.08 */
  lerp?: number;
  /** Enable/disable. Default true */
  enabled?: boolean;
}

interface CursorParallaxReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** Normalized X position: -1 (left) to 1 (right), 0 = center */
  normalizedX: number;
  /** Normalized Y position: -1 (top) to 1 (bottom), 0 = center */
  normalizedY: number;
  isActive: boolean;
}

/**
 * useCursorParallax — Track mouse position within a container
 * and return smoothed normalized coordinates for parallax effects.
 *
 * Uses RAF with lerp interpolation for buttery smooth movement.
 * Respects prefers-reduced-motion.
 * Disables on touch devices (no mouse).
 */
export function useCursorParallax(
  options: UseCursorParallaxOptions = {}
): CursorParallaxReturn {
  const {
    strength = 1,
    lerp = 0.08,
    enabled = true,
  } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [normalizedX, setNormalizedX] = useState(0);
  const [normalizedY, setNormalizedY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const rectRef = useRef<DOMRect | null>(null);

  const animate = useCallback(() => {
    const target = targetRef.current;
    const current = currentRef.current;

    current.x += (target.x - current.x) * lerp;
    current.y += (target.y - current.y) * lerp;

    const appliedX = current.x * strength;
    const appliedY = current.y * strength;

    setNormalizedX(appliedX);
    setNormalizedY(appliedY);

    rafRef.current = requestAnimationFrame(animate);
  }, [lerp, strength]);

  useEffect(() => {
    if (!enabled) return;

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    // Skip on touch-only devices
    if (!window.matchMedia("(hover: hover)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const updateRect = () => {
      rectRef.current = container.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = rectRef.current;
      if (!rect) return;

      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      targetRef.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
    };

    const handleMouseEnter = () => {
      updateRect();
      setIsActive(true);
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
      setIsActive(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Debounced resize
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateRect, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    updateRect();

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [enabled, animate]);

  // Stop RAF when not active
  useEffect(() => {
    if (!isActive) {
      cancelAnimationFrame(rafRef.current);
    }
  }, [isActive]);

  return { containerRef, normalizedX, normalizedY, isActive };
}
