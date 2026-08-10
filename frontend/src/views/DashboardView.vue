<script setup lang="ts">
// 用量统计页：概览 + 趋势/模型分布 + 响应式模型明细
import { computed, onMounted, ref } from 'vue';
import Icon from '../components/Icon.vue';
import { useStats, type TrendDay } from '../composables/useStats';
import { useEChart, cssVar } from '../composables/useEChart';
import { fmtDate, fmtNum } from '../utils';

const {
  stats,
  loadStats,
  loading,
  error,
  lastLoadedAt,
  totalReqs,
  totalSuccess,
  totalRL,
  totalErrors,
  totalPromptTokens,
  totalCompletionTokens,
  totalTokens,
  successRate,
  todayTokens,
  trendDays,
  modelShare,
} = useStats();

onMounted(loadStats);

const range = ref<7 | 30>(7);
const rangeOptions: Array<7 | 30> = [7, 30];

const modelCount = computed(() => Object.keys(stats.value).length);
const totalFailures = computed(() => totalErrors.value + totalRL.value);
const rangeLabel = computed(() => `近 ${range.value} 天`);
const hasStats = computed(() => modelCount.value > 0);

const trendData = computed(() => trendDays(range.value));
const hasTrendData = computed(() => trendData.value.some(day => day.total > 0));

const trendSummary = computed(() => {
  const days = trendData.value;
  const total = days.reduce((sum, day) => sum + day.total, 0);
  const peak = days.reduce((best, day) => day.total > best.total ? day : best, days[0] as TrendDay);
  return {
    total,
    average: Math.round(total / Math.max(days.length, 1)),
    peak,
  };
});

const overviewItems = computed(() => [
  { label: '总请求', value: fmtNum(totalReqs.value), note: `成功 ${fmtNum(totalSuccess.value)}`, tone: 'primary' },
  { label: '成功率', value: successRate.value, note: totalReqs.value ? '按全部请求计算' : '等待请求记录', tone: 'ok' },
  { label: '输入 Tokens', value: fmtNum(totalPromptTokens.value), note: `输出 ${fmtNum(totalCompletionTokens.value)}`, tone: 'blue' },
  { label: '错误 / 限流', value: fmtNum(totalFailures.value), note: `${fmtNum(totalErrors.value)} 错误 · ${fmtNum(totalRL.value)} 限流`, tone: 'danger' },
]);

function shortDate(date?: string): string {
  if (!date) return '-';
  const [, month, day] = date.split('-');
  return month && day ? `${Number(month)}月${Number(day)}日` : date;
}

function chooseRange(value: 7 | 30): void {
  range.value = value;
}

