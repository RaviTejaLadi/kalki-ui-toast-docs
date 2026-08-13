import { Check, Loader2, ShoppingCart, Timer, X } from 'lucide-react';
import { Button } from 'kalki-ui';
import { useToast } from '../common/toast';

const AdvancedFeatures = () => {
  const { addToast } = useToast();

  const showPromiseToast = async () => {
    addToast({
      message: 'Loading your data...',
      icon: <Loader2 className="w-5 h-5 animate-spin" />,
      variant: 'default',
      autoClose: 2000,
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      addToast({
        message: 'Data loaded successfully!',
        icon: <Check className="w-5 h-5" />,
        variant: 'success',
      });
    } catch {
      addToast({
        message: 'Error loading data',
        icon: <X className="w-5 h-5" />,
        variant: 'danger',
      });
    }
  };

  const showMultilineToast = () => {
    addToast({
      message: (
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Order Confirmed!</p>
          <p className="text-sm text-muted-foreground">Your order #12345 has been placed successfully.</p>
        </div>
      ),
      icon: <ShoppingCart className="w-5 h-5" />,
      variant: 'success',
      autoClose: 5000,
    });
  };

  return (
    <div>
      <h3 className="mb-4 text-base font-semibold tracking-tight text-foreground">Advanced Features</h3>
      <div className="space-y-3">
        <Button block variant="outline" size="xs" onClick={showPromiseToast}>
          <Timer className="w-4 h-4 mr-2" /> Promise Toast
        </Button>
        <Button block variant="outline" onClick={showMultilineToast} size="xs">
          <ShoppingCart className="w-4 h-4 mr-2" /> Multiline
        </Button>
        <Button
          block
          variant="outline"
          onClick={() =>
            addToast({
              message: 'Custom duration toast',
              autoClose: 10000,
              icon: <Timer className="w-5 h-5" />,
            })
          }
          size="xs"
        >
          <Timer className="w-4 h-4 mr-2" /> Custom Duration
        </Button>
      </div>
    </div>
  );
};

export default AdvancedFeatures;
