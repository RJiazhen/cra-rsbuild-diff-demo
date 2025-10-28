# 打包工具对比项目

本项目用于比较不同打包工具和配置的构建产物，分析各种因素对生产环境产物的影响。

## 项目目的

本项目旨在测试和比较以下维度的构建产物：

1. **不同打包工具**：Create React App (CRA) vs Rsbuild
2. **不同打包工具版本**：Rsbuild 1.4 vs Rsbuild 1.5
3. **不同源码结构**：使用 `src/index.js` vs `src/index-2.js`
4. **不同构建选项**：压缩 vs 不压缩构建（不压缩版本便于阅读和对比）

## 构建输出

项目生成多个构建产物用于对比：

- `build/` - CRA 生产构建
- `rsbuild-dist-1.4/` - Rsbuild 1.4 生产构建（来自 `src/index.js`）
- `rsbuild-dist-1.4-nominify/` - Rsbuild 1.4 不压缩构建（便于阅读对比）
- `rsbuild-dist-1.5/` - Rsbuild 1.5 生产构建（来自 `src/index.js`）
- `rsbuild-dist-1.5-nominify/` - Rsbuild 1.5 不压缩构建（便于阅读对比）
- `rsbuild-dist-1.5-index-2/` - Rsbuild 1.5 使用 `src/index-2.js` 的构建
- `rsbuild-dist-1.5-index-2-nominify/` - Rsbuild 1.5 使用 `src/index-2.js` 的不压缩构建（便于阅读对比）

## 可用脚本

### Create React App 命令

- `pnpm start` - 启动 CRA 开发服务器
- `pnpm build` - 使用 CRA 构建到 `build/` 目录
- `pnpm test` - 运行测试

### Rsbuild 1.4 命令

- `pnpm rs:1.4:start` - 启动 Rsbuild 1.4 开发服务器
- `pnpm rs:1.4:build` - 使用 Rsbuild 1.4 构建（压缩）
- `pnpm rs:1.4:build:nominify` - 使用 Rsbuild 1.4 构建（不压缩，便于阅读）

### Rsbuild 1.5 命令

- `pnpm rs:1.5:start` - 启动 Rsbuild 1.5 开发服务器
- `pnpm rs:1.5:build` - 使用 Rsbuild 1.5 构建（压缩）
- `pnpm rs:1.5:build:nominify` - 使用 Rsbuild 1.5 构建（不压缩，便于阅读）
- `pnpm rs:1.5:build:index-2` - 使用 Rsbuild 1.5 和 `src/index-2.js` 构建（压缩）
- `pnpm rs:1.5:build:index-2:nominify` - 使用 Rsbuild 1.5 和 `src/index-2.js` 构建（不压缩，便于阅读）

### 构建全部

- `pnpm build:all` - 并行构建所有变体（CRA + 所有 Rsbuild 配置）

## 配置说明

项目使用基于环境的 Rsbuild 配置：

- 通过别名包安装不同 Rsbuild 版本：
  - `rsbuild-core-1.4`：指向 `@rsbuild/core@1.4`
  - `rsbuild-core-1.5`：指向 `@rsbuild/core@1.5`

- 构建命令使用 `--env-mode` 标志加载不同配置
- 环境变量控制：
  - 版本选择（`RSBUILD_VERSION`）
  - 入口点（`SOURCE_ENTRY_INDEX`）
  - 压缩选项（`DISABLE_MINIFY`）

## 开始使用

1. 安装依赖：
   ```bash
   pnpm install
   ```

2. 运行开发服务器：
   ```bash
   pnpm start          # CRA 开发服务器
   pnpm rs:1.4:start   # Rsbuild 1.4 开发服务器
   pnpm rs:1.5:start   # Rsbuild 1.5 开发服务器
   ```

3. 构建所有变体进行对比：
   ```bash
   pnpm build:all
   ```

4. 分析相应目录中的构建产物

## 对比目标

本项目帮助您：
- 比较不同打包工具的包大小
- 分析代码分割策略
- 了解版本特定的优化
- 研究源码结构对输出的影响
- 通过不压缩版本更好地阅读和理解构建产物

## 相关项目

- [Create React App](https://github.com/facebook/create-react-app)
- [Rsbuild](https://github.com/web-infra-dev/rsbuild)
