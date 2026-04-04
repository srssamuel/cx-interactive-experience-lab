"use client";

import { Section, Container } from "@/components/design-system";
import { Tabs } from "@/components/interactive/tabs";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { jornada } from "../content";

export function CapJornada() {
  return (
    <>
      <ChapterTransition id="jornada" number="05" title={jornada.headline} />

      <Section background="surface">
        <Container>
          <Tabs
            variant="underline"
            tabs={jornada.phases.map((phase) => ({
              id: phase.title,
              label: phase.title,
              content: (
                <div className="py-6">
                  <h3 className="font-display text-xl font-light text-[var(--accent-primary)]">
                    {phase.question}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                    {phase.answer}
                  </p>
                </div>
              ),
            }))}
          />
        </Container>
      </Section>
    </>
  );
}
