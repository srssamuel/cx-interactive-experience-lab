"use client";

import { SplitContent, Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { metricas } from "../content";

export function CapMetricas() {
  return (
    <>
      <ChapterTransition id="metricas" number="03" title={metricas.headline} />

      <Section background="surface">
        <Container>
          <SplitContent
            ratio="equal"
            left={
              <div>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--danger)]">
                  Métricas de vaidade
                </span>
                <div className="mt-4 space-y-4">
                  {metricas.vanity.map((v) => (
                    <GSAPReveal key={v.metric}>
                      <div className="rounded-lg border border-[var(--danger)]/10 bg-[var(--danger)]/[0.02] p-5">
                        <h4 className="text-sm font-semibold text-[var(--text)]">
                          {v.metric}
                        </h4>
                        <p className="mt-1 text-sm text-[var(--text-muted)]">{v.problem}</p>
                      </div>
                    </GSAPReveal>
                  ))}
                </div>
              </div>
            }
            right={
              <div>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
                  Métricas que importam
                </span>
                <div className="mt-4 space-y-4">
                  {metricas.real.map((r) => (
                    <GSAPReveal key={r.metric}>
                      <div className="rounded-lg border border-[var(--accent-primary)]/10 bg-[var(--accent-primary)]/[0.02] p-5">
                        <h4 className="text-sm font-semibold text-[var(--text)]">
                          {r.metric}
                        </h4>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">{r.insight}</p>
                      </div>
                    </GSAPReveal>
                  ))}
                </div>
              </div>
            }
          />
        </Container>
      </Section>
    </>
  );
}
