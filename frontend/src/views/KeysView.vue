<script setup lang="ts">
// API 密钥页
import { onMounted } from 'vue';
import { NAlert, NButton, NCard, NInput, NSwitch } from 'naive-ui';
import Icon from '../components/Icon.vue';
import { useKeys } from '../composables/useKeys';
import { fmtDate } from '../utils';
import type { ApiKey, ApiKeyPermissions } from '../types';

const {
  keys, keysLoading, keyName, newKey, keyCopied, keyBusy, keySavingId, keyPermissions,
  loadKeys, createKey, copyNewKey, deleteKey, saveKeyPermissions,
} = useKeys();

onMounted(loadKeys);

function onDeleteKey(id: string): void {
  if (!confirm('删除后使用该密钥的调用将立即失效，确定删除？')) return;
  deleteKey(id);
}

const defaultPermissions: ApiKeyPermissions = {
  google_search: true,
  code_execution: true,
  google_maps: true,
  url_context: true,
};
const permissionNames = Object.keys(defaultPermissions) as Array<keyof ApiKeyPermissions>;

function setPermission(key: ApiKey, name: keyof ApiKeyPermissions, value: boolean): void {
  key.permissions = { ...defaultPermissions, ...(key.permissions || {}), [name]: value };
}

function permissionsOf(key: ApiKey): ApiKeyPermissions {
  return { ...defaultPermissions, ...(key.permissions || {}) };
}

function permissionLabel(name: keyof ApiKeyPermissions): string {
  return {
    google_search: '搜索',
    code_execution: '代码',
    google_maps: 'Maps',
    url_context: 'URL',
  }[name];
}
</script>

<template>
  <div class="page">
    <div class="page-title">API 密钥</div>
    <div class="page-sub">创建后完整密钥仅显示一次，请立即复制保存。设置任一密钥后鉴权自动开启。</div>

    <NCard size="small" class="mb-5">
      <div class="flex gap-2 items-center flex-wrap">
        <NInput
          v-model:value="keyName" placeholder="密钥名称（如：我的手机）"
          style="flex: 1; min-width: 180px" @keydown.enter="createKey()"
        />
        <NButton type="primary" :loading="keyBusy" @click="createKey()">
          <template #icon><Icon name="plus" :size="18" /></template>
          创建密钥
        </NButton>
      </div>
      <div class="field-hint mt-3">内置工具权限（创建后也可以单独调整）</div>
      <div class="flex flex-wrap gap-4 mt-2">
        <label v-for="name in permissionNames" :key="name" class="flex items-center gap-2 text-[12px]">
          <span>{{ permissionLabel(name) }}</span>
          <n-switch v-model:value="keyPermissions[name]" size="small" />
        </label>
      </div>
    </NCard>

    <NAlert v-if="newKey" type="success" class="mb-5" title="创建成功，完整密钥仅显示这一次：">
      <div class="flex gap-2 items-center flex-wrap mt-2">
        <code class="flex-1 min-w-[200px] font-mono text-[13px] bg-surface-2 px-3 py-2 rounded-[10px] break-all">{{ newKey }}</code>
        <NButton tertiary size="small" @click="copyNewKey()">
          <template #icon><Icon :name="keyCopied ? 'check' : 'copy'" :size="15" /></template>
          {{ keyCopied ? '已复制' : '复制' }}
        </NButton>
      </div>
    </NAlert>

    <div v-if="keysLoading" class="empty-hint"><Icon name="loader" :size="18" class="spin" />加载中…</div>
    <div v-else-if="!keys.length" class="empty-hint">还没有密钥。环境变量 AISTUDIO_API_KEY 配置的密钥不在这里显示。</div>

    <template v-else>
      <div v-for="k in keys" :key="k.id" class="hist-row static">
        <Icon name="key" class="text-muted" />
        <div class="hist-preview">
          <div class="t">{{ k.name || '(未命名)' }}</div>
          <div class="meta">
            <span class="model-chip">{{ k.prefix }}…</span>
            <span>创建：{{ fmtDate(k.created_at) }}</span>
            <span>{{ k.last_used ? '最近使用：' + fmtDate(k.last_used) : '从未使用' }}</span>
          </div>
          <div class="flex flex-wrap items-center gap-3 mt-2 text-[12px] text-muted">
            <span>内置工具</span>
            <label v-for="name in permissionNames" :key="name" class="flex items-center gap-1">
              <span>{{ permissionLabel(name) }}</span>
              <n-switch
                :value="permissionsOf(k)[name]"
                size="small"
                @update:value="(value: boolean) => setPermission(k, name, value)"
              />
            </label>
            <n-button
              size="tiny"
              secondary
              :loading="keySavingId === k.id"
              @click="saveKeyPermissions(k.id, permissionsOf(k))"
            >保存权限</n-button>
          </div>
        </div>
        <button class="icon-btn" title="删除" @click="onDeleteKey(k.id)">
          <Icon name="trash" />
        </button>
      </div>
    </template>
  </div>
</template>
