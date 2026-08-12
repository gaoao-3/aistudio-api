const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChatView-CWoUtohz.js","assets/Icon.vue_vue_type_script_setup_true_lang-ubaGEFKU.js","assets/Icon-Bav6Vdnw.css","assets/Switch-CdF3GAtD.js","assets/Input-vrCH1BIB.js","assets/InputNumber-BCzoe70Z.js","assets/RadioGroup-D9Ohs9-3.js","assets/ChatView--5BhymVu.css","assets/HistoryView-DUwJ8CyM.js","assets/utils-Kqw0es20.js","assets/AccountsView-D7MEHha4.js","assets/Alert-Cc6ORjhg.js","assets/KeysView-Bhu2DgZw.js","assets/DashboardView-Wpbcllrg.js","assets/SettingsView-fIf3s7Ak.js"])))=>i.map(i=>d[i]);
import{r as k,a as Ke,w as ce,g as Ho,o as we,b as ve,c as J,d as wn,e as Y,f as B,h as K,i as W,u as nt,j as Do,k as _t,F as de,C as No,l as F,p as V,m as Oe,n as Mr,q as b,T as Tt,t as ie,s as Tr,v as Bt,x as he,y as Et,z as ot,A as Lt,B as jt,D as Br,E as Lr,G as xn,H as jr,I as _e,J as Wo,M as Cn,K as Fr,L as Ue,N as dn,O as Vo,S as qn,P as Rr,U as Un,Q as Yn,R as Ot,V as Hr,W as Zn,X as Dr,Y as Nr,Z as Wr,_ as Vr,$ as Kr,a0 as Xr,a1 as qr,a2 as E,a3 as Ur,a4 as Ft,a5 as Sn,a6 as Ie,a7 as _,a8 as qt,a9 as M,aa as A,ab as Yr,ac as rt,ad as pe,ae as te,af as it,ag as $n,ah as Me,ai as Gn,aj as Ko,ak as se,al as Zr,am as Pt,an as Xo,ao as Gr,ap as Jr,aq as ye,ar as qo,as as Uo,at as Qr,au as Te,av as Rt,aw as kn,ax as oe,ay as On,az as at,aA as ei,aB as _n,aC as Jn,aD as Qn,aE as En,aF as Pn,aG as An,aH as At,aI as ti,aJ as ze,aK as Yo,aL as Ht,aM as ni,aN as oi,aO as ri,aP as ii,aQ as ai,aR as Zo,aS as j,aT as Go,aU as Se,aV as un,aW as U,aX as $e,aY as Jo,aZ as si,a_ as be,a$ as Ae,b0 as G,b1 as li,b2 as ci,b3 as st,b4 as ct,b5 as dt,b6 as Be,b7 as di,b8 as ui}from"./Icon.vue_vue_type_script_setup_true_lang-ubaGEFKU.js";let zt=[];const Qo=new WeakMap;function fi(){zt.forEach(e=>e(...Qo.get(e))),zt=[]}function hi(e,...t){Qo.set(e,t),!zt.includes(e)&&zt.push(e)===1&&requestAnimationFrame(fi)}function lt(e=8){return Math.random().toString(16).slice(2,2+e)}function vi(e){const t=k(!!e.value);if(t.value)return Ke(t);const n=ce(e,o=>{o&&(t.value=!0,n())});return Ke(t)}function er(){return Ho()!==null}const zn=typeof window<"u";let Ve,tt;const pi=()=>{var e,t;Ve=zn?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,tt=!1,Ve!==void 0?Ve.then(()=>{tt=!0}):tt=!0};pi();function gi(e){if(tt)return;let t=!1;we(()=>{tt||Ve==null||Ve.then(()=>{t||e()})}),ve(()=>{t=!0})}const et=k(null);function eo(e){if(e.clientX>0||e.clientY>0)et.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:n,top:o,width:r,height:i}=t.getBoundingClientRect();n>0||o>0?et.value={x:n+r/2,y:o+i/2}:et.value={x:0,y:0}}else et.value=null}}let ut=0,to=!0;function In(){if(!zn)return Ke(k(null));ut===0&&J("click",document,eo,!0);const e=()=>{ut+=1};return to&&(to=er())?(wn(e),ve(()=>{ut-=1,ut===0&&Y("click",document,eo,!0)})):e(),Ke(et)}const mi=k(void 0);let ft=0;function no(){mi.value=Date.now()}let oo=!0;function Mn(e){if(!zn)return Ke(k(!1));const t=k(!1);let n=null;function o(){n!==null&&window.clearTimeout(n)}function r(){o(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}ft===0&&J("click",window,no,!0);const i=()=>{ft+=1,J("click",window,r,!0)};return oo&&(oo=er())?(wn(i),ve(()=>{ft-=1,ft===0&&Y("click",window,no,!0),Y("click",window,r,!0),o()})):i(),Ke(t)}function bi(e,t){return B(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const fc=K("n-internal-select-menu"),yi=K("n-internal-select-menu-body"),Tn=K("n-drawer-body"),hc=K("n-drawer"),Bn=K("n-modal-body"),wi=K("n-modal-provider"),tr=K("n-modal"),Ln=K("n-popover-body"),nr="__disabled__";function Xe(e){const t=W(Bn,null),n=W(Tn,null),o=W(Ln,null),r=W(yi,null),i=k();if(typeof document<"u"){i.value=document.fullscreenElement;const s=()=>{i.value=document.fullscreenElement};we(()=>{J("fullscreenchange",document,s)}),ve(()=>{Y("fullscreenchange",document,s)})}return nt(()=>{var s;const{to:c}=e;return c!==void 0?c===!1?nr:c===!0?i.value||"body":c:t!=null&&t.value?(s=t.value.$el)!==null&&s!==void 0?s:t.value:n!=null&&n.value?n.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:c??(i.value||"body")})}Xe.tdkey=nr;Xe.propTo={type:[String,Object,Boolean],default:void 0};const jn=k(!1);function ro(){jn.value=!0}function io(){jn.value=!1}let Ye=0;function xi(){return Do&&(wn(()=>{Ye||(window.addEventListener("compositionstart",ro),window.addEventListener("compositionend",io)),Ye++}),ve(()=>{Ye<=1?(window.removeEventListener("compositionstart",ro),window.removeEventListener("compositionend",io),Ye=0):Ye--})),jn}let Le=0,ao="",so="",lo="",co="";const uo=k("0px");function Ci(e){if(typeof document>"u")return;const t=document.documentElement;let n,o=!1;const r=()=>{t.style.marginRight=ao,t.style.overflow=so,t.style.overflowX=lo,t.style.overflowY=co,uo.value="0px"};we(()=>{n=ce(e,i=>{if(i){if(!Le){const s=window.innerWidth-t.offsetWidth;s>0&&(ao=t.style.marginRight,t.style.marginRight=`${s}px`,uo.value=`${s}px`),so=t.style.overflow,lo=t.style.overflowX,co=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}o=!0,Le++}else Le--,Le||r(),o=!1},{immediate:!0})}),ve(()=>{n==null||n(),o&&(Le--,Le||r(),o=!1)})}function fn(e,t,n="default"){const o=t[n];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);return o()}function hn(e,t=!0,n=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&n.push(_t(String(o)));return}if(Array.isArray(o)){hn(o,t,n);return}if(o.type===de){if(o.children===null)return;Array.isArray(o.children)&&hn(o.children,t,n)}else o.type!==No&&n.push(o)}}),n}function fo(e,t,n="default"){const o=t[n];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);const r=hn(o());if(r.length===1)return r[0];throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`)}let Ce=null;function or(){if(Ce===null&&(Ce=document.getElementById("v-binder-view-measurer"),Ce===null)){Ce=document.createElement("div"),Ce.id="v-binder-view-measurer";const{style:e}=Ce;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Ce)}return Ce.getBoundingClientRect()}function Si(e,t){const n=or();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Ut(e){const t=e.getBoundingClientRect(),n=or();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function $i(e){return e.nodeType===9?null:e.parentNode}function rr(e){if(e===null)return null;const t=$i(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:o,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+r+o))return t}return rr(t)}const ki=F({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;V("VBinder",(t=Ho())===null||t===void 0?void 0:t.proxy);const n=W("VBinder",null),o=k(null),r=g=>{o.value=g,n&&e.syncTargetWithParent&&n.setTargetRef(g)};let i=[];const s=()=>{let g=o.value;for(;g=rr(g),g!==null;)i.push(g);for(const S of i)J("scroll",S,v,!0)},c=()=>{for(const g of i)Y("scroll",g,v,!0);i=[]},a=new Set,u=g=>{a.size===0&&s(),a.has(g)||a.add(g)},l=g=>{a.has(g)&&a.delete(g),a.size===0&&c()},v=()=>{hi(d)},d=()=>{a.forEach(g=>g())},h=new Set,p=g=>{h.size===0&&J("resize",window,w),h.has(g)||h.add(g)},y=g=>{h.has(g)&&h.delete(g),h.size===0&&Y("resize",window,w)},w=()=>{h.forEach(g=>g())};return ve(()=>{Y("resize",window,w),c()}),{targetRef:o,setTargetRef:r,addScrollListener:u,removeScrollListener:l,addResizeListener:p,removeResizeListener:y}},render(){return fn("binder",this.$slots)}}),Oi=F({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=W("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?Oe(fo("follower",this.$slots),[[t]]):fo("follower",this.$slots)}}),je="@@mmoContext",_i={mounted(e,{value:t}){e[je]={handler:void 0},typeof t=="function"&&(e[je].handler=t,J("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[je];typeof t=="function"?n.handler?n.handler!==t&&(Y("mousemoveoutside",e,n.handler),n.handler=t,J("mousemoveoutside",e,t)):(e[je].handler=t,J("mousemoveoutside",e,t)):n.handler&&(Y("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[je];t&&Y("mousemoveoutside",e,t),e[je].handler=void 0}},Fe="@@coContext",vn={mounted(e,{value:t,modifiers:n}){e[Fe]={handler:void 0},typeof t=="function"&&(e[Fe].handler=t,J("clickoutside",e,t,{capture:n.capture}))},updated(e,{value:t,modifiers:n}){const o=e[Fe];typeof t=="function"?o.handler?o.handler!==t&&(Y("clickoutside",e,o.handler,{capture:n.capture}),o.handler=t,J("clickoutside",e,t,{capture:n.capture})):(e[Fe].handler=t,J("clickoutside",e,t,{capture:n.capture})):o.handler&&(Y("clickoutside",e,o.handler,{capture:n.capture}),o.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:n}=e[Fe];n&&Y("clickoutside",e,n,{capture:t.capture}),e[Fe].handler=void 0}};function Ei(e,t){console.error(`[vdirs/${e}]: ${t}`)}class Pi{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,n){const{elementZIndex:o}=this;if(n!==void 0){t.style.zIndex=`${n}`,o.delete(t);return}const{nextZIndex:r}=this;o.has(t)&&o.get(t)+1===this.nextZIndex||(t.style.zIndex=`${r}`,o.set(t,r),this.nextZIndex=r+1,this.squashState())}unregister(t,n){const{elementZIndex:o}=this;o.has(t)?o.delete(t):n===void 0&&Ei("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((n,o)=>n[1]-o[1]),this.nextZIndex=2e3,t.forEach(n=>{const o=n[0],r=this.nextZIndex++;`${r}`!==o.style.zIndex&&(o.style.zIndex=`${r}`)})}}const Yt=new Pi,Re="@@ziContext",Fn={mounted(e,t){const{value:n={}}=t,{zIndex:o,enabled:r}=n;e[Re]={enabled:!!r,initialized:!1},r&&(Yt.ensureZIndex(e,o),e[Re].initialized=!0)},updated(e,t){const{value:n={}}=t,{zIndex:o,enabled:r}=n,i=e[Re].enabled;r&&!i&&(Yt.ensureZIndex(e,o),e[Re].initialized=!0),e[Re].enabled=!!r},unmounted(e,t){if(!e[Re].initialized)return;const{value:n={}}=t,{zIndex:o}=n;Yt.unregister(e,o)}},{c:ht}=Mr(),Ai="vueuc-style";function ho(e){return typeof e=="string"?document.querySelector(e):e()||null}const ir=F({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:vi(ie(e,"show")),mergedTo:B(()=>{const{to:t}=e;return t??"body"})}},render(){return this.showTeleport?this.disabled?fn("lazy-teleport",this.$slots):b(Tt,{disabled:this.disabled,to:this.mergedTo},fn("lazy-teleport",this.$slots)):null}}),vt={top:"bottom",bottom:"top",left:"right",right:"left"},vo={start:"end",center:"center",end:"start"},Zt={top:"height",bottom:"height",left:"width",right:"width"},zi={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Ii={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Mi={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},po={top:!0,bottom:!1,left:!0,right:!1},go={top:"end",bottom:"start",left:"end",right:"start"};function Ti(e,t,n,o,r,i){if(!r||i)return{placement:e,top:0,left:0};const[s,c]=e.split("-");let a=c??"center",u={top:0,left:0};const l=(h,p,y)=>{let w=0,g=0;const S=n[h]-t[p]-t[h];return S>0&&o&&(y?g=po[p]?S:-S:w=po[p]?S:-S),{left:w,top:g}},v=s==="left"||s==="right";if(a!=="center"){const h=Mi[e],p=vt[h],y=Zt[h];if(n[y]>t[y]){if(t[h]+t[y]<n[y]){const w=(n[y]-t[y])/2;t[h]<w||t[p]<w?t[h]<t[p]?(a=vo[c],u=l(y,p,v)):u=l(y,h,v):a="center"}}else n[y]<t[y]&&t[p]<0&&t[h]>t[p]&&(a=vo[c])}else{const h=s==="bottom"||s==="top"?"left":"top",p=vt[h],y=Zt[h],w=(n[y]-t[y])/2;(t[h]<w||t[p]<w)&&(t[h]>t[p]?(a=go[h],u=l(y,h,v)):(a=go[p],u=l(y,p,v)))}let d=s;return t[s]<n[Zt[s]]&&t[s]<t[vt[s]]&&(d=vt[s]),{placement:a!=="center"?`${d}-${a}`:d,left:u.left,top:u.top}}function Bi(e,t){return t?Ii[e]:zi[e]}function Li(e,t,n,o,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateX(-50%)"}}}const ji=ht([ht(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ht(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ht("> *",{pointerEvents:"all"})])]),Fi=F({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=W("VBinder"),n=nt(()=>e.enabled!==void 0?e.enabled:e.show),o=k(null),r=k(null),i=()=>{const{syncTrigger:d}=e;d.includes("scroll")&&t.addScrollListener(a),d.includes("resize")&&t.addResizeListener(a)},s=()=>{t.removeScrollListener(a),t.removeResizeListener(a)};we(()=>{n.value&&(a(),i())});const c=Tr();ji.mount({id:"vueuc/binder",head:!0,anchorMetaName:Ai,ssr:c}),ve(()=>{s()}),gi(()=>{n.value&&a()});const a=()=>{if(!n.value)return;const d=o.value;if(d===null)return;const h=t.targetRef,{x:p,y,overlap:w}=e,g=p!==void 0&&y!==void 0?Si(p,y):Ut(h);d.style.setProperty("--v-target-width",`${Math.round(g.width)}px`),d.style.setProperty("--v-target-height",`${Math.round(g.height)}px`);const{width:S,minWidth:I,placement:m,internalShift:f,flip:x}=e;d.setAttribute("v-placement",m),w?d.setAttribute("v-overlap",""):d.removeAttribute("v-overlap");const{style:C}=d;S==="target"?C.width=`${g.width}px`:S!==void 0?C.width=S:C.width="",I==="target"?C.minWidth=`${g.width}px`:I!==void 0?C.minWidth=I:C.minWidth="";const $=Ut(d),O=Ut(r.value),{left:T,top:L,placement:z}=Ti(m,g,$,f,x,w),N=Bi(z,w),{left:ne,top:P,transform:R}=Li(z,O,g,L,T,w);d.setAttribute("v-placement",z),d.style.setProperty("--v-offset-left",`${Math.round(T)}px`),d.style.setProperty("--v-offset-top",`${Math.round(L)}px`),d.style.transform=`translateX(${ne}) translateY(${P}) ${R}`,d.style.setProperty("--v-transform-origin",N),d.style.transformOrigin=N};ce(n,d=>{d?(i(),u()):s()});const u=()=>{he().then(a).catch(d=>console.error(d))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(d=>{ce(ie(e,d),a)}),["teleportDisabled"].forEach(d=>{ce(ie(e,d),u)}),ce(ie(e,"syncTrigger"),d=>{d.includes("resize")?t.addResizeListener(a):t.removeResizeListener(a),d.includes("scroll")?t.addScrollListener(a):t.removeScrollListener(a)});const l=Bt(),v=nt(()=>{const{to:d}=e;if(d!==void 0)return d;l.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:r,followerRef:o,mergedTo:v,syncPosition:a}},render(){return b(ir,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=b("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[b("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?Oe(n,[[Fn,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});function ar(e){return e instanceof HTMLElement}function sr(e){for(let t=0;t<e.childNodes.length;t++){const n=e.childNodes[t];if(ar(n)&&(cr(n)||sr(n)))return!0}return!1}function lr(e){for(let t=e.childNodes.length-1;t>=0;t--){const n=e.childNodes[t];if(ar(n)&&(cr(n)||lr(n)))return!0}return!1}function cr(e){if(!Ri(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function Ri(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"SELECT":case"TEXTAREA":return!0;default:return!1}}let Ze=[];const dr=F({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:[String,Function],finalFocusTo:[String,Function],returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=lt(),n=k(null),o=k(null);let r=!1,i=!1;const s=typeof document>"u"?null:document.activeElement;function c(){return Ze[Ze.length-1]===t}function a(w){var g;w.code==="Escape"&&c()&&((g=e.onEsc)===null||g===void 0||g.call(e,w))}we(()=>{ce(()=>e.active,w=>{w?(v(),J("keydown",document,a)):(Y("keydown",document,a),r&&d())},{immediate:!0})}),ve(()=>{Y("keydown",document,a),r&&d()});function u(w){if(!i&&c()){const g=l();if(g===null||g.contains(Et(w)))return;h("first")}}function l(){const w=n.value;if(w===null)return null;let g=w;for(;g=g.nextSibling,!(g===null||g instanceof Element&&g.tagName==="DIV"););return g}function v(){var w;if(!e.disabled){if(Ze.push(t),e.autoFocus){const{initialFocusTo:g}=e;g===void 0?h("first"):(w=ho(g))===null||w===void 0||w.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",u,!0)}}function d(){var w;if(e.disabled||(document.removeEventListener("focus",u,!0),Ze=Ze.filter(S=>S!==t),c()))return;const{finalFocusTo:g}=e;g!==void 0?(w=ho(g))===null||w===void 0||w.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&s instanceof HTMLElement&&(i=!0,s.focus({preventScroll:!0}),i=!1)}function h(w){if(c()&&e.active){const g=n.value,S=o.value;if(g!==null&&S!==null){const I=l();if(I==null||I===S){i=!0,g.focus({preventScroll:!0}),i=!1;return}i=!0;const m=w==="first"?sr(I):lr(I);i=!1,m||(i=!0,g.focus({preventScroll:!0}),i=!1)}}}function p(w){if(i)return;const g=l();g!==null&&(w.relatedTarget!==null&&g.contains(w.relatedTarget)?h("last"):h("first"))}function y(w){i||(w.relatedTarget!==null&&w.relatedTarget===n.value?h("last"):h("first"))}return{focusableStartRef:n,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:p,handleEndFocus:y}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:n}=this;return b(de,null,[b("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:n,onFocus:this.handleStartFocus}),e(),b("div",{"aria-hidden":"true",style:n,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}}),Hi=/^(\d|\.)+$/,mo=/(\d|\.)+/;function Gt(e,{c:t=1,offset:n=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+n)*t;return r===0?"0":`${r}px`}else if(typeof e=="string")if(Hi.test(e)){const r=(Number(e)+n)*t;return o?r===0?"0":`${r}px`:`${r}`}else{const r=mo.exec(e);return r?e.replace(mo,String((Number(r[0])+n)*t)):e}return e}let Jt;function Di(){return Jt===void 0&&(Jt=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Jt}const ur=new WeakSet;function vc(e){ur.add(e)}function Ni(e){return!ur.has(e)}function It(e,t=!0,n=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&n.push(_t(String(o)));return}if(Array.isArray(o)){It(o,t,n);return}if(o.type===de){if(o.children===null)return;Array.isArray(o.children)&&It(o.children,t,n)}else{if(o.type===No&&t)return;n.push(o)}}}),n}function Wi(e,t="default",n=void 0){const o=e[t];if(!o)return ot("getFirstSlotVNode",`slot[${t}] is empty`),null;const r=It(o(n));return r.length===1?r[0]:(ot("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}function Vi(e,t,n){if(!t)return null;const o=It(t(n));return o.length===1?o[0]:(ot("getFirstSlotVNode",`slot[${e}] should have exactly one child`),null)}function qe(e,t=[],n){const o={};return t.forEach(r=>{o[r]=e[r]}),Object.assign(o,n)}function Dt(e){return Object.keys(e)}function Nt(e,t=[],n){const o={};return Object.getOwnPropertyNames(e).forEach(i=>{t.includes(i)||(o[i]=e[i])}),Object.assign(o,n)}function re(e,...t){return typeof e=="function"?e(...t):typeof e=="string"?_t(e):typeof e=="number"?_t(String(e)):null}var pn=Lt(jt,"WeakMap"),Ki=Br(Object.keys,Object),Xi=Object.prototype,qi=Xi.hasOwnProperty;function Ui(e){if(!Lr(e))return Ki(e);var t=[];for(var n in Object(e))qi.call(e,n)&&n!="constructor"&&t.push(n);return t}function Rn(e){return xn(e)?jr(e):Ui(e)}var Yi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zi=/^\w*$/;function Hn(e,t){if(_e(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Wo(e)?!0:Zi.test(e)||!Yi.test(e)||t!=null&&e in Object(t)}var Gi="Expected a function";function Dn(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Gi);var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],i=n.cache;if(i.has(r))return i.get(r);var s=e.apply(this,o);return n.cache=i.set(r,s)||i,s};return n.cache=new(Dn.Cache||Cn),n}Dn.Cache=Cn;var Ji=500;function Qi(e){var t=Dn(e,function(o){return n.size===Ji&&n.clear(),o}),n=t.cache;return t}var ea=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ta=/\\(\\)?/g,na=Qi(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ea,function(n,o,r,i){t.push(r?i.replace(ta,"$1"):o||n)}),t});function fr(e,t){return _e(e)?e:Hn(e,t)?[e]:na(Fr(e))}function Wt(e){if(typeof e=="string"||Wo(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function hr(e,t){t=fr(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[Wt(t[n++])];return n&&n==o?e:void 0}function oa(e,t,n){var o=e==null?void 0:hr(e,t);return o===void 0?n:o}function ra(e,t){for(var n=-1,o=t.length,r=e.length;++n<o;)e[r+n]=t[n];return e}function ia(e,t){for(var n=-1,o=e==null?0:e.length,r=0,i=[];++n<o;){var s=e[n];t(s,n,e)&&(i[r++]=s)}return i}function aa(){return[]}var sa=Object.prototype,la=sa.propertyIsEnumerable,bo=Object.getOwnPropertySymbols,ca=bo?function(e){return e==null?[]:(e=Object(e),ia(bo(e),function(t){return la.call(e,t)}))}:aa;function da(e,t,n){var o=t(e);return _e(e)?o:ra(o,n(e))}function yo(e){return da(e,Rn,ca)}var gn=Lt(jt,"DataView"),mn=Lt(jt,"Promise"),bn=Lt(jt,"Set"),wo="[object Map]",ua="[object Object]",xo="[object Promise]",Co="[object Set]",So="[object WeakMap]",$o="[object DataView]",fa=Ue(gn),ha=Ue(dn),va=Ue(mn),pa=Ue(bn),ga=Ue(pn),ke=Vo;(gn&&ke(new gn(new ArrayBuffer(1)))!=$o||dn&&ke(new dn)!=wo||mn&&ke(mn.resolve())!=xo||bn&&ke(new bn)!=Co||pn&&ke(new pn)!=So)&&(ke=function(e){var t=Vo(e),n=t==ua?e.constructor:void 0,o=n?Ue(n):"";if(o)switch(o){case fa:return $o;case ha:return wo;case va:return xo;case pa:return Co;case ga:return So}return t});var ma="__lodash_hash_undefined__";function ba(e){return this.__data__.set(e,ma),this}function ya(e){return this.__data__.has(e)}function Mt(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Cn;++t<n;)this.add(e[t])}Mt.prototype.add=Mt.prototype.push=ba;Mt.prototype.has=ya;function wa(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}function xa(e,t){return e.has(t)}var Ca=1,Sa=2;function vr(e,t,n,o,r,i){var s=n&Ca,c=e.length,a=t.length;if(c!=a&&!(s&&a>c))return!1;var u=i.get(e),l=i.get(t);if(u&&l)return u==t&&l==e;var v=-1,d=!0,h=n&Sa?new Mt:void 0;for(i.set(e,t),i.set(t,e);++v<c;){var p=e[v],y=t[v];if(o)var w=s?o(y,p,v,t,e,i):o(p,y,v,e,t,i);if(w!==void 0){if(w)continue;d=!1;break}if(h){if(!wa(t,function(g,S){if(!xa(h,S)&&(p===g||r(p,g,n,o,i)))return h.push(S)})){d=!1;break}}else if(!(p===y||r(p,y,n,o,i))){d=!1;break}}return i.delete(e),i.delete(t),d}function $a(e){var t=-1,n=Array(e.size);return e.forEach(function(o,r){n[++t]=[r,o]}),n}function ka(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}var Oa=1,_a=2,Ea="[object Boolean]",Pa="[object Date]",Aa="[object Error]",za="[object Map]",Ia="[object Number]",Ma="[object RegExp]",Ta="[object Set]",Ba="[object String]",La="[object Symbol]",ja="[object ArrayBuffer]",Fa="[object DataView]",ko=qn?qn.prototype:void 0,Qt=ko?ko.valueOf:void 0;function Ra(e,t,n,o,r,i,s){switch(n){case Fa:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ja:return!(e.byteLength!=t.byteLength||!i(new Un(e),new Un(t)));case Ea:case Pa:case Ia:return Rr(+e,+t);case Aa:return e.name==t.name&&e.message==t.message;case Ma:case Ba:return e==t+"";case za:var c=$a;case Ta:var a=o&Oa;if(c||(c=ka),e.size!=t.size&&!a)return!1;var u=s.get(e);if(u)return u==t;o|=_a,s.set(e,t);var l=vr(c(e),c(t),o,r,i,s);return s.delete(e),l;case La:if(Qt)return Qt.call(e)==Qt.call(t)}return!1}var Ha=1,Da=Object.prototype,Na=Da.hasOwnProperty;function Wa(e,t,n,o,r,i){var s=n&Ha,c=yo(e),a=c.length,u=yo(t),l=u.length;if(a!=l&&!s)return!1;for(var v=a;v--;){var d=c[v];if(!(s?d in t:Na.call(t,d)))return!1}var h=i.get(e),p=i.get(t);if(h&&p)return h==t&&p==e;var y=!0;i.set(e,t),i.set(t,e);for(var w=s;++v<a;){d=c[v];var g=e[d],S=t[d];if(o)var I=s?o(S,g,d,t,e,i):o(g,S,d,e,t,i);if(!(I===void 0?g===S||r(g,S,n,o,i):I)){y=!1;break}w||(w=d=="constructor")}if(y&&!w){var m=e.constructor,f=t.constructor;m!=f&&"constructor"in e&&"constructor"in t&&!(typeof m=="function"&&m instanceof m&&typeof f=="function"&&f instanceof f)&&(y=!1)}return i.delete(e),i.delete(t),y}var Va=1,Oo="[object Arguments]",_o="[object Array]",pt="[object Object]",Ka=Object.prototype,Eo=Ka.hasOwnProperty;function Xa(e,t,n,o,r,i){var s=_e(e),c=_e(t),a=s?_o:ke(e),u=c?_o:ke(t);a=a==Oo?pt:a,u=u==Oo?pt:u;var l=a==pt,v=u==pt,d=a==u;if(d&&Yn(e)){if(!Yn(t))return!1;s=!0,l=!1}if(d&&!l)return i||(i=new Ot),s||Hr(e)?vr(e,t,n,o,r,i):Ra(e,t,a,n,o,r,i);if(!(n&Va)){var h=l&&Eo.call(e,"__wrapped__"),p=v&&Eo.call(t,"__wrapped__");if(h||p){var y=h?e.value():e,w=p?t.value():t;return i||(i=new Ot),r(y,w,n,o,i)}}return d?(i||(i=new Ot),Wa(e,t,n,o,r,i)):!1}function Nn(e,t,n,o,r){return e===t?!0:e==null||t==null||!Zn(e)&&!Zn(t)?e!==e&&t!==t:Xa(e,t,n,o,Nn,r)}var qa=1,Ua=2;function Ya(e,t,n,o){var r=n.length,i=r;if(e==null)return!i;for(e=Object(e);r--;){var s=n[r];if(s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<i;){s=n[r];var c=s[0],a=e[c],u=s[1];if(s[2]){if(a===void 0&&!(c in e))return!1}else{var l=new Ot,v;if(!(v===void 0?Nn(u,a,qa|Ua,o,l):v))return!1}}return!0}function pr(e){return e===e&&!Dr(e)}function Za(e){for(var t=Rn(e),n=t.length;n--;){var o=t[n],r=e[o];t[n]=[o,r,pr(r)]}return t}function gr(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Ga(e){var t=Za(e);return t.length==1&&t[0][2]?gr(t[0][0],t[0][1]):function(n){return n===e||Ya(n,e,t)}}function Ja(e,t){return e!=null&&t in Object(e)}function Qa(e,t,n){t=fr(t,e);for(var o=-1,r=t.length,i=!1;++o<r;){var s=Wt(t[o]);if(!(i=e!=null&&n(e,s)))break;e=e[s]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&Nr(r)&&Wr(s,r)&&(_e(e)||Vr(e)))}function es(e,t){return e!=null&&Qa(e,t,Ja)}var ts=1,ns=2;function os(e,t){return Hn(e)&&pr(t)?gr(Wt(e),t):function(n){var o=oa(n,e);return o===void 0&&o===t?es(n,e):Nn(t,o,ts|ns)}}function rs(e){return function(t){return t==null?void 0:t[e]}}function is(e){return function(t){return hr(t,e)}}function as(e){return Hn(e)?rs(Wt(e)):is(e)}function ss(e){return typeof e=="function"?e:e==null?Kr:typeof e=="object"?_e(e)?os(e[0],e[1]):Ga(e):as(e)}function ls(e,t){return e&&Xr(e,t,Rn)}function cs(e,t){return function(n,o){if(n==null)return n;if(!xn(n))return e(n,o);for(var r=n.length,i=-1,s=Object(n);++i<r&&o(s[i],i,s)!==!1;);return n}}var ds=cs(ls);function us(e,t){var n=-1,o=xn(e)?Array(e.length):[];return ds(e,function(r,i,s){o[++n]=t(r,i,s)}),o}function fs(e,t){var n=_e(e)?qr:us;return n(e,ss(t))}const{cubicBezierEaseIn:Po,cubicBezierEaseOut:Ao}=Ur;function hs({transformOrigin:e="inherit",duration:t=".2s",enterScale:n=".9",originalTransform:o="",originalTransition:r=""}={}){return[E("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${Po}, transform ${t} ${Po} ${r&&`,${r}`}`}),E("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${Ao}, transform ${t} ${Ao} ${r&&`,${r}`}`}),E("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${n})`}),E("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const vs={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function ps(e){const{boxShadow2:t,popoverColor:n,textColor2:o,borderRadius:r,fontSize:i,dividerColor:s}=e;return Object.assign(Object.assign({},vs),{fontSize:i,borderRadius:r,color:n,dividerColor:s,textColor:o,boxShadow:t})}const gs=Ft({name:"Popover",common:Ie,peers:{Scrollbar:Sn},self:ps}),en={top:"bottom",bottom:"top",left:"right",right:"left"},X="var(--n-arrow-height) * 1.414",ms=E([_("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[E(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),qt("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[qt("scrollable",[qt("show-header-or-footer","padding: var(--n-padding);")])]),M("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),M("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),A("scrollable, show-header-or-footer",[M("content",`
 padding: var(--n-padding);
 `)])]),_("popover-shared",`
 transform-origin: inherit;
 `,[_("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[_("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${X});
 height: calc(${X});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),E("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),E("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),E("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),E("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ae("top-start",`
 top: calc(${X} / -2);
 left: calc(${me("top-start")} - var(--v-offset-left));
 `),ae("top",`
 top: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `),ae("top-end",`
 top: calc(${X} / -2);
 right: calc(${me("top-end")} + var(--v-offset-left));
 `),ae("bottom-start",`
 bottom: calc(${X} / -2);
 left: calc(${me("bottom-start")} - var(--v-offset-left));
 `),ae("bottom",`
 bottom: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `),ae("bottom-end",`
 bottom: calc(${X} / -2);
 right: calc(${me("bottom-end")} + var(--v-offset-left));
 `),ae("left-start",`
 left: calc(${X} / -2);
 top: calc(${me("left-start")} - var(--v-offset-top));
 `),ae("left",`
 left: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `),ae("left-end",`
 left: calc(${X} / -2);
 bottom: calc(${me("left-end")} + var(--v-offset-top));
 `),ae("right-start",`
 right: calc(${X} / -2);
 top: calc(${me("right-start")} - var(--v-offset-top));
 `),ae("right",`
 right: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `),ae("right-end",`
 right: calc(${X} / -2);
 bottom: calc(${me("right-end")} + var(--v-offset-top));
 `),...fs({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),o=n?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",c=`calc((${`var(--v-target-${o}, 0px)`} - ${X}) / 2)`,a=me(r);return E(`[v-placement="${r}"] >`,[_("popover-shared",[A("center-arrow",[_("popover-arrow",`${t}: calc(max(${c}, ${a}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function me(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ae(e,t){const n=e.split("-")[0],o=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return E(`[v-placement="${e}"] >`,[_("popover-shared",`
 margin-${en[n]}: var(--n-space);
 `,[A("show-arrow",`
 margin-${en[n]}: var(--n-space-arrow);
 `),A("overlap",`
 margin: 0;
 `),Yr("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${en[n]}: auto;
 ${o}
 `,[_("popover-arrow",t)])])])}const mr=Object.assign(Object.assign({},te.props),{to:Xe.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function bs({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:o,clsPrefix:r}){return b("div",{key:"__popover-arrow__",style:o,class:[`${r}-popover-arrow-wrapper`,n]},b("div",{class:[`${r}-popover-arrow`,e],style:t}))}const ys=F({name:"PopoverBody",inheritAttrs:!1,props:mr,setup(e,{slots:t,attrs:n}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:s}=pe(e),c=te("Popover","-popover",ms,gs,e,r),a=it("Popover",s,r),u=k(null),l=W("NPopover"),v=k(null),d=k(e.show),h=k(!1);$n(()=>{const{show:O}=e;O&&!Di()&&!e.internalDeactivateImmediately&&(h.value=!0)});const p=B(()=>{const{trigger:O,onClickoutside:T}=e,L=[],{positionManuallyRef:{value:z}}=l;return z||(O==="click"&&!T&&L.push([vn,x,void 0,{capture:!0}]),O==="hover"&&L.push([_i,f])),T&&L.push([vn,x,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&h.value)&&L.push([Pt,e.show]),L}),y=B(()=>{const{common:{cubicBezierEaseInOut:O,cubicBezierEaseIn:T,cubicBezierEaseOut:L},self:{space:z,spaceArrow:N,padding:ne,fontSize:P,textColor:R,dividerColor:H,color:Z,boxShadow:Q,borderRadius:le,arrowHeight:ge,arrowOffset:ee,arrowOffsetVertical:Ee}}=c.value;return{"--n-box-shadow":Q,"--n-bezier":O,"--n-bezier-ease-in":T,"--n-bezier-ease-out":L,"--n-font-size":P,"--n-text-color":R,"--n-color":Z,"--n-divider-color":H,"--n-border-radius":le,"--n-arrow-height":ge,"--n-arrow-offset":ee,"--n-arrow-offset-vertical":Ee,"--n-padding":ne,"--n-space":z,"--n-space-arrow":N}}),w=B(()=>{const O=e.width==="trigger"?void 0:Gt(e.width),T=[];O&&T.push({width:O});const{maxWidth:L,minWidth:z}=e;return L&&T.push({maxWidth:Gt(L)}),z&&T.push({maxWidth:Gt(z)}),i||T.push(y.value),T}),g=i?Me("popover",void 0,y,e):void 0;l.setBodyInstance({syncPosition:S}),ve(()=>{l.setBodyInstance(null)}),ce(ie(e,"show"),O=>{e.animated||(O?d.value=!0:d.value=!1)});function S(){var O;(O=u.value)===null||O===void 0||O.syncPosition()}function I(O){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(O)}function m(O){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(O)}function f(O){e.trigger==="hover"&&!C().contains(Et(O))&&l.handleMouseMoveOutside(O)}function x(O){(e.trigger==="click"&&!C().contains(Et(O))||e.onClickoutside)&&l.handleClickOutside(O)}function C(){return l.getTriggerElement()}V(Ln,v),V(Tn,null),V(Bn,null);function $(){if(g==null||g.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&h.value))return null;let T;const L=l.internalRenderBodyRef.value,{value:z}=r;if(L)T=L([`${z}-popover-shared`,(a==null?void 0:a.value)&&`${z}-popover--rtl`,g==null?void 0:g.themeClass.value,e.overlap&&`${z}-popover-shared--overlap`,e.showArrow&&`${z}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${z}-popover-shared--center-arrow`],v,w.value,I,m);else{const{value:N}=l.extraClassRef,{internalTrapFocus:ne}=e,P=!Gn(t.header)||!Gn(t.footer),R=()=>{var H,Z;const Q=P?b(de,null,se(t.header,ee=>ee?b("div",{class:[`${z}-popover__header`,e.headerClass],style:e.headerStyle},ee):null),se(t.default,ee=>ee?b("div",{class:[`${z}-popover__content`,e.contentClass],style:e.contentStyle},t):null),se(t.footer,ee=>ee?b("div",{class:[`${z}-popover__footer`,e.footerClass],style:e.footerStyle},ee):null)):e.scrollable?(H=t.default)===null||H===void 0?void 0:H.call(t):b("div",{class:[`${z}-popover__content`,e.contentClass],style:e.contentStyle},t),le=e.scrollable?b(Zr,{themeOverrides:c.value.peerOverrides.Scrollbar,theme:c.value.peers.Scrollbar,contentClass:P?void 0:`${z}-popover__content ${(Z=e.contentClass)!==null&&Z!==void 0?Z:""}`,contentStyle:P?void 0:e.contentStyle},{default:()=>Q}):Q,ge=e.showArrow?bs({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:z}):null;return[le,ge]};T=b("div",Ko({class:[`${z}-popover`,`${z}-popover-shared`,(a==null?void 0:a.value)&&`${z}-popover--rtl`,g==null?void 0:g.themeClass.value,N.map(H=>`${z}-${H}`),{[`${z}-popover--scrollable`]:e.scrollable,[`${z}-popover--show-header-or-footer`]:P,[`${z}-popover--raw`]:e.raw,[`${z}-popover-shared--overlap`]:e.overlap,[`${z}-popover-shared--show-arrow`]:e.showArrow,[`${z}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:v,style:w.value,onKeydown:l.handleKeydown,onMouseenter:I,onMouseleave:m},n),ne?b(dr,{active:e.show,autoFocus:!0},{default:R}):R())}return Oe(T,p.value)}return{displayed:h,namespace:o,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:u,adjustedTo:Xe(e),followerEnabled:d,renderContentNode:$}},render(){return b(Fi,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Xe.tdkey},{default:()=>this.animated?b(rt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),ws=Object.keys(mr),xs={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Cs(e,t,n){xs[t].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],i=n[o];r?e.props[o]=(...s)=>{r(...s),i(...s)}:e.props[o]=i})}const Ss={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Xe.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},$s=Object.assign(Object.assign(Object.assign({},te.props),Ss),{internalOnAfterLeave:Function,internalRenderBody:Function}),ks=F({name:"Popover",inheritAttrs:!1,props:$s,slots:Object,__popover__:!0,setup(e){const t=Bt(),n=k(null),o=B(()=>e.show),r=k(e.defaultShow),i=Jr(o,r),s=nt(()=>e.disabled?!1:i.value),c=()=>{if(e.disabled)return!0;const{getDisabled:P}=e;return!!(P!=null&&P())},a=()=>c()?!1:i.value,u=bi(e,["arrow","showArrow"]),l=B(()=>e.overlap?!1:u.value);let v=null;const d=k(null),h=k(null),p=nt(()=>e.x!==void 0&&e.y!==void 0);function y(P){const{"onUpdate:show":R,onUpdateShow:H,onShow:Z,onHide:Q}=e;r.value=P,R&&ye(R,P),H&&ye(H,P),P&&Z&&ye(Z,!0),P&&Q&&ye(Q,!1)}function w(){v&&v.syncPosition()}function g(){const{value:P}=d;P&&(window.clearTimeout(P),d.value=null)}function S(){const{value:P}=h;P&&(window.clearTimeout(P),h.value=null)}function I(){const P=c();if(e.trigger==="focus"&&!P){if(a())return;y(!0)}}function m(){const P=c();if(e.trigger==="focus"&&!P){if(!a())return;y(!1)}}function f(){const P=c();if(e.trigger==="hover"&&!P){if(S(),d.value!==null||a())return;const R=()=>{y(!0),d.value=null},{delay:H}=e;H===0?R():d.value=window.setTimeout(R,H)}}function x(){const P=c();if(e.trigger==="hover"&&!P){if(g(),h.value!==null||!a())return;const R=()=>{y(!1),h.value=null},{duration:H}=e;H===0?R():h.value=window.setTimeout(R,H)}}function C(){x()}function $(P){var R;a()&&(e.trigger==="click"&&(g(),S(),y(!1)),(R=e.onClickoutside)===null||R===void 0||R.call(e,P))}function O(){if(e.trigger==="click"&&!c()){g(),S();const P=!a();y(P)}}function T(P){e.internalTrapFocus&&P.key==="Escape"&&(g(),S(),y(!1))}function L(P){r.value=P}function z(){var P;return(P=n.value)===null||P===void 0?void 0:P.targetRef}function N(P){v=P}return V("NPopover",{getTriggerElement:z,handleKeydown:T,handleMouseEnter:f,handleMouseLeave:x,handleClickOutside:$,handleMouseMoveOutside:C,setBodyInstance:N,positionManuallyRef:p,isMountedRef:t,zIndexRef:ie(e,"zIndex"),extraClassRef:ie(e,"internalExtraClass"),internalRenderBodyRef:ie(e,"internalRenderBody")}),$n(()=>{i.value&&c()&&y(!1)}),{binderInstRef:n,positionManually:p,mergedShowConsideringDisabledProp:s,uncontrolledShow:r,mergedShowArrow:l,getMergedShow:a,setShow:L,handleClick:O,handleMouseEnter:f,handleMouseLeave:x,handleFocus:I,handleBlur:m,syncPosition:w}},render(){var e;const{positionManually:t,$slots:n}=this;let o,r=!1;if(!t&&(o=Wi(n,"trigger"),o)){o=Xo(o),o=o.type===Gr?b("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:s}=this,c=[i,...s],a={onBlur:u=>{c.forEach(l=>{l.onBlur(u)})},onFocus:u=>{c.forEach(l=>{l.onFocus(u)})},onClick:u=>{c.forEach(l=>{l.onClick(u)})},onMouseenter:u=>{c.forEach(l=>{l.onMouseenter(u)})},onMouseleave:u=>{c.forEach(l=>{l.onMouseleave(u)})}};Cs(o,s?"nested":t?"manual":this.trigger,a)}}return b(ki,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Oe(b("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[Fn,{enabled:i,zIndex:this.zIndex}]]):null,t?null:b(Oi,null,{default:()=>o}),b(ys,qe(this.$props,ws,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var s,c;return(c=(s=this.$slots).default)===null||c===void 0?void 0:c.call(s)},header:()=>{var s,c;return(c=(s=this.$slots).header)===null||c===void 0?void 0:c.call(s)},footer:()=>{var s,c;return(c=(s=this.$slots).footer)===null||c===void 0?void 0:c.call(s)}})]}})}}),Os={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function _s(e){const{primaryColor:t,borderRadius:n,lineHeight:o,fontSize:r,cardColor:i,textColor2:s,textColor1:c,dividerColor:a,fontWeightStrong:u,closeIconColor:l,closeIconColorHover:v,closeIconColorPressed:d,closeColorHover:h,closeColorPressed:p,modalColor:y,boxShadow1:w,popoverColor:g,actionColor:S}=e;return Object.assign(Object.assign({},Os),{lineHeight:o,color:i,colorModal:y,colorPopover:g,colorTarget:t,colorEmbedded:S,colorEmbeddedModal:S,colorEmbeddedPopover:S,textColor:s,titleTextColor:c,borderColor:a,actionColor:S,titleFontWeight:u,closeColorHover:h,closeColorPressed:p,closeBorderRadius:n,closeIconColor:l,closeIconColorHover:v,closeIconColorPressed:d,fontSizeSmall:r,fontSizeMedium:r,fontSizeLarge:r,fontSizeHuge:r,boxShadow:w,borderRadius:n})}const br={name:"Card",common:Ie,self:_s},zo=_("card-content",`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),Es=E([_("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[qo({background:"var(--n-color-modal)"}),A("hoverable",[E("&:hover","box-shadow: var(--n-box-shadow);")]),A("content-segmented",[E(">",[_("card-content",`
 padding-top: var(--n-padding-bottom);
 `),M("content-scrollbar",[E(">",[_("scrollbar-container",[E(">",[_("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),A("content-soft-segmented",[E(">",[_("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),M("content-scrollbar",[E(">",[_("scrollbar-container",[E(">",[_("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),A("footer-segmented",[E(">",[M("footer",`
 padding-top: var(--n-padding-bottom);
 `)])]),A("footer-soft-segmented",[E(">",[M("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),E(">",[_("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[M("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),M("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),M("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),M("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),zo,_("card-content",[E("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),M("content-scrollbar",`
 display: flex;
 flex-direction: column;
 `,[E(">",[_("scrollbar-container",[E(">",[zo])])]),E("&:first-child >",[_("scrollbar-container",[E(">",[_("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])]),M("footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[E("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),M("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),_("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[E("img",`
 display: block;
 width: 100%;
 `)]),A("bordered",`
 border: 1px solid var(--n-border-color);
 `,[E("&:target","border-color: var(--n-color-target);")]),A("action-segmented",[E(">",[M("action",[E("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),A("content-segmented, content-soft-segmented",[E(">",[_("card-content",`
 transition: border-color 0.3s var(--n-bezier);
 `,[E("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)]),M("content-scrollbar",`
 transition: border-color 0.3s var(--n-bezier);
 `,[E("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),A("footer-segmented, footer-soft-segmented",[E(">",[M("footer",`
 transition: border-color 0.3s var(--n-bezier);
 `,[E("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),A("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Uo(_("card",`
 background: var(--n-color-modal);
 `,[A("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Qr(_("card",`
 background: var(--n-color-popover);
 `,[A("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Wn={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},Ps=Dt(Wn),As=Object.assign(Object.assign({},te.props),Wn),zs=F({name:"Card",props:As,slots:Object,setup(e){const t=()=>{const{onClose:v}=e;v&&ye(v)},{inlineThemeDisabled:n,mergedClsPrefixRef:o,mergedRtlRef:r,mergedComponentPropsRef:i}=pe(e),s=te("Card","-card",Es,br,e,o),c=it("Card",r,o),a=B(()=>{var v,d;return e.size||((d=(v=i==null?void 0:i.value)===null||v===void 0?void 0:v.Card)===null||d===void 0?void 0:d.size)||"medium"}),u=B(()=>{const v=a.value,{self:{color:d,colorModal:h,colorTarget:p,textColor:y,titleTextColor:w,titleFontWeight:g,borderColor:S,actionColor:I,borderRadius:m,lineHeight:f,closeIconColor:x,closeIconColorHover:C,closeIconColorPressed:$,closeColorHover:O,closeColorPressed:T,closeBorderRadius:L,closeIconSize:z,closeSize:N,boxShadow:ne,colorPopover:P,colorEmbedded:R,colorEmbeddedModal:H,colorEmbeddedPopover:Z,[oe("padding",v)]:Q,[oe("fontSize",v)]:le,[oe("titleFontSize",v)]:ge},common:{cubicBezierEaseInOut:ee}}=s.value,{top:Ee,left:xe,bottom:Xt}=On(Q);return{"--n-bezier":ee,"--n-border-radius":m,"--n-color":d,"--n-color-modal":h,"--n-color-popover":P,"--n-color-embedded":R,"--n-color-embedded-modal":H,"--n-color-embedded-popover":Z,"--n-color-target":p,"--n-text-color":y,"--n-line-height":f,"--n-action-color":I,"--n-title-text-color":w,"--n-title-font-weight":g,"--n-close-icon-color":x,"--n-close-icon-color-hover":C,"--n-close-icon-color-pressed":$,"--n-close-color-hover":O,"--n-close-color-pressed":T,"--n-border-color":S,"--n-box-shadow":ne,"--n-padding-top":Ee,"--n-padding-bottom":Xt,"--n-padding-left":xe,"--n-font-size":le,"--n-title-font-size":ge,"--n-close-size":N,"--n-close-icon-size":z,"--n-close-border-radius":L}}),l=n?Me("card",B(()=>a.value[0]),u,e):void 0;return{rtlEnabled:c,mergedClsPrefix:o,mergedTheme:s,handleCloseClick:t,cssVars:n?void 0:u,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:t,hoverable:n,mergedClsPrefix:o,rtlEnabled:r,onRender:i,embedded:s,tag:c,$slots:a}=this;return i==null||i(),b(c,{class:[`${o}-card`,this.themeClass,s&&`${o}-card--embedded`,{[`${o}-card--rtl`]:r,[`${o}-card--content-scrollable`]:this.contentScrollable,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:t,[`${o}-card--hoverable`]:n}],style:this.cssVars,role:this.role},se(a.cover,u=>{const l=this.cover?Te([this.cover()]):u;return l&&b("div",{class:`${o}-card-cover`,role:"none"},l)}),se(a.header,u=>{const{title:l}=this,v=l?Te(typeof l=="function"?[l()]:[l]):u;return v||this.closable?b("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},b("div",{class:`${o}-card-header__main`,role:"heading"},v),se(a["header-extra"],d=>{const h=this.headerExtra?Te([this.headerExtra()]):d;return h&&b("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},h)}),this.closable&&b(Rt,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),se(a.default,u=>{const{content:l}=this,v=l?Te(typeof l=="function"?[l()]:[l]):u;return v?this.contentScrollable?b(kn,{class:`${o}-card__content-scrollbar`,contentClass:[`${o}-card-content`,this.contentClass],contentStyle:this.contentStyle},v):b("div",{class:[`${o}-card-content`,this.contentClass],style:this.contentStyle,role:"none"},v):null}),se(a.footer,u=>{const l=this.footer?Te([this.footer()]):u;return l&&b("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},l)}),se(a.action,u=>{const l=this.action?Te([this.action()]):u;return l&&b("div",{class:`${o}-card__action`,role:"none"},l)}))}}),yr=K("n-dialog-provider"),wr=K("n-dialog-api"),Is=K("n-dialog-reactive-list");function Ms(){const e=W(wr,null);return e===null&&at("use-dialog","No outer <n-dialog-provider /> founded."),e}const Ts={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"};function Bs(e){const{textColor1:t,textColor2:n,modalColor:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:c,closeColorPressed:a,infoColor:u,successColor:l,warningColor:v,errorColor:d,primaryColor:h,dividerColor:p,borderRadius:y,fontWeightStrong:w,lineHeight:g,fontSize:S}=e;return Object.assign(Object.assign({},Ts),{fontSize:S,lineHeight:g,border:`1px solid ${p}`,titleTextColor:t,textColor:n,color:o,closeColorHover:c,closeColorPressed:a,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:s,closeBorderRadius:y,iconColor:h,iconColorInfo:u,iconColorSuccess:l,iconColorWarning:v,iconColorError:d,borderRadius:y,titleFontWeight:w})}const xr=Ft({name:"Dialog",common:Ie,peers:{Button:ei},self:Bs}),Vt={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function,closeFocusable:Boolean},Cr=Dt(Vt),Ls=E([_("dialog",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[M("icon",`
 color: var(--n-icon-color);
 `),A("bordered",`
 border: var(--n-border);
 `),A("icon-top",[M("close",`
 margin: var(--n-close-margin);
 `),M("icon",`
 margin: var(--n-icon-margin);
 `),M("content",`
 text-align: center;
 `),M("title",`
 justify-content: center;
 `),M("action",`
 justify-content: center;
 `)]),A("icon-left",[M("icon",`
 margin: var(--n-icon-margin);
 `),A("closable",[M("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),M("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),M("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[A("last","margin-bottom: 0;")]),M("action",`
 display: flex;
 justify-content: flex-end;
 `,[E("> *:not(:last-child)",`
 margin-right: var(--n-action-space);
 `)]),M("icon",`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),M("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),_("dialog-icon-container",`
 display: flex;
 justify-content: center;
 `)]),Uo(_("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),_("dialog",[qo(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),js={default:()=>b(At,null),info:()=>b(At,null),success:()=>b(An,null),warning:()=>b(Pn,null),error:()=>b(En,null)},Sr=F({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},te.props),Vt),slots:Object,setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedRtlRef:r}=pe(e),i=it("Dialog",r,n),s=B(()=>{var h,p;const{iconPlacement:y}=e;return y||((p=(h=t==null?void 0:t.value)===null||h===void 0?void 0:h.Dialog)===null||p===void 0?void 0:p.iconPlacement)||"left"});function c(h){const{onPositiveClick:p}=e;p&&p(h)}function a(h){const{onNegativeClick:p}=e;p&&p(h)}function u(){const{onClose:h}=e;h&&h()}const l=te("Dialog","-dialog",Ls,xr,e,n),v=B(()=>{const{type:h}=e,p=s.value,{common:{cubicBezierEaseInOut:y},self:{fontSize:w,lineHeight:g,border:S,titleTextColor:I,textColor:m,color:f,closeBorderRadius:x,closeColorHover:C,closeColorPressed:$,closeIconColor:O,closeIconColorHover:T,closeIconColorPressed:L,closeIconSize:z,borderRadius:N,titleFontWeight:ne,titleFontSize:P,padding:R,iconSize:H,actionSpace:Z,contentMargin:Q,closeSize:le,[p==="top"?"iconMarginIconTop":"iconMargin"]:ge,[p==="top"?"closeMarginIconTop":"closeMargin"]:ee,[oe("iconColor",h)]:Ee}}=l.value,xe=On(ge);return{"--n-font-size":w,"--n-icon-color":Ee,"--n-bezier":y,"--n-close-margin":ee,"--n-icon-margin-top":xe.top,"--n-icon-margin-right":xe.right,"--n-icon-margin-bottom":xe.bottom,"--n-icon-margin-left":xe.left,"--n-icon-size":H,"--n-close-size":le,"--n-close-icon-size":z,"--n-close-border-radius":x,"--n-close-color-hover":C,"--n-close-color-pressed":$,"--n-close-icon-color":O,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":L,"--n-color":f,"--n-text-color":m,"--n-border-radius":N,"--n-padding":R,"--n-line-height":g,"--n-border":S,"--n-content-margin":Q,"--n-title-font-size":P,"--n-title-font-weight":ne,"--n-title-text-color":I,"--n-action-space":Z}}),d=o?Me("dialog",B(()=>`${e.type[0]}${s.value[0]}`),v,e):void 0;return{mergedClsPrefix:n,rtlEnabled:i,mergedIconPlacement:s,mergedTheme:l,handlePositiveClick:c,handleNegativeClick:a,handleCloseClick:u,cssVars:o?void 0:v,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:n,cssVars:o,closable:r,showIcon:i,title:s,content:c,action:a,negativeText:u,positiveText:l,positiveButtonProps:v,negativeButtonProps:d,handlePositiveClick:h,handleNegativeClick:p,mergedTheme:y,loading:w,type:g,mergedClsPrefix:S}=this;(e=this.onRender)===null||e===void 0||e.call(this);const I=i?b(_n,{clsPrefix:S,class:`${S}-dialog__icon`},{default:()=>se(this.$slots.icon,f=>f||(this.icon?re(this.icon):js[this.type]()))}):null,m=se(this.$slots.action,f=>f||l||u||a?b("div",{class:[`${S}-dialog__action`,this.actionClass],style:this.actionStyle},f||(a?[re(a)]:[this.negativeText&&b(Jn,Object.assign({theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,ghost:!0,size:"small",onClick:p},d),{default:()=>re(this.negativeText)}),this.positiveText&&b(Jn,Object.assign({theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,size:"small",type:g==="default"?"primary":g,disabled:w,loading:w,onClick:h},v),{default:()=>re(this.positiveText)})])):null);return b("div",{class:[`${S}-dialog`,this.themeClass,this.closable&&`${S}-dialog--closable`,`${S}-dialog--icon-${n}`,t&&`${S}-dialog--bordered`,this.rtlEnabled&&`${S}-dialog--rtl`],style:o,role:"dialog"},r?se(this.$slots.close,f=>{const x=[`${S}-dialog__close`,this.rtlEnabled&&`${S}-dialog--rtl`];return f?b("div",{class:x},f):b(Rt,{focusable:this.closeFocusable,clsPrefix:S,class:x,onClick:this.handleCloseClick})}):null,i&&n==="top"?b("div",{class:`${S}-dialog-icon-container`},I):null,b("div",{class:[`${S}-dialog__title`,this.titleClass],style:this.titleStyle},i&&n==="left"?I:null,Qn(this.$slots.header,()=>[re(s)])),b("div",{class:[`${S}-dialog__content`,m?"":`${S}-dialog__content--last`,this.contentClass],style:this.contentStyle},Qn(this.$slots.default,()=>[re(c)])),m)}});function Fs(e){const{modalColor:t,textColor2:n,boxShadow3:o}=e;return{color:t,textColor:n,boxShadow:o}}const Rs=Ft({name:"Modal",common:Ie,peers:{Scrollbar:Sn,Dialog:xr,Card:br},self:Fs}),Hs=K("n-modal-provider"),$r=K("n-modal-api"),Ds=K("n-modal-reactive-list");function Ns(){const e=W($r,null);return e===null&&at("use-modal","No outer <n-modal-provider /> founded."),e}const yn="n-draggable";function Ws(e,t){let n;const o=B(()=>e.value!==!1),r=B(()=>o.value?yn:""),i=B(()=>{const a=e.value;return a===!0||a===!1?!0:a?a.bounds!=="none":!0});function s(a){const u=a.querySelector(`.${yn}`);if(!u||!r.value)return;let l=0,v=0,d=0,h=0,p=0,y=0,w,g=null,S=null;function I(C){C.preventDefault(),w=C;const{x:$,y:O,right:T,bottom:L}=a.getBoundingClientRect();v=$,h=O,l=window.innerWidth-T,d=window.innerHeight-L;const{left:z,top:N}=a.style;p=+N.slice(0,-2),y=+z.slice(0,-2)}function m(){S&&(a.style.top=`${S.y}px`,a.style.left=`${S.x}px`,S=null),g=null}function f(C){if(!w)return;const{clientX:$,clientY:O}=w;let T=C.clientX-$,L=C.clientY-O;i.value&&(T>l?T=l:-T>v&&(T=-v),L>d?L=d:-L>h&&(L=-h));const z=T+y,N=L+p;S={x:z,y:N},g||(g=requestAnimationFrame(m))}function x(){w=void 0,g&&(cancelAnimationFrame(g),g=null),S&&(a.style.top=`${S.y}px`,a.style.left=`${S.x}px`,S=null),t.onEnd(a)}J("mousedown",u,I),J("mousemove",window,f),J("mouseup",window,x),n=()=>{g&&cancelAnimationFrame(g),Y("mousedown",u,I),Y("mousemove",window,f),Y("mouseup",window,x)}}function c(){n&&(n(),n=void 0)}return ti(c),{stopDrag:c,startDrag:s,draggableRef:o,draggableClassRef:r}}const Vn=Object.assign(Object.assign({},Wn),Vt),Vs=Dt(Vn),Ks=F({name:"ModalBody",inheritAttrs:!1,slots:Object,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean,draggable:{type:[Boolean,Object],default:!1},maskHidden:Boolean},Vn),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=k(null),n=k(null),o=k(e.show),r=k(null),i=k(null),s=W(tr);let c=null;ce(ie(e,"show"),$=>{$&&(c=s.getMousePosition())},{immediate:!0});const{stopDrag:a,startDrag:u,draggableRef:l,draggableClassRef:v}=Ws(ie(e,"draggable"),{onEnd:$=>{y($)}}),d=B(()=>ze([e.titleClass,v.value])),h=B(()=>ze([e.headerClass,v.value]));ce(ie(e,"show"),$=>{$&&(o.value=!0)}),Ci(B(()=>e.blockScroll&&o.value));function p(){if(s.transformOriginRef.value==="center")return"";const{value:$}=r,{value:O}=i;if($===null||O===null)return"";if(n.value){const T=n.value.containerScrollTop;return`${$}px ${O+T}px`}return""}function y($){if(s.transformOriginRef.value==="center"||!c||!n.value)return;const O=n.value.containerScrollTop,{offsetLeft:T,offsetTop:L}=$,z=c.y,N=c.x;r.value=-(T-N),i.value=-(L-z-O),$.style.transformOrigin=p()}function w($){he(()=>{y($)})}function g($){$.style.transformOrigin=p(),e.onBeforeLeave()}function S($){const O=$;l.value&&u(O),e.onAfterEnter&&e.onAfterEnter(O)}function I(){o.value=!1,r.value=null,i.value=null,a(),e.onAfterLeave()}function m(){const{onClose:$}=e;$&&$()}function f(){e.onNegativeClick()}function x(){e.onPositiveClick()}const C=k(null);return ce(C,$=>{$&&he(()=>{const O=$.el;O&&t.value!==O&&(t.value=O)})}),V(Bn,t),V(Tn,null),V(Ln,null),{mergedTheme:s.mergedThemeRef,appear:s.appearRef,isMounted:s.isMountedRef,mergedClsPrefix:s.mergedClsPrefixRef,bodyRef:t,scrollbarRef:n,draggableClass:v,displayed:o,childNodeRef:C,cardHeaderClass:h,dialogTitleClass:d,handlePositiveClick:x,handleNegativeClick:f,handleCloseClick:m,handleAfterEnter:S,handleAfterLeave:I,handleBeforeLeave:g,handleEnter:w}},render(){const{$slots:e,$attrs:t,handleEnter:n,handleAfterEnter:o,handleAfterLeave:r,handleBeforeLeave:i,preset:s,mergedClsPrefix:c}=this;let a=null;if(!s){if(a=Vi("default",e.default,{draggableClass:this.draggableClass}),!a){ot("modal","default slot is empty");return}a=Xo(a),a.props=Ko({class:`${c}-modal`},t,a.props||{})}return this.displayDirective==="show"||this.displayed||this.show?Oe(b("div",{role:"none",class:[`${c}-modal-body-wrapper`,this.maskHidden&&`${c}-modal-body-wrapper--mask-hidden`]},b(kn,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${c}-modal-scroll-content`},{default:()=>{var u;return[(u=this.renderMask)===null||u===void 0?void 0:u.call(this),b(dr,{disabled:!this.trapFocus||this.maskHidden,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var l;return b(rt,{name:"fade-in-scale-up-transition",appear:(l=this.appear)!==null&&l!==void 0?l:this.isMounted,onEnter:n,onAfterEnter:o,onAfterLeave:r,onBeforeLeave:i},{default:()=>{const v=[[Pt,this.show]],{onClickoutside:d}=this;return d&&v.push([vn,this.onClickoutside,void 0,{capture:!0}]),Oe(this.preset==="confirm"||this.preset==="dialog"?b(Sr,Object.assign({},this.$attrs,{class:[`${c}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},qe(this.$props,Cr),{titleClass:this.dialogTitleClass,"aria-modal":"true"}),e):this.preset==="card"?b(zs,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${c}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},qe(this.$props,Ps),{headerClass:this.cardHeaderClass,"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=a,v)}})}})]}})),[[Pt,this.displayDirective==="if"||this.displayed||this.show]]):null}}),Xs=E([_("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),_("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[Yo({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),_("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[_("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `),A("mask-hidden","pointer-events: none;",[_("modal-scroll-content",[E("> *",`
 pointer-events: all;
 `)])])]),_("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[hs({duration:".25s",enterScale:".5"}),E(`.${yn}`,`
 cursor: move;
 user-select: none;
 `)])]),kr=Object.assign(Object.assign(Object.assign(Object.assign({},te.props),{show:Boolean,showMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Vn),{draggable:[Boolean,Object],onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function,unstableShowMask:{type:Boolean,default:void 0}}),Or=F({name:"Modal",inheritAttrs:!1,props:kr,slots:Object,setup(e){const t=k(null),{mergedClsPrefixRef:n,namespaceRef:o,inlineThemeDisabled:r}=pe(e),i=te("Modal","-modal",Xs,Rs,e,n),s=Mn(64),c=In(),a=Bt(),u=e.internalDialog?W(yr,null):null,l=e.internalModal?W(wi,null):null,v=xi();function d(x){const{onUpdateShow:C,"onUpdate:show":$,onHide:O}=e;C&&ye(C,x),$&&ye($,x),O&&!x&&O(x)}function h(){const{onClose:x}=e;x?Promise.resolve(x()).then(C=>{C!==!1&&d(!1)}):d(!1)}function p(){const{onPositiveClick:x}=e;x?Promise.resolve(x()).then(C=>{C!==!1&&d(!1)}):d(!1)}function y(){const{onNegativeClick:x}=e;x?Promise.resolve(x()).then(C=>{C!==!1&&d(!1)}):d(!1)}function w(){const{onBeforeLeave:x,onBeforeHide:C}=e;x&&ye(x),C&&C()}function g(){const{onAfterLeave:x,onAfterHide:C}=e;x&&ye(x),C&&C()}function S(x){var C;const{onMaskClick:$}=e;$&&$(x),e.maskClosable&&!((C=t.value)===null||C===void 0)&&C.contains(Et(x))&&d(!1)}function I(x){var C;(C=e.onEsc)===null||C===void 0||C.call(e),e.show&&e.closeOnEsc&&Ni(x)&&(v.value||d(!1))}V(tr,{getMousePosition:()=>{const x=u||l;if(x){const{clickedRef:C,clickedPositionRef:$}=x;if(C.value&&$.value)return $.value}return s.value?c.value:null},mergedClsPrefixRef:n,mergedThemeRef:i,isMountedRef:a,appearRef:ie(e,"internalAppear"),transformOriginRef:ie(e,"transformOrigin")});const m=B(()=>{const{common:{cubicBezierEaseOut:x},self:{boxShadow:C,color:$,textColor:O}}=i.value;return{"--n-bezier-ease-out":x,"--n-box-shadow":C,"--n-color":$,"--n-text-color":O}}),f=r?Me("theme-class",void 0,m,e):void 0;return{mergedClsPrefix:n,namespace:o,isMounted:a,containerRef:t,presetProps:B(()=>qe(e,Vs)),handleEsc:I,handleAfterLeave:g,handleClickoutside:S,handleBeforeLeave:w,doUpdateShow:d,handleNegativeClick:y,handlePositiveClick:p,handleCloseClick:h,cssVars:r?void 0:m,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{mergedClsPrefix:e}=this;return b(ir,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{showMask:n}=this;return Oe(b("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},b(Ks,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,draggable:this.draggable,blockScroll:this.blockScroll,maskHidden:!n},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:n?void 0:this.handleClickoutside,renderMask:n?()=>{var o;return b(rt,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?b("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[Fn,{zIndex:this.zIndex,enabled:this.show}]])}})}}),qs=Object.assign(Object.assign({},Vt),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},zIndex:Number,onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function,draggable:[Boolean,Object]}),Us=F({name:"DialogEnvironment",props:Object.assign(Object.assign({},qs),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const t=k(!0);function n(){const{onInternalAfterLeave:l,internalKey:v,onAfterLeave:d}=e;l&&l(v),d&&d()}function o(l){const{onPositiveClick:v}=e;v?Promise.resolve(v(l)).then(d=>{d!==!1&&a()}):a()}function r(l){const{onNegativeClick:v}=e;v?Promise.resolve(v(l)).then(d=>{d!==!1&&a()}):a()}function i(){const{onClose:l}=e;l?Promise.resolve(l()).then(v=>{v!==!1&&a()}):a()}function s(l){const{onMaskClick:v,maskClosable:d}=e;v&&(v(l),d&&a())}function c(){const{onEsc:l}=e;l&&l()}function a(){t.value=!1}function u(l){t.value=l}return{show:t,hide:a,handleUpdateShow:u,handleAfterLeave:n,handleCloseClick:i,handleNegativeClick:r,handlePositiveClick:o,handleMaskClick:s,handleEsc:c}},render(){const{handlePositiveClick:e,handleUpdateShow:t,handleNegativeClick:n,handleCloseClick:o,handleAfterLeave:r,handleMaskClick:i,handleEsc:s,to:c,zIndex:a,maskClosable:u,show:l}=this;return b(Or,{show:l,onUpdateShow:t,onMaskClick:i,onEsc:s,to:c,zIndex:a,maskClosable:u,onAfterEnter:this.onAfterEnter,onAfterLeave:r,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,draggable:this.draggable,internalAppear:!0,internalDialog:!0},{default:({draggableClass:v})=>b(Sr,Object.assign({},qe(this.$props,Cr),{titleClass:ze([this.titleClass,v]),style:this.internalStyle,onClose:o,onNegativeClick:n,onPositiveClick:e}))})}}),Ys={injectionKey:String,to:[String,Object]},Zs=F({name:"DialogProvider",props:Ys,setup(){const e=k([]),t={};function n(c={}){const a=lt(),u=Ht(Object.assign(Object.assign({},c),{key:a,destroy:()=>{var l;(l=t[`n-dialog-${a}`])===null||l===void 0||l.hide()}}));return e.value.push(u),u}const o=["info","success","warning","error"].map(c=>a=>n(Object.assign(Object.assign({},a),{type:c})));function r(c){const{value:a}=e;a.splice(a.findIndex(u=>u.key===c),1)}function i(){Object.values(t).forEach(c=>{c==null||c.hide()})}const s={create:n,destroyAll:i,info:o[0],success:o[1],warning:o[2],error:o[3]};return V(wr,s),V(yr,{clickedRef:Mn(64),clickedPositionRef:In()}),V(Is,e),Object.assign(Object.assign({},s),{dialogList:e,dialogInstRefs:t,handleAfterLeave:r})},render(){var e,t;return b(de,null,[this.dialogList.map(n=>b(Us,Nt(n,["destroy","style"],{internalStyle:n.style,to:this.to,ref:o=>{o===null?delete this.dialogInstRefs[`n-dialog-${n.key}`]:this.dialogInstRefs[`n-dialog-${n.key}`]=o},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave}))),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)])}}),_r=K("n-loading-bar"),Er=K("n-loading-bar-api");function Gs(e){const{primaryColor:t,errorColor:n}=e;return{colorError:n,colorLoading:t,height:"2px"}}const Js={common:Ie,self:Gs},Qs=_("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[Yo({enterDuration:"0.3s",leaveDuration:"0.8s"}),_("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[A("starting",`
 background: var(--n-color-loading);
 `),A("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),A("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);var gt=function(e,t,n,o){function r(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function c(l){try{u(o.next(l))}catch(v){s(v)}}function a(l){try{u(o.throw(l))}catch(v){s(v)}}function u(l){l.done?i(l.value):r(l.value).then(c,a)}u((o=o.apply(e,t||[])).next())})};function mt(e,t){return`${t}-loading-bar ${t}-loading-bar--${e}`}const el=F({name:"LoadingBar",props:{containerClass:String,containerStyle:[String,Object]},setup(){const{inlineThemeDisabled:e}=pe(),{props:t,mergedClsPrefixRef:n}=W(_r),o=k(null),r=k(!1),i=k(!1),s=k(!1),c=k(!1);let a=!1;const u=k(!1),l=B(()=>{const{loadingBarStyle:f}=t;return f?f[u.value?"error":"loading"]:""});function v(){return gt(this,void 0,void 0,function*(){r.value=!1,s.value=!1,a=!1,u.value=!1,c.value=!0,yield he(),c.value=!1})}function d(){return gt(this,arguments,void 0,function*(f=0,x=80,C="starting"){if(i.value=!0,yield v(),a)return;s.value=!0,yield he();const $=o.value;$&&($.style.maxWidth=`${f}%`,$.style.transition="none",$.offsetWidth,$.className=mt(C,n.value),$.style.transition="",$.style.maxWidth=`${x}%`)})}function h(){return gt(this,void 0,void 0,function*(){if(a||u.value)return;i.value&&(yield he()),a=!0;const f=o.value;f&&(f.className=mt("finishing",n.value),f.style.maxWidth="100%",f.offsetWidth,s.value=!1)})}function p(){if(!(a||u.value))if(!s.value)d(100,100,"error").then(()=>{u.value=!0;const f=o.value;f&&(f.className=mt("error",n.value),f.offsetWidth,s.value=!1)});else{u.value=!0;const f=o.value;if(!f)return;f.className=mt("error",n.value),f.style.maxWidth="100%",f.offsetWidth,s.value=!1}}function y(){r.value=!0}function w(){r.value=!1}function g(){return gt(this,void 0,void 0,function*(){yield v()})}const S=te("LoadingBar","-loading-bar",Qs,Js,t,n),I=B(()=>{const{self:{height:f,colorError:x,colorLoading:C}}=S.value;return{"--n-height":f,"--n-color-loading":C,"--n-color-error":x}}),m=e?Me("loading-bar",void 0,I,t):void 0;return{mergedClsPrefix:n,loadingBarRef:o,started:i,loading:s,entering:r,transitionDisabled:c,start:d,error:p,finish:h,handleEnter:y,handleAfterEnter:w,handleAfterLeave:g,mergedLoadingBarStyle:l,cssVars:e?void 0:I,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:e}=this;return b(rt,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Oe(b("div",{class:[`${e}-loading-bar-container`,this.themeClass,this.containerClass],style:this.containerStyle},b("div",{ref:"loadingBarRef",class:[`${e}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[Pt,this.loading||!this.loading&&this.entering]])}})}}),tl=Object.assign(Object.assign({},te.props),{to:{type:[String,Object,Boolean],default:void 0},containerClass:String,containerStyle:[String,Object],loadingBarStyle:{type:Object}}),nl=F({name:"LoadingBarProvider",props:tl,setup(e){const t=Bt(),n=k(null),o={start(){var i;t.value?(i=n.value)===null||i===void 0||i.start():he(()=>{var s;(s=n.value)===null||s===void 0||s.start()})},error(){var i;t.value?(i=n.value)===null||i===void 0||i.error():he(()=>{var s;(s=n.value)===null||s===void 0||s.error()})},finish(){var i;t.value?(i=n.value)===null||i===void 0||i.finish():he(()=>{var s;(s=n.value)===null||s===void 0||s.finish()})}},{mergedClsPrefixRef:r}=pe(e);return V(Er,o),V(_r,{props:e,mergedClsPrefixRef:r}),Object.assign(o,{loadingBarRef:n})},render(){var e,t;return b(de,null,b(Tt,{disabled:this.to===!1,to:this.to||"body"},b(el,{ref:"loadingBarRef",containerStyle:this.containerStyle,containerClass:this.containerClass})),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}});function ol(){const e=W(Er,null);return e===null&&at("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const Pr=K("n-message-api"),Ar=K("n-message-provider"),rl={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"};function il(e){const{textColor2:t,closeIconColor:n,closeIconColorHover:o,closeIconColorPressed:r,infoColor:i,successColor:s,errorColor:c,warningColor:a,popoverColor:u,boxShadow2:l,primaryColor:v,lineHeight:d,borderRadius:h,closeColorHover:p,closeColorPressed:y}=e;return Object.assign(Object.assign({},rl),{closeBorderRadius:h,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:u,colorInfo:u,colorSuccess:u,colorError:u,colorWarning:u,colorLoading:u,boxShadow:l,boxShadowInfo:l,boxShadowSuccess:l,boxShadowError:l,boxShadowWarning:l,boxShadowLoading:l,iconColor:t,iconColorInfo:i,iconColorSuccess:s,iconColorWarning:a,iconColorError:c,iconColorLoading:v,closeColorHover:p,closeColorPressed:y,closeIconColor:n,closeIconColorHover:o,closeIconColorPressed:r,closeColorHoverInfo:p,closeColorPressedInfo:y,closeIconColorInfo:n,closeIconColorHoverInfo:o,closeIconColorPressedInfo:r,closeColorHoverSuccess:p,closeColorPressedSuccess:y,closeIconColorSuccess:n,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:r,closeColorHoverError:p,closeColorPressedError:y,closeIconColorError:n,closeIconColorHoverError:o,closeIconColorPressedError:r,closeColorHoverWarning:p,closeColorPressedWarning:y,closeIconColorWarning:n,closeIconColorHoverWarning:o,closeIconColorPressedWarning:r,closeColorHoverLoading:p,closeColorPressedLoading:y,closeIconColorLoading:n,closeIconColorHoverLoading:o,closeIconColorPressedLoading:r,loadingColor:v,lineHeight:d,borderRadius:h,border:"0"})}const al={common:Ie,self:il},zr={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,spinProps:Object,onClose:Function,onMouseenter:Function,onMouseleave:Function},sl=E([_("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[ni({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),_("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[M("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),M("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>A(`${e}-type`,[E("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),E("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[oi()])]),M("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[E("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),E("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),_("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[A("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),A("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),A("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),A("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),A("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),A("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),ll={info:()=>b(At,null),success:()=>b(An,null),warning:()=>b(Pn,null),error:()=>b(En,null),default:()=>null},cl=F({name:"Message",props:Object.assign(Object.assign({},zr),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:n}=pe(e),{props:o,mergedClsPrefixRef:r}=W(Ar),i=it("Message",n,r),s=te("Message","-message",sl,al,o,r),c=B(()=>{const{type:u}=e,{common:{cubicBezierEaseInOut:l},self:{padding:v,margin:d,maxWidth:h,iconMargin:p,closeMargin:y,closeSize:w,iconSize:g,fontSize:S,lineHeight:I,borderRadius:m,border:f,iconColorInfo:x,iconColorSuccess:C,iconColorWarning:$,iconColorError:O,iconColorLoading:T,closeIconSize:L,closeBorderRadius:z,[oe("textColor",u)]:N,[oe("boxShadow",u)]:ne,[oe("color",u)]:P,[oe("closeColorHover",u)]:R,[oe("closeColorPressed",u)]:H,[oe("closeIconColor",u)]:Z,[oe("closeIconColorPressed",u)]:Q,[oe("closeIconColorHover",u)]:le}}=s.value;return{"--n-bezier":l,"--n-margin":d,"--n-padding":v,"--n-max-width":h,"--n-font-size":S,"--n-icon-margin":p,"--n-icon-size":g,"--n-close-icon-size":L,"--n-close-border-radius":z,"--n-close-size":w,"--n-close-margin":y,"--n-text-color":N,"--n-color":P,"--n-box-shadow":ne,"--n-icon-color-info":x,"--n-icon-color-success":C,"--n-icon-color-warning":$,"--n-icon-color-error":O,"--n-icon-color-loading":T,"--n-close-color-hover":R,"--n-close-color-pressed":H,"--n-close-icon-color":Z,"--n-close-icon-color-pressed":Q,"--n-close-icon-color-hover":le,"--n-line-height":I,"--n-border-radius":m,"--n-border":f}}),a=t?Me("message",B(()=>e.type[0]),c,{}):void 0;return{mergedClsPrefix:r,rtlEnabled:i,messageProviderProps:o,handleClose(){var u;(u=e.onClose)===null||u===void 0||u.call(e)},cssVars:t?void 0:c,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,placement:o.placement}},render(){const{render:e,type:t,closable:n,content:o,mergedClsPrefix:r,cssVars:i,themeClass:s,onRender:c,icon:a,handleClose:u,showIcon:l}=this;c==null||c();let v;return b("div",{class:[`${r}-message-wrapper`,s],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},i]},e?e(this.$props):b("div",{class:[`${r}-message ${r}-message--${t}-type`,this.rtlEnabled&&`${r}-message--rtl`]},(v=dl(a,t,r,this.spinProps))&&l?b("div",{class:`${r}-message__icon ${r}-message__icon--${t}-type`},b(ri,null,{default:()=>v})):null,b("div",{class:`${r}-message__content`},re(o)),n?b(Rt,{clsPrefix:r,class:`${r}-message__close`,onClick:u,absolute:!0}):null))}});function dl(e,t,n,o){if(typeof e=="function")return e();{const r=t==="loading"?b(ii,Object.assign({clsPrefix:n,strokeWidth:24,scale:.85},o)):ll[t]();return r?b(_n,{clsPrefix:n,key:t},{default:()=>r}):null}}const ul=F({name:"MessageEnvironment",props:Object.assign(Object.assign({},zr),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const n=k(!0);we(()=>{o()});function o(){const{duration:l}=e;l&&(t=window.setTimeout(s,l))}function r(l){l.currentTarget===l.target&&t!==null&&(window.clearTimeout(t),t=null)}function i(l){l.currentTarget===l.target&&o()}function s(){const{onHide:l}=e;n.value=!1,t&&(window.clearTimeout(t),t=null),l&&l()}function c(){const{onClose:l}=e;l&&l(),s()}function a(){const{onAfterLeave:l,onInternalAfterLeave:v,onAfterHide:d,internalKey:h}=e;l&&l(),v&&v(h),d&&d()}function u(){s()}return{show:n,hide:s,handleClose:c,handleAfterLeave:a,handleMouseleave:i,handleMouseenter:r,deactivate:u}},render(){return b(ai,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?b(cl,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,spinProps:this.spinProps,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),fl=Object.assign(Object.assign({},te.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),hl=F({name:"MessageProvider",props:fl,setup(e){const{mergedClsPrefixRef:t}=pe(e),n=k([]),o=k({}),r={create(a,u){return i(a,Object.assign({type:"default"},u))},info(a,u){return i(a,Object.assign(Object.assign({},u),{type:"info"}))},success(a,u){return i(a,Object.assign(Object.assign({},u),{type:"success"}))},warning(a,u){return i(a,Object.assign(Object.assign({},u),{type:"warning"}))},error(a,u){return i(a,Object.assign(Object.assign({},u),{type:"error"}))},loading(a,u){return i(a,Object.assign(Object.assign({},u),{type:"loading"}))},destroyAll:c};V(Ar,{props:e,mergedClsPrefixRef:t}),V(Pr,r);function i(a,u){const l=lt(),v=Ht(Object.assign(Object.assign({},u),{content:a,key:l,destroy:()=>{var h;(h=o.value[l])===null||h===void 0||h.hide()}})),{max:d}=e;return d&&n.value.length>=d&&n.value.shift(),n.value.push(v),v}function s(a){n.value.splice(n.value.findIndex(u=>u.key===a),1),delete o.value[a]}function c(){Object.values(o.value).forEach(a=>{a.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:o,messageList:n,handleAfterLeave:s},r)},render(){var e,t,n;return b(de,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?b(Tt,{to:(n=this.to)!==null&&n!==void 0?n:"body"},b("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:"message-container",style:this.containerStyle},this.messageList.map(o=>b(ul,Object.assign({ref:r=>{r&&(this.messageRefs[o.key]=r)},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave},Nt(o,["destroy"],void 0),{duration:o.duration===void 0?this.duration:o.duration,keepAliveOnHover:o.keepAliveOnHover===void 0?this.keepAliveOnHover:o.keepAliveOnHover,closable:o.closable===void 0?this.closable:o.closable}))))):null)}});function vl(){const e=W(Pr,null);return e===null&&at("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const pl=F({name:"ModalEnvironment",props:Object.assign(Object.assign({},kr),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const t=k(!0);function n(){const{onInternalAfterLeave:l,internalKey:v,onAfterLeave:d}=e;l&&l(v),d&&d()}function o(){const{onPositiveClick:l}=e;l?Promise.resolve(l()).then(v=>{v!==!1&&a()}):a()}function r(){const{onNegativeClick:l}=e;l?Promise.resolve(l()).then(v=>{v!==!1&&a()}):a()}function i(){const{onClose:l}=e;l?Promise.resolve(l()).then(v=>{v!==!1&&a()}):a()}function s(l){const{onMaskClick:v,maskClosable:d}=e;v&&(v(l),d&&a())}function c(){const{onEsc:l}=e;l&&l()}function a(){t.value=!1}function u(l){t.value=l}return{show:t,hide:a,handleUpdateShow:u,handleAfterLeave:n,handleCloseClick:i,handleNegativeClick:r,handlePositiveClick:o,handleMaskClick:s,handleEsc:c}},render(){const{handleUpdateShow:e,handleAfterLeave:t,handleMaskClick:n,handleEsc:o,show:r}=this;return b(Or,Object.assign({},this.$props,{show:r,onUpdateShow:e,onMaskClick:n,onEsc:o,onAfterLeave:t,internalAppear:!0,internalModal:!0}),this.$slots)}}),gl={to:[String,Object]},ml=F({name:"ModalProvider",props:gl,setup(){const e=k([]),t={};function n(s={}){const c=lt(),a=Ht(Object.assign(Object.assign({},s),{key:c,destroy:()=>{var u;(u=t[`n-modal-${c}`])===null||u===void 0||u.hide()}}));return e.value.push(a),a}function o(s){const{value:c}=e;c.splice(c.findIndex(a=>a.key===s),1)}function r(){Object.values(t).forEach(s=>{s==null||s.hide()})}const i={create:n,destroyAll:r};return V($r,i),V(Hs,{clickedRef:Mn(64),clickedPositionRef:In()}),V(Ds,e),Object.assign(Object.assign({},i),{modalList:e,modalInstRefs:t,handleAfterLeave:o})},render(){var e,t;return b(de,null,[this.modalList.map(n=>{var o;return b(pl,Nt(n,["destroy","render"],{to:(o=n.to)!==null&&o!==void 0?o:this.to,ref:r=>{r===null?delete this.modalInstRefs[`n-modal-${n.key}`]:this.modalInstRefs[`n-modal-${n.key}`]=r},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave}),{default:n.render})}),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)])}}),bl={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"};function yl(e){const{textColor2:t,successColor:n,infoColor:o,warningColor:r,errorColor:i,popoverColor:s,closeIconColor:c,closeIconColorHover:a,closeIconColorPressed:u,closeColorHover:l,closeColorPressed:v,textColor1:d,textColor3:h,borderRadius:p,fontWeightStrong:y,boxShadow2:w,lineHeight:g,fontSize:S}=e;return Object.assign(Object.assign({},bl),{borderRadius:p,lineHeight:g,fontSize:S,headerFontWeight:y,iconColor:t,iconColorSuccess:n,iconColorInfo:o,iconColorWarning:r,iconColorError:i,color:s,textColor:t,closeIconColor:c,closeIconColorHover:a,closeIconColorPressed:u,closeBorderRadius:p,closeColorHover:l,closeColorPressed:v,headerTextColor:d,descriptionTextColor:h,actionTextColor:t,boxShadow:w})}const wl=Ft({name:"Notification",common:Ie,peers:{Scrollbar:Sn},self:yl}),Kt=K("n-notification-provider"),xl=F({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:t,wipTransitionCountRef:n}=W(Kt),o=k(null);return $n(()=>{var r,i;n.value>0?(r=o==null?void 0:o.value)===null||r===void 0||r.classList.add("transitioning"):(i=o==null?void 0:o.value)===null||i===void 0||i.classList.remove("transitioning")}),{selfRef:o,mergedTheme:e,mergedClsPrefix:t,transitioning:n}},render(){const{$slots:e,scrollable:t,mergedClsPrefix:n,mergedTheme:o,placement:r}=this;return b("div",{ref:"selfRef",class:[`${n}-notification-container`,t&&`${n}-notification-container--scrollable`,`${n}-notification-container--${r}`]},t?b(kn,{theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),Cl={info:()=>b(At,null),success:()=>b(An,null),warning:()=>b(Pn,null),error:()=>b(En,null),default:()=>null},Kn={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},Sl=Dt(Kn),$l=F({name:"Notification",props:Kn,setup(e){const{mergedClsPrefixRef:t,mergedThemeRef:n,props:o}=W(Kt),{inlineThemeDisabled:r,mergedRtlRef:i}=pe(),s=it("Notification",i,t),c=B(()=>{const{type:u}=e,{self:{color:l,textColor:v,closeIconColor:d,closeIconColorHover:h,closeIconColorPressed:p,headerTextColor:y,descriptionTextColor:w,actionTextColor:g,borderRadius:S,headerFontWeight:I,boxShadow:m,lineHeight:f,fontSize:x,closeMargin:C,closeSize:$,width:O,padding:T,closeIconSize:L,closeBorderRadius:z,closeColorHover:N,closeColorPressed:ne,titleFontSize:P,metaFontSize:R,descriptionFontSize:H,[oe("iconColor",u)]:Z},common:{cubicBezierEaseOut:Q,cubicBezierEaseIn:le,cubicBezierEaseInOut:ge}}=n.value,{left:ee,right:Ee,top:xe,bottom:Xt}=On(T);return{"--n-color":l,"--n-font-size":x,"--n-text-color":v,"--n-description-text-color":w,"--n-action-text-color":g,"--n-title-text-color":y,"--n-title-font-weight":I,"--n-bezier":ge,"--n-bezier-ease-out":Q,"--n-bezier-ease-in":le,"--n-border-radius":S,"--n-box-shadow":m,"--n-close-border-radius":z,"--n-close-color-hover":N,"--n-close-color-pressed":ne,"--n-close-icon-color":d,"--n-close-icon-color-hover":h,"--n-close-icon-color-pressed":p,"--n-line-height":f,"--n-icon-color":Z,"--n-close-margin":C,"--n-close-size":$,"--n-close-icon-size":L,"--n-width":O,"--n-padding-left":ee,"--n-padding-right":Ee,"--n-padding-top":xe,"--n-padding-bottom":Xt,"--n-title-font-size":P,"--n-meta-font-size":R,"--n-description-font-size":H}}),a=r?Me("notification",B(()=>e.type[0]),c,o):void 0;return{mergedClsPrefix:t,showAvatar:B(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:s,cssVars:r?void 0:c,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),b("div",{class:[`${t}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},b("div",{class:[`${t}-notification`,this.rtlEnabled&&`${t}-notification--rtl`,this.themeClass,{[`${t}-notification--closable`]:this.closable,[`${t}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?b("div",{class:`${t}-notification__avatar`},this.avatar?re(this.avatar):this.type!=="default"?b(_n,{clsPrefix:t},{default:()=>Cl[this.type]()}):null):null,this.closable?b(Rt,{clsPrefix:t,class:`${t}-notification__close`,onClick:this.handleCloseClick}):null,b("div",{ref:"bodyRef",class:`${t}-notification-main`},this.title?b("div",{class:`${t}-notification-main__header`},re(this.title)):null,this.description?b("div",{class:`${t}-notification-main__description`},re(this.description)):null,this.content?b("pre",{class:`${t}-notification-main__content`},re(this.content)):null,this.meta||this.action?b("div",{class:`${t}-notification-main-footer`},this.meta?b("div",{class:`${t}-notification-main-footer__meta`},re(this.meta)):null,this.action?b("div",{class:`${t}-notification-main-footer__action`},re(this.action)):null):null)))}}),kl=Object.assign(Object.assign({},Kn),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),Ol=F({name:"NotificationEnvironment",props:Object.assign(Object.assign({},kl),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:t}=W(Kt),n=k(!0);let o=null;function r(){n.value=!1,o&&window.clearTimeout(o)}function i(p){t.value++,he(()=>{p.style.height=`${p.offsetHeight}px`,p.style.maxHeight="0",p.style.transition="none",p.offsetHeight,p.style.transition="",p.style.maxHeight=p.style.height})}function s(p){t.value--,p.style.height="",p.style.maxHeight="";const{onAfterEnter:y,onAfterShow:w}=e;y&&y(),w&&w()}function c(p){t.value++,p.style.maxHeight=`${p.offsetHeight}px`,p.style.height=`${p.offsetHeight}px`,p.offsetHeight}function a(p){const{onHide:y}=e;y&&y(),p.style.maxHeight="0",p.offsetHeight}function u(){t.value--;const{onAfterLeave:p,onInternalAfterLeave:y,onAfterHide:w,internalKey:g}=e;p&&p(),y(g),w&&w()}function l(){const{duration:p}=e;p&&(o=window.setTimeout(r,p))}function v(p){p.currentTarget===p.target&&o!==null&&(window.clearTimeout(o),o=null)}function d(p){p.currentTarget===p.target&&l()}function h(){const{onClose:p}=e;p?Promise.resolve(p()).then(y=>{y!==!1&&r()}):r()}return we(()=>{e.duration&&(o=window.setTimeout(r,e.duration))}),{show:n,hide:r,handleClose:h,handleAfterLeave:u,handleLeave:a,handleBeforeLeave:c,handleAfterEnter:s,handleBeforeEnter:i,handleMouseenter:v,handleMouseleave:d}},render(){return b(rt,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?b($l,Object.assign({},qe(this.$props,Sl),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),_l=E([_("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[E(">",[_("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[E(">",[_("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[_("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),A("top, top-right, top-left",`
 top: 12px;
 `,[E("&.transitioning >",[_("scrollbar",[E(">",[_("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),A("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[E(">",[_("scrollbar",[E(">",[_("scrollbar-container",[_("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),_("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),A("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[_("notification-wrapper",[E("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),E("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),A("top",[_("notification-wrapper",`
 transform-origin: top center;
 `)]),A("bottom",[_("notification-wrapper",`
 transform-origin: bottom center;
 `)]),A("top-right, bottom-right",[_("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),A("top-left, bottom-left",[_("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),A("top-right",`
 right: 0;
 `,[bt("top-right")]),A("top-left",`
 left: 0;
 `,[bt("top-left")]),A("bottom-right",`
 right: 0;
 `,[bt("bottom-right")]),A("bottom-left",`
 left: 0;
 `,[bt("bottom-left")]),A("scrollable",[A("top-right",`
 top: 0;
 `),A("top-left",`
 top: 0;
 `),A("bottom-right",`
 bottom: 0;
 `),A("bottom-left",`
 bottom: 0;
 `)]),_("notification-wrapper",`
 margin-bottom: 12px;
 `,[E("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),E("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),E("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),E("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),_("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[M("avatar",[_("icon",`
 color: var(--n-icon-color);
 `),_("base-icon",`
 color: var(--n-icon-color);
 `)]),A("show-avatar",[_("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),A("closable",[_("notification-main",[E("> *:first-child",`
 padding-right: 20px;
 `)]),M("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),M("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[_("icon","transition: color .3s var(--n-bezier);")]),_("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[_("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[M("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),M("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),M("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),M("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),M("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[E("&:first-child","margin: 0;")])])])])]);function bt(e){const n=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)";return _("notification-wrapper",[E("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${n}, 0);
 `),E("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(0, 0);
 `)])}const Ir=K("n-notification-api"),El=Object.assign(Object.assign({},te.props),{containerClass:String,containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),Pl=F({name:"NotificationProvider",props:El,setup(e){const{mergedClsPrefixRef:t}=pe(e),n=k([]),o={},r=new Set;function i(h){const p=lt(),y=()=>{r.add(p),o[p]&&o[p].hide()},w=Ht(Object.assign(Object.assign({},h),{key:p,destroy:y,hide:y,deactivate:y})),{max:g}=e;if(g&&n.value.length-r.size>=g){let S=!1,I=0;for(const m of n.value){if(!r.has(m.key)){o[m.key]&&(m.destroy(),S=!0);break}I++}S||n.value.splice(I,1)}return n.value.push(w),w}const s=["info","success","warning","error"].map(h=>p=>i(Object.assign(Object.assign({},p),{type:h})));function c(h){r.delete(h),n.value.splice(n.value.findIndex(p=>p.key===h),1)}const a=te("Notification","-notification",_l,wl,e,t),u={create:i,info:s[0],success:s[1],warning:s[2],error:s[3],open:v,destroyAll:d},l=k(0);V(Ir,u),V(Kt,{props:e,mergedClsPrefixRef:t,mergedThemeRef:a,wipTransitionCountRef:l});function v(h){return i(h)}function d(){Object.values(n.value).forEach(h=>{h.hide()})}return Object.assign({mergedClsPrefix:t,notificationList:n,notificationRefs:o,handleAfterLeave:c},u)},render(){var e,t,n;const{placement:o}=this;return b(de,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.notificationList.length?b(Tt,{to:(n=this.to)!==null&&n!==void 0?n:"body"},b(xl,{class:this.containerClass,style:this.containerStyle,scrollable:this.scrollable&&o!=="top"&&o!=="bottom",placement:o},{default:()=>this.notificationList.map(r=>b(Ol,Object.assign({ref:i=>{const s=r.key;i===null?delete this.notificationRefs[s]:this.notificationRefs[s]=i}},Nt(r,["destroy","hide","deactivate"]),{internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover})))})):null)}});function Al(){const e=W(Ir,null);return e===null&&at("use-notification","No outer `n-notification-provider` found."),e}const zl=F({name:"InjectionExtractor",props:{onSetup:Function},setup(e,{slots:t}){var n;return(n=e.onSetup)===null||n===void 0||n.call(e),()=>{var o;return(o=t.default)===null||o===void 0?void 0:o.call(t)}}}),Il={message:vl,notification:Al,loadingBar:ol,dialog:Ms,modal:Ns};function Ml({providersAndProps:e,configProviderProps:t}){let n=Zo(r);const o={app:n};function r(){return b(Go,j(t),{default:()=>e.map(({type:c,Provider:a,props:u})=>b(a,j(u),{default:()=>b(zl,{onSetup:()=>o[c]=Il[c]()})}))})}let i;return Do&&(i=document.createElement("div"),document.body.appendChild(i),n.mount(i)),Object.assign({unmount:()=>{var c;if(n===null||i===null){ot("discrete","unmount call no need because discrete app has been unmounted");return}n.unmount(),(c=i.parentNode)===null||c===void 0||c.removeChild(i),i=null,n=null}},o)}function Tl(e,{configProviderProps:t,messageProviderProps:n,dialogProviderProps:o,notificationProviderProps:r,loadingBarProviderProps:i,modalProviderProps:s}={}){const c=[];return e.forEach(u=>{switch(u){case"message":c.push({type:u,Provider:hl,props:n});break;case"notification":c.push({type:u,Provider:Pl,props:r});break;case"dialog":c.push({type:u,Provider:Zs,props:o});break;case"loadingBar":c.push({type:u,Provider:nl,props:i});break;case"modal":c.push({type:u,Provider:ml,props:s})}}),Ml({providersAndProps:c,configProviderProps:t})}const Bl="modulepreload",Ll=function(e){return"/static/"+e},Io={},He=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(c=>{if(c=Ll(c),c in Io)return;Io[c]=!0;const a=c.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Bl,a||(l.as="script",l.crossOrigin=""),l.href=c,s&&l.setAttribute("nonce",s),document.head.appendChild(l),a)return new Promise((v,d)=>{l.addEventListener("load",v),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},jl={class:"icon-btn",title:"主题色"},Fl={class:"flex items-center gap-2"},Rl=["title","onClick"],Hl=F({__name:"ThemeSwitcher",setup(e){const{themeKey:t,setTheme:n}=ci();return(o,r)=>(G(),Se(j(ks),{trigger:"click",placement:"bottom-end","show-arrow":!1,style:{padding:"12px 14px"}},{trigger:un(()=>[U("button",jl,[be(Ae,{name:"palette"})])]),default:un(()=>[U("div",Fl,[(G(!0),$e(de,null,Jo(j(si),i=>(G(),$e("button",{key:i.key,class:ze(["theme-dot",{active:j(t)===i.key}]),style:li({background:i.primary}),title:i.label,onClick:s=>j(n)(i.key)},null,14,Rl))),128))])]),_:1}))}}),Dl=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Nl=Dl(Hl,[["__scopeId","data-v-697d7eb7"]]),Wl={chat:"AI Studio",history:"历史记录",accounts:"账号管理",keys:"API 密钥",dashboard:"用量统计",settings:"服务设置"},Mo=k("chat"),To=k(!1);function Vl(){function e(t){Mo.value=t,To.value=!1}return{view:Mo,go:e,runSettingsOpen:To}}const yt=st("asp_api_token",""),tn=k(!1),Bo=k({gateway:"unknown",automaticLogin:!1,remoteLogin:!1,cookieImport:!0,streaming:"buffered"});function Kl(){async function e(){try{const o=await(await fetch("/auth/check")).json();if(tn.value=!!o.auth_enabled,o.capabilities&&(Bo.value={gateway:o.capabilities.gateway||"unknown",automaticLogin:o.capabilities.automatic_login===!0,remoteLogin:o.capabilities.remote_login===!0,cookieImport:o.capabilities.cookie_import!==!1,streaming:o.capabilities.streaming||"buffered"}),tn.value){const r=yt.value.trim();if(!r){window.location.href="/static/login.html";return}(await fetch("/auth/verify",{headers:{Authorization:`Bearer ${r}`}})).ok||(yt.value="",window.location.href="/static/login.html")}}catch(n){console.error("Auth check failed",n)}}function t(){yt.value="",window.location.href="/static/login.html"}return{token:yt,authEnabled:tn,capabilities:Bo,checkAuth:e,logout:t}}const{message:Xn}=Tl(["message"]);function ue(e){Xn.success(e)}function D(e){Xn.error(e)}function Xl(e){Xn.info(e)}function ql(e={}){const t={...e},n=(localStorage.getItem("asp_api_token")||"").trim();return n&&!t.Authorization&&!t.authorization&&(t.Authorization=`Bearer ${n}`),t}async function q(e,t={}){const n=await fetch(e,{...t,headers:ql(t.headers||{})});return n.status===401&&D("鉴权失败，请检查 API Token"),n}const Ge=k([]),nn=k(""),wt=k({id:""}),on=k(!1),Lo=k("round_robin"),Je=k({mode:"round_robin",cooldown:60}),rn=k(6*60*60*1e3),an=k({}),xt=k(!1),De=k(""),Ne=k({open:!1,sessionId:"",step:null,input:"",error:"",submitting:!1,timer:null}),jo=k({open:!1,cookies:"",name:"",email:"",importing:!1}),Ct=k(""),sn=new Set;let ln=!1,Qe=!1,Pe=0;function Ul(){const e=B(()=>Ge.value.map(m=>({...m,...an.value[m.id]||{}})));async function t(){on.value=!0;try{const[m,f]=await Promise.all([q("/accounts").then(x=>x.json()),q("/accounts/active").then(x=>x.json())]);Ge.value=m||[],nn.value=(f==null?void 0:f.id)||"",wt.value=f||{id:""}}catch{}finally{on.value=!1}}async function n(){try{const f=await(await q("/rotation")).json();Lo.value=f.mode||"round_robin",Je.value.mode=f.mode||"round_robin",Je.value.cooldown=f.cooldown_seconds||60,rn.value=f.profile_refresh_ms||rn.value,an.value=f.accounts||{}}catch{}}function o(m,f){return typeof m=="string"&&m.trim()?m:typeof m=="object"&&m!==null&&"message"in m&&typeof m.message=="string"?m.message:f}async function r(m,f=!1){if(!(!m||sn.has(m))){sn.add(m),Ct.value=m;try{const x=await q(`/accounts/${m}/refresh`,{method:"POST"}),C=await x.json().catch(()=>({}));if(!x.ok){f||D(o(C.detail,"读取账号资料失败"));return}Ge.value=Ge.value.map($=>$.id===m?{...$,...C}:$),nn.value===m&&(wt.value={...wt.value,...C}),await n(),f||ue("账号资料已更新")}catch{f||D("读取账号资料失败")}finally{sn.delete(m),Ct.value===m&&(Ct.value="")}}}async function i(){const m=Date.now();for(const f of e.value){const x=f.profile_updated_at?Date.parse(f.profile_updated_at):0,C=f.profile_error?30*60*1e3:0;(!x||m-x>(C||rn.value))&&await r(f.id,!0)}}async function s(){try{await q("/rotation/mode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:Je.value.mode,cooldown_seconds:Je.value.cooldown})}),ue("已保存"),n()}catch{D("保存失败")}}async function c(){try{await q("/rotation/next",{method:"POST"}),ue("已切换账号"),t()}catch{D("切换失败")}}async function a(m){try{await q(`/accounts/${m}/activate`,{method:"POST"}),ue("已激活"),t(),n()}catch{D("激活失败")}}async function u(m){try{(await q(`/accounts/${m}`,{method:"DELETE"})).ok?(ue("已删除"),t(),n()):D("删除失败")}catch{D("网络错误")}}function l(m){if(!m)return"登录失败";if(/execution context was destroyed|cannot find context with specified id|frame was detached/iu.test(m))return"登录页面正在跳转，请重新打开远程登录后再试。";if(m.includes("XServer")||m.includes("Missing X server")||m.includes("$DISPLAY"))return"登录浏览器启动失败：当前服务器没有可用显示服务。请改用远程登录或导入 Cookies。";const f=`登录失败：${m}`;return f.length>180?`${f.slice(0,177)}...`:f}async function v(){if(!xt.value){xt.value=!0;try{const m=await q("/accounts/login/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}),f=await m.json().catch(()=>({}));if(!m.ok||!f.session_id){D(f.detail||"启动登录失败");return}De.value=f.session_id,ue("登录已开始，请在弹出的浏览器完成登录"),await h(f.session_id)}catch{D("网络错误")}finally{De.value="",xt.value=!1}}}async function d(){const m=De.value;if(m){De.value="";try{(await q(`/accounts/login/${m}`,{method:"DELETE"})).ok?ue("已取消登录"):D("取消登录失败")}catch{D("取消登录失败")}}}async function h(m){const f=Date.now()+605e3;for(;Date.now()<f&&De.value===m;){await new Promise(x=>setTimeout(x,2e3));try{const x=await q(`/accounts/login/status/${m}`),C=await x.json().catch(()=>({}));if(!x.ok){D(C.detail||"查询登录状态失败");return}if(C.status==="completed"){C.account_id&&(await q(`/accounts/${C.account_id}/activate`,{method:"POST"}),r(C.account_id,!0)),ue(`登录成功${C.email?": "+C.email:""}`),t(),n();return}if(C.status==="failed"){D(l(C.error));return}if(C.status==="cancelled")return}catch{D("查询登录状态失败");return}}D("登录仍未完成，请稍后刷新账号列表")}async function p(){if(!Ne.value.open)try{const m=await q("/accounts/login/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({remote:!0})}),f=await m.json().catch(()=>({}));if(!m.ok||!f.session_id){D(f.detail||"启动登录失败");return}Pe+=1,Qe=!1,Object.assign(Ne.value,{open:!0,sessionId:f.session_id,step:null,input:"",error:"",submitting:!1}),y()}catch{D("网络错误")}}async function y(){const m=Ne.value;if(m.timer&&(clearTimeout(m.timer),m.timer=null),!m.open||!m.sessionId)return;if(ln){Qe=!0;return}const f=Pe;ln=!0;let x=!1;try{const C=await q(`/accounts/login/status/${m.sessionId}`),$=await C.json().catch(()=>({}));if(!m.open||Pe!==f)return;if(!C.ok)m.error=typeof $.detail=="string"?$.detail:"查询登录状态失败";else if($.status==="completed"){x=!0,await g(!1),ue(`登录成功${$.email?": "+$.email:""}`),t(),n(),$.account_id&&r($.account_id,!0);return}else $.status==="failed"?(x=!0,m.error=l($.error)):m.step=$.step||null}catch{m.open&&Pe===f&&(m.error="网络错误")}finally{ln=!1,Qe?(Qe=!1,m.open&&y()):m.open&&!x&&Pe===f&&(m.timer=setTimeout(()=>{y()},2e3))}}async function w(m){const f=Ne.value;if(!f.open||!f.sessionId||f.submitting)return;const x=f.sessionId;Pe+=1,f.submitting=!0,f.timer&&(clearTimeout(f.timer),f.timer=null);try{const C=await q("/accounts/login/input",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_id:x,value:m})});if(!C.ok){const $=await C.json().catch(()=>({})),O=typeof $.detail=="string"?$.detail:typeof $.detail=="object"&&$.detail!==null&&"message"in $.detail&&typeof $.detail.message=="string"?$.detail.message:void 0;D(O||"提交失败");return}if(!f.open||f.sessionId!==x)return;f.input="",f.step=null,f.error="",y()}catch{D("网络错误")}finally{f.sessionId===x&&(f.submitting=!1)}}async function g(m=!0){const f=Ne.value;f.timer&&clearTimeout(f.timer);const x=f.sessionId;if(Pe+=1,Qe=!1,Object.assign(f,{open:!1,sessionId:"",step:null,input:"",error:"",submitting:!1}),m&&x)try{await q(`/accounts/login/${x}`,{method:"DELETE"})}catch{}}function S(m){return{email:"mail",password:"lock",otp:"shield",selection:"list",manual:"phone"}[m]||"devices"}async function I(){const m=jo.value,f=m.cookies.trim();if(!f){D("请输入 Cookie");return}const x=f.split(/[\r\n]+/).map(C=>C.trim()).filter(Boolean).join("; ");m.importing=!0;try{const C={cookies:x};m.name.trim()&&(C.name=m.name.trim()),m.email.trim()&&(C.email=m.email.trim());const $=await q("/accounts/import-cookies",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}),O=await $.json();$.ok?(ue(`导入成功: ${O.cookie_count} 个 cookie`),Object.assign(m,{open:!1,cookies:"",name:"",email:""}),t(),n(),O.account_id&&r(O.account_id,!0)):D(O.detail||"导入失败")}catch{D("网络错误")}finally{m.importing=!1}}return{accounts:Ge,activeId:nn,activeAccount:wt,accountsLoading:on,rotationMode:Lo,rotCfg:Je,rotationAccounts:an,accountRows:e,loginInProgress:xt,localLoginSessionId:De,remoteLogin:Ne,cookieModal:jo,refreshingAccountId:Ct,loadAccounts:t,loadRotation:n,saveRotation:s,forceNext:c,activateAccount:a,deleteAccount:u,refreshAccountProfile:r,refreshStaleProfiles:i,addAccount:v,cancelLocalLogin:d,startRemoteLogin:p,pollRemoteLogin:y,submitRemoteInput:w,closeRemoteLogin:g,remoteStepIcon:S,importCookies:I}}const Yl={thinking:"off",search:"off",stream:"on",temperature:1,topP:.95,maxTokens:32768,safety:"on"},pc=st("asp_msgs",[]),gc=st("asp_cfg",Yl,{mergeDefaults:!0}),We=st("asp_model",""),St=st("asp_models",[]);function mc(){localStorage.removeItem("asp_msgs"),localStorage.removeItem("asp_cfg"),localStorage.removeItem("asp_model"),localStorage.removeItem("asp_models"),location.reload()}let Fo=!1;function Zl(){function e(){const n=St.value.map(o=>o.id);return n.includes("gemma-4-31b-it")?"gemma-4-31b-it":n.find(o=>/^(gemini|gemma)-/.test(o))||n[0]||""}async function t(){try{const n=await q("/v1beta/models");if(!n.ok)throw new Error(`HTTP ${n.status}`);const o=await n.json();if(!Array.isArray(o.models)||o.models.length===0)throw new Error("服务端返回了空模型目录");St.value=o.models.map(i=>({id:(i.name||"").replace("models/","")})).filter(i=>i.id&&!/^(antigravity|deep-research)/.test(i.id)),o.source==="fallback"&&!Fo&&(Fo=!0,Xl("实时模型目录不可用，当前使用内置兜底列表")),(!St.value.map(i=>i.id).includes(We.value)||/^(antigravity|deep-research)/.test(We.value))&&(We.value=e())}catch(n){const o=n instanceof Error?n.message:String(n);D(`模型目录加载失败，已沿用本地缓存：${o}`)}}return{models:St,model:We,loadModels:t,pickDefaultModel:e}}const fe=k({}),$t=k({}),kt=k(!1),cn=k(""),Ro=k(null);function Gl(e){const t={};for(const[n,o]of Object.entries(e)){const r=n.replace(/^models\//u,""),i=t[r]||{},s=i.last_used?Date.parse(i.last_used):0,c=o.last_used?Date.parse(o.last_used):0;t[r]={requests:(i.requests||0)+(o.requests||0),success:(i.success||0)+(o.success||0),rate_limited:(i.rate_limited||0)+(o.rate_limited||0),errors:(i.errors||0)+(o.errors||0),prompt_tokens:(i.prompt_tokens||0)+(o.prompt_tokens||0),completion_tokens:(i.completion_tokens||0)+(o.completion_tokens||0),total_tokens:(i.total_tokens||0)+(o.total_tokens||0),last_used:c>s?o.last_used:i.last_used}}return t}function Jl(e){const t=[],n=Date.now();for(let o=e-1;o>=0;o--)t.push(new Date(n-o*864e5).toISOString().slice(0,10));return t}function Ql(){async function e(){if(!kt.value){kt.value=!0,cn.value="";try{const d=await q("/stats");if(!d.ok)throw new Error(`stats request failed: ${d.status}`);const h=await d.json();fe.value=Gl(h.models||{}),$t.value=h.daily||{},Ro.value=new Date}catch{cn.value="统计数据暂时无法加载，请稍后重试。"}finally{kt.value=!1}}}const t=B(()=>Object.values(fe.value).reduce((d,h)=>d+(h.requests||0),0)),n=B(()=>Object.values(fe.value).reduce((d,h)=>d+(h.success||0),0)),o=B(()=>Object.values(fe.value).reduce((d,h)=>d+(h.rate_limited||0),0)),r=B(()=>Object.values(fe.value).reduce((d,h)=>d+(h.errors||0),0)),i=B(()=>Object.values(fe.value).reduce((d,h)=>d+(h.prompt_tokens||0),0)),s=B(()=>Object.values(fe.value).reduce((d,h)=>d+(h.completion_tokens||0),0)),c=B(()=>Object.values(fe.value).reduce((d,h)=>d+(h.total_tokens||0),0)),a=B(()=>{const d=t.value;return d?Math.round(n.value/d*100)+"%":"-"}),u=B(()=>{const d=new Date().toISOString().slice(0,10),h=$t.value[d]||{};return Object.values(h).reduce((p,y)=>p+(y.total_tokens||0),0)});function l(d){return Jl(d).map(h=>{const p=$t.value[h]||{};let y=0,w=0,g=0;for(const S of Object.values(p))y+=S.prompt_tokens||0,w+=S.completion_tokens||0,g+=S.total_tokens||0;return{date:h,prompt:y,completion:w,total:g}})}const v=B(()=>Object.entries(fe.value).map(([d,h])=>({name:d.replace("models/",""),value:h.total_tokens||0})).filter(d=>d.value>0).sort((d,h)=>h.value-d.value));return{stats:fe,daily:$t,loading:kt,error:cn,lastLoadedAt:Ro,loadStats:e,totalReqs:t,totalSuccess:n,totalRL:o,totalErrors:r,totalPromptTokens:i,totalCompletionTokens:s,totalTokens:c,successRate:a,todayTokens:u,trendDays:l,modelShare:v}}const ec={class:"shell"},tc={class:"rail-logo",title:"aistudi-web-api"},nc=["onClick"],oc={class:"main"},rc={class:"topbar"},ic={class:"mtc-label"},ac={class:"account-chip"},sc={class:"chip-label"},lc={key:1,class:"content"},cc=F({__name:"AppShell",setup(e){const t=Be(()=>He(()=>import("./ChatView-CWoUtohz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),n=Be(()=>He(()=>import("./HistoryView-DUwJ8CyM.js"),__vite__mapDeps([8,1,2,9]))),o=Be(()=>He(()=>import("./AccountsView-D7MEHha4.js"),__vite__mapDeps([10,1,2,11,4,9,6,5]))),r=Be(()=>He(()=>import("./KeysView-Bhu2DgZw.js"),__vite__mapDeps([12,1,2,9,4,11]))),i=Be(()=>He(()=>import("./DashboardView-Wpbcllrg.js"),__vite__mapDeps([13,1,2,9]))),s=Be(()=>He(()=>import("./SettingsView-fIf3s7Ak.js"),__vite__mapDeps([14,1,2,11,3,4,5]))),{view:c,go:a,runSettingsOpen:u}=Vl(),{checkAuth:l,logout:v}=Kl(),{activeAccount:d,loadAccounts:h,loadRotation:p}=Ul(),{loadModels:y}=Zl(),{loadStats:w}=Ql(),g=k(!1),S=[{key:"chat",label:"对话",icon:"chat"},{key:"history",label:"历史",icon:"history"},{key:"accounts",label:"账号",icon:"users"},{key:"keys",label:"密钥",icon:"key"},{key:"dashboard",label:"统计",icon:"chart"},{key:"settings",label:"设置",icon:"cog"}];function I(m){a(m),g.value=!1}return we(async()=>{await l(),y(),w(),h(),p()}),(m,f)=>(G(),$e("div",ec,[g.value?(G(),$e("div",{key:0,class:"fixed inset-0 z-[80] bg-black/20 backdrop-blur-[2px]",onClick:f[0]||(f[0]=x=>g.value=!1)})):ct("",!0),U("nav",{class:ze(["rail",{open:g.value}])},[U("div",tc,[be(Ae,{name:"sparkle",size:26})]),(G(),$e(de,null,Jo(S,x=>U("button",{key:x.key,class:ze(["rail-item",{active:j(c)===x.key}]),onClick:C=>I(x.key)},[be(Ae,{name:x.icon},null,8,["name"]),U("span",null,dt(x.label),1)],10,nc)),64)),f[6]||(f[6]=U("div",{class:"rail-spacer"},null,-1)),U("button",{class:"rail-item",title:"退出登录",onClick:f[1]||(f[1]=x=>j(v)())},[be(Ae,{name:"logout"}),f[5]||(f[5]=U("span",null,"退出",-1))])],2),U("div",oc,[U("header",rc,[U("button",{class:"icon-btn nav-toggle",title:"菜单",onClick:f[2]||(f[2]=x=>g.value=!0)},[be(Ae,{name:"menu"})]),U("h1",null,dt(j(Wl)[j(c)]),1),j(c)==="chat"&&j(We)?(G(),$e("button",{key:0,class:"model-topbar-chip",title:"运行设置",onClick:f[3]||(f[3]=x=>u.value=!0)},[U("span",ic,dt(j(We)),1),be(Ae,{name:"chevronDown",size:14})])):ct("",!0),f[7]||(f[7]=U("div",{class:"spacer"},null,-1)),j(c)==="chat"?(G(),$e("button",{key:1,class:"icon-btn settings-toggle",title:"运行设置",onClick:f[4]||(f[4]=x=>u.value=!0)},[be(Ae,{name:"tune"})])):ct("",!0),be(Nl),U("div",ac,[U("span",{class:ze(["dot",{off:!j(d).id}])},null,2),U("span",sc,dt(j(d).id?j(d).email||j(d).name||j(d).id:"未登录账号"),1)])]),j(c)==="chat"?(G(),Se(j(t),{key:0})):(G(),$e("div",lc,[j(c)==="history"?(G(),Se(j(n),{key:0})):j(c)==="accounts"?(G(),Se(j(o),{key:1})):j(c)==="keys"?(G(),Se(j(r),{key:2})):j(c)==="dashboard"?(G(),Se(j(i),{key:3})):j(c)==="settings"?(G(),Se(j(s),{key:4})):ct("",!0)]))])]))}}),dc=F({__name:"App",setup(e){return we(di),(t,n)=>(G(),Se(j(Go),{"theme-overrides":j(ui),class:"h-full"},{default:un(()=>[be(cc)]),_:1},8,["theme-overrides"]))}});Zo(dc).mount("#app");export{It as A,ki as B,Ql as C,Ai as D,hi as E,dr as F,ht as G,re as H,fc as I,yi as J,gs as K,ir as L,ks as M,Or as N,vc as O,bi as P,Oi as V,He as _,Tn as a,xi as b,vn as c,hc as d,Ni as e,Gt as f,hs as g,Fi as h,Xe as i,D as j,pc as k,We as l,Bn as m,gc as n,q as o,Ln as p,St as q,Dl as r,Vl as s,ue as t,Ci as u,Kl as v,mc as w,Ul as x,zs as y,Fn as z};
