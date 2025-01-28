import { ToastVariant, useToast } from "../common/toast";
import { SyntaxHighlighter } from "../common/SyntaxHighLighter/SyntaxHighLighter";
import Button from "../common/Button";

const variants: { label: string; value: ToastVariant }[] = [
  { label: "Default", value: "default" },
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Success", value: "success" },
  { label: "Info", value: "info" },
  { label: "Warning", value: "warning" },
  { label: "Danger", value: "danger" },
  { label: "Help", value: "help" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

const VariantsExample = () => {
  const { addToast } = useToast();

  const handleVariantToast = (variant: ToastVariant) => {
    addToast({
      message: `This is a ${variant} toast!`,
      variant,
      autoClose: 3000,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto ">
      <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
        Explore Toast Variants
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {variants.map(({ label, value }) => (
            <Button
              key={value}
              onClick={() => handleVariantToast(value)}
              variant={value === "default" ? "outline" : value}
              size={"xs"}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="">
          <SyntaxHighlighter
            code={`addToast({\n  message: "This is a ${variants[0].value} toast!",\n  variant: "${variants[0].value}",\n  autoClose: 3000\n});`}
            language="jsx"
          />
        </div>
      </div>
    </div>
  );
};

export default VariantsExample;
