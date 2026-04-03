import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)] px-6 text-center">
      <span className="font-mono text-6xl font-bold text-[var(--accent-primary)]/20">
        404
      </span>
      <p className="mt-4 text-lg text-[var(--text-secondary)]">
        Página não encontrada.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm text-[var(--accent-primary)] transition-colors hover:text-[var(--accent-primary)]/80"
      >
        ← Voltar ao portal
      </Link>
    </div>
  );
}
