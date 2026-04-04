# Skill: Spatial Design & 3D

## Origem
Padrões de Linear, Vercel, Stripe e repositórios como react-three-fiber ecosystem — referências mundiais em design tech premium com profundidade espacial.

## Quando Usar
- Ao criar elementos 3D (orbs, campos, partículas)
- Ao planejar profundidade visual (layers, parallax, blur atmosférico)
- Ao decidir onde usar 3D vs pseudo-3D vs CSS puro
- Ao criar ambientação visual tecnológica

---

## Filosofia Espacial

### Três Planos
1. **Background (Z-0)** — Grid, partículas distantes, gradientes atmosféricos. Sempre sutil (opacity < 0.08).
2. **Midground (Z-1)** — Conteúdo principal, cards, texto. Onde a atenção deve estar.
3. **Foreground (Z-2)** — Overlays, grain texture, glow effects. Sutil, nunca bloqueando conteúdo.

### Regra de Ouro
3D existe para criar sensação, não para demonstrar tecnologia. Se o efeito distrai do conteúdo, remova.

---

## Componentes 3D Disponíveis

### GlowingOrb (Three.js + Custom Shaders)
Esfera com fresnel, noise procedural, glow atmosférico e anéis orbitais.
- **Uso**: Hero do portal, ponto focal central
- **Cores**: Definidas pelos shaders (cyan/deep blue)
- **Performance**: ~60fps com dpr [1,2]
```tsx
<GlowingOrb className="h-[700px] w-[700px]" />
```

### ParticleField (Three.js + PointMaterial)
Campo de partículas com rotação lenta e blending aditivo.
- **Uso**: Background de seções tecnológicas
- **Props**: count (100-500), color (hex)
- **Performance**: count < 300 para mobile
```tsx
<ParticleField count={200} color="#0EA5E9" />
```

---

## Pseudo-3D (CSS Puro)

### TiltCard
Perspectiva 3D que segue o mouse. Sem Three.js — CSS transform puro.
```tsx
<TiltCard maxTilt={8} glare={true} scale={1.02}>
  <CardContent />
</TiltCard>
```

### Parallax Layers (GSAP ScrollTrigger)
Múltiplas camadas com velocidades diferentes no scroll.
```tsx
<GSAPParallax speed={0.3}>  // Background layer
<GSAPParallax speed={0.1}>  // Midground layer
```

### Depth Blur
Elementos distantes ficam levemente borrados.
```css
.depth-far { filter: blur(1px); opacity: 0.6; }
.depth-mid { filter: blur(0px); opacity: 1; }
```

---

## Efeitos de Luz

### Radial Glow
```css
bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.04)_0%,transparent_60%)]
```
- Usar atrás de números grandes (DataSpectacle)
- Usar no centro do hero
- Opacity máxima: 0.08

### Volumetric Light Cones
```css
background: conic-gradient(from 180deg at 50% -10%, transparent 45%, rgba(14,165,233,0.03) 50%, transparent 55%);
```
- Usar como acento em seções-chave
- Sempre com mask-image para fade nas bordas

### Glow Shadow
```css
shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.08)]
```
- Usar em cards ativos, botões hover, elementos de destaque

---

## Regras de Performance 3D

1. **Lazy load** todos os componentes Three.js com `next/dynamic`
2. **dpr**: máximo [1, 2] — nunca usar devicePixelRatio nativo
3. **Partículas**: máximo 500 no desktop, 200 no mobile
4. **Fallback**: Sempre ter fallback 2D para dispositivos sem WebGL
5. **prefers-reduced-motion**: Pausar rotações e animações
6. **Canvas**: `antialias: true` apenas para geometria, `false` para partículas

---

## Quando NÃO Usar 3D

- Seções de texto puro (workshops, leitura longa)
- Mobile abaixo de 768px (substituir por gradientes CSS)
- Quando o conteúdo já tem imagem rica (foto hiper-realista)
- Dentro de tabs, accordions ou conteúdo dinâmico

---

## Combinações por Tipo de Seção

| Tipo de Seção | Profundidade |
|---------------|-------------|
| Hero | ParticleField + GlowingOrb + animated-grid + radial glow |
| Chapter Transition | Grain texture + gradient divider |
| Data Spectacle | Radial glow + glow shadow atrás do número |
| Image Split | Parallax na imagem + gradient mask |
| Cards Grid | SpotlightCard (pseudo-3D, sem Three.js) |
| Fechamento | ImageHero com parallax + grain + gradient overlay |
