# Design Quality Red-Team Audit

Adversarial audit of the entire project's visual design. Act as a senior design director reviewing work from a junior team. Be brutally honest.

## Instructions

### Step 1: Full Codebase Scan
Read every component file in:
- `src/experiences/convergencia-invisivel/chapters-part1.tsx`
- `src/experiences/convergencia-invisivel/chapters-part2.tsx`
- `src/experiences/convergencia-invisivel/index.tsx`
- `src/app/page.tsx` (portal)
- `src/components/` (all effect and design-system components)
- `src/styles/design-tokens.css`
- `src/app/globals.css`

### Step 2: Pattern Duplication Analysis
- Map every chapter's layout structure (e.g., "CinematicHeadline + 2-col + stat cards")
- Flag any structure used more than twice
- Identify "dead zones" — chapters with no premium effects or animations
- Check if cards across different sections look identical (same padding, same structure, just different colors)

### Step 3: AI-Generated Detection
Flag anything that looks like default AI output:
- Cyan-indigo-purple gradient combos
- Uniform glass morphism
- Symmetrical centered layouts with no visual tension
- Generic "Lorem ipsum"-style headings or stats without context
- Equal spacing everywhere (no breathing room variation)
- Cards that are just "icon + title + description" with no visual differentiation

### Step 4: Premium Design Checklist
For each chapter, verify:
- [ ] Unique layout (not repeated elsewhere)
- [ ] Color accent specific to the block/act
- [ ] At least one "wow" moment (animation, interaction, visual surprise)
- [ ] Typography hierarchy (not just SectionHeading + Body everywhere)
- [ ] Adequate contrast (WCAG AA 4.5:1 for body text)
- [ ] Mobile responsiveness (no horizontal overflow)
- [ ] Stage readability (readable at 3 meters on projector)

### Step 5: Scoring & Report
Output a structured report:

```
## Red-Team Design Audit Report

### Overall Score: X/10
### Verdict: [SHIP / NEEDS WORK / REJECT]

### Chapter Scores
| # | Chapter | Score | Layout | Effects | Unique Element | Issue |
|---|---------|-------|--------|---------|----------------|-------|

### Critical Findings (must fix)
1. ...

### Strong Points (keep)
1. ...

### Recommended Rewrites (with specific new layout approach)
1. Chapter X: Replace [current layout] with [proposed layout]

### Pattern Repetition Map
- Layout A used in: Ch3, Ch5, Ch10 (VIOLATION: max 2)
- Layout B used in: ...

### Dead Zones (no premium effects)
- Ch8: No Spotlight, BackgroundBeams, or BorderRevealCard

### AI-Generated Flags
- Ch15: Generic card grid looks template-generated
```

### Step 6: Action Items
For every chapter scoring below 8/10, provide:
1. Current layout description
2. Specific proposed new layout (different from all other chapters)
3. Which premium effects to add
4. Code sketch of the new approach (not full implementation, just structure)

## Scoring Guide
- **10**: Would win a design award. Unique, memorable, zero template energy.
- **9**: Agency-level premium. One small tweak from perfect.
- **8**: Strong and differentiated. Passes anti-template check.
- **7**: Good but predictable. Needs one unique visual element.
- **6**: Template-adjacent. Layout seen on 100 other sites.
- **5 or below**: Generic. Must be completely redesigned.
