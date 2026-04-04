# Catálogo de Componentes — CX Experience Lab

Referência rápida de todos os componentes disponíveis no design system.

---

## Design System (`@/components/design-system`)

### Typography

| Componente | Uso | Quando usar |
|---|---|---|
| `DisplayHeading` | Título principal do hero | Uma vez por experiência, no topo |
| `SectionHeading` | Título de seção/capítulo | Início de cada seção nova |
| `SubHeading` | Subtítulo dentro de seção | Quando há hierarquia dentro de seção |
| `BodyText` | Parágrafo de corpo | Texto descritivo, explicações |
| `Overline` | Label acima de títulos | "01 — Nome do capítulo", labels de seção |
| `StatNumber` | Número grande de destaque | Stats no hero, métricas-chave |
| `StatLabel` | Label abaixo de número | Sempre acompanha StatNumber |
| `Provocation` | Frase de impacto grande | Momentos de silêncio visual, fechamento |
| `AccentText` | Texto com cor accent | Destacar palavras-chave em headlines |

**Anti-padrão**: Usar AccentText em mais de 2-3 instâncias por experiência. O destaque perde força.

### Section

| Componente | Uso | Variantes |
|---|---|---|
| `HeroSection` | Seção hero fullscreen | Com `backgroundElement` para 3D/vídeo |
| `Section` | Container de seção | `default`, `fullbleed`, `editorial`, `immersive`, `breathing` |
| `Container` | Wrapper de conteúdo | `narrow` (3xl), `default` (6xl), `wide` (7xl), `full` |
| `ChapterDivider` | Divisor entre capítulos | Com número grande e título |

**Anti-padrão**: Usar mesma variante de Section em toda a experiência. Alternar ritmo.

### Card

| Componente | Uso | Quando usar |
|---|---|---|
| `Card` | Card base | Blocos de conteúdo com borda. Variantes: `default`, `insight`, `highlighted`, `numbered`, `comparative` |
| `ExpandableCard` | Card com expand/collapse | Quando há conteúdo que revela (mitos, detalhes). Usa Framer Motion AnimatePresence |
| `ComparisonCard` | Card comparativo | Antes/depois, positivo/negativo. Accents: `positive`, `negative`, `neutral` |
| `NumberedCard` | Card com número | Sequências ordenadas (dimensões, etapas) |

**Anti-padrão**: Usar mesmo tipo de Card em toda experiência. Misturar tipos.

---

## Interactive (`@/components/interactive`)

| Componente | Objetivo Cognitivo | Quando usar | Quando NÃO usar |
|---|---|---|---|
| `Tabs` | Comparar perspectivas | 3-6 visões alternativas | Apenas 2 opções (use ComparisonCard) |
| `Accordion` | Aprofundar sob demanda | Detalhes opcionais, sinais, alertas | Conteúdo essencial (não esconda) |
| `Timeline` | Mostrar evolução/maturidade | Progressão temporal, níveis, estágios | Menos de 3 itens (use NumberedCard) |
| `ComparisonSlider` | Contrastar antes/depois | Duas realidades opostas lado a lado | Conteúdo que não tem contraste claro |

**Variantes de Tabs**: `default` (bg), `pills` (rounded), `underline` (minimal)

**Accordion**: Aceita `trigger` como ReactNode (não apenas string), suporta `allowMultiple`.

**Timeline**: Layout alternado esquerda/direita em desktop, vertical em mobile. Staggered scroll reveal.

**ComparisonSlider**: Drag, touch e keyboard (setas). clipPath-based reveal.

---

## Navigation (`@/components/navigation`)

| Componente | Uso |
|---|---|
| `ChapterNav` | Navegação por capítulos com progress bar, IntersectionObserver tracking, keyboard (setas) |
| `ModeIndicator` | UI com 3 botões para alternar entre modos (leitura/apresentação/workshop) |
| `PresentationShell` | Wrapper que aplica CSS de modo apresentação (tipografia ampliada, seções fullscreen) |

---

## Motion (`@/components/motion`)

### Framer Motion (transições de componente)

| Componente | Uso | Props-chave |
|---|---|---|
| `ScrollReveal` | Revelar elemento ao scroll (IntersectionObserver) | `direction`, `delay`, `duration`, `distance` |
| `StaggerGroup` | Revelar filhos em sequência | `staggerDelay`, `baseDelay` |
| `ParallaxLayer` | Efeito parallax sutil | `speed` (default: 0.5) |

