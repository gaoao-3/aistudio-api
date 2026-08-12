// ---------- API 密钥（从 app.ts 的密钥相关方法移植） ----------
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';
import { apiFetch, toastErr, toastOk } from '../api/client';
import type { ApiKey, ApiKeyPermissions } from '../types';

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
const keySavingId = ref('');
const keyPermissions = ref<ApiKeyPermissions>({
  google_search: true,
  code_execution: true,
  google_maps: true,
  url_context: true,
});

function normalizedPermissions(value?: Partial<ApiKeyPermissions>): ApiKeyPermissions {
  return {
    google_search: value?.google_search !== false,
    code_execution: value?.code_execution !== false,
    google_maps: value?.google_maps !== false,
    url_context: value?.url_context !== false,
  };
}

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
          permissions: keyPermissions.value,
        }),
      });
      const d = await r.json().catch(() => ({})) as CreateKeyResponse;
      if (!r.ok || !d.key) { toastErr(typeof d.detail === 'string' ? d.detail : '创建失败'); return; }
      newKey.value = d.key;
      keyCopied.value = false;
      keyName.value = '';
      keyPermissions.value = normalizedPermissions();
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

  async function saveKeyPermissions(id: string, permissions: ApiKeyPermissions): Promise<boolean> {
    if (keySavingId.value) return false;
    keySavingId.value = id;
    try {
      const r = await apiFetch(`/api-keys/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ permissions: normalizedPermissions(permissions) }),
      });
      if (!r.ok) {
        toastErr('权限保存失败');
        return false;
      }
      const updated = await r.json() as ApiKey;
      keys.value = keys.value.map(item => item.id === id
        ? { ...item, ...updated, permissions: normalizedPermissions(updated.permissions) }
        : item);
      toastOk('权限已保存');
      return true;
    } catch (e) {
      toastErr('网络错误');
      return false;
    } finally {
      keySavingId.value = '';
    }
  }

  return {
    keys, keysLoading, keyName, newKey, keyCopied, keyBusy, keySavingId, keyPermissions,
    loadKeys, createKey, copyNewKey, deleteKey, saveKeyPermissions,
  };
}
