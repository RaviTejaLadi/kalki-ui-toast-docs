import { toast, type ToastVariant } from 'kalki-ui-toast';
import { SyntaxHighlighter } from '@/components/SyntaxHighLighter';
import { Button, ButtonIcon, ButtonText } from 'kalki-ui';
import { Circle, CircleDot, Info, CheckCircle, AlertTriangle, XCircle, HelpCircle, Sun, Moon } from 'lucide-react';

const variants: { label: string; value: ToastVariant; icon: JSX.Element }[] = [
  { label: 'Default', value: 'default', icon: <Circle className="h-3.5 w-3.5" /> },
  { label: 'Primary', value: 'primary', icon: <CircleDot className="h-3.5 w-3.5" /> },
  { label: 'Secondary', value: 'secondary', icon: <Circle className="h-3.5 w-3.5" /> },
  { label: 'Success', value: 'success', icon: <CheckCircle className="h-3.5 w-3.5" /> },
  { label: 'Info', value: 'info', icon: <Info className="h-3.5 w-3.5" /> },
  { label: 'Warning', value: 'warning', icon: <AlertTriangle className="h-3.5 w-3.5" /> },
  { label: 'Danger', value: 'danger', icon: <XCircle className="h-3.5 w-3.5" /> },
  { label: 'Help', value: 'help', icon: <HelpCircle className="h-3.5 w-3.5" /> },
  { label: 'Light', value: 'light', icon: <Sun className="h-3.5 w-3.5" /> },
  { label: 'Dark', value: 'dark', icon: <Moon className="h-3.5 w-3.5" /> },
];

const VariantsExample = () => {
  const handleVariantToast = (variant: ToastVariant) => {
    toast(`This is a ${variant} toast`, {
      variant,
      description: `variant: "${variant}"`,
      duration: 3000,
    });
  };

  return (
    <div className="mx-auto w-full">
      <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground">Variants</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Ten built-in looks. <code className="text-xs">toast.error()</code> maps to{' '}
        <code className="text-xs">danger</code>.
      </p>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {variants.map(({ label, value, icon }) => (
            <Button
              key={value}
              onClick={() => handleVariantToast(value)}
              variant={value === 'default' ? 'outline' : value}
              size="xs"
            >
              <ButtonIcon className="mr-2">{icon}</ButtonIcon>
              <ButtonText>{label}</ButtonText>
            </Button>
          ))}
        </div>
        <SyntaxHighlighter
          code={`toast.success("Saved");\ntoast.error("Could not save");\ntoast({ title: "Hello", variant: "help" });`}
          language="jsx"
        />
      </div>
    </div>
  );
};

export default VariantsExample;
