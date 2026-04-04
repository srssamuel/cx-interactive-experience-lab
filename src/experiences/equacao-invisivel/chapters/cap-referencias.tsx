"use client";

import { Section, Container, NumberedCard } from "@/components/design-system";
import { GSAPReveal, GSAPCounter } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { referencias } from "../content";

/**
 * REFERÊNCIAS — Each case gets distinct visual treatment.
 * First case: full-width editorial. Others: asymmetric grid.
 * No uniform card grid. NumberedCards with metric prominence.
 */
export function CapReferencias() {
  const [firstCase, ...restCases] = referencias.cases;

  return (
    <>
      <ChapterTransition id="referencias" number="09" title={referencias.headline} />

      {/* First case — full-width, editorial prominence */}
      <Section background="surface">
        <Container size="narrow">
          <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }}>
            <div className="flex flex-col items-center text-center">
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
                {firstCase.sector}
              </span>
              <h3 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-[-0.02em] text-[var(--text)]">
                {firstCase.title}
              </h3>
              <p className="mt-4 max-w-[48ch] text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                {firstCase.insight}
              </p>
              <div className="mt-8">
                <span className="font-mono text-[clamp(2.5rem,6vw,4rem)] font-bold text-[var(--accent-primary)]">
                  <GSAPCounter value={firstCase.metric.value} />
                  {firstCase.metric.suffix}
                </span>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{firstCase.metric.label}</p>
              </div>
            </div>
          </GSAPReveal>
        </Container>
      </Section>

      {/* Remaining cases — side by side, different rhythm */}
      <Section variant="default">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {restCases.map((c, i) => (
              <GSAPReveal key={c.title} from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: "power3.out" }}>
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {c.sector}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-light text-[var(--text)]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {c.insight}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[var(--border)] pt-4">
                    <span className="font-mono text-2xl font-bold text-[var(--accent-primary)]">
                      {c.metric.value}{c.metric.suffix}
                    </span>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">{c.metric.label}</p>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
