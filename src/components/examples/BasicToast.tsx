import { AlertCircle, Check, MessageSquare, X } from 'lucide-react';
import { Button } from 'kalki-ui';
import { useToast } from '../common/toast';

const BasicToast = () => {
  const { addToast } = useToast();

  const showExampleToast = (
    variant: 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help' | 'light' | 'dark'
  ) => {
    addToast({
      message: 'This is a ' + variant + ' toast message',
      variant: variant,
      icon: <MessageSquare className="w-5 h-5" />,
    });
  };
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold tracking-tight text-foreground">Basic Toasts</h3>
      <div className="space-y-3">
        <Button onClick={() => showExampleToast('success')} block variant="success" size="xs">
          <Check className="w-4 h-4 mr-2" /> Success
        </Button>
        <Button onClick={() => showExampleToast('danger')} block variant="danger" size="xs">
          <X className="w-4 h-4 mr-2" /> Error
        </Button>
        <Button
          onClick={() =>
            addToast({
              message: 'Please check your input',
              variant: 'warning',
              icon: <AlertCircle className="w-5 h-5" />,
            })
          }
          block
          variant="warning"
          size="xs"
        >
          <AlertCircle className="w-4 h-4 mr-2" /> Warning
        </Button>
      </div>
    </div>
  );
};

export default BasicToast;
