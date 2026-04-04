"use client";

import { SectionHeading } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { HeadlineSlide } from "@/components/cinematic/headline-slide";
import { workshopFinal } from "../content";

export function WorkshopFinalChapter() {
  return (
    <div id="workshop">
      <HeadlineSlide align="center" background="surface">
        <GSAPReveal>
          <SectionHeading>{workshopFinal.synthesis.headline}</SectionHeading>
        </GSAPReveal>
      </HeadlineSlide>

      {workshopFinal.synthesis.questions.map((q, i) => (
        <WorkshopBlock
          key={i}
          type={q.type}
          question={q.question}
          context={q.context}
          instructions={"instructions" in q ? q.instructions : undefined}
          timerMinutes={q.timerMinutes}
        />
      ))}
    </div>
  );
}
