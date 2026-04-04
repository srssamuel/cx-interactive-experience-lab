"use client";

import { Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { PausePoint } from "@/components/workshop/discussion-prompt";
import { MagneticElement } from "@/components/interactive/magnetic-element";
import { modelo } from "../content";

/**
 * MODELO — 4 levels as a vertical TIMELINE with connected dots.
 * Visually distinct from Equação's Maturidade (which uses horizontal grid).
 * Each level is a node on a vertical line, with alternating sides.
 */
export function CapModelo() {
  return (
    <>
      <ChapterTransition id="modelo" number="04" title={modelo.headline} />

      <Section variant="breathing">
        <Container size="narrow">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--accent-primary)]/25 via-[var(--accent-primary)]/15 to-[var(--accent-primary)]/5 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-20">
              {modelo.stages.map((stage, i) => {
                const total = modelo.stages.length;
                const isLast = i === total - 1;
                const isEven = i % 2 === 0;
                // Opacity grows with each level
                const bgOpacity = 0.02 + i * 0.02;

                return (
                  <GSAPReveal
                    key={stage.id}
                    from={{ opacity: 0, x: isEven ? -25 : 25 }}
                    to={{ opacity: 1, x: 0, duration: 0.7, delay: i * 0.12, ease: "power3.out" }}
                  >
                    <div className={`relative grid items-center gap-6 md:grid-cols-2`}>
                      {/* Node dot on the line */}
                      <MagneticElement strength={0.3}>
                        <div className={`absolute left-4 top-2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 md:left-1/2 ${
                          isLast
                            ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 shadow-[0_0_20px_rgba(var(--accent-primary-rgb),0.15)]"
                            : "border-[var(--border)] bg-[var(--bg)]"
                        }`}>
                          <span className={`font-mono text-xs font-bold ${
                            isLast ? "text-[var(--accent-primary)]" : "text-[var(--text-muted)]"
                          }`}>
                            {i + 1}
                          </span>
                        </div>
                      </MagneticElement>

                      {/* Content — alternates sides */}
                      <div data-float className={`pl-12 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                        <span className={`text-[0.5rem] uppercase tracking-wider ${
                          isLast ? "text-[var(--accent-primary)]" : "text-[var(--text-muted)]"
                        }`}>
                          {stage.label}
                        </span>
                        <h3 className={`mt-1 font-display text-xl font-light ${
                          isLast ? "text-[var(--accent-primary)]" : "text-[var(--text)]"
                        }`}>
                          {stage.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {stage.description}
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

      <PausePoint message="Em qual nível está sua operação de CS?" />
    </>
  );
}
