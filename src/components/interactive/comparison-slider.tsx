"use client";

import { cn } from "@/lib/cn";
import { useState, useRef, useCallback } from "react";
import { type ReactNode } from "react";

interface ComparisonSliderProps {
  before: { label: string; content: ReactNode };
  after: { label: string; content: ReactNode };
  className?: string;
  initialPosition?: number;
}

export function ComparisonSlider({
  before,
  after,
  className,
  initialPosition = 50,
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative cursor-col-resize select-none overflow-hidden rounded-xl border border-[var(--border)]",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      role="slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Comparison slider"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      }}
    >
      {/* Before side (full width, clipped) */}
      <div className="relative min-h-[300px] w-full bg-[var(--surface)]">
        <div className="absolute inset-0 p-8">
          <span className="inline-block rounded-md bg-[var(--danger)]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--danger)]">
            {before.label}
          </span>
          <div className="mt-4">{before.content}</div>
        </div>
      </div>

      {/* After side (overlays, clipped by position) */}
      <div
        className="absolute inset-0 bg-[var(--surface-elevated)]"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <div className="p-8">
          <span className="inline-block rounded-md bg-[var(--success)]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--success)]">
            {after.label}
          </span>
          <div className="mt-4">{after.content}</div>
        </div>
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-[2px] bg-[var(--accent-primary)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--accent-primary)] bg-[var(--bg)] p-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-[var(--accent-primary)]"
          >
            <path
              d="M4 2L1 6L4 10M8 2L11 6L8 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
