# CLAUDE.md — Manual Operacional da Plataforma CX Experience Lab

Este arquivo governa toda produção neste repositório. Leia integralmente antes de gerar qualquer código.

---

## O Que Este Projeto É

Uma **plataforma premium de experiências digitais interativas** construída sobre Next.js, React e um design system proprietário. Cada experiência produzida aqui funciona como um artefato de alto impacto — com a profundidade de um playbook executivo, o impacto visual de uma keynote de palco, a interatividade de uma ferramenta de aprendizagem e a sofisticação técnica de um produto digital de elite.

**Formatos de saída:**
- Portais interativos premium
- Microsites de workshop
- Experiências de apresentação ao vivo
- Landing narratives cinematográficas
- Peças institucionais digitais
- Experiências de treinamento e aprendizagem
- Portais de posicionamento comercial
- Experiências híbridas entre keynote, dashboard narrativo e facilitação

**Modos de uso:**

- Modo apresentação (fullscreen, keyboard nav, chapter dots)


**Não é** um gerador de landing pages, sites institucionais, dashboards genéricos ou templates com "cara de IA".

---

## Stack Técnica

### Core
- **Next.js 15 App Router** — Framework base, SSR, routing por experiência, metadata, image optimization
- **React 19** — Componentes, hooks, Suspense, streaming
- **TypeScript** — Tipagem forte em todo o projeto
- **Tailwind CSS 4** — Design tokens via CSS custom properties, utilidades, responsividade
- **next/font** — Otimização de fontes (Instrument Serif + Inter)

### Motion & Animation
- **Framer Motion** — Transições de layout, AnimatePresence, gestos, micro-interações
- **GSAP + ScrollTrigger** — Timelines complexas, scroll-driven animations, pinning, scrub
- **Lenis** — Smooth scroll global com integração GSAP

### 3D & Visual
- **Three.js + @react-three/fiber + @react-three/drei** — Backgrounds cinematográficos, partículas, objetos 3D hero (lazy loaded com Suspense + fallback 2D)

### Utilidades
- **clsx + tailwind-merge** — Composição de classes CSS
- **next/image** — Otimização automática de imagens
- **next/dynamic** — Code splitting por experiência e componentes pesados

---

## Antes de Gerar Qualquer Experiência

Execute estas etapas mentais antes de escrever código:

1. **Definir a tese** — Qual ideia central este material defende? Se não houver tese, não comece.
2. **Formular o headline** — Uma frase que funcione sozinha como promessa intelectual. Máximo 12 palavras.
3. **Mapear o arco** — Tensão (gancho) → Desconstrução → Nova lente → Reconstrução → Caso vivo → Provocação final.
4. **Escolher a paleta emocional** — Que sentimento o material deve provocar? (urgência, descoberta, autoridade, provocação)
5. **Planejar interações** — Para cada interação, responder: "O que o usuário aprende ao interagir com isso?" Se não aprende nada, remova.
6. **Planejar motion** — Onde usar GSAP ScrollTrigger? Onde usar Framer Motion? Onde usar 3D? Cada decisão deve ter propósito narrativo.
7. **Planejar assets** — Que imagens, vídeos ou elementos 3D vão contar a história visual?
8. **Definir modos** — Este projeto será usado em apresentação? Workshop? Ambos? Planejar chapter navigation e pause points.
9. **Consultar skills relevantes** — Ler os arquivos em `/skills` que se aplicam ao projeto.

Se pular essas etapas, o resultado será genérico.

---

## Princípios Inegociáveis

1. **Nunca genérico** — Se a primeira frase poderia estar em qualquer site, reescreva. Se o layout parece um template, redesenhe.
2. **Sempre com tese** — Todo material defende uma ideia. Neutralidade é mediocridade.
3. **Storytelling como arquitetura** — A narrativa é a espinha dorsal, não decoração. Cada seção avança o argumento.
4. **Interatividade cognitiva** — Cada clique deve ensinar, revelar ou provocar. Interação decorativa é proibida.
5. **Motion como narrativa** — Cada animação avança a história. Animação decorativa é proibida.
6. **Forma = Conteúdo** — O design comunica antes do texto ser lido. A sofisticação técnica é parte da mensagem.
7. **Multi-modal por design** — Cada experiência nasce com suporte a leitura, apresentação e workshop.
8. **Anti-IA por sistema** — Nenhum output pode parecer gerado por modelo. O design system impõe autoria.
9. **Presença de palco** — Todo material deve funcionar projetado em sala, com legibilidade a 3 metros.
10. **Engenharia de percepção** — Cada detalhe técnico contribui para a sensação de "10 anos à frente".

