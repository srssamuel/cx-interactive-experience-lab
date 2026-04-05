"use client";

import { Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { jornada } from "../content";

/**
 * JORNADA — 5 phases shown as a connected path, not Tabs.
 * Each phase is a distinct node with question-answer.
 * Uses GlowBorder on the active/hovered phase.
 * Horizontal on desktop, vertical on mobile.
 */
export function CapJornada() {
  return (
    <>
      <ChapterTransition textShadow="subtle" id="jornada" number="05" title={jornada.headline} />

      <Section variant="breathing" background="surface">
        <Container>
          {/* Connected path — each phase a node */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--accent-primary)]/20 via-[var(--accent-primary)]/10 to-transparent md:left-1/2 md:block" />

            <div className="space-y-12 md:space-y-16">
              {jornada.phases.map((phase, i) => {
                const isEven = i % 2 === 0;
                return (
                  <GSAPReveal
                    key={phase.title}
                    from={{ opacity: 0, x: isEven ? -30 : 30 }}
                    to={{ opacity: 1, x: 0, duration: 0.7, delay: i * 0.1, ease: "power3.out" }}
                    skewEntry
                  >
                    <div className={`relative grid items-center gap-6 md:grid-cols-2 ${
                      isEven ? "" : "md:[direction:rtl]"
                    }`}>
                      {/* Node dot */}
                      <div className="absolute left-6 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--accent-primary)]/30 bg-[var(--bg)] md:left-1/2 md:block" />

                      {/* Content side */}
                      <div data-float className={`${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`} style={{ direction: "ltr" }}>
                        <span className="font-mono text-[0.6rem] font-medium text-[var(--text-muted)]">
                          Fase {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-light text-[var(--accent-primary)]">
                          {phase.title}
                        </h3>
                      </div>

                      {/* Question-Answer side */}
                      <div className={`${isEven ? "md:pl-16" : "md:pr-16 md:text-right"}`} style={{ direction: "ltr" }}>
                        <p className="font-medium text-[var(--text)]">
                          {phase.question}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {phase.answer}
                        </p>
                      </div>
                    </div>
                  </GSAPReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
