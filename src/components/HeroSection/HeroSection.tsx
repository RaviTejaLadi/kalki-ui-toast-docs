import { BookOpen, ShoppingCart } from 'lucide-react';
import { useToast } from '../common/toast/ToastContext';
import Button from '../common/Button';

const HeroSection = () => {
  const { addToast } = useToast();

  const showMultilineToast = () => {
    addToast({
      message: (
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Order Confirmed!</p>
          <p className="text-sm text-muted-foreground">Your order #12345 has been placed successfully.</p>
        </div>
      ),
      icon: <ShoppingCart className="w-5 h-5" />,
      variant: 'success',
      autoClose: 5000,
    });
  };

  return (
    <section className="relative py-16 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5" />
      <div className="container relative mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Beautiful Toast Notifications
            <br />
            for React Applications
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A lightweight, customizable, and accessible toast notification system built with React and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button onClick={showMultilineToast} size={'sm'} className="shadow-lg">
              Try it out
            </Button>
            <Button
              variant="outline"
              size={'sm'}
              onClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-inherit text-foreground shadow-lg"
            >
              <BookOpen className="mr-2 w-4 h-4" />
              Read the docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
