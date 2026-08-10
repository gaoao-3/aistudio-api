// ---------- 服务设置（请求体大小限制，从 app.ts 移植） ----------
import { ref } from 'vue';
import { apiFetch } from '../api/client';
import type { RuntimeConfigResponse, RuntimeConfigState } from '../types';

const runtimeCfg = ref<RuntimeConfigState>({
  loading: false, saving: false, loaded: false, error: '', notice: '',
  restartRequired: false, inputMiB: null, configuredMiB: null, effectiveMiB: 0, maxMiB: 0,
});

export function useRuntimeConfig() {
  function bytesToMiB(b?: number | null): number | null {
    if (typeof b !== 'number' || !isFinite(b) || b <= 0) return null;
    return Math.round((b / 1048576) * 100) / 100;
  }

  async function loadRuntimeConfig(): Promise<void> {
    const rc = runtimeCfg.value;
    rc.loading = true; rc.error = ''; rc.notice = '';
    try {
      const r = await apiFetch('/config/runtime');
      const d = await r.json().catch(() => ({})) as RuntimeConfigResponse;
      if (!r.ok) { rc.error = typeof d.detail === 'string' ? d.detail : `加载配置失败 (${r.status})`; return; }
      rc.effectiveMiB = bytesToMiB(d.effective_body_limit_bytes) ?? 0;
      rc.configuredMiB = bytesToMiB(d.configured_body_limit_bytes);
      rc.maxMiB = bytesToMiB(d.body_limit_max_bytes) ?? 0;
      rc.restartRequired = d.restart_required === true;
      rc.inputMiB = rc.configuredMiB ?? rc.effectiveMiB;
      rc.loaded = true;
    } catch (e) { rc.error = '网络错误，请检查连接后重试'; }
    finally { rc.loading = false; }
  }

  async function saveRuntimeConfig(): Promise<void> {
    const rc = runtimeCfg.value;
    const v = rc.inputMiB;
    rc.error = ''; rc.notice = '';
    if (typeof v !== 'number' || !isFinite(v) || v <= 0) { rc.error = '请输入大于 0 的 MiB 数值'; return; }
    if (rc.maxMiB && v > rc.maxMiB) { rc.error = `超过服务端允许的上限 ${rc.maxMiB} MiB`; return; }
    rc.saving = true;
    try {
      const r = await apiFetch('/config/runtime', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body_limit_bytes: Math.round(v * 1048576) }),
      });
      const d = await r.json().catch(() => ({})) as RuntimeConfigResponse;
      if (!r.ok || d.ok === false) { rc.error = typeof d.detail === 'string' ? d.detail : `保存失败 (${r.status})`; return; }
      rc.restartRequired = d.restart_required === true;
      rc.configuredMiB = bytesToMiB(d.body_limit_bytes) ?? v;
      const eff = bytesToMiB(d.effective_body_limit_bytes);
      if (eff !== null) rc.effectiveMiB = eff;
      rc.notice = rc.restartRequired ? '已保存，将在服务重启后生效' : '已保存并立即生效';
    } catch (e) { rc.error = '网络错误，请检查连接后重试'; }
    finally { rc.saving = false; }
  }

  return { runtimeCfg, loadRuntimeConfig, saveRuntimeConfig };
}
