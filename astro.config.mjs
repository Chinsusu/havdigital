import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://havdigital.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
