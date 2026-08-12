<script setup lang="ts">
// 历史记录页
import { onMounted } from 'vue';
import Icon from '../components/Icon.vue';
import { useHistory } from '../composables/useHistory';
import { fmtDate } from '../utils';

const { history, historyLoading, loadHistory, historyPreview, openInteraction, removeInteraction } = useHistory();

onMounted(loadHistory);
</script>

<template>
  <div class="page">
    <div class="page-title">历史记录</div>
    <div class="page-sub">服务端默认保留最近 30 条 interactions（store=true 的请求）。点击可载入对话继续。</div>

    <div v-if="historyLoading" class="empty-hint"><Icon name="loader" :size="18" class="spin" />加载中…</div>
    <div v-else-if="!history.length" class="empty-hint">暂无历史记录</div>

    <template v-else>
      <div v-for="h in history" :key="h.id" class="hist-row" @click="openInteraction(h.id)">
        <Icon name="chat" class="text-muted" />
        <div class="hist-preview">
          <div class="t">{{ historyPreview(h) }}</div>
          <div class="meta">
            <span class="model-chip">{{ h.model }}</span>
            <span>{{ fmtDate(h.created) }}</span>
            <span>{{ h.status }}</span>
          </div>
        </div>
        <button class="icon-btn" title="删除" @click.stop="removeInteraction(h.id)">
          <Icon name="trash" />
        </button>
      </div>
    </template>
  </div>
</template>
