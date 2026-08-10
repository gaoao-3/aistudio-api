<script setup lang="ts">
// Cookie 导入模态（原 index.html Cookie 模态移植）
import { NButton, NInput, NModal } from 'naive-ui';
import { useAccounts } from '../composables/useAccounts';

const { cookieModal, importCookies } = useAccounts();
</script>

<template>
  <n-modal
    v-model:show="cookieModal.open" preset="card" title="导入 Cookie"
    style="max-width: 520px"
  >
    <p class="text-[12px] text-muted mb-4">从 myaccount.google.com 复制 Cookie，快速添加账号</p>
    <div class="flex flex-col gap-4">
      <div>
        <div class="field-label"><span>Cookie（每行一个或用分号分隔）</span></div>
        <NInput
          v-model:value="cookieModal.cookies" type="textarea" :rows="5"
          placeholder="从 myaccount.google.com 复制"
        />
      </div>
      <div>
        <div class="field-label"><span>名称（可选）</span></div>
        <NInput v-model:value="cookieModal.name" placeholder="My Account" />
      </div>
      <div>
        <div class="field-label"><span>邮箱（可选）</span></div>
        <NInput v-model:value="cookieModal.email" placeholder="user@gmail.com" />
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end gap-2">
        <NButton tertiary size="small" @click="cookieModal.open = false">取消</NButton>
        <NButton type="primary" size="small" :loading="cookieModal.importing" @click="importCookies()">
          {{ cookieModal.importing ? '导入中…' : '导入' }}
        </NButton>
      </div>
    </template>
  </n-modal>
</template>
