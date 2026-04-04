"use client";

import { SectionHeading, Section, Container, PullQuote } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ComparisonSlider } from "@/components/interactive/comparison-slider";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { pratica } from "../content";

/**
 * NA PRÁTICA — ComparisonSlider for the core metaphor.
 * Insight integrated inline. No HeadlineSlide filler.
 */
export function CapPratica() {
  return (
    <>
      <ChapterTransition id="pratica" number="07" title={pratica.headline} />

      {/* Core comparison — interactive slider */}
      <Section variant="breathing">
        <Container size="narrow">
          <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }}>
            <ComparisonSlider
              before={{
                label: pratica.scenarios.positive.label,
                content: (
                  <div className="flex h-full flex-col justify-center bg-[var(--success)]/[0.04] p-8 md:p-12">
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--success)]">
                      {pratica.scenarios.positive.label}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-light text-[var(--text)]">
                      {pratica.scenarios.positive.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {pratica.scenarios.positive.description}
                    </p>
                  </div>
                ),
              }}
              after={{
                label: pratica.scenarios.negative.label,
                content: (
                  <div className="flex h-full flex-col justify-center bg-[var(--danger)]/[0.04] p-8 md:p-12">
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--danger)]">
                      {pratica.scenarios.negative.label}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-light text-[var(--text)]">
                      {pratica.scenarios.negative.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {pratica.scenarios.negative.description}
                    </p>
                  </div>
                ),
              }}
              className="min-h-[320px] overflow-hidden rounded-xl border border-[var(--border)]"
            />
          </GSAPReveal>

          {/* Insight inline — PullQuote component */}
          <GSAPReveal from={{ opacity: 0, y: 15 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power3.out" }}>
            <PullQuote className="mt-12 py-6">
              {pratica.insight}
            </PullQuote>
          </GSAPReveal>
        </Container>
      </Section>

      {/* Analogias — editorial, no cards */}
      <Section variant="default">
        <Container>
          <div className="space-y-16 md:space-y-20">
            {pratica.analogias.map((a, i) => (
              <GSAPReveal key={a.contexto} from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: 0.05, ease: "power3.out" }}>
                <div className="grid items-start gap-8 md:grid-cols-[180px_1fr_1fr]">
                  <div>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
                      {a.contexto}
                    </span>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{a.resultado}</p>
                  </div>
                  <div className="border-l-2 border-[var(--success)]/30 pl-5">
                    <span className="text-[0.5rem] uppercase tracking-wider text-[var(--success)]">
                      Volta
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{a.experienciaA}</p>
                  </div>
                  <div className="border-l-2 border-[var(--danger)]/30 pl-5">
                    <span className="text-[0.5rem] uppercase tracking-wider text-[var(--danger)]">
                      Nunca mais
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{a.experienciaB}</p>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>

      <WorkshopBlock {...pratica.workshop} />
    </>
  );
}
