// ---------- API 密钥（从 app.ts 的密钥相关方法移植） ----------
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';
import { apiFetch, toastErr, toastOk } from '../api/client';
import type { ApiKey } from '../types';

interface CreateKeyResponse {
  key?: string;
  detail?: unknown;
}

const keys = ref<ApiKey[]>([]);
const keysLoading = ref(false);
const keyName = ref('');
const newKey = ref('');
const keyCopied = ref(false);
const keyBusy = ref(false);

export function useKeys() {
  async function loadKeys(): Promise<void> {
    keysLoading.value = true;
    try {
      const r = await apiFetch('/api-keys');
      const d = await r.json() as ApiKey[];
      keys.value = r.ok ? (Array.isArray(d) ? d : []) : [];
    } catch (e) { keys.value = []; }
    finally { keysLoading.value = false; }
  }

  async function createKey(): Promise<void> {
    if (keyBusy.value) return;
    keyBusy.value = true;
    try {
      const r = await apiFetch('/api-keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: keyName.value.trim() || '未命名密钥',
        }),
      });
      const d = await r.json().catch(() => ({})) as CreateKeyResponse;
      if (!r.ok || !d.key) { toastErr(typeof d.detail === 'string' ? d.detail : '创建失败'); return; }
      newKey.value = d.key;
      keyCopied.value = false;
      keyName.value = '';
      await loadKeys();
    } catch (e) { toastErr('网络错误'); }
    finally { keyBusy.value = false; }
  }

  async function copyNewKey(): Promise<void> {
    const { copy } = useClipboard({ legacy: true });
    await copy(newKey.value);
    keyCopied.value = true;
    setTimeout(() => { keyCopied.value = false; }, 1500);
  }

  async function deleteKey(id: string): Promise<void> {
    try {
      const r = await apiFetch(`/api-keys/${id}`, { method: 'DELETE' });
      if (r.ok) { keys.value = keys.value.filter(k => k.id !== id); toastOk('已删除'); }
      else toastErr('删除失败');
    } catch (e) { toastErr('网络错误'); }
  }

  return {
    keys, keysLoading, keyName, newKey, keyCopied, keyBusy,
    loadKeys, createKey, copyNewKey, deleteKey,
  };
}
