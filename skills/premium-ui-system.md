# Skill: Premium UI System

## Objetivo
Criar interfaces com padrão visual premium, editorial e cinematográfico. Definir paletas, tipografia, espaçamento e componentes que transmitam sofisticação e autoridade.

## Quando Usar
- Ao definir a proposta visual de qualquer projeto
- Quando precisa escolher paleta, tipografia e atmosfera
- Ao criar ou refinar componentes visuais

## Como Pensar
- Pense como um diretor de arte de revista premium ou keynote de big tech
- Menos é mais — cada elemento visual precisa justificar sua existência
- A hierarquia visual conta a história antes do texto ser lido
- Espaço em branco é um recurso, não desperdício
- A paleta transmite emoção antes de qualquer palavra

## Boas Práticas
- Máximo 3-4 cores com papéis claros (bg, text, primary, accent)
- Tipografia com no máximo 2 famílias (display + body)
- Hierarquia de pelo menos 4 níveis (título, subtítulo, corpo, detalhe)
- Espaçamento generoso e consistente (usar escala de espaçamento)
- Contraste WCAG AA mínimo para texto
- Animações sutis (200-400ms, ease-out)
- Dark mode como padrão para impacto visual (com opção de light)
- Grid limpo e alinhamento rigoroso

## Erros a Evitar
- Mais de 4 cores sem propósito
- Gradientes exagerados ou desnecessários
- Sombras pesadas (estilo 2015)
- Bordas arredondadas excessivas
- Ícones genéricos decorativos
- Fontes decorativas de difícil leitura
- Background patterns que competem com conteúdo
- Inconsistência de espaçamento

## Critério de Excelência
Um screenshot do material deve parecer uma capa de revista premium ou um slide de keynote da Apple/Stripe/Linear. Se colocar ao lado de um template gratuito, a diferença deve ser óbvia e imediata.

---

## Receitas de Paleta

Três paletas completas testadas e prontas para uso. Cada uma com papel definido para cada cor.

### Paleta 1: Dark Editorial (Impacto e Autoridade)
Ideal para temas de estratégia, tecnologia e liderança. Transmite sofisticação e profundidade.

| Papel | Cor | Hex | Uso |
|-------|-----|-----|-----|
| Background principal | Navy profundo | `#0A0F1C` | Body, seções principais |
| Background secundário | Navy médio | `#111827` | Cards, painéis elevados |
| Texto principal | Branco suave | `#F1F5F9` | Títulos, corpo de texto |
| Texto secundário | Cinza azulado | `#94A3B8` | Subtítulos, labels, metadata |
| Accent primário | Teal vibrante | `#06B6D4` | CTAs, links, destaques, ícones |
| Accent secundário | Teal suave | `#0E7490` | Hover states, bordas ativas |
| Superfície | Slate escuro | `#1E293B` | Tooltips, dropdowns, separadores |
| Alerta/Destaque | Âmbar | `#F59E0B` | Badges, números-chave, warnings |

### Paleta 2: Light Minimal (Clareza e Elegância)
Ideal para conteúdo editorial denso, relatórios e materiais que priorizam leitura. Transmite confiança e modernidade.

| Papel | Cor | Hex | Uso |
|-------|-----|-----|-----|
| Background principal | Branco puro | `#FFFFFF` | Body |
| Background secundário | Cinza quase branco | `#F8FAFC` | Seções alternadas, cards |
| Texto principal | Preto suave | `#0F172A` | Títulos, corpo |
| Texto secundário | Cinza escuro | `#475569` | Subtítulos, metadata |
| Accent primário | Preto | `#000000` | CTAs, links |
| Accent secundário | Índigo | `#4F46E5` | Destaques pontuais, dados |
| Linha/Borda | Cinza claro | `#E2E8F0` | Separadores, contornos de card |
| Destaque sutil | Azul pálido | `#EEF2FF` | Background de callouts, badges |

### Paleta 3: Warm Premium (Sofisticação e Calor)
Ideal para temas de cultura, pessoas, liderança e experiência humana. Transmite premium sem frieza.

| Papel | Cor | Hex | Uso |
|-------|-----|-----|-----|
| Background principal | Creme escuro | `#1C1917` | Body (dark) ou `#FFFBF5` (light) |
| Background secundário | Marrom profundo | `#292524` | Cards elevados |
| Texto principal | Creme claro | `#FEF3C7` | Títulos (dark) ou `#1C1917` (light) |
| Texto secundário | Areia | `#D6D3D1` | Subtítulos, labels |
| Accent primário | Borgonha | `#991B1B` | CTAs, destaques fortes |
| Accent secundário | Terracota | `#C2410C` | Hover, bordas, ícones |
| Superfície | Sépia escuro | `#44403C` | Painéis, tooltips |
| Destaque | Dourado suave | `#D97706` | Números-chave, badges |

---

## Combinações Tipográficas

Três pares de fontes do Google Fonts testados para materiais premium. Cada par tem uma fonte display (títulos) e uma fonte body (corpo).

### Par 1: Inter + Source Serif 4
- **Display:** Source Serif 4 (serif) — pesos 600 e 700
- **Body:** Inter (sans-serif) — pesos 400 e 500
- **Atmosfera:** Editorial moderno. A serif nos títulos dá autoridade; a sans no corpo garante legibilidade.
- **Melhor com:** Paleta Light Minimal ou Dark Editorial
- **CSS:** `font-family: 'Source Serif 4', Georgia, serif;` / `font-family: 'Inter', -apple-system, sans-serif;`

