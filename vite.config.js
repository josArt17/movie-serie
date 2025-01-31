import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        details: resolve(__dirname, "src/details/details.html"),
        fullContent: resolve(__dirname, "src/full-content/full-content.html"),
      },
    },
  },
});
