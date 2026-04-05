"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  /** Holographic color scheme */
  scheme?: "prismatic" | "aurora" | "neon" | "subtle";
  /** Enable tilt on mouse move */
  tilt?: boolean;
  /** Max tilt degrees */
  maxTilt?: number;
  /** Glow intensity (0-1) */
  glowIntensity?: number;
}

const schemeColors: Record<string, string[]> = {
  prismatic: ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff", "#5f27cd"],
  aurora: ["#00d2ff", "#7b2ff7", "#00ff88", "#ff006e", "#3a86ff"],
  neon: ["#39ff14", "#ff073a", "#00fff5", "#f5ff00", "#ff00ff"],
  subtle: ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.03)", "rgba(255,255,255,0.12)"],
};

/**
 * HolographicCard — Card with prismatic light refraction effect.
 * The border shimmer and surface gradient shift follow cursor movement,
 * creating a holographic / iridescent look.
 */
export function HolographicCard({
  children,
  className,
  scheme = "prismatic",
  tilt = true,
  maxTilt = 8,
  glowIntensity = 0.4,
}: HolographicCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0-1
      const y = (e.clientY - rect.top) / rect.height; // 0-1

      const colors = schemeColors[scheme];
      const angle = Math.round(x * 360);

      const tiltX = tilt ? (y - 0.5) * maxTilt * -1 : 0;
      const tiltY = tilt ? (x - 0.5) * maxTilt : 0;

      setStyle({
        "--holo-angle": `${angle}deg`,
        "--holo-x": `${x * 100}%`,
        "--holo-y": `${y * 100}%`,
        "--holo-glow": `${glowIntensity}`,
        transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
        backgroundImage: `
          conic-gradient(
            from ${angle}deg at ${x * 100}% ${y * 100}%,
            ${colors.join(", ")}, ${colors[0]}
          )
        `,
      } as React.CSSProperties);
    },
    [scheme, tilt, maxTilt, glowIntensity]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      backgroundImage: "none",
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "holographic-card",
        "group/holo relative overflow-hidden rounded-2xl transition-transform duration-300 ease-out",
        className
      )}
      style={{
        transition: "transform 0.3s ease-out",
        ...style,
      }}
    >
      {/* Holographic shimmer border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/holo:opacity-100"
        style={{
          background: `conic-gradient(from var(--holo-angle, 0deg) at var(--holo-x, 50%) var(--holo-y, 50%), ${schemeColors[scheme].join(", ")}, ${schemeColors[scheme][0]})`,
          padding: "1px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* Spotlight glow on surface */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover/holo:opacity-100"
        style={{
          background: `radial-gradient(circle at var(--holo-x, 50%) var(--holo-y, 50%), rgba(255,255,255,${glowIntensity * 0.15}) 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * HolographicBadge — Small holographic accent element
 */
export function HolographicBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-4 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em]",
        "bg-gradient-to-r from-white/[0.06] to-white/[0.02] backdrop-blur-sm",
        "border border-white/[0.08]",
        "holographic-shimmer",
        className
      )}
    >
      {children}
    </span>
  );
}
