// ---------- 历史记录（从 app.ts 的历史相关方法移植） ----------
import { ref } from 'vue';
import { apiFetch, toastErr, toastOk } from '../api/client';
import { model, msgs } from './useCache';
import { useView } from './useView';
import type { Attachment, HistoryItem, InteractionStep, Message, ToolCall } from '../types';

interface InteractionsListResponse {
  interactions?: HistoryItem[];
}

const history = ref<HistoryItem[]>([]);
const historyLoading = ref(false);

function stepAttachment(content: { type?: string; data?: string; mime_type?: string }, index: number): Attachment | null {
  if (!content.data || !['image', 'audio', 'document'].includes(content.type || '')) return null;
  const mime = content.mime_type || 'application/octet-stream';
  const kind = content.type === 'image' ? 'image' : content.type === 'audio' ? 'audio' : mime.startsWith('video/') ? 'video' : 'document';
  return {
    name: `附件-${index + 1}`,
    mime_type: mime,
    data_url: `data:${mime};base64,${content.data}`,
    kind,
  };
}

export function useHistory() {
  async function loadHistory(): Promise<void> {
    historyLoading.value = true;
    try {
      const r = await apiFetch('/v1beta/interactions');
      const d = await r.json() as InteractionsListResponse;
      history.value = r.ok ? (d.interactions || []) : [];
    } catch (e) { history.value = []; }
    finally { historyLoading.value = false; }
  }

  function historyPreview(h: HistoryItem): string {
    const steps = h.steps || [];
    const firstUser = steps.find(s => s.type === 'user_input');
    if (!firstUser) return '(空)';
    const text = (firstUser.content || []).filter(c => c.type === 'text').map(c => c.text).join(' ');
    return text || '(图片/附件)';
  }

  async function openInteraction(id: string): Promise<void> {
    try {
      const r = await apiFetch(`/v1beta/interactions/${id}`);
      if (!r.ok) { toastErr('载入失败'); return; }
      const d = await r.json() as { steps?: InteractionStep[]; model?: string };
      const nextMsgs: Message[] = [];
      let pendingThinking = '';
      for (const step of d.steps || []) {
        if (step.type === 'user_input') {
          const content = (step.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
          const attachments = (step.content || []).map((item, index) => stepAttachment(item, index)).filter((item): item is Attachment => Boolean(item));
          nextMsgs.push({ role: 'user', content, attachments });
          pendingThinking = '';
        } else if (step.type === 'thought') {
          pendingThinking = (step.summary || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
        } else if (step.type === 'model_output') {
          let content = '';
          for (const c of step.content || []) {
            if (c.type === 'text') content += c.text;
            else if (c.type === 'image' && c.data) content += `![image](data:${c.mime_type || 'image/png'};base64,${c.data})\n`;
          }
          nextMsgs.push({ role: 'assistant', content, thinking: pendingThinking, showThinking: false });
          pendingThinking = '';
        } else if (step.type === 'function_call') {
          const last = nextMsgs[nextMsgs.length - 1];
          const tc: ToolCall = { id: step.id, name: step.name, arguments: step.arguments, signature: step.signature };
          if (last && last.role === 'assistant') {
            last.toolCalls = [...(last.toolCalls || []), tc];
          } else {
            nextMsgs.push({ role: 'assistant', content: '', toolCalls: [tc], showThinking: false });
          }
        }
      }
      if (d.model) model.value = d.model;
      msgs.value = nextMsgs;
      useView().go('chat');
    } catch (e) { toastErr('网络错误'); }
  }

  async function removeInteraction(id: string): Promise<void> {
    try {
      const r = await apiFetch(`/v1beta/interactions/${id}`, { method: 'DELETE' });
      if (r.ok) { history.value = history.value.filter(h => h.id !== id); toastOk('已删除'); }
      else toastErr('删除失败');
    } catch (e) { toastErr('网络错误'); }
  }

  return { history, historyLoading, loadHistory, historyPreview, openInteraction, removeInteraction };
}
