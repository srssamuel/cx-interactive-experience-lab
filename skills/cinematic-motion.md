# Skill: Cinematic Motion

## Objetivo
Projetar e implementar animacoes que funcionam como narrativa visual. Cada movimento tem intencao — revelar, enfatizar, guiar, surpreender. Motion nao e decoracao; e a linguagem temporal do design.

## Quando Usar
- Ao definir como elementos entram, saem e transicionam
- Ao implementar scroll-driven animations com GSAP ScrollTrigger
- Ao criar transicoes entre estados com Framer Motion
- Ao integrar cenas Three.js como background reativo
- Ao configurar smooth scroll com Lenis

---

## Filosofia de Motion

### Motion como Narrativa
Animacao comunica hierarquia temporal. O que aparece primeiro e mais importante. O que aparece depois e consequencia. O que aparece junto e relacionado.

### Tres Principios

1. **Intencao** — Toda animacao responde a pergunta "por que isso se move?". Se nao ha resposta, remova.
2. **Fisicalidade** — Elementos tem peso e inercia. Nada para abruptamente. Nada comeca instantaneamente. Ease-out para entradas (desacelera no destino). Ease-in para saidas (acelera ao sair).
3. **Contencao** — Menos e mais. Um movimento bem executado vale mais que dez mediocres. Quando tudo anima, nada se destaca.

---

## Tabela de Referencia de Timing

Valores canonicos. Nao invente — use esta tabela.

| Tipo | Duracao | Easing | Quando |
|------|---------|--------|--------|
| Hover (lift/cor) | 150ms | `ease-out` | Resposta a mouse over |
| Active/press | 100ms | `ease-in` | Feedback de clique |
| Focus ring | 150ms | `ease-out` | Foco via teclado |
| Tab switch (conteudo) | 250ms | `ease-in-out` | Troca de conteudo em tabs |
| Tab indicator | 300ms | `spring(300, 30)` | Slider de tab ativa |
| Accordion | 350ms | `ease-out` | Expandir/colapsar |
| Entrada (fade+translate) | 500-800ms | `power2.out` | Elementos entrando na viewport |
| Stagger entre itens | 60-100ms | — | Delay progressivo em listas |
| Contador numerico | 1500ms | `power3.out` | Numeros animando de 0 ao valor |
| Scroll parallax | Contínuo | Linear | Camadas com velocidades diferentes |
| Transicao de modo | 300ms | `ease-out` | Troca entre leitura/apresentacao |
| Hero title stagger | 80ms por palavra | `power2.out` | Titulo aparecendo palavra por palavra |

---

## GSAP ScrollTrigger — Padroes para React

### Setup Basico (useGSAP)

```typescript
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // useGSAP faz cleanup automatico — nunca use useEffect para GSAP
    gsap.from('.reveal-item', {
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

  return <div ref={containerRef}>...</div>;
}
```

### Stagger Group (Padrao mais comum)

```typescript
useGSAP(() => {
  const cards = gsap.utils.toArray<HTMLElement>('.card-item');
  gsap.from(cards, {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 75%',
    },
  });
}, { scope: containerRef });
```

### Parallax de Camadas

```typescript
useGSAP(() => {
  // Camada de fundo se move mais devagar
  gsap.to('.parallax-bg', {
    y: -100,
    ease: 'none',
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true, // Vinculado ao scroll
    },
  });

  // Camada de frente se move mais rapido
  gsap.to('.parallax-fg', {
    y: -200,
    ease: 'none',
    scrollTrigger: {
      trigger: containerRef.current,
      scrub: true,
    },
  });
}, { scope: containerRef });
```

### Pinning (Secao fixa durante scroll)

```typescript
useGSAP(() => {
  ScrollTrigger.create({
    trigger: containerRef.current,
    start: 'top top',
    end: '+=200%', // Fica pinado por 2x a altura da viewport
    pin: true,
    onUpdate: (self) => {
      // self.progress vai de 0 a 1
      // Use para animar conteudo dentro da secao pinada
      gsap.to('.progress-bar', { scaleX: self.progress });
    },
  });
}, { scope: containerRef });
```

### Contador Numerico

```typescript
useGSAP(() => {
  const stats = gsap.utils.toArray<HTMLElement>('.stat-number');
  stats.forEach((el) => {
    const target = parseFloat(el.dataset.value || '0');
    gsap.from(el, {
      textContent: 0,
      duration: 1.5,
      ease: 'power3.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      },
    });
  });
}, { scope: containerRef });
```

---

## Framer Motion — Padroes para React

### Transicoes de Estado (AnimatePresence)

```tsx
import { AnimatePresence, motion } from 'framer-motion';

// Troca de conteudo em tabs
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    {tabContent[activeTab]}
  </motion.div>
</AnimatePresence>
```

### Hover e Tap (Microinteracoes)

```tsx
<motion.div
  whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.15)' }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
  className="card"
>
  {children}
</motion.div>
```

### Spring Physics — Referencia

