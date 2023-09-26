import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import postcss from './postcss.config';

export default defineConfig({
  plugins: [svelte(), nxViteTsPaths()],

  server: {
    port: 4200,
    host: 'localhost',
  },

  css: {
    postcss,
  },
});
