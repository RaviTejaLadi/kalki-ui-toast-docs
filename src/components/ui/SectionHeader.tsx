import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  className?: string;
};

const SectionHeader = ({ eyebrow, title, description, className }: SectionHeaderProps) => {
  return (
    <div className={cn('mb-10 max-w-2xl sm:mb-12', className)}>
      <p className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">{description}</p>
    </div>
  );
};

export default SectionHeader;
