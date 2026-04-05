"use client";

import { cn } from "@/lib/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { experiences, upcomingExperiences } from "@/lib/registry";
import { TextReveal } from "@/components/motion/text-reveal";
import { GSAPReveal, GSAPCounter } from "@/components/motion/gsap-reveal";
import { CursorParallaxContainer } from "@/components/motion/cursor-parallax-container";
import { SkewTransition } from "@/components/motion/skew-transition";
import { GrainOverlay } from "@/components/cinematic/headline-slide";
import { useMagneticCursor } from "@/lib/hooks/use-magnetic-cursor";

export default function Portal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.97]);

  const equacao = experiences[0];
  const paradoxo = experiences[1];

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* ═══════════════════════════════════════════
          HERO — Asymmetric editorial opening
          ═══════════════════════════════════════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative flex min-h-screen flex-col justify-end pb-16 md:pb-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)] to-[var(--surface)]/30" />
        <GrainOverlay opacity={0.02} />

        {/* Single diagonal rule — not 4 horizontal lines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0, rotate: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[55%] h-px origin-left bg-[var(--border)]"
          />
        </div>

        <CursorParallaxContainer className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12" strength={0.8}>
          <motion.div
            data-depth="3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-20 md:mb-32"
          >
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Diretoria de Qualidade e Dados
            </span>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_280px] md:items-end md:gap-16">
            {/* Left — massive headline */}
            <div data-depth="1" className="max-w-[800px]" style={{ textShadow: "var(--text-shadow-cinematic)" }}>
              <TextReveal
                text="Onde executivos param de ouvir"
                tag="h1"
                trigger="mount"
                delay={0.4}
                stagger={0.035}
                className="font-display text-[clamp(2.8rem,7.5vw,6.5rem)] font-light leading-[0.88] tracking-[-0.04em] text-[var(--text)]"
              />
              <TextReveal
                text="e começam a decidir."
                tag="span"
                trigger="mount"
                delay={0.9}
                stagger={0.035}
                className="mt-2 block font-display text-[clamp(2.8rem,7.5vw,6.5rem)] font-light leading-[0.88] tracking-[-0.04em] text-[var(--text-secondary)]"
              />
            </div>

            {/* Right — vertical context block (only on desktop) */}
            <motion.div
              data-depth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="hidden border-l border-[var(--border)] pl-6 md:block"
            >
              <p className="text-[0.8rem] leading-[1.8] text-[var(--text-secondary)]">
                Cada material defende uma tese. Nenhum é neutro. Cada
                interação ensina algo. Nenhuma é decorativa.
              </p>
              <div className="mt-6 flex items-center gap-4 text-[0.55rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                {["Leitura", "Palco", "Workshop"].map((mode) => (
                  <span key={mode}>{mode}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </CursorParallaxContainer>

        {/* Scroll indicator — minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-[var(--text-muted)]/30 to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          EXP 01 — A EQUAÇÃO INVISÍVEL
          Asymmetric: oversized number left, content right
          ═══════════════════════════════════════════ */}
      <Link href={`/experiencias/${equacao.slug}`} className="group block">
        <section className={cn("theme-cx", "relative overflow-hidden")}>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/[0.02] to-transparent" />

          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid min-h-[80vh] items-center gap-0 md:grid-cols-[1fr_1fr] lg:grid-cols-[45%_55%]">
              {/* Left — oversized typographic number */}
              <div className="relative flex items-center justify-center py-20 md:py-0">
                <GSAPReveal from={{ opacity: 0, scale: 0.9 }} to={{ opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }}>
                  <span className="select-none font-mono text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-[var(--accent-primary)]/[0.06] transition-all duration-700 group-hover:text-[var(--accent-primary)]/[0.12]">
                    01
                  </span>
                </GSAPReveal>
                {/* Vertical accent line */}
                <div className="absolute right-0 top-1/2 hidden h-2/3 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[var(--accent-primary)]/20 to-transparent md:block" />
              </div>

              {/* Right — content */}
              <div className="pb-20 md:py-32 md:pl-12 lg:pl-20">
                <GSAPReveal>
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                    {equacao.subtitle}
                  </span>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 0.9, delay: 0.1, ease: "power3.out" }} skewEntry>
                  <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-[0.92] tracking-[-0.04em] text-[var(--text)] transition-colors duration-500 group-hover:text-[var(--accent-primary)]" style={{ textShadow: "var(--text-shadow-subtle)" }}>
                    {equacao.title}
                  </h2>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: "power3.out" }}>
                  <p className="mt-6 max-w-[40ch] font-display text-lg font-light italic leading-[1.6] text-[var(--text-secondary)]">
                    &ldquo;{equacao.thesis}&rdquo;
                  </p>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.6, delay: 0.35, ease: "power3.out" }}>
                  <div className="mt-10 flex items-center gap-8">
                    <div>
                      <span className="font-mono text-3xl font-bold text-[var(--accent-primary)]">
                        <GSAPCounter value={equacao.chapters.length} />
                      </span>
                      <span className="ml-1.5 text-[0.55rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                        capítulos
                      </span>
                    </div>
                    <div className="h-6 w-px bg-[var(--border)]" />
                    <div className="text-[0.65rem] tracking-[0.08em] text-[var(--text-muted)]">
                      {equacao.readTime} leitura · {equacao.workshopTime} workshop
                    </div>
                  </div>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0, x: -10 }} to={{ opacity: 1, x: 0, duration: 0.5, delay: 0.45, ease: "power3.out" }}>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-[var(--accent-primary)]/40 transition-all duration-500 group-hover:w-16" />
                    <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-[var(--accent-primary)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Explorar
                    </span>
                  </div>
                </GSAPReveal>
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* ═══════════════════════════════════════════
          BREATHING MOMENT — Full-bleed provocation
          ═══════════════════════════════════════════ */}
      <SkewTransition direction="up" intensity="subtle">
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-[var(--surface)]/30" />
          <GrainOverlay opacity={0.015} />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center" style={{ textShadow: "var(--text-shadow-subtle)" }}>
            <GSAPReveal from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }} skewEntry>
              <p className="font-display text-[clamp(1.5rem,4vw,3rem)] font-light leading-[1.15] tracking-[-0.03em] text-[var(--text)]">
                Duas experiências. Duas teses.
              </p>
              <p className="mt-3 font-display text-[clamp(1.5rem,4vw,3rem)] font-light leading-[1.15] tracking-[-0.03em] text-[var(--text-muted)]">
                A mesma convicção: neutralidade é mediocridade.
              </p>
            </GSAPReveal>
          </div>
        </section>
      </SkewTransition>

      {/* ═══════════════════════════════════════════
          EXP 02 — O PARADOXO DO SUCESSO
          Inverted: content left (narrow), data right (wide)
          ═══════════════════════════════════════════ */}
      <Link href={`/experiencias/${paradoxo.slug}`} className="group block">
        <section className={cn("theme-cs", "relative overflow-hidden")}>
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--accent-primary)]/[0.02] to-transparent" />

          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid min-h-[80vh] items-center gap-8 md:grid-cols-[55%_45%]">
              {/* Left — content, aligned right for asymmetry */}
              <div className="order-2 py-20 md:order-1 md:py-32 md:pr-12 lg:pr-20">
                <GSAPReveal>
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                    {paradoxo.subtitle}
                  </span>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 0.9, delay: 0.1, ease: "power3.out" }} skewEntry>
                  <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-[0.92] tracking-[-0.04em] text-[var(--text)] transition-colors duration-500 group-hover:text-[var(--accent-primary)]" style={{ textShadow: "var(--text-shadow-subtle)" }}>
                    {paradoxo.title}
                  </h2>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: "power3.out" }}>
                  <p className="mt-6 max-w-[38ch] text-[0.95rem] leading-[1.75] text-[var(--text-secondary)]">
                    {paradoxo.thesis}
                  </p>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.6, delay: 0.3, ease: "power3.out" }}>
                  <div className="mt-10 text-[0.65rem] tracking-[0.08em] text-[var(--text-muted)]">
                    {paradoxo.readTime} leitura · {paradoxo.workshopTime} workshop · {paradoxo.chapters.length} capítulos
                  </div>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0, x: -10 }} to={{ opacity: 1, x: 0, duration: 0.5, delay: 0.4, ease: "power3.out" }}>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-[var(--accent-primary)]/40 transition-all duration-500 group-hover:w-16" />
                    <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-[var(--accent-primary)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Explorar
                    </span>
                  </div>
                </GSAPReveal>
              </div>

              {/* Right — data-forward: prominent stats stacked */}
              <div className="relative order-1 flex flex-col items-end justify-center py-20 md:order-2 md:py-32">
                {/* Vertical accent line — left side */}
                <div className="absolute left-0 top-1/2 hidden h-2/3 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[var(--accent-primary)]/20 to-transparent md:block" />

                <GSAPReveal from={{ opacity: 0, x: 30 }} to={{ opacity: 1, x: 0, duration: 1, delay: 0.15, ease: "power3.out" }}>
                  <div className="text-right">
                    <span className="font-mono text-[clamp(4rem,10vw,8rem)] font-bold leading-none text-[var(--accent-primary)]/[0.15] transition-all duration-700 group-hover:text-[var(--accent-primary)]/[0.3]">
                      40<span className="text-[0.6em]">%</span>
                    </span>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      do ARR vem de expansão — top quartil
                    </p>
                  </div>
                </GSAPReveal>

                <GSAPReveal from={{ opacity: 0, x: 30 }} to={{ opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power3.out" }}>
                  <div className="mt-8 text-right">
                    <span className="font-mono text-[clamp(4rem,10vw,8rem)] font-bold leading-none text-[var(--accent-primary)]/[0.10] transition-all duration-700 group-hover:text-[var(--accent-primary)]/[0.2]">
                      67<span className="text-[0.6em]">%</span>
                    </span>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      do churn começa no onboarding
                    </p>
                  </div>
                </GSAPReveal>
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* ═══════════════════════════════════════════
          UPCOMING — Understated, just text
          ═══════════════════════════════════════════ */}
      <section className="border-t border-[var(--border)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <GSAPReveal>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Em desenvolvimento
            </span>
          </GSAPReveal>

          <div className="mt-10 space-y-0 divide-y divide-[var(--border)]">
            {upcomingExperiences.map((exp, i) => (
              <GSAPReveal key={exp.slug} from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: "power3.out" }}>
                <div className="flex items-center justify-between py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.65rem] text-[var(--text-muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl tracking-tight text-[var(--text)]/40">
                      {exp.title}
                    </span>
                  </div>
                  <span className="text-[0.55rem] uppercase tracking-[0.12em] text-[var(--text-muted)]/40">
                    {exp.subtitle}
                  </span>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLOSE — Provocation, not footer
          ═══════════════════════════════════════════ */}
      <footer className="border-t border-[var(--border)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]/40">
                CX Experience Lab
              </span>
              <p className="mt-2 max-w-[36ch] font-display text-sm font-light italic text-[var(--text-muted)]">
                O objetivo não é informar. É provocar a decisão que já deveria ter sido tomada.
              </p>
            </div>
            <span className="text-[0.55rem] tracking-[0.1em] text-[var(--text-muted)]/25">
              Diretoria de Qualidade e Dados — AeC
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
