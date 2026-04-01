import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import tailwind from '@astrojs/tailwind';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath, URL } from 'url';

function pwaAutoVersion() {
  return {
    name: 'pwa-auto-version',
    hooks: {
      'astro:build:done': ({ dir }: { dir: URL }) => {
        const swPath = fileURLToPath(new URL('sw.js', dir));
        let content = readFileSync(swPath, 'utf-8');
        content = content.replace(
          /const CACHE_VERSION = '[^']*'/,
          `const CACHE_VERSION = 'blog-cache-${Date.now()}'`
        );
        writeFileSync(swPath, content);
        console.log('[pwa] Updated sw.js cache version');
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://mocusez.site',
  integrations: [sitemap(), expressiveCode(), tailwind(), pwaAutoVersion()],
});