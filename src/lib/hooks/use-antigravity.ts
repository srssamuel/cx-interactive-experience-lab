"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface AntigravityOptions {
  /** Upward drift speed (px/frame). Default 0.5 */
  driftSpeed?: number;
  /** Max rotation amplitude in degrees. Default 15 */
  maxRotation?: number;
  /** Mouse repulsion radius in px. Default 150 */
  repulsionRadius?: number;
  /** Mouse repulsion force multiplier. Default 2 */
  repulsionForce?: number;
  /** Selector for elements to float. Default "[data-float]" */
  selector?: string;
}

interface FloatingElement {
  el: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  originalRect: DOMRect;
  scale: number;
}

/**
 * useAntigravity — Google Antigravity-inspired effect.
 *
 * When activated, selected elements detach from document flow,
 * float upward with gentle drift, rotate slowly, and get
 * repelled by the mouse cursor. Elements wrap around viewport edges.
 *
 * Uses GSAP for smooth per-frame updates (no physics library needed).
 *
 * Usage:
 *   const { activate, deactivate, isActive } = useAntigravity(containerRef);
 *
 * Mark floatable elements with data-float attribute:
 *   <div data-float>...</div>
 */
export function useAntigravity(
  containerRef: React.RefObject<HTMLElement | null>,
  options: AntigravityOptions = {}
) {
  const {
    driftSpeed = 0.5,
    maxRotation = 12,
    repulsionRadius = 150,
    repulsionForce = 2.5,
    selector = "[data-float]",
  } = options;

  const [isActive, setIsActive] = useState(false);
  const floatingRef = useRef<FloatingElement[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const mouseCleanupRef = useRef<(() => void) | null>(null);

  const animate = useCallback(() => {
    const items = floatingRef.current;
    const mouse = mouseRef.current;
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    for (const item of items) {
      // Gravity inversion — gentle upward drift
      item.vy -= driftSpeed * 0.05;

      // Random horizontal wobble
      item.vx += (Math.random() - 0.5) * 0.08;

      // Damping
      item.vx *= 0.995;
      item.vy *= 0.995;

      // Mouse repulsion
      const dx = item.x - mouse.x;
      const dy = item.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < repulsionRadius && dist > 0) {
        const force = ((repulsionRadius - dist) / repulsionRadius) * repulsionForce;
        item.vx += (dx / dist) * force;
        item.vy += (dy / dist) * force;
      }

      // Update position
      item.x += item.vx;
      item.y += item.vy;

      // Rotation
      item.rotation += item.rotationSpeed;

      // Wrap around viewport edges
      const halfW = item.originalRect.width / 2;
      const halfH = item.originalRect.height / 2;
      if (item.y < -halfH) item.y = vh + halfH;
      if (item.y > vh + halfH) item.y = -halfH;
      if (item.x < -halfW) item.x = vw + halfW;
      if (item.x > vw + halfW) item.x = -halfW;

      // Apply transform via GSAP for smooth rendering
      gsap.set(item.el, {
        x: item.x - item.originalRect.left - item.originalRect.width / 2,
        y: item.y - item.originalRect.top - item.originalRect.height / 2,
        rotation: item.rotation,
        scale: item.scale,
      });
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [driftSpeed, repulsionRadius, repulsionForce]);

  const activate = useCallback(() => {
    const container = containerRef.current;
    if (!container || isActive) return;

    const elements = container.querySelectorAll<HTMLElement>(selector);
    if (elements.length === 0) return;

    // Capture original positions and create floating items
    const items: FloatingElement[] = [];
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      el.style.position = "fixed";
      el.style.zIndex = "1000";
      el.style.left = "0";
      el.style.top = "0";
      el.style.width = `${rect.width}px`;
      el.style.pointerEvents = "none";
      el.style.willChange = "transform";

      items.push({
        el,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        vx: (Math.random() - 0.5) * 2,
        vy: -(Math.random() * 1.5 + 0.5), // Initial upward impulse
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * maxRotation * 0.02,
        originalRect: rect,
        scale: 1,
      });
    });

    floatingRef.current = items;
    setIsActive(true);

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    // Mouse tracking
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    mouseCleanupRef.current = () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [containerRef, isActive, selector, maxRotation, animate]);

  const deactivate = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    cancelAnimationFrame(rafRef.current);

    // Animate elements back to original positions
    for (const item of floatingRef.current) {
      gsap.to(item.el, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          item.el.style.position = "";
          item.el.style.zIndex = "";
          item.el.style.left = "";
          item.el.style.top = "";
          item.el.style.width = "";
          item.el.style.pointerEvents = "";
          item.el.style.willChange = "";
        },
      });
    }

    mouseCleanupRef.current?.();
    mouseCleanupRef.current = null;

    floatingRef.current = [];
    setIsActive(false);
  }, [containerRef]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      mouseCleanupRef.current?.();
      mouseCleanupRef.current = null;
    };
  }, []);

  const toggle = useCallback(() => {
    if (isActive) {
      deactivate();
    } else {
      activate();
    }
  }, [isActive, activate, deactivate]);

  return { activate, deactivate, isActive, toggle };
}
