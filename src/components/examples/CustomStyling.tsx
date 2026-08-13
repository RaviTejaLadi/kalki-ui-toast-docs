import { Lightbulb, Palette, Settings2 } from 'lucide-react';
import Button from '../common/Button';
import { useToast } from '../common/toast';

const CustomStyling = () => {
  const { addToast } = useToast();
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold tracking-tight text-foreground">Custom Styling</h3>
      <div className="space-y-3">
        <Button
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
          onClick={() =>
            addToast({
              message: 'Gradient styled toast',
              className: 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none',
              icon: <Lightbulb className="w-5 h-5" />,
            })
          }
          size={'xs'}
        >
          Gradient Style
        </Button>
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() =>
            addToast({
              message: 'Custom blue toast',
              className: 'bg-blue-500 text-white border-none',
              icon: <Settings2 className="w-5 h-5" />,
            })
          }
          size={'xs'}
        >
          Custom Blue
        </Button>
        <Button
          className="w-full bg-green-500 hover:bg-green-600 text-white"
          onClick={() =>
            addToast({
              message: 'Eco-friendly toast',
              className: 'bg-green-500 text-white border-none',
              icon: <Palette className="w-5 h-5" />,
            })
          }
          size={'xs'}
        >
          Nature Theme
        </Button>
      </div>
    </div>
  );
};

export default CustomStyling;
