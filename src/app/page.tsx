'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LazyParticleField } from '@/components/three/lazy-particle-field'
import { BarChart3, HeartHandshake, Database, BrainCircuit, ArrowRight, Zap, Layers, Target } from 'lucide-react'

import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { TextReveal } from '@/components/motion/text-reveal'
import { MagneticButton } from '@/components/effects/magnetic-button'
import { MovingBorder } from '@/components/effects/moving-border'
import { GradientMesh } from '@/components/effects/gradient-mesh'
import { FloatingElements } from '@/components/effects/floating-elements'
import { BackgroundBeams } from '@/components/effects/background-beams'
import { BorderRevealCard } from '@/components/effects/border-reveal-card'
import { HeroOrb } from '@/components/effects/hero-orb'

const ease = [0.16, 1, 0.3, 1] as const

export default function PortalPage() {
  return (
    <main className="relative overflow-hidden">
      {/* =========================================
          SECTION 1 — FULL VIEWPORT HERO
          ========================================= */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 30% 30%, rgba(52,152,219,0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(124,77,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(0,188,212,0.10) 0%, transparent 40%), rgba(10,22,40,0.6)',
        }}
      >
        <GradientMesh opacity={0.55} />
        <HeroOrb color="#3498DB" secondaryColor="#5DADE2" size={600} className="z-[1]" />

        <div className="absolute inset-0 z-[2]">
          <LazyParticleField color="#3498DB" count={120} bloom interactive />
        </div>

        <FloatingElements count={8} color="var(--accent-blue)" />
        <BackgroundBeams color="rgba(52, 152, 219, 0.45)" beamCount={6} className="z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <motion.span
              className="block font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-blue-vivid)] mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              CX Experience Lab
            </motion.span>

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
              <span className="block text-gradient-blue">
                Invisivel
              </span>
            </motion.h1>

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

            <motion.div
              className="mt-12 flex items-center gap-6 text-sm font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease }}
            >
              <span className="text-[var(--accent-blue-vivid)]">22 capitulos</span>
              <span className="w-px h-4 bg-[var(--accent-blue)] opacity-40" />
              <span className="text-[var(--text-secondary)]">90 min</span>
              <span className="w-px h-4 bg-[var(--accent-blue)] opacity-40" />
              <span className="text-[var(--text-secondary)]">4 dimensoes</span>
            </motion.div>

            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease }}
            >
              <MagneticButton strength={0.3} radius={120}>
                <Link
                  href="/experiencias/convergencia-invisivel"
                  className="group relative inline-flex items-center gap-4 px-10 py-5 text-base font-mono uppercase tracking-[0.12em] text-white bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-vivid)] rounded-sm transition-all duration-500"
                  style={{ boxShadow: '0 0 40px rgba(52,152,219,0.5), 0 0 80px rgba(52,152,219,0.25)' }}
                >
                  <span className="relative z-10">Iniciar Experiencia</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <span className="block w-px h-12 bg-gradient-to-b from-transparent to-[var(--accent-blue)]" />
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2 — FOUR DIMENSIONS
          ========================================= */}
      <section className="relative py-32 md:py-48 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(10,22,40,0.7) 0%, rgba(15,30,53,0.6) 30%, rgba(20,40,66,0.5) 70%, rgba(15,30,53,0.6) 100%)',
        }}
      >
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #3498DB, transparent)' }} />
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: 'linear-gradient(180deg, rgba(52,152,219,0.08), transparent)' }} />

        <BackgroundBeams color="rgba(52, 152, 219, 0.3)" beamCount={4} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="mb-20 max-w-xl">
            <TextReveal
              tag="h2"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-[var(--text-primary)]"
            >
              Quatro forcas. Um sistema.
            </TextReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-4 h-1 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #42A5F5, #00BCD4)' }} />
            </ScrollReveal>
          </div>

          {/* CX Card — Full Width */}
          <ScrollReveal variant="scale" delay={0}>
            <BorderRevealCard glowColor="rgba(66, 165, 245, 0.5)" className="mb-6 lg:mb-8 rounded-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16"
                style={{ background: 'linear-gradient(135deg, rgba(66,165,245,0.08) 0%, transparent 60%)' }}
              >
                <div className="flex-shrink-0 mb-8 lg:mb-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(66,165,245,0.2)', boxShadow: '0 0 30px rgba(66,165,245,0.3)' }}
                    >
                      <BarChart3 className="w-7 h-7 text-[var(--accent-cx)]" />
                    </div>
                    <span className="font-mono text-sm uppercase tracking-[0.25em] text-[var(--accent-cx)]">CX</span>
                  </div>
                  <span className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--accent-cx)] leading-none"
                    style={{ textShadow: '0 0 40px rgba(66,165,245,0.4)' }}
                  >
                    $3.8T
                  </span>
                  <span className="block font-mono text-sm text-[var(--text-secondary)] mt-2 tracking-wider">at risk</span>
                </div>
                <div className="lg:border-l lg:border-[rgba(66,165,245,0.3)] lg:pl-16 flex-1">
                  <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-4">
                    Customer Experience
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg text-base">
                    O custo global de experiencias que falham. Cada ponto de friccao e receita evaporando.
                    Empresas que dominam CX crescem 1.7x mais rapido que concorrentes.
                  </p>
                </div>
              </div>
            </BorderRevealCard>
          </ScrollReveal>

          {/* CS + Data Cards — Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            <ScrollReveal variant="blur" delay={0.1}>
              <MovingBorder borderColor="var(--accent-cs)" duration={6} borderWidth={1} className="rounded-sm h-full">
                <div className="relative p-8 md:p-10 rounded-sm min-h-[280px] flex flex-col group hover:-translate-y-1 transition-transform duration-500"
                  style={{ background: 'linear-gradient(160deg, rgba(0,188,212,0.12) 0%, rgba(15,30,53,0.95) 50%)' }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(0,188,212,0.2)', boxShadow: '0 0 25px rgba(0,188,212,0.25)' }}
                    >
                      <HeartHandshake className="w-6 h-6 text-[var(--accent-cs)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-cs)]">CS</span>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-sm text-[var(--text-secondary)]">NRR</span>
                    <div className="flex-1 h-px bg-[var(--border-subtle)] relative">
                      <div className="absolute left-0 top-0 h-px w-1/2 bg-[var(--accent-cs)]" style={{ boxShadow: '0 0 10px rgba(0,188,212,0.5)' }} />
                      <div className="absolute left-1/2 -top-1.5 w-3 h-3 rounded-full bg-[var(--accent-cs)]" style={{ boxShadow: '0 0 15px rgba(0,188,212,0.6)' }} />
                    </div>
                    <span className="font-display text-2xl text-[var(--accent-cs)]" style={{ textShadow: '0 0 20px rgba(0,188,212,0.4)' }}>120%</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-[var(--text-primary)] mb-3">Customer Success</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mt-auto">
                    Net Revenue Retention como motor de crescimento. Expansao supera aquisicao quando o sistema funciona.
                  </p>
                </div>
              </MovingBorder>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={0.2}>
              <MovingBorder borderColor="var(--accent-data)" duration={7} borderWidth={1} className="rounded-sm h-full">
                <div className="relative p-8 md:p-10 rounded-sm min-h-[280px] flex flex-col group hover:-translate-y-1 transition-transform duration-500"
                  style={{ background: 'linear-gradient(200deg, rgba(38,198,218,0.12) 0%, rgba(15,30,53,0.95) 50%)' }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(38,198,218,0.2)', boxShadow: '0 0 25px rgba(38,198,218,0.25)' }}
                    >
                      <Database className="w-6 h-6 text-[var(--accent-data)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-data)]">Data</span>
                  </div>
                  <div className="flex items-end gap-2 mb-6 h-16">
                    {[30, 55, 45, 72, 60, 85, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-[var(--accent-data)] transition-all duration-500"
                        style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7, boxShadow: `0 0 ${h/10}px rgba(38,198,218,0.3)` }}
                      />
                    ))}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-[var(--text-primary)] mb-3">Dados & Insights</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mt-auto">
                    Organizacoes data-driven decidem com velocidade e precisao que intuicao nao alcanca.
                    <span className="block mt-2 font-mono text-xs text-[var(--accent-data)]" style={{ textShadow: '0 0 10px rgba(38,198,218,0.4)' }}>245% mais decisoes acertadas</span>
                  </p>
                </div>
              </MovingBorder>
            </ScrollReveal>
          </div>

          {/* AI Card — Full Width */}
          <ScrollReveal variant="slide-right" delay={0.15}>
            <BorderRevealCard glowColor="rgba(124, 77, 255, 0.5)" className="rounded-sm">
              <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12"
                style={{ background: 'linear-gradient(135deg, rgba(124,77,255,0.08) 0%, transparent 60%)' }}
              >
                <div className="flex-1 mb-8 lg:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(124,77,255,0.2)', boxShadow: '0 0 25px rgba(124,77,255,0.25)' }}
                    >
                      <BrainCircuit className="w-6 h-6 text-[var(--accent-ai)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-ai)]">AI</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-4">Inteligencia Artificial</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed max-w-md text-base">
                    Nao e sobre substituir. E sobre liberar capacidade humana para o que maquinas nao fazem.
                  </p>
                  <span className="inline-block mt-4 font-display text-3xl md:text-4xl text-[var(--accent-ai)]" style={{ textShadow: '0 0 30px rgba(124,77,255,0.4)' }}>82%</span>
                  <span className="block font-mono text-xs text-[var(--text-secondary)] mt-1">automacao de processos repetitivos</span>
                </div>
                <div className="lg:w-[340px] flex-shrink-0 p-5 font-mono text-xs leading-relaxed rounded-sm"
                  style={{ background: '#060D1A', border: '1px solid rgba(52,152,219,0.3)', boxShadow: '0 0 30px rgba(52,152,219,0.1)' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-red)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-amber)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-teal)]" />
                    <span className="ml-2 text-[var(--text-muted)] text-[10px]">convergence.ai</span>
                  </div>
                  <div className="space-y-1.5 text-[var(--text-tertiary)]">
                    <p><span className="text-[var(--accent-teal)]">$</span> analyze --dimensions 4</p>
                    <p className="text-[var(--text-muted)]">scanning CX + CS + Data + AI...</p>
                    <p className="text-[var(--text-muted)]">correlations found: <span className="text-[var(--accent-ai)]">847</span></p>
                    <p className="text-[var(--text-muted)]">convergence score: <span className="text-[var(--accent-blue-vivid)]">0.94</span></p>
                    <p><span className="text-[var(--accent-teal)]">$</span> <span className="ambient-breathe">_</span></p>
                  </div>
                </div>
              </div>
            </BorderRevealCard>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          SECTION 3 — QUOTE / TRANSITION
          ========================================= */}
      <section className="relative py-32 md:py-40 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(52,152,219,0.25) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(0,188,212,0.12) 0%, transparent 50%), rgba(10,22,40,0.55)',
        }}
      >
        <BackgroundBeams color="rgba(52, 152, 219, 0.45)" beamCount={5} />
        <FloatingElements count={6} color="var(--accent-blue)" />
        <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent 10%, #3498DB 50%, transparent 90%)', boxShadow: '0 0 20px rgba(52,152,219,0.5)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <blockquote className="font-display text-[clamp(1.5rem,4vw,2.8rem)] leading-[1.2] text-[var(--text-primary)] mb-8">
                &ldquo;As empresas mais valiosas do mundo nao otimizam funcoes —
                elas eliminam as fronteiras entre elas.&rdquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center justify-center gap-8 mb-12 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[var(--accent-blue-vivid)]" />
                  <span className="text-[var(--text-secondary)]">22 capitulos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[var(--accent-teal)]" />
                  <span className="text-[var(--text-secondary)]">4 atos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[var(--accent-ai)]" />
                  <span className="text-[var(--text-secondary)]">1 tese</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <MagneticButton strength={0.25} radius={100}>
                <Link
                  href="/experiencias/convergencia-invisivel"
                  className="group inline-flex items-center gap-4 px-12 py-5 text-base font-mono uppercase tracking-[0.12em] text-white bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-vivid)] rounded-sm transition-all duration-500"
                  style={{ boxShadow: '0 0 50px rgba(52,152,219,0.5), 0 0 100px rgba(52,152,219,0.2)' }}
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
          SECTION 4 — FOOTER
          ========================================= */}
      <footer className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(15,30,53,0.65) 0%, rgba(10,22,40,0.75) 100%)',
        }}
      >
        <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent 10%, #00BCD4 50%, transparent 90%)', boxShadow: '0 0 15px rgba(0,188,212,0.4)' }} />
        <BackgroundBeams color="rgba(52, 152, 219, 0.25)" beamCount={3} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal>
            <div className="mb-16">
              <span className="font-display text-3xl md:text-4xl text-gradient-blue tracking-tight block">
                CX Experience Lab
              </span>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] max-w-lg">
                Experiencias digitais interativas para keynotes, workshops e apresentacoes executivas com profundidade de playbook.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <ScrollReveal delay={0.1}>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-5 block">
                  Dimensoes
                </span>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'CX', color: '#42A5F5' },
                    { label: 'CS', color: '#00BCD4' },
                    { label: 'Dados', color: '#26C6DA' },
                    { label: 'AI', color: '#7C4DFF' },
                  ].map((dim) => (
                    <span
                      key={dim.label}
                      className="font-mono text-xs px-4 py-2 rounded"
                      style={{
                        color: dim.color,
                        border: `1px solid ${dim.color}50`,
                        background: `${dim.color}15`,
                        boxShadow: `0 0 15px ${dim.color}20`,
                      }}
                    >
                      {dim.label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-5 block">
                  Navegacao
                </span>
                <nav className="flex flex-col gap-3">
                  <Link href="/experiencias/convergencia-invisivel" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-blue-vivid)] transition-colors duration-300 font-mono group flex items-center gap-2">
                    A Convergencia Invisivel
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                  </Link>
                  <span className="text-sm text-[var(--text-muted)] font-mono cursor-default">
                    Workshops <span className="text-[10px] ml-1 opacity-50">em breve</span>
                  </span>
                  <span className="text-sm text-[var(--text-muted)] font-mono cursor-default">
                    Playbooks <span className="text-[10px] ml-1 opacity-50">em breve</span>
                  </span>
                </nav>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-5 block">
                  Sobre
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Projetado para presenca de palco. Cada pixel comunica antes do texto.
                </p>
                <p className="mt-4 text-sm text-[var(--text-tertiary)]">
                  Otimizado para projecao em tela grande.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ borderTop: '1px solid rgba(52,152,219,0.2)' }}
            >
              <span className="font-mono text-xs text-[var(--text-muted)]">
                2025 &mdash; Designed for stage presence
              </span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-[var(--accent-blue-vivid)]">22 capitulos</span>
                <span className="w-px h-3 bg-[var(--accent-blue)] opacity-30" />
                <span className="font-mono text-[10px] text-[var(--accent-teal)]">4 dimensoes</span>
                <span className="w-px h-3 bg-[var(--accent-teal)] opacity-30" />
                <span className="font-mono text-[10px] text-[var(--text-muted)]">Next.js + Three.js + GSAP</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  )
}
