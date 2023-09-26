import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import postcss from './postcss.config';

export default defineConfig({
  plugins: [svelte()],

  server: {
    port: 4200,
    host: 'localhost',
  },

  css: {
    postcss,
  },
});
