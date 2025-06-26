// ✅ vite.config.js — required for successful Vercel deployment
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Ensure Vercel knows where to find the build output
  },
});
