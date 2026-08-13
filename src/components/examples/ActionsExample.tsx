import { toast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';
import { MousePointerClick, ShoppingCart, Undo2 } from 'lucide-react';
import { ExampleCard } from '../ui/ExampleCard';

const ActionsExample = () => {
  return (
    <ExampleCard
      icon={<MousePointerClick className="h-4 w-4" />}
      accent="blue"
      title="Title, description, actions"
      description="Add a second line and action buttons. Actions dismiss unless you pass preventDismiss."
    >
      <Button
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
    </ExampleCard>
  );
};

export default ActionsExample;
