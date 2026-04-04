"use client";

import { Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { PausePoint } from "@/components/workshop/discussion-prompt";
import { modelo } from "../content";

/**
 * MODELO — 4 levels shown as escalating visual weight.
 * Each level gets wider + more prominent, not a uniform Timeline.
 * Visual progression communicates maturity growth.
 */
export function CapModelo() {
  return (
    <>
      <ChapterTransition id="modelo" number="04" title={modelo.headline} />

      <Section variant="breathing">
        <Container size="default">
          <div className="space-y-5">
            {modelo.stages.map((stage, i) => {
              const total = modelo.stages.length;
              const isLast = i === total - 1;
              // Progressive width: each level stretches wider
              const maxWidth = `${55 + i * 15}%`;

              return (
                <ScrollReveal key={stage.id} delay={i * 0.1} direction="right">
                  <div
                    className={`rounded-lg border px-7 py-6 transition-all duration-300 ${
                      isLast
                        ? "border-[var(--accent-primary)]/25 bg-[var(--accent-primary)]/[0.05]"
                        : "border-[var(--border)] bg-[var(--surface)]/15 hover:bg-[var(--surface)]/25"
                    }`}
                    style={{ maxWidth }}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${
                        isLast ? "text-[var(--accent-primary)]" : "text-[var(--text-muted)]"
                      }`}>
                        {stage.label}
                      </span>
                      <span className={`font-display text-lg font-light ${
                        isLast ? "text-[var(--accent-primary)]" : "text-[var(--text)]"
                      }`}>
                        {stage.title}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {stage.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <PausePoint message="Em qual nível está sua operação de CS?" />
    </>
  );
}
