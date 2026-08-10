<script setup lang="ts">
// 聊天页：空状态建议 / 消息列表 / 输入区 / 运行设置抽屉 / 智能滚动
import { onMounted, ref } from 'vue';
import Icon from '../components/Icon.vue';
import ChatMessage from '../components/ChatMessage.vue';
import Composer from '../components/Composer.vue';
import RunSettingsDrawer from '../components/RunSettingsDrawer.vue';
import { useChat } from '../composables/useChat';
import { model } from '../composables/useCache';

const { msgs, busy, suggestions, useSuggestion, scrollDown, isNearBottom } = useChat();

const showBackToBottom = ref(false);

function onScroll(e: Event): void {
  const el = e.target as HTMLElement;
  showBackToBottom.value = !isNearBottom(el, 160);
}

function backToBottom(): void {
  const el = document.getElementById('chat-scroll');
  if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
}

onMounted(() => scrollDown(true));

const SUGGESTION_ICONS = ['edit', 'sparkle', 'list', 'image'] as const;
</script>

<template>
  <div class="chat-wrap">
    <div class="chat-main">
      <div id="chat-scroll" class="chat-scroll" @scroll.passive="onScroll">
        <div class="chat-col">
          <div v-if="!msgs.length" class="chat-empty">
            <span class="ce-logo"><Icon name="sparkle" :size="26" /></span>
            <h2>今天想一起做点什么？</h2>
            <p>选一个模型，直接输入想法。支持图片、联网搜索和工具调用。</p>
            <div class="suggestions">
              <button v-for="(s, i) in suggestions" :key="s" class="sug-item" @click="useSuggestion(s)">
                <Icon :name="SUGGESTION_ICONS[i % SUGGESTION_ICONS.length]" :size="16" />
                <span>{{ s }}</span>
              </button>
            </div>
          </div>

          <ChatMessage
            v-for="(m, i) in msgs" :key="i"
            :m="m" :index="i" :is-last="i === msgs.length - 1"
            :streaming="busy && i === msgs.length - 1 && m.role === 'assistant'"
            :model-name="model"
          />
        </div>
      </div>

      <button
        class="back-to-bottom" :class="{ 'hidden-btn': !showBackToBottom }"
        title="回到底部" @click="backToBottom"
      >
        <Icon name="chevronDown" :size="18" />
      </button>

      <Composer />
    </div>

    <RunSettingsDrawer />
  </div>
</template>
