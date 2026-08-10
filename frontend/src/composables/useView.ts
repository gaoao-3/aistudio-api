// ---------- 视图切换（替代原 go(v)，数据加载由各视图 onMounted 负责） ----------
import { ref } from 'vue';

export type ViewKey = 'chat' | 'history' | 'accounts' | 'keys' | 'dashboard' | 'settings';

export const VIEW_TITLES: Record<ViewKey, string> = {
  chat: 'AI Studio',
  history: '历史记录',
  accounts: '账号管理',
  keys: 'API 密钥',
  dashboard: '用量统计',
  settings: '服务设置',
};

const view = ref<ViewKey>('chat');

/** 聊天页「运行设置」抽屉开关（顶栏按钮与抽屉共享） */
const runSettingsOpen = ref(false);

export function useView() {
  function go(v: ViewKey): void {
    view.value = v;
    runSettingsOpen.value = false;
  }
  return { view, go, runSettingsOpen };
}
