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
| `Card` | Card base | Blocos de conteúdo com borda |
| `ExpandableCard` | Card com expand/collapse | Quando há conteúdo que revela (mitos, detalhes) |
| `ComparisonCard` | Card comparativo | Antes/depois, positivo/negativo |
| `NumberedCard` | Card com número | Sequências ordenadas (dimensões, etapas) |

**Anti-padrão**: Usar mesmo tipo de Card em toda experiência. Misturar tipos.

---

## Interactive (`@/components/interactive`)

| Componente | Objetivo Cognitivo | Quando usar | Quando NÃO usar |
|---|---|---|---|
| `Tabs` | Comparar perspectivas | 3-6 visões alternativas | Apenas 2 opções (use ComparisonCard) |
| `Accordion` | Aprofundar sob demanda | Detalhes opcionais, FAQs | Conteúdo essencial (não esconda) |

**Variantes de Tabs**: `default` (bg), `pills` (rounded), `underline` (minimal)

---

## Navigation (`@/components/navigation`)

| Componente | Uso |
|---|---|
| `ChapterNav` | Navegação por capítulos com progress bar |

Inclui: progress bar no topo, nav horizontal com chapter buttons, keyboard navigation (arrows).

---

## Motion (`@/components/motion`)

| Componente | Uso | Props-chave |
|---|---|---|
| `ScrollReveal` | Revelar elemento ao scroll | `direction`, `delay`, `duration` |
| `StaggerGroup` | Revelar filhos em sequência | `staggerDelay`, `baseDelay` |
| `CounterAnimation` | Animar número de 0 ao valor | `value`, `suffix`, `duration` |
| `StatBlock` | Número + label com animação | `value`, `suffix`, `label` |

**Regra**: Todo elemento acima do fold pode aparecer estático. Abaixo do fold, usar ScrollReveal.

---

## Workshop (`@/components/workshop`)

| Componente | Uso | Quando usar |
|---|---|---|
| `DiscussionPrompt` | Pergunta para discussão em grupo | Após seção densa, antes de fechamento |
| `PausePoint` | Divisor de pausa visual | Entre capítulos, momento de respiração |

**DiscussionPrompt** aceita `timerMinutes` para mostrar cronômetro de workshop.

---

## Cinematic (`@/components/cinematic`)

| Componente | Uso | Quando usar |
|---|---|---|
| `ParticleField` | Campo de partículas 3D | Background do hero (via dynamic import) |

**Regra**: Sempre usar com `dynamic(() => import(...), { ssr: false })` para não bloquear o build.

---

## Combinações Recomendadas

### Hero padrão
```tsx
<HeroSection backgroundElement={<ParticleField />}>
  <Container>
    <ScrollReveal><Overline>...</Overline></ScrollReveal>
    <ScrollReveal delay={0.2}><DisplayHeading>...</DisplayHeading></ScrollReveal>
    <ScrollReveal delay={0.4}><StatBlock>...</StatBlock></ScrollReveal>
  </Container>
</HeroSection>
```

### Seção com cards stagger
```tsx
<Section background="surface">
  <Container>
    <ScrollReveal><Overline>...</Overline></ScrollReveal>
    <ScrollReveal><SectionHeading>...</SectionHeading></ScrollReveal>
    <StaggerGroup className="grid md:grid-cols-2 gap-4">
      <NumberedCard ... />
      <NumberedCard ... />
    </StaggerGroup>
  </Container>
</Section>
```

### Seção de provocação (breathing)
```tsx
<Section variant="breathing">
  <Container size="narrow" className="text-center">
    <ScrollReveal>
      <Provocation>Uma frase que muda tudo.</Provocation>
    </ScrollReveal>
  </Container>
</Section>
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
