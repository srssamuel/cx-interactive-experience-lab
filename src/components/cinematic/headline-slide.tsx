"use client";

import { cn } from "@/lib/cn";
import { type ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── HeadlineSlide: a full-viewport slide dominated by typography ─── */
interface HeadlineSlideProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "base" | "surface" | "accent-muted";
  align?: "left" | "center";
  grain?: boolean;
  /** Text shadow depth for cinematic presence */
  textShadow?: "none" | "subtle" | "cinematic" | "deep";
}

const textShadowMap = {
  none: undefined,
  subtle: "var(--text-shadow-subtle)",
  cinematic: "var(--text-shadow-cinematic)",
  deep: "var(--text-shadow-deep)",
} as const;

export function HeadlineSlide({
  children,
  className,
  id,
  background = "base",
  align = "left",
  grain = true,
  textShadow = "none",
}: HeadlineSlideProps) {
  const bgStyles = {
    base: "bg-[var(--bg)]",
    surface: "bg-[var(--surface)]",
    "accent-muted": "bg-[var(--accent-primary)]/[0.02]",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-[80vh] items-center overflow-hidden",
        bgStyles[background],
        align === "center" ? "justify-center text-center" : "",
        className
      )}
    >
      {grain && <GrainOverlay />}
      <div
        className={cn(
          "relative z-10 w-full px-6 md:px-12",
          align === "center" ? "max-w-5xl mx-auto" : "max-w-7xl mx-auto"
        )}
        style={textShadowMap[textShadow] ? { textShadow: textShadowMap[textShadow] } : undefined}
      >
        {children}
      </div>
    </section>
  );
}

/* ─── DataSpectacle: big number moment with cinematic presentation ─── */
interface DataSpectacleProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "base" | "surface";
  accent?: boolean;
}

export function DataSpectacle({
  children,
  className,
  id,
  background = "base",
  accent = false,
}: DataSpectacleProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-[70vh] items-center overflow-hidden",
        background === "surface" ? "bg-[var(--surface)]" : "bg-[var(--bg)]",
        className
      )}
    >
      {accent && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.04)_0%,transparent_60%)]" />
      )}
      <GrainOverlay />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}

/* ─── ChapterTransition: visual break between major chapters ─── */
interface ChapterTransitionProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
  /** Text shadow depth for cinematic presence */
  textShadow?: "none" | "subtle" | "cinematic" | "deep";
}

const cascadeEasings = ["power3.out", "sine.inOut", "expo.out", "power2.out", "circ.out"];

export function ChapterTransition({
  number,
  title,
  subtitle,
  className,
  id,
  textShadow = "none",
}: ChapterTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const els = ref.current.querySelectorAll("[data-reveal]");
    gsap.set(els, { opacity: 0, y: 30, skewY: 1.5 });

    // Cascade: each element gets its own easing
    const tweens: gsap.core.Tween[] = [];
    els.forEach((el, i) => {
      const tween = gsap.to(el, {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 0.8 + (i % 3) * 0.1,
        delay: i * 0.12,
        ease: cascadeEasings[i % cascadeEasings.length],
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
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
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative flex min-h-[50vh] items-center bg-[var(--bg)]",
        className
      )}
    >
      <GrainOverlay />
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12"
        style={textShadowMap[textShadow] ? { textShadow: textShadowMap[textShadow] } : undefined}
      >
        <div className="flex items-end gap-6 md:gap-10">
          <span
            data-reveal
            className="font-mono text-[clamp(5rem,15vw,12rem)] font-bold leading-none text-[var(--accent-primary)]/[0.05]"
          >
            {number}
          </span>
          <div className="pb-2 md:pb-4">
            <span
              data-reveal
              className="block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]/60"
            >
              Capítulo {number}
            </span>
            <h2
              data-reveal
              className="mt-1 font-display text-[clamp(1.5rem,4vw,3rem)] font-light tracking-[-0.03em] text-[var(--text)]"
            >
              {title}
            </h2>
            {subtitle && (
              <p data-reveal className="mt-2 max-w-[40ch] text-sm text-[var(--text-secondary)]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div data-reveal className="mt-6 h-px w-full bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--border)] to-transparent" />
      </div>
    </section>
  );
}

/* ─── GrainOverlay: subtle noise texture ─── */
export function GrainOverlay({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
