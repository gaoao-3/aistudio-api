import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';

// 构建产物直接输出到 Fastify 挂载的 static/ 目录（MPA 双入口）：
//   static/index.html — 主界面（/ 重定向至此）
//   static/login.html — 登录页（/login 重定向至此）
// emptyOutDir 必须为 false：static/ 是服务目录，构建只覆盖入口与产物，旧文件由仓库清理。
export default defineConfig({
  // Fastify 把 static/ 挂载在 /static/ 前缀下，资源 URL 必须带此前缀
  base: '/static/',
  plugins: [vue(), UnoCSS()],
  build: {
    outDir: resolve(__dirname, '../static'),
    emptyOutDir: false,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
});
