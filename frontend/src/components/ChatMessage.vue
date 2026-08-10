<script setup lang="ts">
// 单条聊天消息：头像 / 多媒体附件 / 思考折叠 / markdown / 工具调用 / 错误 / 操作按钮
import Icon from './Icon.vue';
import MarkdownView from './MarkdownView.vue';
import { useChat } from '../composables/useChat';
import type { Message } from '../types';

defineProps<{
  m: Message;
  index: number;
  isLast: boolean;
  streaming: boolean;
  modelName: string;
}>();

const { busy, copiedIdx, copyMessage, regenerate } = useChat();
</script>

<template>
  <div class="msg" :class="[m.role, { streaming }]">
    <div class="msg-avatar">{{ m.role === 'user' ? '你' : 'AI' }}</div>
    <div class="msg-body">
      <div class="msg-role">{{ m.role === 'user' ? '你' : modelName }}</div>
      <div v-if="m.images && m.images.length" class="msg-images">
        <img v-for="(img, ii) in m.images" :key="ii" :src="img">
      </div>
      <div v-if="m.attachments && m.attachments.length" class="msg-attachments">
        <template v-for="(attachment, ai) in m.attachments" :key="`${attachment.name}-${ai}`">
          <img v-if="attachment.kind === 'image'" :src="attachment.data_url" :alt="attachment.name">
          <audio v-else-if="attachment.kind === 'audio'" :src="attachment.data_url" controls></audio>
          <video v-else-if="attachment.kind === 'video'" :src="attachment.data_url" controls></video>
          <div v-else class="msg-attachment-file">📄 {{ attachment.name }}</div>
        </template>
      </div>
      <div v-if="m.thinking" class="think-box">
        <button class="think-toggle" @click="m.showThinking = !m.showThinking">
          <Icon :name="m.showThinking ? 'chevronUp' : 'chevronDown'" :size="16" />
          思考过程
        </button>
        <div v-if="m.showThinking" class="think-body">{{ m.thinking }}</div>
      </div>
      <div v-if="streaming && !m.content && !m.error && !m.thinking && !(m.toolCalls && m.toolCalls.length)" class="typing">
        <i></i><i></i><i></i>
      </div>
      <MarkdownView v-else :text="m.content" />
      <div v-for="(tc, tci) in m.toolCalls || []" :key="tci" class="tool-call">
        <Icon name="wrench" :size="18" />
        <div>
          <div class="name">{{ tc.name }}</div>
          <pre>{{ JSON.stringify(tc.arguments, null, 2) }}</pre>
        </div>
      </div>
      <div v-if="m.error" class="msg-error">{{ m.error }}</div>
      <div
        v-if="m.role === 'assistant' && (m.content || m.thinking) && !(busy && isLast)"
        class="msg-actions"
      >
        <button class="icon-btn act" :title="copiedIdx === index ? '已复制' : '复制'" @click="copyMessage(index)">
          <Icon :name="copiedIdx === index ? 'check' : 'copy'" :size="15" />
        </button>
        <button v-if="isLast" class="icon-btn act" title="重新生成" @click="regenerate()">
          <Icon name="refresh" :size="15" />
        </button>
      </div>
    </div>
  </div>
</template>
