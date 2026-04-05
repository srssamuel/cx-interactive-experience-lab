"use client";

import { type ReactNode, type CSSProperties, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useCursorParallax } from "@/lib/hooks/use-cursor-parallax";
import { useCountUp, parseStat } from "@/lib/hooks/use-count-up";
import { ParticleCanvas } from "@/components/fx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* ═══════════════════════════════════════════════════
   THEME SYSTEM — Section-specific color identity
   ═══════════════════════════════════════════════════ */

export type SlideTheme = "default" | "cx" | "cs" | "data" | "ai";

const THEMES: Record<SlideTheme, { accent: string; rgb: string; gradient: string }> = {
  default: { accent: "#00E5C3", rgb: "0, 229, 195", gradient: "linear-gradient(135deg, #00E5C3, #0891B2)" },
  cx: { accent: "#00E5C3", rgb: "0, 229, 195", gradient: "linear-gradient(135deg, #00E5C3, #0891B2)" },
  cs: { accent: "#FF6B35", rgb: "255, 107, 53", gradient: "linear-gradient(135deg, #FF6B35, #F59E0B)" },
  data: { accent: "#8B5CF6", rgb: "139, 92, 246", gradient: "linear-gradient(135deg, #8B5CF6, #6366F1)" },
  ai: { accent: "#3B82F6", rgb: "59, 130, 246", gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)" },
};

function themeVars(theme?: SlideTheme): CSSProperties {
  if (!theme || theme === "default" || theme === "cx") return {};
  const t = THEMES[theme];
  return { "--accent": t.accent, "--accent-rgb": t.rgb } as CSSProperties;
}

/* ═══════════════════════════════════════════════════
   SHARED FX COMPONENTS
   ═══════════════════════════════════════════════════ */

