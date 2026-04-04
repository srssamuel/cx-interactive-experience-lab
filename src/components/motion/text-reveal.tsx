"use client";

import { cn } from "@/lib/cn";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── TextReveal: Letters animate in one by one ─── */
interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  trigger?: "scroll" | "mount";
}

export function TextReveal({
  text,
  className,
  tag: Tag = "h2",
  delay = 0,
  stagger = 0.03,
  trigger = "scroll",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const chars = containerRef.current.querySelectorAll("[data-char]");
    gsap.set(chars, { opacity: 0, y: 20, rotateX: -40 });

    const config: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      stagger,
      delay,
      ease: "power3.out",
    };

    if (trigger === "scroll") {
      const tween = gsap.to(chars, {
        ...config,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    } else {
      const tween = gsap.to(chars, config);
      return () => tween.kill();
    }
  }, [text, delay, stagger, trigger]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} style={{ perspective: "600px" }}>
      <Tag className={cn("inline", className)}>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <span
                key={`${wi}-${ci}`}
                data-char
                className="inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </span>
            ))}
            {wi < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </Tag>
    </div>
  );
}

/* ─── BlurReveal: Text goes from blurred to sharp ─── */
interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BlurReveal({
  children,
  className,
  delay = 0,
}: BlurRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.set(ref.current, { filter: "blur(12px)", opacity: 0, y: 10 });

    const tween = gsap.to(ref.current, {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
