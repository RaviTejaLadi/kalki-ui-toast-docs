import { useToast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';
import { Code2 } from 'lucide-react';
import { ExampleCard } from '../ui/ExampleCard';

const HookExample = () => {
  const { addToast, dismiss, toasts } = useToast();

  return (
    <ExampleCard
      icon={<Code2 className="h-4 w-4" />}
      accent="rose"
      title="useToast hook"
      description="Same queue as toast(). Useful when you already live in React state."
      badge={
        <span
          className="rounded-full border border-border/70 bg-muted/60 px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground"
          aria-label={`${toasts.length} toasts in queue`}
        >
          {toasts.length}
        </span>
      }
    >
      <Button
        variant="outline"
        size="xs"
        onClick={() =>
          addToast({
            message: 'Saved with addToast',
            variant: 'success',
            description: 'The legacy object API still works.',
          })
        }
      >
        addToast
      </Button>
      <Button
        variant="outline"
        size="xs"
        onClick={() =>
          addToast({
            title: 'Draft stored',
            variant: 'info',
            duration: 4000,
          })
        }
      >
        addToast with title
      </Button>
      <Button variant="outline" size="xs" onClick={() => dismiss()}>
        dismiss()
      </Button>
    </ExampleCard>
  );
};

export default HookExample;
