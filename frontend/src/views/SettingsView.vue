<script setup lang="ts">
// 服务设置页（数据驱动渲染 GET /config/runtime 返回的 settings）
import { onMounted } from 'vue';
import {
  NAlert, NButton, NCard, NInput, NInputNumber, NSelect, NSwitch,
} from 'naive-ui';
import Icon from '../components/Icon.vue';
import { useRuntimeConfig } from '../composables/useRuntimeConfig';

const { runtimeCfg, loadRuntimeConfig, saveSetting } = useRuntimeConfig();

onMounted(loadRuntimeConfig);

function displayValue(v: string | number | boolean | null | undefined, unit?: string): string {
  if (v === null || v === undefined) return '未配置';
  if (typeof v === 'boolean') return v ? '开' : '关';
  return unit ? `${v} ${unit}` : String(v);
}
</script>

<template>
  <div class="page">
    <div class="page-title">服务设置</div>
    <div class="page-sub">服务端运行参数。标注「重启生效」的配置保存后需重启服务才会应用。</div>

    <div v-if="runtimeCfg.loading && !runtimeCfg.loaded" class="empty-hint">
      <Icon name="loader" :size="18" class="spin" />加载配置…
    </div>

    <NAlert v-if="runtimeCfg.globalError" type="error" class="mb-4">{{ runtimeCfg.globalError }}</NAlert>

    <template v-if="runtimeCfg.loaded">
      <div class="flex gap-2 mb-4">
        <NButton tertiary size="small" :disabled="runtimeCfg.loading" @click="loadRuntimeConfig()">
          <template #icon><Icon name="refresh" :size="15" /></template>
          重新加载
        </NButton>
      </div>

      <NCard
        v-for="setting in runtimeCfg.settings"
        :key="setting.key"
        size="small"
        class="mb-4"
        style="max-width: 640px"
      >
        <div class="flex items-start gap-3 mb-3">
          <span class="modal-badge"><Icon name="cog" :size="20" /></span>
          <div>
            <h3 class="text-[15px] font-[500] text-text">
              {{ setting.label }}
              <span v-if="setting.restart_required" class="text-[11px] text-warn">（保存后重启生效）</span>
            </h3>
            <p class="text-[12px] text-muted">{{ setting.description }}</p>
          </div>
        </div>

        <NSwitch
          v-if="setting.type === 'boolean'"
          :value="setting.input === true"
          @update:value="(v: boolean) => setting.input = v"
        />

        <template v-else-if="setting.type === 'mib' || setting.type === 'integer'">
          <n-input-number
            :value="typeof setting.input === 'number' ? setting.input : null"
            :min="setting.min"
            :max="setting.max"
            :step="setting.step ?? 1"
            :placeholder="`输入${setting.unit ? ' ' + setting.unit : '数值'}`"
            class="w-full"
            @update:value="(v: number | null) => setting.input = v"
          />
        </template>

        <NSelect
          v-else-if="setting.type === 'enum'"
          :value="typeof setting.input === 'string' ? setting.input : null"
          :options="(setting.options || []).map(o => ({ label: o.label, value: o.value as string | number }))"
          class="w-full"
          @update:value="(v: string | number | null) => setting.input = v"
        />

        <NInput
          v-else
          :value="typeof setting.input === 'string' ? setting.input : ''"
          :placeholder="setting.sensitive ? '输入完整代理地址；未修改请直接保存' : '留空使用系统默认'"
          class="w-full"
          @update:value="(v: string) => setting.input = v"
        />

        <div class="field-hint">
          <span>当前生效：{{ displayValue(setting.effective, setting.unit) }}</span>
          <span>{{ setting.configured === null ? '未配置（使用默认值）' : '已配置：' + displayValue(setting.configured, setting.unit) }}</span>
        </div>

        <NAlert v-if="setting.error" type="error" class="mt-3">{{ setting.error }}</NAlert>
        <NAlert v-else-if="setting.notice" class="mt-3" :type="setting.restart_required ? 'warning' : 'success'">
          {{ setting.notice }}
        </NAlert>

        <div class="flex gap-2 mt-4">
          <NButton
            type="primary" size="small"
            :loading="setting.saving" @click="saveSetting(setting.key)"
          >
            <template #icon><Icon :name="setting.saving ? 'loader' : 'save'" :size="16" :class="{ spin: setting.saving }" /></template>
            {{ setting.saving ? '保存中…' : '保存' }}
          </NButton>
        </div>
      </NCard>
    </template>
  </div>
</template>