---

## Como Usar a Pasta /skills

Cada arquivo em `/skills` é um modo especialista. Ative os relevantes conforme o projeto:

| Skill | Ativar Quando |
|-------|---------------|
| `cx-strategy` | O tema envolve jornada, experiência, NPS, ecossistema de CX |
| `customer-success-thinking` | O tema é retenção, expansão, adoção, CS como disciplina |
| `executive-storytelling` | Sempre — é o skill mais transversal |
| `interactive-learning-design` | Ao planejar quais interações usar e por quê |
| `premium-design-system` | Ao definir paleta, tipografia, atmosfera visual, componentes |
| `experience-builder` | Na hora de construir a experiência (componentes, estrutura, código) |
| `cinematic-motion` | Ao planejar animações, scroll effects, 3D, partículas |
| `advanced-motion-effects` | Ao implementar efeitos avançados: TextReveal, BlurReveal, SpotlightCard, TiltCard, MagneticElement, GlowBorder |
| `spatial-design-3d` | Ao criar profundidade visual: 3D, parallax, glow, partículas, light cones |
| `tech-premium-aesthetic` | Ao validar identidade visual: paleta navy/cyan, anti-template, referências Linear/Vercel/Stripe |
| `component-architecture` | Ao criar/refatorar componentes: composição, tipagem, barrel exports, lazy loading |
| `stage-experience-design` | Ao projetar pacing de palco: 3 modos, densidade por tela, passagens cinematográficas |
| `workshop-presentation` | Ao projetar modos de uso ao vivo |
| `asset-direction` | Na fase de seleção e direção de arte visual |
| `microinteraction-designer` | Ao refinar hover states, transições, feedback |
| `content-curator` | Na fase de pesquisa e seleção de conteúdo |
| `copy-polish-ptbr` | Na fase final de refinamento do texto |
| `future-trends` | Quando o material precisa de visão de futuro |
| `final-quality-review` | Última etapa antes de entregar |

**Fluxo típico**: `content-curator` → `executive-storytelling` → skill de domínio → `interactive-learning-design` → `cinematic-motion` → `premium-design-system` → `experience-builder` → `asset-direction` → `microinteraction-designer` → `copy-polish-ptbr` → `final-quality-review`

---

## Arquitetura do Projeto

### Estrutura de Rotas
```
/                           → Portal: índice de experiências
/experiencias/[slug]        → Cada experiência é uma rota independente
```

### Estrutura de Componentes
```
src/components/
├── design-system/          → Primitivos visuais (Typography, Section, Card)
├── interactive/            → Componentes interativos (Tabs, Accordion, Timeline, Reveal)
├── navigation/             → ChapterNav, ProgressBar, PresentationControls
├── motion/                 → ScrollReveal, StaggerGroup, ParallaxLayer, CounterAnimation
├── workshop/               → DiscussionPrompt, PausePoint, Timer
├── cinematic/              → ParticleField, HeroCinematic, AmbientScene
└── three/                  → Componentes Three.js (lazy loaded)
```

### Estrutura de Experiências
```
src/experiences/[nome]/
├── index.tsx               → Componente principal da experiência
├── chapters.ts             → Definição de capítulos (id, title, icon)
└── content.ts              → Conteúdo textual separado do layout
```

---

## Critérios de Design — Regras Concretas

