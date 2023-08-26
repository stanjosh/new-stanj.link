import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/main",
  root: "./src/client/",
  build: {
    outDir: "public/main/",
    assetsDir: "assets/",
  },
});
