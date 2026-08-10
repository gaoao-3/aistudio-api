<script setup lang="ts">
// 远程登录分步模态（原 index.html 远程登录模态移植）
import { NAlert, NButton, NInput, NModal } from 'naive-ui';
import Icon from './Icon.vue';
import { useAccounts } from '../composables/useAccounts';

const { remoteLogin, submitRemoteInput, closeRemoteLogin, remoteStepIcon } = useAccounts();

function onUpdateShow(show: boolean): void {
  if (!show) closeRemoteLogin();
}
</script>

<template>
  <n-modal
    :show="remoteLogin.open" preset="card" title="远程登录 Google 账号"
    style="max-width: 480px" :mask-closable="false"
    @update:show="onUpdateShow"
  >
    <template #header-extra>
      <span class="modal-badge"><Icon name="devices" :size="22" /></span>
    </template>

    <NAlert v-if="remoteLogin.error" type="error" class="mb-4">{{ remoteLogin.error }}</NAlert>

    <div v-if="!remoteLogin.step && !remoteLogin.error" class="rm-waiting">
      <Icon name="loader" :size="18" class="spin" />
      <span>等待登录页加载…</span>
    </div>

    <div v-if="remoteLogin.step" class="rm-step">
      <div class="rm-prompt">
        <span class="rm-step-icon"><Icon :name="remoteStepIcon(remoteLogin.step.kind)" :size="20" /></span>
        <p>{{ remoteLogin.step.prompt }}</p>
      </div>

      <!-- 文本/密码/验证码输入 -->
      <form
        v-if="['email', 'password', 'otp'].includes(remoteLogin.step.kind)"
        @submit.prevent="submitRemoteInput(remoteLogin.input)"
      >
        <NInput
          v-model:value="remoteLogin.input"
          :type="remoteLogin.step.sensitive ? 'password' : 'text'"
          :show-password-on="remoteLogin.step.sensitive ? 'click' : undefined"
          :disabled="remoteLogin.submitting"
          autocomplete="off" autocapitalize="off" autofocus
          class="mb-3"
        />
        <div class="flex justify-end gap-2">
          <NButton v-if="remoteLogin.step.kind === 'otp'" tertiary size="small" :loading="remoteLogin.submitting" :disabled="remoteLogin.submitting" @click="submitRemoteInput('')">换个方式</NButton>
          <NButton type="primary" size="small" attr-type="submit" :loading="remoteLogin.submitting" :disabled="!remoteLogin.input.trim() || remoteLogin.submitting">提交</NButton>
        </div>
      </form>

      <!-- 选择登录方式 -->
      <div v-else-if="remoteLogin.step.kind === 'selection'" class="rm-options">
        <button
          v-for="(opt, i) in remoteLogin.step.options || []" :key="i"
          class="rm-option" :disabled="remoteLogin.submitting" @click="submitRemoteInput(String(i + 1))"
        >
          <span class="rm-option-num">{{ i + 1 }}</span>
          <span>{{ opt }}</span>
        </button>
      </div>

      <!-- 手机确认 -->
      <div v-else-if="remoteLogin.step.kind === 'manual'" class="rm-manual">
        <span class="rm-phone-pulse"><Icon name="phone" :size="22" /></span>
        <p>请在手机上完成确认，完成后会自动继续</p>
        <NButton tertiary size="small" :loading="remoteLogin.submitting" :disabled="remoteLogin.submitting" @click="submitRemoteInput('')">收不到？换个登录方式</NButton>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end">
        <NButton tertiary size="small" @click="closeRemoteLogin()">取消</NButton>
      </div>
    </template>
  </n-modal>
</template>
