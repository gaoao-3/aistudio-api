// ---------- 服务设置（运行参数，数据驱动自 GET /config/runtime 的 settings） ----------
import { ref } from 'vue';
import { apiFetch } from '../api/client';
import type { RuntimeConfigResponse, RuntimeConfigState } from '../types';

const runtimeCfg = ref<RuntimeConfigState>({
  loading: false, loaded: false, globalError: '', settings: [],
});

export function useRuntimeConfig() {
  async function loadRuntimeConfig(): Promise<void> {
    const rc = runtimeCfg.value;
    rc.loading = true; rc.globalError = '';
    try {
      const r = await apiFetch('/config/runtime');
      const d = await r.json().catch(() => ({})) as RuntimeConfigResponse;
      if (!r.ok) { rc.globalError = typeof d.detail === 'string' ? d.detail : `加载配置失败 (${r.status})`; return; }
      rc.settings = (d.settings ?? []).map((s) => ({
        ...s,
        input: s.configured ?? s.effective,
        saving: false,
        error: '',
        notice: '',
      }));
      rc.loaded = true;
    } catch (e) { rc.globalError = '网络错误，请检查连接后重试'; }
    finally { rc.loading = false; }
  }

  async function saveSetting(key: string): Promise<void> {
    const rc = runtimeCfg.value;
    const setting = rc.settings.find((s) => s.key === key);
    if (!setting) return;
    setting.error = ''; setting.notice = '';
    const input = setting.input;

    // 脱敏后的代理值只用于展示；未修改时不能把掩码再次写回 .env。
    if (setting.sensitive && (input === setting.configured || (setting.configured === null && input === setting.effective))) {
      setting.notice = '未修改';
      return;
    }

    let payloadValue: string | number | boolean | null = null;
    if (setting.type === 'mib' || setting.type === 'integer') {
      const v = Number(input);
      if (typeof input === 'boolean' || input === null || input === undefined || !Number.isFinite(v)) {
        setting.error = '请输入有效的数字';
        return;
      }
      if (setting.min !== undefined && v < setting.min) { setting.error = `不能小于 ${setting.min}`; return; }
      if (setting.max !== undefined && v > setting.max) { setting.error = `不能大于 ${setting.max}`; return; }
      payloadValue = setting.type === 'mib' ? Math.round(v * 1048576) : Math.round(v);
    } else {
      payloadValue = input as string | number | boolean;
    }

    setting.saving = true;
    try {
      const r = await apiFetch('/config/runtime', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [key]: payloadValue }),
      });
      const d = await r.json().catch(() => ({})) as RuntimeConfigResponse;
      if (!r.ok || d.ok === false) { setting.error = typeof d.detail === 'string' ? d.detail : `保存失败 (${r.status})`; return; }
      const updated = d.settings?.find((s) => s.key === key);
      if (updated) {
        setting.configured = updated.configured;
        setting.effective = updated.effective;
        setting.restart_required = updated.restart_required;
        setting.input = updated.configured ?? updated.effective;
      }
      setting.notice = setting.restart_required ? '已保存，将在服务重启后生效' : '已保存';
    } catch (e) { setting.error = '网络错误，请检查连接后重试'; }
    finally { setting.saving = false; }
  }

  return { runtimeCfg, loadRuntimeConfig, saveSetting };
}
