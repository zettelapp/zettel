import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss({ config: './apps/web/tailwind.config.ts' }),
    autoprefixer,
  ],
};
