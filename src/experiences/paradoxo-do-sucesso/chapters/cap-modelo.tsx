"use client";

import { Section, Container } from "@/components/design-system";
import { Timeline } from "@/components/interactive/timeline";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { PausePoint } from "@/components/workshop/discussion-prompt";
import { modelo } from "../content";

export function CapModelo() {
  return (
    <>
      <ChapterTransition id="modelo" number="04" title={modelo.headline} />

      <Section variant="default">
        <Container>
          <Timeline
            items={modelo.stages.map((stage) => ({
              id: stage.id,
              label: stage.label,
              title: stage.title,
              description: stage.description,
            }))}
          />
        </Container>
      </Section>

      <PausePoint message="Em qual nível está sua operação de CS?" />
    </>
  );
}
