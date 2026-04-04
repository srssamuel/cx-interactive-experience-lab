"use client";

import { cn } from "@/lib/cn";
import { type ReactNode, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Full-bleed image background with overlay content ─── */
interface ImageHeroProps {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  id?: string;
  overlay?: "dark" | "gradient" | "amber" | "none";
  height?: "full" | "tall" | "medium";
  parallax?: boolean;
}

export function ImageHero({
  src,
  alt,
  children,
  className,
  id,
  overlay = "gradient",
  height = "full",
  parallax = true,
}: ImageHeroProps) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax || !imgRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tween = gsap.to(imgRef.current, {
      y: 80,
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current.parentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [parallax]);

  const heightStyles = {
    full: "min-h-screen",
    tall: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  };

  const overlayStyles = {
    dark: "bg-[var(--bg)]/70",
    gradient: "bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-[var(--bg)]/30",
    amber: "bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-[rgba(245,158,11,0.05)]",
    none: "",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative flex items-end overflow-hidden",
        heightStyles[height],
        className
      )}
    >
      <div ref={imgRef} className="absolute inset-0 -top-20 z-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      {overlay !== "none" && (
        <div className={cn("absolute inset-0 z-[1]", overlayStyles[overlay])} />
      )}
      {/* Grain texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />
      <div className="relative z-10 w-full pb-16 md:pb-24">{children}</div>
    </section>
  );
}

/* ─── Split image + content ─── */
interface ImageSplitProps {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  imagePosition?: "left" | "right";
  imageRatio?: "equal" | "wide" | "narrow";
}

export function ImageSplit({
  src,
  alt,
  children,
  className,
  imagePosition = "right",
  imageRatio = "equal",
}: ImageSplitProps) {
  const ratioStyles = {
    equal: "md:grid-cols-2",
    wide: imagePosition === "right" ? "md:grid-cols-[1fr_1.3fr]" : "md:grid-cols-[1.3fr_1fr]",
    narrow: imagePosition === "right" ? "md:grid-cols-[1.4fr_1fr]" : "md:grid-cols-[1fr_1.4fr]",
  };

  return (
    <div className={cn("grid gap-0 items-stretch", ratioStyles[imageRatio], className)}>
      {imagePosition === "left" && (
        <div className="relative min-h-[300px] md:min-h-0 overflow-hidden">
          <Image src={src} alt={alt} fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--bg)]/20" />
        </div>
      )}
      <div className="flex items-center">
        <div className="w-full px-8 py-12 md:px-14 md:py-20">{children}</div>
      </div>
      {imagePosition === "right" && (
        <div className="relative min-h-[300px] md:min-h-0 overflow-hidden">
          <Image src={src} alt={alt} fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--bg)]/20" />
        </div>
      )}
    </div>
  );
}

/* ─── Floating image with depth effect ─── */
interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
}

export function FloatingImage({
  src,
  alt,
  className,
  aspectRatio = "landscape",
}: FloatingImageProps) {
  const aspectStyles = {
    landscape: "aspect-[16/10]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  };

  return (
    <div className={cn("relative", aspectStyles[aspectRatio], className)}>
      {/* Shadow layer */}
      <div className="absolute inset-2 rounded-xl bg-[var(--accent-primary)]/[0.06] blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      {/* Edge gradient */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.05]" />
    </div>
  );
}
