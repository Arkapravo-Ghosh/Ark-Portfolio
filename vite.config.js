import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ark-Portfolio/',
  server: {
    port: 3000,
    historyApiFallback: true,
  },
  build: {
    outDir: './Ark-Portfolio'
  },
});
