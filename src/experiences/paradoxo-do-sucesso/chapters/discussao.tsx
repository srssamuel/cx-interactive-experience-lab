"use client";

import { Provocation } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { HeadlineSlide } from "@/components/cinematic/headline-slide";
import { DiscussionPrompt } from "@/components/workshop/discussion-prompt";
import { discussion } from "../content";

export function DiscussaoChapter() {
  return (
    <div id="discussao">
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
