import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastProvider, ToastContainer } from "@/components/common/toast/index";
import { ThemeProvider } from "./components/context/ThemeContext.js";
import { useToastStore } from "./store/useToastPositionStore";

const Main = () => {
  const { position } = useToastStore();

  return (
    <div>
      <ToastProvider>
        <App />
        <ToastContainer position={position} />
      </ToastProvider>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </StrictMode>
);
