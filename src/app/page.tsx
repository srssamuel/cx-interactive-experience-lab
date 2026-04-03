"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "equation", label: "Equação" },
  { id: "myths", label: "Mitos" },
  { id: "resultado", label: "Resultado" },
  { id: "experiencia", label: "Experiência" },
  { id: "uber", label: "Uber" },
  { id: "fechamento", label: "Fechamento" },
];

export default function Home() {
  const [active, setActive] = useState("hero");
  const [showNav, setShowNav] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
            setShowNav(e.target.id !== "hero");
            const idx = sections.findIndex((s) => s.id === e.target.id);
            setProgress(((idx) / (sections.length - 1)) * 100);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    // Keyboard navigation
    const handleKey = (e: KeyboardEvent) => {
      const idx = sections.findIndex((s) => s.id === active);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = Math.min(idx + 1, sections.length - 1);
        document.getElementById(sections[next].id)?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = Math.max(idx - 1, 0);
        document.getElementById(sections[prev].id)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => { observer.disconnect(); window.removeEventListener("keydown", handleKey); };
  }, [active]);

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Navigation */}
      <nav className={`nav-fixed ${showNav ? "show" : ""}`}>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, overflowX: "auto", padding: "0 16px" }}>
          {sections.map((s) => (
            <button key={s.id} onClick={() => goTo(s.id)} className={`nav-btn ${active === s.id ? "active" : ""}`}>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ═══════ SLIDE 1: HERO ═══════ */}
      <section id="hero" className="slide">
        {/* Real photo background */}
        <div className="hero-bg" />

        {/* Glow line */}
        <div className="glow-line" style={{ position: "absolute", top: "38%", left: "10%", right: "10%", zIndex: 2 }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 960 }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 40 }}>
            <span>Experiência do Cliente</span>
          </div>

          <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 32 }}>
            Seu cliente chegou ao destino.{" "}
            <span className="grad-text">Mas não voltaria a viajar com você.</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "#94a3b8", maxWidth: "40ch", margin: "0 auto 48px", lineHeight: 1.65 }}>
            Entregar o resultado certo da forma errada tem nome: fracasso silencioso.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, marginBottom: 48 }}>
            <div style={{ textAlign: "center" }}>
              <span className="font-display grad-text" style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1, display: "block", filter: "drop-shadow(0 0 20px rgba(6,182,212,0.4))" }}>73%</span>
              <span style={{ fontSize: "0.6rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em" }}>saem sem reclamar</span>
            </div>
            <div style={{ width: 1, height: 48, background: "rgba(6,182,212,0.2)" }} />
            <div style={{ textAlign: "center" }}>
              <span className="font-display grad-text" style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1, display: "block", filter: "drop-shadow(0 0 20px rgba(6,182,212,0.4))" }}>96%</span>
              <span style={{ fontSize: "0.6rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em" }}>alto esforço = deslealdade</span>
            </div>
          </div>

          <button onClick={() => goTo("equation")} style={{
            padding: "14px 40px", borderRadius: 999, fontSize: "0.72rem", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.12em", color: "#06b6d4",
            border: "1px solid rgba(6,182,212,0.3)", background: "rgba(6,182,212,0.06)",
            cursor: "pointer", boxShadow: "0 0 30px rgba(6,182,212,0.1)",
          }}>
            Explorar a equação ↓
          </button>
        </div>
      </section>

      {/* ═══════ SLIDE 2: EQUAÇÃO ═══════ */}
      <section id="equation" className="slide slide-alt">
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>01 — A ideia que muda tudo</div>

          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.03em", maxWidth: "16ch", margin: "0 auto 24px" }}>
            Uma equação que ninguém te mostrou
          </h2>

          <p style={{ fontSize: "1.1rem", color: "#94a3b8", maxWidth: "44ch", margin: "0 auto 64px" }}>
            E ela explica por que seus clientes satisfeitos estão saindo.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 64 }}>
            <div className="glass" style={{ padding: "32px 40px", minWidth: 250 }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 4 }}>Resultado Esperado</h3>
              <p style={{ fontSize: "0.82rem", color: "#475569" }}>O que o cliente veio resolver</p>
            </div>
            <span className="font-display grad-text" style={{ fontSize: "3rem", fontWeight: 700 }}>+</span>
            <div className="glass" style={{ padding: "32px 40px", minWidth: 250 }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 4 }}>Experiência Apropriada</h3>
              <p style={{ fontSize: "0.82rem", color: "#475569" }}>A forma como isso acontece</p>
            </div>
            <span className="font-display grad-text" style={{ fontSize: "3rem", fontWeight: 700 }}>=</span>
            <h3 className="font-display grad-text" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>Sucesso do Cliente</h3>
          </div>

          <p style={{ fontSize: "1rem", color: "#94a3b8", maxWidth: "50ch", margin: "0 auto" }}>
            <strong style={{ color: "#e2e8f0" }}>Resultado sem experiência é commodity.</strong>{" "}
            <strong style={{ color: "#e2e8f0" }}>Experiência sem resultado é teatro.</strong>{" "}
            Sucesso só existe quando os dois se encontram.
          </p>
        </div>
      </section>

      {/* ═══════ SLIDE 3: MITOS ═══════ */}
      <section id="myths" className="slide">
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-label">02 — O que quase todo mundo entende errado</div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 700, lineHeight: 1.02, maxWidth: "18ch", marginBottom: 16 }}>
            Cinco crenças que estão te atrasando
          </h2>
          <p style={{ fontSize: "1rem", color: "#94a3b8", marginBottom: 48 }}>Clique para revelar o que está por trás.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { myth: '"Experiência é atendimento"', truth: "Atendimento é remédio, não saúde", detail: "A melhor experiência resolve antes de gerar contato." },
              { myth: '"Experiência é NPS"', truth: "NPS mede intenção, não comportamento", detail: "Clientes dão 9 e cancelam no mês seguinte." },
              { myth: '"Experiência é UX"', truth: "UX é uma fatia, não o bolo", detail: "Inclui compra, entrega, suporte, cobrança." },
              { myth: '"Experiência é encantar"', truth: "Encantamento cansa. Consistência fideliza.", detail: "Confiança se constrói na repetição." },
              { myth: '"Experiência é simpatia"', truth: "Gentileza sem resolução é frustração educada", detail: "Processo que resolve em 30s > simpatia que não resolve." },
            ].map((m, i) => (
              <MythCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SLIDE 4: RESULTADO ═══════ */}
      <section id="resultado" className="slide slide-alt">
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-label">03 — Resultado Esperado</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.02, maxWidth: "20ch", marginBottom: 40 }}>
            O cliente veio buscar quatro coisas — e você só entrega uma
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              { n: "01", t: "Funcional", d: "A tarefa: transferir, receber, resolver, chegar." },
              { n: "02", t: "Emocional", d: "O que quer sentir: segurança, alívio, orgulho." },
              { n: "03", t: "Contextual", d: "O que precisa naquele momento específico." },
              { n: "04", t: "Relacional", d: "Ser reconhecido. Não repetir dados." },
            ].map((r, i) => (
              <div key={i} className="glass" style={{ padding: 28 }}>
                <span className="grad-text" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em" }}>{r.n}</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: "8px 0 6px" }}>{r.t}</h3>
                <p style={{ fontSize: "0.88rem", color: "#94a3b8" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SLIDE 5: EXPERIÊNCIA ═══════ */}
      <section id="experiencia" className="slide">
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-label">04 — Experiência Apropriada</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.02, maxWidth: "22ch", marginBottom: 40 }}>
            Você resolve o problema. Mas da forma errada.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { t: "Contexto", q: "Onde o cliente está?", a: "Genérico é o antônimo de apropriado." },
              { t: "Preferência", q: "Como gosta de interagir?", a: "Não imponha o canal mais barato." },
              { t: "Esforço", q: "Quanto trabalho faz?", a: "96% de alto esforço = desleais." },
              { t: "Fluidez", q: "Jornada contínua?", a: "3 canais = 3 empresas diferentes." },
              { t: "Coerência", q: "Promessa sustenta?", a: "Propaganda ≠ experiência real." },
              { t: "Previsibilidade", q: "Sabe o que esperar?", a: "Sem 'e aí?' = funciona." },
            ].map((d, i) => (
              <div key={i} className="glass" style={{ padding: 20 }}>
                <span className="grad-text" style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, margin: "6px 0 4px" }}>{d.t}</h3>
                <p style={{ fontSize: "0.78rem", color: "#64748b", marginBottom: 6 }}>{d.q}</p>
                <p style={{ fontSize: "0.82rem", color: "#94a3b8" }}>{d.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SLIDE 6: UBER — with photo ═══════ */}
      <section id="uber" className="slide">
        <div className="quote-bg" style={{ background: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80') center/cover no-repeat" }} />
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-label">05 — A equação na prática</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.02, maxWidth: "22ch", marginBottom: 40 }}>
            Dois passageiros. Mesmo destino. Um volta. O outro nunca mais.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 900 }}>
            <div className="glass" style={{ padding: 28, borderLeft: "3px solid #06b6d4" }}>
              <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "#06b6d4", textTransform: "uppercase", letterSpacing: "0.12em" }}>✓ Experiência apropriada</span>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: "12px 0 8px" }}>Cenário A — Volta</h3>
              <p style={{ fontSize: "0.88rem", color: "#94a3b8" }}>Carro limpo, no horário. Som baixo. Trajeto eficiente. Chega tranquilo.</p>
            </div>
            <div className="glass" style={{ padding: 28, borderLeft: "3px solid #f43f5e" }}>
              <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "#f43f5e", textTransform: "uppercase", letterSpacing: "0.12em" }}>✗ Experiência inapropriada</span>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: "12px 0 8px" }}>Cenário B — Nunca mais</h3>
              <p style={{ fontSize: "0.88rem", color: "#94a3b8" }}>8 min atraso. Conversa forçada. Som alto. Chega irritado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SLIDE 7: FECHAMENTO ═══════ */}
      <section id="fechamento" className="slide slide-alt">
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Fechamento</div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.05, maxWidth: "15ch", margin: "0 auto 48px" }}>
            O cliente não lembra do que você entregou. Lembra de como se sentiu.
          </h2>
          <div style={{ textAlign: "left", maxWidth: 600, margin: "0 auto" }}>
            {[
              "Entregar certo não basta. Se o concorrente entrega com menos atrito, o cliente vai.",
              "Encantar sem resolver é o pior investimento em CX.",
              "O que encanta um irrita outro. Experiência é contextual.",
              "O cliente não reclama do esforço. Simplesmente vai.",
              "Experiência é espelho. Desorganização interna sempre vaza.",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="font-display grad-text" style={{ fontSize: "1.4rem", fontWeight: 700, opacity: 0.4, minWidth: 32 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontSize: "0.95rem", color: "#e2e8f0", lineHeight: 1.6 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MythCard({ myth, truth, detail }: { myth: string; truth: string; detail: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped(!flipped)} className="glass" style={{ padding: 24, minHeight: 200, cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", transition: "all 0.3s", borderColor: flipped ? "rgba(6,182,212,0.2)" : undefined, background: flipped ? "rgba(6,182,212,0.04)" : undefined }}>
      {!flipped ? (
        <>
          <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "#f43f5e", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>Crença</span>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8 }}>{myth}</h3>
          <span style={{ fontSize: "0.55rem", color: "#475569", marginTop: "auto" }}>clique →</span>
        </>
      ) : (
        <>
          <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "#06b6d4", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>Verdade</span>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8 }}>{truth}</h3>
          <p style={{ fontSize: "0.85rem", color: "#94a3b8" }}>{detail}</p>
        </>
      )}
    </div>
  );
}
