import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://mocusez.site',
  integrations: [sitemap(),expressiveCode()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Add NPM package CSS/SCSS here for global import
          additionalData: `@import "@waline/client/style";`
        }
      }
    }
  }
});