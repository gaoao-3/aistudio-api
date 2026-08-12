<script setup lang="ts">
// 远程登录分步模态（原 index.html 远程登录模态移植）
import { computed } from 'vue';
import { NAlert, NButton, NInput, NModal } from 'naive-ui';
import Icon from './Icon.vue';
import { useAccounts } from '../composables/useAccounts';

const { remoteLogin, submitRemoteInput, closeRemoteLogin, remoteStepIcon } = useAccounts();

function onUpdateShow(show: boolean): void {
  if (!show) closeRemoteLogin();
}

// 邮箱 / 密码字段的文案与输入属性（验证码走独立处理）
const fieldMeta = computed(() => {
  const kind = remoteLogin.value.step?.kind;
  if (kind === 'email') {
    return {
      label: '邮箱地址',
      hint: '输入该 Google 账号的完整邮箱，例如 name@gmail.com。',
      placeholder: 'name@gmail.com',
      inputmode: 'email' as const,
      autocomplete: 'username',
    };
  }
  if (kind === 'password') {
    return {
      label: '密码',
      hint: '输入该账号的登录密码，内容仅用于本次远程登录，不会被保存。',
      placeholder: '输入密码',
      inputmode: 'text' as const,
      autocomplete: 'current-password',
    };
  }
  return null;
});

const stepKind = computed(() => remoteLogin.value.step?.kind ?? '');
const isManualSelection = computed(
  () => stepKind.value === 'manual' && remoteLogin.value.step?.phase === 'selection',
);
</script>

<template>
  <n-modal
    :show="remoteLogin.open" preset="card" title="远程登录 Google 账号"
    class="rm-modal" style="max-width: 480px" :mask-closable="false"
    @update:show="onUpdateShow"
  >
    <template #header-extra>
      <span class="modal-badge"><Icon name="devices" :size="22" /></span>
    </template>

    <NAlert v-if="remoteLogin.error" type="error" class="rm-alert">{{ remoteLogin.error }}</NAlert>

    <div v-if="!remoteLogin.step && !remoteLogin.error" class="rm-waiting">
      <Icon name="loader" :size="18" class="spin" />
      <span>等待登录页加载…</span>
    </div>

    <div v-if="remoteLogin.step" class="rm-step">
      <div class="rm-prompt">
        <span class="rm-step-icon"><Icon :name="remoteStepIcon(stepKind)" :size="20" /></span>
        <p>{{ remoteLogin.step.prompt }}</p>
      </div>

      <!-- 邮箱 / 密码输入 -->
      <form
        v-if="fieldMeta"
        class="rm-form"
        @submit.prevent="submitRemoteInput(remoteLogin.input)"
      >
        <label class="rm-field">
          <span class="rm-label">{{ fieldMeta.label }}</span>
          <NInput
            v-model:value="remoteLogin.input"
            :type="remoteLogin.step.sensitive ? 'password' : 'text'"
            :show-password-on="remoteLogin.step.sensitive ? 'click' : undefined"
            :placeholder="fieldMeta.placeholder"
            :input-props="{
              inputmode: fieldMeta.inputmode,
              autocomplete: fieldMeta.autocomplete,
              autocapitalize: 'off',
              spellcheck: 'false',
            }"
            :disabled="remoteLogin.submitting"
            size="large"
            autofocus
          />
          <span class="rm-hint">{{ fieldMeta.hint }}</span>
        </label>
        <div class="rm-actions">
          <NButton
            type="primary" attr-type="submit"
            :loading="remoteLogin.submitting" :disabled="!remoteLogin.input.trim() || remoteLogin.submitting"
          >继续</NButton>
        </div>
      </form>

      <!-- 验证码输入（独立的大字号等宽体验） -->
      <form
        v-else-if="stepKind === 'otp'"
        class="rm-otp"
        @submit.prevent="submitRemoteInput(remoteLogin.input)"
      >
        <label class="rm-otp-field">
          <span class="rm-label">验证码</span>
          <NInput
            v-model:value="remoteLogin.input"
            class="rm-otp-input"
            placeholder="••••••"
            :maxlength="8"
            :input-props="{
              inputmode: 'numeric',
              pattern: '[0-9]*',
              autocomplete: 'one-time-code',
              autocapitalize: 'off',
              spellcheck: 'false',
              'aria-label': '验证码',
            }"
            :disabled="remoteLogin.submitting"
            autofocus
          />
          <span class="rm-hint rm-hint-center">
            输入身份验证器或短信收到的 6–8 位数字验证码，无需空格。
          </span>
        </label>
        <div class="rm-otp-actions">
          <NButton
            type="primary" block attr-type="submit"
            :loading="remoteLogin.submitting" :disabled="!remoteLogin.input.trim() || remoteLogin.submitting"
          >验证</NButton>
          <NButton
            tertiary size="small"
            :loading="remoteLogin.submitting" :disabled="remoteLogin.submitting"
            @click="submitRemoteInput('')"
          >换个方式验证</NButton>
        </div>
      </form>

      <!-- 选择登录方式 -->
      <div v-else-if="stepKind === 'selection'" class="rm-options">
        <button
          v-for="(opt, i) in remoteLogin.step.options || []" :key="i"
          type="button" class="rm-option" :disabled="remoteLogin.submitting"
          @click="submitRemoteInput(String(i + 1))"
        >
          <span class="rm-option-num">{{ i + 1 }}</span>
          <span class="rm-option-text">{{ opt }}</span>
          <Icon name="chevronRight" :size="16" class="rm-option-chevron" />
        </button>
      </div>

      <!-- 手机确认 -->
      <div v-else-if="stepKind === 'manual'" class="rm-manual">
        <span class="rm-phone-pulse"><Icon name="phone" :size="24" /></span>
        <div class="rm-manual-text">
          <p class="rm-manual-title">{{ isManualSelection ? '需要切换验证方式' : '等待设备确认' }}</p>
          <p class="rm-manual-hint">
            {{ isManualSelection
              ? '当前 Google 页面没有返回可操作的验证选项，请切换到其他验证方式。'
              : '请在手机或安全设备上完成确认，完成后会自动继续。' }}
          </p>
        </div>
        <span v-if="!isManualSelection" class="rm-status">
          <Icon name="loader" :size="14" class="spin" />
          正在等待确认结果…
        </span>
        <NButton
          tertiary size="small"
          :loading="remoteLogin.submitting" :disabled="remoteLogin.submitting"
          @click="submitRemoteInput('')"
        >换个登录方式</NButton>
      </div>
    </div>

    <template #footer>
      <div class="rm-footer">
        <NButton tertiary size="small" @click="closeRemoteLogin()">取消</NButton>
      </div>
    </template>
  </n-modal>
</template>
