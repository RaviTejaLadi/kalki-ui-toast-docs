import { Box } from "lucide-react";
import { ReactNode } from "react";
import { SyntaxHighlighter } from "../common/SyntaxHighLighter/SyntaxHighLighter";

interface usageData {
  label: string;
  content: ReactNode;
  icon: ReactNode;
}

const installationContent = `npm install kalki-ui-toast`;

const setupContent = `
import { ToastProvider } from '@your-org/toast-ui';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}
`;
const usageContent = `
import { useToast } from '@your-org/toast-ui';

function MyComponent() {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      message: 'Hello World!',
      variant: 'success',
      icon: <Check className="w-5 h-5" />
    });
  };

  return <button onClick={showToast}>Show Toast</button>;
}`;

const apiContent = `
interface ToastProps {
  message: ReactNode;
  variant?: 'default' | 'success' | 'destructive' | 'warning';
  autoClose?: number | false;
  icon?: ReactNode;
  className?: string;
  position?: 'top-right' | 'top-center' | 'top-left' |
             'bottom-right' | 'bottom-center' | 'bottom-left';
}
`;

export const usage: usageData[] = [
  {
    label: "Installation",
    content: (
      <div className="p-2">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Installation
        </h3>
        <div className="rounded-md mb-4 overflow-x-auto">
          <SyntaxHighlighter code={installationContent} language="jsx"/>
        </div>
        <p className="text-muted-foreground mb-4">
          First, wrap your application with the ToastProvider:
        </p>
        <div className="rounded-md overflow-x-auto">
          <SyntaxHighlighter code={setupContent} />
        </div>
      </div>
    ),
    icon: <Box />,
  },
  {
    label: "Usage",
    content: (
      <div className="p-2">
        <h3 className="text-xl text-foreground font-semibold mb-4">
          Basic Usage
        </h3>
        <p className="text-muted-foreground mb-4">
          Use the useToast hook to show notifications:
        </p>
        <div className="rounded-md mb-6 overflow-x-auto">
          <SyntaxHighlighter code={usageContent} />
        </div>
      </div>
    ),
    icon: <Box />,
  },
  {
    label: "Api",
    content: (
      <div className="p-2">
        <h3 className="text-xl text-foreground font-semibold mb-4">
          API Reference
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-muted-foreground mb-2">
              ToastProps
            </h4>
            <div className="rounded-md  overflow-x-auto">
              <SyntaxHighlighter code={apiContent} />
            </div>
          </div>
        </div>
      </div>
    ),
    icon: <Box />,
  },
];
