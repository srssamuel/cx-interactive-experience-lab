"use client";

import { cn } from "@/lib/cn";
import { type ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function BentoGrid({
  children,
  className,
  columns = 3,
}: BentoGridProps) {
  const colStyles = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-4 auto-rows-[minmax(180px,auto)]",
        colStyles[columns],
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
}

export function BentoItem({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}: BentoItemProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]/20 p-6 transition-all duration-300",
        "hover:border-[var(--accent-primary)]/12 hover:bg-[var(--surface)]/40",
        colSpan === 2 && "md:col-span-2",
        rowSpan === 2 && "md:row-span-2",
        className
      )}
    >
      {children}
    </div>
  );
}
