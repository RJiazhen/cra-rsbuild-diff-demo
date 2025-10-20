import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/rsbuild-template.html',
  },
  output: {
    distPath: {
      root: 'rsbuild-dist',
    },
  },
});
