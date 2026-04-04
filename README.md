# CX Experience Lab

> Plataforma premium de experiências digitais interativas para a Diretoria de Qualidade e Dados da AeC.

---

## Manifesto

Cada ideia estratégica merece uma experiência à altura do seu impacto.

Este não é um repositório de páginas web. É uma plataforma de criação de **experiências digitais premium** — artefatos interativos que funcionam como keynotes de palco, playbooks executivos, ferramentas de aprendizagem e peças de posicionamento institucional.

Cada experiência produzida aqui defende uma tese, conta uma história, provoca reflexão e convida ação. Nenhuma é genérica. Nenhuma é previsível. Nenhuma tem "cara de IA".

---

## O Que Esta Plataforma Produz

**Portais interativos premium** — Experiências navegáveis que combinam storytelling editorial, dados vivos e interatividade cognitiva.

**Microsites de workshop** — Artefatos projetados para uso ao vivo em sala, com chapter navigation, pontos de pausa, prompts de discussão e modo apresentação.

**Experiências de apresentação executiva** — Keynotes digitais com motion design cinematográfico, tipografia de impacto e navegação por capítulos.

**Peças de posicionamento** — Materiais que demonstram maturidade técnica, estratégica e operacional da diretoria.

**Experiências de aprendizagem** — Jornadas interativas que ensinam frameworks, desconstroem mitos e constroem modelos mentais.

---

## Temas Centrais

- Customer Experience
- Customer Success
- Dados & Analytics
- Inteligência Artificial
- Gestão & Liderança
- Atendimento ao Cliente
- Eficiência Operacional
- Transformação de Experiência e Performance

---

## Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4, Design Tokens CSS |
| Motion | Framer Motion, GSAP + ScrollTrigger |
| Scroll | Lenis (smooth scroll) |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Fonts | next/font (Instrument Serif + Inter + JetBrains Mono) |
| Deploy | Vercel |

---

## Modos de Uso

Cada experiência suporta três modos:

- **Leitura** — Scroll livre, exploração ao próprio ritmo
- **Apresentação** — Fullscreen, navegação por capítulos, keyboard-driven
- **Workshop** — Painel de facilitação, discussion prompts, timer, pontos de pausa

---

## Filosofia

1. **Sempre com tese** — Todo material defende uma ideia. Neutralidade é mediocridade.
2. **Storytelling como arquitetura** — A narrativa é a espinha dorsal, não decoração.
3. **Interatividade cognitiva** — Cada clique ensina, revela ou provoca.
4. **Motion como narrativa** — Cada animação avança a história.
5. **Anti-IA por sistema** — Nenhum output pode parecer gerado por modelo.
6. **Presença de palco** — Todo material funciona projetado em sala.

---

## Estrutura do Projeto

```
src/
├── app/                    # Rotas Next.js
│   ├── page.tsx            # Portal de experiências
│   └── experiencias/       # Rota dinâmica por experiência
├── components/             # Design system e componentes
│   ├── design-system/      # Typography, Section, Card (5 variantes cada)
│   ├── interactive/        # Tabs, Accordion, Timeline, ComparisonSlider
│   ├── navigation/         # ChapterNav, ModeIndicator, PresentationShell
│   ├── motion/             # ScrollReveal, ParallaxLayer, GSAP ScrollTrigger
│   ├── workshop/           # DiscussionPrompt, PausePoint, WorkshopLayout
│   └── cinematic/          # ParticleField (Three.js)
├── experiences/            # Conteúdo de cada experiência
├── lib/                    # Hooks, providers, utilidades
└── styles/                 # Design tokens CSS

skills/                     # Modos especialistas para geração
prompts/                    # Prompts mestres
references/                 # Quality gates e guidelines
```

---

## Quality Standard

Cada experiência passa por 6 quality gates antes de ser publicada:

1. **Narrativa** — Tese clara, arco provocativo, zero clichês
2. **Design** — Identidade visual própria, ritmo visual, tipografia de impacto
3. **Motion** — Animações com propósito narrativo, scroll-triggered effects
4. **Interatividade** — Cada interação ensina algo que o estático não pode
5. **Workshop/Presentation** — Funciona em projetor, chapter nav, pause points
6. **Anti-IA** — Nenhum padrão reconhecível de output automático

---

## Experiências Live

| Experiência | Tema | Paleta |
|-------------|------|--------|
| **A Equação Invisível** | Customer Experience | Amber (#F59E0B) |
| **O Paradoxo do Sucesso** | Customer Success | Teal (#0D9488) |

---

## Desenvolvimento

```bash
npm install
npm run dev
```

Deploy automático via Vercel em cada push.

---

## SEO & PWA

- `sitemap.xml` — Auto-gerado com todas as rotas
- `robots.txt` — Permite crawlers
- `manifest.webmanifest` — Suporte a "Add to Home Screen" / modo standalone
- Favicon e Apple Icon gerados dinamicamente via Route Handlers

---

## Contexto Institucional

Plataforma da **Diretoria de Qualidade e Dados da AeC** — maior empresa de contact center do Brasil — para aceleração de criação de experiências digitais de alto impacto com IA.
