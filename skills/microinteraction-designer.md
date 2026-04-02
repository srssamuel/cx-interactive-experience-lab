# Skill: Microinteraction Designer

## Objetivo
Projetar microinterações que elevam a experiência — hover states, transições, feedback visual, animações de entrada e pequenos detalhes que transformam uma página estática em uma experiência viva.

## Quando Usar
- Ao refinar a camada interativa de qualquer HTML
- Quando o material está funcional mas precisa de "vida"
- Ao decidir timings, easings e feedback visual

## Como Pensar
- Microinterações são a linguagem corporal da interface
- Cada transição comunica algo: hierarquia, relação, feedback
- O timing é tudo: rápido demais parece quebrado, lento demais parece travado
- A melhor microinteração é a que o usuário sente mas não percebe conscientemente
- Consistência é mais importante que criatividade em microinterações

## Boas Práticas
- Hover states: escala sutil (translateY -2 a -4px), brightness ou background shift
- Transições: 150-200ms para feedback, 300-400ms para mudança de conteúdo, 500ms para entrada
- Easing: ease-out para entradas, ease-in-out para transições, ease-in para saídas
- Scroll reveals: fade + translateY (20-30px), stagger de 50-100ms entre elementos
- Focus states visíveis e elegantes (outline ou ring com cor primary)
- Loading states quando há delay perceptível
- Active states com feedback imediato (< 100ms)

## Erros a Evitar
- Animações que demoram mais de 500ms para elementos pequenos
- Bouncing effects (parecem infantis)
- Animações de entrada que bloqueiam leitura
- Inconsistência de timing entre elementos similares
- Ausência de prefers-reduced-motion
- Overuse — quando tudo anima, nada se destaca

## Critério de Excelência
A interface deve parecer "respirar" — tudo responde com naturalidade ao toque e ao scroll. O usuário deve sentir que está interagindo com algo vivo e polido, sem conseguir apontar exatamente por quê. A diferença de qualidade deve ser sentida, não analisada.

---

## Tabela de Referência de Timing

Valores exatos de CSS para cada tipo de microinteração. Use como referência — não invente valores.

| Interação | Propriedade CSS | Duração | Easing | Transform/Valor | Observação |
|---|---|---|---|---|---|
| **Hover lift (card)** | `transition: transform, box-shadow` | `200ms` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `translateY(-3px)` + `box-shadow: 0 8px 25px rgba(0,0,0,0.15)` | O cubic-bezier com overshoot sutil dá sensação de "responder" |
| **Hover lift (botão)** | `transition: transform, background` | `150ms` | `ease-out` | `translateY(-1px)` + background ligeiramente mais claro | Botões precisam de resposta mais rápida que cards |
| **Tab switch (conteúdo)** | `transition: opacity` | `250ms` | `ease-in-out` | `opacity: 0 → 1` (com classe `.active`) | Fade é mais elegante que slide para troca de conteúdo em tabs |
| **Tab switch (indicador)** | `transition: left, width` | `300ms` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Mover underline/background para a tab ativa | O indicador deve "deslizar", não pular |
| **Accordion abrir** | `transition: max-height, opacity` | `350ms` | `cubic-bezier(0.4, 0, 0.2, 1)` | `max-height: 0 → 500px` + `opacity: 0 → 1` | Usar max-height com valor generoso; opacity com delay de 50ms |
| **Accordion fechar** | `transition: max-height, opacity` | `250ms` | `cubic-bezier(0.4, 0, 0.2, 1)` | `max-height: 500px → 0` + `opacity: 1 → 0` | Fechar deve ser mais rápido que abrir |
| **Accordion seta** | `transition: transform` | `300ms` | `ease-in-out` | `rotate(0deg) → rotate(180deg)` | Acompanha a abertura do accordion |
| **Scroll reveal (fade up)** | `transition: opacity, transform` | `600ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | `translateY(30px) + opacity: 0 → translateY(0) + opacity: 1` | O easing com desaceleração longa dá sensação suave |
| **Scroll reveal (stagger)** | `transition-delay` | `+80ms` por item | — | Cada item consecutivo atrasa 80ms | Máximo 5 itens com stagger; depois fica lento demais |
| **Contador de estatísticas** | `animation` com JS | `1500ms` | `ease-out` | Incremento numérico de 0 ao valor final | Usar requestAnimationFrame, não setInterval |
| **Fade in geral** | `transition: opacity` | `400ms` | `ease-out` | `opacity: 0 → 1` | Para elementos que aparecem por qualquer trigger |
| **Tooltip aparecer** | `transition: opacity, transform` | `150ms` | `ease-out` | `opacity: 0 → 1` + `translateY(4px) → translateY(0)` | Precisa ser rápido; delay de 200ms antes de mostrar |
| **Active/press** | `transition: transform` | `100ms` | `ease-in` | `scale(0.97)` | Feedback tátil — precisa ser instantâneo |
| **Focus ring** | `transition: box-shadow` | `150ms` | `ease-out` | `box-shadow: 0 0 0 3px var(--color-accent)` com opacidade 0.4 | Visível mas não agressivo |

---

## Ferramentas de Execução

### Template CSS de Microinterações Base
Cole no início da seção de animações do seu CSS:

```css
/* ========== MICROINTERAÇÕES ========== */