// ----- 每日 token 趋势（输入/输出堆叠柱状） -----
const trendEl = useEChart(() => {
  const days = trendData.value;
  const hasData = hasTrendData.value;
  const primary = cssVar('--primary', '#6c5bd4');
  const accent = cssVar('--accent-3', '#ffb096');
  return {
    animationDuration: 420,
    tooltip: hasData ? { trigger: 'axis', axisPointer: { type: 'shadow' } } : { show: false },
    grid: { left: 8, right: 8, top: 12, bottom: 8, containLabel: true },
    xAxis: {
      type: 'category',
      data: days.map(d => d.date.slice(5)),
      axisLine: { lineStyle: { color: cssVar('--border', '#e2dee9') } },
      axisTick: { show: false },
      axisLabel: {
        color: cssVar('--muted', '#9892a8'),
        fontSize: 11,
        interval: range.value === 30 ? 4 : 0,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      splitNumber: 4,
      splitLine: { lineStyle: { color: cssVar('--border-soft', 'rgba(76,63,117,0.09)') } },
      axisLabel: { color: cssVar('--muted', '#9892a8'), fontSize: 11, formatter: (v: number) => fmtNum(v) },
    },
    series: [
      {
        name: '输入 Tokens',
        type: 'bar',
        stack: 'tokens',
        data: days.map(d => d.prompt),
        itemStyle: { color: primary, borderRadius: [0, 0, 0, 0] },
        barMaxWidth: 28,
        barCategoryGap: '34%',
      },
      {
        name: '输出 Tokens',
        type: 'bar',
        stack: 'tokens',
        data: days.map(d => d.completion),
        itemStyle: { color: accent, borderRadius: [5, 5, 0, 0] },
        barMaxWidth: 28,
        barCategoryGap: '34%',
      },
    ],
  };
});

const shareLegend = computed(() => {
  const total = totalTokens.value;
  const colors = ['var(--primary)', 'var(--accent-3)', 'var(--accent-2)', 'var(--ok)', 'var(--warn)', 'var(--muted)'];
  return modelShare.value.slice(0, 6).map((model, index) => ({
    ...model,
    percentage: total > 0 ? model.value / total * 100 : 0,
    color: colors[index % colors.length],
  }));
});

// ----- 模型占比环图 -----
const shareEl = useEChart(() => ({
  animationDuration: 420,
  tooltip: { trigger: 'item', formatter: '{b}<br/>{c} tokens ({d}%)' },
  legend: { show: false },
  series: [{
    type: 'pie',
    radius: ['56%', '78%'],
    center: ['50%', '48%'],
    avoidLabelOverlap: true,
    itemStyle: { borderColor: cssVar('--surface', '#fff'), borderWidth: 3, borderRadius: 5 },
    emphasis: { scale: true, scaleSize: 5 },
    label: {
      show: true,
      position: 'center',
      formatter: () => `{a|${fmtNum(totalTokens.value)}}\n{b|总 Tokens}`,
      rich: {
        a: { fontSize: 22, fontWeight: 700, color: cssVar('--text', '#2d2940'), lineHeight: 30 },
        b: { fontSize: 11, color: cssVar('--muted', '#9892a8'), lineHeight: 18 },
      },
    },
    data: modelShare.value.map((model, index) => ({
      ...model,
      itemStyle: {
        color: [
          cssVar('--primary', '#6c5bd4'),
          cssVar('--accent-3', '#ffb096'),
          cssVar('--accent-2', '#a18ff0'),
          cssVar('--ok', '#258d70'),
          cssVar('--warn', '#a66d16'),
          cssVar('--muted', '#9892a8'),
        ][index % 6],
      },
    })),
  }],
}));

interface StatRow {
  model: string;
  requests: number;
  success: number;
  rate_limited: number;
  errors: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  last_used?: string;
}

const rows = computed<StatRow[]>(() =>
  Object.entries(stats.value)
    .map(([name, s]) => ({
      model: name.replace('models/', ''),
      requests: s.requests || 0,
      success: s.success || 0,
      rate_limited: s.rate_limited || 0,
      errors: s.errors || 0,
      prompt_tokens: s.prompt_tokens || 0,
      completion_tokens: s.completion_tokens || 0,
      total_tokens: s.total_tokens || 0,
      last_used: s.last_used,
    }))
    .sort((a, b) => b.total_tokens - a.total_tokens || b.requests - a.requests),
);

function rowRate(row: StatRow): string {
  return row.requests > 0 ? `${Math.round(row.success / row.requests * 100)}%` : '-';
}

function rowFailures(row: StatRow): number {
  return row.errors + row.rate_limited;
}
</script>

<template>
  <div class="page dashboard-page">
    <div class="dashboard-heading">
      <div>
        <div class="page-kicker"><span class="kicker-dot"></span> ANALYTICS <span class="kicker-divider">/</span> USAGE</div>
        <div class="page-title">用量统计</div>
        <div class="page-sub">按模型查看请求、Token 消耗与运行质量，数据按 UTC 日期持久化保存。</div>
      </div>
      <button class="dashboard-refresh" :class="{ loading }" :disabled="loading" type="button" @click="loadStats">
        <Icon name="refresh" :size="15" :class="{ spin: loading }" />
        <span>{{ loading ? '更新中' : '刷新数据' }}</span>
      </button>
    </div>

    <div v-if="error" class="dashboard-alert" role="alert">
      <span>{{ error }}</span>
      <button type="button" @click="loadStats">重试</button>
    </div>

    <section class="overview-card" aria-labelledby="overview-title">
      <div class="overview-primary">
        <div id="overview-title" class="metric-label">累计 Token 消耗 <span class="metric-badge">{{ hasStats ? '已记录' : '暂无记录' }}</span></div>
        <div class="overview-value">{{ fmtNum(totalTokens) }}</div>
        <div class="overview-caption">
          <span>今日 {{ fmtNum(todayTokens) }}</span>
          <span class="caption-separator">·</span>
          <span>{{ modelCount }} 个模型</span>
        </div>
      </div>
      <div class="overview-divider"></div>
      <div class="overview-kpis">
        <div v-for="item in overviewItems" :key="item.label" class="overview-kpi">
          <div class="kpi-label"><span class="kpi-dot" :class="item.tone"></span>{{ item.label }}</div>
          <div class="kpi-value">{{ item.value }}</div>
          <div class="kpi-note">{{ item.note }}</div>
        </div>
      </div>
    </section>

    <div class="dashboard-section-heading">
      <div>
        <h2>使用概览</h2>
        <p>输入与输出 Token 的每日消耗趋势</p>
      </div>
      <div class="range-switch" role="group" aria-label="趋势时间范围">
        <button v-for="option in rangeOptions" :key="option" type="button" :class="{ active: range === option }" :aria-pressed="range === option" @click="chooseRange(option)">
          近 {{ option }} 天
        </button>
      </div>
    </div>

    <section class="dashboard-chart-grid">
      <article class="dashboard-card trend-card">
        <div class="card-head">
          <div>
            <h3>Token 消耗趋势</h3>
            <p>{{ rangeLabel }}的每日汇总</p>
          </div>
          <span class="card-badge">{{ hasTrendData ? '有明细' : '待产生' }}</span>
        </div>
        <div class="chart-summary">
          <div><strong>{{ fmtNum(trendSummary.total) }}</strong><span>区间总量</span></div>
          <div><strong>{{ fmtNum(trendSummary.average) }}</strong><span>日均</span></div>
          <div><strong>{{ hasTrendData ? shortDate(trendSummary.peak.date) : '-' }}</strong><span>消耗峰值日</span></div>
        </div>
        <div class="dashboard-chart-wrap trend-chart-wrap">
          <div :ref="(el) => { trendEl = el as HTMLElement | null }" class="dashboard-chart trend-chart"></div>
          <div v-if="loading" class="chart-empty"><Icon name="loader" :size="18" class="spin" /><span>正在同步统计数据…</span></div>
          <div v-else-if="!hasTrendData" class="chart-empty"><span class="empty-icon">—</span><strong>还没有每日 Token 明细</strong><span>完成一次成功请求后，趋势会显示在这里</span></div>
        </div>
        <div class="chart-legend">
          <span><i class="legend-swatch input"></i>输入 Tokens</span>
          <span><i class="legend-swatch output"></i>输出 Tokens</span>
        </div>
      </article>

      <article class="dashboard-card share-card">
        <div class="card-head">
          <div>
            <h3>模型 Token 占比</h3>
            <p>按累计 Token 用量排序</p>
          </div>
          <span class="card-badge">{{ modelCount }} 个模型</span>
        </div>
        <div class="dashboard-chart-wrap share-chart-wrap">
          <div :ref="(el) => { shareEl = el as HTMLElement | null }" class="dashboard-chart share-chart"></div>
          <div v-if="loading" class="chart-empty"><Icon name="loader" :size="18" class="spin" /><span>正在同步统计数据…</span></div>
          <div v-else-if="!modelShare.length" class="chart-empty"><span class="empty-icon">○</span><strong>暂未收到 Token 用量</strong><span>上游返回用量后会自动拆分模型占比</span></div>
        </div>
        <div v-if="shareLegend.length" class="model-legend">
          <div v-for="item in shareLegend" :key="item.name" class="model-legend-row">
            <span class="legend-swatch" :style="{ background: item.color }"></span>
            <span class="model-legend-name" :title="item.name">{{ item.name }}</span>
            <span class="model-legend-value">{{ item.percentage.toFixed(1) }}%</span>
          </div>
          <div v-if="modelShare.length > shareLegend.length" class="model-legend-more">+ {{ modelShare.length - shareLegend.length }} 个模型</div>
        </div>
      </article>
    </section>

    <section class="dashboard-card details-card">
      <div class="card-head details-head">
        <div>
          <h3>模型明细</h3>
          <p>请求状态与 Token 消耗明细</p>
        </div>
        <span class="card-badge">{{ rows.length }} 个模型</span>
      </div>

      <div v-if="rows.length" class="desktop-table-wrap">
        <table class="usage-table">
          <thead>
            <tr>
              <th>模型</th>
              <th>请求</th>
              <th>成功率</th>
              <th>错误 / 限流</th>
              <th>输入 Tokens</th>
              <th>输出 Tokens</th>
              <th>总 Tokens</th>
              <th>最后使用</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.model">
              <td><span class="table-model" :title="row.model">{{ row.model }}</span></td>
              <td>{{ fmtNum(row.requests) }}</td>
              <td><span class="rate-chip" :class="{ muted: rowRate(row) === '-' }">{{ rowRate(row) }}</span></td>
              <td>{{ fmtNum(rowFailures(row)) }}</td>
              <td>{{ fmtNum(row.prompt_tokens) }}</td>
              <td>{{ fmtNum(row.completion_tokens) }}</td>
              <td class="total-cell">{{ fmtNum(row.total_tokens) }}</td>
              <td class="last-used">{{ fmtDate(row.last_used) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="rows.length" class="mobile-model-list">
        <article v-for="row in rows" :key="row.model" class="model-detail-card">
          <div class="model-detail-head">
            <span class="table-model" :title="row.model">{{ row.model }}</span>
            <span class="last-used">{{ fmtDate(row.last_used) }}</span>
          </div>
          <div class="model-detail-main">
            <div><strong>{{ fmtNum(row.total_tokens) }}</strong><span>总 Tokens</span></div>
            <div><strong>{{ fmtNum(row.requests) }}</strong><span>请求</span></div>
            <div><strong class="success-text">{{ rowRate(row) }}</strong><span>成功率</span></div>
          </div>
          <div class="model-detail-meta">
            <span>输入 {{ fmtNum(row.prompt_tokens) }}</span>
            <span>输出 {{ fmtNum(row.completion_tokens) }}</span>
            <span>错误 / 限流 {{ fmtNum(rowFailures(row)) }}</span>
          </div>
        </article>
      </div>

      <div v-else class="details-empty">
        <span class="empty-icon">∅</span>
        <strong>暂无模型明细</strong>
        <span>发起一次 API 请求后，这里会显示各模型的使用情况</span>
      </div>
    </section>

    <div v-if="lastLoadedAt" class="dashboard-footnote">最近更新于 {{ lastLoadedAt.toLocaleTimeString() }} · 统计数据保存在服务端</div>
  </div>
</template>
