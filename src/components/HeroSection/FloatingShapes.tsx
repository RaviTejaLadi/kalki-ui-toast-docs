export const FloatingShapes = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--hero-glow)_/_0.08),_transparent_55%)]" />
    <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--hero-glow)/0.08)] blur-3xl dark:bg-[hsl(var(--hero-glow)/0.14)]" />
    <div className="absolute -bottom-40 left-[-8%] h-[26rem] w-[26rem] rounded-full bg-slate-400/10 blur-3xl dark:bg-slate-500/10" />
    <div
      className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
      style={{
        backgroundImage:
          'linear-gradient(to right, hsl(var(--border) / 0.55) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.55) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
      }}
    />
  </div>
);
