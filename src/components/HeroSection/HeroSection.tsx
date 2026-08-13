import { toast } from 'kalki-ui-toast';
import { Badge, Button } from 'kalki-ui';
import { ArrowRight, BookOpen } from 'lucide-react';
import { FloatingShapes } from './FloatingShapes';
import { ReactLogo, TailwindLogo, TypeScriptLogo } from './Logos';
import { TextReveal } from './animations/TextReveal';
import { GradientText } from './animations/GradientText';

const HeroSection = () => {
  const showDemo = () => {
    toast.success('Order confirmed', {
      description: 'Your order #12345 has been placed successfully.',
      action: {
        label: 'View',
        onClick: () => toast.info('Opening order #12345'),
      },
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
            <Badge
              variant="outline"
              size="sm"
              pill
              className="border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur"
            >
              Toaster + toast() · Accessible · Theme-aware
            </Badge>
          </TextReveal>

          <TextReveal delay={350}>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <GradientText delay={400}>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">Kalki UI Toast</h1>
              </GradientText>
              <p className="mx-auto max-w-xl text-balance text-base font-medium text-muted-foreground md:text-lg">
                A production toast system for React. Mount once, call from anywhere, and keep styles scoped to the
                library.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={550}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="sm" onClick={showDemo} className="group/arrow min-w-[10rem] font-semibold">
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
