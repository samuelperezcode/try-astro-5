// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [mdx(), sitemap(), tailwind()],

  env:{
      schema:{
          SHOW_BUY_BUTTON: envField.boolean({context:'server', access:'public'}),
          SCORE_API_ENDPOINT: envField.string({context:'server', access:'public'}),
      }
  },

  adapter: vercel()
});