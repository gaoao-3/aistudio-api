// 主界面入口：挂载 Vue 应用（Naive UI + UnoCSS）
import { createApp } from 'vue';
import './uno-entry';
import './styles/global.css';
import App from './App.vue';

createApp(App).mount('#app');
