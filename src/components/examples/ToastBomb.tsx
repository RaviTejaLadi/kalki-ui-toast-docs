import { toast, type ToastVariant } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';

const variants: { value: ToastVariant; message: string }[] = [
  { value: 'default', message: 'A simple notification' },
  { value: 'primary', message: 'A branded update' },
  { value: 'secondary', message: 'A low-emphasis message' },
  { value: 'success', message: 'Operation completed' },
  { value: 'info', message: 'Here is some context' },
  { value: 'warning', message: 'Proceed with caution' },
  { value: 'danger', message: 'Something went wrong' },
  { value: 'help', message: 'Need a hand with this?' },
  { value: 'light', message: 'Light surface toast' },
  { value: 'dark', message: 'Dark surface toast' },
];

const ToastBomb = () => {
  const handleToastBomb = () => {
    variants.forEach(({ value, message }, index) => {
      setTimeout(() => {
        toast(message, {
          variant: value,
          duration: 4000 + index * 400,
        });
      }, index * 280);
    });
  };

  return (
    <div className="mx-auto w-full text-center">
      <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground">Toast bomb</h3>
      <p className="mb-6 text-sm text-muted-foreground">
        Fire every variant. The toaster keeps at most five visible and drops the oldest.
      </p>
      <Button onClick={handleToastBomb} variant="primary" size="xs">
        Trigger all variants
      </Button>
    </div>
  );
};

export default ToastBomb;
