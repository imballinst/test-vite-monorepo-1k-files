import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pkg/one": path.resolve("../../packages/package-1/src/index.ts"),
    },
  },
  optimizeDeps: {
    include: ["@pkg/one"],
    // include: ["../../packages/package-1/src/**/*.ts"],
  },
});
