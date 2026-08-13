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
import SectionHeader from './components/ui/SectionHeader';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      <main className="relative min-w-0 pt-14">
        <HeroSection />
        <ToastInstallationCard />

        <section id="examples" className="section-muted scroll-mt-14">
          <div className="container relative py-20 sm:py-24">
            <SectionHeader
              eyebrow="Playground"
              title="Interactive examples"
              description="Every example imports from kalki-ui-toast and drives the live toaster on this page."
            />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <BasicToast />
              <ActionsExample />
              <PromiseExample />
              <ControlExample />
              <CustomStyling />
              <HookExample />
            </div>
          </div>
        </section>

        <section id="customize" className="scroll-mt-14">
          <div className="container py-20 sm:py-24">
            <SectionHeader
              eyebrow="Customize"
              title="Positions and variants"
              description="Place toasts on any edge and preview every built-in visual style."
            />
            <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
              <PositionsExample />
              <VariantsExample />
            </div>
            <div className="mt-5">
              <ToastBomb />
            </div>
          </div>
        </section>

        <section id="docs" className="section-muted scroll-mt-14">
          <div className="container relative py-20 sm:py-24">
            <SectionHeader
              eyebrow="Documentation"
              title="Get started"
              description="Install the package, mount Toaster, and call toast from anywhere."
            />
            <Documentation />
          </div>
        </section>

        <section id="api" className="scroll-mt-14">
          <div className="container py-20 sm:py-24">
            <SectionHeader
              eyebrow="Reference"
              title="API"
              description="Full surface of kalki-ui-toast: methods, options, Toaster props, the hook, CSS variables, and a11y behavior."
            />
            <ApiReference />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