### Paleta
- Sistema de paletas por projeto — cada experiência tem identidade cromática própria
- Dark mode como padrão (bg: #08-#12 range, nunca preto puro #000)
- Texto principal: #E0-#F0 range (nunca branco puro #fff para corpo)
- Texto secundário: #7A-#95 range
- Bordas: rgba com opacidade 0.06-0.12
- **Proibido**: cyan-indigo como paleta default (é "cara de IA")
- **Proibido**: glass morphism uniforme como identidade visual (é genérico)

### Tipografia
- **Display**: Instrument Serif (elegante, editorial, distinto)
- **Body**: Inter (clareza, legibilidade, tecnologia)
- **Mono/Data**: JetBrains Mono (stats, labels técnicos)
- Títulos: `clamp()` com min 2rem, max 7rem para hero
- Corpo: 1.125rem (18px) com line-height 1.7
- Labels/overlines: 0.75rem, uppercase, letter-spacing 0.12em
- Usar `next/font` para otimização (nunca Google Fonts CDN direto)

### Espaçamento
- Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Entre seções: 96-128px
- Dentro de seções: 48-64px entre blocos
- Entre parágrafos: 24px
- Padding de container: 24px mobile, 48px desktop
- Max-width do conteúdo de leitura: 720-800px (65ch)

### Componentes
- Cards: background sutil (surface), border 1px rgba, radius 12-16px, padding 32px
- **Variação obrigatória**: Nunca repetir o mesmo estilo de card em toda a experiência
- Hover states: translateY(-2 a -4px) + border-color shift + shadow, nunca scale
- Botões/tabs: padding generoso (12-16px vertical, 24-32px horizontal)
- Highlight boxes: border-left 3px + background muted
- Seções: alternar entre full-bleed, container narrow, grid assimétrico

### Animações
- **GSAP ScrollTrigger** para scroll-driven effects (nunca scroll event listeners)
- **Framer Motion** para transições de estado e mount/unmount
- Entrada: opacity 0→1 + translateY(20-30px→0), duration 500-800ms, ease-out
- Hover: 150-200ms, ease-out
- Stagger entre elementos: 60-100ms
- Sempre respeitar `prefers-reduced-motion`
- Nunca: bounce, shake, spin decorativo, parallax agressivo
- **Obrigatório**: Pelo menos uma animação scroll-triggered por experiência
- **Obrigatório**: Elementos entram com stagger (nunca todos de uma vez)

---

## Critérios de Interatividade — Framework de Decisão

### Quando usar cada tipo:

| Objetivo Cognitivo | Tipo de Interação |
|--------------------|-------------------|
| Comparar perspectivas | Tabs com contraste visual |
| Aprofundar sob demanda | Accordion com reveal animado |
| Revelar progressivamente | ScrollReveal com GSAP |
| Mostrar evolução | Timeline interativa |
| Contrastar antes/depois | ComparisonSlider ou toggle |
| Explorar dimensões | Cards interativos com hover depth |
| Destacar dados | AnimatedCounter com GSAP |
| Navegar conteúdo longo | ChapterNav com progress |
| Facilitar discussão | DiscussionPrompt (workshop mode) |
| Provocar reflexão | PausePoint com pergunta |

### Teste obrigatório para cada interação:
> "Se eu remover essa interação e mostrar tudo estático, perco valor pedagógico?"
> Se a resposta for não, remova a interação.

---

## Critérios de Escrita — Com Exemplos

### Ruim vs Bom

**Abertura de material:**
- Ruim: "No mundo atual, a experiência do cliente se tornou cada vez mais importante para as organizações."
- Bom: "Nove em cada dez empresas dizem que CX é prioridade. Menos de duas em dez sabem medir o impacto real."

**Headline:**
- Ruim: "A Importância da Experiência do Cliente na Era Digital"
- Bom: "Seu NPS é alto. Seu cliente está saindo. O que você não está medindo?"

**Frase de transição:**
- Ruim: "Nesse contexto, é importante ressaltar que..."
- Bom: "Mas há um problema que nenhuma métrica tradicional captura."

**Fechamento:**
- Ruim: "Em conclusão, as empresas devem investir mais em experiência do cliente."
- Bom: "A pergunta não é se CX vai se tornar o principal diferencial. É se você vai liderar essa mudança ou apenas assistir."

### Tom alvo
Conversa inteligente entre executivos. Clareza de quem domina o assunto. Densidade de quem respeita o tempo do leitor. Provocação de quem tem ponto de vista.

### Proibições absolutas
- "No mundo atual", "cada vez mais", "nesse sentido", "nesse contexto"
- "É fundamental que", "vale ressaltar", "é importante destacar"
- "Transformação digital", "novo normal", "disruptivo" (sem contexto novo)
- Gerundismo: "estar fazendo" → "fazer"
- Tom de consultoria: "recomenda-se" → afirme diretamente
- Parágrafos com mais de 5 linhas

---

## Padrões Técnicos

### Estrutura de uma Experiência
```
1. Layout da rota com ExperienceShell (navigation, mode switching)
2. Chapters definidos em arquivo separado (chapters.ts)
3. Conteúdo textual separado do layout (content.ts)
4. Componentes do design system compostos (nunca inline styles)
5. Motion configurado com hooks (useScrollReveal, useChapterProgress)
6. Assets otimizados via next/image e dynamic imports para 3D
```

### React / TypeScript
- Componentes funcionais com TypeScript
- Props tipadas com interfaces (nunca `any`)
- Custom hooks para lógica reutilizável
- `next/dynamic` para code splitting de componentes pesados (Three.js scenes)
- `React.Suspense` com fallback visual para lazy-loaded content
- Separar conteúdo de apresentação (content.ts vs componente)

### CSS / Tailwind
- Design tokens em CSS Custom Properties (`:root` em `design-tokens.css`)
- Tailwind para utilitários e responsividade
- `cn()` helper (clsx + tailwind-merge) para composição de classes
- Mobile-first: estilos base para mobile, `md:` para tablet, `lg:` para desktop
- Breakpoints: 768px (md), 1024px (lg), 1440px (xl)
- Sem CSS-in-JS, sem styled-components

### JavaScript / Motion
- GSAP para scroll-triggered animations (ScrollTrigger)
- Framer Motion para transições de componente e gestos
- Lenis para smooth scroll (inicializado via provider)
- IntersectionObserver via hooks customizados
- Event delegation em containers
- Performance: debounce resize, passive listeners

### Semântica e Acessibilidade
- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` obrigatórios
- `role` e `aria-label` em elementos interativos
- `alt` em imagens, keyboard navigation em toda interação
- `prefers-reduced-motion` respeitado em todas as animações
- Contraste WCAG AA em todo texto
- Touch targets mínimo 44px

---

## Quality Gates — 6 Portões Obrigatórios

### Gate 1: Narrativa (eliminatório)
- Tese definida em uma frase
- Abertura provocaria silêncio numa sala
- Cada seção adiciona algo novo
- Fechamento provoca, não resume
- Zero clichês da lista proibida

### Gate 2: Design (eliminatório)
- Screenshot do hero pareceria keynote de palco
- Paleta tem identidade própria
- Contraste de ritmo entre seções
- Cards com tratamento visual diverso
- Tipografia display usada com impacto

### Gate 3: Motion (diferenciador)
- Pelo menos uma animação scroll-triggered com GSAP
- Elementos entram com stagger
- Pelo menos um momento de "wow visual"
- Motion respeita prefers-reduced-motion
- Nenhuma animação puramente decorativa

### Gate 4: Interatividade (diferenciador)
- Cada interação passa no teste de remoção
- Pelo menos uma interação que revela insight
- Feedback visual imediato em todo elemento interativo
- Keyboard-accessible

### Gate 5: Workshop/Presentation (obrigatório)
- Funciona em projetor (legível a 3m)
- Chapter navigation funcional
- Pelo menos 1 ponto de pausa para discussão
- Keyboard-only navigation funcional

### Gate 6: Anti-IA (eliminatório)
- Paleta não é cyan-indigo em dark mode
- Cards não são todos glass morphism uniformes
- Estrutura não é hero → 3 seções → conclusão
- Pelo menos 1 elemento visual inesperado
- Layout não reconhecível como "template de IA"
- Copy sem frases que "qualquer modelo escreveria"

### Classificação
- **S**: Passa todos os 6 gates + surpreende
- **A**: Passa gates eliminatórios + 80%+ diferenciadores
- **B**: Passa eliminatórios, falta diferenciação — requer revisão
- **C**: Falha em gate eliminatório — requer refação

---

## Red Flags — Sinais de Output que Deve Ser Refeito

1. Abertura genérica (começa com definição ou clichê)
2. Seções sem propósito (se removida, não faz falta)
3. Interatividade decorativa (tabs que apenas escondem texto)
4. Paleta sem identidade (poderia ser de qualquer projeto)
5. Copy preenchimento (parágrafos que existem para "completar")
6. Estrutura previsível (hero → 3 tópicos → conclusão)
7. Headlines descritivos em vez de promessas
8. Fechamento resumitivo
9. Excesso de componentes iguais repetidos
10. Mobile quebrado
11. Glass morphism uniforme em toda experiência
12. Gradient text usado em excesso
13. Zero motion real (só CSS transitions básicas)
14. Inline styles em vez de design system
15. Cara de IA (layout reconhecível como output automático)

---

## Estrutura do Repositório

| Pasta | Função |
|-------|--------|
| `src/app/` | Rotas Next.js (portal + experiências) |
| `src/components/` | Design system e componentes reutilizáveis |
| `src/experiences/` | Conteúdo e configuração de cada experiência |
| `src/lib/` | Utilitários, hooks, providers |
| `src/styles/` | Design tokens e CSS base |
| `public/assets/` | Imagens, vídeos, texturas otimizados |
| `skills/` | Modos especialistas para geração |
| `prompts/` | Prompts mestres para criação de experiências |
| `references/` | Quality gates, catálogos, guidelines |
