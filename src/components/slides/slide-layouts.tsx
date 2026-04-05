"use client";

import { type ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useCursorParallax } from "@/lib/hooks/use-cursor-parallax";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* ═══════════════════════════════════════════════════
   SLIDE LAYOUTS — Each is a full-viewport slide type
   ═══════════════════════════════════════════════════ */

// Grain overlay for texture
function Grain({ opacity = 0.025 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

/* ─── TITLE SLIDE ─── */
interface TitleSlideProps {
  overline?: string;
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
  children?: ReactNode;
}

export function TitleSlide({
  overline,
  title,
  subtitle,
  accent,
  className,
  children,
}: TitleSlideProps) {
  const { containerRef, nx, ny } = useCursorParallax({ strength: 0.5 });

  return (
    <div ref={containerRef} className={cn("slide relative bg-[var(--bg)]", className)}>
      <Grain />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(var(--accent-rgb),0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
        {overline && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 block text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]"
            style={{ transform: `translate(${nx * -5}px, ${ny * -5}px)` }}
          >
            {overline}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-display)] text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[0.9] tracking-[-0.04em] text-[var(--text)]"
          style={{
            textShadow: "var(--text-shadow-cinematic)",
            transform: `translate(${nx * 12}px, ${ny * 12}px)`,
          }}
        >
          {title}
          {accent && (
            <span className="block text-[var(--accent)]">{accent}</span>
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)]"
            style={{ transform: `translate(${nx * -3}px, ${ny * -3}px)` }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ─── STATEMENT SLIDE — One big provocation ─── */
interface StatementSlideProps {
  statement: string;
  attribution?: string;
  className?: string;
}

export function StatementSlide({ statement, attribution, className }: StatementSlideProps) {
  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)}>
      <Grain />
      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center md:px-16">
        <motion.p
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-display)] text-[clamp(1.8rem,5vw,3.8rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[var(--text)]"
          style={{ textShadow: "var(--text-shadow-subtle)" }}
        >
          {statement}
        </motion.p>
        {attribution && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 block text-sm text-[var(--text-muted)]"
          >
            — {attribution}
          </motion.span>
        )}
      </div>
    </div>
  );
}

/* ─── DATA SLIDE — Big number + context ─── */
interface DataSlideProps {
  stat: string;
  label: string;
  context?: string;
  source?: string;
  className?: string;
}

export function DataSlide({ stat, label, context, source, className }: DataSlideProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(ref.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power3.out" });
  }, { scope: ref });

  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)}>
      <Grain />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.05)_0%,transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center md:px-16">
        <span
          ref={ref}
          className="block font-[var(--font-mono)] text-[clamp(4rem,15vw,12rem)] font-bold leading-none text-[var(--accent)]"
          style={{ textShadow: "0 0 60px rgba(var(--accent-rgb), 0.3)" }}
        >
          {stat}
        </span>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-xl font-medium text-[var(--text)]"
        >
          {label}
        </motion.p>
        {context && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-3 max-w-[48ch] mx-auto text-sm leading-relaxed text-[var(--text-secondary)]"
          >
            {context}
          </motion.p>
        )}
        {source && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 block text-[0.55rem] uppercase tracking-[0.15em] text-[var(--text-ghost)]"
          >
            Fonte: {source}
          </motion.span>
        )}
      </div>
    </div>
  );
}

/* ─── LIST SLIDE — Title + items (stagger) ─── */
interface ListSlideProps {
  title: string;
  items: { title: string; description: string }[];
  className?: string;
}

export function ListSlide({ title, items, className }: ListSlideProps) {
  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)}>
      <Grain />
      <div className="relative z-10 w-full max-w-5xl px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 font-[var(--font-display)] text-[clamp(1.8rem,4vw,3rem)] font-normal tracking-[-0.02em] text-[var(--text)]"
          style={{ textShadow: "var(--text-shadow-subtle)" }}
        >
          {title}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25, skewY: 1.5 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.7,
                ease: i % 2 === 0 ? [0.16, 1, 0.3, 1] : [0.33, 1, 0.68, 1],
              }}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 font-[var(--font-mono)] text-[0.6rem] font-bold text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SPLIT SLIDE — Left text, right visual ─── */
interface SplitSlideProps {
  title: string;
  content: string;
  visual?: ReactNode;
  accent?: string;
  className?: string;
}

export function SplitSlide({ title, content, visual, accent, className }: SplitSlideProps) {
  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)}>
      <Grain />
      <div className="relative z-10 grid w-full max-w-6xl items-center gap-12 px-8 md:grid-cols-2 md:px-16">
        <div>
          {accent && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 block text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
            >
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
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {visual || (
            <div className="flex aspect-square items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <div className="h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.15)_0%,transparent_70%)]" />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── COMPARISON SLIDE — Before/After or Two columns ─── */
interface ComparisonSlideProps {
  title: string;
  left: { label: string; items: string[] };
  right: { label: string; items: string[] };
  className?: string;
}

export function ComparisonSlide({ title, left, right, className }: ComparisonSlideProps) {
  return (
    <div className={cn("slide relative bg-[var(--bg)]", className)}>
      <Grain />
      <div className="relative z-10 w-full max-w-5xl px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center font-[var(--font-display)] text-[clamp(1.6rem,3.5vw,2.8rem)] font-normal tracking-[-0.02em] text-[var(--text)]"
        >
          {title}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[left, right].map((col, ci) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + ci * 0.15, duration: 0.6 }}
              className={cn(
                "rounded-xl border p-6 md:p-8",
                ci === 0
                  ? "border-[var(--danger)]/20 bg-[var(--danger)]/[0.03]"
                  : "border-[var(--accent)]/20 bg-[var(--accent-muted)]"
              )}
            >
              <span className={cn(
                "text-[0.6rem] font-bold uppercase tracking-[0.15em]",
                ci === 0 ? "text-[var(--danger)]" : "text-[var(--accent)]"
              )}>
                {col.label}
              </span>
              <ul className="mt-4 space-y-3">
                {col.items.map((item, ii) => (
                  <motion.li
                    key={ii}
                    initial={{ opacity: 0, x: ci === 0 ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + ii * 0.08, duration: 0.4 }}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span className={cn(
                      "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                      ci === 0 ? "bg-[var(--danger)]/40" : "bg-[var(--accent)]/40"
                    )} />
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

/* ─── SECTION DIVIDER — Chapter break ─── */
interface SectionDividerProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionDivider({ number, title, subtitle, className }: SectionDividerProps) {
  return (
    <div className={cn("slide relative bg-[var(--bg-soft)]", className)}>
      <Grain opacity={0.03} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(var(--accent-rgb),0.03)_0%,transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center md:px-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="block font-[var(--font-mono)] text-[clamp(6rem,20vw,14rem)] font-bold leading-none text-[var(--accent)]/[0.06]"
        >
          {number}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="-mt-8 font-[var(--font-display)] text-[clamp(2rem,5vw,4rem)] font-normal tracking-[-0.03em] text-[var(--text)] md:-mt-12"
          style={{ textShadow: "var(--text-shadow-cinematic)" }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 text-base text-[var(--text-secondary)]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
