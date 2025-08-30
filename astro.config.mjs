// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sbmsrl.it",
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "it",
        locales: {
          it: "it-IT",
          en: "en-US",
        },
      },
      filter: (page) =>
        page !== "https://sbmsrl.it/it/backend/" &&
        page !== "https://sbmsrl.it/en/backend/",
      customPages: [
        // Aggiungi pagine personalizzate se necessario
      ],
      serialize(item) {
        // Aggiungi lastmod per le news basato sulla data di pubblicazione
        if (item.url.includes('/news/')) {
          return {
            ...item,
            // Le news hanno data nella loro struttura, per ora usiamo la data corrente
            lastmod: new Date().toISOString(),
          };
        }
        return item;
      },
    }),
  ],
});
