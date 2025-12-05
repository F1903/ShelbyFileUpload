import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const wasmSensitiveDeps = [
  "@shelby-protocol/sdk/browser",
  "@shelby-protocol/clay-codes",
];

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["buffer", "@aptos-labs/ts-sdk"],
    exclude: wasmSensitiveDeps,
  },
  build: {
    target: "esnext",
  },
});
