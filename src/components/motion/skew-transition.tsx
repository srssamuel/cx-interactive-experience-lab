"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkewTransitionProps {
  children: ReactNode;
  className?: string;
  /** Skew direction */
  direction?: "up" | "down";
  /** Skew intensity */
  intensity?: "subtle" | "normal" | "heavy";
}

const intensityMap = {
  subtle: 2,
  normal: 4,
  heavy: 8,
} as const;

/**
 * SkewTransition — Section wrapper that applies a CSS skewY
 * transform on scroll entry, creating a visual "fold" effect
 * between sections (wearebrand.io-inspired).
 */
export function SkewTransition({
  children,
  className,
  direction = "up",
  intensity = "normal",
}: SkewTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !ref.current) return;

    const skewDeg = intensityMap[intensity] * (direction === "up" ? 1 : -1);

    gsap.set(ref.current, { skewY: skewDeg, transformOrigin: "center center" });

    const tween = gsap.to(ref.current, {
      skewY: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
        onEnter: () => {
          if (ref.current) ref.current.style.willChange = "transform";
        },
        onLeave: () => {
          if (ref.current) ref.current.style.willChange = "";
        },
        onEnterBack: () => {
          if (ref.current) ref.current.style.willChange = "transform";
        },
        onLeaveBack: () => {
          if (ref.current) ref.current.style.willChange = "";
        },
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction, intensity]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {children}
    </div>
  );
}
