"use client";

import { cn } from "@/lib/cn";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { SpotlightCard } from "@/components/interactive/spotlight-card";
import { MagneticElement } from "@/components/interactive/magnetic-element";
import { TextReveal } from "@/components/motion/text-reveal";

const GlowingOrb = dynamic(
  () =>
    import("@/components/cinematic/glowing-orb").then(
      (mod) => mod.GlowingOrb
    ),
  { ssr: false }
);

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
      "A equação que separa retenção real de abandono silencioso. Por que resultado certo com experiência errada destrói valor.",
    chapters: 11,
    readTime: "15 min",
    workshopTime: "1h30",
    tags: ["CX", "Experiência", "Retenção"],
    accent: "#0EA5E9",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=85",
    status: "live" as const,
  },
  {
    slug: "paradoxo-do-sucesso",
    title: "O Paradoxo do Sucesso",
    subtitle: "Customer Success",
    description:
      "Renovação não é lealdade. Cliente ativo não é cliente saudável. O que sua operação não está medindo.",
    chapters: 8,
    readTime: "12 min",
    workshopTime: "1h",
    tags: ["CS", "Retenção", "Churn"],
    accent: "#06B6D4",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85",
    status: "live" as const,
  },
];

const upcomingExperiences = [
  { title: "Data Intelligence", status: "Em desenvolvimento" },
  { title: "AI Strategy", status: "Em desenvolvimento" },
  { title: "Eficiência Operacional", status: "Em desenvolvimento" },
];

