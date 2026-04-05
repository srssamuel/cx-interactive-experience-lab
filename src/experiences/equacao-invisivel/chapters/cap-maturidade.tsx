"use client";

import { Section, Container } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { AmbientBackground } from "@/components/cinematic/ambient-background";
import { HolographicCard } from "@/components/cinematic/holographic-card";
import { maturidade } from "../content";

/**
 * MATURIDADE — Horizontal progression with growing visual weight.
 * Not uniform cards. Each level gets physically larger and more prominent.
 * The last level breaks the pattern with accent treatment.
 */
export function CapMaturidade() {
  const total = maturidade.stages.length;

  return (
    <>
      <ChapterTransition textShadow="subtle" id="maturidade" number="08" title={maturidade.headline} />

      <Section variant="breathing" className="relative section-bg-violet">
        <AmbientBackground variant="mesh-violet" intensity={0.7} />
        <Container size="wide">
          <div className="grid gap-5 md:grid-cols-4">
            {maturidade.stages.map((stage, i) => {
              const isLast = i === total - 1;
              // Each level gets taller padding to show growth
              const verticalPad = `${32 + i * 12}px`;

              const cardContent = (
                  <div
                    data-float
                    className={`group relative h-full overflow-hidden rounded-xl border transition-all duration-300 ${
                      isLast
                        ? "border-[var(--accent-primary)]/25 bg-[var(--accent-primary)]/[0.05] shadow-[0_0_40px_rgba(var(--accent-primary-rgb),0.05)]"
                        : "border-[var(--border)] bg-[var(--surface)]/15 hover:bg-[var(--surface)]/30"
                    }`}
                    style={{ paddingTop: verticalPad, paddingBottom: verticalPad, paddingLeft: "24px", paddingRight: "24px" }}
                  >
                    {/* Level number — background watermark */}
                    <span className={`absolute -right-2 -top-4 font-mono text-[5rem] font-bold leading-none ${
                      isLast ? "text-[var(--accent-primary)]/[0.08]" : "text-[var(--text)]/[0.03]"
                    }`}>
                      {i + 1}
                    </span>

                    <div className="relative">
                      <span className={`text-[0.5rem] uppercase tracking-wider ${
                        isLast ? "text-[var(--accent-primary)]" : "text-[var(--text-muted)]"
                      }`}>
                        {stage.label}
                      </span>
                      <h3 className={`mt-2 font-display text-xl font-light ${
                        isLast ? "text-[var(--accent-primary)]" : "text-[var(--text)]"
                      }`}>
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-[0.8rem] leading-relaxed text-[var(--text-secondary)]">
                        {stage.short}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {stage.characteristics.map((c) => (
                          <span
                            key={c}
                            className="rounded bg-[var(--bg)]/60 px-2 py-0.5 text-[0.6rem] text-[var(--text-muted)]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
              );

              return (
                <GSAPReveal
                  key={stage.id}
                  from={{ opacity: 0, y: 30, scale: 0.95 }}
                  to={{ opacity: 1, y: 0, scale: 1, duration: 0.7, delay: i * 0.1, ease: "power3.out" }}
                >
                  {isLast ? (
                    <HolographicCard scheme="aurora">{cardContent}</HolographicCard>
                  ) : (
                    cardContent
                  )}
                </GSAPReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <WorkshopBlock {...maturidade.workshop} />
    </>
  );
}
