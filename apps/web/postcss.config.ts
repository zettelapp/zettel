import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import type { AcceptedPlugin } from 'postcss';

type PostCssConfig = {
  plugins: AcceptedPlugin[];
};

export default {
  plugins: [
    tailwindcss({ config: './apps/web/tailwind.config.ts' }),
    autoprefixer,
  ],
} satisfies PostCssConfig;
