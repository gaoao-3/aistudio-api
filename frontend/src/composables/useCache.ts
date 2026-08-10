// ---------- 本地缓存（VueUse useLocalStorage，替代原 loadFromCache/saveToCache） ----------
// 键名与原实现保持一致，升级后聊天记录与配置不丢。
import { useLocalStorage } from '@vueuse/core';
import type { Message, ModelInfo, RunConfig } from '../types';

const DEFAULT_CFG: RunConfig = {
  thinking: 'off', search: 'off', stream: 'on',
  temperature: 1.0, topP: 0.95, maxTokens: 32768, safety: 'on',
};

export const msgs = useLocalStorage<Message[]>('asp_msgs', []);
export const cfg = useLocalStorage<RunConfig>('asp_cfg', DEFAULT_CFG, { mergeDefaults: true });
export const model = useLocalStorage<string>('asp_model', '');
export const models = useLocalStorage<ModelInfo[]>('asp_models', []);

/** 清理本地缓存（聊天历史和配置）并刷新页面，与原行为一致 */
export function clearCache(): void {
  localStorage.removeItem('asp_msgs');
  localStorage.removeItem('asp_cfg');
  localStorage.removeItem('asp_model');
  localStorage.removeItem('asp_models');
  location.reload();
}
