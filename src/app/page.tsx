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
    subtitle: "Customer Experience Reimaginado",
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
    subtitle: "Customer Success Redefinido",
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
      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Particle background */}
        <div className="absolute inset-0 opacity-20">
          <ParticleField count={300} color="#F59E0B" />
        </div>

        {/* Layered ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(13,148,136,0.03)_0%,transparent_50%)]" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,236,244,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,236,244,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
            <span className="h-px w-8 bg-current opacity-40" />
            CX Experience Lab
            <span className="h-px w-8 bg-current opacity-40" />
          </span>

          <h1 className="mx-auto mt-8 max-w-[20ch] font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--text)]">
            Experiências digitais que{" "}
            <span className="text-[var(--accent-primary)]">
              transformam como você vê o problema
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[50ch] text-lg leading-relaxed text-[var(--text-secondary)]">
            Artefatos interativos de alto impacto para workshop, apresentação
            executiva e posicionamento estratégico.
          </p>

          {/* Mode badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {["Leitura", "Apresentação", "Workshop"].map((mode) => (
              <span
                key={mode}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)]/50 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]"
              >
                {mode}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 text-[var(--text-muted)]"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-xs uppercase tracking-[0.15em]"
          >
            Explorar ↓
          </motion.span>
        </motion.div>
      </section>

      {/* Experience grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-12">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Experiências
          </h2>
          <div className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-mono text-xs text-[var(--text-muted)]">
            {experiences.length} disponível{experiences.length !== 1 ? "is" : ""}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.slug} experience={exp} index={i} />
          ))}
        </div>

        {/* Coming soon teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)]/30 p-8 text-center md:p-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]/60">
            Em breve
          </span>
          <p className="mt-2 font-display text-xl text-[var(--text-muted)]">
            Novas experiências em desenvolvimento
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]/60">
            Customer Success, Data Intelligence, AI Strategy e mais
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-12">
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/experiencias/${experience.slug}`} className="group block">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12",
            "transition-all duration-300 ease-out",
            "hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-2xl hover:shadow-black/30"
          )}
        >
          {/* Accent glow */}
          <div
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-[0.03] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.07]"
            style={{ background: experience.accent }}
          />
          <div
            className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full opacity-[0.02] blur-2xl"
            style={{ background: experience.accent }}
          />

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: experience.accent }}
                />
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {experience.subtitle}
                </span>
                {experience.status === "live" && (
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-emerald-400">
                    Live
                  </span>
                )}
              </div>

              <h3 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
                {experience.title}
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                {experience.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[var(--surface-elevated)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
              <div className="text-center">
                <span className="block font-mono text-lg font-bold text-[var(--text-secondary)]">
                  {experience.chapters}
                </span>
                capítulos
              </div>
              <div className="text-center">
                <span className="block font-mono text-lg font-bold text-[var(--text-secondary)]">
                  {experience.readTime}
                </span>
                leitura
              </div>
              <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-200 group-hover:border-[var(--accent-primary)]/30 group-hover:text-[var(--accent-primary)]">
                →
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
