import { toast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';

const ControlExample = () => {
  return (
    <div>
      <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground">Duration and dismiss</h3>
      <p className="mb-4 text-sm text-muted-foreground">Control lifetime, hide chrome, or dismiss from code.</p>
      <div className="space-y-3">
        <Button
          block
          variant="outline"
          size="xs"
          onClick={() => toast.info('This stays for 10 seconds', { duration: 10000 })}
        >
          Custom duration
        </Button>
        <Button
          block
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
          block
          variant="outline"
          size="xs"
          onClick={() =>
            toast.secondary('Minimal toast', {
              icon: false,
              showClose: false,
              showProgress: false,
              duration: 3000,
            })
          }
        >
          No icon, close, or bar
        </Button>
        <Button block variant="outline" size="xs" onClick={() => toast.dismiss()}>
          Dismiss all
        </Button>
      </div>
    </div>
  );
};

export default ControlExample;
