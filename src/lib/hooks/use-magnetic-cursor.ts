"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface UseMagneticCursorOptions {
  /** Attraction strength 0-1. Default 0.3 */
  strength?: number;
  /** Activation radius in px. Default 200 */
  radius?: number;
  /** GSAP ease for attraction. Default "power3.out" */
  ease?: string;
  /** Return-to-origin duration in seconds. Default 0.5 */
  duration?: number;
}

/**
 * useMagneticCursor — Apply magnetic cursor attraction to any element.
 *
 * When the cursor enters the activation radius, the element subtly
 * pulls toward the cursor. On leave, it springs back to origin.
 * Uses GSAP for smooth interpolation.
 *
 * Usage:
 *   const ref = useRef<HTMLButtonElement>(null);
 *   const { isNear } = useMagneticCursor(ref, { strength: 0.3 });
 */
export function useMagneticCursor(
  ref: React.RefObject<HTMLElement | null>,
  options: UseMagneticCursorOptions = {}
) {
  const {
    strength = 0.3,
    radius = 200,
    ease = "power3.out",
    duration = 0.5,
  } = options;

  const [isNear, setIsNear] = useState(false);
  const isNearRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Skip touch-only devices
    if (!window.matchMedia("(hover: hover)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        if (!isNearRef.current) {
          isNearRef.current = true;
          setIsNear(true);
        }

        const pull = (1 - dist / radius) * strength;
        gsap.to(el, {
          x: dx * pull,
          y: dy * pull,
          duration: 0.3,
          ease,
          overwrite: "auto",
        });
      } else if (isNearRef.current) {
        isNearRef.current = false;
        setIsNear(false);

        gsap.to(el, {
          x: 0,
          y: 0,
          duration,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto",
        });
      }
    };

    const handleMouseLeave = () => {
      if (isNearRef.current) {
        isNearRef.current = false;
        setIsNear(false);
      }

      gsap.to(el, {
        x: 0,
        y: 0,
        duration,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [ref, strength, radius, ease, duration]);

  return { isNear };
}