### Par 2: Space Grotesk + DM Sans
- **Display:** Space Grotesk (sans-serif geométrica) — pesos 500 e 700
- **Body:** DM Sans (sans-serif humanista) — pesos 400 e 500
- **Atmosfera:** Tech premium. Geométrica nos títulos transmite inovação; humanista no corpo mantém calor.
- **Melhor com:** Paleta Dark Editorial
- **CSS:** `font-family: 'Space Grotesk', system-ui, sans-serif;` / `font-family: 'DM Sans', sans-serif;`

### Par 3: Playfair Display + Lato
- **Display:** Playfair Display (serif clássica) — pesos 600 e 800
- **Body:** Lato (sans-serif neutra) — pesos 400 e 700
- **Atmosfera:** Sofisticação clássica. A serif ornamentada nos títulos cria impacto; a sans neutra no corpo é invisível (no bom sentido).
- **Melhor com:** Paleta Warm Premium
- **CSS:** `font-family: 'Playfair Display', 'Times New Roman', serif;` / `font-family: 'Lato', 'Helvetica Neue', sans-serif;`

### Escala Tipográfica Recomendada
Use a escala 1.25 (Major Third) para hierarquia consistente:

| Nível | Tamanho Desktop | Tamanho Mobile | Peso | Uso |
|-------|----------------|----------------|------|-----|
| H1 | 3.052rem (48px) | 2rem (32px) | 700-800 | Título principal, hero |
| H2 | 2.441rem (39px) | 1.75rem (28px) | 600-700 | Títulos de seção |
| H3 | 1.953rem (31px) | 1.5rem (24px) | 600 | Subtítulos |
| H4 | 1.563rem (25px) | 1.25rem (20px) | 500-600 | Sub-subtítulos, labels |
| Body | 1.125rem (18px) | 1rem (16px) | 400 | Texto corrido |
| Small | 0.875rem (14px) | 0.8rem (13px) | 400 | Metadata, captions |

---

## Ferramentas de Execução

### Checklist de Sistema Visual
Antes de finalizar qualquer design, verifique:
- [ ] Paleta definida com no máximo 4 cores funcionais + 2 auxiliares
- [ ] Todas as cores têm papel atribuído (não há cor "solta")
- [ ] Contraste AA verificado para texto sobre background (ratio 4.5:1 mínimo)
- [ ] Tipografia com máximo 2 famílias e pesos definidos
- [ ] Escala tipográfica consistente (não inventar tamanhos ad hoc)
- [ ] Espaçamento usando escala fixa (4, 8, 12, 16, 24, 32, 48, 64, 96)
- [ ] Border-radius consistente em todo o material (escolha: 0, 4px, 8px ou 12px)
- [ ] Sombras usando no máximo 2 níveis (sutil e elevado)

### Template de CSS Custom Properties
```css
:root {
  /* Cores */
  --color-bg: #0A0F1C;
  --color-surface: #111827;
  --color-text: #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-accent: #06B6D4;
  --color-accent-hover: #0E7490;
  
  /* Tipografia */
  --font-display: 'Source Serif 4', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  
  /* Espaçamento */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  
  /* Bordas */
  --radius: 8px;
  --border: 1px solid rgba(255,255,255,0.08);
}
```

---

## Exemplos Concretos

### Exemplo 1: Card genérico vs. card premium
**Ruim:** Background branco, borda cinza 1px, padding 16px igual em todos os lados, título em 16px bold, texto em 14px. Parece formulário.

**Bom:** Background `--color-surface` com borda `rgba(255,255,255,0.06)`, padding `24px 28px 28px`, título em `--font-display` 1.25rem peso 600, texto secundário em `--color-text-secondary` com `line-height: 1.7`. Hover com `translateY(-2px)` e borda mudando para `--color-accent` com opacidade 0.3. Parece publicação premium.

### Exemplo 2: Hierarquia visual fraca vs. forte
**Ruim:** Título 24px, subtítulo 20px, corpo 16px. Diferença de apenas 4px entre níveis. Tudo parece igual.

**Bom:** Título 48px peso 800, subtítulo 20px peso 400 em cor secundária com `letter-spacing: 0.05em` e `text-transform: uppercase`, corpo 18px peso 400 com `line-height: 1.8`. A distância entre os níveis é dramática. O olho sabe instantaneamente o que ler primeiro.

### Exemplo 3: Uso de cor accent
**Ruim:** Accent color usada em títulos, ícones, bordas, backgrounds de seção e botões. A cor está em toda parte e não destaca nada.

**Bom:** Accent color usada apenas em: links (hover), um número-chave por seção, borda esquerda de callouts e o CTA principal. A escassez torna cada aparição significativa.

---

## Diagnóstico Rápido

1. **Se você tirar as cores e deixar tudo em preto e branco, a hierarquia ainda funciona?** Se não, a hierarquia depende de cor em vez de tamanho/peso/espaçamento.
2. **A cor accent aparece em menos de 15% da superfície visual?** Se não, ela perdeu sua função de destaque.
3. **Você consegue identificar o título, subtítulo e corpo sem ler o texto?** Se não, a escala tipográfica é insuficiente.
4. **O espaçamento entre seções é pelo menos 2x o espaçamento entre elementos internos?** Se não, as seções se misturam visualmente.
5. **Um screenshot reduzido a 25% do tamanho ainda mostra a estrutura claramente?** Se não, falta contraste e hierarquia macro.