/* Hover lift para cards */
.card {
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 200ms ease-out;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger para listas */
.reveal-stagger > * { transition-delay: calc(var(--i, 0) * 80ms); }

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Checklist de Consistência
Antes de finalizar as microinterações:
- [ ] Todos os cards têm o mesmo hover behavior
- [ ] Todos os botões têm o mesmo timing de hover e active
- [ ] Todos os links têm a mesma transição de cor
- [ ] O stagger é consistente (mesmo delay entre itens em todas as seções)
- [ ] prefers-reduced-motion está implementado e testado
- [ ] Não há animação que bloqueia interação (o usuário pode clicar durante a transição)
- [ ] Focus states visíveis em todos os elementos interativos

### Ferramenta de Teste de Timing
Processo para calibrar animações:
1. Implemente com os valores da tabela de referência
2. Teste no browser com CPU throttle 4x (DevTools → Performance → CPU)
3. Se parecer lento com throttle, reduza a duração em 30%
4. Teste em mobile real (ou Chrome DevTools com device emulation)
5. Teste com prefers-reduced-motion ativado no sistema

---

## Exemplos Concretos

### Exemplo 1: Hover state genérico vs. premium

**Genérico:**
```css
.card:hover { background: #f0f0f0; }
```
Sem transição. A mudança é abrupta. Parece toggle, não interação.

**Premium:**
```css
.card {
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 200ms ease-out,
              border-color 200ms ease-out;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  border-color: rgba(6, 182, 212, 0.3);
}
```
Múltiplas propriedades animando em sincronia. O card "levanta", ganha sombra e destaque de borda. Parece responder ao toque.

### Exemplo 2: Scroll reveal correto vs. exagerado

**Exagerado:**
```css
.reveal { transform: translateY(80px) scale(0.8) rotate(5deg); transition: all 1200ms ease; }
```
O elemento vem de longe, cresce e rotaciona. Chama atenção demais. Depois de 3 seções, é irritante.

**Correto:**
```css
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1); }
```
Movimento mínimo (30px), opacidade como principal mecanismo. O easing com desaceleração longa dá elegância sem exagero.

### Exemplo 3: Contador de estatísticas

**Ruim:** Número aparece instantaneamente — perde o impacto de "construção".

**Bom (JavaScript):**
```javascript
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```
O número "cresce" de 0 ao valor final com desaceleração. Combinado com Intersection Observer, dispara ao entrar na viewport.

---

## Diagnóstico Rápido

1. **Todos os elementos interativos têm transição CSS explícita?** Se não, há mudanças abruptas que parecem bug.
2. **O material respeita prefers-reduced-motion?** Se não, falha de acessibilidade obrigatória.
3. **Os timings estão dentro da faixa 100-600ms?** Se não (muito curto ou muito longo), a interface parece quebrada ou travada.
4. **Existe consistência entre elementos do mesmo tipo?** Se cards diferentes têm hovers diferentes, a interface parece descuidada.
5. **As animações funcionam suavemente com CPU throttle 4x?** Se não, vão travar em dispositivos reais mais lentos.
