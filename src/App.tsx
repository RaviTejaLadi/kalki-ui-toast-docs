import { Card } from 'kalki-ui';
import TopBar from './components/layout/TopBar/TopBar';
import Footer from './components/layout/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import BasicToast from './components/examples/BasicToast';
import CustomStyling from './components/examples/CustomStyling';
import ActionsExample from './components/examples/ActionsExample';
import PromiseExample from './components/examples/PromiseExample';
import ControlExample from './components/examples/ControlExample';
import HookExample from './components/examples/HookExample';
import Documentation from './components/Docs/Documentation';
import ApiReference from './components/Docs/ApiReference';
import PositionsExample from './components/examples/PositionsExample';
import VariantsExample from './components/examples/VariantsExample';
import ToastBomb from './components/examples/ToastBomb';
import ToastInstallationCard from './components/HeroSection/ToastInstallationCard';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      <main className="relative min-w-0 pt-14">
        <HeroSection />
        <ToastInstallationCard />

        <section id="examples" className="container scroll-mt-14 py-16 sm:py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Playground</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Interactive examples</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Every example imports from kalki-ui-toast and drives the live toaster on this page.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="docs-card h-full rounded-xl p-6 transition-shadow hover:shadow-sm">
              <BasicToast />
            </Card>
            <Card className="docs-card h-full rounded-xl p-6 transition-shadow hover:shadow-sm">
              <ActionsExample />
            </Card>
            <Card className="docs-card h-full rounded-xl p-6 transition-shadow hover:shadow-sm">
              <PromiseExample />
            </Card>
            <Card className="docs-card h-full rounded-xl p-6 transition-shadow hover:shadow-sm">
              <ControlExample />
            </Card>
            <Card className="docs-card h-full rounded-xl p-6 transition-shadow hover:shadow-sm">
              <CustomStyling />
            </Card>
            <Card className="docs-card h-full rounded-xl p-6 transition-shadow hover:shadow-sm">
              <HookExample />
            </Card>
          </div>
        </section>

        <section className="border-t border-border/60 bg-muted/30">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Customize</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Positions and variants</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Place toasts on any edge and preview every built-in visual style.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="docs-card rounded-xl p-6 sm:p-8">
                <PositionsExample />
              </Card>
              <Card className="docs-card rounded-xl p-6 sm:p-8">
                <VariantsExample />
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div className="mx-auto max-w-xl">
            <Card className="docs-card rounded-xl p-6 sm:p-8">
              <ToastBomb />
            </Card>
          </div>
        </section>

        <section id="docs" className="scroll-mt-14 border-t border-border/60 bg-muted/30">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Documentation</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Get started</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Install the package, mount Toaster, and call toast from anywhere.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Documentation />
            </div>
          </div>
        </section>

        <section id="api" className="scroll-mt-14 container py-16 sm:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Reference</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">API</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Full surface of kalki-ui-toast: methods, options, Toaster props, the hook, CSS variables, and a11y
              behavior.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <ApiReference />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
