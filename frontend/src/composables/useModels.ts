// ---------- 模型目录（从 app.ts 的 loadModels/pickDefaultModel 移植） ----------
import { apiFetch } from '../api/client';
import { model, models } from './useCache';

interface ModelsResponse {
  models?: { name?: string }[];
}

export function useModels() {
  function pickDefaultModel(): string {
    const ids = models.value.map(m => m.id);
    if (ids.includes('gemma-4-31b-it')) return 'gemma-4-31b-it';
    // 实时目录可能把 agent（antigravity/deep-research）排在前面，跳过
    return ids.find(id => /^(gemini|gemma)-/.test(id)) || ids[0] || '';
  }

  async function loadModels(): Promise<void> {
    try {
      const r = await apiFetch('/v1beta/models');
      const d = await r.json() as ModelsResponse;
      models.value = (d.models || [])
        .map(m => ({ id: (m.name || '').replace('models/', '') }))
        .filter(m => m.id && !/^(antigravity|deep-research)/.test(m.id));
      const ids = models.value.map(m => m.id);
      if (!ids.includes(model.value) || /^(antigravity|deep-research)/.test(model.value)) {
        model.value = pickDefaultModel();
      }
    } catch (e) { /* 目录加载失败时沿用缓存 */ }
  }

  return { models, model, loadModels, pickDefaultModel };
}
