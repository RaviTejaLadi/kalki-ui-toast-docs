import { Package, PanelTop, Sparkles } from 'lucide-react';
import { SyntaxHighlighter } from '../SyntaxHighLighter';
import SectionHeader from '../ui/SectionHeader';

const ToastInstallationCard = () => {
  const steps = [
    {
      n: '01',
      title: 'Install package',
      description: 'Lightweight — less than 5kb gzipped.',
      code: `npm i kalki-ui-toast`,
      language: 'jsx' as const,
      icon: Package,
    },
    {
      n: '02',
      title: 'Add Toaster',
      description: 'Mount once at the root of your app.',
      code: `<Toaster position="top-right" />`,
      language: 'jsx' as const,
      icon: PanelTop,
    },
    {
      n: '03',
      title: 'Start toasting',
      description: 'Call it from any file, no provider needed.',
      code: `toast.success("Saved")`,
      language: 'js' as const,
      icon: Sparkles,
    },
  ];

  return (
    <section id="quick-start" className="container scroll-mt-14 py-20 sm:py-24">
      <SectionHeader
        eyebrow="Quick start"
        title="Three steps to notifications"
        description="Install, mount the toaster, and show a toast from anywhere."
      />

      <div className="relative">
        <div
          className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          aria-hidden
        />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.n}
                className="docs-card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25">
                    {step.n}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mb-5 mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                <div className="mt-auto w-full">
                  <SyntaxHighlighter code={step.code} language={step.language} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToastInstallationCard;
