import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'kalki-ui-toast-docs': 'kalki-ui-toast-docs',
    },
    dedupe: ['react', 'react-dom', 'kalki-ui'],
  },
  optimizeDeps: {
    exclude: ['kalki-ui-toast'],
  },
  server: {
    port: 3030,
    open: true,
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
    watch: {
      usePolling: true,
      interval: 50,
    },
  },
});
