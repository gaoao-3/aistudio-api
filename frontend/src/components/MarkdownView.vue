<script setup lang="ts">
// 单条消息的 markdown 渲染 + 代码块点击复制（事件委托）
import { computed } from 'vue';
import { useClipboard } from '@vueuse/core';
import { renderMarkdown } from '../composables/useMarkdown';
import { toastErr, toastOk } from '../api/client';

const props = defineProps<{ text: string }>();

const html = computed(() => renderMarkdown(props.text));

async function onClick(e: MouseEvent): Promise<void> {
  const pre = (e.target as Element).closest('pre.codeblock');
  if (!pre) return;
  const code = (pre as HTMLElement).innerText.replace(/复制$/, '').trim();
  const { copy } = useClipboard({ legacy: true });
  try {
    await copy(code);
    toastOk('代码已复制');
  } catch (err) {
    toastErr('复制失败');
  }
}
</script>

<template>
  <div class="msg-content" @click="onClick" v-html="html"></div>
</template>
