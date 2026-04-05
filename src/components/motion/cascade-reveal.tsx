"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CascadeRevealProps {
  children: ReactNode;
  className?: string;
  /** Base delay before first child animates. Default 0 */
  baseDelay?: number;
  /** Time between each child in seconds. Default 0.12 */
  staggerInterval?: number;
  /** Easing pattern applied to children */
  easingPattern?: "mixed" | "accelerate" | "decelerate" | "wave";
  /** ScrollTrigger start position. Default "top 80%" */
  start?: string;
}

const easingPatterns = {
  mixed: ["sine.inOut", "power3.inOut", "power2.out", "expo.out", "circ.out"],
  accelerate: ["sine.out", "power2.out", "power3.out", "expo.out", "expo.out"],
  decelerate: ["expo.out", "power3.out", "power2.out", "sine.out", "sine.out"],
  wave: ["sine.inOut", "power2.inOut", "sine.inOut", "power2.inOut", "sine.inOut"],
} as const;

/**
 * CascadeReveal — Enhanced stagger animation with varied easing
 * per child element (wearebrand.io "Staggered Cascade Sequencing").
 *
 * Unlike GSAPStaggerReveal (uniform easing for all children),
 * each child gets its own easing curve from the selected pattern.
 *
 * Usage:
 *   <CascadeReveal easingPattern="mixed">
 *     <Card>...</Card>
 *     <Card>...</Card>
 *     <Card>...</Card>
 *   </CascadeReveal>
 */
export function CascadeReveal({
  children,
  className,
  baseDelay = 0,
  staggerInterval = 0.12,
  easingPattern = "mixed",
  start = "top 80%",
}: CascadeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !ref.current) return;

    const elements = Array.from(ref.current.children) as HTMLElement[];
    if (elements.length === 0) return;

    const pattern = easingPatterns[easingPattern];
    const tweens: gsap.core.Tween[] = [];

    // Set initial state
    gsap.set(elements, { opacity: 0, y: 40 });

    // Create individual tweens with varied easing
    elements.forEach((el, i) => {
      const easeIndex = i % pattern.length;
      // Vary duration slightly per child for organic feel
      const durationVariation = 0.7 + (i % 3) * 0.15;

      const tween = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: durationVariation,
        delay: baseDelay + i * staggerInterval,
        ease: pattern[easeIndex],
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none none",
        },
      });

      tweens.push(tween);
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [baseDelay, staggerInterval, easingPattern, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