/* ─── Animated counter ─── */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1800;
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono font-bold tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function Portal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <main className="min-h-screen bg-[var(--bg)] overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Premium Tech Lab Entry
          ═══════════════════════════════════════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 animated-grid" />

        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(14,165,233,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_45%,rgba(6,182,212,0.05)_0%,transparent_60%)]" />

        {/* Particles behind orb */}
        <div className="absolute inset-0 opacity-[0.06]">
          <ParticleField count={200} color="#0EA5E9" />
        </div>

        {/* 3D Orb — center focal point */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px]">
            <GlowingOrb />
          </div>
        </div>

        {/* Gradient fades */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--bg)]/50 to-transparent" />

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                <span className="h-px w-6 bg-current opacity-40" />
                CX Experience Lab
                <span className="h-px w-6 bg-current opacity-40" />
              </span>
            </motion.div>

            <div className="mt-8">
              <TextReveal
                text="Palco digital executivo"
                tag="h1"
                trigger="mount"
                delay={0.3}
                stagger={0.04}
                className="max-w-[16ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.92] tracking-[-0.04em] text-[var(--text)]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 max-w-[38ch] text-[0.95rem] leading-relaxed text-[var(--text-secondary)]"
            >
              Experiências interativas premium para keynote, workshop e
              posicionamento estratégico.
            </motion.p>

            {/* Mode badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 flex items-center gap-3"
            >
              {[
                { label: "Leitura", icon: "◉" },
                { label: "Apresentação", icon: "▶" },
                { label: "Workshop", icon: "◫" },
              ].map((mode) => (
                <MagneticElement key={mode.label} strength={0.2}>
                  <span className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/40 px-3.5 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-[var(--text-muted)] backdrop-blur-sm transition-colors duration-300 hover:border-[var(--accent-primary)]/20 hover:text-[var(--text-secondary)]">
                    <span className="text-[0.5rem] text-[var(--accent-primary)]">
                      {mode.icon}
                    </span>
                    {mode.label}
                  </span>
                </MagneticElement>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]/40">
              Explorar
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-[var(--accent-primary)]/30 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          STATS BAR — Impact numbers
          ═══════════════════════════════════════════ */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface)]/30">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
            {[
              { value: 2, suffix: "", label: "Experiências live" },
              { value: 19, suffix: "", label: "Capítulos interativos" },
              { value: 3, suffix: "", label: "Modos de uso" },
              { value: 150, suffix: "+", label: "Minutos de workshop" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center py-8 md:py-10"
              >
                <span className="text-[clamp(1.5rem,3vw,2.25rem)] text-[var(--accent-primary)]">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-1 text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERIENCES — Premium Cards with Depth
          ═══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        {/* Section ambient glow */}
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.04)_0%,transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-flex items-center gap-3 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent-primary)]">
              <span className="h-px w-8 bg-current opacity-40" />
              Experiências disponíveis
            </span>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.slug} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          UPCOMING — Coming soon
          ═══════════════════════════════════════════ */}
      <section className="relative border-t border-[var(--border)] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-3 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]/60">
              <span className="h-px w-6 bg-current opacity-30" />
              Em desenvolvimento
            </span>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {upcomingExperiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--surface)]/20 p-6 transition-all duration-300 hover:border-[var(--accent-primary)]/10 hover:bg-[var(--surface)]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg text-[var(--text)]/60">
                      {exp.title}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]/30 animate-pulse" />
                  </div>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.1em] text-[var(--text-muted)]/40">
                    {exp.status}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="border-t border-[var(--border)] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[var(--accent-primary)]/40" />
            <p className="text-xs font-medium text-[var(--text-muted)]">
              CX Experience Lab
            </p>
          </div>
          <p className="text-[0.65rem] tracking-wider text-[var(--text-muted)]/30">
            Diretoria de Qualidade e Dados — AeC
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ─── Experience Card — Premium with depth ─── */
function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/experiencias/${experience.slug}`} className="group block">
        <SpotlightCard
          className={cn(
            "rounded-2xl",
            "transition-all duration-500"
          )}
          spotlightColor={`${experience.accent}14`}
          spotlightSize={450}
        >
          <div
            className={cn(
              "grid overflow-hidden",
              isEven
                ? "md:grid-cols-[1.3fr_1fr]"
                : "md:grid-cols-[1fr_1.3fr]"
            )}
            style={
              {
                "--card-accent": experience.accent,
                "--card-accent-rgb": experience.accent === "#0EA5E9" ? "14,165,233" : "6,182,212",
              } as React.CSSProperties
            }
          >

          {/* Image — with depth layers */}
          {isEven && (
            <CardImage experience={experience} gradientDir="to-r" />
          )}

          {/* Content */}
          <div className="relative flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
            <div className="flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: experience.accent }}
              />
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                {experience.subtitle}
              </span>
              {experience.status === "live" && (
                <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.1em] text-emerald-400">
                  <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              )}
            </div>

            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-light tracking-[-0.03em] text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--card-accent)]">
              {experience.title}
            </h2>

            <p className="mt-3 max-w-[44ch] text-[0.9rem] leading-relaxed text-[var(--text-secondary)]">
              {experience.description}
            </p>

            {/* Meta */}
            <div className="mt-8 flex items-center gap-6 text-[0.6rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <span className="font-mono text-base font-bold text-[var(--text-secondary)]">
                  {experience.chapters}
                </span>
                capítulos
              </span>
              <span className="h-3 w-px bg-[var(--border)]" />
              <span>{experience.readTime} leitura</span>
              <span className="h-3 w-px bg-[var(--border)]" />
              <span>{experience.workshopTime} workshop</span>
            </div>

            {/* Tags + Arrow */}
            <div className="mt-5 flex items-center gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[var(--border)] bg-[var(--bg)]/50 px-2.5 py-1 text-[0.55rem] font-medium text-[var(--text-muted)]/70"
                >
                  {tag}
                </span>
              ))}
              <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-sm text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--card-accent)]/30 group-hover:text-[var(--card-accent)] group-hover:shadow-[0_0_15px_rgba(var(--card-accent-rgb),0.15)]">
                →
              </span>
            </div>
          </div>

          {/* Image for odd cards (right side) */}
          {!isEven && (
            <CardImage experience={experience} gradientDir="to-l" />
          )}
          </div>
        </SpotlightCard>
      </Link>
    </motion.div>
  );
}

function CardImage({
  experience,
  gradientDir,
}: {
  experience: (typeof experiences)[0];
  gradientDir: string;
}) {
  return (
    <div className="relative hidden min-h-[420px] overflow-hidden md:block">
      <Image
        src={experience.image}
        alt={experience.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="60vw"
      />
      {/* Dark overlay */}
      <div
        className={`absolute inset-0 bg-gradient-${gradientDir === "to-r" ? "to-r" : "to-l"} from-transparent via-[var(--bg)]/30 to-[var(--bg)]/70`}
      />
      {/* Accent overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]"
        style={{ background: experience.accent }}
      />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--surface)]/50 to-transparent" />
    </div>
  );
}
