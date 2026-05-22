import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { analyzer } from 'vite-bundle-analyzer'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  mode: "development",
  base:"./",
  environments: {
    client: {
      build: {
        outDir: "dist", // Custom path for client-side assets
        rollupOptions: {
          output: {
            // Customizes names for entry files, chunks, and static assets
            entryFileNames: "assets/[name].js",
            chunkFileNames: "assets/[name].js",
            assetFileNames: "assets/[name][extname]",
          },
        },
        // Minification
        minify: "esbuild",
        // Target browsers
        target: "es2020",
        // CSS code splitting
        cssCodeSplit: true,
      },
      define: {
        "process.env.NODE_ENV": "'development'"
      },
    },
  },
  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
      target: "react",
    }),
    react(),
    tailwindcss(),
    analyzer(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