### GSAP ScrollTrigger (scroll-driven animations)

| Componente | Uso | Props-chave |
|---|---|---|
| `GSAPReveal` | Revelar com GSAP ScrollTrigger | `from`, `to`, `start`, `end`, `scrub`, `pin` |
| `GSAPStaggerReveal` | Revelar filhos com GSAP stagger | `staggerAmount`, `start` |
| `GSAPParallax` | Parallax com GSAP scrub | `speed` |
| `GSAPCounter` | Contador scroll-triggered | `value`, `suffix`, `prefix`, `duration` |

**Regra**: Usar GSAP para scroll-driven effects. Usar Framer Motion para transições de estado e mount/unmount.

**Todos respeitam** `prefers-reduced-motion`.

---

## Workshop (`@/components/workshop`)

| Componente | Uso | Quando usar |
|---|---|---|
| `DiscussionPrompt` | Pergunta para discussão em grupo | Após seção densa, antes de fechamento. Aceita `timerMinutes` |
| `PausePoint` | Divisor de pausa visual | Entre capítulos, momento de respiração |
| `WorkshopLayout` | Sidebar de facilitação | Envolve a experiência inteira. Mostra timer global, índice de discussões, ações rápidas |

**WorkshopLayout** aceita `discussions` array com `{ id, question, sectionId }` para o índice lateral.

---

## Cinematic (`@/components/cinematic`)

| Componente | Uso | Quando usar |
|---|---|---|
| `ParticleField` | Campo de partículas 3D (Three.js) | Background do hero (via `next/dynamic`, `ssr: false`) |

**Regra**: Sempre lazy-load com `dynamic(() => import(...), { ssr: false })`.

---

## Combinações Recomendadas

### Hero com partículas
```tsx
<HeroSection backgroundElement={<ParticleField count={500} color="#F59E0B" />}>
  <Container>
    <ScrollReveal><Overline>...</Overline></ScrollReveal>
    <ScrollReveal delay={0.2}><DisplayHeading>... <AccentText>...</AccentText></DisplayHeading></ScrollReveal>
    <ScrollReveal delay={0.4}>
      <GSAPCounter value={96} suffix="%" />
    </ScrollReveal>
  </Container>
</HeroSection>
```

### Seção com GSAP stagger
```tsx
<Section background="surface">
  <Container>
    <GSAPReveal from={{ opacity: 0, x: -40 }} to={{ opacity: 1, x: 0 }}>
      <Overline>...</Overline>
    </GSAPReveal>
    <GSAPStaggerReveal className="grid md:grid-cols-2 gap-4" staggerAmount={0.15}>
      <NumberedCard ... />
      <NumberedCard ... />
    </GSAPStaggerReveal>
  </Container>
</Section>
```

### Seção de provocação (breathing)
```tsx
<Section variant="breathing" background="accent-muted">
  <Container size="narrow" className="text-center">
    <GSAPReveal from={{ opacity: 0, scale: 0.95 }} to={{ opacity: 1, scale: 1, duration: 1.2 }}>
      <Provocation>Uma frase que muda tudo.</Provocation>
    </GSAPReveal>
  </Container>
</Section>
```

### Experiência completa (wrapper)
```tsx
<WorkshopLayout discussions={workshopDiscussions}>
  <PresentationShell>
    <ChapterNav chapters={chapters} />
    <ModeIndicator />
    {/* ... seções ... */}
  </PresentationShell>
</WorkshopLayout>
```

### Bloco de workshop
```tsx
<PausePoint />
<Section variant="breathing">
  <Container size="narrow">
    <DiscussionPrompt
      question="Pergunta provocativa aqui?"
      context="Contexto para guiar a discussão."
      timerMinutes={5}
    />
  </Container>
</Section>
```

### Comparação com slider
```tsx
<ComparisonSlider
  before={{ label: "Antes", content: <div>...</div> }}
  after={{ label: "Depois", content: <div>...</div> }}
/>
```

### Maturidade com timeline
```tsx
<Timeline items={[
  { id: "1", label: "Nível 1", title: "Reativo", description: "..." },
  { id: "2", label: "Nível 2", title: "Proativo", description: "..." },
]} />
```
