"use client";

import { SectionHeading, Section, Container } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import {
  HeadlineSlide,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { pratica } from "../content";

export function CapPratica() {
  return (
    <>
      <ChapterTransition id="pratica" number="07" title={pratica.headline} />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <GSAPReveal>
              <div className="h-full rounded-xl border border-[var(--success)]/20 bg-[var(--success)]/[0.03] p-8">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--success)]">
                  {pratica.scenarios.positive.label}
                </span>
                <h3 className="mt-3 font-display text-xl font-light text-[var(--text)]">
                  {pratica.scenarios.positive.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {pratica.scenarios.positive.description}
                </p>
              </div>
            </GSAPReveal>
            <GSAPReveal>
              <div className="h-full rounded-xl border border-[var(--danger)]/20 bg-[var(--danger)]/[0.03] p-8">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--danger)]">
                  {pratica.scenarios.negative.label}
                </span>
                <h3 className="mt-3 font-display text-xl font-light text-[var(--text)]">
                  {pratica.scenarios.negative.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {pratica.scenarios.negative.description}
                </p>
              </div>
            </GSAPReveal>
          </div>
        </Container>
      </Section>

      <HeadlineSlide align="center" background="surface">
        <GSAPReveal>
          <SectionHeading>{pratica.insight}</SectionHeading>
        </GSAPReveal>
      </HeadlineSlide>

      <Section variant="default">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {pratica.analogias.map((a) => (
              <GSAPReveal key={a.contexto}>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/20 p-8">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
                    {a.contexto}
                  </span>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{a.resultado}</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="border-l-2 border-[var(--success)]/30 pl-3">
                      <span className="text-[0.5rem] uppercase tracking-wider text-[var(--success)]">
                        Volta
                      </span>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{a.experienciaA}</p>
                    </div>
                    <div className="border-l-2 border-[var(--danger)]/30 pl-3">
                      <span className="text-[0.5rem] uppercase tracking-wider text-[var(--danger)]">
                        Nunca mais
                      </span>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{a.experienciaB}</p>
                    </div>
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
