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
    force: process.env.FORCE_PREBUNDLE === "true",
    include: ["@pkg/one"],
  },
});
