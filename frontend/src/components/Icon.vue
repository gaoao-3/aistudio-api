<script setup lang="ts">
// SVG 图标组件：渲染 icon-paths.ts 中的路径，替代原 icons.ts 的 icon() 字符串拼接
import { computed } from 'vue';
import { ICON_PATHS } from '../icon-paths';

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 20 });

const path = computed(() => ICON_PATHS[props.name] || '');
</script>

<template>
  <span class="ic" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg
      viewBox="0 0 24 24" :width="size" :height="size" fill="none"
      stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
      v-html="path"
    ></svg>
  </span>
</template>
