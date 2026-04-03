# Skill: Premium Design System

## Objetivo
Definir o sistema visual completo para experiências digitais premium. Este skill governa cor, tipografia, espaçamento, componentes e atmosfera visual. Cada decisao de design deve comunicar autoridade, profundidade e sofisticacao antes de qualquer texto ser lido.

## Quando Usar
- Ao iniciar qualquer experiencia (definicao de paleta, tipografia, atmosfera)
- Ao criar ou revisar componentes visuais (cards, heroes, secoes)
- Ao validar consistencia visual entre secoes
- Ao configurar tokens do Tailwind CSS

---

## Filosofia de Design

Cinco principios governam toda decisao visual:

1. **Gravidade** — Elementos tem peso. Titulos ancoram a pagina. Espacos vazios criam respiro. Nada flutua sem proposito.
2. **Profundidade** — Camadas de superficie criam hierarquia. Background < Surface < Elevated < Content. Cada camada tem papel claro.
3. **Ritmo** — Alternancia entre densidade e respiro. Secoes densas seguidas de "breathing sections". O olho precisa de pausas.
4. **Tensao** — Contraste dramatico entre elementos. Titulo grande vs. label pequeno. Cor accent escassa vs. neutros dominantes. A tensao guia o olhar.
5. **Cinema** — Cada tela e um frame. A composicao deve funcionar como fotografia — ponto focal, profundidade de campo, atmosfera.

---

## Sistema de Cores

### Paleta Base: "Midnight Authority"

A paleta base e fixa para todas as experiencias. Ela define o territorio visual.

| Token | Hex | Uso |
|-------|-----|-----|
| `--bg` | `#08090E` | Background principal do body |
| `--surface` | `#0E1117` | Cards, paineis, areas elevadas |
| `--elevated` | `#151922` | Elementos sobre surface (modais, tooltips, dropdowns) |
| `--text` | `#E8ECF4` | Texto principal (nunca branco puro) |
| `--text-secondary` | `#7A8399` | Labels, metadata, texto auxiliar |
| `--border` | `rgba(255,255,255,0.08)` | Bordas sutis entre camadas |
| `--border-hover` | `rgba(255,255,255,0.15)` | Bordas em estado hover |

### Paletas de Acento por Projeto

Cada tema de projeto tem um par de cores accent. Nunca misture pares entre temas.

| Tema | Accent Primario | Accent Secundario | Quando Usar |
|------|----------------|-------------------|-------------|
| **CX / Experiencia** | Amber `#F59E0B` | Teal `#14B8A6` | Jornada do cliente, NPS, experiencia |
| **Data / AI** | Violet `#8B5CF6` | Blue `#3B82F6` | Dados, inteligencia artificial, analytics |
| **Gestao / Lideranca** | Gold `#D4A853` | Slate `#64748B` | Estrategia, lideranca, gestao |
| **Atendimento / CS** | Coral `#F87171` | Emerald `#34D399` | Customer success, suporte, retencao |

**Regra de uso do accent:** Maximo 10-15% da superficie visual. Accent e para pontuar, nao para pintar.

### Aplicacao no Tailwind CSS 4

```ts
// tailwind.config.ts — extend theme
colors: {
  bg: '#08090E',
  surface: '#0E1117',
  elevated: '#151922',
  text: { DEFAULT: '#E8ECF4', secondary: '#7A8399' },
  border: 'rgba(255,255,255,0.08)',
  accent: { DEFAULT: 'var(--accent)', secondary: 'var(--accent-secondary)' },
}
```

Defina `--accent` e `--accent-secondary` como CSS custom properties no layout raiz, variando por projeto.

---

## Tipografia

### Familias

| Papel | Fonte | Uso |
|-------|-------|-----|
| Display | **Instrument Serif** | Titulos, headlines, numeros hero |
| Body | **Inter** | Corpo, labels, UI, navegacao |
| Data | **JetBrains Mono** | Numeros em destaque, codigo, metricas |

### Escala Tipografica com clamp()

| Token | Mobile | Desktop | clamp() | Peso |
|-------|--------|---------|---------|------|
| `--text-hero` | 2.5rem | 4.5rem | `clamp(2.5rem, 5vw + 1rem, 4.5rem)` | 400 (Instrument Serif) |
| `--text-h1` | 2rem | 3.5rem | `clamp(2rem, 4vw + 0.5rem, 3.5rem)` | 400 (Instrument Serif) |
| `--text-h2` | 1.75rem | 2.5rem | `clamp(1.75rem, 3vw + 0.5rem, 2.5rem)` | 400 (Instrument Serif) |
| `--text-h3` | 1.25rem | 1.75rem | `clamp(1.25rem, 2vw + 0.5rem, 1.75rem)` | 600 (Inter) |
| `--text-body` | 1rem | 1.125rem | `clamp(1rem, 0.5vw + 0.875rem, 1.125rem)` | 400 (Inter) |
| `--text-small` | 0.875rem | 0.875rem | `0.875rem` | 400 (Inter) |
| `--text-overline` | 0.75rem | 0.75rem | `0.75rem` | 500 (Inter) |

**Overlines:** Sempre uppercase, letter-spacing `0.12em`, cor `--text-secondary`. Usados acima de titulos de secao.

**Line-heights:** Display: 1.1 | H2/H3: 1.3 | Body: 1.7 | Small: 1.5

---

