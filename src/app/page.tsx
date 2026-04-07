'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LazyParticleField } from '@/components/three/lazy-particle-field'
import { BarChart3, HeartHandshake, Database, BrainCircuit, ArrowRight, Zap, Layers, Target } from 'lucide-react'

import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { TextReveal } from '@/components/motion/text-reveal'
import { Spotlight } from '@/components/effects/spotlight'
import { MagneticButton } from '@/components/effects/magnetic-button'
import { MovingBorder } from '@/components/effects/moving-border'
import { GradientMesh } from '@/components/effects/gradient-mesh'
import { FloatingElements } from '@/components/effects/floating-elements'
import { BackgroundBeams } from '@/components/effects/background-beams'
import { BorderRevealCard } from '@/components/effects/border-reveal-card'
import { AmbientBackground } from '@/components/cinematic/ambient-background'

const ease = [0.16, 1, 0.3, 1] as const

export default function PortalPage() {
  return (
    <main className="relative overflow-hidden">
      {/* =========================================
          SECTION 1 — FULL VIEWPORT HERO
          ========================================= */}
      <Spotlight className="relative min-h-[100dvh] flex items-center" color="rgba(200, 135, 58, 0.08)" size={700}>
        {/* Backgrounds — layered */}
        <GradientMesh opacity={0.15} />
        <div className="absolute inset-0 z-0">
          <LazyParticleField color="#C8873A" count={120} bloom interactive />
        </div>
        <FloatingElements count={6} color="var(--accent-amber)" />

        {/* Content — LEFT-aligned, asymmetric */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            {/* Overline */}
            <motion.span
              className="block font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              CX Experience Lab
            </motion.span>

            {/* Headline — two lines, different treatments */}
            <motion.h1
              className="font-display leading-[0.95]"
              style={{ fontSize: 'clamp(3.2rem, 8vw, 7rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease }}
            >
              <span className="block text-shimmer">
                A Convergencia
              </span>
              <span className="block text-gradient-amber">
                Invisivel
              </span>
            </motion.h1>

            {/* Thesis */}
            <motion.p
              className="mt-10 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease }}
            >
              CX, CS, Dados e IA operam como silos. Mas as empresas que vencem
              ja os fundiram num unico sistema nervoso. Esta experiencia revela
              o modelo que ninguem esta documentando.
            </motion.p>

            {/* Stat strip */}
            <motion.div
              className="mt-12 flex items-center gap-6 text-sm font-mono text-[var(--text-muted)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease }}
            >
              <span>22 capitulos</span>
              <span className="w-px h-4 bg-[var(--text-muted)] opacity-30" />
              <span>90 min</span>
              <span className="w-px h-4 bg-[var(--text-muted)] opacity-30" />
              <span>4 dimensoes</span>
            </motion.div>

            {/* CTA — Reinforced with background + glow + larger size */}
            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease }}
            >
              <MagneticButton strength={0.3} radius={120}>
                <Link
                  href="/experiencias/convergencia-invisivel"
                  className="group relative inline-flex items-center gap-4 px-10 py-5 text-base font-mono uppercase tracking-[0.12em] text-[var(--text-primary)] bg-[rgba(200,135,58,0.08)] border border-[var(--accent-amber)]/30 hover:bg-[rgba(200,135,58,0.15)] hover:border-[var(--accent-amber)] rounded-sm transition-all duration-500 cta-glow"
                >
                  <span className="relative z-10">Iniciar Experiencia</span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-[var(--accent-amber)] transition-transform duration-500 group-hover:translate-x-1" />
                  {/* Glow pulse on idle */}
                  <span className="absolute inset-0 rounded-sm opacity-40 group-hover:opacity-70 transition-opacity duration-700 shadow-[0_0_30px_rgba(200,135,58,0.2)] group-hover:shadow-[0_0_50px_rgba(200,135,58,0.35)]" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <span className="block w-px h-12 bg-gradient-to-b from-transparent to-[var(--text-muted)]" />
        </motion.div>
      </Spotlight>

      {/* =========================================
          SECTION 2 — FOUR DIMENSIONS — ASYMMETRIC
          ========================================= */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <AmbientBackground variant="mesh-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          {/* Section heading */}
          <div className="mb-20 max-w-xl">
            <TextReveal
              tag="h2"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-[var(--text-primary)]"
            >
              Quatro forcas. Um sistema.
            </TextReveal>
          </div>

          {/* === Card 1: CX — Full Width Hero Card === */}
          <ScrollReveal variant="scale" delay={0}>
            <BorderRevealCard glowColor="rgba(200, 135, 58, 0.4)" className="mb-6 lg:mb-8 rounded-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
                <div className="flex-shrink-0 mb-8 lg:mb-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent-amber-soft)] flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-[var(--accent-amber)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-amber)] opacity-70">CX</span>
                  </div>
                  <span className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--accent-amber)] leading-none">
                    $3.8T
                  </span>
                  <span className="block font-mono text-sm text-[var(--text-muted)] mt-2 tracking-wider">at risk</span>
                </div>
                <div className="lg:border-l lg:border-[var(--border-subtle)] lg:pl-16 flex-1">
                  <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-4">
                    Customer Experience
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg text-base">
                    O custo global de experiencias que falham. Cada ponto de friccao e receita evaporando.
                    Empresas que dominam CX crescem 1.7x mais rapido que concorrentes — nao por sorte, mas por sistema.
                  </p>
                </div>
              </div>
            </BorderRevealCard>
          </ScrollReveal>

          {/* === Cards 2 & 3: CS + Data — Side by Side === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {/* CS Card — Timeline style */}
            <ScrollReveal variant="blur" delay={0.1}>
              <MovingBorder borderColor="var(--accent-green)" duration={6} borderWidth={1} className="rounded-sm h-full">
                <div className="glass relative p-8 md:p-10 rounded-sm min-h-[280px] flex flex-col group hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-green-soft)] flex items-center justify-center">
                      <HeartHandshake className="w-5 h-5 text-[var(--accent-green)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-green)] opacity-70">CS</span>
                  </div>

                  {/* Timeline visual */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-sm text-[var(--text-muted)]">NRR</span>
                    <div className="flex-1 h-px bg-[var(--border-subtle)] relative">
                      <div className="absolute left-0 top-0 h-px w-1/2 bg-[var(--accent-green)] opacity-60" />
                      <div className="absolute left-1/2 -top-1 w-2 h-2 rounded-full bg-[var(--accent-green)]" />
                    </div>
                    <span className="font-display text-2xl text-[var(--accent-green)]">120%</span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl text-[var(--text-primary)] mb-3">
                    Customer Success
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mt-auto">
                    Net Revenue Retention como motor de crescimento. Expansao supera aquisicao quando o sistema funciona.
                  </p>

                  <div
                    className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(74, 124, 92, 0.06), transparent 70%)' }}
                  />
                </div>
              </MovingBorder>
            </ScrollReveal>

            {/* Data Card — Dashboard preview style */}
            <ScrollReveal variant="slide-left" delay={0.2}>
              <MovingBorder borderColor="var(--accent-blue)" duration={7} borderWidth={1} className="rounded-sm h-full">
                <div className="glass relative p-8 md:p-10 rounded-sm min-h-[280px] flex flex-col group hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(91,143,185,0.15)] flex items-center justify-center">
                      <Database className="w-5 h-5 text-[var(--accent-blue)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-blue)] opacity-70">Data</span>
                  </div>

                  {/* Mini bar chart visual */}
                  <div className="flex items-end gap-2 mb-6 h-16">
                    {[30, 55, 45, 72, 60, 85, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-[var(--accent-blue)] transition-all duration-500"
                        style={{ height: `${h}%`, opacity: 0.2 + (h / 100) * 0.6 }}
                      />
                    ))}
                  </div>

                  <h3 className="font-display text-xl md:text-2xl text-[var(--text-primary)] mb-3">
                    Dados & Insights
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mt-auto">
                    Organizacoes data-driven decidem com velocidade e precisao que intuicao nao alcanca.
                    <span className="block mt-2 font-mono text-xs text-[var(--accent-blue)]">245% mais decisoes acertadas</span>
                  </p>

                  <div
                    className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(91, 143, 185, 0.06), transparent 70%)' }}
                  />
                </div>
              </MovingBorder>
            </ScrollReveal>
          </div>

          {/* === Card 4: AI — Full Width Inverted (text left, terminal right) === */}
          <ScrollReveal variant="slide-right" delay={0.15}>
            <BorderRevealCard glowColor="rgba(139, 111, 176, 0.4)" className="rounded-sm">
              <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12">
                <div className="flex-1 mb-8 lg:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(139,111,176,0.15)] flex items-center justify-center">
                      <BrainCircuit className="w-5 h-5 text-[var(--accent-purple)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-purple)] opacity-70">AI</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-4">
                    Inteligencia Artificial
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed max-w-md text-base">
                    Nao e sobre substituir. E sobre liberar capacidade humana para o que maquinas nao fazem.
                  </p>
                  <span className="inline-block mt-4 font-display text-3xl md:text-4xl text-[var(--accent-purple)]">82%</span>
                  <span className="block font-mono text-xs text-[var(--text-muted)] mt-1">automacao de processos repetitivos</span>
                </div>

                {/* Terminal snippet */}
                <div className="lg:w-[340px] flex-shrink-0 terminal-card p-5 font-mono text-xs leading-relaxed">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-red)] opacity-60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-amber)] opacity-60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)] opacity-60" />
                    <span className="ml-2 text-[var(--text-muted)] text-[10px]">convergence.ai</span>
                  </div>
                  <div className="space-y-1.5 text-[var(--text-tertiary)]">
                    <p><span className="text-[var(--accent-green)]">$</span> analyze --dimensions 4</p>
                    <p className="text-[var(--text-muted)]">scanning CX + CS + Data + AI...</p>
                    <p className="text-[var(--text-muted)]">correlations found: <span className="text-[var(--accent-purple)]">847</span></p>
                    <p className="text-[var(--text-muted)]">convergence score: <span className="text-[var(--accent-amber)]">0.94</span></p>
                    <p><span className="text-[var(--accent-green)]">$</span> <span className="ambient-breathe">_</span></p>
                  </div>
                </div>
              </div>
            </BorderRevealCard>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          SECTION 3 — INTERMEDIATE / TRANSITION
          ========================================= */}
      <section className="relative py-32 md:py-40 section-bg-amber-glow overflow-hidden">
        <BackgroundBeams color="rgba(200, 135, 58, 0.08)" beamCount={3} />
        <FloatingElements count={5} color="var(--accent-amber)" />
        <div className="gradient-border-top" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <blockquote className="font-display text-[clamp(1.5rem,4vw,2.8rem)] leading-[1.2] text-[var(--text-primary)] mb-8">
                &ldquo;As empresas mais valiosas do mundo nao otimizam funcoes —
                elas eliminam as fronteiras entre elas.&rdquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center justify-center gap-8 mb-12 text-sm font-mono text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[var(--accent-amber)]" />
                  <span>22 capitulos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[var(--accent-green)]" />
                  <span>4 atos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>1 tese</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <MagneticButton strength={0.25} radius={100}>
                <Link
                  href="/experiencias/convergencia-invisivel"
                  className="group inline-flex items-center gap-4 px-12 py-5 text-base font-mono uppercase tracking-[0.12em] text-[var(--bg-primary)] bg-[var(--accent-amber)] hover:bg-[var(--accent-amber-vivid)] rounded-sm transition-all duration-500 shadow-[var(--shadow-glow-amber)]"
                >
                  Explorar os 22 capitulos
                  <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4 — FOOTER (3-column)
          ========================================= */}
      <footer className="relative py-20 md:py-24 section-bg-surface gradient-border-top overflow-hidden">
        <BackgroundBeams color="rgba(200, 135, 58, 0.03)" beamCount={2} />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Col 1: Brand */}
            <div>
              <span className="font-display text-xl text-gradient-amber tracking-tight">
                CX Experience Lab
              </span>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-tertiary)] max-w-xs">
                Experiencias digitais interativas para keynotes, workshops e apresentacoes executivas com profundidade de playbook.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4 block">
                Navegacao
              </span>
              <nav className="flex flex-col gap-3">
                <Link href="/experiencias/convergencia-invisivel" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors duration-300 font-mono">
                  A Convergencia Invisivel
                </Link>
                <span className="text-sm text-[var(--text-muted)] font-mono cursor-default">
                  Workshops <span className="text-[10px] ml-1 opacity-50">em breve</span>
                </span>
                <span className="text-sm text-[var(--text-muted)] font-mono cursor-default">
                  Playbooks <span className="text-[10px] ml-1 opacity-50">em breve</span>
                </span>
              </nav>
            </div>

            {/* Col 3: Info */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4 block">
                Sobre
              </span>
              <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                Projetado para presenca de palco. Cada pixel comunica antes do texto.
              </p>
              <p className="mt-4 text-sm text-[var(--text-tertiary)]">
                Otimizado para projecao em tela grande.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-[var(--text-muted)] opacity-50">
              2025 &mdash; Designed for stage presence
            </span>
            <span className="font-mono text-xs text-[var(--text-muted)] opacity-30">
              Built with Next.js + Three.js + GSAP
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
