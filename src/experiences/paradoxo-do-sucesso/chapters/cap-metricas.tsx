"use client";

import { Section, Container, SubHeading } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { BlurReveal } from "@/components/motion/text-reveal";
import {
  HeadlineSlide,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { metricas } from "../content";

/**
 * MÉTRICAS — "Tearing away the mask" effect.
 * Vanity metrics shown as faded/struck-through.
 * Real metrics revealed with emphasis.
 * Not a symmetric split — editorial progression.
 */
export function CapMetricas() {
  return (
    <>
      <ChapterTransition id="metricas" number="03" title={metricas.headline} />

      {/* Vanity — shown as things to discard */}
      <Section variant="default">
        <Container size="narrow">
          <GSAPReveal>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--danger)]/60">
              O que te dá conforto
            </span>
          </GSAPReveal>
          <div className="mt-8 space-y-6">
            {metricas.vanity.map((v, i) => (
              <GSAPReveal key={v.metric} from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0, duration: 0.6, delay: i * 0.1, ease: "power3.out" }}>
                <div className="group flex items-start gap-5">
                  <span className="mt-1 block h-px w-8 shrink-0 bg-[var(--danger)]/30 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--danger)]/60" />
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text)]/60 line-through decoration-[var(--danger)]/30">
                      {v.metric}
                    </h4>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{v.problem}</p>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Transition — typographic break */}
      <HeadlineSlide background="surface" align="center">
        <BlurReveal>
          <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-light tracking-[-0.02em] text-[var(--text)]">
            Agora, o que realmente importa.
          </p>
        </BlurReveal>
      </HeadlineSlide>

      {/* Real metrics — revealed with prominence */}
      <Section variant="default">
        <Container size="narrow">
          <GSAPReveal>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
              O que revela a verdade
            </span>
          </GSAPReveal>
          <div className="mt-8 space-y-8">
            {metricas.real.map((r, i) => (
              <GSAPReveal key={r.metric} from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: i * 0.12, ease: "power3.out" }}>
                <div className="border-l-3 border-[var(--accent-primary)]/30 pl-6" style={{ borderLeftWidth: "3px" }}>
                  <SubHeading className="text-[var(--accent-primary)]">
                    {r.metric}
                  </SubHeading>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                    {r.insight}
                  </p>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
