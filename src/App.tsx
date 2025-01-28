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

function App() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Sticky Header */}
      <TopBar />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
          <HeroSection />
        </section>

        {/* Interactive Examples Section */}
        <section id="examples" className="py-20 ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Interactive Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-6  rounded-md border dark:border-gray-200/10 transition-shadow duration-300">
                <BasicToast />
              </div>
              <div className="p-6 rounded-md border dark:border-gray-200/10 transition-shadow duration-300">
                <CustomStyling />
              </div>
              <div className="p-6 rounded-md border dark:border-gray-200/10  transition-shadow duration-300">
                <AdvancedFeatures />
              </div>
            </div>
          </div>
        </section>

        {/* Examples Grid Section */}
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="p-8 rounded-md border dark:border-gray-200/10">
                <PositionsExample />
              </div>
              <div className="p-8 rounded-md border dark:border-gray-200/10 ">
                <VariantsExample />
              </div>
            </div>
          </div>
        </section>

        {/* Toast Bomb Demo Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="p-8 max-w-xl w-full rounded-md border dark:border-gray-200/10">
              <ToastBomb />
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="docs" className="py-24 ">
          <div className="container mx-auto px-4">
            <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
              <Documentation />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
