import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/say-yes/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
