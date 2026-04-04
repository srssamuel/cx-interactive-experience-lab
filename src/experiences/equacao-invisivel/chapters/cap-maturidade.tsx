"use client";

import { Section, Container } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { maturidade } from "../content";

export function CapMaturidade() {
  return (
    <>
      <ChapterTransition id="maturidade" number="08" title={maturidade.headline} />

      <Section variant="default">
        <Container>
          <div className="space-y-6">
            {maturidade.stages.map((stage, i) => (
              <GSAPReveal key={stage.id}>
                <div
                  className={`group relative overflow-hidden rounded-xl border p-8 transition-all duration-300 ${
                    i === maturidade.stages.length - 1
                      ? "border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.03]"
                      : "border-[var(--border)] bg-[var(--surface)]/20 hover:bg-[var(--surface)]/40"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.05]">
                      <span className="font-mono text-lg font-bold text-[var(--accent-primary)]">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl font-light text-[var(--text)]">
                          {stage.title}
                        </h3>
                        <span className="text-[0.5rem] uppercase tracking-wider text-[var(--text-muted)]">
                          {stage.label}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{stage.short}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {stage.characteristics.map((c) => (
                          <span
                            key={c}
                            className="rounded-md bg-[var(--bg)]/50 px-2.5 py-1 text-[0.65rem] text-[var(--text-muted)]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>

      <WorkshopBlock {...maturidade.workshop} />
    </>
  );
}
