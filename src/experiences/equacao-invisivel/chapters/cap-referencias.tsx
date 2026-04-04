"use client";

import { Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { referencias } from "../content";

export function CapReferencias() {
  return (
    <>
      <ChapterTransition id="referencias" number="09" title={referencias.headline} />

      <Section background="surface">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {referencias.cases.map((c) => (
              <GSAPReveal key={c.title}>
                <div className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--bg)]/40 p-8">
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)]/60">
                    {c.sector}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-light text-[var(--text)]">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {c.insight}
                  </p>
                  <div className="mt-6 border-t border-[var(--border)] pt-4">
                    <span className="font-mono text-2xl font-bold text-[var(--accent-primary)]">
                      {c.metric.value}
                      {c.metric.suffix}
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
