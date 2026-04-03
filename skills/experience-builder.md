# Skill: Experience Builder

## Objetivo
Guiar a construcao tecnica de experiencias interativas em Next.js 15 + React 19 + TypeScript. Este skill define estrutura de arquivos, composicao de componentes, gerenciamento de estado, performance e integracoes com GSAP, Framer Motion, Lenis e Three.js.

## Quando Usar
- Ao criar a estrutura de uma nova experiencia
- Ao definir componentes e composicao de pagina
- Ao integrar animacoes e interatividade
- Ao otimizar performance e acessibilidade

---

## Estrutura de Arquivos por Experiencia

Cada experiencia vive em uma rota propria dentro de `app/`:

```
app/experiencias/[slug]/
  page.tsx              # Server component — metadata + layout
  content.ts            # Conteudo textual tipado (titulos, paragrafos, stats)
  chapters.ts           # Definicao dos capitulos/secoes com metadata
  components/
    index.tsx           # Client component principal — orquestra a experiencia
    Hero.tsx            # Secao hero
    Chapter01.tsx       # Cada capitulo como componente isolado
    Chapter02.tsx
    ...
    Navigation.tsx      # Navegacao por capitulos (dots, progress)
    ModeSwitch.tsx      # Controle de modo (leitura, apresentacao, workshop)
  hooks/
    useExperienceMode.ts    # Estado do modo ativo
    useChapterProgress.ts   # Progresso e capitulo atual
    useScrollPosition.ts    # Posicao de scroll normalizada
  three/
    ParticleField.tsx   # Cenas Three.js isoladas (dynamic import)
    AmbientScene.tsx
```

### Convencoes
- `page.tsx` e sempre Server Component (SEO, metadata)
- `components/index.tsx` recebe `'use client'` e orquestra tudo
- Conteudo textual NUNCA fica hardcoded em componentes — sempre em `content.ts`
- Capitulos sao lazy-loaded quando fora da viewport

---

## TypeScript — Interfaces Centrais

```typescript
// types/experience.ts

export interface ExperienceConfig {
  slug: string;
  title: string;
  description: string;
  accent: { primary: string; secondary: string };
  chapters: Chapter[];
  modes: ExperienceMode[];
}

export interface Chapter {
  id: string;
  order: number;
  title: string;
  subtitle?: string;
  overline?: string;
  type: 'hero' | 'editorial' | 'grid' | 'comparison' | 'immersive' | 'breathing';
  content: ChapterContent;
}

export interface ChapterContent {
  headline?: string;
  paragraphs?: string[];
  stats?: Stat[];
  cards?: CardData[];
  tabs?: TabData[];
  quote?: { text: string; author: string; role: string };
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export type ExperienceMode = 'reading' | 'presentation' | 'workshop';
```

---

## Composicao de Componentes

### Primitivas do Design System
Toda experiencia usa primitivas compartilhadas:

```typescript
// Importacoes tipicas de uma experiencia
import { Section, Container } from '@/components/ds/layout';
import { Heading, Overline, Body, StatNumber } from '@/components/ds/typography';
import { Card, HighlightCard, NumberedCard } from '@/components/ds/cards';
import { TabGroup, Tab, TabPanel } from '@/components/ds/tabs';
import { RevealGroup, Reveal } from '@/components/ds/motion';
```

### Padrao de Composicao

```tsx
// Capitulo tipico
export function Chapter03({ content }: { content: Chapter }) {
  return (
    <Section variant="grid" id={content.id}>
      <Container>
        <RevealGroup>
          <Reveal>
            <Overline>{content.overline}</Overline>
            <Heading level={2}>{content.title}</Heading>
          </Reveal>
          <Reveal>
            <Body>{content.content.paragraphs?.[0]}</Body>
          </Reveal>
        </RevealGroup>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {content.content.cards?.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.08}>
              <Card variant="insight" {...card} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

---

## Gerenciamento de Estado

### useExperienceMode

```typescript
'use client';
import { create } from 'zustand';

interface ExperienceModeState {
  mode: ExperienceMode;
  setMode: (mode: ExperienceMode) => void;
  isPresentation: boolean;
  isWorkshop: boolean;
}

// Atalhos: Ctrl+Shift+P (apresentacao), Ctrl+Shift+W (workshop)
// Listener de teclado registrado no componente raiz da experiencia
```

### useChapterProgress

```typescript
// Baseado em Intersection Observer
// Cada <Section> registra sua visibilidade
// O hook retorna: currentChapter, progress (0-1), visitedChapters[]
// Usado por Navigation.tsx para dots e barra de progresso
```

---

## Code Splitting e Performance

### Regras de Dynamic Import

```typescript
// Three.js — SEMPRE dynamic
const ParticleField = dynamic(
  () => import('./three/ParticleField'),
  { ssr: false, loading: () => <div className="h-screen bg-bg" /> }
);

