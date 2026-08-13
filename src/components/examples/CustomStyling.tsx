import { Lightbulb, Palette, Settings2 } from 'lucide-react';
import { Button } from 'kalki-ui';
import { toast } from 'kalki-ui-toast';

const CustomStyling = () => {
  return (
    <div>
      <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground">Custom styling</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Override colors with the style prop. CSS variables also work on .kalki-ui-toast.
      </p>
      <div className="space-y-3">
        <Button
          block
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
          onClick={() =>
            toast('Gradient styled toast', {
              icon: <Lightbulb className="h-4 w-4" />,
              style: {
                background: 'linear-gradient(to right, #ec4899, #a855f7)',
                color: '#fff',
                borderColor: 'transparent',
              },
            })
          }
          size="xs"
        >
          Gradient
        </Button>
        <Button
          block
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() =>
            toast('Custom blue toast', {
              icon: <Settings2 className="h-4 w-4" />,
              style: {
                background: '#3b82f6',
                color: '#fff',
                borderColor: 'transparent',
              },
            })
          }
          size="xs"
        >
          Custom blue
        </Button>
        <Button
          block
          className="bg-green-500 text-white hover:bg-green-600"
          onClick={() =>
            toast('Eco-friendly toast', {
              icon: <Palette className="h-4 w-4" />,
              rounded: true,
              style: {
                background: '#22c55e',
                color: '#fff',
                borderColor: 'transparent',
              },
            })
          }
          size="xs"
        >
          Nature theme
        </Button>
      </div>
    </div>
  );
};

export default CustomStyling;
