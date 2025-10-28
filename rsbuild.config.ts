import { defineConfig } from 'rsbuild-core-1.5';
import { pluginReact } from '@rsbuild/plugin-react';

/** 当前运行的 Rsbuild 版本 */
const currentRsbuildVersion = process.env.RSBUILD_VERSION;

/** 源码入口索引 */
const sourceEntryIndex = process.env.SOURCE_ENTRY_INDEX || './src/index.js';

/** 输出目录根路径 */
const outputDistPathRoot = `rsbuild-dist-${currentRsbuildVersion}${
  process.env.SOURCE_ENTRY_INDEX ? '-index-2' : ''
}`;

/** 配置 */
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/rsbuild-template.html',
  },
  source: {
    entry: {
      index: sourceEntryIndex,
    },
  },
  output: {
    distPath: {
      root: outputDistPathRoot,
    },
  },
});
