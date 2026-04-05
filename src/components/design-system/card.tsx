"use client";

import { cn } from "@/lib/cn";
import { type ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "insight" | "highlighted" | "numbered" | "comparative";
  accentColor?: string;
  /** Shadow depth preset */
  shadow?: "default" | "layered" | "cinematic" | "float";
}

const shadowStyles = {
  default: "hover:shadow-lg hover:shadow-black/20",
  layered: "hover:[box-shadow:var(--shadow-xl)]",
  cinematic: "hover:[box-shadow:var(--shadow-cinematic)]",
  float: "hover:[box-shadow:var(--shadow-float)]",
} as const;

export function Card({
  children,
  className,
  variant = "default",
  accentColor,
  shadow = "default",
}: CardProps) {
  const variants = {
    default: "bg-[var(--surface)] border-[var(--border)]",
    insight: "bg-[var(--surface)] border-[var(--border)] border-l-[3px] border-l-[var(--accent-primary)]",
    highlighted: "bg-[var(--accent-primary)]/[0.04] border-[var(--accent-primary)]/[0.15]",
    numbered: "bg-[var(--surface)] border-[var(--border)]",
    comparative: "bg-[var(--surface)] border-[var(--border)]",
  };

  return (
    <div
      className={cn(
        "rounded-xl border p-6 md:p-8",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[var(--border-hover)]",
        shadowStyles[shadow],
        variants[variant],
        className
      )}
      style={accentColor ? { borderLeftColor: accentColor } : undefined}
    >
      {children}
    </div>
  );
}

interface ExpandableCardProps {
  children: ReactNode;
  expandedContent: ReactNode;
  className?: string;
}

export function ExpandableCard({
  children,
  expandedContent,
  className,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={cn(
        "cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8",
        "transition-colors duration-300",
        isExpanded
          ? "border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.03]"
          : "hover:border-[var(--border-hover)]",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      {children}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 border-t border-[var(--border)] pt-4">
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
        {isExpanded ? "Recolher" : "Explorar"}{" "}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ↓
        </motion.span>
      </span>
    </motion.div>
  );
}

interface ComparisonCardProps {
  label: string;
  title: string;
  description: string;
  accent: "positive" | "negative" | "neutral";
  className?: string;
}

export function ComparisonCard({
  label,
  title,
  description,
  accent,
  className,
}: ComparisonCardProps) {
  const accentStyles = {
    positive: {
      border: "border-l-[var(--success)]",
      label: "text-[var(--success)]",
      icon: "✓",
    },
    negative: {
      border: "border-l-[var(--danger)]",
      label: "text-[var(--danger)]",
      icon: "✗",
    },
    neutral: {
      border: "border-l-[var(--accent-primary)]",
      label: "text-[var(--accent-primary)]",
      icon: "→",
    },
  };

  const style = accentStyles[accent];

  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] border-l-[3px] bg-[var(--surface)] p-6 md:p-8",
        style.border,
        className
      )}
    >
      <span
        className={cn(
          "text-[0.65rem] font-bold uppercase tracking-[0.15em]",
          style.label
        )}
      >
        {style.icon} {label}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}

interface NumberedCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function NumberedCard({
  number,
  title,
  description,
  className,
}: NumberedCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[var(--border-hover)]",
        className
      )}
    >
      <span className="font-mono text-xs font-bold tracking-[0.1em] text-[var(--accent-primary)]/60">
        {number}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}
