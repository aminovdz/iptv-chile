import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://chileiptv.live',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/landing-v2': '/futbol-chileno/',
    '/landing-v3': '/sin-cable/'
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
