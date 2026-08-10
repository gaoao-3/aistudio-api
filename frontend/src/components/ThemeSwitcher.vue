<script setup lang="ts">
// 主题色切换器：顶栏色板按钮 + 色点弹层
import { NPopover } from 'naive-ui';
import Icon from './Icon.vue';
import { THEME_PRESETS, useTheme } from '../composables/useTheme';

const { themeKey, setTheme } = useTheme();
</script>

<template>
  <n-popover trigger="click" placement="bottom-end" :show-arrow="false" style="padding: 12px 14px">
    <template #trigger>
      <button class="icon-btn" title="主题色">
        <Icon name="palette" />
      </button>
    </template>
    <div class="flex items-center gap-2">
      <button
        v-for="p in THEME_PRESETS" :key="p.key"
        class="theme-dot" :class="{ active: themeKey === p.key }"
        :style="{ background: p.primary }"
        :title="p.label"
        @click="setTheme(p.key)"
      ></button>
    </div>
  </n-popover>
</template>

<style scoped>
.theme-dot {
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
  transition: transform .15s, box-shadow .15s;
}
.theme-dot:hover { transform: scale(1.12); }
.theme-dot.active {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px currentColor;
  border-color: #fff;
  outline: 2px solid var(--primary);
  outline-offset: 1px;
}
</style>
