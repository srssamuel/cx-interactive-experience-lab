# Skill: Microinteraction Designer

## Objetivo
Projetar microinteracoes que elevam a experiencia — hover states, transicoes, feedback visual, animacoes de entrada e pequenos detalhes que transformam uma pagina estatica em uma experiencia viva. Implementacao com Framer Motion para estados interativos e GSAP para scroll-driven microinteracoes.

## Quando Usar
- Ao refinar a camada interativa de qualquer experiencia
- Quando o material esta funcional mas precisa de "vida"
- Ao decidir timings, easings, springs e feedback visual

## Como Pensar
- Microinteracoes sao a linguagem corporal da interface
- Cada transicao comunica algo: hierarquia, relacao, feedback
- O timing e tudo: rapido demais parece quebrado, lento demais parece travado
- A melhor microinteracao e a que o usuario sente mas nao percebe conscientemente
- Consistencia e mais importante que criatividade em microinteracoes

## Boas Praticas
- Hover states: `whileHover` com translateY(-2 a -4px) via Framer Motion spring
- Tap feedback: `whileTap` com scale(0.97-0.98) via Framer Motion
- Transicoes de conteudo: `AnimatePresence mode="wait"` para troca suave
- Scroll reveals: GSAP ScrollTrigger com stagger para sequencia narrativa
- Focus states visiveis e elegantes (ring com cor accent)
- Loading states com Framer Motion `animate` quando ha delay perceptivel
- Active states com feedback imediato (spring stiffness alta)

## Erros a Evitar
- Animacoes que demoram mais de 500ms para elementos pequenos
- Bouncing effects (springs com damping < 15 parecem infantis)
- Animacoes de entrada que bloqueiam leitura
- Inconsistencia de timing entre elementos similares
- Ausencia de `prefers-reduced-motion`
- Overuse — quando tudo anima, nada se destaca

## Criterio de Excelencia
A interface deve parecer "respirar" — tudo responde com naturalidade ao toque e ao scroll. O usuario deve sentir que esta interagindo com algo vivo e polido, sem conseguir apontar exatamente por que.

---

## Tabela de Referencia de Timing

Valores canonicos para cada tipo de microinteracao. Nao invente — use esta tabela.

| Interacao | Ferramenta | Duracao/Config | Transform/Valor |
|---|---|---|---|
| **Hover lift (card)** | Framer Motion `whileHover` | `spring({ stiffness: 400, damping: 25 })` | `y: -3` + border-color shift |
| **Hover lift (botao)** | Framer Motion `whileHover` | `spring({ stiffness: 500, damping: 30 })` | `y: -1` + background lighten |
| **Active/press** | Framer Motion `whileTap` | `spring({ stiffness: 600, damping: 30 })` | `scale: 0.97` |
| **Tab switch (conteudo)** | Framer Motion `AnimatePresence` | `duration: 0.25, ease: 'easeOut'` | `opacity: 0→1, y: 8→0` |
| **Tab indicator** | Framer Motion `layoutId` | `spring({ stiffness: 300, damping: 30 })` | Slider automatico via layout animation |
| **Accordion abrir** | Framer Motion `AnimatePresence` | `duration: 0.35, ease: 'easeOut'` | `opacity: 0→1, height: 0→auto` |
| **Accordion fechar** | Framer Motion `AnimatePresence` | `duration: 0.25, ease: 'easeIn'` | `opacity: 1→0, height: auto→0` |
| **Scroll reveal (fade up)** | GSAP ScrollTrigger | `duration: 0.6, ease: 'power2.out'` | `y: 30→0, opacity: 0→1` |
| **Scroll reveal (stagger)** | GSAP ScrollTrigger | `stagger: 0.08` | Cada item atrasa 80ms (max 5 itens) |
| **Contador numerico** | GSAP | `duration: 1.5, ease: 'power3.out'` | `textContent: 0→valor, snap: 1` |
| **Focus ring** | Tailwind CSS | `transition-duration: 150ms` | `ring-2 ring-accent/40` via `focus-visible:` |
| **Tooltip aparecer** | Framer Motion `AnimatePresence` | `duration: 0.15, ease: 'easeOut'` | `opacity: 0→1, y: 4→0` (delay 200ms antes de mostrar) |

---

## Framer Motion — Padroes de Microinteracao

### Card com Hover Premium

```tsx
import { motion } from 'framer-motion';

export function Card({ children }: Props) {
  return (
    <motion.div
      className="bg-surface border border-border rounded-xl p-8"
      whileHover={{
        y: -3,
        borderColor: 'rgba(255,255,255,0.15)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
}
```

