import { ToastVariant, useToast } from '../common/toast';
import Button from '../common/Button';

const variants: { label: string; value: ToastVariant; message: string }[] = [
  { label: 'Default', value: 'default', message: 'Just a simple toast! 😊' },
  { label: 'Primary', value: 'primary', message: 'This is a primary toast! 🔵' },
  { label: 'Secondary', value: 'secondary', message: 'Check out this secondary toast! ⚪️' },
  { label: 'Success', value: 'success', message: 'Success! 🎉 Your operation was successful.' },
  { label: 'Info', value: 'info', message: 'Here’s some info for you! ℹ️' },
  { label: 'Warning', value: 'warning', message: 'Warning! ⚠️ Proceed with caution.' },
  { label: 'Danger', value: 'danger', message: 'Danger! 🚨 Something went wrong.' },
  { label: 'Help', value: 'help', message: 'Need help? 🆘 Here’s a toast for that!' },
  { label: 'Light', value: 'light', message: 'Light mode activated! 💡' },
  { label: 'Dark', value: 'dark', message: 'Dark mode is the way! 🌙' },
];

const ToastBomb = () => {
  const { addToast } = useToast();

  const handleToastBomb = () => {
    variants.forEach(({ value, message }, index) => {
      setTimeout(() => {
        addToast({
          message,
          variant: value,
          autoClose: (index + 1) * 3000,
        });
      }, index * 500); // Delay each toast by 500ms
    });
  };

  return (
    <div className="w-full  mx-auto p-6  ">
      <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Toast Bomb 💣</h3>
      <p className="text-muted-foreground mb-6">Click the button below to trigger all toast variants simultaneously!</p>
      <Button onClick={handleToastBomb} variant="primary" size={'xs'}>
        Trigger Toast Bomb 💣
      </Button>
    </div>
  );
};

export default ToastBomb;
