import { Lightbulb, Palette, Settings2 } from 'lucide-react';
import { Button } from 'kalki-ui';
import { toast } from 'kalki-ui-toast';
import { ExampleCard } from '../ui/ExampleCard';

const CustomStyling = () => {
  return (
    <ExampleCard
      icon={<Palette className="h-4 w-4" />}
      accent="violet"
      title="Custom styling"
      description="Override colors with the style prop. CSS variables also work on .kalki-ui-toast."
    >
      <Button
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
    </ExampleCard>
  );
};

export default CustomStyling;
