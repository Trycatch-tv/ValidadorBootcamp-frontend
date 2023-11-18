import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import vitest from 'vitest'; // Importa Vitest

/// <reference types="vitest" /> // Agrega la referencia de tipos de Vitest


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // vitest({
      // Configuración de Vitest, si es necesario
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
