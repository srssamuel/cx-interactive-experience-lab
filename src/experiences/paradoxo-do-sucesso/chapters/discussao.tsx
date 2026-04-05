"use client";

import { Provocation } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { HeadlineSlide } from "@/components/cinematic/headline-slide";
import { AmbientBackground } from "@/components/cinematic/ambient-background";
import { DiscussionPrompt } from "@/components/workshop/discussion-prompt";
import { discussion } from "../content";

export function DiscussaoChapter() {
  return (
    <div id="discussao" className="section-bg-elevated relative">
      <AmbientBackground variant="radial-burst" intensity={0.5} />
      <HeadlineSlide align="center" background="surface">
        <GSAPReveal>
          <Provocation>{discussion.question}</Provocation>
          <p className="mx-auto mt-6 max-w-[48ch] text-sm leading-relaxed text-[var(--text-secondary)]">
            {discussion.context}
          </p>
        </GSAPReveal>
      </HeadlineSlide>

      <DiscussionPrompt
        question={discussion.question}
        timerMinutes={discussion.timerMinutes}
      />
    </div>
  );
}