### Tab Indicator com Layout Animation

```tsx
export function TabGroup({ tabs, active, onChange }: Props) {
  return (
    <div role="tablist" className="relative flex gap-1 bg-elevated rounded-lg p-1">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={active === i}
          onClick={() => onChange(i)}
          className="relative z-10 px-5 py-2.5 text-sm"
        >
          {active === i && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 bg-surface rounded-md"
              style={{ zIndex: -1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

### Tooltip com Delay

```tsx
export function Tooltip({ content, children }: Props) {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleEnter = () => {
    timeoutRef.current = setTimeout(() => setShow(true), 200); // 200ms delay
  };
  const handleLeave = () => {
    clearTimeout(timeoutRef.current);
    setShow(false);
  };

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="relative">
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-elevated text-sm rounded-md"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## GSAP — Microinteracoes Scroll-Driven

### Scroll Reveal com Stagger

```tsx
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function RevealGroup({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(
      ref.current?.querySelectorAll('.reveal-item') || []
    );
    gsap.set(items, { opacity: 0, y: 30 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: ref });

  return <div ref={ref}>{children}</div>;
}
```

### Contador Animado

```tsx
export function AnimatedStat({ value, suffix = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      textContent: 0,
      duration: 1.5,
      ease: 'power3.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
      },
    });
  }, { scope: ref });

  return (
    <span className="font-mono text-accent">
      <span ref={ref} data-value={value}>{value}</span>
      {suffix}
    </span>
  );
}
```

---

## Spring Physics — Referencia Rapida

| Tipo de Resposta | stiffness | damping | mass | Sensacao |
|------------------|-----------|---------|------|----------|
| Snap instantaneo | 500-600 | 30 | 0.5 | Preciso, mecanico |
| Feedback rapido | 400 | 25 | 0.8 | Responsivo, natural |
| Slide suave | 300 | 30 | 1 | Elegante, fluido |
| Bounce sutil | 200 | 20 | 1 | Organico, playful (com contencao) |
| Drift lento | 100 | 30 | 1.5 | Relaxado, ambiental |

**Regra:** Na duvida, use `stiffness: 400, damping: 25`. E o padrao "responsivo sem ser agressivo".

**Nunca:** `damping < 15` (bounce excessivo), `stiffness > 800` (parece sem animacao), `mass > 2` (pesado demais).

---

## Acessibilidade

### prefers-reduced-motion

```tsx
// Hook
import { useReducedMotion } from 'framer-motion';

export function Card({ children }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      whileHover={reduced ? {} : { y: -3 }}
      whileTap={reduced ? {} : { scale: 0.98 }}
      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}
```

Para GSAP scroll reveals com reduced motion:
```tsx
useGSAP(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Mostra tudo imediatamente
    gsap.set('.reveal-item', { opacity: 1, y: 0 });
    return;
  }
  // ... animacoes normais
}, { scope: ref });
```

### Focus Visible

```tsx
// Tailwind classes para focus states
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
```

Todos os elementos interativos (botoes, tabs, cards clicaveis, links) DEVEM ter focus visible. Nunca `outline: none` sem substituto.

---

## Checklist de Consistencia

Antes de finalizar as microinteracoes:
- [ ] Todos os cards usam o mesmo `whileHover` e `whileTap`
- [ ] Todos os botoes usam o mesmo spring config
- [ ] Tabs usam `layoutId` para indicator animado
- [ ] Scroll reveals usam GSAP com stagger consistente (0.08s)
- [ ] `prefers-reduced-motion` tratado em Framer Motion E GSAP
- [ ] Nenhuma animacao bloqueia interacao (usuario pode clicar durante transicao)
- [ ] Focus visible em todos os elementos interativos
- [ ] Springs nao tem bounce excessivo (damping >= 20)
- [ ] Contadores numericos usam GSAP com ScrollTrigger

---

## Diagnostico Rapido

1. **Todos os elementos interativos tem `whileHover`/`whileTap` ou hover CSS?** Se nao, ha elementos que parecem "mortos".
2. **O material respeita `prefers-reduced-motion`?** Se nao, falha de acessibilidade.
3. **Os springs estao dentro da faixa stiffness 200-600, damping 20-30?** Se nao, a sensacao e errada.
4. **Existe consistencia entre elementos do mesmo tipo?** Se cards diferentes tem configs diferentes, parece descuidado.
5. **As animacoes scroll-driven usam GSAP (nao Framer Motion)?** GSAP e otimizado para scroll. Framer Motion e para estados.
