import { toast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';
import { Bell } from 'lucide-react';
import { ExampleCard } from '../ui/ExampleCard';

const BasicToast = () => {
  return (
    <ExampleCard
      icon={<Bell className="h-4 w-4" />}
      accent="emerald"
      title="Basic toasts"
      description="Call a variant helper. The card stays neutral — status lives on the icon."
    >
      <Button onClick={() => toast.success('Changes saved')} variant="success" size="xs">
        Success
      </Button>
      <Button
        onClick={() => toast.error('Could not save', { description: 'Check your connection and try again.' })}
        variant="danger"
        size="xs"
      >
        Error
      </Button>
      <Button onClick={() => toast.warning('Your session expires in 5 minutes')} variant="warning" size="xs">
        Warning
      </Button>
    </ExampleCard>
  );
};

export default BasicToast;