function Grain({ opacity = 0.025 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

function Aurora({ theme = "default" }: { theme?: SlideTheme }) {
  const t = THEMES[theme || "default"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -inset-[50%] opacity-[0.04]"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, rgba(${t.rgb}, 0.4) 0%, transparent 50%)`,
          animation: "aurora-drift 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -inset-[50%] opacity-[0.03]"
        style={{
          background: `radial-gradient(ellipse at 70% 60%, rgba(${t.rgb}, 0.3) 0%, transparent 50%)`,
          animation: "aurora-drift-2 25s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function DotGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(circle, var(--text) 0.5px, transparent 0.5px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}

function GlowRing({ delay = 0, size = 200 }: { delay?: number; size?: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(var(--accent-rgb),0.15)]"
      style={{
        width: size,
        height: size,
        animation: `ring-expand 3s ease-out ${delay}s infinite`,
      }}
    />
  );
}

function OrbitDot({ radius = 80, duration = 8, size = 4, delay = 0 }: { radius?: number; duration?: number; size?: number; delay?: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        "--orbit-r": `${radius}px`,
        animation: `orbit ${duration}s linear ${delay}s infinite`,
      } as CSSProperties}
    >
      <div
        className="h-full w-full rounded-full"
        style={{ background: `rgba(var(--accent-rgb), 0.6)` }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   TITLE SLIDE — Hero with aurora + cursor parallax + text reveal
   ═══════════════════════════════════════════════════ */

interface TitleSlideProps {
  overline?: string;
  title: string;
  subtitle?: string;
  accent?: string;
  theme?: SlideTheme;
  className?: string;
  children?: ReactNode;
}

export function TitleSlide({ overline, title, subtitle, accent, theme, className, children }: TitleSlideProps) {
  const { containerRef, nx, ny } = useCursorParallax({ strength: 0.5 });
  const words = title.split(" ");

  return (
    <div ref={containerRef} className={cn("slide relative bg-[var(--bg)]", className)} style={themeVars(theme)}>
      <Grain />
      <Aurora theme={theme} />
      <DotGrid />
      <ParticleCanvas count={40} color={THEMES[theme || "default"].rgb} className="pointer-events-none absolute inset-0 z-[1] opacity-25" />

      {/* Accent line */}
      <div className="absolute left-8 top-[15%] h-[30%] w-[2px] md:left-16" style={{ background: `linear-gradient(to bottom, transparent, rgba(var(--accent-rgb), 0.3), transparent)` }} />

      <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
        {overline && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]"
            style={{ transform: `translate(${nx * -5}px, ${ny * -5}px)` }}
          >
            <span className="h-[1px] w-8" style={{ background: "var(--accent)" }} />
            {overline}
          </motion.span>
        )}

        <h1
          className="font-[var(--font-display)] text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[0.9] tracking-[-0.04em] text-[var(--text)]"
          style={{
            textShadow: "var(--text-shadow-cinematic)",
            transform: `translate(${nx * 12}px, ${ny * 12}px)`,
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.3 + i * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.3em] inline-block"
            >
              {word}
            </motion.span>
          ))}
          {accent && (
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + words.length * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[var(--accent)]"
            >
              {accent}
              <span className="ml-1 inline-block h-[0.8em] w-[3px] align-middle bg-[var(--accent)]" style={{ animation: "cursor-blink 1s step-end infinite" }} />
            </motion.span>
          )}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)]"
            style={{ transform: `translate(${nx * -3}px, ${ny * -3}px)` }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} className="mt-10">
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   STATEMENT SLIDE — Full-viewport provocation with ornaments
   ═══════════════════════════════════════════════════ */

interface StatementSlideProps {
  statement: string;
  attribution?: string;
  theme?: SlideTheme;
  className?: string;
}

export function StatementSlide({ statement, attribution, theme, className }: StatementSlideProps) {
  const words = statement.split(" ");

  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)} style={themeVars(theme)}>
      <Grain />
      <Aurora theme={theme} />

      {/* Ambient floating geometric shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          { w: 80, h: 80, top: "15%", left: "8%", rotate: 45, delay: 0 },
          { w: 50, h: 50, top: "70%", right: "12%", rotate: -20, delay: 1.5 },
          { w: 120, h: 1, top: "30%", right: "5%", rotate: 30, delay: 0.8 },
          { w: 1, h: 100, top: "50%", left: "5%", rotate: 0, delay: 2 },
          { w: 40, h: 40, top: "80%", left: "20%", rotate: 60, delay: 1 },
        ].map((shape, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shape.delay, duration: 2 }}
            className="absolute rounded-sm border"
            style={{
              width: shape.w,
              height: shape.h,
              top: shape.top,
              left: "left" in shape ? shape.left : undefined,
              right: "right" in shape ? shape.right : undefined,
              borderColor: `rgba(var(--accent-rgb), 0.06)`,
              transform: `rotate(${shape.rotate}deg)`,
              animation: `float-y ${5 + i}s ease-in-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Decorative quote mark */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 top-[15%] -translate-x-1/2 select-none font-[var(--font-display)] text-[clamp(8rem,25vw,20rem)] leading-none text-[var(--accent)]"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        &ldquo;
      </motion.span>

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center md:px-16">
        <p className="font-[var(--font-display)] text-[clamp(1.8rem,5vw,3.8rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[var(--text)]" style={{ textShadow: "var(--text-shadow-subtle)" }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + i * 0.04,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </p>

        {attribution && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5 + words.length * 0.03, duration: 0.8 }}
            className="mx-auto mt-8 flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-12" style={{ background: `rgba(var(--accent-rgb), 0.3)` }} />
            <span className="text-sm text-[var(--text-muted)]">{attribution}</span>
            <span className="h-[1px] w-12" style={{ background: `rgba(var(--accent-rgb), 0.3)` }} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   DATA SLIDE — Animated counter + glow rings + orbit
   ═══════════════════════════════════════════════════ */

interface DataSlideProps {
  stat: string;
  label: string;
  context?: string;
  source?: string;
  theme?: SlideTheme;
  className?: string;
}

export function DataSlide({ stat, label, context, source, theme, className }: DataSlideProps) {
  const parsed = parseStat(stat);
  const { value, scope } = useCountUp(parsed?.value ?? 0, {
    decimals: parsed?.decimals ?? 0,
    delay: 0.5,
    duration: 2.5,
  });

  const displayStat = parsed
    ? `${parsed.prefix}${parsed.decimals > 0 ? value.toFixed(parsed.decimals) : value}${parsed.suffix}`
    : stat;

  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)} style={themeVars(theme)} ref={scope}>
      <Grain />
      <Aurora theme={theme} />

      {/* Radial glow behind number */}
      <div
        className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 400,
          height: 400,
          background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, transparent 60%)`,
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Concentric rings */}
      <div className="pointer-events-none absolute inset-0">
        <GlowRing delay={0} size={180} />
        <GlowRing delay={1} size={180} />
        <GlowRing delay={2} size={180} />
      </div>

      {/* Orbit dots */}
      <div className="pointer-events-none absolute inset-0">
        <OrbitDot radius={120} duration={12} size={3} delay={0} />
        <OrbitDot radius={160} duration={18} size={2} delay={2} />
        <OrbitDot radius={100} duration={10} size={4} delay={4} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center md:px-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="block font-[var(--font-mono)] text-[clamp(4rem,15vw,12rem)] font-bold leading-none text-[var(--accent)]"
          style={{ textShadow: `0 0 80px rgba(var(--accent-rgb), 0.4), 0 0 160px rgba(var(--accent-rgb), 0.15)` }}
        >
          {displayStat}
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 text-xl font-medium text-[var(--text)]"
        >
          {label}
        </motion.p>

        {context && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mx-auto mt-3 max-w-[48ch] text-sm leading-relaxed text-[var(--text-secondary)]"
          >
            {context}
          </motion.p>
        )}

        {source && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-6 inline-flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.15em] text-[var(--text-ghost)]"
          >
            <span className="h-[1px] w-4" style={{ background: `rgba(var(--accent-rgb), 0.2)` }} />
            Fonte: {source}
          </motion.span>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   LIST SLIDE — Cards with 3D tilt + gradient border hover
   ═══════════════════════════════════════════════════ */

interface ListSlideProps {
  title: string;
  items: { title: string; description: string }[];
  theme?: SlideTheme;
  className?: string;
}

function TiltCard({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, skewY: 1.5 }}
      animate={{ opacity: 1, y: 0, skewY: 0 }}
      transition={{
        delay: 0.3 + index * 0.1,
        duration: 0.7,
        ease: index % 3 === 0 ? [0.16, 1, 0.3, 1] : index % 3 === 1 ? [0.33, 1, 0.68, 1] : [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.25)]"
      style={{
        transform: `perspective(600px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {/* Shimmer on hover */}
      <div
        className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.04), transparent)`,
          animation: "shimmer 2s ease-in-out infinite",
        }}
      />
      {children}
    </motion.div>
  );
}

export function ListSlide({ title, items, theme, className }: ListSlideProps) {
  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)} style={themeVars(theme)}>
      <Grain />
      <Aurora theme={theme} />
      <DotGrid />

      <div className="relative z-10 w-full max-w-5xl px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 font-[var(--font-display)] text-[clamp(1.8rem,4vw,3rem)] font-normal tracking-[-0.02em] text-[var(--text)]"
          style={{ textShadow: "var(--text-shadow-subtle)" }}
        >
          {title}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 block h-[2px] w-16 origin-left"
            style={{ background: `var(--accent)` }}
          />
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {items.map((item, i) => (
            <TiltCard key={item.title} index={i}>
              {/* Featured first item gets top gradient accent */}
              {i === 0 && (
                <div
                  className="absolute left-0 right-0 top-0 h-[2px] rounded-t-xl"
                  style={{ background: THEMES[theme || "default"].gradient }}
                />
              )}
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "mt-0.5 flex shrink-0 items-center justify-center rounded-md font-[var(--font-mono)] text-[0.55rem] font-bold",
                    i === 0 ? "h-9 w-9 text-[0.65rem]" : "h-7 w-7"
                  )}
                  style={{
                    background: i === 0 ? `rgba(var(--accent-rgb), 0.15)` : `rgba(var(--accent-rgb), 0.1)`,
                    color: "var(--accent)",
                    boxShadow: i === 0 ? `0 0 12px rgba(var(--accent-rgb), 0.1)` : "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={cn("font-semibold text-[var(--text)]", i === 0 ? "text-[1.05rem]" : "text-base")}>{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SPLIT SLIDE — Text + generated abstract visual
   ═══════════════════════════════════════════════════ */

type VisualType = "rings" | "network" | "bars" | "pulse" | "pyramid" | "orbit";

interface SplitSlideProps {
  title: string;
  content: string;
  visual?: ReactNode;
  visualType?: VisualType;
  accent?: string;
  theme?: SlideTheme;
  className?: string;
}

/* Visual: Concentric rings */
function VisualRings() {
  return (
    <div className="relative flex aspect-square items-center justify-center">
      {[1, 2, 3, 4].map((ring) => (
        <div key={ring} className="absolute rounded-full border" style={{ width: `${ring * 25}%`, height: `${ring * 25}%`, borderColor: `rgba(var(--accent-rgb), ${0.25 - ring * 0.05})`, animation: `float-y ${3 + ring * 0.5}s ease-in-out ${ring * 0.3}s infinite` }} />
      ))}
      <div className="h-16 w-16 rounded-full" style={{ background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.3) 0%, transparent 70%)`, boxShadow: `0 0 60px rgba(var(--accent-rgb), 0.2)`, animation: "glow-pulse 3s ease-in-out infinite" }} />
    </div>
  );
}

