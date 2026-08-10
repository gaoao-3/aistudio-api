<script setup lang="ts">
// 账号管理页：登录方式 / 账号卡片 / 轮询策略 + 两个登录模态
import { onMounted } from 'vue';
import { NButton, NCard, NInputNumber, NRadioButton, NRadioGroup } from 'naive-ui';
import Icon from '../components/Icon.vue';
import RemoteLoginModal from '../components/RemoteLoginModal.vue';
import CookieModal from '../components/CookieModal.vue';
import { useAccounts } from '../composables/useAccounts';
import { useAuth } from '../composables/useAuth';
import { fmtDate } from '../utils';
import type { Account } from '../types';

const {
  accountRows, activeId, accountsLoading, rotCfg,
  refreshingAccountId,
  loginInProgress, localLoginSessionId, cookieModal,
  loadAccounts, loadRotation, saveRotation, forceNext, activateAccount, deleteAccount,
  refreshAccountProfile, refreshStaleProfiles, addAccount, cancelLocalLogin, startRemoteLogin,
} = useAccounts();
const { capabilities } = useAuth();

onMounted(async () => {
  await Promise.all([loadAccounts(), loadRotation()]);
  void refreshStaleProfiles();
});

function onDeleteAccount(id: string): void {
  if (!confirm('确定删除该账号？')) return;
  deleteAccount(id);
}

const rotationModes = ['round_robin', 'lru', 'least_rl'];

function accountTitle(account: Account): string {
  return account.nickname || account.name || account.email || account.id;
}

function accountInitials(account: Account): string {
  const value = accountTitle(account).trim();
  if (!value) return '?';
  if (value.includes('@')) return value.slice(0, 1).toUpperCase();
  return value.split(/\s+/u).slice(0, 2).map(item => item.slice(0, 1)).join('').toUpperCase();
}

function tierLabel(account: Account): string {
  if (account.tier === 'ultra') return 'Ultra 会员';
  if (account.tier === 'pro') return 'Pro 会员';
  if (account.tier === 'free') return '免费层级';
  return '套餐未识别';
}

function tierClass(account: Account): string {
  return `tier-${account.tier || 'unknown'}`;
}

function membershipDateLabel(account: Account): string {
  return account.membership_next_at_kind === 'expiry' ? '到期' : '续订';
}

function membershipDate(value?: string | null): string {
  if (!value) return '-';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
}
</script>

