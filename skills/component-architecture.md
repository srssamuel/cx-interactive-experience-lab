# Skill: Component Architecture

## Origem
Padrões de shadcn/ui (50K+ stars) e Magic UI (20K+ stars) — arquitetura de componentes copy-paste-ready com composição, tipagem e extensibilidade.

## Quando Usar
- Ao criar novos componentes
- Ao decidir como estruturar props e variantes
- Ao compor componentes existentes em combinações novas
- Ao refatorar componentes existentes

---

## Princípios de Arquitetura

### 1. Composição sobre Configuração
```tsx
// ✅ Bom — componível
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>

// ❌ Ruim — configurável demais
<Card title="Título" content="Conteúdo" icon="star" variant="premium" />
```

### 2. Design Tokens via CSS Custom Properties
```tsx
// ✅ Bom — respeita o tema
className="bg-[var(--surface)] text-[var(--text)]"

// ❌ Ruim — hardcoded
className="bg-gray-900 text-white"
```

### 3. cn() para Composição de Classes
```tsx
import { cn } from "@/lib/cn";

function Component({ className, ...props }) {
  return <div className={cn("base-styles", className)} {...props} />;
}
```

### 4. Tipagem Forte
```tsx
interface Props {
  variant: "default" | "surface" | "accent";  // Union types
  children: ReactNode;                         // Sempre ReactNode
  className?: string;                          // Sempre opcional
  id?: string;                                 // Para scroll targets
}
```

---

## Estrutura de Componentes

```
src/components/
├── design-system/        → Primitivos: Typography, Section, Card, BentoGrid
├── interactive/          → SpotlightCard, TiltCard, MagneticElement, Tabs, Accordion
├── navigation/           → ChapterNav, ModeIndicator, PresentationShell
├── motion/               → ScrollReveal, GSAPReveal, TextReveal, BlurReveal
├── workshop/             → WorkshopBlock, WorkshopLayout, DiscussionPrompt
├── cinematic/            → ParticleField, GlowingOrb, ImageHero, HeadlineSlide
└── three/                → Componentes Three.js (lazy loaded)
```

### Regras por Categoria

| Categoria | SSR | Lazy Load | GSAP | Framer Motion | Three.js |
|-----------|-----|-----------|------|---------------|----------|
| design-system | ✅ | ❌ | ❌ | ❌ | ❌ |
| interactive | ✅ | ❌ | ❌ | ✅ | ❌ |
| navigation | ✅ | ❌ | ❌ | ✅ | ❌ |
| motion | ❌ (client) | ❌ | ✅ | ✅ | ❌ |
| workshop | ❌ (client) | ❌ | ❌ | ✅ | ❌ |
| cinematic | ❌ (client) | ✅ (3D) | ✅ | ❌ | ✅ (some) |
| three | ❌ (client) | ✅ always | ❌ | ❌ | ✅ |

---

## Padrões de Implementação

### Componente com Variantes (shadcn pattern)
```tsx
const variants = {
  default: "bg-[var(--bg)]",
  surface: "bg-[var(--surface)]",
  accent: "bg-[var(--accent-primary)]/[0.03]",
};

interface Props {
  variant?: keyof typeof variants;
}

export function Component({ variant = "default", className, children }: Props) {
  return <div className={cn(variants[variant], className)}>{children}</div>;
}
```

### Componente com Forwarded Ref
```tsx
export const Component = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => {
    return <div ref={ref} className={cn("base", className)} {...props}>{children}</div>;
  }
);
Component.displayName = "Component";
```

### Lazy Loading de Componentes 3D
```tsx
const ParticleField = dynamic(
  () => import("@/components/cinematic/particle-field").then(mod => mod.ParticleField),
  { ssr: false }
);
```

### Barrel Exports
Cada categoria tem `index.ts`:
```tsx
export { SpotlightCard } from "./spotlight-card";
export { TiltCard } from "./tilt-card";
```

---

## Catálogo de Componentes Disponíveis

### Design System
- DisplayHeading, SectionHeading, SubHeading, BodyText
- Overline, StatNumber, Provocation, AccentText
- PullQuote, SplitContent, FullBleedText, EvidenceBlock
- Section, Container, HeroSection, ChapterDivider
- Card, ExpandableCard, ComparisonCard, NumberedCard
- BentoGrid, BentoItem

### Interactive
- Tabs (default, pills, underline)
- Accordion
- Timeline
- ComparisonSlider
- SpotlightCard
- TiltCard
- MagneticElement
- GlowBorder

### Motion
- ScrollReveal, StaggerGroup, ParallaxLayer
- GSAPReveal, GSAPStaggerReveal, GSAPParallax, GSAPCounter
- TextReveal, BlurReveal

### Cinematic
- ParticleField
- GlowingOrb
- ImageHero, ImageSplit, FloatingImage
- HeadlineSlide, DataSpectacle, ChapterTransition, GrainOverlay

### Workshop
- WorkshopLayout, WorkshopBlock
- DiscussionPrompt, PausePoint
