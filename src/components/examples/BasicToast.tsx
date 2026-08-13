import { toast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';

const BasicToast = () => {
  return (
    <div>
      <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground">Basic toasts</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Call a variant helper. Default icons and a progress bar are included.
      </p>
      <div className="space-y-3">
        <Button onClick={() => toast.success('Changes saved')} block variant="success" size="xs">
          Success
        </Button>
        <Button
          onClick={() => toast.error('Could not save', { description: 'Check your connection and try again.' })}
          block
          variant="danger"
          size="xs"
        >
          Error
        </Button>
        <Button onClick={() => toast.warning('Your session expires in 5 minutes')} block variant="warning" size="xs">
          Warning
        </Button>
      </div>
    </div>
  );
};

export default BasicToast;
