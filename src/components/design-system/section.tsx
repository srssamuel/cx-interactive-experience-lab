"use client";

import { cn } from "@/lib/cn";
import { forwardRef, type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "fullbleed" | "editorial" | "immersive" | "breathing";
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
      default: "py-24 md:py-32 lg:py-40",
      fullbleed: "py-0",
      editorial: "py-24 md:py-32 lg:py-40 max-w-[65ch] mx-auto",
      immersive: "py-0 min-h-screen flex items-center relative overflow-hidden",
      breathing: "py-32 md:py-48 lg:py-64",
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
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizeStyles = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-none",
  };

  return (
    <div
      className={cn(
        "relative z-10 mx-auto w-full px-6 md:px-12",
        sizeStyles[size],
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
}

export function HeroSection({
  children,
  className,
  id,
  overlay = true,
  backgroundElement,
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden",
        "bg-[var(--bg)]",
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
        "flex items-center gap-6 py-16 md:py-24",
        className
      )}
    >
      <span className="font-mono text-[clamp(4rem,10vw,8rem)] font-bold leading-none text-[var(--accent-primary)]/[0.08]">
        {number}
      </span>
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
          Capítulo {number}
        </span>
        <h2 className="mt-1 font-display text-2xl tracking-tight text-[var(--text)] md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="ml-auto hidden h-px flex-1 bg-gradient-to-r from-[var(--border)] to-transparent md:block" />
    </div>
  );
}
