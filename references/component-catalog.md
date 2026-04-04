# Catálogo de Componentes — CX Experience Lab

Referência rápida de todos os componentes disponíveis no design system.

---

## Design System (`@/components/design-system`)

### Typography

| Componente | Uso | Quando usar |
|---|---|---|
| `DisplayHeading` | Título principal do hero (font-light, tight leading) | Uma vez por experiência, no topo |
| `SectionHeading` | Título de seção/capítulo (font-normal) | Início de cada seção nova |
| `SubHeading` | Subtítulo dentro de seção (font-medium) | Quando há hierarquia dentro de seção |
| `BodyText` | Parágrafo de corpo | Texto descritivo, explicações |
| `Overline` | Label acima de títulos | "01 — Nome do capítulo", labels de seção |
| `StatNumber` | Número grande de destaque | Stats no hero, métricas-chave |
| `StatLabel` | Label abaixo de número | Sempre acompanha StatNumber |
| `Provocation` | Frase de impacto (italic, font-light, accent border-left) | Momentos de respiração, provocação |
| `AccentText` | Texto com cor accent | Destacar palavras-chave em headlines |
| `PullQuote` | Citação editorial com aspas decorativas | Após dados ou argumentos, para reforçar insight |
| `SplitContent` | Grid assimétrico 2 colunas | Texto + visual, heading + interação |
| `FullBleedText` | Tipografia oversized (font-light, tight tracking) | Momentos de impacto visual no fechamento |
| `EvidenceBlock` | Dado + contexto com borda accent | Stats com explicação, evidência empírica |

**Anti-padrão**: Usar AccentText em mais de 2-3 instâncias por experiência.

### Section

| Componente | Uso | Variantes |
|---|---|---|
| `HeroSection` | Seção hero fullscreen | `align="center"` (padrão) ou `align="left"` |
| `Section` | Container de seção | `default`, `fullbleed`, `editorial`, `immersive`, `breathing`, `asymmetric`, `compact` |
| `Container` | Wrapper de conteúdo | Sizes: `narrow`, `default`, `wide`, `full`. Align: `center`, `left`, `right` |
| `ChapterDivider` | Divisor entre capítulos | Com número grande e título |

**Regra**: Alternar variantes de Section entre seções. Nunca usar a mesma variante consecutivamente.

**Regra**: Usar `align="left"` ou `align="right"` em Container para quebrar o padrão centered-everything.

### Card

| Componente | Uso | Quando usar |
|---|---|---|
| `Card` | Card base | Variantes: `default`, `insight`, `highlighted`, `numbered`, `comparative` |
| `ExpandableCard` | Card com expand/collapse | Conteúdo que revela (mitos, detalhes) |
| `ComparisonCard` | Card comparativo | Antes/depois. Accents: `positive`, `negative`, `neutral` |
| `NumberedCard` | Card com número | Sequências ordenadas |

**Anti-padrão**: Usar Cards para tudo. Alternar com: border-top items, PullQuote, EvidenceBlock, border-left blocks.

---

## Interactive (`@/components/interactive`)

| Componente | Objetivo Cognitivo | Quando usar | Quando NÃO usar |
|---|---|---|---|
| `Tabs` | Comparar perspectivas | 3-6 visões alternativas | Apenas 2 opções (use ComparisonCard) |
| `Accordion` | Aprofundar sob demanda | Detalhes opcionais, sinais, alertas | Conteúdo essencial (não esconda) |
| `Timeline` | Mostrar evolução/maturidade | Progressão temporal, níveis, estágios | Menos de 3 itens (use NumberedCard) |
| `ComparisonSlider` | Contrastar antes/depois | Duas realidades opostas lado a lado | Conteúdo que não tem contraste claro |

**Variantes de Tabs**: `default` (bg), `pills` (rounded), `underline` (minimal)

---

## Navigation (`@/components/navigation`)

| Componente | Uso |
|---|---|
| `ChapterNav` | Navegação por capítulos com progress bar, IntersectionObserver tracking, keyboard (setas) |
| `ModeIndicator` | UI para alternar entre modos (leitura/apresentação/workshop) |
| `PresentationShell` | Wrapper que aplica CSS de modo apresentação |

