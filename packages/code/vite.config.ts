import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { prismjsPlugin } from '@svelement-ui/vite-plugin-prismjs';

export default defineConfig({
  plugins: [
    sveltekit(),
    prismjsPlugin({
      languages: 'all',
      plugins: ['line-numbers', 'copy-to-clipboard'],
      // theme: 'tomorrow',
      css: true,
    }),
  ],
});
