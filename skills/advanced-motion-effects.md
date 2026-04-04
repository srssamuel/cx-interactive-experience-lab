# Skill: Advanced Motion Effects

## Origem
Padrões extraídos de Magic UI (20K+ stars), Motion Primitives e Aceternity UI — os melhores repositórios open source de componentes animados para React/Next.js.

## Quando Usar
- Ao criar qualquer animação de entrada, saída ou interação
- Ao planejar scroll-driven effects
- Ao decidir entre GSAP vs Framer Motion para cada caso
- Ao criar micro-interações em hover, click e focus

---

## Regras de Decisão: GSAP vs Framer Motion

| Caso de Uso | Ferramenta | Por quê |
|-------------|------------|---------|
| Scroll-driven animation | GSAP ScrollTrigger | Controle de scrub, pin, timeline |
| Mount/unmount transition | Framer Motion AnimatePresence | Orquestração React-native |
| Hover/gesture | Framer Motion | whileHover, whileTap |
| Sequência complexa (timeline) | GSAP | Timeline, stagger, ease control |
| Número animado | GSAP | fromTo com snap |
| Parallax camadas | GSAP ScrollTrigger | Scrub com múltiplos triggers |
| Physics-based spring | Framer Motion useSpring | Damping/stiffness control |
| Texto letra por letra | GSAP SplitText pattern | Stagger por char |

---

## Catálogo de Efeitos Disponíveis

### 1. TextReveal (GSAP)
Texto aparece letra por letra com rotateX + opacity + translateY.
```
<TextReveal text="Headline aqui" tag="h2" stagger={0.03} />
```
Usar em: headlines de capítulo, statements de abertura.

### 2. BlurReveal (GSAP)
Conteúdo vai de blur(12px) para blur(0px) com fade in.
```
<BlurReveal><Provocation>Texto</Provocation></BlurReveal>
```
Usar em: pull quotes, provocações, momentos de silêncio.

### 3. SpotlightCard (CSS + React)
Card com glow que segue o cursor do mouse.
```
<SpotlightCard spotlightColor="rgba(14,165,233,0.08)">
```
Usar em: cards interativos, dimensões, features.

### 4. TiltCard (CSS Transform)
Card 3D que inclina na direção do mouse com perspectiva e glare.
```
<TiltCard maxTilt={8} glare={true} scale={1.02}>
```
Usar em: cards de destaque, previews, showcase.

### 5. MagneticElement (Framer Motion Spring)
Elemento "atrai" o cursor com efeito gravitacional.
```
<MagneticElement strength={0.3}><button>CTA</button></MagneticElement>
```
Usar em: botões, badges, CTAs, elementos de navegação.

### 6. GlowBorder (CSS Conic Gradient)
Border com gradiente que gira continuamente ao redor do elemento.
```
<GlowBorder duration={4} color="var(--accent-primary)">
```
Usar em: cards premium, CTAs destacados, elementos de importância máxima.

### 7. ScrollReveal (Framer Motion)
Fade + translate com IntersectionObserver.
```
<ScrollReveal direction="left" delay={0.3}>
```
Usar em: qualquer conteúdo que entra na viewport.

### 8. GSAPStaggerReveal (GSAP)
Lista de elementos com stagger sequencial.
```
<GSAPStaggerReveal stagger={0.08}>
```
Usar em: listas, grids, itens sequenciais.

### 9. Animated Grid Background (CSS)
Grid com linhas sutis e mask radial que foca o centro.
```
<div className="animated-grid" />
```
Usar em: backgrounds de hero, seções tecnológicas.

### 10. ParticleField (Three.js)
Campo de partículas 3D com rotação lenta.
```
<ParticleField count={200} color="#0EA5E9" />
```
Usar em: hero, backgrounds de seções-chave.

---

## Regras de Motion

### Timing
- **Entrada**: 500-800ms, ease-out
- **Hover**: 150-200ms, ease-out
- **Spring**: damping 15-25, stiffness 100-200
- **Stagger**: 60-100ms entre elementos
- **Scroll scrub**: linear (sem ease)

### Proibições
- Nunca: bounce, shake, spin decorativo
- Nunca: parallax agressivo (> 100px de deslocamento)
- Nunca: animação que compete com conteúdo
- Nunca: motion em mais de 3 propriedades simultâneas
- Sempre: respeitar prefers-reduced-motion

### Hierarquia de Impacto
1. **TextReveal** — máximo impacto, usar 1-2x por experiência
2. **BlurReveal** — alto impacto, usar em momentos de provocação
3. **SpotlightCard** — médio impacto, usar em grids interativos
4. **ScrollReveal** — impacto base, usar em todo conteúdo

---

## Combinações Recomendadas

| Seção | Efeitos |
|-------|---------|
| Hero | TextReveal + ParticleField + GlowingOrb |
| Chapter Transition | GSAPReveal + stagger em número + título |
| Data Spectacle | GSAPCounter + radial glow + BlurReveal |
| Cards Grid | SpotlightCard + GSAPStaggerReveal |
| Pull Quote | BlurReveal + HeadlineSlide |
| Fechamento | TextReveal + ImageHero + ScrollReveal |
| Workshop Block | ScrollReveal + timer animation |
