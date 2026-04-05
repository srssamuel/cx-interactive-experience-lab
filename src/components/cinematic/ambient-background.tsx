"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type BackgroundVariant =
  | "mesh-warm"      // Warm radial gradients (amber/coral tones)
  | "mesh-cool"      // Cool radial gradients (blue/teal)
  | "mesh-violet"    // Violet/purple ambient
  | "grid-data"      // Animated dot grid for data sections
  | "aurora"         // Animated aurora borealis
  | "topography"     // Topographic contour lines
  | "radial-burst"   // Centered radial light burst
  | "diagonal-light" // Diagonal light streak
  | "none";

interface AmbientBackgroundProps {
  variant: BackgroundVariant;
  className?: string;
  /** Opacity of the effect (0-1) */
  intensity?: number;
  /** Whether the effect animates on scroll */
  scrollAnimated?: boolean;
}

/**
 * AmbientBackground — Unique visual background per section/chapter.
 * Breaks the monotonous dark background by adding subtle, themed
 * visual textures that differentiate each section.
 */
export function AmbientBackground({
  variant,
  className,
  intensity = 1,
  scrollAnimated = true,
}: AmbientBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollAnimated || !ref.current || variant === "none") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: intensity,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: ref, dependencies: [variant, scrollAnimated, intensity] });

  if (variant === "none") return null;

  const baseClasses = "pointer-events-none absolute inset-0 overflow-hidden";

  return (
    <div
      ref={ref}
      className={cn(baseClasses, className)}
      style={{ opacity: scrollAnimated ? 0 : intensity }}
      aria-hidden="true"
    >
      {variant === "mesh-warm" && (
        <>
          <div
            className="absolute -left-1/4 -top-1/4 h-[80%] w-[80%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute -bottom-1/4 -right-1/4 h-[60%] w-[60%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(248,113,113,0.04) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </>
      )}

      {variant === "mesh-cool" && (
        <>
          <div
            className="absolute -right-1/4 -top-1/4 h-[70%] w-[70%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute -bottom-1/3 -left-1/4 h-[50%] w-[50%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </>
      )}

      {variant === "mesh-violet" && (
        <>
          <div
            className="absolute left-1/4 top-0 h-[60%] w-[60%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute -bottom-1/4 right-1/4 h-[40%] w-[40%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </>
      )}

      {variant === "grid-data" && (
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage: `
              radial-gradient(circle, rgba(var(--accent-primary-rgb),0.12) 1px, transparent 1px)
            `,
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />
      )}

      {variant === "aurora" && (
        <>
          <div className="aurora-band aurora-band-1" />
          <div className="aurora-band aurora-band-2" />
          <div className="aurora-band aurora-band-3" />
        </>
      )}

      {variant === "topography" && (
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q50 50 100 100 T200 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M0 130 Q50 80 100 130 T200 130" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M0 70 Q50 20 100 70 T200 70" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      )}

      {variant === "radial-burst" && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "120%",
            height: "120%",
            background: `
              radial-gradient(ellipse at center,
                rgba(var(--accent-primary-rgb), 0.05) 0%,
                rgba(var(--accent-primary-rgb), 0.02) 30%,
                transparent 60%
              )
            `,
          }}
        />
      )}

      {variant === "diagonal-light" && (
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                transparent 0%,
                rgba(var(--accent-primary-rgb), 0.03) 30%,
                transparent 50%,
                rgba(var(--accent-secondary-rgb), 0.02) 70%,
                transparent 100%
              )
            `,
          }}
        />
      )}
    </div>
  );
}