/* Visual: Network graph nodes */
function VisualNetwork() {
  const nodes = [
    { x: 50, y: 20, r: 6 }, { x: 20, y: 45, r: 5 }, { x: 80, y: 40, r: 7 },
    { x: 35, y: 75, r: 4 }, { x: 65, y: 70, r: 5 }, { x: 50, y: 50, r: 8 },
  ];
  const links = [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 2], [1, 3], [3, 4]];
  return (
    <div className="relative flex aspect-square items-center justify-center">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {links.map(([a, b], i) => (
          <motion.line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke={`rgba(var(--accent-rgb), 0.15)`} strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }} />
        ))}
        {nodes.map((n, i) => (
          <motion.circle key={i} cx={n.x} cy={n.y} r={n.r} fill={`rgba(var(--accent-rgb), ${0.15 + (i === 5 ? 0.2 : 0)})`} stroke={`rgba(var(--accent-rgb), 0.3)`} strokeWidth="0.5" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }} style={{ animation: `float-y ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite` }} />
        ))}
      </svg>
    </div>
  );
}

/* Visual: Bar chart / equalizer */
function VisualBars() {
  const bars = [40, 65, 55, 80, 45, 70, 90, 60];
  return (
    <div className="relative flex aspect-square items-end justify-center gap-2 px-4 pb-8">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: `${h}%`, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 rounded-t-md"
          style={{
            background: `linear-gradient(to top, rgba(var(--accent-rgb), 0.08), rgba(var(--accent-rgb), ${0.15 + (i === 6 ? 0.15 : 0)}))`,
            border: `1px solid rgba(var(--accent-rgb), 0.1)`,
            borderBottom: "none",
          }}
        />
      ))}
      <div className="absolute bottom-7 left-4 right-4 h-[1px]" style={{ background: `rgba(var(--accent-rgb), 0.1)` }} />
    </div>
  );
}

