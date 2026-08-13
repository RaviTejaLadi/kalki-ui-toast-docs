const Logo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-foreground text-background"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.25">
          <path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9Z" strokeLinejoin="round" />
          <path d="M12 12v8M12 12 4 8.5M12 12l8-3.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-foreground">Kalki UI</span>
        <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Toast
        </span>
      </div>
    </div>
  );
};

export default Logo;
