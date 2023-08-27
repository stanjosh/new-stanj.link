import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pages",
  root: "./",
  build: {
    outDir: "src/client/public/pages/",
    assetsDir: "assets/",
  },
  
});