| Tipo | stiffness | damping | mass | Quando |
|------|-----------|---------|------|--------|
| Snap rapido | 400 | 25 | 0.5 | Hover, tap feedback |
| Slide suave | 300 | 30 | 1 | Tab indicator, layout shifts |
| Bounce sutil | 200 | 20 | 1 | Cards expandindo, modais |
| Drift lento | 100 | 30 | 1.5 | Background elements, decorativos |

### Layout Animations

```tsx
// Card que expande para revelar conteudo
<motion.div layout layoutId={`card-${id}`}>
  <h3>{title}</h3>
  <AnimatePresence>
    {isExpanded && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {expandedContent}
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>
```

---

## Hero Animations — Receita Completa

```typescript
// Sequencia de entrada do hero
useGSAP(() => {
  const tl = gsap.timeline({ delay: 0.3 });

  tl.from('.hero-overline', {
    y: 20, opacity: 0, duration: 0.5, ease: 'power2.out'
  })
  .from('.hero-title .word', {
    y: 40, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out'
  }, '-=0.2')
  .from('.hero-subtitle', {
    y: 20, opacity: 0, duration: 0.5, ease: 'power2.out'
  }, '-=0.3')
  .from('.hero-stat', {
    y: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out'
  }, '-=0.2')
  .from('.hero-cta', {
    y: 20, opacity: 0, duration: 0.4, ease: 'power2.out'
  }, '-=0.2');
}, { scope: heroRef });
```

---

## Three.js — Cenas Ambientes

### Quando Usar Three.js
- **Sim:** Particle fields como background de hero, data visualization 3D, objetos reativos ao scroll
- **Nao:** Decoracao sem proposito, cenas complexas que prejudicam performance, mobile sem fallback

### Padrao de Integracao

```tsx
// SEMPRE dynamic import com ssr: false
const ParticleField = dynamic(
  () => import('./three/ParticleField'),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-bg" /> }
);

// No componente
<div className="relative h-screen">
  <Suspense fallback={<div className="absolute inset-0 bg-bg" />}>
    <ParticleField
      particleCount={isMobile ? 500 : 2000}
      reactToScroll={true}
      color={accentColor}
    />
  </Suspense>
  <div className="relative z-10">{heroContent}</div>
</div>
```

### Fallback Obrigatorio
Toda cena Three.js deve ter fallback CSS (gradiente sutil ou cor solida) para:
- Dispositivos moveis de baixa performance
- Navegadores sem WebGL
- `prefers-reduced-motion: reduce`

---

## Lenis — Configuracao de Smooth Scroll

```typescript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  touchMultiplier: 2,     // Sensibilidade no touch
  infinite: false,
});

// OBRIGATORIO: sincronizar com GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

**Desativar Lenis:** Em modo apresentacao (navegacao por capitulos, nao scroll livre).

---

## Performance — Regras de Ouro

1. **Apenas transforms e opacity** — Nunca anime `width`, `height`, `top`, `left`, `margin`, `padding`. Sempre `transform: translate/scale` e `opacity`.
2. **will-change com parcimonia** — Adicione `will-change: transform` apenas em elementos que VÃO animar, remova depois.
3. **GPU acceleration** — `transform: translateZ(0)` ou `translate3d(0,0,0)` para forcar composicao na GPU.
4. **Passive listeners** — Todos os scroll/touch listeners devem ser `{ passive: true }`.
5. **Debounce resize** — Nunca recalcule ScrollTrigger em cada pixel de resize. Debounce de 250ms.
6. **Three.js budget** — Maximo 2000 particulas no mobile, 5000 no desktop. Sempre verificar FPS.

---

## prefers-reduced-motion

```typescript
// Hook global
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

// Aplicacao
// - GSAP: skip animations (set final state immediately)
// - Framer Motion: transition={{ duration: 0 }}
// - Three.js: render static frame, no animation loop
// - Lenis: disable smooth scroll (native scroll)
// - Counters: show final number immediately
```

---

## Anti-Patterns

1. **Animacao sem proposito** — "Fica bonito" nao e motivo. Qual informacao o movimento comunica?
2. **Bounce/elastic exagerado** — Springs com damping < 15 parecem brinquedo. Use damping 20-30.
3. **Parallax agressivo** — Velocidades muito diferentes entre camadas causam nausea. Maximo 2x de diferenca.
4. **Tudo anima ao mesmo tempo** — Stagger existe por um motivo. O olho precisa de sequencia.
5. **Animacao bloqueia interacao** — O usuario SEMPRE pode clicar durante uma animacao. Nunca use `pointer-events: none` durante transicoes.
6. **useEffect para GSAP** — Causa memory leaks. Sempre `useGSAP` do `@gsap/react`.
7. **ScrollTrigger sem cleanup** — `useGSAP` faz isso automaticamente. Se por algum motivo usar `useEffect`, chame `ScrollTrigger.getAll().forEach(t => t.kill())` no cleanup.