// Capitulos pesados — dynamic com Suspense
const Chapter05Immersive = dynamic(
  () => import('./components/Chapter05'),
  { loading: () => <ChapterSkeleton /> }
);
```

### Metas de Performance

| Metrica | Target | Como Atingir |
|---------|--------|--------------|
| Lighthouse Performance | 90+ | Code splitting, lazy images, font preload |
| LCP | < 2.5s | Hero sem Three.js no SSR, font-display: swap |
| CLS | < 0.1 | Dimensoes explicitas em imagens/videos, skeleton loaders |
| FID | < 100ms | Sem JS bloqueante no main thread durante load |
| Bundle size por capitulo | < 50KB | Lazy loading de capitulos fora da viewport |

### Otimizacoes Obrigatorias
- `next/image` para toda imagem estatica (blur placeholder com `blurDataURL`)
- Videos com `preload="none"` e `loading="lazy"`
- Fontes via `next/font` (nao Google Fonts link tag)
- GSAP registrado uma unica vez no layout raiz
- Three.js nunca no bundle inicial — sempre dynamic import com `ssr: false`

---

## Integracoes

### GSAP + ScrollTrigger

```typescript
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedSection({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current?.querySelectorAll('.reveal-item');
    if (!elements) return;

    gsap.from(elements, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: containerRef });

  return <div ref={containerRef}>{children}</div>;
}
```

**Regra:** Sempre use `useGSAP` do `@gsap/react` — ele faz cleanup automatico. Nunca use `useEffect` para GSAP.

### Framer Motion

```typescript
import { AnimatePresence, motion } from 'framer-motion';

// Para troca de modo (leitura ↔ apresentacao)
<AnimatePresence mode="wait">
  <motion.div
    key={currentMode}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
</AnimatePresence>

// Para layout animations (cards que expandem)
<motion.div layout layoutId={`card-${id}`} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
```

**Regra:** Framer Motion para transicoes de estado (mount/unmount, layout changes). GSAP para scroll-driven animations.

### Lenis (Smooth Scroll)

```typescript
// providers/SmoothScrollProvider.tsx
'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';

export function SmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sincronizar com ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

---

## Responsividade

### Estrategia Mobile-First

```
Base (< 768px):    1 coluna, padding 24px, hero compacto
md (>= 768px):     2 colunas, padding 32px
lg (>= 1024px):    3+ colunas, hero fullscreen, sidebar em workshop
xl (>= 1440px):    Max-width containers, espacamento expandido
```

### Regras
- Tabs se transformam em accordion no mobile
- Grid de 3+ colunas colapsa para 1 coluna no mobile
- Stats hero empilham verticalmente no mobile
- Navegacao por dots vira barra de progresso no mobile
- Three.js simplificado ou removido no mobile (verificar `window.innerWidth` antes de renderizar)

---

## Acessibilidade

### Obrigatorio em Toda Experiencia

- `aria-label` em todos os botoes de navegacao e controles interativos
- `role="tablist"`, `role="tab"`, `role="tabpanel"` em tabs
- Navegacao por teclado: Tab, Enter, Escape, Arrow keys
- `prefers-reduced-motion`: desabilitar GSAP e Framer Motion animations
- Skip links no topo ("Ir para conteudo principal")
- Focus visible com ring accent em todos os interativos
- Headings em ordem semantica (h1 > h2 > h3, sem pular niveis)
- `alt` descritivo em imagens, `aria-hidden` em decorativas

```typescript
// Hook para reduced motion
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

// Uso no GSAP
useGSAP(() => {
  if (prefersReducedMotion) return; // Nao anima
  // ... animacoes
}, { scope: containerRef, dependencies: [prefersReducedMotion] });
```

---

## Anti-Patterns

1. **Conteudo hardcoded em componentes** — Todo texto vem de `content.ts`. Componentes sao estrutura, nao conteudo.
2. **useEffect para GSAP** — Sempre `useGSAP`. Ele gerencia cleanup e scope.
3. **Three.js no bundle inicial** — Sempre dynamic import com `ssr: false`.
4. **Scroll event listeners** — Sempre Intersection Observer ou ScrollTrigger.
5. **Estado global desnecessario** — Zustand apenas para modo e progresso. Props para todo o resto.
6. **Componentes monoliticos** — Cada capitulo e um componente. Nenhum componente com mais de 150 linhas.
7. **CSS inline para design tokens** — Sempre Tailwind classes ou CSS custom properties.
