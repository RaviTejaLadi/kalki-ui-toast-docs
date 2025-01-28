import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ToastProvider, ToastContainer } from '@/components/ui/toast/index';
import { ThemeProvider } from './components/context/ThemeContext.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <App />
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>
);
