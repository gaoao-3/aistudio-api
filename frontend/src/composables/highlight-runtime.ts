// 代码块首次出现时才加载高亮样式和常用语言定义。
import 'highlight.js/styles/github.min.css';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

for (const [name, language] of Object.entries({
  bash, css, javascript, json, markdown, python, sql, typescript, xml, yaml,
})) {
  hljs.registerLanguage(name, language);
}

export type HighlightRuntime = typeof hljs;
export default hljs;
