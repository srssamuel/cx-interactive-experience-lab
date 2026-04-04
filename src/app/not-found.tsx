import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)] px-6 text-center">
      <span className="font-mono text-[clamp(5rem,15vw,12rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]/10">
        404
      </span>
      <h1 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--text)]">
        Experiência não encontrada
      </h1>
      <p className="mt-3 max-w-[40ch] text-sm text-[var(--text-secondary)]">
        A página que você procura não existe ou foi movida para outro endereço.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent-primary)]/30 hover:text-[var(--accent-primary)]"
      >
        Voltar ao portal
      </Link>
    </main>
  );
}
