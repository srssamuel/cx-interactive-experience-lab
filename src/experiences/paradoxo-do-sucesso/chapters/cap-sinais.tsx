"use client";

import { BodyText, Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { sinais } from "../content";

const severityColor: Record<string, string> = {
  "crítico": "var(--danger)",
  "alto": "var(--warning)",
  "médio": "var(--accent-secondary)",
};

/**
 * SINAIS — 5 silent churn alerts, shown as escalating severity.
 * Not accordion. Each signal gets its own breathing space.
 * Severity visualized with left-border width + color.
 */
export function CapSinais() {
  return (
    <>
      <ChapterTransition id="sinais" number="02" title={sinais.headline} />

      <Section variant="default">
        <Container size="narrow">
          <GSAPReveal>
            <BodyText className="mb-12">{sinais.subtext}</BodyText>
          </GSAPReveal>

          <div className="space-y-10">
            {sinais.items.map((item, i) => {
              const color = severityColor[item.severity] ?? "var(--text-muted)";
              // Critical gets thicker border
              const borderWidth = item.severity === "crítico" ? "4px" : item.severity === "alto" ? "3px" : "2px";

              return (
                <ScrollReveal key={item.signal} delay={i * 0.08} direction="left">
                  <div
                    className="py-1 pl-6"
                    style={{ borderLeft: `${borderWidth} solid ${color}` }}
                  >
                    <div className="flex items-center gap-3">
                      <h3 data-float className="font-display text-lg font-light text-[var(--text)]">
                        {item.signal}
                      </h3>
                      <span
                        className="rounded px-2 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.1em]"
                        style={{ backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`, color }}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
