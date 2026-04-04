"use client";

import { HeadlineSlide } from "@/components/cinematic/headline-slide";
import { TextReveal } from "@/components/motion/text-reveal";
import { abertura } from "../content";

export function AberturaChapter() {
  return (
    <div id="abertura">
      {abertura.principios.map((p, i) => (
        <HeadlineSlide
          key={p.number}
          align="center"
          background={i === 1 ? "surface" : "base"}
        >
          <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-[var(--accent-primary)]/[0.08]">
            {p.number}
          </span>
          <div className="mt-4">
            <TextReveal
              text={p.statement}
              tag="h2"
              className="font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-light tracking-[-0.03em] text-[var(--text)]"
            />
          </div>
        </HeadlineSlide>
      ))}
    </div>
  );
}
