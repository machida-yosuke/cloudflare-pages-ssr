import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      'process.env.BASIC_PASSWORD': JSON.stringify(process.env.BASIC_PASSWORD),
      'process.env.BASIC_USERNAME': JSON.stringify(process.env.BASIC_USERNAME)
    }
  },
  output: "server",
  adapter: cloudflare(),
});
