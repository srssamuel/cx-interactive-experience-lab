"use client";

import { cn } from "@/lib/utils";

export function Meteors({ number = 20 }: { number?: number }) {
  const meteors = Array.from({ length: number }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 1.5 + Math.random() * 3;
        return (
          <span
            key={i}
            className={cn(
              "absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-[var(--color-primary)] shadow-[0_0_0_1px_rgba(0,228,184,0.05)]",
              "before:absolute before:top-1/2 before:h-px before:w-12 before:-translate-y-1/2 before:bg-gradient-to-r before:from-[rgba(0,228,184,0.3)] before:to-transparent"
            )}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
