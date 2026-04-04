# Skill: Tech Premium Aesthetic

## Origem
Padrões visuais de Linear, Vercel, Stripe, Notion Enterprise — referências mundiais em design tech premium que comunica sofisticação e maturidade executiva.

## Quando Usar
- Ao definir identidade visual de uma experiência
- Ao validar se o resultado "parece tech premium" ou "parece template"
- Ao criar composições visuais (layouts, hierarquia, ritmo)
- Ao tomar decisões de cor, tipografia e espaçamento

---

## DNA Visual: Tech Premium vs Template

### Tech Premium (O QUE QUEREMOS)
- Dark navy profundo (#050a14 range), não preto (#000) nem cinza genérico
- Cyan/blue elétrico como accent — controlado, escasso
- Grid sutil como textura de fundo
- Glow effects como iluminação, não decoração
- Tipografia com contraste extremo (display serif vs body sans)
- Espaçamento generoso (respiro > densidade)
- Superfícies com profundidade real (layers, borders sutis)
- Motion com inércia (spring physics, não ease linear)
- Interações que respondem ao usuário (cursor-following, magnetic)

### Template/Genérico (O QUE EVITAMOS)
- Cards uniformes (mesmo tamanho, mesmo estilo, mesma cor)
- Glass morphism em tudo
- Gradient text em excesso
- Neon/gamer colors (magenta, lime, hot pink)
- hero → 3 features → testimonials → CTA (estrutura previsível)
- Icons do Lucide/Heroicons como decoração
- "Powered by AI" badges
- Mesma animação em todos os elementos

---

## Paleta: Deep Tech Navy

### Tokens Atuais
```css
--bg: #050a14          /* Navy profundo */
--surface: #0a1628     /* Card base */
--surface-elevated: #0f1d35  /* Card hover */
--text: #E4EAF5        /* Texto principal */
--text-secondary: #8295B8
--text-muted: #4A5F82
--accent-primary: #0EA5E9    /* Cyan elétrico */
--accent-secondary: #06B6D4  /* Teal */
--accent-warm: #F59E0B       /* Amber (raro) */
```

### Regras de Cor
1. **Accent é escasso** — máximo 15% da superfície visual. Se tudo é cyan, nada é cyan.
2. **Amber/warm** — usar apenas 1-2x por experiência para calor emocional (não como cor primária)
3. **Branco** — nunca puro (#fff). Usar --text (#E4EAF5) para controle de temperatura.
4. **Preto** — nunca puro (#000). Usar --bg (#050a14) para profundidade.
5. **Borders** — rgba com opacity 0.06-0.14. Devem ser quase invisíveis.

---

## Tipografia: Contraste Editorial

### Stack
- **Display**: Instrument Serif — elegante, editorial, com personalidade
- **Body**: Inter — clareza absoluta, sem decoração
- **Mono**: JetBrains Mono — dados, métricas, labels técnicos

### Regras
1. **Headlines**: Sempre Instrument Serif, font-light, tracking tight
2. **Body**: Sempre Inter, tamanho ≥ 16px, line-height ≥ 1.6
3. **Labels/Overlines**: Inter uppercase, 0.6-0.75rem, letter-spacing 0.12-0.2em
4. **Números de impacto**: JetBrains Mono, font-bold, accent color
5. **Nunca**: Comic Sans, Poppins, Montserrat — fontes "de template"

### Escala
```
Hero: clamp(2.5rem, 7vw, 5.5rem)
Section: clamp(1.8rem, 4.5vw, 3.5rem)
Sub: clamp(1.25rem, 2.5vw, 1.75rem)
Body: 1.125rem (18px)
Label: 0.6-0.75rem
```

---

## Layout: Ritmo Assimétrico

### Princípios
1. **Nunca centralizar tudo** — Alternar left-aligned e center
2. **Nunca grid uniforme** — Variar col-span, row-span, ratios
3. **Respiração obrigatória** — Seções com py-24 mínimo entre conteúdo
4. **Max-width de leitura** — 65ch (720-800px) para texto corrido
5. **Full-bleed** — Pelo menos 1 seção por experiência sem max-width

### Composições por Tipo
```
Hero: Full-bleed, centro ou left-aligned
Chapter Transition: Full-width, left-aligned com número oversized
Data Spectacle: Center, com radial glow
Image Split: Grid assimétrico (1.3:1 ratio)
Cards: 2x2 ou 3-col, com SpotlightCard
Pull Quote: Full-width, center, texto grande
Workshop: Contained, left-aligned, surface background
```

---

## Checklist Anti-Template

Antes de considerar uma seção pronta, verificar:

- [ ] Não parece um template de landing page
- [ ] Paleta tem identidade (não é dark + accent genérico)
- [ ] Cards não são todos iguais
- [ ] Há pelo menos 1 momento de "tech wow" (3D, glow, shader)
- [ ] Tipografia usa display serif para impacto
- [ ] Espaçamento não é uniforme entre todas as seções
- [ ] Borders são sutis (não solid 1px white)
- [ ] Motion tem propósito narrativo
- [ ] Funciona em projetor (legível a 3m)
- [ ] Não parece "gerado por IA"

---

## Referências Visuais

### Linear
- Grid de fundo sutil
- Spotlight effects em cards
- Tipografia bold + mono contrast
- Paleta: deep purple/indigo + white accents

### Vercel
- Espaçamento extremo (muito respiro)
- Tipografia Geist (display + mono)
- Gradientes sutis como textura
- Performance como valor visual

### Stripe
- Glow borders animados
- Depth layers com blur atmosférico
- Animações de código ao vivo
- Cards com profundidade real

### Notion Enterprise
- Composições editoriais (não templates)
- Fotografia real integrada ao design
- Tipografia serif para autoridade
- Dark mode com warmth controlado
