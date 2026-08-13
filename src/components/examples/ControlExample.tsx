import { toast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';
import { Timer } from 'lucide-react';
import { ExampleCard } from '../ui/ExampleCard';

const ControlExample = () => {
  return (
    <ExampleCard
      icon={<Timer className="h-4 w-4" />}
      accent="amber"
      title="Duration and dismiss"
      description="Control lifetime, hide chrome, or dismiss every toast from code."
    >
      <Button variant="outline" size="xs" onClick={() => toast.info('This stays for 10 seconds', { duration: 10000 })}>
        Custom duration
      </Button>
      <Button
        variant="outline"
        size="xs"
        onClick={() =>
          toast.primary('Pinned notification', {
            description: 'duration: false keeps it until you close it.',
            duration: false,
          })
        }
      >
        Sticky toast
      </Button>
      <Button
        variant="outline"
        size="xs"
        onClick={() =>
          toast.secondary('Minimal toast', {
            icon: false,
            showClose: false,
            duration: 3000,
          })
        }
      >
        No icon or close
      </Button>
      <Button variant="outline" size="xs" onClick={() => toast.dismiss()}>
        Dismiss all
      </Button>
    </ExampleCard>
  );
};

export default ControlExample;
