# CLAUDE.md — CX Experience Lab

Plataforma premium de experiencias digitais interativas. Keynotes imersivas, workshops e apresentacoes com profundidade de playbook executivo e sofisticacao tecnica de produto digital de elite.

---

## Stack

- **Next.js 15 App Router** (static export) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (design tokens via CSS custom properties)
- **Framer Motion** (transicoes, gestos, mount/unmount)
- **GSAP + ScrollTrigger** (scroll-driven, timelines, SplitText)
- **Lenis** (smooth scroll)
- **Three.js + @react-three/fiber + @react-three/drei** (3D, lazy loaded)
- **clsx + tailwind-merge** (composicao de classes via `cn()`)
- **next/font** (Instrument Serif + Inter + JetBrains Mono)

---

## Referencia Visual #1 — wearebrand.io

- Parallax cinematografico (perspective 600px, camadas de profundidade)
- Skew transitions entre secoes
- Ken Burns zoom em imagens (scale 120% -> 100%)
- Dark-first monocromatico (branco + variacoes de opacidade)
- Tipografia dramatica (headlines 49-110px, letter-spacing -1px)
- Hover com border-reveal (transparente -> rgba branco)
- Breathing room (espacamento generoso entre blocos)
- Staggered reveals com power3 easing
- Grain overlay em superficies escuras

---

## Principios Core

1. **Nunca generico** — Se parece template, redesenhe
2. **Sempre com tese** — Todo material defende uma ideia
3. **Storytelling como arquitetura** — Narrativa e espinha dorsal
4. **Motion com proposito** — Cada animacao avanca a historia
5. **Anti-IA por sistema** — Nenhum output pode parecer gerado por modelo
6. **Presenca de palco** — Legivel a 3 metros em projetor
7. **Forma = Conteudo** — O design comunica antes do texto

---

## Arquitetura

```
src/app/                    -> Rotas Next.js (portal + experiencias)
src/app/experiencias/[slug] -> Cada experiencia e uma rota
src/components/             -> Design system e componentes
  design-system/            -> Typography, Section, Card
  motion/                   -> ScrollReveal, TextReveal, StaggerGroup
  cinematic/                -> ParticleField, AmbientBackground, GrainOverlay
  navigation/               -> ChapterNav, PresentationShell
  workshop/                 -> DiscussionPrompt, PausePoint
  three/                    -> Componentes Three.js (lazy)
src/experiences/[nome]/     -> Conteudo de cada experiencia
  index.tsx                 -> Componente principal
  chapters.ts               -> Definicao de capitulos
  content.ts                -> Conteudo textual separado
src/lib/                    -> Utilitarios, hooks, providers
src/styles/                 -> Design tokens e CSS base
```

---

## Padroes Tecnicos

- Componentes funcionais TypeScript, props tipadas (nunca `any`)
- `next/dynamic` para code splitting de Three.js scenes
- `cn()` helper (clsx + tailwind-merge) para classes
- GSAP ScrollTrigger para scroll effects, Framer Motion para transicoes
- Lenis para smooth scroll via provider
- `prefers-reduced-motion` respeitado sempre
- Mobile-first: base -> `md:` -> `lg:`
- Export pattern: `export function NomeChapter()` + `export { NomeChapter as CapNome }`

---

## Paleta Base (Midnight Authority)

- Background: `#0C0F14` (nunca preto puro)
- Texto principal: `#E8EDF2` (nunca branco puro)
- Texto secundario: `#8A919C`
- Acento primario: `#C8873A` (ambar — urgencia executiva)
- Acento secundario: `#4A7C5C` (verde — inteligencia operacional)
- Bordas: `rgba(255,255,255, 0.08)`
- Superficies: incrementos de 2-4% luminosidade sobre o bg

---

## Build Quality

- Always run `npm run build` after every round of file changes. Never assume the build passes.
- When using component props, READ the component's type definitions first before using them. Do not guess prop names.
- Use `React.useRef<HTMLDivElement>(null)` pattern for DOM refs — never pass refs with mismatched types.
- When integrating Three.js or animation libraries, check their TypeScript types before usage.
- Never suppress errors with `any`, `@ts-ignore`, or type assertions unless absolutely necessary.

---

## Anti-Template Design Standards

- Never produce generic/template-looking UI. Every component must have unique visual identity.
- Audit visual output against "does this look AI-generated?" criteria before considering work complete.
- Use installed libraries actively — no dead imports or unused dependencies.
- No two chapters may share the same layout structure.
- Every chapter must have at least one unique visual element not found in any other chapter.
- Varied spacing, typography, and color accents between sections — never uniform.

---

## Agent & Rate Limit Management

- Do NOT spawn more than 4-5 parallel sub-agents at once. Stagger work in batches to avoid rate limits.
- If rate-limited, complete remaining work sequentially rather than retrying parallel agents.
- Each wave of agents must be fully complete (including build verification) before starting the next wave.

---

## Continuation Protocol

When resuming work ("continue"):
1. Check git status and current branch
2. Run build to verify clean state
3. Review TODO list before proceeding
4. Never assume previous session left things in a working state

---

## Custom Skills

- `/premium-audit` — Anti-template quality scoring for all chapters (10-point rubric)
- `/build-fix` — Autonomous build error detection and fix loop
- `/chapter-rebuild` — Batched chapter generation with quality gates (max 4 agents per wave)
- `/red-team` — Adversarial design quality audit (senior design director perspective)
- `/ux-audit` — UX Design & Performance Auditor (5-dimension human-simulation evaluation)

---

## QA Pipeline

- **Lighthouse CI** — Runs on every push/PR to main via GitHub Actions. Gates: performance >= 70, accessibility >= 85.
- **ux-auditor-prompt.json** — Evaluation matrix for the UX audit agent. 5 dimensions, 0-10 scoring.
- **`/ux-audit`** — On-demand human-simulation audit of any file against the evaluation matrix.

---

## Quality Gates

### Gate 1: Narrativa (eliminatorio)
- Tese em uma frase. Abertura provocativa. Zero cliches.

### Gate 2: Design (eliminatorio)
- Hero de keynote. Paleta com identidade. Cards variados. Tipografia com impacto.

### Gate 3: Motion (diferenciador)
- GSAP scroll-triggered. Stagger. Wow moment. prefers-reduced-motion.

### Gate 4: Anti-IA (eliminatorio)
- Sem cyan-indigo default. Sem glass morphism uniforme. Layout imprevisivel.

### Gate 5: Palco (obrigatorio)
- Chapter nav funcional. Keyboard nav. Legivel em projecao.
