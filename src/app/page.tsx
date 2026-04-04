"use client";

import { cn } from "@/lib/cn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () =>
    import("@/components/cinematic/particle-field").then(
      (mod) => mod.ParticleField
    ),
  { ssr: false }
);

const experiences = [
  {
    slug: "equacao-invisivel",
    title: "A Equação Invisível",
    subtitle: "Customer Experience",
    description:
      "Resultado esperado + Experiência apropriada = Sucesso do cliente. A equação que separa retenção de abandono silencioso.",
    chapters: 9,
    readTime: "15 min",
    tags: ["CX", "Experiência", "Retenção", "Workshop"],
    accent: "#F59E0B",
    status: "live" as const,
  },
  {
    slug: "paradoxo-do-sucesso",
    title: "O Paradoxo do Sucesso",
    subtitle: "Customer Success",
    description:
      "Renovação não é lealdade. Cliente ativo não é cliente saudável. O paradoxo que separa retenção real de inércia disfarçada.",
    chapters: 8,
    readTime: "12 min",
    tags: ["CS", "Retenção", "Churn", "Workshop"],
    accent: "#0D9488",
    status: "live" as const,
  },
];

export default function Portal() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero — Left-aligned, editorial */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden px-6 pb-20 md:px-12 md:pb-28">
        {/* Particle background */}
        <div className="absolute inset-0 opacity-15">
          <ParticleField count={300} color="#F59E0B" />
        </div>

        {/* Ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.04)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
              <span className="h-px w-8 bg-current opacity-40" />
              CX Experience Lab
            </span>

            <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.9] tracking-[-0.05em] text-[var(--text)]">
              Experiências que{" "}
              <span className="text-[var(--accent-primary)]">
                transformam perspectiva
              </span>
            </h1>

            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-[var(--text-secondary)]">
              Artefatos interativos de alto impacto para workshop, apresentação
              executiva e posicionamento estratégico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            {["Leitura", "Apresentação", "Workshop"].map((mode) => (
              <span
                key={mode}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)]/30 px-3.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]"
              >
                {mode}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience list */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Experiências
          </h2>
          <div className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-mono text-xs text-[var(--text-muted)]/60">
            {experiences.length} disponíveis
          </span>
        </div>

        {/* Stacked full-width cards for better differentiation */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.slug} experience={exp} index={i} />
          ))}
        </div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 border-t border-dashed border-[var(--border)] pt-8"
        >
          <div className="flex items-center gap-4">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]/50">
              Em desenvolvimento
            </span>
            <div className="h-px flex-1 bg-[var(--border)]/50" />
          </div>
          <p className="mt-3 text-sm text-[var(--text-muted)]/60">
            Data Intelligence, AI Strategy, Eficiência Operacional e mais.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <p className="text-xs text-[var(--text-muted)]">
            Diretoria de Qualidade e Dados — AeC
          </p>
          <p className="text-xs text-[var(--text-muted)]/40">
            Plataforma de Experiências Interativas
          </p>
        </div>
      </footer>
    </main>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/experiencias/${experience.slug}`} className="group block">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10",
            "transition-all duration-300 ease-out",
            "hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:shadow-2xl hover:shadow-black/30"
          )}
        >
          {/* Accent glow — positioned differently per card */}
          <div
            className={cn(
              "absolute h-48 w-48 rounded-full opacity-[0.03] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]",
              isEven ? "-right-16 -top-16" : "-left-16 -bottom-16"
            )}
            style={{ background: experience.accent }}
          />

          <div className={cn(
            "grid gap-6 md:gap-10 items-center",
            isEven ? "md:grid-cols-[1fr_auto]" : "md:grid-cols-[auto_1fr]"
          )}>
            {/* Stats column — alternates position */}
            {!isEven && (
              <div className="hidden md:flex flex-col items-center gap-1 border-r border-[var(--border)] pr-10">
                <span className="font-mono text-3xl font-bold leading-none" style={{ color: experience.accent }}>
                  {experience.chapters}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">capítulos</span>
                <div className="my-2 h-px w-8 bg-[var(--border)]" />
                <span className="font-mono text-sm font-bold text-[var(--text-secondary)]">
                  {experience.readTime}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">leitura</span>
              </div>
            )}

            {/* Content */}
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: experience.accent }}
                />
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {experience.subtitle}
                </span>
                {experience.status === "live" && (
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-emerald-400">
                    Live
                  </span>
                )}
              </div>

              <h3
                className="mt-3 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-light tracking-[-0.02em] text-[var(--text)] transition-colors duration-300"
                style={{ "--card-accent": experience.accent } as React.CSSProperties}
              >
                <span className="group-hover:text-[var(--card-accent)]">{experience.title}</span>
              </h3>

              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                {experience.description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[var(--border)] px-2 py-0.5 text-[0.6rem] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}

                {/* Mobile stats */}
                <div className="ml-auto flex items-center gap-4 md:hidden text-xs text-[var(--text-muted)]">
                  <span><span className="font-mono font-bold text-[var(--text-secondary)]">{experience.chapters}</span> cap.</span>
                  <span>{experience.readTime}</span>
                </div>
              </div>
            </div>

            {/* Stats column — alternates position */}
            {isEven && (
              <div className="hidden md:flex flex-col items-center gap-1 border-l border-[var(--border)] pl-10">
                <span className="font-mono text-3xl font-bold leading-none" style={{ color: experience.accent }}>
                  {experience.chapters}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">capítulos</span>
                <div className="my-2 h-px w-8 bg-[var(--border)]" />
                <span className="font-mono text-sm font-bold text-[var(--text-secondary)]">
                  {experience.readTime}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">leitura</span>
              </div>
            )}
          </div>

          {/* Arrow */}
          <div
            className={cn(
              "absolute top-8 transition-all duration-200",
              isEven ? "right-8" : "right-8",
              "flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm"
            )}
            style={{ "--arrow-accent": experience.accent } as React.CSSProperties}
          >
            <span className="transition-colors duration-200 group-hover:text-[var(--arrow-accent)]">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
