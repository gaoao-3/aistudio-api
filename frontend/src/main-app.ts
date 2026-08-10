// 主界面入口：挂载 Vue 应用（Naive UI + UnoCSS）
import { createApp } from 'vue';
import 'virtual:uno.css';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.min.css';
import './styles/global.css';
import App from './App.vue';

createApp(App).mount('#app');
