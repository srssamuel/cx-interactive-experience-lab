"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CinematicHeadlineProps {
  children: ReactNode;
  className?: string;
  /** Text shadow depth preset */
  shadow?: "none" | "subtle" | "cinematic" | "deep";
  /** Tag to render */
  tag?: "h1" | "h2" | "h3";
  /** GSAP entrance animation */
  animate?: boolean;
}

const shadowMap = {
  none: "none",
  subtle: "var(--text-shadow-subtle)",
  cinematic: "var(--text-shadow-cinematic)",
  deep: "var(--text-shadow-deep)",
} as const;

/**
 * CinematicHeadline — Hero headline with text-shadow depth
 * and optional GSAP entrance animation.
 *
 * For "money shot" headlines that need cinematic presence.
 * Different from TextReveal (letter-by-letter) and DisplayHeading (plain).
 */
export function CinematicHeadline({
  children,
  className,
  shadow = "cinematic",
  tag: Tag = "h1",
  animate = true,
}: CinematicHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!animate || !ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: ref, dependencies: [animate] });

  return (
    <Tag
      ref={ref}
      className={cn("font-display", className)}
      style={{
        textShadow: shadowMap[shadow],
      }}
    >
      {children}
    </Tag>
  );
}
