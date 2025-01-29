import { ToastVariant, useToast } from '../common/toast';
import { SyntaxHighlighter } from '../common/SyntaxHighLighter/SyntaxHighLighter';
import Button, { ButtonText, ButtonIcon } from '../common/Button';

import { Circle, CircleDot, Info, CheckCircle, AlertTriangle, XCircle, HelpCircle, Sun, Moon } from 'lucide-react';

const variants: { label: string; value: ToastVariant; icon: JSX.Element }[] = [
  { label: 'Default', value: 'default', icon: <Circle className="h-3.5 w-3.5" /> }, // Neutral
  { label: 'Primary', value: 'primary', icon: <CircleDot className="h-3.5 w-3.5" /> }, // Highlighted dot
  { label: 'Secondary', value: 'secondary', icon: <Circle className="h-3.5 w-3.5" /> }, // Simple circle
  { label: 'Success', value: 'success', icon: <CheckCircle className="h-3.5 w-3.5" /> }, // Checkmark circle
  { label: 'Info', value: 'info', icon: <Info className="h-3.5 w-3.5" /> }, // Info icon
  { label: 'Warning', value: 'warning', icon: <AlertTriangle className="h-3.5 w-3.5" /> }, // Warning triangle
  { label: 'Danger', value: 'danger', icon: <XCircle className="h-3.5 w-3.5" /> }, // Cross circle
  { label: 'Help', value: 'help', icon: <HelpCircle className="h-3.5 w-3.5" /> }, // Help circle
  { label: 'Light', value: 'light', icon: <Sun className="h-3.5 w-3.5" /> }, // Sun icon
  { label: 'Dark', value: 'dark', icon: <Moon className="h-3.5 w-3.5" /> }, // Moon icon
];

const VariantsExample = () => {
  const { addToast } = useToast();

  const handleVariantToast = (variant: ToastVariant) => {
    addToast({
      message: `This is a ${variant} toast!`,
      variant,
      autoClose: 3000,
      showClose:false,
      icon: variants.find((v) => v.value === variant)?.icon,
    });
  };

  return (
    <div className="w-full mx-auto ">
      <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Explore Toast Variants</h3>

      <div className="flex flex-col  gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {variants.map(({ label, value, icon }) => (
            <Button
              key={value}
              onClick={() => handleVariantToast(value)}
              variant={value === 'default' ? 'outline' : value}
              size={'xs'}
            >
              <ButtonIcon className="mr-2">{icon}</ButtonIcon>
              <ButtonText>{label}</ButtonText>
            </Button>
          ))}
        </div>
        <div className="">
          <SyntaxHighlighter
            code={`addToast({\n  message: "This is a ${variants[0].value} toast!",\n  variant: "${variants[0].value}",\n  autoClose: 3000\n});`}
            language="jsx"
          />
        </div>
      </div>
    </div>
  );
};

export default VariantsExample;
