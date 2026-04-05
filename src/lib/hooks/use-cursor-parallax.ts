"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseCursorParallaxOptions {
  strength?: number;
  lerp?: number;
  enabled?: boolean;
}

export function useCursorParallax(options: UseCursorParallaxOptions = {}) {
  const { strength = 1, lerp = 0.08, enabled = true } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [nx, setNx] = useState(0);
  const [ny, setNy] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const rect = useRef<DOMRect | null>(null);

  const animate = useCallback(() => {
    current.current.x += (target.current.x - current.current.x) * lerp;
    current.current.y += (target.current.y - current.current.y) * lerp;
    setNx(current.current.x * strength);
    setNy(current.current.y * strength);
    raf.current = requestAnimationFrame(animate);
  }, [lerp, strength]);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const el = containerRef.current;
    if (!el) return;

    const updateRect = () => { rect.current = el.getBoundingClientRect(); };

    const onMove = (e: MouseEvent) => {
      const r = rect.current;
      if (!r) return;
      target.current = {
        x: Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1)),
        y: Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1)),
      };
    };

    const onEnter = () => { updateRect(); setIsActive(true); raf.current = requestAnimationFrame(animate); };
    const onLeave = () => { target.current = { x: 0, y: 0 }; setIsActive(false); };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove, { passive: true });

    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(timer); timer = setTimeout(updateRect, 150); };
    window.addEventListener("resize", onResize, { passive: true });
    updateRect();

    return () => {
      cancelAnimationFrame(raf.current);
      clearTimeout(timer);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled, animate]);

  useEffect(() => {
    if (!isActive) cancelAnimationFrame(raf.current);
  }, [isActive]);

  return { containerRef, nx, ny, isActive };
}
