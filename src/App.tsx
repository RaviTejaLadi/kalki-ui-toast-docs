import { Button } from "@/components/ui/button";
import { useToast } from "@/components/common/toast/ToastContext";
import {
  Lightbulb,
  MessageSquare,
  Palette,
  Settings2,
  Check,
  X,
  AlertCircle,
  Timer,
  Loader2,
  ShoppingCart,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from "./components/layout/TopBar/TopBar";
import Footer from "./components/layout/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  const { addToast } = useToast();

  const showExampleToast = (
    variant:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "danger"
      | "help"
      | "light"
      | "dark"
  ) => {
    addToast({
      message: "This is a " + variant + " toast message",
      variant: variant,
      icon: <MessageSquare className="w-5 h-5" />,
    });
  };

  const showPromiseToast = async () => {
    addToast({
      message: "Loading your data...",
      icon: <Loader2 className="w-5 h-5 animate-spin" />,
      variant: "default",
      autoClose: false,
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      addToast({
        message: "Data loaded successfully!",
        icon: <Check className="w-5 h-5" />,
        variant: "success",
      });
    } catch {
      addToast({
        message: "Error loading data",
        icon: <X className="w-5 h-5" />,
        variant: "danger",
      });
    }
  };

  const showMultilineToast = () => {
    addToast({
      message: (
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Order Confirmed!</p>
          <p className="text-sm text-muted-foreground">
            Your order #12345 has been placed successfully.
          </p>
        </div>
      ),
      icon: <ShoppingCart className="w-5 h-5" />,
      variant: "success",
      autoClose: 5000,
    });
  };

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
              <div className=" rounded-lg  p-6  transition-shadow">
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                  Basic Toasts
                </h3>
                <div className="space-y-3">
                  <Button
                    onClick={() => showExampleToast("success")}
                    className="w-full"
                    variant="secondary"
                  >
                    <Check className="w-4 h-4 mr-2" /> Success
                  </Button>
                  <Button
                    onClick={() => showExampleToast("danger")}
                    className="w-full"
                    variant="destructive"
                  >
                    <X className="w-4 h-4 mr-2" /> Error
                  </Button>
                  <Button
                    onClick={() =>
                      addToast({
                        message: "Please check your input",
                        variant: "warning",
                        icon: <AlertCircle className="w-5 h-5" />,
                      })
                    }
                    className="w-full"
                    variant="ghost"
                  >
                    <AlertCircle className="w-4 h-4 mr-2" /> Warning
                  </Button>
                </div>
              </div>

              {/* Custom Styling */}
              <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                  Custom Styling
                </h3>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                    onClick={() =>
                      addToast({
                        message: "Gradient styled toast",
                        className:
                          "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none",
                        icon: <Lightbulb className="w-5 h-5" />,
                      })
                    }
                  >
                    Gradient Style
                  </Button>
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() =>
                      addToast({
                        message: "Custom blue toast",
                        className: "bg-blue-500 text-white border-none",
                        icon: <Settings2 className="w-5 h-5" />,
                      })
                    }
                  >
                    Custom Blue
                  </Button>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() =>
                      addToast({
                        message: "Eco-friendly toast",
                        className: "bg-green-500 text-white border-none",
                        icon: <Palette className="w-5 h-5" />,
                      })
                    }
                  >
                    Nature Theme
                  </Button>
                </div>
              </div>

              {/* Advanced Features */}
              <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                  Advanced Features
                </h3>
                <div className="space-y-3">
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={showPromiseToast}
                  >
                    <Timer className="w-4 h-4 mr-2" /> Promise Toast
                  </Button>
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={showMultilineToast}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" /> Multiline
                  </Button>
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() =>
                      addToast({
                        message: "Custom duration toast",
                        autoClose: 10000,
                        icon: <Timer className="w-5 h-5" />,
                      })
                    }
                  >
                    <Timer className="w-4 h-4 mr-2" /> Custom Duration
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="docs" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="installation" className="space-y-6">
                <TabsList className="inline-flex h-auto p-1 bg-muted rounded-lg w-full max-w-md mx-auto">
                  <TabsTrigger value="installation" className="flex-1">
                    Installation
                  </TabsTrigger>
                  <TabsTrigger value="usage" className="flex-1">
                    Usage
                  </TabsTrigger>
                  <TabsTrigger value="api" className="flex-1">
                    API
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="installation">
                  <div className="rounded-lg border bg-card p-6">
                    <h3 className="text-xl font-semibold mb-4">Installation</h3>
                    <div className="bg-muted p-4 rounded-md mb-4 overflow-x-auto">
                      <code className="text-sm">
                        npm install @your-org/toast-ui
                      </code>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      First, wrap your application with the ToastProvider:
                    </p>
                    <div className="bg-muted p-4 rounded-md overflow-x-auto">
                      <pre className="text-sm">
                        {`import { ToastProvider } from '@your-org/toast-ui';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="usage">
                  <div className="rounded-lg border bg-card p-6">
                    <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
                    <p className="text-muted-foreground mb-4">
                      Use the useToast hook to show notifications:
                    </p>
                    <div className="bg-muted p-4 rounded-md mb-6 overflow-x-auto">
                      <pre className="text-sm">
                        {`import { useToast } from '@your-org/toast-ui';

function MyComponent() {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      message: 'Hello World!',
      variant: 'success',
      icon: <Check className="w-5 h-5" />
    });
  };

  return <button onClick={showToast}>Show Toast</button>;
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="api">
                  <div className="rounded-lg border bg-card p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      API Reference
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          ToastProps
                        </h4>
                        <div className="bg-muted p-4 rounded-md overflow-x-auto">
                          <pre className="text-sm">
                            {`interface ToastProps {
  message: ReactNode;
  variant?: 'default' | 'success' | 'destructive' | 'warning';
  autoClose?: number | false;
  icon?: ReactNode;
  className?: string;
  position?: 'top-right' | 'top-center' | 'top-left' |
             'bottom-right' | 'bottom-center' | 'bottom-left';
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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
