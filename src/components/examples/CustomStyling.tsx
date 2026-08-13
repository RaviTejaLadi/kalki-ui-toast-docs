import { Lightbulb, Palette, Settings2 } from 'lucide-react';
import { Button } from 'kalki-ui';
import { useToast } from '../common/toast';

const CustomStyling = () => {
  const { addToast } = useToast();
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold tracking-tight text-foreground">Custom Styling</h3>
      <div className="space-y-3">
        <Button
          block
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
          onClick={() =>
            addToast({
              message: 'Gradient styled toast',
              className: 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none',
              icon: <Lightbulb className="w-5 h-5" />,
            })
          }
          size="xs"
        >
          Gradient Style
        </Button>
        <Button
          block
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() =>
            addToast({
              message: 'Custom blue toast',
              className: 'bg-blue-500 text-white border-none',
              icon: <Settings2 className="w-5 h-5" />,
            })
          }
          size="xs"
        >
          Custom Blue
        </Button>
        <Button
          block
          className="bg-green-500 text-white hover:bg-green-600"
          onClick={() =>
            addToast({
              message: 'Eco-friendly toast',
              className: 'bg-green-500 text-white border-none',
              icon: <Palette className="w-5 h-5" />,
            })
          }
          size="xs"
        >
          Nature Theme
        </Button>
      </div>
    </div>
  );
};

export default CustomStyling;
