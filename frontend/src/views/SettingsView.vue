<script setup lang="ts">
// 服务设置页（请求体大小限制）
import { onMounted } from 'vue';
import { NAlert, NButton, NCard, NInputNumber } from 'naive-ui';
import Icon from '../components/Icon.vue';
import { useRuntimeConfig } from '../composables/useRuntimeConfig';

const { runtimeCfg, loadRuntimeConfig, saveRuntimeConfig } = useRuntimeConfig();

onMounted(loadRuntimeConfig);
</script>

<template>
  <div class="page">
    <div class="page-title">服务设置</div>
    <div class="page-sub">服务端运行参数。标注「重启生效」的配置保存后需重启服务才会应用。</div>

    <NCard size="small" style="max-width: 560px">
      <div class="flex items-start gap-3 mb-4">
        <span class="modal-badge"><Icon name="cog" :size="22" /></span>
        <div>
          <h3 class="text-[15px] font-[500] text-text">请求体大小限制</h3>
          <p class="text-[12px] text-muted">单次 API 请求允许的最大体积（含图片附件），以 MiB 为单位</p>
        </div>
      </div>

      <div v-if="runtimeCfg.loading && !runtimeCfg.loaded" class="empty-hint">
        <Icon name="loader" :size="18" class="spin" />加载配置…
      </div>

      <NAlert v-if="runtimeCfg.error" type="error" class="mb-4">{{ runtimeCfg.error }}</NAlert>

      <template v-if="runtimeCfg.loaded">
        <div class="field-label">
          <span>大小上限（MiB）</span>
          <span class="val">{{ (runtimeCfg.inputMiB || 0) + ' MiB' }}</span>
        </div>
        <n-input-number
          v-model:value="runtimeCfg.inputMiB" :min="1" :max="runtimeCfg.maxMiB || undefined"
          :step="1" placeholder="输入 MiB 数值" class="w-full"
        />
        <div class="field-hint">
          <span>当前生效：{{ runtimeCfg.effectiveMiB }} MiB</span>
          <span>服务端上限：{{ runtimeCfg.maxMiB ? runtimeCfg.maxMiB + ' MiB' : '未知' }}</span>
          <span>{{ runtimeCfg.configuredMiB === null ? '未配置（使用默认值）' : '已配置：' + runtimeCfg.configuredMiB + ' MiB' }}</span>
        </div>

        <NAlert
          v-if="runtimeCfg.notice" class="mt-4"
          :type="runtimeCfg.restartRequired ? 'warning' : 'success'"
        >
          {{ runtimeCfg.notice }}
        </NAlert>

        <div class="flex gap-2 mt-4">
          <NButton
            type="primary" size="small"
            :loading="runtimeCfg.saving" :disabled="!runtimeCfg.inputMiB"
            @click="saveRuntimeConfig()"
          >
            <template #icon><Icon :name="runtimeCfg.saving ? 'loader' : 'save'" :size="16" :class="{ spin: runtimeCfg.saving }" /></template>
            {{ runtimeCfg.saving ? '保存中…' : '保存' }}
          </NButton>
          <NButton tertiary size="small" :disabled="runtimeCfg.loading" @click="loadRuntimeConfig()">
            <template #icon><Icon name="refresh" :size="15" /></template>
            重新加载
          </NButton>
        </div>
      </template>
    </NCard>
  </div>
</template>