---

## Motion (`@/components/motion`)

### Framer Motion (transições de componente)

| Componente | Uso | Props-chave |
|---|---|---|
| `ScrollReveal` | Revelar elemento ao scroll | `direction` (`up`/`down`/`left`/`right`/`none`), `delay`, `duration`, `distance` |
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

**Regra**: Variar direção de entrada por seção. Não usar sempre `y: 30` para tudo. Usar `x: -30` para entradas laterais, `scale: 0.95` para elementos de destaque.

---

## Workshop (`@/components/workshop`)

| Componente | Uso | Quando usar |
|---|---|---|
| `DiscussionPrompt` | Pergunta para discussão em grupo | Após seção densa. Aceita `timerMinutes` |
| `PausePoint` | Divisor de pausa visual | Entre capítulos, momento de respiração |
| `WorkshopLayout` | Sidebar de facilitação | Envolve a experiência inteira |

---

## Cinematic (`@/components/cinematic`)

| Componente | Uso | Quando usar |
|---|---|---|
| `ParticleField` | Campo de partículas 3D (Three.js) | Background do hero (via `next/dynamic`, `ssr: false`) |

---

## Theming

CSS classes para accent por experiência (em `design-tokens.css`):

| Classe | Accent | Uso |
|---|---|---|
| `.theme-amber` | `#F59E0B` | Equação Invisível (CX) — padrão |
| `.theme-teal` | `#0D9488` | Paradoxo do Sucesso (CS) |

Aplicar na div wrapper da experiência: `<div className="theme-teal">`.

---

## Combinações Recomendadas

### Hero left-aligned com partículas
```tsx
<HeroSection align="left" backgroundElement={<ParticleField count={500} color="#F59E0B" />}>
  <Container size="wide">
    <div className="max-w-[640px]">
      <ScrollReveal direction="left"><Overline>...</Overline></ScrollReveal>
      <ScrollReveal direction="left" delay={0.2}><DisplayHeading>...</DisplayHeading></ScrollReveal>
      <EvidenceBlock stat="96%" context="..." />
    </div>
  </Container>
</HeroSection>
```

### Seção com SplitContent
```tsx
<Section background="surface">
  <Container size="wide">
    <SplitContent
      ratio="wide-left"
      left={<><Overline>...</Overline><SectionHeading>...</SectionHeading><BodyText>...</BodyText></>}
      right={<Tabs variant="pills" tabs={[...]} />}
    />
  </Container>
</Section>
```

### Provocação left-aligned (não centered)
```tsx
<Section variant="breathing" background="accent-muted">
  <Container size="default" align="left" className="md:pl-[15%]">
    <GSAPReveal from={{ opacity: 0, x: -40 }} to={{ opacity: 1, x: 0, duration: 1.4 }}>
      <Provocation>Uma frase que muda tudo.</Provocation>
    </GSAPReveal>
  </Container>
</Section>
```

### Fechamento com FullBleedText + insights
```tsx
<Section background="surface">
  <Container size="wide">
    <SplitContent
      ratio="wide-left"
      left={<FullBleedText>Headline de impacto aqui.</FullBleedText>}
      right={<GSAPStaggerReveal>...insights list...</GSAPStaggerReveal>}
    />
  </Container>
</Section>
```

### Stat moment assimétrico
```tsx
<Section variant="compact">
  <Container size="wide">
    <div className="md:ml-[20%]">
      <GSAPCounter value={96} suffix="%" className="..." />
      <p>Contexto do dado.</p>
    </div>
  </Container>
</Section>
```

### Items com border-top (alternativa a Cards)
```tsx
<div className="grid gap-5 md:grid-cols-4">
  {items.map((item, i) => (
    <div className="border-t border-[var(--accent-primary)]/20 pt-5">
      <span className="font-mono text-xs text-[var(--accent-primary)]/50">{item.number}</span>
      <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.description}</p>
    </div>
  ))}
</div>
```
