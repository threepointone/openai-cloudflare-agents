import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import devtools from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [devtools(), cloudflare(), react()],
});
