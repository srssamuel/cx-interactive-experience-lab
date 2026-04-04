"use client";

import { cn } from "@/lib/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { experiences, upcomingExperiences } from "@/lib/registry";
import { TextReveal } from "@/components/motion/text-reveal";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { GrainOverlay } from "@/components/cinematic/headline-slide";

export default function Portal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* ═══════════════════════════════════════════
          HERO — Editorial typography with atmospheric depth
          ═══════════════════════════════════════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative flex min-h-screen flex-col justify-end pb-16 md:pb-24"
      >
        {/* Atmospheric layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)] to-[var(--surface)]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_60%,rgba(245,158,11,0.03)_0%,transparent_60%)]" />
        <GrainOverlay opacity={0.025} />

        {/* Horizontal rules as visual rhythm */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[20, 40, 60, 80].map((top) => (
            <motion.div
              key={top}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.3 + top * 0.008, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 h-px origin-left bg-[var(--border)]"
              style={{ top: `${top}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          {/* Institutional mark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Diretoria de Qualidade e Dados
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="max-w-[900px]">
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

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-10 max-w-[44ch] text-[0.95rem] leading-[1.75] text-[var(--text-secondary)]"
          >
            Experiências interativas de alto impacto para keynote, workshop executivo
            e posicionamento estratégico. Cada material defende uma tese.
            Nenhum é neutro.
          </motion.p>

          {/* Mode line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-8 flex items-center gap-6 text-[0.6rem] uppercase tracking-[0.15em] text-[var(--text-muted)]"
          >
            {["Leitura", "Apresentação", "Workshop"].map((mode) => (
              <span key={mode} className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-[var(--text-muted)]" />
                {mode}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-6 right-6 md:right-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[0.5rem] uppercase tracking-[0.2em] text-[var(--text-muted)]/40 [writing-mode:vertical-lr]">
              scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-[var(--text-muted)]/20 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          EXPERIENCES — Editorial blocks with theme accents
          ═══════════════════════════════════════════ */}
      <section className="relative">
        {experiences.map((exp, i) => (
          <ExperienceBlock key={exp.slug} experience={exp} index={i} />
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          UPCOMING — Minimal, typographic
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
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]/40">
            CX Experience Lab
          </span>
          <span className="text-[0.55rem] tracking-[0.1em] text-[var(--text-muted)]/25">
            Diretoria de Qualidade e Dados — AeC
          </span>
        </div>
      </footer>
    </main>
  );
}

/* ─── Experience Block — Full-width editorial entry with theme color ─── */
function ExperienceBlock({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Link href={`/experiencias/${experience.slug}`} className="group block">
      <div
        ref={ref}
        className={cn(
          `theme-${experience.theme}`,
          "relative border-t border-[var(--border)]",
          "transition-colors duration-500",
          "hover:bg-[var(--surface)]/30"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-8 py-16 md:grid-cols-[1fr_auto] md:py-24 lg:py-32">
            {/* Left: Content */}
            <div>
              <GSAPReveal>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[0.65rem] text-[var(--text-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-[var(--border)]" />
                  <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    {experience.subtitle}
                  </span>
                  {experience.status === "live" && (
                    <span className="ml-2 flex items-center gap-1.5 text-[0.5rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--success)]" />
                      Disponível
                    </span>
                  )}
                </div>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power3.out" }}>
                <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[0.95] tracking-[-0.035em] text-[var(--text)] transition-all duration-500 group-hover:text-[var(--accent-primary)]">
                  {experience.title}
                </h2>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power3.out" }}>
                <p className="mt-4 max-w-[52ch] text-base leading-[1.7] text-[var(--text-secondary)]">
                  {experience.thesis}
                </p>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, y: 15 }} to={{ opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power3.out" }}>
                <div className="mt-8 flex items-center gap-6 text-[0.6rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  <span>
                    <span className="mr-1.5 font-mono text-sm font-medium text-[var(--text-secondary)]">
                      {experience.chapters.length}
                    </span>
                    capítulos
                  </span>
                  <span className="h-3 w-px bg-[var(--border)]" />
                  <span>{experience.readTime} leitura</span>
                  <span className="h-3 w-px bg-[var(--border)]" />
                  <span>{experience.workshopTime} workshop</span>
                </div>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0, duration: 0.5, delay: 0.25, ease: "power3.out" }}>
                <div className="mt-4 flex items-center gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border)] px-2.5 py-1 text-[0.55rem] font-medium text-[var(--text-muted)]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GSAPReveal>
            </div>

            {/* Right: Arrow */}
            <motion.div style={{ y }} className="hidden md:block">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-500 group-hover:border-[var(--accent-primary)]/30 group-hover:shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.06)]">
                <span className="text-lg text-[var(--text-muted)] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[var(--accent-primary)]">
                  &rarr;
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
}
