"use client";

import Link from "next/link";

export default function ExperienceError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)] px-6 text-center">
      <span className="font-mono text-[clamp(3rem,10vw,6rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]/10">
        Erro
      </span>
      <h1 className="mt-4 font-display text-[clamp(1.3rem,3vw,2rem)] text-[var(--text)]">
        Algo deu errado ao carregar esta experiência
      </h1>
      <p className="mt-3 max-w-[40ch] text-sm text-[var(--text-secondary)]">
        Tente recarregar a página. Se o problema persistir, volte ao portal.
      </p>
      <div className="mt-8 flex gap-3">
        <button
          onClick={reset}
          className="rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-primary)] transition-all duration-200 hover:bg-[var(--accent-primary)]/10"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent-primary)]/30 hover:text-[var(--accent-primary)]"
        >
          Voltar ao portal
        </Link>
      </div>
    </main>
  );
}
