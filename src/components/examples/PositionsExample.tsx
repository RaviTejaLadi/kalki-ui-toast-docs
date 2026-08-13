import { toast, type ToastPosition } from 'kalki-ui-toast';
import { useToastStore } from '@/store/useToastPositionStore';
import { SyntaxHighlighter } from '@/components/SyntaxHighLighter';
import { Move } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaygroundPanel } from '../ui/ExampleCard';

const positions: { label: string; full: string; value: ToastPosition; className: string }[] = [
  { label: 'TL', full: 'Top left', value: 'top-left', className: 'top-3 left-3' },
  { label: 'TC', full: 'Top center', value: 'top-center', className: 'top-3 left-1/2 -translate-x-1/2' },
  { label: 'TR', full: 'Top right', value: 'top-right', className: 'top-3 right-3' },
  { label: 'BL', full: 'Bottom left', value: 'bottom-left', className: 'bottom-3 left-3' },
  { label: 'BC', full: 'Bottom center', value: 'bottom-center', className: 'bottom-3 left-1/2 -translate-x-1/2' },
  { label: 'BR', full: 'Bottom right', value: 'bottom-right', className: 'bottom-3 right-3' },
];

const PositionsExample = () => {
  const { position, setPosition } = useToastStore();

  const positionsToast = (value: ToastPosition) => {
    setPosition(value);
    toast.success(`Position: ${value}`, {
      description: 'Newest toasts sit closest to this edge.',
    });
  };

  return (
    <PlaygroundPanel
      icon={<Move className="h-4 w-4" />}
      accent="blue"
      title="Position"
      description={
        <>
          Pass <code className="font-mono text-[12px] text-foreground">position</code> on{' '}
          <code className="font-mono text-[12px] text-foreground">&lt;Toaster /&gt;</code>. Click a corner to update the
          live toaster.
        </>
      }
    >
      <div className="relative h-56 overflow-hidden rounded-xl border border-border/70 bg-gradient-to-b from-muted/70 to-background sm:h-64">
        <div className="flex items-center gap-1.5 border-b border-border/60 bg-card/80 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-[10px] text-muted-foreground">Toaster playground</span>
        </div>

        <div className="relative h-[calc(100%-2.25rem)]">
          {positions.map(({ label, full, value, className }) => {
            const active = position === value;
            return (
              <button
                key={value}
                type="button"
                title={full}
                aria-label={full}
                aria-pressed={active}
                onClick={() => positionsToast(value)}
                className={cn(
                  'absolute z-10 min-w-[2.75rem] rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold tracking-wide shadow-sm transition-all',
                  className,
                  active
                    ? 'border-primary bg-primary text-primary-foreground shadow-primary/30'
                    : 'border-border/80 bg-card/90 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                )}
              >
                {label}
              </button>
            );
          })}

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-xl border border-dashed border-border/80 bg-card/60 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Current</p>
              <p className="mt-1 font-mono text-sm font-semibold text-foreground">{position}</p>
            </div>
          </div>
        </div>
      </div>

      <SyntaxHighlighter code={`<Toaster position="${position}" />`} language="jsx" />
    </PlaygroundPanel>
  );
};

export default PositionsExample;
