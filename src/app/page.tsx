import Link from 'next/link'

export default function PortalPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="overline mb-6">CX Experience Lab</p>
      <h1
        className="font-display text-center leading-[1.05] tracking-tight"
        style={{ fontSize: 'var(--text-hero)' }}
      >
        O Sistema que Nenhuma<br />
        Empresa Ainda Construiu
      </h1>
      <p className="mt-8 text-[var(--text-secondary)] max-w-[560px] text-center text-lg leading-relaxed">
        Uma experiencia imersiva sobre a convergencia de CX, Customer Success,
        Dados e Inteligencia Artificial.
      </p>
      <Link
        href="/experiencias/convergencia-invisivel"
        className="mt-12 px-8 py-4 border border-[var(--border-hover)] rounded-lg text-sm tracking-wide uppercase hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] transition-colors duration-300"
      >
        Iniciar Experiencia
      </Link>
    </main>
  )
}
