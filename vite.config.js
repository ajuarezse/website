import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

export default defineConfig({
  base: "/website/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  build: {
    outDir: "docs",
    copyPublicDir: true,
  },
  server: {
    port: 3000,
  },
});
