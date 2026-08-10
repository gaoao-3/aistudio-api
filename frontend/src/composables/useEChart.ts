// ---------- ECharts 封装（Dashboard 挂载时动态加载，颜色走 CSS 变量） ----------
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';
import type { ECharts, EChartsCoreOption } from 'echarts/core';

/** 读取 CSS 变量当前值（主题色切换后即变） */
export function cssVar(name: string, fallback = ''): string {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

/**
 * 挂载一个 ECharts 实例到返回的 el ref 上。
 * getOption 内访问的任何响应式数据（含主题色）变化时自动重绘。
 */
export function useEChart(getOption: () => EChartsCoreOption) {
  const el = ref<HTMLElement | null>(null);
  let chart: ECharts | null = null;
  let ro: ResizeObserver | null = null;
  let stopWatch: (() => void) | null = null;
  let disposed = false;

  onMounted(async () => {
    if (!el.value) return;
    const { default: echarts } = await import('./echarts-runtime');
    if (disposed || !el.value) return;
    chart = echarts.init(el.value);
    ro = new ResizeObserver(() => chart?.resize());
    ro.observe(el.value);
    stopWatch = watchEffect(() => {
      chart?.setOption(getOption(), true);
    });
  });

  onBeforeUnmount(() => {
    disposed = true;
    stopWatch?.();
    stopWatch = null;
    ro?.disconnect();
    chart?.dispose();
    chart = null;
  });

  return el;
}
