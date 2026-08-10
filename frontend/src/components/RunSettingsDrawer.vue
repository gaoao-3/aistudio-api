<script setup lang="ts">
// 运行设置抽屉（原右侧 settings-panel，宽屏内嵌改为统一抽屉）
import { computed } from 'vue';
import {
  NButton, NDrawer, NDrawerContent, NInput, NInputNumber,
  NRadioButton, NRadioGroup, NSelect, NSlider, NSwitch,
} from 'naive-ui';
import Icon from './Icon.vue';
import { useView } from '../composables/useView';
import { cfg, clearCache, model, models } from '../composables/useCache';
import { useAuth } from '../composables/useAuth';
import { useChat } from '../composables/useChat';
import type { OnOff } from '../types';

const { runSettingsOpen } = useView();
const { token } = useAuth();
const { newChat } = useChat();

const modelOptions = computed(() => models.value.map(m => ({ label: m.id, value: m.id })));

const thinkingOptions = [
  { label: '关闭', value: 'off' },
  { label: '低', value: 'low' },
  { label: '中', value: 'medium' },
  { label: '高', value: 'high' },
];

// cfg 里存的是 'on'/'off' 字符串，n-switch 用 boolean，这里做桥接
function onOffBridge(key: 'search' | 'stream' | 'safety') {
  return computed<boolean>({
    get: () => cfg.value[key] === 'on',
    set: v => { cfg.value[key] = (v ? 'on' : 'off') as OnOff; },
  });
}
const searchOn = onOffBridge('search');
const streamOn = onOffBridge('stream');
const safetyOn = onOffBridge('safety');

function onClearCache(): void {
  if (!confirm('确定要清理本地缓存（聊天历史和配置）吗？')) return;
  clearCache();
}
</script>

<template>
  <n-drawer v-model:show="runSettingsOpen" :width="320" placement="right">
    <n-drawer-content title="运行设置" closable>
      <div class="flex flex-col gap-5">
        <div>
          <div class="field-label"><span>模型</span></div>
          <n-select v-model:value="model" :options="modelOptions" />
        </div>
        <div>
          <div class="field-label"><span>Temperature</span><span class="val">{{ cfg.temperature }}</span></div>
          <n-slider v-model:value="cfg.temperature" :min="0" :max="2" :step="0.05" />
        </div>
        <div>
          <div class="field-label"><span>Top P</span><span class="val">{{ cfg.topP }}</span></div>
          <n-slider v-model:value="cfg.topP" :min="0" :max="1" :step="0.01" />
        </div>
        <div>
          <div class="field-label"><span>最大输出 Tokens</span></div>
          <n-input-number v-model:value="cfg.maxTokens" :min="1" class="w-full" />
        </div>
        <div>
          <div class="field-label"><span>思考等级</span></div>
          <n-radio-group v-model:value="cfg.thinking" class="w-full flex">
            <n-radio-button v-for="o in thinkingOptions" :key="o.value" :value="o.value" :label="o.label" class="flex-1 text-center" />
          </n-radio-group>
        </div>
        <div class="flex items-center justify-between">
          <span>Google 搜索</span>
          <n-switch v-model:value="searchOn" />
        </div>
        <div class="flex items-center justify-between">
          <span>流式输出</span>
          <n-switch v-model:value="streamOn" />
        </div>
        <div class="flex items-center justify-between">
          <span>安全过滤</span>
          <n-switch v-model:value="safetyOn" />
        </div>
        <div>
          <div class="field-label"><span>API Token（鉴权启用时生效）</span></div>
          <n-input
            v-model:value="token" type="password" show-password-on="click"
            placeholder="留空表示未启用鉴权"
          />
        </div>
        <n-button @click="newChat()">
          <template #icon><Icon name="plus" :size="18" /></template>
          新建对话
        </n-button>
        <n-button tertiary type="error" @click="onClearCache">清理本地缓存</n-button>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
