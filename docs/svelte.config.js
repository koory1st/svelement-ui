import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svelte.md'],
  preprocess: [mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }), preprocess()],

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    prerender: {
      entries: ['*', '/component/button', '/component/container'],
    },
  },
  paths: {
    base: dev ? '' : process.env.PUBLIC_BASE_PATH,
  },
};

export default config;
