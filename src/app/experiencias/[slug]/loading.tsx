export default function ExperienceLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-ping rounded-full bg-[var(--accent-primary)]/10" />
          <div className="absolute inset-2 animate-pulse rounded-full bg-[var(--accent-primary)]/20" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Carregando experiência
        </p>
      </div>
    </div>
  );
}
