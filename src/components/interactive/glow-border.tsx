"use client";

import { cn } from "@/lib/cn";
import { type ReactNode } from "react";

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string;
}

export function GlowBorder({
  children,
  className,
  borderWidth = 1,
  duration = 4,
  color = "var(--accent-primary)",
}: GlowBorderProps) {
  return (
    <div className={cn("relative rounded-xl", className)}>
      {/* Animated gradient border */}
      <div
        className="absolute -inset-px rounded-xl"
        style={{
          padding: borderWidth,
          background: `conic-gradient(from var(--glow-angle, 0deg), transparent 40%, ${color} 50%, transparent 60%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: `glowRotate ${duration}s linear infinite`,
        }}
      />
      {/* Content */}
      <div className="relative rounded-xl bg-[var(--surface)] z-10">
        {children}
      </div>
    </div>
  );
}
