// ---------- ECharts 封装（按需引入，颜色走 CSS 变量，主题切换自动刷新） ----------
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsCoreOption } from 'echarts/core';

echarts.use([BarChart, LineChart, PieChart, GridComponent, LegendComponent, TooltipComponent, CanvasRenderer]);

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
  let chart: echarts.ECharts | null = null;
  let ro: ResizeObserver | null = null;

  onMounted(() => {
    if (!el.value) return;
    chart = echarts.init(el.value);
    ro = new ResizeObserver(() => chart?.resize());
    ro.observe(el.value);
    watchEffect(() => {
      chart?.setOption(getOption(), true);
    });
  });

  onBeforeUnmount(() => {
    ro?.disconnect();
    chart?.dispose();
    chart = null;
  });

  return el;
}
