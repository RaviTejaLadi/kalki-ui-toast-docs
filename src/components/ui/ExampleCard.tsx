import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type Accent = 'blue' | 'emerald' | 'amber' | 'violet' | 'rose' | 'sky' | 'slate';

const accents: Record<Accent, string> = {
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  violet: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  rose: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  sky: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  slate: 'bg-slate-500/10 text-slate-600 dark:text-slate-300',
};

type ExampleCardProps = {
  icon: ReactNode;
  accent?: Accent;
  title: string;
  description: string;
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
};

export const ExampleCard = ({
  icon,
  accent = 'blue',
  title,
  description,
  badge,
  children,
  className,
}: ExampleCardProps) => {
  return (
    <article
      className={cn(
        'group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 sm:p-6',
        'hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-5 flex items-start gap-3.5">
        <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', accents[accent])}>
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-semibold tracking-tight text-foreground">{title}</h3>
            {badge}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">{children}</div>
    </article>
  );
};

type PlaygroundPanelProps = {
  icon: ReactNode;
  accent?: Accent;
  title: string;
  description: ReactNode;
  children: ReactNode;
  className?: string;
};

export const PlaygroundPanel = ({
  icon,
  accent = 'blue',
  title,
  description,
  children,
  className,
}: PlaygroundPanelProps) => {
  return (
    <article
      className={cn(
        'flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm',
        className
      )}
    >
      <header className="flex items-start gap-3.5 border-b border-border/60 bg-muted/20 px-5 py-5 sm:px-6">
        <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', accents[accent])}>
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">{children}</div>
    </article>
  );
};
