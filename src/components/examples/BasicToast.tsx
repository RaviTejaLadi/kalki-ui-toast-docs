import Button from "../common/Button";
import { AlertCircle, Check, MessageSquare, X } from "lucide-react";
import { useToast } from "../common/toast";

const BasicToast = () => {
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
  return (
    <div className=" rounded-lg  p-6  transition-shadow">
      <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
        Basic Toasts
      </h3>
      <div className="space-y-3">
        <Button
          onClick={() => showExampleToast("success")}
          className="w-full"
          variant="success"
          size={"xs"}
        >
          <Check className="w-4 h-4 mr-2" /> Success
        </Button>
        <Button
          onClick={() => showExampleToast("danger")}
          className="w-full"
          variant="danger"
          size={"xs"}
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
          variant="warning"
          size={"xs"}
        >
          <AlertCircle className="w-4 h-4 mr-2" /> Warning
        </Button>
      </div>
    </div>
  );
};

export default BasicToast;
