# Batched Chapter Rebuild

Rebuild chapters of the CX interactive experience with premium quality, processing in controlled batches to avoid rate limits.

## Instructions

### Phase 1: Preparation
1. **Read all component interfaces** in `src/components/` — list every component's required and optional props
2. **Read the content file** at `src/experiences/convergencia-invisivel/content.ts` for chapter data
3. **Read existing chapters** to understand current patterns and identify what needs improvement
4. **Read the chapters definition** at `src/experiences/convergencia-invisivel/chapters.ts`

### Phase 2: Batched Rebuild
Process chapters in waves of **4 chapters maximum**:

- **Wave 1**: Chapters 1-4 (Abertura, Contexto x2, CX Equacao)
- **Wave 2**: Chapters 5-8 (CX x3, CS Paradoxo)
- **Wave 3**: Chapters 9-12 (CS x2, Data x2)
- **Wave 4**: Chapters 13-16 (Data, AI x3)
- **Wave 5**: Chapters 17-20 (Convergencia x2, Workshop x2)
- **Wave 6**: Chapters 21-22 (Fechamento x2)

For each wave:
1. Write/rewrite the chapters using ONLY verified prop names from Phase 1
2. Run `npm run build` after each wave
3. Fix any errors before proceeding to next wave
4. Track progress via TodoWrite

### Phase 3: Quality Gate
After all waves complete:
1. Run full build verification
2. Self-audit each chapter against anti-template criteria:
   - Unique layout (no two chapters share same structure)
   - At least 2 premium effects per chapter (from: Spotlight, BackgroundBeams, BorderRevealCard, MovingBorder, FloatingElements, CharReveal, ParallaxContainer, AnimatedCounter)
   - Section-specific color accent
   - At least one unique visual element per chapter
3. Rewrite any chapter scoring below 8/10

## Rules
- **MAX 4 parallel agents** per wave — never exceed this
- **Always read types first** before using any component
- **Build after every wave** — never skip this step
- Each chapter file must stay under 150 lines
- Use lucide-react icons on overlines (unique icon per chapter)
- Respect `prefers-reduced-motion` in all animations
