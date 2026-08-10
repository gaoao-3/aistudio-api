export const AI_STUDIO_URLS = [
  "https://aistudio.google.com/prompts/new_chat?model=gemma-4-31b-it",
  "https://aistudio.google.com/app/prompts/new_chat",
] as const;

export const GOOGLE_LOGIN_BOOTSTRAP_URL =
  "https://accounts.google.com/ServiceLogin?continue=https://aistudio.google.com";

export const INSTALL_HOOKS_JS = String.raw`(() => {
  const xhrHookAlive = XMLHttpRequest.prototype.open.__api_hooked === true;
  const fetchHookAlive = window.fetch.__api_hooked === true;
  if (window.__bg_hooked && xhrHookAlive && fetchHookAlive) return 'already_hooked';
  if (window.__bg_hooked && (!xhrHookAlive || !fetchHookAlive)) window.__bg_hooked = false;

  const dms = window.default_MakerSuite;
  if (!dms) return 'no_default_MakerSuite';
  let snapKey = null;
  for (const key of Object.keys(dms)) {
    try {
      if (typeof dms[key] !== 'function') continue;
      const source = dms[key].toString();
      if (source.includes('.snapshot({') && source.includes('content') && source.includes('yield')) {
        snapKey = key;
        break;
      }
    } catch {}
  }
  if (!snapKey) return 'no_snapshot_fn';

  if (!dms[snapKey].__api_hooked) {
    const originalSnapshot = dms[snapKey];
    dms[snapKey] = function(...args) {
      window.__bg_service = args[0];
      const result = originalSnapshot.apply(this, args);
      if (result instanceof Promise) {
        return result.then(snapshot => {
          window.__bg_snapshot = snapshot;
          return snapshot;
        });
      }
      window.__bg_snapshot = result;
      return result;
    };
    dms[snapKey].__api_hooked = true;
  }

  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;
  const hookedOpen = function(method, url, ...args) {
    this.__url = url;
    this.__is_gen = String(url).includes('GenerateContent') && !String(url).includes('CountTokens');
    window.__last_hook_url = String(url);
    return originalOpen.call(this, method, url, ...args);
  };
  hookedOpen.__api_hooked = true;
  XMLHttpRequest.prototype.open = hookedOpen;
  XMLHttpRequest.prototype.send = function(body) {
    if (this.__is_gen && window.__pending_body) {
      const captured = window.__pending_body;
      window.__pending_body = null;
      window.__hooked = true;
      window.__last_hook_url = this.__url || '';
      return originalSend.call(this, captured);
    }
    return originalSend.call(this, body);
  };

  const originalFetch = window.fetch;
  const hookedFetch = function(input, init) {
    const url = typeof input === 'string' ? input : (input instanceof Request ? input.url : String(input));
    if (url.includes('GenerateContent') && !url.includes('CountTokens') && window.__pending_body) {
      const captured = window.__pending_body;
      window.__pending_body = null;
      window.__hooked = true;
      window.__last_hook_url = url;
      init = init ? {...init, body: captured} : {body: captured};
    }
    return originalFetch.call(this, input, init);
  };
  hookedFetch.__api_hooked = true;
  window.fetch = hookedFetch;
  window.__bg_hooked = true;
  window.__snap_key = snapKey;
  return 'hooked:' + snapKey;
})()`;

export const DIALOG_CLEANUP_JS = String.raw`(() => {
  document.querySelectorAll('button').forEach(button => {
    const text = (button.textContent || '').trim().toLowerCase();
    if (['dismiss', 'close', 'accept', 'ok', 'agree', 'got it'].includes(text)) button.click();
  });
  document.querySelectorAll('.cdk-overlay-backdrop, .cdk-overlay-container').forEach(node => node.remove());
})()`;
