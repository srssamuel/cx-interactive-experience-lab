"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionNum, Label } from "./Resultado";

export function UberCase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="uber" className="relative py-36 px-6">
      <SectionNum>05</SectionNum>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div className="mb-14" initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}>
          <Label>A equação na prática</Label>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] mb-3 max-w-[22ch]" style={{ fontFamily: "var(--font-display)" }}>
            Dois passageiros chegam ao aeroporto. Um volta a usar o app. O outro nunca mais.
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-secondary)] max-w-[55ch]">
            Nos dois cenários, o resultado funcional é idêntico. O que sente depois — radicalmente diferente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <motion.div
            className="relative bg-[rgba(14,21,37,0.5)] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-primary)] to-[rgba(0,228,184,0.1)] rounded-l-3xl" />
            <span className="inline-flex text-[0.55rem] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full bg-[rgba(0,228,184,0.08)] text-[var(--color-primary)] border border-[rgba(0,228,184,0.15)] mb-5">
              Experiência apropriada
            </span>
            <h3 className="text-[1.1rem] font-semibold mb-3">Cenário A — O cliente que volta</h3>
            <p className="text-[0.92rem] text-[var(--color-text-secondary)] mb-5">
              Carro limpo, no horário. Motorista cumprimenta sem excesso. Ar confortável. Som baixo. Trajeto eficiente. Você revisa anotações em silêncio. Chega tranquilo.
            </p>
            <p className="text-[0.9rem] font-medium text-[var(--color-primary)] pt-4 border-t border-white/[0.06]">
              → Resultado + contexto respeitado = <strong>Sucesso</strong>
            </p>
          </motion.div>

          <motion.div
            className="relative bg-[rgba(14,21,37,0.5)] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-warn)] to-[rgba(251,113,133,0.1)] rounded-l-3xl" />
            <span className="inline-flex text-[0.55rem] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full bg-[rgba(251,113,133,0.08)] text-[var(--color-warn)] border border-[rgba(251,113,133,0.15)] mb-5">
              Experiência inapropriada
            </span>
            <h3 className="text-[1.1rem] font-semibold mb-3">Cenário B — O cliente que não volta</h3>
            <p className="text-[0.92rem] text-[var(--color-text-secondary)] mb-5">
              8 min de atraso. Banco quente. Conversa forçada. Som alto. Caminho longo. Chega irritado, suado, com sensação de tempo perdido.
            </p>
            <p className="text-[0.9rem] font-medium text-[var(--color-warn)] pt-4 border-t border-white/[0.06]">
              → Resultado + contexto ignorado = <strong>Fracasso percebido</strong>
            </p>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-[1.05rem] text-[var(--color-text)] max-w-[48ch] mx-auto mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          O destino foi o mesmo. O preço, o mesmo. A única diferença foi a <strong>forma como aconteceu</strong>.
        </motion.p>

        <FacHint delay={0.9} inView={inView}>
          <strong className="text-[var(--color-text)]">Exercício:</strong> Duplas, 2 minutos. Descrevam &ldquo;o nosso Cenário B&rdquo; — onde entregamos resultado mas destruímos a experiência. O padrão que emerge é o diagnóstico.
        </FacHint>
      </div>
    </section>
  );
}

export function FacHint({ children, delay, inView }: { children: React.ReactNode; delay: number; inView: boolean }) {
  return (
    <motion.div
      className="mt-8 flex items-start gap-4 max-w-[620px] text-left bg-[rgba(129,140,248,0.04)] backdrop-blur-sm border border-[rgba(129,140,248,0.08)] rounded-2xl p-6 text-[0.85rem] text-[var(--color-text-secondary)]"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay }}
    >
      <span className="text-lg shrink-0">🎤</span>
      <span>{children}</span>
    </motion.div>
  );
}
