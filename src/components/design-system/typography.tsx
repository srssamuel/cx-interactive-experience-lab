"use client";

import { cn } from "@/lib/cn";
import { type ReactNode, type ElementType } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function DisplayHeading({
  children,
  className,
  id,
}: TypographyProps) {
  return (
    <h1
      id={id}
      className={cn(
        "font-display font-normal tracking-[-0.04em] leading-[0.95]",
        "text-[clamp(2.5rem,6vw,5.5rem)]",
        "text-[var(--text)]",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function SectionHeading({
  children,
  className,
  id,
}: TypographyProps) {
  return (
    <h2
      id={id}
      className={cn(
        "font-display font-normal tracking-[-0.03em] leading-[1.05]",
        "text-[clamp(1.8rem,4.5vw,3.8rem)]",
        "text-[var(--text)]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SubHeading({
  children,
  className,
  id,
}: TypographyProps) {
  return (
    <h3
      id={id}
      className={cn(
        "font-display font-normal tracking-[-0.02em] leading-[1.15]",
        "text-[clamp(1.25rem,2.5vw,2rem)]",
        "text-[var(--text)]",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function BodyText({
  children,
  className,
}: TypographyProps) {
  return (
    <p
      className={cn(
        "text-lg leading-[1.7] text-[var(--text-secondary)]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Overline({
  children,
  className,
}: TypographyProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em]",
        "text-[var(--accent-primary)]",
        className
      )}
    >
      <span className="h-px w-8 bg-current opacity-40" />
      {children}
    </span>
  );
}

export function StatNumber({
  children,
  className,
}: TypographyProps) {
  return (
    <span
      className={cn(
        "font-mono text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-tight",
        "text-[var(--accent-primary)]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatLabel({
  children,
  className,
}: TypographyProps) {
  return (
    <span
      className={cn(
        "text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Provocation({
  children,
  className,
}: TypographyProps) {
  return (
    <blockquote
      className={cn(
        "font-display text-[clamp(1.5rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-[-0.02em]",
        "text-[var(--text)] max-w-[20ch]",
        className
      )}
    >
      {children}
    </blockquote>
  );
}

export function AccentText({
  children,
  className,
}: TypographyProps) {
  return (
    <span
      className={cn(
        "text-[var(--accent-primary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
