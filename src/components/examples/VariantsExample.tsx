import { toast, type ToastVariant } from 'kalki-ui-toast';
import { SyntaxHighlighter } from '@/components/SyntaxHighLighter';
import {
  Layers,
  Circle,
  CircleDot,
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Sun,
  Moon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaygroundPanel } from '../ui/ExampleCard';

const variants: { label: string; value: ToastVariant; icon: JSX.Element; tone: string }[] = [
  { label: 'Default', value: 'default', icon: <Circle className="h-4 w-4" />, tone: 'text-slate-500 bg-slate-500/10' },
  {
    label: 'Primary',
    value: 'primary',
    icon: <CircleDot className="h-4 w-4" />,
    tone: 'text-blue-600 bg-blue-500/10 dark:text-blue-400',
  },
  {
    label: 'Secondary',
    value: 'secondary',
    icon: <Circle className="h-4 w-4" />,
    tone: 'text-slate-600 bg-slate-500/10 dark:text-slate-300',
  },
  {
    label: 'Success',
    value: 'success',
    icon: <CheckCircle className="h-4 w-4" />,
    tone: 'text-emerald-600 bg-emerald-500/10 dark:text-emerald-400',
  },
  {
    label: 'Info',
    value: 'info',
    icon: <Info className="h-4 w-4" />,
    tone: 'text-sky-600 bg-sky-500/10 dark:text-sky-400',
  },
  {
    label: 'Warning',
    value: 'warning',
    icon: <AlertTriangle className="h-4 w-4" />,
    tone: 'text-amber-600 bg-amber-500/10 dark:text-amber-400',
  },
  {
    label: 'Danger',
    value: 'danger',
    icon: <XCircle className="h-4 w-4" />,
    tone: 'text-rose-600 bg-rose-500/10 dark:text-rose-400',
  },
  {
    label: 'Help',
    value: 'help',
    icon: <HelpCircle className="h-4 w-4" />,
    tone: 'text-violet-600 bg-violet-500/10 dark:text-violet-400',
  },
  {
    label: 'Light',
    value: 'light',
    icon: <Sun className="h-4 w-4" />,
    tone: 'text-stone-500 bg-stone-400/15 dark:text-stone-300',
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: <Moon className="h-4 w-4" />,
    tone: 'text-zinc-800 bg-zinc-500/15 dark:text-zinc-200',
  },
];

const VariantsExample = () => {
  const handleVariantToast = (variant: ToastVariant) => {
    toast(`This is a ${variant} toast`, {
      variant,
      description: `variant: "${variant}"`,
      duration: 3000,
    });
  };

  return (
    <PlaygroundPanel
      icon={<Layers className="h-4 w-4" />}
      accent="violet"
      title="Variants"
      description={
        <>
          Ten built-in types. The card stays the same; the icon carries the color.{' '}
          <code className="font-mono text-[12px] text-foreground">toast.error()</code> maps to{' '}
          <code className="font-mono text-[12px] text-foreground">danger</code>.
        </>
      }
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {variants.map(({ label, value, icon, tone }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleVariantToast(value)}
            className="group flex items-center gap-3 rounded-xl border border-border/70 bg-background/70 px-3 py-2.5 text-left transition-all hover:border-primary/30 hover:bg-card hover:shadow-sm"
          >
            <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-lg', tone)}>{icon}</span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">{label}</span>
              <span className="block truncate font-mono text-[11px] text-muted-foreground">toast.{value}()</span>
            </span>
          </button>
        ))}
      </div>
      <SyntaxHighlighter
        code={`toast.success("Saved");\ntoast.error("Could not save");\ntoast({ title: "Hello", variant: "help" });`}
        language="jsx"
      />
    </PlaygroundPanel>
  );
};

export default VariantsExample;
