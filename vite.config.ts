import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Your actual frontend lives inside /client
  root: "client",

  plugins: [
    react(),
  ],

  // Build output will be: client/dist
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  // Path aliases (safe & minimal)
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
