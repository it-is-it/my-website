import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Example alias for easier imports
    },
  },
  server: {
    port: 3000, // Change the default port if needed
  },
  build: {
    outDir: 'dist', // Customize the output directory
  },
});
