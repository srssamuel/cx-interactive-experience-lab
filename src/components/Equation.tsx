"use client";

import { BlurReveal } from "./ui/text-reveal";
import { GlowCard } from "./ui/glow-card";

export function Equation() {
  return (
    <section id="equation" className="relative py-40 px-6 overflow-hidden">
      {/* Section number */}
      <div className="absolute top-6 right-8 text-[14rem] font-bold leading-none pointer-events-none select-none opacity-[0.015]" style={{ fontFamily: "var(--font-display)" }}>01</div>

      <div className="max-w-[1100px] mx-auto text-center">
        <BlurReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-6 bg-[var(--color-primary)]" />
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">A ideia que muda tudo</span>
            <span className="h-px w-6 bg-[var(--color-primary)]" />
          </div>
        </BlurReveal>

        <BlurReveal delay={0.15}>
          <h2 className="text-[clamp(2rem,4.5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[18ch] mx-auto mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Existe uma equação que ninguém te mostrou
          </h2>
        </BlurReveal>

        <BlurReveal delay={0.3}>
          <p className="text-[1.1rem] text-[var(--color-text-secondary)] max-w-[48ch] mx-auto mb-16">
            E ela explica por que seus clientes satisfeitos estão saindo.
          </p>
        </BlurReveal>

        {/* Formula */}
        <BlurReveal delay={0.45}>
          <div className="flex items-center justify-center gap-4 lg:gap-6 flex-wrap mb-16">
            <GlowCard className="px-10 py-8 min-w-[250px]">
              <h3 className="text-[1.1rem] font-semibold mb-1">Resultado Esperado</h3>
              <p className="text-[0.82rem] text-[var(--color-text-muted)]">O que o cliente veio resolver</p>
            </GlowCard>

            <span className="text-[3rem] font-bold select-none" style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>+</span>

            <GlowCard className="px-10 py-8 min-w-[250px]" glowColor="rgba(129,140,248,0.12)">
              <h3 className="text-[1.1rem] font-semibold mb-1">Experiência Apropriada</h3>
              <p className="text-[0.82rem] text-[var(--color-text-muted)]">A forma como isso acontece</p>
            </GlowCard>

            <span className="text-[3rem] font-bold select-none" style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>=</span>

            <div>
              <h3 className="text-[2rem] font-bold" style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Sucesso do Cliente
              </h3>
            </div>
          </div>
        </BlurReveal>

        <BlurReveal delay={0.6}>
          <p className="text-[1.05rem] text-[var(--color-text-secondary)] max-w-[52ch] mx-auto">
            <strong className="text-[var(--color-text)]">Resultado sem experiência é commodity.</strong>{" "}
            Qualquer concorrente substitui.{" "}
            <strong className="text-[var(--color-text)]">Experiência sem resultado é teatro.</strong>{" "}
            O cliente percebe e vai embora.
          </p>
        </BlurReveal>
      </div>
    </section>
  );
}
