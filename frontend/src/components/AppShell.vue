<script setup lang="ts">
// 应用壳：左侧 rail 导航 + 顶栏 + 视图切换
import { onMounted, ref } from 'vue';
import Icon from './Icon.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import ChatView from '../views/ChatView.vue';
import HistoryView from '../views/HistoryView.vue';
import AccountsView from '../views/AccountsView.vue';
import KeysView from '../views/KeysView.vue';
import DashboardView from '../views/DashboardView.vue';
import SettingsView from '../views/SettingsView.vue';
import { useView, VIEW_TITLES, type ViewKey } from '../composables/useView';
import { useAuth } from '../composables/useAuth';
import { useAccounts } from '../composables/useAccounts';
import { useModels } from '../composables/useModels';
import { useStats } from '../composables/useStats';
import { model } from '../composables/useCache';

const { view, go, runSettingsOpen } = useView();
const { checkAuth, logout } = useAuth();
const { activeAccount, loadAccounts, loadRotation } = useAccounts();
const { loadModels } = useModels();
const { loadStats } = useStats();

const navOpen = ref(false);

const NAV: { key: ViewKey; label: string; icon: string }[] = [
  { key: 'chat', label: '对话', icon: 'chat' },
  { key: 'history', label: '历史', icon: 'history' },
  { key: 'accounts', label: '账号', icon: 'users' },
  { key: 'keys', label: '密钥', icon: 'key' },
  { key: 'dashboard', label: '统计', icon: 'chart' },
  { key: 'settings', label: '设置', icon: 'cog' },
];

function nav(v: ViewKey): void {
  go(v);
  navOpen.value = false;
}

onMounted(async () => {
  await checkAuth();
  loadModels();
  loadStats();
  loadAccounts();
  loadRotation();
});
</script>

<template>
  <div class="shell">
    <div v-if="navOpen" class="fixed inset-0 z-[80] bg-black/20 backdrop-blur-[2px]" @click="navOpen = false"></div>
    <nav class="rail" :class="{ open: navOpen }">
      <div class="rail-logo" title="aistudi-web-api"><Icon name="sparkle" :size="26" /></div>
      <button
        v-for="n in NAV" :key="n.key"
        class="rail-item" :class="{ active: view === n.key }"
        @click="nav(n.key)"
      >
        <Icon :name="n.icon" /><span>{{ n.label }}</span>
      </button>
      <div class="rail-spacer"></div>
      <button class="rail-item" title="退出登录" @click="logout()">
        <Icon name="logout" /><span>退出</span>
      </button>
    </nav>

    <div class="main">
      <header class="topbar">
        <button class="icon-btn nav-toggle" title="菜单" @click="navOpen = true">
          <Icon name="menu" />
        </button>
        <h1>{{ VIEW_TITLES[view] }}</h1>
        <button v-if="view === 'chat' && model" class="model-topbar-chip" title="运行设置" @click="runSettingsOpen = true">
          <span class="mtc-label">{{ model }}</span>
          <Icon name="chevronDown" :size="14" />
        </button>
        <div class="spacer"></div>
        <button v-if="view === 'chat'" class="icon-btn settings-toggle" title="运行设置" @click="runSettingsOpen = true">
          <Icon name="tune" />
        </button>
        <ThemeSwitcher />
        <div class="account-chip">
          <span class="dot" :class="{ off: !activeAccount.id }"></span>
          <span class="chip-label">{{ activeAccount.id ? (activeAccount.email || activeAccount.name || activeAccount.id) : '未登录账号' }}</span>
        </div>
      </header>

      <ChatView v-if="view === 'chat'" />
      <div v-else class="content">
        <HistoryView v-if="view === 'history'" />
        <AccountsView v-else-if="view === 'accounts'" />
        <KeysView v-else-if="view === 'keys'" />
        <DashboardView v-else-if="view === 'dashboard'" />
        <SettingsView v-else-if="view === 'settings'" />
      </div>
    </div>
  </div>
</template>
