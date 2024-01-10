import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [lit()]
});