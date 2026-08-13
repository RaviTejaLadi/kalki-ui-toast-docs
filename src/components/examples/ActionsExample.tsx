import { toast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';
import { ShoppingCart, Undo2 } from 'lucide-react';

const ActionsExample = () => {
  return (
    <div>
      <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground">Title, description, actions</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Add a second line and action buttons. Actions dismiss the toast unless you pass preventDismiss.
      </p>
      <div className="space-y-3">
        <Button
          block
          variant="outline"
          size="xs"
          onClick={() =>
            toast.success('Order confirmed', {
              description: 'Order #12345 is being prepared.',
              icon: <ShoppingCart className="h-4 w-4" />,
              action: {
                label: 'View',
                onClick: () => toast.info('Opening order #12345'),
              },
            })
          }
        >
          With action
        </Button>
        <Button
          block
          variant="outline"
          size="xs"
          onClick={() =>
            toast('File deleted', {
              description: 'report.pdf was moved to trash.',
              icon: <Undo2 className="h-4 w-4" />,
              action: {
                label: 'Undo',
                onClick: () => toast.success('File restored'),
              },
              cancel: {
                label: 'Dismiss',
                onClick: () => {},
              },
            })
          }
        >
          Action + cancel
        </Button>
        <Button
          block
          variant="outline"
          size="xs"
          onClick={() =>
            toast.help('Need a hand?', {
              description: 'You can keep this open while you finish the form.',
              duration: false,
              action: {
                label: 'Got it',
                onClick: () => {},
              },
            })
          }
        >
          Sticky with action
        </Button>
      </div>
    </div>
  );
};

export default ActionsExample;