## Escala de Espacamento

| Token | Valor | Uso tipico |
|-------|-------|------------|
| `--space-1` | 4px | Micro gaps (entre icone e label) |
| `--space-2` | 8px | Gap interno de elementos compactos |
| `--space-3` | 12px | Padding de badges, chips |
| `--space-4` | 16px | Gap entre itens de lista |
| `--space-6` | 24px | Padding mobile de containers |
| `--space-8` | 32px | Padding desktop de containers, entre paragrafos |
| `--space-12` | 48px | Gap entre blocos dentro de secao |
| `--space-16` | 64px | Gap entre sub-secoes |
| `--space-24` | 96px | Gap entre secoes principais |
| `--space-32` | 128px | Espacamento hero, respiro maximo |

**Max-width de leitura:** 720px (aproximadamente 65ch). Nunca ultrapasse para texto corrido.

---

## Variantes de Componentes

### Hero

| Variante | Descricao | Quando Usar |
|----------|-----------|-------------|
| **Cinematic** | Fullscreen, titulo centralizado, background com video/particulas, overline + headline + subtitulo | Experiencias de alto impacto, temas de futuro |
| **Statement** | Titulo grande alinhado a esquerda, stat bar lateral, sem imagem | Temas de posicionamento, manifestos |
| **Data-driven** | Titulo + grid de 3-4 metricas animadas em destaque | Experiencias baseadas em dados, ROI |
| **Atmospheric** | Titulo sobre gradiente sutil, com textura/grain, minimalista | Temas de cultura, experiencia humana |

### Section

| Variante | Descricao |
|----------|-----------|
| **Full-bleed** | Conteudo ocupa 100% da largura, background diferenciado |
| **Editorial** | Conteudo centrado em max-width, texto longo com hierarquia clara |
| **Grid** | 2-4 colunas de cards ou blocos de conteudo |
| **Comparison** | Duas colunas lado a lado (antes/depois, versus) |
| **Immersive** | Background com Three.js, video ou parallax, conteudo sobreposto |
| **Breathing** | Apenas uma frase ou provocacao, muito espaco em branco, pausa narrativa |

### Card

| Variante | Descricao |
|----------|-----------|
| **Insight** | Overline + titulo + paragrafo. Borda sutil, hover com lift. Padding 32px. |
| **Expandable** | Insight + area expansivel com Framer Motion `AnimatePresence` |
| **Numbered** | Numero grande em JetBrains Mono + conteudo. Para listas ordenadas. |
| **Highlighted** | Border-left 3px accent + background muted. Para callouts e destaques. |
| **Interactive** | Hover revela camada extra de informacao (flip ou slide). |
| **Comparative** | Dois estados lado a lado dentro do mesmo card (toggle). |

---

## Anti-Patterns — O Que NUNCA Fazer

1. **Glass morphism como identidade** — `backdrop-filter: blur()` como padrao visual e preguica, nao design. Use com extrema parcimonia (maximo 1 elemento por pagina, se houver).
2. **Cyan-indigo como padrao** — A paleta generica de "tech startup" (cyan + indigo + dark bg) e o equivalente visual de "No mundo atual". Use as paletas de acento definidas acima.
3. **Cards uniformes** — Se todos os cards tem o mesmo tamanho, padding e layout, a secao parece template. Varie: destaque um card maior, use numbered em um e insight em outro.
4. **Gradientes arco-iris** — Gradientes com mais de 2 stops ou cores nao-relacionadas. Gradientes devem ser sutis: `accent → transparent` ou `surface → bg`.
5. **Icones genericos** — Icones de biblioteca sem curadoria (o icone generico de "foguete" para inovacao). Se nao tem icone perfeito, use numeros ou overlines.
6. **Sombras pesadas** — `box-shadow` com spread > 20px ou opacidade > 0.15 parece 2015. Prefira bordas sutis e diferenca de background.
7. **Animacao em tudo** — Se cada elemento anima ao entrar, nenhum se destaca. Anime com proposito: stats, titulos de secao, cards em stagger.

---

## Checklist de Validacao Visual

Antes de finalizar qualquer experiencia:

- [ ] Paleta base Midnight Authority aplicada consistentemente
- [ ] Accent color aparece em menos de 15% da superficie
- [ ] Tipografia usa apenas Instrument Serif + Inter + JetBrains Mono
- [ ] Escala de espacamento respeitada (nenhum valor arbitrario)
- [ ] Contraste WCAG AA para texto sobre todas as superficies
- [ ] Pelo menos uma "breathing section" entre secoes densas
- [ ] Cards variam entre pelo menos 2 variantes
- [ ] Hero usa uma das 4 variantes definidas
- [ ] Nenhum anti-pattern presente
- [ ] Screenshot a 25% do tamanho ainda mostra hierarquia clara

---

## Diagnostico Rapido

1. **Tire as cores e deixe preto e branco.** A hierarquia ainda funciona? Se nao, depende de cor em vez de tamanho/peso/espaco.
2. **A cor accent aparece em menos de 15% da superficie?** Se nao, perdeu funcao de destaque.
3. **Existe variacao de densidade entre secoes?** Se nao, a experiencia e monotona.
4. **Um screenshot parece uma capa de revista ou um template gratuito?** Se parece template, falta identidade.
5. **O design funciona sem imagens?** Se nao, a tipografia e o espacamento estao fracos.
