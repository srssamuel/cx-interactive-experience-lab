# Premium Anti-Template Audit

Run a comprehensive quality audit on all chapter components and layouts against premium design standards. Score each file and flag violations.

## Instructions

1. **Read all chapter files** in `src/experiences/convergencia-invisivel/` (chapters-part1.tsx, chapters-part2.tsx) and the portal page (`src/app/page.tsx`)

2. **For each chapter/section**, evaluate against these 10 anti-template criteria:

   ### Layout Uniqueness (max 3 pts)
   - No two chapters share the same layout structure (e.g., "headline + 2-col grid + CTA")
   - Asymmetric compositions preferred over centered symmetric blocks
   - Varied vertical spacing (not uniform py-24 everywhere)

   ### Visual Identity (max 3 pts)
   - Each chapter has at least one unique visual element not found in other chapters
   - Section-specific color accent is used meaningfully (not just border color swap)
   - At least one premium effect component used (Spotlight, BackgroundBeams, BorderRevealCard, MovingBorder, FloatingElements, CharReveal, ParallaxContainer)

   ### Anti-Generic Markers (max 2 pts)
   - No placeholder-style content or generic headings
   - Typography varies between chapters (not all using same SectionHeading + Body pattern)

   ### Motion & Interactivity (max 2 pts)
   - At least one scroll-triggered animation per chapter
   - Interactive hover states or micro-interactions present

3. **Score each chapter 1-10** based on the criteria above

4. **Flag specific violations** with file path and line numbers

5. **Identify pattern repetition** — list any layout structures used more than twice

6. **Check installed library usage** — verify all npm dependencies in package.json are imported somewhere in src/

7. **Output a markdown report** with:
   - Summary table: Chapter | Score | Key Issue
   - Detailed findings per chapter
   - Top 5 highest-priority improvements
   - Overall score (average across all chapters)

8. **If any chapter scores below 7**, provide a specific rewrite recommendation with the new layout approach

## Quality Thresholds
- **9-10**: Premium agency level — unique, memorable, stage-ready
- **7-8**: Strong but could be elevated with one more unique element
- **5-6**: Template-adjacent — needs layout redesign or unique visual treatment
- **Below 5**: Generic — must be completely rewritten with new approach
