import { defineConfig, presetWind3 } from 'unocss';

// 主题色与 styles/global.css 的 CSS 变量保持一致
// （沿用重构前 style.css 末尾生效的浅色「奶油白 + 薰衣草紫」调色板）
export default defineConfig({
  presets: [presetWind3()],
  theme: {
    colors: {
      bg: '#f8f7fc',
      surface: '#ffffff',
      'surface-2': '#f4f2fa',
      'surface-3': '#eae7f3',
      border: '#d9d4e7',
      text: '#2d2940',
      'text-2': '#676177',
      muted: '#9892a8',
      primary: '#6c5bd4',
      'primary-bright': '#5748bf',
      'accent-1': '#7564df',
      'accent-2': '#a18ff0',
      'accent-3': '#ffae8e',
      danger: '#c95761',
      ok: '#258d70',
      warn: '#a66d16',
    },
  },
});
