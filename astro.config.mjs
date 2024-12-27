import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mocusez.site',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      langs: [
        JSON.parse(fs.readFileSync('./src/grammer/mlir.json', 'utf-8')),
        JSON.parse(fs.readFileSync('./src/grammer/llvm.json', 'utf-8')),
      ],
      langAlias: {

      }
    }
  },
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