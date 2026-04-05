"use client";

import { cn } from "@/lib/cn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  id: string;
  label: string;
  title: string;
  description: string;
  accent?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-primary)]/30 via-[var(--border)] to-transparent md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12 md:space-y-16">
        {items.map((item, i) => (
          <TimelineEntry key={item.id} item={item} index={i} isEven={i % 2 === 0} />
        ))}
      </div>
    </div>
  );
}

function TimelineEntry({
  item,
  index,
  isEven,
}: {
  item: TimelineItem;
  index: number;
  isEven: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative grid gap-4 pl-12 md:grid-cols-2 md:gap-12 md:pl-0",
        isEven ? "md:text-right" : ""
      )}
    >
      {/* Dot */}
      <div className="absolute left-2.5 top-1.5 z-10 h-3 w-3 rounded-full border-2 border-[var(--accent-primary)] bg-[var(--bg)] md:left-1/2 md:-translate-x-1.5" />

      {/* Content */}
      <div
        className={cn(
          isEven ? "md:pr-12" : "md:order-2 md:pl-12"
        )}
      >
        <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
          {item.label}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          {item.description}
        </p>
      </div>

      {/* Empty space for alternating layout */}
      <div className={cn(isEven ? "md:order-2" : "")} />
    </motion.div>
  );
}
