"use client";

import { useEffect, useRef } from "react";

/**
 * Premium custom cursor — dot + ring that follow mouse with different speeds.
 * The dot follows instantly, the ring trails with inertia.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    // Hover detection for interactive elements
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, [role='button']")) {
        ring.style.width = "48px";
        ring.style.height = "48px";
        ring.style.marginLeft = "-6px";
        ring.style.marginTop = "-6px";
        ring.style.borderColor = `rgba(var(--accent-rgb), 0.6)`;
        dot.style.width = "4px";
        dot.style.height = "4px";
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, [role='button']")) {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.marginLeft = "0";
        ring.style.marginTop = "0";
        ring.style.borderColor = `rgba(var(--accent-rgb), 0.4)`;
        dot.style.width = "8px";
        dot.style.height = "8px";
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
}
