"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function GlowCard({
  children,
  className,
  glowColor = "rgba(0,228,184,0.15)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        "relative rounded-2xl border border-white/[0.06] bg-[rgba(10,16,28,0.6)] backdrop-blur-xl overflow-hidden transition-all duration-500",
        "hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
    >
      {/* Mouse-following glow */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
