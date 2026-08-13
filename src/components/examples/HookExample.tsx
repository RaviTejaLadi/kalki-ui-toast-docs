import { useToast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';

const HookExample = () => {
  const { addToast, dismiss, toasts } = useToast();

  return (
    <div>
      <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground">useToast hook</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Same queue as <code className="text-xs">toast()</code>. Useful when you already live in React state. Queue:{' '}
        {toasts.length}
      </p>
      <div className="space-y-3">
        <Button
          block
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
          block
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
        <Button block variant="outline" size="xs" onClick={() => dismiss()}>
          dismiss()
        </Button>
      </div>
    </div>
  );
};

export default HookExample;
