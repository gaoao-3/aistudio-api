// ---------- 鉴权与服务端能力（从 app.ts 的 checkAuth/logout 移植） ----------
import { ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';

export interface ServerCapabilities {
  gateway: string;
  automaticLogin: boolean;
  remoteLogin: boolean;
  cookieImport: boolean;
  streaming: string;
}

const token = useLocalStorage('asp_api_token', '');
const authEnabled = ref(false);
const capabilities = ref<ServerCapabilities>({
  gateway: 'unknown',
  automaticLogin: false,
  remoteLogin: false,
  cookieImport: true,
  streaming: 'buffered',
});

export function useAuth() {
  async function checkAuth(): Promise<void> {
    try {
      const res = await fetch('/auth/check');
      const data = await res.json() as {
        auth_enabled?: boolean;
        capabilities?: { gateway?: string; automatic_login?: boolean; remote_login?: boolean; cookie_import?: boolean; streaming?: string };
      };
      authEnabled.value = !!data.auth_enabled;
      if (data.capabilities) {
        capabilities.value = {
          gateway: data.capabilities.gateway || 'unknown',
          automaticLogin: data.capabilities.automatic_login === true,
          remoteLogin: data.capabilities.remote_login === true,
          cookieImport: data.capabilities.cookie_import !== false,
          streaming: data.capabilities.streaming || 'buffered',
        };
      }

      if (authEnabled.value) {
        const saved = token.value.trim();
        if (!saved) {
          window.location.href = '/static/login.html';
          return;
        }
        // 验证 token 是否有效
        const verifyRes = await fetch('/auth/verify', {
          headers: { Authorization: `Bearer ${saved}` },
        });
        if (!verifyRes.ok) {
          token.value = '';
          window.location.href = '/static/login.html';
        }
      }
    } catch (e) {
      console.error('Auth check failed', e);
    }
  }

  function logout(): void {
    token.value = '';
    window.location.href = '/static/login.html';
  }

  return { token, authEnabled, capabilities, checkAuth, logout };
}
