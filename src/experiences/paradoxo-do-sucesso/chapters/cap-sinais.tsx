"use client";

import { BodyText, Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { Accordion } from "@/components/interactive/accordion";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { sinais } from "../content";

const severityStyles: Record<string, string> = {
  "crítico": "bg-[var(--danger)]/10 text-[var(--danger)]",
  "alto": "bg-[var(--warning)]/10 text-[var(--warning)]",
  "médio": "bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)]",
};

export function CapSinais() {
  return (
    <>
      <ChapterTransition id="sinais" number="02" title={sinais.headline} />

      <Section variant="default">
        <Container size="narrow">
          <GSAPReveal>
            <BodyText className="mb-10">{sinais.subtext}</BodyText>
          </GSAPReveal>

          <Accordion
            items={sinais.items.map((item) => ({
              id: item.signal,
              trigger: item.signal,
              content: (
                <div>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                  <span
                    className={`mt-3 inline-block rounded-md px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.1em] ${
                      severityStyles[item.severity] ?? "bg-[var(--surface)] text-[var(--text-muted)]"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
              ),
            }))}
          />
        </Container>
      </Section>
    </>
  );
}
