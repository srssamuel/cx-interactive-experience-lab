"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const myths = [
  {
    myth: '"Experiência é atendimento"',
    belief: "Se o atendimento for bom, a experiência é boa.",
    truth: "Atendimento é remédio, não saúde",
    reality:
      "O cliente ideal nem precisa de atendimento. A melhor experiência resolve antes de gerar contato.",
  },
  {
    myth: '"Experiência é NPS"',
    belief: "NPS alto = experiência funcionando.",
    truth: "NPS mede intenção, não comportamento",
    reality:
      "Clientes dão nota 9 e cancelam no mês seguinte. O esforço percebido prediz deslealdade melhor.",
  },
  {
    myth: '"Experiência é UX"',
    belief: "App bonito resolve.",
    truth: "UX é uma fatia, não o bolo",
    reality:
      "A experiência inclui compra, entrega, suporte, cobrança, renovação. Cada ponto de contato é experiência.",
  },
  {
    myth: '"Experiência é encantar"',
    belief: "Surpreender é o objetivo.",
    truth: "Encantamento cansa. Consistência fideliza.",
    reality:
      "O cliente quer previsibilidade e zero esforço. Confiança se constrói na repetição.",
  },
  {
    myth: '"Experiência é simpatia"',
    belief: "Gentileza resolve tudo.",
    truth: "Gentileza sem resolução é frustração educada",
    reality:
      "Um processo automático que resolve em 30s supera um atendente simpático que não resolve.",
  },
];

export function Myths() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="myths" className="relative py-36 px-6">
      <div
        className="absolute top-8 right-8 text-[clamp(6rem,12vw,12rem)] font-bold leading-none pointer-events-none z-0"
        style={{
          fontFamily: "var(--font-display)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.025), transparent 80%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        02
      </div>

      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-4 h-px bg-[var(--color-primary)]" />
            O que quase todo mundo entende errado
          </span>
          <h2
            className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.025em] mb-3 max-w-[20ch]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cinco coisas que você acredita sobre CX — e que estão te atrasando
          </h2>
          <p className="text-[1.08rem] text-[var(--color-text-secondary)] max-w-[55ch]">
            Cada card esconde uma crença rasa. Clique para virar e revelar o que
            está por trás.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {myths.map((m, i) => (
            <MythCard key={i} {...m} delay={i * 0.08} inView={inView} />
          ))}
        </div>

        <motion.div
          className="mt-8 flex items-start gap-4 max-w-[650px] text-left bg-[rgba(129,140,248,0.04)] backdrop-blur-sm border border-[rgba(129,140,248,0.08)] rounded-2xl p-5 text-[0.85rem] text-[var(--color-text-secondary)]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="text-lg shrink-0">🎤</span>
          <span>
            <strong className="text-[var(--color-text)]">Dinâmica:</strong> Leia
            cada crença em voz alta. &ldquo;Quem concorda?&rdquo; Deixe as mãos
            levantarem. Depois clique. O silêncio que se segue é o momento de
            aprendizagem.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function MythCard({
  myth,
  belief,
  truth,
  reality,
  delay,
  inView,
}: {
  myth: string;
  belief: string;
  truth: string;
  reality: string;
  delay: number;
  inView: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ delay: 0.3 + delay, duration: 0.6 }}
      onClick={() => setFlipped(!flipped)}
      className={`relative min-h-[220px] rounded-[20px] p-7 cursor-pointer transition-all duration-400 overflow-hidden border ${
        flipped
          ? "border-[rgba(0,228,184,0.2)] bg-[rgba(0,228,184,0.06)]"
          : "border-white/6 bg-[rgba(14,21,37,0.65)] hover:border-white/10"
      } backdrop-blur-xl`}
    >
      {/* Rotating shine on hover */}
      {!flipped && (
        <motion.div
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-0 hover:opacity-100 pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(0,228,184,0.06) 60deg, transparent 120deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Front */}
      <div
        className={`transition-all duration-400 ${
          flipped ? "opacity-0 translate-y-[-8px]" : "opacity-100"
        }`}
      >
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[var(--color-warn)] block mb-2">
          Crença
        </span>
        <h3 className="text-[1rem] font-semibold mb-2">{myth}</h3>
        <p className="text-[0.88rem] text-[var(--color-text-secondary)]">{belief}</p>
        <span className="text-[0.6rem] text-[var(--color-text-muted)] italic mt-3 block">
          toque para revelar →
        </span>
      </div>

      {/* Back */}
      <div
        className={`absolute inset-0 p-7 flex flex-col justify-center transition-all duration-400 ${
          flipped ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[8px]"
        }`}
      >
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[var(--color-primary)] block mb-2">
          Verdade
        </span>
        <h3 className="text-[1rem] font-semibold mb-2">{truth}</h3>
        <p className="text-[0.88rem] text-[var(--color-text-secondary)]">{reality}</p>
      </div>
    </motion.div>
  );
}