<template>
  <div class="page">
    <div class="page-title">账号管理</div>
    <div class="page-sub">多账号轮询，限流自动切换。</div>

    <div class="login-methods">
      <button v-if="capabilities.automaticLogin" class="login-method" :disabled="loginInProgress" @click="addAccount()">
        <span class="lm-icon"><Icon :name="loginInProgress ? 'loader' : 'userplus'" :size="22" :class="{ spin: loginInProgress }" /></span>
        <span class="lm-body">
          <span class="lm-title">{{ loginInProgress ? '等待浏览器中完成登录…' : '浏览器登录' }}</span>
          <span class="lm-desc">在本机弹出的浏览器窗口中完成 Google 登录</span>
        </span>
        <Icon name="chevronRight" :size="18" class="lm-arrow" />
      </button>
      <button v-if="capabilities.remoteLogin" class="login-method" @click="startRemoteLogin()">
        <span class="lm-icon"><Icon name="devices" :size="22" /></span>
        <span class="lm-body">
          <span class="lm-title">远程登录</span>
          <span class="lm-desc">无显示环境时，在此按步骤远程完成登录</span>
        </span>
        <Icon name="chevronRight" :size="18" class="lm-arrow" />
      </button>
      <button v-if="capabilities.cookieImport" class="login-method" @click="cookieModal.open = true">
        <span class="lm-icon"><Icon name="cookie" :size="22" /></span>
        <span class="lm-body">
          <span class="lm-title">导入 Cookie</span>
          <span class="lm-desc">从浏览器复制 Cookie 快速添加账号</span>
        </span>
        <Icon name="chevronRight" :size="18" class="lm-arrow" />
      </button>
    </div>

    <div v-if="loginInProgress" class="login-progress">
      <Icon name="loader" :size="16" class="spin" />
      <span>登录会话进行中，请在弹出的浏览器窗口完成授权，最长约 10 分钟…</span>
      <NButton tertiary size="small" :disabled="!localLoginSessionId" @click="cancelLocalLogin()">取消</NButton>
    </div>

    <div v-if="accountsLoading" class="empty-hint"><Icon name="loader" :size="18" class="spin" />加载账号…</div>
    <div v-else-if="!accountRows.length" class="empty-hint">还没有账号，通过上方任一方式添加。</div>
    <div v-else class="acct-grid">
      <NCard v-for="a in accountRows" :key="a.id" size="small" class="acct-card">
        <div class="acct-identity">
          <div class="acct-avatar">
            <img v-if="a.avatar_url" :src="a.avatar_url" :alt="accountTitle(a)" loading="lazy">
            <span v-else>{{ accountInitials(a) }}</span>
          </div>
          <div class="acct-identity-body">
            <div class="acct-head">
              <span class="name">{{ accountTitle(a) }}</span>
              <span class="tier-badge" :class="tierClass(a)">{{ tierLabel(a) }}</span>
            </div>
            <div class="acct-email">{{ a.email || '邮箱未识别' }}</div>
          </div>
          <span v-if="a.id === activeId" class="badge">活跃</span>
          <span v-else class="badge idle">待命</span>
        </div>
        <div class="acct-meta">
          <span>创建：{{ fmtDate(a.created_at) }}</span>
          <span v-if="a.requests !== undefined">请求 {{ a.requests || 0 }} · 成功 {{ a.success || 0 }} · 限流 {{ a.rate_limited || 0 }} · 错误 {{ a.errors ?? a.error ?? 0 }}</span>
          <span v-if="a.cooldown_remaining">冷却中：{{ a.cooldown_remaining }} 秒后恢复</span>
          <span v-if="a.membership_next_at">{{ membershipDateLabel(a) }}：{{ membershipDate(a.membership_next_at) }}</span>
          <span v-if="a.profile_error" class="acct-profile-error">资料读取失败，可点击刷新重试</span>
          <span v-else-if="a.profile_updated_at">资料更新：{{ fmtDate(a.profile_updated_at) }}</span>
        </div>
        <div class="acct-actions">
          <NButton v-if="a.id !== activeId" tertiary size="small" @click="activateAccount(a.id)">激活</NButton>
          <NButton tertiary size="small" :loading="refreshingAccountId === a.id" :disabled="Boolean(refreshingAccountId && refreshingAccountId !== a.id)" @click="refreshAccountProfile(a.id)">刷新资料</NButton>
          <NButton tertiary type="error" size="small" @click="onDeleteAccount(a.id)">删除</NButton>
        </div>
      </NCard>
    </div>

    <div class="section-title">轮询策略</div>
    <NCard size="small" style="max-width: 520px">
      <div class="flex flex-col gap-4">
        <div>
          <div class="field-label"><span>模式</span></div>
          <n-radio-group v-model:value="rotCfg.mode">
            <n-radio-button v-for="v in rotationModes" :key="v" :value="v" :label="v" />
          </n-radio-group>
        </div>
        <div>
          <div class="field-label"><span>冷却时间（秒）</span></div>
          <n-input-number v-model:value="rotCfg.cooldown" :min="0" class="w-full" />
        </div>
        <div class="flex gap-2">
          <NButton type="primary" size="small" @click="saveRotation()">保存</NButton>
          <NButton tertiary size="small" @click="forceNext()">立即切换账号</NButton>
        </div>
      </div>
    </NCard>

    <RemoteLoginModal />
    <CookieModal />
  </div>
</template>
