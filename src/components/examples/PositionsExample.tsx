import { toast, type ToastPosition } from 'kalki-ui-toast';
import { useToastStore } from '@/store/useToastPositionStore';
import { SyntaxHighlighter } from '@/components/SyntaxHighLighter';
import { Button, ButtonIcon, ButtonText } from 'kalki-ui';

const positions: { label: string; value: ToastPosition; icon: string }[] = [
  { label: 'Top Left', value: 'top-left', icon: '↖' },
  { label: 'Top Center', value: 'top-center', icon: '↑' },
  { label: 'Top Right', value: 'top-right', icon: '↗' },
  { label: 'Bottom Left', value: 'bottom-left', icon: '↙' },
  { label: 'Bottom Center', value: 'bottom-center', icon: '↓' },
  { label: 'Bottom Right', value: 'bottom-right', icon: '↘' },
];

const PositionsExample = () => {
  const { position, setPosition } = useToastStore();

  const positionsToast = (value: ToastPosition) => {
    setPosition(value);
    toast.success(`Position: ${value}`, {
      description: 'Newest toasts sit closest to this edge.',
    });
  };

  return (
    <div className="mx-auto w-full">
      <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground">Position</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Pass position on <code className="text-xs">&lt;Toaster /&gt;</code>. This playground updates the live toaster.
      </p>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {positions.map(({ label, value, icon }) => (
            <Button
              key={value}
              onClick={() => positionsToast(value)}
              variant={position === value ? 'primary' : 'outline'}
              size="xs"
            >
              <ButtonIcon className="mr-2">{icon}</ButtonIcon>
              <ButtonText>{label}</ButtonText>
            </Button>
          ))}
        </div>
        <SyntaxHighlighter code={`<Toaster position="${position}" />`} language="jsx" />
      </div>
    </div>
  );
};

export default PositionsExample;
