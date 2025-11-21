// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ghinea.io",

  integrations: [
    sitemap(), // generates /sitemap-index.xml
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
