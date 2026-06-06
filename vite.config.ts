import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { analyzer } from 'vite-bundle-analyzer'
import path from "path";

// Get the main.tsx where all JavaScript files are imported
const MAIN_FILE = path.resolve("src/main.tsx");

// https://vite.dev/config/
export default defineConfig({
  mode: "production",
  base:"./",
  environments: {
    client: {
      build: {
        // Will save the compiled JavaScript files in the root of the dist folder
        assetsDir: "./",
        // Generate manifest.json file (for caching)
        manifest: true,
        // Empty the dist folder before building
        emptyOutDir: true,
        // Custom path for client-side assets
        outDir: "dist",
        // Minify Javascript with esbuild (ultra fast) 
        minify: "esbuild",
        // Target modern browsers for smaller file footprints
        target: 'esnext',
        // Seperately optimize and minify CSS using LightningCSS
        cssMinify: true,
        // Turn off source maps for production to protect source code & save space
        sourcemap: false,
        // Prevent small assets from being inlined as base64 strings (keeps HTML light)
        assetsInlineLimit: 4096,
        // Adjust chunk size warning limit (default is 500kb)
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          input: MAIN_FILE,
          output: {
            // Customizes names for entry files, chunks, and static assets
            entryFileNames: "assets/[name].js",
            chunkFileNames: "assets/[name].js",
            assetFileNames: "assets/[name][extname]",
            // Smart vendor splitting (creates a separate chunk for large node_modules)
            manualChunks(id) {
              if (id.includes('node_modules')) {
                // Split huge frameworks or libraries into their own files
                if (id.includes('react')) {
                  return 'framework';
                }
                return 'vendor'; // everything else goes to vendor
              }
            },
          },
        },
      },
      define: {
        "process.env.NODE_ENV": "'production'"
      },
    },
  },
  plugins: [
    tanstackRouter({
      autoCodeSplitting: false,
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
  esbuild: {
    // Drops all console.log and debugger statements from final build
    drop: ['console', 'debugger'],
  },
});
