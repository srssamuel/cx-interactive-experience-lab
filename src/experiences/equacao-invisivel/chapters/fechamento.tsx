"use client";

import { Container } from "@/components/design-system";
import { GSAPReveal, GSAPParallax } from "@/components/motion/gsap-reveal";
import { BlurReveal } from "@/components/motion/text-reveal";
import { GrainOverlay } from "@/components/cinematic/headline-slide";
import { fechamento } from "../content";

/**
 * FECHAMENTO — Minimal, centered, breathing.
 * NOT a repeat of the Hero. No stats, no overline.
 * Just the provocation and a single accent line.
 * Full-bleed typography moment. The page ends with silence.
 */
export function FechamentoChapter() {
  return (
    <section
      id="fechamento"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <GSAPParallax speed={-30}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.03)_0%,transparent_60%)]" />
      </GSAPParallax>
      <GrainOverlay opacity={0.02} />

      <Container size="narrow">
        <div className="relative z-10 text-center">
          <BlurReveal>
            <h2 className="font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-[var(--text)]">
              {fechamento.headline}
            </h2>
          </BlurReveal>

          <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" }}>
            <p className="mx-auto mt-4 font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-[var(--accent-primary)]">
              {fechamento.headlineAccent}
            </p>
          </GSAPReveal>

          <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 1, delay: 1.2, ease: "power3.out" }}>
            <p className="mx-auto mt-10 max-w-[44ch] font-display text-lg font-light italic leading-relaxed text-[var(--text-secondary)]">
              {fechamento.provocation}
            </p>
          </GSAPReveal>

          <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.8, delay: 1.8, ease: "power3.out" }}>
            <div className="mx-auto mt-16 h-px w-24 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent" />
            <p className="mt-6 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--text-muted)]/40">
              CX Experience Lab
            </p>
          </GSAPReveal>
        </div>
      </Container>
    </section>
  );
}
