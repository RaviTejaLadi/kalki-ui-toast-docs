import { ToastVariant, useToast } from "../common/toast";
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

const ToastBomb = () => {
  const { addToast } = useToast();

  const handleToastBomb = () => {
    variants.forEach(({ value }, index) => {
      setTimeout(() => {
        addToast({
          message: `This is a ${value} toast!`,
          variant: value,
          autoClose: index * 3000,
        });
      }, index * 500); // Delay each toast by 500ms
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6  ">
      <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
        Toast Bomb 💣
      </h3>
      <p className="text-muted-foreground mb-6">
        Click the button below to trigger all toast variants simultaneously!
      </p>
      <Button onClick={handleToastBomb} variant="primary" size={"xs"}>
        Trigger Toast Bomb 💣
      </Button>
    </div>
  );
};

export default ToastBomb;
