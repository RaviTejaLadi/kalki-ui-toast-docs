import TopBar from "./components/layout/TopBar/TopBar";
import Footer from "./components/layout/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import BasicToast from "./components/examples/BasicToast";
import CustomStyling from "./components/examples/CustomStyling";
import AdvancedFeatures from "./components/examples/AdvancedFeatures";
import Documentation from "./components/Docs/Documentation";

function App() {
  return (
    <div className="bg-background dark:bg-background/90">
      {/* Sticky Header */}
      <TopBar />

      <main className="relative">
        {/* Hero Section with Gradient Background */}
        <HeroSection />

        {/* Interactive Examples Section */}
        <section id="examples" className="py-20 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Interactive Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Basic Toasts */}
              <BasicToast />

              {/* Custom Styling */}
              <CustomStyling />

              {/* Advanced Features */}
              <AdvancedFeatures />
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="docs" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
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
