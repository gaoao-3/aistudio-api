// ---------- Markdown 渲染（重依赖按消息内容动态加载） ----------
// 普通 Markdown 只使用 marked + DOMPurify；KaTeX 和 highlight.js 只有在确实需要时才下载。
import { Marked, type Tokens } from 'marked';
import DOMPurify from 'dompurify';
import type { HighlightRuntime } from './highlight-runtime';

type KatexRuntime = typeof import('katex').default;

let highlightPromise: Promise<HighlightRuntime> | null = null;
let katexPromise: Promise<KatexRuntime> | null = null;

function loadHighlight(): Promise<HighlightRuntime> {
  highlightPromise ??= import('./highlight-runtime').then(({ default: hljs }) => hljs);
  return highlightPromise;
}

function loadKatex(): Promise<KatexRuntime> {
  katexPromise ??= Promise.all([
    import('katex'),
    import('katex/dist/katex.min.css'),
  ]).then(([module]) => module.default);
  return katexPromise;
}

function parseMarkdown(source: string, highlighter: HighlightRuntime | null): string {
  const parser = new Marked({
    breaks: true,
    gfm: true,
    renderer: {
      code({ text, lang }: Tokens.Code): string | false {
        if (highlighter && lang && highlighter.getLanguage(lang)) {
          try {
            const highlighted = highlighter.highlight(text, { language: lang }).value;
            return `<pre class="codeblock" title="点击复制"><code>${highlighted}</code></pre>`;
          } catch (error) {
            // 高亮失败时走 marked 默认代码块渲染。
          }
        }
        return false;
      },
    },
  });
  return parser.parse(source) as string;
}

function renderMarkdownNow(text: string, katex: KatexRuntime | null, highlighter: HighlightRuntime | null): string {
  if (!text) return '';
  let html = text;

  // 1. 预处理数学公式，防止被 Marked 误解析
  const mathBlocks: { id: string; html: string }[] = [];
  if (katex) {
    // 块级公式 $$...$$
    html = html.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula: string) => {
      const id = `__MATH_BLOCK_${mathBlocks.length}__`;
      try {
        mathBlocks.push({ id, html: katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false }) });
        return id;
      } catch (error) { return match; }
    });
    // 行内公式 $...$
    html = html.replace(/\$([^\$\n]+?)\$/g, (match, formula: string) => {
      const id = `__MATH_INLINE_${mathBlocks.length}__`;
      try {
        mathBlocks.push({ id, html: katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false }) });
        return id;
      } catch (error) { return match; }
    });
  }

  // 2. Marked 解析，代码块标记为可复制
  html = parseMarkdown(html, highlighter);
  html = html.replace(/<pre>/g, '<pre class="codeblock" title="点击复制">');

  // 3. 将公式替换回来
  for (const item of mathBlocks) html = html.replace(item.id, item.html);

  // 4. 清洗并返回
  return DOMPurify.sanitize(html, { ADD_TAGS: ['math', 'style'], ADD_ATTR: ['style'] });
}

/**
 * 没有公式/代码块时同步返回，避免普通消息出现异步空白；重依赖加载时返回 Promise。
 */
export function renderMarkdown(text: string): string | Promise<string> {
  if (!text) return '';
  const needsKatex = /\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$/u.test(text);
  const needsHighlight = /```/u.test(text);
  if (!needsKatex && !needsHighlight) return renderMarkdownNow(text, null, null);

  const katexTask = needsKatex ? loadKatex() : Promise.resolve<KatexRuntime | null>(null);
  const highlightTask = needsHighlight ? loadHighlight() : Promise.resolve<HighlightRuntime | null>(null);
  return Promise.all([katexTask, highlightTask])
    .then(([katex, highlighter]) => renderMarkdownNow(text, katex, highlighter))
    .catch(() => renderMarkdownNow(text, null, null));
}
