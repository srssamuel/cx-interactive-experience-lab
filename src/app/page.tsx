"use client";

import { cn } from "@/lib/cn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
    chapters: 11,
    readTime: "15 min",
    workshopTime: "1h30",
    tags: ["CX", "Experiência", "Retenção", "Workshop"],
    accent: "#F59E0B",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
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
    workshopTime: "1h",
    tags: ["CS", "Retenção", "Churn", "Workshop"],
    accent: "#0D9488",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    status: "live" as const,
  },
];

export default function Portal() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen items-end overflow-hidden pb-20 md:pb-28">
        {/* Background layers */}
        <div className="absolute inset-0 opacity-10">
          <ParticleField count={250} color="#F59E0B" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.04)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent-primary)]">
              <span className="h-px w-8 bg-current opacity-40" />
              CX Experience Lab
            </span>

            <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(2.8rem,8vw,6.5rem)] font-light leading-[0.88] tracking-[-0.05em] text-[var(--text)]">
              Experiências digitais{" "}
              <span className="text-[var(--accent-primary)]">premium</span>
            </h1>

            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-[var(--text-secondary)]">
              Artefatos interativos de alto impacto para workshop, apresentação
              executiva e posicionamento estratégico.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 flex items-center gap-3"
            >
              {["Leitura", "Apresentação", "Workshop"].map((mode) => (
                <span
                  key={mode}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)]/20 px-3 py-1 text-[0.55rem] font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]"
                >
                  {mode}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent-primary)]/20 to-transparent" />
            <span className="text-[0.55rem] uppercase tracking-[0.15em] text-[var(--text-muted)]/50">
              {experiences.length} experiências disponíveis
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── EXPERIENCES ─── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="space-y-0">
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
          className="mt-12 border-t border-[var(--border)] pt-8"
        >
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]/40">
            Em desenvolvimento
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]/50">
            Data Intelligence · AI Strategy · Eficiência Operacional
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <p className="text-xs text-[var(--text-muted)]">
            Diretoria de Qualidade e Dados — AeC
          </p>
          <p className="text-xs text-[var(--text-muted)]/30">
            CX Experience Lab
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
  const isFirst = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/experiencias/${experience.slug}`} className="group block">
        <div className={cn(
          "relative grid overflow-hidden border-b border-[var(--border)]",
          "transition-colors duration-300 hover:bg-[var(--surface)]/30",
          isFirst ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.2fr]",
          "py-10 md:py-0"
        )}>
          {/* Image — alternating position */}
          {isFirst && (
            <div className="relative hidden md:block min-h-[400px] overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--bg)]/60" />
              {/* Accent overlay */}
              <div
                className="absolute inset-0 mix-blend-overlay opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.15]"
                style={{ background: experience.accent }}
              />
            </div>
          )}

          {/* Content */}
          <div className={cn(
            "flex flex-col justify-center",
            isFirst ? "px-6 md:px-14 md:py-16" : "px-6 md:px-14 md:py-16"
          )}>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: experience.accent }} />
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                {experience.subtitle}
              </span>
              {experience.status === "live" && (
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.1em] text-emerald-400">
                  Live
                </span>
              )}
            </div>

            <h2
              className="mt-3 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-light tracking-[-0.03em] text-[var(--text)] transition-colors duration-300"
              style={{ "--card-accent": experience.accent } as React.CSSProperties}
            >
              <span className="group-hover:text-[var(--card-accent)]">{experience.title}</span>
            </h2>

            <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-[var(--text-secondary)]">
              {experience.description}
            </p>

            {/* Meta */}
            <div className="mt-6 flex items-center gap-6 text-[0.6rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
              <span><span className="font-mono text-sm font-bold text-[var(--text-secondary)]">{experience.chapters}</span> capítulos</span>
              <span>{experience.readTime} leitura</span>
              <span>{experience.workshopTime} workshop</span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[var(--border)] px-2 py-0.5 text-[0.55rem] text-[var(--text-muted)]/70"
                >
                  {tag}
                </span>
              ))}
              <span
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-sm text-[var(--text-muted)] transition-all duration-200"
                style={{ "--arrow-accent": experience.accent } as React.CSSProperties}
              >
                <span className="transition-colors duration-200 group-hover:text-[var(--arrow-accent)]">→</span>
              </span>
            </div>
          </div>

          {/* Image for second card (right side) */}
          {!isFirst && (
            <div className="relative hidden md:block min-h-[400px] overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--bg)]/60" />
              <div
                className="absolute inset-0 mix-blend-overlay opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.15]"
                style={{ background: experience.accent }}
              />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
