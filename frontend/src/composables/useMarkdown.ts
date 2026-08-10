// ---------- Markdown 渲染（marked + KaTeX + highlight.js + DOMPurify，npm 打包替代原 CDN） ----------
// 逻辑与原 app.ts renderMarkdown 一致：先用占位符保护数学公式，解析后再替换回来，最后消毒。
import { marked, type Tokens } from 'marked';
import DOMPurify from 'dompurify';
import katex from 'katex';
import hljs from 'highlight.js';

marked.use({
  breaks: true,
  gfm: true,
  renderer: {
    code({ text, lang }: Tokens.Code): string | false {
      if (lang && hljs.getLanguage(lang)) {
        try {
          const highlighted = hljs.highlight(text, { language: lang }).value;
          return `<pre class="codeblock" title="点击复制"><code>${highlighted}</code></pre>`;
        } catch (e) { /* 高亮失败时走默认渲染 */ }
      }
      return false;
    },
  },
});

export function renderMarkdown(text: string): string {
  if (!text) return '';
  let html = text;

  // 1. 预处理数学公式，防止被 Marked 误解析
  const mathBlocks: { id: string; html: string }[] = [];
  // 块级公式 $$...$$
  html = html.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula: string) => {
    const id = `__MATH_BLOCK_${mathBlocks.length}__`;
    try {
      mathBlocks.push({ id, html: katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false }) });
      return id;
    } catch (e) { return match; }
  });
  // 行内公式 $...$
  html = html.replace(/\$([^\$\n]+?)\$/g, (match, formula: string) => {
    const id = `__MATH_INLINE_${mathBlocks.length}__`;
    try {
      mathBlocks.push({ id, html: katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false }) });
      return id;
    } catch (e) { return match; }
  });

  // 2. Marked 解析，代码块标记为可复制
  html = marked.parse(html) as string;
  html = html.replace(/<pre>/g, '<pre class="codeblock" title="点击复制">');

  // 3. 将公式替换回来
  for (const item of mathBlocks) {
    html = html.replace(item.id, item.html);
  }

  // 4. 清洗并返回
  return DOMPurify.sanitize(html, { ADD_TAGS: ['math', 'style'], ADD_ATTR: ['style'] });
}
