"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport cursor spotlight — follows mouse with a soft radial glow.
 * Purely visual, pointer-events: none.
 */
export function CursorSpotlight({ color = "var(--accent-rgb)" }: { color?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const el = ref.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const lerp = 0.08;

    const animate = () => {
      cx += (x - cx) * lerp;
      cy += (y - cy) * lerp;
      el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onEnter = () => {
      el.style.opacity = "1";
      raf = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      el.style.opacity = "0";
      cancelAnimationFrame(raf);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[1] opacity-0 transition-opacity duration-500"
      style={{
        width: 400,
        height: 400,
        background: `radial-gradient(circle, rgba(${color}, 0.06) 0%, rgba(${color}, 0.02) 30%, transparent 60%)`,
        willChange: "transform",
      }}
    />
  );
}