/* Visual: Pulsing heartbeat */
function VisualPulse() {
  return (
    <div className="relative flex aspect-square items-center justify-center">
      {[1, 2, 3].map((i) => (
        <div key={i} className="absolute rounded-full" style={{ width: `${i * 30}%`, height: `${i * 30}%`, border: `1px solid rgba(var(--accent-rgb), ${0.3 - i * 0.08})`, animation: `glow-pulse ${2 + i * 0.5}s ease-in-out ${i * 0.3}s infinite` }} />
      ))}
      <div className="relative h-20 w-20 rounded-full" style={{ background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.25) 0%, transparent 70%)`, animation: "glow-pulse 2s ease-in-out infinite" }}>
        <svg viewBox="0 0 80 80" className="absolute inset-0 h-full w-full">
          <motion.path d="M10 40 Q20 40 25 30 Q30 20 35 40 Q37 50 40 40 Q45 10 50 40 Q55 55 60 40 L70 40" fill="none" stroke={`rgba(var(--accent-rgb), 0.6)`} strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} />
        </svg>
      </div>
    </div>
  );
}

/* Visual: Ascending pyramid / levels */
function VisualPyramid() {
  const levels = [
    { width: 30, label: "4" },
    { width: 50, label: "3" },
    { width: 70, label: "2" },
    { width: 90, label: "1" },
  ];
  return (
    <div className="relative flex aspect-square flex-col items-center justify-center gap-2 px-4">
      {levels.map((lvl, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center rounded-md py-2 text-[0.6rem] font-bold tracking-wider"
          style={{
            width: `${lvl.width}%`,
            background: `rgba(var(--accent-rgb), ${0.2 - i * 0.04})`,
            border: `1px solid rgba(var(--accent-rgb), ${0.2 - i * 0.04})`,
            color: `rgba(var(--accent-rgb), ${0.8 - i * 0.1})`,
          }}
        >
          Nível {lvl.label}
        </motion.div>
      ))}
    </div>
  );
}

/* Visual: Orbiting system */
function VisualOrbit() {
  return (
    <div className="relative flex aspect-square items-center justify-center">
      {[1, 2, 3].map((ring) => (
        <div key={ring} className="absolute rounded-full border border-dashed" style={{ width: `${ring * 30}%`, height: `${ring * 30}%`, borderColor: `rgba(var(--accent-rgb), ${0.12 - ring * 0.03})` }} />
      ))}
      <OrbitDot radius={45} duration={6} size={5} delay={0} />
      <OrbitDot radius={70} duration={10} size={4} delay={1} />
      <OrbitDot radius={95} duration={15} size={3} delay={2} />
      <div className="h-10 w-10 rounded-full" style={{ background: `rgba(var(--accent-rgb), 0.2)`, boxShadow: `0 0 30px rgba(var(--accent-rgb), 0.15)` }} />
    </div>
  );
}

const VISUALS: Record<VisualType, () => ReactNode> = {
  rings: VisualRings,
  network: VisualNetwork,
  bars: VisualBars,
  pulse: VisualPulse,
  pyramid: VisualPyramid,
  orbit: VisualOrbit,
};

export function SplitSlide({ title, content, visual, visualType, accent, theme, className }: SplitSlideProps) {
  const VisualComponent = visualType ? VISUALS[visualType] : null;
  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)} style={themeVars(theme)}>
      <Grain />
      <Aurora theme={theme} />

      <div className="relative z-10 grid w-full max-w-6xl items-center gap-12 px-8 md:grid-cols-2 md:px-16">
        <div>
          {accent && (
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-3 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
            >
              <span className="h-[1px] w-6" style={{ background: "var(--accent)" }} />
              {accent}
            </motion.span>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1] tracking-[-0.03em] text-[var(--text)]"
            style={{ textShadow: "var(--text-shadow-subtle)" }}
          >
            {title}
          </motion.h2>

          {/* Accent underline */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 block h-[2px] w-12 origin-left"
            style={{ background: `rgba(var(--accent-rgb), 0.4)` }}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 max-w-[40ch] text-[0.95rem] leading-[1.75] text-[var(--text-secondary)]"
          >
            {content}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {visual || (VisualComponent ? <VisualComponent /> : <VisualRings />)}
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   COMPARISON SLIDE — Before/After with icons + animated divider
   ═══════════════════════════════════════════════════ */

interface ComparisonSlideProps {
  title: string;
  left: { label: string; items: string[] };
  right: { label: string; items: string[] };
  theme?: SlideTheme;
  className?: string;
}

export function ComparisonSlide({ title, left, right, theme, className }: ComparisonSlideProps) {
  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)} style={themeVars(theme)}>
      <Grain />
      <Aurora theme={theme} />

      <div className="relative z-10 w-full max-w-5xl px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center font-[var(--font-display)] text-[clamp(1.6rem,3.5vw,2.8rem)] font-normal tracking-[-0.02em] text-[var(--text)]"
        >
          {title}
        </motion.h2>

        <div className="relative grid gap-6 md:grid-cols-2">
          {/* Animated divider between columns */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-0 hidden h-full w-[1px] origin-top -translate-x-1/2 md:block"
            style={{ background: `linear-gradient(to bottom, transparent, rgba(var(--accent-rgb), 0.15), transparent)` }}
          />

          {[left, right].map((col, ci) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + ci * 0.15, duration: 0.6 }}
              className={cn(
                "rounded-xl border p-6 md:p-8",
                ci === 0
                  ? "border-[var(--danger)]/20 bg-[var(--danger)]/[0.03]"
                  : "border-[var(--accent)]/20 bg-[var(--accent-muted)]"
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                    ci === 0 ? "bg-[var(--danger)]/10 text-[var(--danger)]" : "bg-[var(--accent)]/10 text-[var(--accent)]"
                  )}
                >
                  {ci === 0 ? "✕" : "✓"}
                </span>
                <span
                  className={cn(
                    "text-[0.6rem] font-bold uppercase tracking-[0.15em]",
                    ci === 0 ? "text-[var(--danger)]" : "text-[var(--accent)]"
                  )}
                >
                  {col.label}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {col.items.map((item, ii) => (
                  <motion.li
                    key={ii}
                    initial={{ opacity: 0, x: ci === 0 ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + ii * 0.08, duration: 0.4 }}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span
                      className={cn(
                        "mt-2 h-1 w-1 shrink-0 rounded-full",
                        ci === 0 ? "bg-[var(--danger)]/40" : "bg-[var(--accent)]/40"
                      )}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION DIVIDER — Full aurora + animated line + section color
   ═══════════════════════════════════════════════════ */

interface SectionDividerProps {
  number: string;
  title: string;
  subtitle?: string;
  theme?: SlideTheme;
  className?: string;
}

export function SectionDivider({ number, title, subtitle, theme, className }: SectionDividerProps) {
  const { containerRef, nx, ny } = useCursorParallax({ strength: 0.3 });

  return (
    <div ref={containerRef} className={cn("slide relative bg-[var(--bg-soft)]", className)} style={themeVars(theme)}>
      <Grain opacity={0.03} />
      <Aurora theme={theme} />
      <DotGrid />
      <ParticleCanvas count={30} color={THEMES[theme || "default"].rgb} className="pointer-events-none absolute inset-0 z-[1] opacity-20" />

      {/* Large blurred number background */}
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-[var(--font-mono)] text-[clamp(8rem,30vw,20rem)] font-bold leading-none"
        style={{
          color: `rgba(var(--accent-rgb), 0.04)`,
          textShadow: `0 0 100px rgba(var(--accent-rgb), 0.08)`,
          transform: `translate(calc(-50% + ${nx * 15}px), calc(-50% + ${ny * 15}px))`,
        }}
        aria-hidden="true"
      >
        {number}
      </motion.span>

      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center md:px-16">
        {/* Section number badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2"
        >
          <span className="h-[1px] w-8" style={{ background: `rgba(var(--accent-rgb), 0.3)` }} />
          <span className="font-[var(--font-mono)] text-xs font-bold tracking-widest text-[var(--accent)]">
            SEÇÃO {number}
          </span>
          <span className="h-[1px] w-8" style={{ background: `rgba(var(--accent-rgb), 0.3)` }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-normal tracking-[-0.03em]"
          style={{
            background: THEMES[theme || "default"].gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 20px rgba(var(--accent-rgb), 0.15))",
          }}
        >
          {title}
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 h-[2px] w-24 origin-center"
          style={{ background: THEMES[theme || "default"].gradient }}
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 text-base leading-relaxed text-[var(--text-secondary)]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
