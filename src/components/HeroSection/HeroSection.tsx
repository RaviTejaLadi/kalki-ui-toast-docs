import { ArrowRight, BookOpen, ShoppingCart } from 'lucide-react';
import { useToast } from '../common/toast/ToastContext';
import Button from '../common/Button';
import { FloatingShapes } from './FloatingShapes';
import { ReactLogo, TailwindLogo, TypeScriptLogo } from './Logos';
import { TextReveal } from './animations/TextReveal';
import { GradientText } from './animations/GradientText';

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
    <section className="relative w-full overflow-hidden border-b border-border/60">
      <FloatingShapes />
      <div className="relative mx-auto grid max-w-screen-xl place-items-center gap-8 px-6 py-24 md:py-32 lg:px-8">
        <div className="space-y-8 text-center">
          <TextReveal delay={100}>
            <div className="flex items-center justify-center gap-5 opacity-80">
              <ReactLogo />
              <TypeScriptLogo />
              <TailwindLogo />
            </div>
          </TextReveal>

          <TextReveal delay={200}>
            <span className="inline-flex rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              Lightweight · Accessible · Customizable
            </span>
          </TextReveal>

          <TextReveal delay={350}>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <GradientText delay={400}>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">Kalki UI Toast</h1>
              </GradientText>
              <p className="mx-auto max-w-xl text-balance text-base font-medium text-muted-foreground md:text-lg">
                A lightweight, customizable, and accessible toast notification system built with React and Tailwind CSS.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={550}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="sm" onClick={showMultilineToast} className="group/arrow min-w-[10rem] font-semibold">
                Try it out
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/arrow:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })}
                className="min-w-[10rem] font-semibold"
              >
                <BookOpen className="mr-2 size-4" />
                Read the docs
              </Button>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
