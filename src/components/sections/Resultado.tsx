"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const tabs = [
  { id: "func", label: "Funcional", title: "Resultado Funcional", text: "A tarefa: transferir dinheiro, receber a encomenda, chegar ao destino.", insight: "A maioria para aqui — e se torna substituível. Quando dois concorrentes entregam o mesmo resultado funcional, o diferencial migra para onde ninguém está olhando." },
  { id: "emoc", label: "Emocional", title: "Resultado Emocional", text: "O que o cliente quer sentir. Segurança. Alívio. Orgulho. Tranquilidade.", insight: "Não aparece em dashboards — mas cria memória. E memória é o que gera recompra." },
  { id: "cont", label: "Contextual", title: "Resultado Contextual", text: "O que precisa naquele momento. Pai com pressa. CEO antes das 9h. Paciente às 23h.", insight: "Contexto define se o mesmo resultado funcional é sucesso ou frustração." },
  { id: "rel", label: "Relacional", title: "Resultado Relacional", text: "Ser reconhecido. Não repetir dados. Sentir que a empresa evolui junto.", insight: "Tratar cada interação como a primeira destrói esse resultado. O cliente sai sem explicar por quê." },
];

export function Resultado() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [active, setActive] = useState(0);

  return (
    <section id="resultado" className="snap-section flex items-center items-center">
      <div ref={ref} className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-16">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />03 — Resultado Esperado
        </motion.span>
        <motion.h2 className="text-[clamp(1.8rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[20ch] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          O cliente veio buscar quatro coisas — e você só entrega uma
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          <div className="flex gap-1 mb-8 overflow-x-auto">
            {tabs.map((t, i) => (
              <button key={t.id} onClick={() => setActive(i)}
                className={`px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.06em] rounded-full transition-all duration-300 whitespace-nowrap ${
                  active === i ? "bg-[rgba(0,228,184,0.1)] text-[var(--color-primary)] border border-[rgba(0,228,184,0.2)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-sec)]"
                }`}>{t.label}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[600px]">
              <h3 className="text-[1.3rem] font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>{tabs[active].title}</h3>
              <p className="text-[1rem] text-[var(--color-text-sec)] mb-3">{tabs[active].text}</p>
              <p className="text-[0.95rem] text-[var(--color-text-sec)]">{tabs[active].insight}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
