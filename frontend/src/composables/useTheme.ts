// ---------- 主题色系统（浅色基调 + 预设主题色切换，localStorage 持久化） ----------
import { computed } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import type { GlobalThemeOverrides } from 'naive-ui';

export interface ThemePreset {
  key: string;
  label: string;
  /** 主色 */
  primary: string;
  /** 深色变体（hover / 强调文字） */
  primaryBright: string;
  /** 浅底色（active 背景、徽标） */
  primaryContainer: string;
  /** 品牌渐变三色 */
  accents: [string, string, string];
}

export const THEME_PRESETS: ThemePreset[] = [
  { key: 'violet', label: '薰衣草紫', primary: '#6c5bd4', primaryBright: '#5748bf', primaryContainer: 'rgba(117,100,223,0.10)', accents: ['#7564df', '#9b89ed', '#ffb096'] },
  { key: 'blue', label: '宝石蓝', primary: '#3b82f6', primaryBright: '#2563eb', primaryContainer: 'rgba(59,130,246,0.10)', accents: ['#3b82f6', '#60a5fa', '#93c5fd'] },
  { key: 'cyan', label: '青瓷', primary: '#0891b2', primaryBright: '#0e7490', primaryContainer: 'rgba(8,145,178,0.10)', accents: ['#0891b2', '#22d3ee', '#7dd3fc'] },
  { key: 'green', label: '竹绿', primary: '#059669', primaryBright: '#047857', primaryContainer: 'rgba(5,150,105,0.10)', accents: ['#059669', '#34d399', '#6ee7b7'] },
  { key: 'orange', label: '暖橙', primary: '#e0692f', primaryBright: '#c2551f', primaryContainer: 'rgba(224,105,47,0.10)', accents: ['#e0692f', '#f59e0b', '#fbbf24'] },
  { key: 'pink', label: '桃粉', primary: '#d6336c', primaryBright: '#be2560', primaryContainer: 'rgba(214,51,108,0.10)', accents: ['#d6336c', '#f472b6', '#f9a8d4'] },
  { key: 'graphite', label: '石墨', primary: '#52525b', primaryBright: '#3f3f46', primaryContainer: 'rgba(82,82,91,0.10)', accents: ['#52525b', '#71717a', '#a1a1aa'] },
];

const themeKey = useLocalStorage('asp_theme_color', 'violet');

export const currentPreset = computed<ThemePreset>(() =>
  THEME_PRESETS.find(p => p.key === themeKey.value) || THEME_PRESETS[0],
);

/** Naive UI 主题覆盖（响应式，跟随当前色板） */
export const naiveThemeOverrides = computed<GlobalThemeOverrides>(() => ({
  common: {
    primaryColor: currentPreset.value.primary,
    primaryColorHover: currentPreset.value.primaryBright,
    primaryColorPressed: currentPreset.value.primaryBright,
    primaryColorSuppl: currentPreset.value.primary,
    bodyColor: '#f8f7fc',
    cardColor: '#ffffff',
    modalColor: '#ffffff',
    popoverColor: '#ffffff',
    tableColor: '#ffffff',
    inputColor: '#fbfaff',
    borderColor: '#d9d4e7',
    borderRadius: '10px',
    fontFamily: '"Nunito Sans", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif',
  },
}));

/** 把当前色板写入 CSS 变量（global.css 里的默认值作为首屏兜底） */
export function applyPresetToCssVars(): void {
  const p = currentPreset.value;
  const root = document.documentElement.style;
  root.setProperty('--primary', p.primary);
  root.setProperty('--primary-bright', p.primaryBright);
  root.setProperty('--primary-container', p.primaryContainer);
  root.setProperty('--accent-1', p.accents[0]);
  root.setProperty('--accent-2', p.accents[1]);
  root.setProperty('--accent-3', p.accents[2]);
  root.setProperty('--grad-brand', `linear-gradient(135deg, ${p.accents[0]} 0%, ${p.accents[1]} 58%, ${p.accents[2]} 100%)`);
  root.setProperty('--bg-grad',
    `radial-gradient(900px 520px at 92% -12%, ${p.accents[0]}26, transparent 62%),` +
    `radial-gradient(760px 520px at -12% 112%, ${p.accents[2]}20, transparent 58%)`);
}

export function useTheme() {
  function setTheme(key: string): void {
    themeKey.value = key;
    applyPresetToCssVars();
  }
  return { themeKey, currentPreset, setTheme, applyPresetToCssVars };
}
