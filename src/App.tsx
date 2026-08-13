import TopBar from './components/layout/TopBar/TopBar';
import Footer from './components/layout/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import BasicToast from './components/examples/BasicToast';
import CustomStyling from './components/examples/CustomStyling';
import AdvancedFeatures from './components/examples/AdvancedFeatures';
import Documentation from './components/Docs/Documentation';
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
              Trigger notifications, customize appearance, and try advanced patterns without leaving the page.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="docs-card rounded-xl p-6 transition-shadow hover:shadow-sm">
              <BasicToast />
            </div>
            <div className="docs-card rounded-xl p-6 transition-shadow hover:shadow-sm">
              <CustomStyling />
            </div>
            <div className="docs-card rounded-xl p-6 transition-shadow hover:shadow-sm">
              <AdvancedFeatures />
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-muted/30">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Customize</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Positions and variants</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Place toasts anywhere on the screen and preview every built-in visual style.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="docs-card rounded-xl p-6 sm:p-8">
                <PositionsExample />
              </div>
              <div className="docs-card rounded-xl p-6 sm:p-8">
                <VariantsExample />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div className="mx-auto max-w-xl">
            <div className="docs-card rounded-xl p-6 sm:p-8">
              <ToastBomb />
            </div>
          </div>
        </section>

        <section id="docs" className="scroll-mt-14 border-t border-border/60 bg-muted/30">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Documentation</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Get started in minutes</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Install the package, wrap your app, and start showing toasts from anywhere.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Documentation />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
