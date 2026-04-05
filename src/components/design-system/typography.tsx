"use client";

import { cn } from "@/lib/cn";
import { type ReactNode } from "react";

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
        "font-display font-light tracking-[-0.05em] leading-[0.9]",
        "text-[clamp(2.5rem,7vw,6rem)]",
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
        "font-display font-normal tracking-[-0.035em] leading-[1.0]",
        "text-[clamp(1.8rem,4.5vw,3.5rem)]",
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
        "font-display font-medium tracking-[-0.015em] leading-[1.2]",
        "text-[clamp(1.25rem,2.5vw,1.75rem)]",
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
        "text-lg leading-[1.75] text-[var(--text-secondary)]",
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
        "inline-flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]",
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
        "font-display text-[clamp(1.5rem,4vw,3.2rem)] font-light italic leading-[1.1] tracking-[-0.03em]",
        "text-[var(--text)] max-w-[22ch]",
        "relative before:absolute before:-left-6 before:top-0 before:h-full before:w-[2px] before:bg-[var(--accent-primary)]/20",
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

/* ─── New editorial components ─── */

interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
  className?: string;
}

export function PullQuote({
  children,
  attribution,
  className,
}: PullQuoteProps) {
  return (
    <figure
      className={cn(
        "relative py-12 md:py-16",
        className
      )}
    >
      <div className="absolute left-0 top-0 font-display text-[8rem] leading-none text-[var(--accent-primary)]/[0.06]">
        &ldquo;
      </div>
      <blockquote className="relative font-display text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-[1.4] tracking-[-0.01em] text-[var(--text)]">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-sm font-medium text-[var(--text-muted)]">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}

interface SplitContentProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  reverse?: boolean;
  ratio?: "equal" | "wide-left" | "wide-right";
}

export function SplitContent({
  left,
  right,
  className,
  reverse = false,
  ratio = "equal",
}: SplitContentProps) {
  const ratioStyles = {
    equal: "md:grid-cols-2",
    "wide-left": "md:grid-cols-[1.4fr_1fr]",
    "wide-right": "md:grid-cols-[1fr_1.4fr]",
  };

  return (
    <div
      className={cn(
        "grid gap-8 md:gap-16 items-start",
        ratioStyles[ratio],
        reverse && "md:[&>*:first-child]:order-2",
        className
      )}
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

interface FullBleedTextProps {
  children: ReactNode;
  className?: string;
}

export function FullBleedText({
  children,
  className,
}: FullBleedTextProps) {
  return (
    <div
      className={cn(
        "font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.04em]",
        "text-[var(--text)]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface EvidenceBlockProps {
  stat: string;
  context: string;
  source?: string;
  className?: string;
}

export function EvidenceBlock({
  stat,
  context,
  source,
  className,
}: EvidenceBlockProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-l-2 border-[var(--accent-primary)]/30 pl-6",
        className
      )}
    >
      <span className="font-mono text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]">
        {stat}
      </span>
      <p className="text-base leading-relaxed text-[var(--text-secondary)]">
        {context}
      </p>
      {source && (
        <span className="text-xs text-[var(--text-muted)]">{source}</span>
      )}
    </div>
  );
}
