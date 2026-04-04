"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPRevealProps {
  children: ReactNode;
  className?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  scrub?: boolean | number;
  pin?: boolean;
  start?: string;
  end?: string;
  markers?: boolean;
}

export function GSAPReveal({
  children,
  className,
  from = { opacity: 0, y: 60 },
  to = { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  scrub = false,
  pin = false,
  start = "top 85%",
  end = "top 20%",
}: GSAPRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !ref.current) return;

    gsap.fromTo(ref.current, from, {
      ...to,
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        scrub,
        pin,
        toggleActions: scrub ? undefined : "play none none none",
      },
    });
  }, { scope: ref, dependencies: [from, to, scrub, pin, start, end] });

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

interface GSAPStaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerAmount?: number;
  start?: string;
}

export function GSAPStaggerReveal({
  children,
  className,
  staggerAmount = 0.12,
  start = "top 80%",
}: GSAPStaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !ref.current) return;

    const elements = ref.current.children;
    if (!elements.length) return;

    gsap.set(elements, { opacity: 0, y: 40 });

    const tween = gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: staggerAmount,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [staggerAmount, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

interface GSAPParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function GSAPParallax({
  children,
  className,
  speed = -50,
}: GSAPParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !ref.current) return;

    const tween = gsap.to(ref.current, {
      y: speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

interface GSAPCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function GSAPCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: GSAPCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const counterRef = useRef({ value: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!ref.current) return;

    if (prefersReducedMotion) {
      ref.current.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const tween = gsap.to(counterRef.current, {
      value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(counterRef.current.value)}${suffix}`;
        }
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, suffix, prefix, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}0{suffix}
    </span>
  );
}
