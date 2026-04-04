"use client";

import { cn } from "@/lib/cn";
import { forwardRef, type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "fullbleed" | "editorial" | "immersive" | "breathing" | "asymmetric" | "compact";
  background?: "base" | "surface" | "elevated" | "accent-muted";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, variant = "default", background = "base" }, ref) => {
    const bgStyles = {
      base: "bg-[var(--bg)]",
      surface: "bg-[var(--surface)]",
      elevated: "bg-[var(--surface-elevated)]",
      "accent-muted": "bg-[var(--accent-primary)]/[0.03]",
    };

    const variantStyles = {
      default: "py-20 md:py-28 lg:py-36",
      fullbleed: "py-0",
      editorial: "py-20 md:py-28 lg:py-36",
      immersive: "py-0 min-h-screen flex items-center relative overflow-hidden",
      breathing: "py-24 md:py-32 lg:py-44",
      asymmetric: "py-16 md:py-24 lg:py-32",
      compact: "py-12 md:py-16 lg:py-20",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative w-full",
          bgStyles[background],
          variantStyles[variant],
          className
        )}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
  align?: "center" | "left" | "right";
}

export function Container({
  children,
  className,
  size = "default",
  align = "center",
}: ContainerProps) {
  const sizeStyles = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-none",
  };

  const alignStyles = {
    center: "mx-auto",
    left: "mr-auto",
    right: "ml-auto",
  };

  return (
    <div
      className={cn(
        "relative z-10 w-full px-6 md:px-12",
        sizeStyles[size],
        alignStyles[align],
        className
      )}
    >
      {children}
    </div>
  );
}

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  overlay?: boolean;
  backgroundElement?: ReactNode;
  align?: "center" | "left";
}

export function HeroSection({
  children,
  className,
  id,
  overlay = true,
  backgroundElement,
  align = "center",
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen overflow-hidden",
        "bg-[var(--bg)]",
        align === "center" ? "items-center justify-center" : "items-end pb-24 md:pb-32 lg:pb-40",
        className
      )}
    >
      {backgroundElement && (
        <div className="absolute inset-0 z-0">{backgroundElement}</div>
      )}
      {overlay && (
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[var(--bg)]/60 via-[var(--bg)]/30 to-[var(--bg)]/80" />
      )}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

interface ChapterDividerProps {
  number: string;
  title: string;
  className?: string;
}

export function ChapterDivider({
  number,
  title,
  className,
}: ChapterDividerProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-6 py-12 md:py-20",
        className
      )}
    >
      <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-[var(--accent-primary)]/[0.06]">
        {number}
      </span>
      <div>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]/70">
          Capítulo {number}
        </span>
        <h2 className="mt-1 font-display text-xl tracking-tight text-[var(--text)] md:text-2xl">
          {title}
        </h2>
      </div>
      <div className="ml-auto hidden h-px flex-1 bg-gradient-to-r from-[var(--border)] to-transparent md:block" />
    </div>
  );
}
