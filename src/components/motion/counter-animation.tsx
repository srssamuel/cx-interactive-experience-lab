"use client";

import { cn } from "@/lib/cn";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function CounterAnimation({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  decimals = 0,
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [displayValue, setDisplayValue] = useState("0");
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.round(latest).toString()
        );
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, decimals, motionValue]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

interface StatBlockProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  decimals?: number;
}

export function StatBlock({
  value,
  suffix = "%",
  prefix = "",
  label,
  className,
  decimals = 0,
}: StatBlockProps) {
  return (
    <div className={cn("text-center", className)}>
      <CounterAnimation
        value={value}
        suffix={suffix}
        prefix={prefix}
        decimals={decimals}
        className="block font-mono text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]"
      />
      <span className="mt-2 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
        {label}
      </span>
    </div>
  );
}
