"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Equation } from "@/components/sections/Equation";
import { Myths } from "@/components/sections/Myths";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="snap-container">
        <Hero />
        <Equation />
        <Myths />

        {/* Placeholder sections for remaining chapters */}
        {[
          { id: "resultado", num: "03", title: "Resultado Esperado" },
          { id: "experiencia", num: "04", title: "Experiência Apropriada" },
          { id: "uber", num: "05", title: "Caso Uber" },
          { id: "sistema", num: "06", title: "Experiência como Sistema" },
          { id: "mudou", num: "07", title: "O Novo Cliente" },
          { id: "futuro", num: "08", title: "O Futuro" },
          { id: "ia", num: "09", title: "IA + Experiência" },
          { id: "pratica", num: "10", title: "Workshop" },
          { id: "fechamento", num: "11", title: "Fechamento" },
        ].map((s) => (
          <section key={s.id} id={s.id} className="snap-section justify-center" style={{ background: s.num === "05" || s.num === "08" || s.num === "11" ? "#060a12" : "var(--color-bg)" }}>
            <div className="text-center px-6 max-w-[800px] mx-auto">
              <span className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-4 inline-flex items-center gap-2">
                <span className="w-5 h-px bg-[var(--color-primary)]" />{s.num} — {s.title}
              </span>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] mt-4" style={{ fontFamily: "var(--font-display)" }}>
                {s.title}
              </h2>
              <p className="text-[var(--color-text-muted)] mt-4">Seção em construção</p>
            </div>
          </section>
        ))}

        {/* Footer */}
        <section className="snap-section justify-center" style={{ minHeight: "40vh" }}>
          <div className="text-center">
            <p className="text-[0.5rem] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              A Equação Invisível — CX Interactive Experience Lab
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
