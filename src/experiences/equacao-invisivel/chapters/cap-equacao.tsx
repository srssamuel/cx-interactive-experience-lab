"use client";

import { Provocation, Section, Container } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import {
  GSAPReveal,
  GSAPStaggerReveal,
} from "@/components/motion/gsap-reveal";
import {
  HeadlineSlide,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { equation } from "../content";

export function CapEquacao() {
  return (
    <>
      <ChapterTransition id="equacao" number="01" title={equation.headline} />

      <Section variant="breathing" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.03)_0%,transparent_60%)]" />
        <Container size="default">
          <GSAPReveal>
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                {equation.parts.map((part, i) => (
                  <div key={part.title} className="flex items-center gap-4 md:gap-8">
                    {i > 0 && (
                      <span className="font-mono text-3xl font-bold text-[var(--accent-primary)]">+</span>
                    )}
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 px-8 py-6">
                      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
                        {part.title}
                      </span>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{part.short}</p>
                    </div>
                  </div>
                ))}
                <span className="font-mono text-3xl font-bold text-[var(--accent-primary)]">=</span>
                <div className="rounded-xl border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.04] px-8 py-6">
                  <span className="font-display text-xl font-light text-[var(--text)]">
                    {equation.conclusion}
                  </span>
                </div>
              </div>
            </div>
          </GSAPReveal>
        </Container>
      </Section>

      <HeadlineSlide background="surface">
        <GSAPReveal>
          <Provocation>{equation.insight}</Provocation>
          <GSAPStaggerReveal className="mt-8 max-w-[52ch] space-y-4">
            {equation.deepPoints.map((point, i) => (
              <p key={i} className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                {point}
              </p>
            ))}
          </GSAPStaggerReveal>
        </GSAPReveal>
      </HeadlineSlide>

      <WorkshopBlock {...equation.workshop} />
    </>
  );
}
