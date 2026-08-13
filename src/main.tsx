import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'kalki-ui/styles.css';
import './index.css';
import { Toaster } from 'kalki-ui-toast';
import { ThemeProvider, useTheme } from './components/context/ThemeContext.js';
import { useToastStore } from './store/useToastPositionStore';

const Main = () => {
  const { position } = useToastStore();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <App />
      <Toaster position={position} theme={theme} />
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </StrictMode>
);
