import { toast, type ToastVariant } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';
import { Sparkles } from 'lucide-react';

const variants: { value: ToastVariant; message: string; color: string }[] = [
  { value: 'default', message: 'A simple notification', color: 'bg-slate-400' },
  { value: 'primary', message: 'A branded update', color: 'bg-blue-500' },
  { value: 'secondary', message: 'A low-emphasis message', color: 'bg-slate-500' },
  { value: 'success', message: 'Operation completed', color: 'bg-emerald-500' },
  { value: 'info', message: 'Here is some context', color: 'bg-sky-500' },
  { value: 'warning', message: 'Proceed with caution', color: 'bg-amber-500' },
  { value: 'danger', message: 'Something went wrong', color: 'bg-rose-500' },
  { value: 'help', message: 'Need a hand with this?', color: 'bg-violet-500' },
  { value: 'light', message: 'Light surface toast', color: 'bg-stone-300' },
  { value: 'dark', message: 'Dark surface toast', color: 'bg-zinc-800' },
];

const ToastBomb = () => {
  const handleToastBomb = () => {
    variants.forEach(({ value, message }, index) => {
      setTimeout(() => {
        toast(message, {
          variant: value,
          duration: 4000 + index * 400,
        });
      }, index * 280);
    });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_hsl(var(--hero-glow)_/_0.16),_transparent_55%)]"
        aria-hidden
      />
      <div className="relative flex flex-col items-start justify-between gap-6 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div className="max-w-xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Toast bomb</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Fire every variant at once. The toaster keeps at most five visible and drops the oldest.
          </p>
          <div className="mt-4 flex items-center gap-1.5" aria-hidden>
            {variants.map(({ value, color }) => (
              <span key={value} className={`h-2 w-2 rounded-full ${color}`} />
            ))}
          </div>
        </div>
        <Button onClick={handleToastBomb} variant="primary" size="sm" className="shrink-0 font-semibold">
          Trigger all variants
        </Button>
      </div>
    </div>
  );
};

export default ToastBomb;
