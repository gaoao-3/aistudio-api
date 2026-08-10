import{u as Fe,f as E,r as A,p as tt,l as ve,i as Ct,q as f,bi as Pt,aj as Fn,s as Ht,o as Ue,bj as In,bk as Mn,bl as be,bm as Pe,t as ae,x as wt,bn as $n,bo as dt,w as Ie,b as Wt,a6 as Ee,a7 as K,a9 as P,a2 as de,aB as Dt,ad as Ae,ae as pe,ah as Le,ax as J,a4 as St,a5 as Bn,ac as Vt,aa as Z,a8 as ke,ak as ye,aP as jt,aw as _n,aD as En,af as kt,ay as _e,bf as X,av as An,bp as Tt,aq as fe,h as Ln,bq as Nn,F as Hn,ag as Wn,m as Dn,am as Vn,ap as mt,bb as Kt,v as jn,y as Kn,aN as Ot,ai as ct,aO as Un}from"./Icon.vue_vue_type_script_setup_true_lang-BBuVQPIN.js";import{D as Ut,E as Gn,G as et,H as Be,I as Rt,g as Gt,J as qn,K as Xn,M as Yn,B as Zn,V as Jn,h as Qn,i as yt,c as Ft,O as eo,P as to}from"./app-C-RAeM2q.js";import{u as qt,a as no}from"./Input-Dp_shlyb.js";function Ke(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function It(e){return e&-e}class Xt{constructor(t,n){this.l=t,this.min=n;const o=new Array(t+1);for(let r=0;r<t+1;++r)o[r]=0;this.ft=o}add(t,n){if(n===0)return;const{l:o,ft:r}=this;for(t+=1;t<=o;)r[t]+=n,t+=It(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:o,l:r}=this;if(t>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=t*o;for(;t>0;)s+=n[t],t-=It(t);return s}getBound(t){let n=0,o=this.l;for(;o>n;){const r=Math.floor((n+o)/2),s=this.sum(r);if(s>t){o=r;continue}else if(s<t){if(n===r)return this.sum(n+1)<=t?n+1:r;n=r}else return r}return n}}let Qe;function oo(){return typeof document>"u"?!1:(Qe===void 0&&("matchMedia"in window?Qe=window.matchMedia("(pointer:coarse)").matches:Qe=!1),Qe)}let ut;function Mt(){return typeof document>"u"?1:(ut===void 0&&(ut="chrome"in window?window.devicePixelRatio:1),ut)}const Yt="VVirtualListXScroll";function ro({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){const o=A(0),r=A(0),s=E(()=>{const c=e.value;if(c.length===0)return null;const u=new Xt(c.length,0);return c.forEach((h,x)=>{u.add(x,h.width)}),u}),i=Fe(()=>{const c=s.value;return c!==null?Math.max(c.getBound(r.value)-1,0):0}),l=c=>{const u=s.value;return u!==null?u.sum(c):0},d=Fe(()=>{const c=s.value;return c!==null?Math.min(c.getBound(r.value+o.value)+1,e.value.length-1):0});return tt(Yt,{startIndexRef:i,endIndexRef:d,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:l}),{listWidthRef:o,scrollLeftRef:r}}const $t=ve({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:o,renderColRef:r,renderItemWithColsRef:s}=Ct(Yt);return{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:s,getLeft:o}},render(){const{startIndex:e,endIndex:t,columns:n,renderCol:o,renderItemWithCols:r,getLeft:s,item:i}=this;if(r!=null)return r({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:i,getLeft:s});if(o!=null){const l=[];for(let d=e;d<=t;++d){const c=n[d];l.push(o({column:c,left:s(d),item:i}))}return l}return null}}),io=et(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[et("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[et("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),lo=ve({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=Ht();io.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ut,ssr:t}),Ue(()=>{const{defaultScrollIndex:b,defaultScrollKey:O}=e;b!=null?I({index:b}):O!=null&&I({key:O})});let n=!1,o=!1;In(()=>{if(n=!1,!o){o=!0;return}I({top:k.value,left:i.value})}),Mn(()=>{n=!0,o||(o=!0)});const r=Fe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let b=0;return e.columns.forEach(O=>{b+=O.width}),b}),s=E(()=>{const b=new Map,{keyField:O}=e;return e.items.forEach((j,q)=>{b.set(j[O],q)}),b}),{scrollLeftRef:i,listWidthRef:l}=ro({columnsRef:ae(e,"columns"),renderColRef:ae(e,"renderCol"),renderItemWithColsRef:ae(e,"renderItemWithCols")}),d=A(null),c=A(void 0),u=new Map,h=E(()=>{const{items:b,itemSize:O,keyField:j}=e,q=new Xt(b.length,O);return b.forEach((Y,oe)=>{const W=Y[j],ee=u.get(W);ee!==void 0&&q.add(oe,ee)}),q}),x=A(0),k=A(0),v=Fe(()=>Math.max(h.value.getBound(k.value-be(e.paddingTop))-1,0)),m=E(()=>{const{value:b}=c;if(b===void 0)return[];const{items:O,itemSize:j}=e,q=v.value,Y=Math.min(q+Math.ceil(b/j+1),O.length-1),oe=[];for(let W=q;W<=Y;++W)oe.push(O[W]);return oe}),I=(b,O)=>{if(typeof b=="number"){y(b,O,"auto");return}const{left:j,top:q,index:Y,key:oe,position:W,behavior:ee,debounce:te=!0}=b;if(j!==void 0||q!==void 0)y(j,q,ee);else if(Y!==void 0)M(Y,ee,te);else if(oe!==void 0){const ne=s.value.get(oe);ne!==void 0&&M(ne,ee,te)}else W==="bottom"?y(0,Number.MAX_SAFE_INTEGER,ee):W==="top"&&y(0,0,ee)};let T,z=null;function M(b,O,j){const{value:q}=h,Y=q.sum(b)+be(e.paddingTop);if(!j)d.value.scrollTo({left:0,top:Y,behavior:O});else{T=b,z!==null&&window.clearTimeout(z),z=window.setTimeout(()=>{T=void 0,z=null},16);const{scrollTop:oe,offsetHeight:W}=d.value;if(Y>oe){const ee=q.get(b);Y+ee<=oe+W||d.value.scrollTo({left:0,top:Y+ee-W,behavior:O})}else d.value.scrollTo({left:0,top:Y,behavior:O})}}function y(b,O,j){d.value.scrollTo({left:b,top:O,behavior:j})}function w(b,O){var j,q,Y;if(n||e.ignoreItemResize||Q(O.target))return;const{value:oe}=h,W=s.value.get(b),ee=oe.get(W),te=(Y=(q=(j=O.borderBoxSize)===null||j===void 0?void 0:j[0])===null||q===void 0?void 0:q.blockSize)!==null&&Y!==void 0?Y:O.contentRect.height;if(te===ee)return;te-e.itemSize===0?u.delete(b):u.set(b,te-e.itemSize);const ie=te-ee;if(ie===0)return;oe.add(W,ie);const g=d.value;if(g!=null){if(T===void 0){const S=oe.sum(W);g.scrollTop>S&&g.scrollBy(0,ie)}else if(W<T)g.scrollBy(0,ie);else if(W===T){const S=oe.sum(W);te+S>g.scrollTop+g.offsetHeight&&g.scrollBy(0,ie)}U()}x.value++}const $=!oo();let H=!1;function L(b){var O;(O=e.onScroll)===null||O===void 0||O.call(e,b),(!$||!H)&&U()}function F(b){var O;if((O=e.onWheel)===null||O===void 0||O.call(e,b),$){const j=d.value;if(j!=null){if(b.deltaX===0&&(j.scrollTop===0&&b.deltaY<=0||j.scrollTop+j.offsetHeight>=j.scrollHeight&&b.deltaY>=0))return;b.preventDefault(),j.scrollTop+=b.deltaY/Mt(),j.scrollLeft+=b.deltaX/Mt(),U(),H=!0,Gn(()=>{H=!1})}}}function _(b){if(n||Q(b.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(b.contentRect.height===c.value)return}else if(b.contentRect.height===c.value&&b.contentRect.width===l.value)return;c.value=b.contentRect.height,l.value=b.contentRect.width;const{onResize:O}=e;O!==void 0&&O(b)}function U(){const{value:b}=d;b!=null&&(k.value=b.scrollTop,i.value=b.scrollLeft)}function Q(b){let O=b;for(;O!==null;){if(O.style.display==="none")return!0;O=O.parentElement}return!1}return{listHeight:c,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:E(()=>{const{itemResizable:b}=e,O=Pe(h.value.sum());return x.value,[e.itemsStyle,{boxSizing:"content-box",width:Pe(r.value),height:b?"":O,minHeight:b?O:"",paddingTop:Pe(e.paddingTop),paddingBottom:Pe(e.paddingBottom)}]}),visibleItemsStyle:E(()=>(x.value,{transform:`translateY(${Pe(h.value.sum(v.value))})`})),viewportItems:m,listElRef:d,itemsElRef:A(null),scrollTo:I,handleListResize:_,handleListScroll:L,handleListWheel:F,handleItemResize:w}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:o}=this;return f(Pt,{onResize:this.handleListResize},{default:()=>{var r,s;return f("div",Fn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?f("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[f(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:i,renderItemWithCols:l}=this;return this.viewportItems.map(d=>{const c=d[t],u=n.get(c),h=i!=null?f($t,{index:u,item:d}):void 0,x=l!=null?f($t,{index:u,item:d}):void 0,k=this.$slots.default({item:d,renderedCols:h,renderedItemWithCols:x,index:u})[0];return e?f(Pt,{key:c,onResize:v=>this.handleItemResize(c,v)},{default:()=>k}):(k.key=c,k)})}})]):(s=(r=this.$slots).empty)===null||s===void 0?void 0:s.call(r)])}})}}),Se="v-hidden",ao=et("[v-hidden]",{display:"none!important"}),Bt=ve({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=A(null),o=A(null);function r(i){const{value:l}=n,{getCounter:d,getTail:c}=e;let u;if(d!==void 0?u=d():u=o.value,!l||!u)return;u.hasAttribute(Se)&&u.removeAttribute(Se);const{children:h}=l;if(i.showAllItemsBeforeCalculate)for(const M of h)M.hasAttribute(Se)&&M.removeAttribute(Se);const x=l.offsetWidth,k=[],v=t.tail?c==null?void 0:c():null;let m=v?v.offsetWidth:0,I=!1;const T=l.children.length-(t.tail?1:0);for(let M=0;M<T-1;++M){if(M<0)continue;const y=h[M];if(I){y.hasAttribute(Se)||y.setAttribute(Se,"");continue}else y.hasAttribute(Se)&&y.removeAttribute(Se);const w=y.offsetWidth;if(m+=w,k[M]=w,m>x){const{updateCounter:$}=e;for(let H=M;H>=0;--H){const L=T-1-H;$!==void 0?$(L):u.textContent=`${L}`;const F=u.offsetWidth;if(m-=k[H],m+F<=x||H===0){I=!0,M=H-1,v&&(M===-1?(v.style.maxWidth=`${x-F}px`,v.style.boxSizing="border-box"):v.style.maxWidth="");const{onUpdateCount:_}=e;_&&_(L);break}}}}const{onUpdateOverflow:z}=e;I?z!==void 0&&z(!0):(z!==void 0&&z(!1),u.setAttribute(Se,""))}const s=Ht();return ao.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ut,ssr:s}),Ue(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:o,sync:r}},render(){const{$slots:e}=this;return wt(()=>this.sync({showAllItemsBeforeCalculate:!1})),f("div",{class:"v-overflow",ref:"selfRef"},[$n(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Zt(e,t){t&&(Ue(()=>{const{value:n}=e;n&&dt.registerHandler(n,t)}),Ie(e,(n,o)=>{o&&dt.unregisterHandler(o)},{deep:!1}),Wt(()=>{const{value:n}=e;n&&dt.unregisterHandler(n)}))}function _t(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ht(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}const so=ve({name:"Checkmark",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},f("g",{fill:"none"},f("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),co=ve({name:"Empty",render(){return f("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),f("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),uo=ve({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Et(e){return Array.isArray(e)?e:[e]}const xt={STOP:"STOP"};function Jt(e,t){const n=t(e);e.children!==void 0&&n!==xt.STOP&&e.children.forEach(o=>Jt(o,t))}function ho(e,t={}){const{preserveGroup:n=!1}=t,o=[],r=n?i=>{i.isLeaf||(o.push(i.key),s(i.children))}:i=>{i.isLeaf||(i.isGroup||o.push(i.key),s(i.children))};function s(i){i.forEach(r)}return s(e),o}function fo(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function vo(e){return e.children}function go(e){return e.key}function bo(){return!1}function po(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function mo(e){return e.disabled===!0}function yo(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function ft(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function vt(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function xo(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function Co(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function wo(e){return(e==null?void 0:e.type)==="group"}function So(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class ko extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Ro(e,t,n,o){return nt(t.concat(e),n,o,!1)}function zo(e,t){const n=new Set;return e.forEach(o=>{const r=t.treeNodeMap.get(o);if(r!==void 0){let s=r.parent;for(;s!==null&&!(s.disabled||n.has(s.key));)n.add(s.key),s=s.parent}}),n}function Po(e,t,n,o){const r=nt(t,n,o,!1),s=nt(e,n,o,!0),i=zo(e,n),l=[];return r.forEach(d=>{(s.has(d)||i.has(d))&&l.push(d)}),l.forEach(d=>r.delete(d)),r}function gt(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:r,indeterminateKeys:s,cascade:i,leafOnly:l,checkStrategy:d,allowNotLoaded:c}=e;if(!i)return o!==void 0?{checkedKeys:xo(n,o),indeterminateKeys:Array.from(s)}:r!==void 0?{checkedKeys:Co(n,r),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:u}=t;let h;r!==void 0?h=Po(r,n,t,c):o!==void 0?h=Ro(o,n,t,c):h=nt(n,t,c,!1);const x=d==="parent",k=d==="child"||l,v=h,m=new Set,I=Math.max.apply(null,Array.from(u.keys()));for(let T=I;T>=0;T-=1){const z=T===0,M=u.get(T);for(const y of M){if(y.isLeaf)continue;const{key:w,shallowLoaded:$}=y;if(k&&$&&y.children.forEach(_=>{!_.disabled&&!_.isLeaf&&_.shallowLoaded&&v.has(_.key)&&v.delete(_.key)}),y.disabled||!$)continue;let H=!0,L=!1,F=!0;for(const _ of y.children){const U=_.key;if(!_.disabled){if(F&&(F=!1),v.has(U))L=!0;else if(m.has(U)){L=!0,H=!1;break}else if(H=!1,L)break}}H&&!F?(x&&y.children.forEach(_=>{!_.disabled&&v.has(_.key)&&v.delete(_.key)}),v.add(w)):L&&m.add(w),z&&k&&v.has(w)&&v.delete(w)}}return{checkedKeys:Array.from(v),indeterminateKeys:Array.from(m)}}function nt(e,t,n,o){const{treeNodeMap:r,getChildren:s}=t,i=new Set,l=new Set(e);return e.forEach(d=>{const c=r.get(d);c!==void 0&&Jt(c,u=>{if(u.disabled)return xt.STOP;const{key:h}=u;if(!i.has(h)&&(i.add(h),l.add(h),yo(u.rawNode,s))){if(o)return xt.STOP;if(!n)throw new ko}})}),l}function To(e,{includeGroup:t=!1,includeSelf:n=!0},o){var r;const s=o.treeNodeMap;let i=e==null?null:(r=s.get(e))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return l.treeNode=null,l;for(;i;)!i.ignored&&(t||!i.isGroup)&&l.treeNodePath.push(i),i=i.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(d=>d.key),l}function Oo(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Fo(e,t){const n=e.siblings,o=n.length,{index:r}=e;return t?n[(r+1)%o]:r===n.length-1?null:n[r+1]}function At(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const r=t==="prev"?Io:Fo,s={reverse:t==="prev"};let i=!1,l=null;function d(c){if(c!==null){if(c===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){l=c;return}if(c.isGroup){const u=zt(c,s);u!==null?l=u:d(r(c,n))}else{const u=r(c,!1);if(u!==null)d(u);else{const h=Mo(c);h!=null&&h.isGroup?d(r(h,n)):n&&d(r(c,!0))}}}}return d(e),l}function Io(e,t){const n=e.siblings,o=n.length,{index:r}=e;return t?n[(r-1+o)%o]:r===0?null:n[r-1]}function Mo(e){return e.parent}function zt(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:r}=o,s=n?r-1:0,i=n?-1:r,l=n?-1:1;for(let d=s;d!==i;d+=l){const c=o[d];if(!c.disabled&&!c.ignored)if(c.isGroup){const u=zt(c,t);if(u!==null)return u}else return c}}return null}const $o={getChild(){return this.ignored?null:zt(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return At(this,"next",e)},getPrev(e={}){return At(this,"prev",e)}};function Bo(e,t){const n=t?new Set(t):void 0,o=[];function r(s){s.forEach(i=>{o.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||n===void 0||n.has(i.key))&&r(i.children)})}return r(e),o}function _o(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Qt(e,t,n,o,r,s=null,i=0){const l=[];return e.forEach((d,c)=>{var u;const h=Object.create(o);if(h.rawNode=d,h.siblings=l,h.level=i,h.index=c,h.isFirstChild=c===0,h.isLastChild=c+1===e.length,h.parent=s,!h.ignored){const x=r(d);Array.isArray(x)&&(h.children=Qt(x,t,n,o,r,h,i+1))}l.push(h),t.set(h.key,h),n.has(i)||n.set(i,[]),(u=n.get(i))===null||u===void 0||u.push(h)}),l}function Eo(e,t={}){var n;const o=new Map,r=new Map,{getDisabled:s=mo,getIgnored:i=bo,getIsGroup:l=wo,getKey:d=go}=t,c=(n=t.getChildren)!==null&&n!==void 0?n:vo,u=t.ignoreEmptyChildren?y=>{const w=c(y);return Array.isArray(w)?w.length?w:null:w}:c,h=Object.assign({get key(){return d(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return fo(this.rawNode,u)},get shallowLoaded(){return po(this.rawNode,u)},get ignored(){return i(this.rawNode)},contains(y){return _o(this,y)}},$o),x=Qt(e,o,r,h,u);function k(y){if(y==null)return null;const w=o.get(y);return w&&!w.isGroup&&!w.ignored?w:null}function v(y){if(y==null)return null;const w=o.get(y);return w&&!w.ignored?w:null}function m(y,w){const $=v(y);return $?$.getPrev(w):null}function I(y,w){const $=v(y);return $?$.getNext(w):null}function T(y){const w=v(y);return w?w.getParent():null}function z(y){const w=v(y);return w?w.getChild():null}const M={treeNodes:x,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(y){return Bo(x,y)},getNode:k,getPrev:m,getNext:I,getParent:T,getChild:z,getFirstAvailableNode(){return Oo(x)},getPath(y,w={}){return To(y,w,M)},getCheckedKeys(y,w={}){const{cascade:$=!0,leafOnly:H=!1,checkStrategy:L="all",allowNotLoaded:F=!1}=w;return gt({checkedKeys:ft(y),indeterminateKeys:vt(y),cascade:$,leafOnly:H,checkStrategy:L,allowNotLoaded:F},M)},check(y,w,$={}){const{cascade:H=!0,leafOnly:L=!1,checkStrategy:F="all",allowNotLoaded:_=!1}=$;return gt({checkedKeys:ft(w),indeterminateKeys:vt(w),keysToCheck:y==null?[]:Et(y),cascade:H,leafOnly:L,checkStrategy:F,allowNotLoaded:_},M)},uncheck(y,w,$={}){const{cascade:H=!0,leafOnly:L=!1,checkStrategy:F="all",allowNotLoaded:_=!1}=$;return gt({checkedKeys:ft(w),indeterminateKeys:vt(w),keysToUncheck:y==null?[]:Et(y),cascade:H,leafOnly:L,checkStrategy:F,allowNotLoaded:_},M)},getNonLeafKeys(y={}){return ho(x,y)}};return M}const Ao={iconSizeTiny:"28px",iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};function Lo(e){const{textColorDisabled:t,iconColor:n,textColor2:o,fontSizeTiny:r,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:l,fontSizeHuge:d}=e;return Object.assign(Object.assign({},Ao),{fontSizeTiny:r,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:l,fontSizeHuge:d,textColor:t,iconColor:n,extraTextColor:o})}const en={name:"Empty",common:Ee,self:Lo},No=K("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[P("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[de("+",[P("description",`
 margin-top: 8px;
 `)])]),P("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),P("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Ho=Object.assign(Object.assign({},pe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Wo=ve({name:"Empty",props:Ho,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:o}=Ae(e),r=pe("Empty","-empty",No,en,e,t),{localeRef:s}=qt("Empty"),i=E(()=>{var u,h,x;return(u=e.description)!==null&&u!==void 0?u:(x=(h=o==null?void 0:o.value)===null||h===void 0?void 0:h.Empty)===null||x===void 0?void 0:x.description}),l=E(()=>{var u,h;return((h=(u=o==null?void 0:o.value)===null||u===void 0?void 0:u.Empty)===null||h===void 0?void 0:h.renderIcon)||(()=>f(co,null))}),d=E(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:h},self:{[J("iconSize",u)]:x,[J("fontSize",u)]:k,textColor:v,iconColor:m,extraTextColor:I}}=r.value;return{"--n-icon-size":x,"--n-font-size":k,"--n-bezier":h,"--n-text-color":v,"--n-icon-color":m,"--n-extra-text-color":I}}),c=n?Le("empty",E(()=>{let u="";const{size:h}=e;return u+=h[0],u}),d,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:E(()=>i.value||s.value.description),cssVars:n?void 0:d,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),f("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?f("div",{class:`${t}-empty__icon`},e.icon?e.icon():f(Dt,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?f("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?f("div",{class:`${t}-empty__extra`},e.extra()):null)}}),Do={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function Vo(e){const{borderRadius:t,popoverColor:n,textColor3:o,dividerColor:r,textColor2:s,primaryColorPressed:i,textColorDisabled:l,primaryColor:d,opacityDisabled:c,hoverColor:u,fontSizeTiny:h,fontSizeSmall:x,fontSizeMedium:k,fontSizeLarge:v,fontSizeHuge:m,heightTiny:I,heightSmall:T,heightMedium:z,heightLarge:M,heightHuge:y}=e;return Object.assign(Object.assign({},Do),{optionFontSizeTiny:h,optionFontSizeSmall:x,optionFontSizeMedium:k,optionFontSizeLarge:v,optionFontSizeHuge:m,optionHeightTiny:I,optionHeightSmall:T,optionHeightMedium:z,optionHeightLarge:M,optionHeightHuge:y,borderRadius:t,color:n,groupHeaderTextColor:o,actionDividerColor:r,optionTextColor:s,optionTextColorPressed:i,optionTextColorDisabled:l,optionTextColorActive:d,optionOpacityDisabled:c,optionCheckColor:d,optionColorPending:u,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:u,actionTextColor:s,loadingColor:d})}const tn=St({name:"InternalSelectMenu",common:Ee,peers:{Scrollbar:Bn,Empty:en},self:Vo}),Lt=ve({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=Ct(Rt);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:r}}=this,s=o==null?void 0:o(r),i=t?t(r,!1):Be(r[this.labelField],r,!1),l=f("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),i);return r.render?r.render({node:l,option:r}):n?n({node:l,option:r,selected:!1}):l}});function jo(e,t){return f(Vt,{name:"fade-in-scale-up-transition"},{default:()=>e?f(Dt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>f(so)}):null})}const Nt=ve({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:r,renderLabelRef:s,renderOptionRef:i,labelFieldRef:l,valueFieldRef:d,showCheckmarkRef:c,nodePropsRef:u,handleOptionClick:h,handleOptionMouseEnter:x}=Ct(Rt),k=Fe(()=>{const{value:T}=n;return T?e.tmNode.key===T.key:!1});function v(T){const{tmNode:z}=e;z.disabled||h(T,z)}function m(T){const{tmNode:z}=e;z.disabled||x(T,z)}function I(T){const{tmNode:z}=e,{value:M}=k;z.disabled||M||x(T,z)}return{multiple:o,isGrouped:Fe(()=>{const{tmNode:T}=e,{parent:z}=T;return z&&z.rawNode.type==="group"}),showCheckmark:c,nodeProps:u,isPending:k,isSelected:Fe(()=>{const{value:T}=t,{value:z}=o;if(T===null)return!1;const M=e.tmNode.rawNode[d.value];if(z){const{value:y}=r;return y.has(M)}else return T===M}),labelField:l,renderLabel:s,renderOption:i,handleMouseMove:I,handleMouseEnter:m,handleClick:v}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:r,showCheckmark:s,nodeProps:i,renderOption:l,renderLabel:d,handleClick:c,handleMouseEnter:u,handleMouseMove:h}=this,x=jo(n,e),k=d?[d(t,n),s&&x]:[Be(t[this.labelField],t,n),s&&x],v=i==null?void 0:i(t),m=f("div",Object.assign({},v,{class:[`${e}-base-select-option`,t.class,v==null?void 0:v.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[(v==null?void 0:v.style)||"",t.style||""],onClick:ht([c,v==null?void 0:v.onClick]),onMouseenter:ht([u,v==null?void 0:v.onMouseenter]),onMousemove:ht([h,v==null?void 0:v.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},k));return t.render?t.render({node:m,option:t,selected:n}):l?l({node:m,option:t,selected:n}):m}}),Ko=K("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[K("scrollbar",`
 max-height: var(--n-height);
 `),K("virtual-list",`
 max-height: var(--n-height);
 `),K("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[P("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),K("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),K("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),P("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),P("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),P("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),P("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),K("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),K("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Z("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),de("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),de("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Z("pending",[de("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Z("selected",`
 color: var(--n-option-text-color-active);
 `,[de("&::before",`
 background-color: var(--n-option-color-active);
 `),Z("pending",[de("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 `,[ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),Z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),P("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Gt({enterScale:"0.5"})])])]),Uo=ve({name:"InternalSelectMenu",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:o}=Ae(e),r=kt("InternalSelectMenu",n,t),s=pe("InternalSelectMenu","-internal-select-menu",Ko,tn,e,ae(e,"clsPrefix")),i=A(null),l=A(null),d=A(null),c=E(()=>e.treeMate.getFlattenedNodes()),u=E(()=>So(c.value)),h=A(null);function x(){const{treeMate:g}=e;let S=null;const{value:re}=e;re===null?S=g.getFirstAvailableNode():(e.multiple?S=g.getNode((re||[])[(re||[]).length-1]):S=g.getNode(re),(!S||S.disabled)&&(S=g.getFirstAvailableNode())),q(S||null)}function k(){const{value:g}=h;g&&!e.treeMate.getNode(g.key)&&(h.value=null)}let v;Ie(()=>e.show,g=>{g?v=Ie(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?x():k(),wt(Y)):k()},{immediate:!0}):v==null||v()},{immediate:!0}),Wt(()=>{v==null||v()});const m=E(()=>be(s.value.self[J("optionHeight",e.size)])),I=E(()=>_e(s.value.self[J("padding",e.size)])),T=E(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),z=E(()=>{const g=c.value;return g&&g.length===0}),M=E(()=>{var g,S;return(S=(g=o==null?void 0:o.value)===null||g===void 0?void 0:g.Select)===null||S===void 0?void 0:S.renderEmpty});function y(g){const{onToggle:S}=e;S&&S(g)}function w(g){const{onScroll:S}=e;S&&S(g)}function $(g){var S;(S=d.value)===null||S===void 0||S.sync(),w(g)}function H(){var g;(g=d.value)===null||g===void 0||g.sync()}function L(){const{value:g}=h;return g||null}function F(g,S){S.disabled||q(S,!1)}function _(g,S){S.disabled||y(S)}function U(g){var S;Ke(g,"action")||(S=e.onKeyup)===null||S===void 0||S.call(e,g)}function Q(g){var S;Ke(g,"action")||(S=e.onKeydown)===null||S===void 0||S.call(e,g)}function b(g){var S;(S=e.onMousedown)===null||S===void 0||S.call(e,g),!e.focusable&&g.preventDefault()}function O(){const{value:g}=h;g&&q(g.getNext({loop:!0}),!0)}function j(){const{value:g}=h;g&&q(g.getPrev({loop:!0}),!0)}function q(g,S=!1){h.value=g,S&&Y()}function Y(){var g,S;const re=h.value;if(!re)return;const ce=u.value(re.key);ce!==null&&(e.virtualScroll?(g=l.value)===null||g===void 0||g.scrollTo({index:ce}):(S=d.value)===null||S===void 0||S.scrollTo({index:ce,elSize:m.value}))}function oe(g){var S,re;!((S=i.value)===null||S===void 0)&&S.contains(g.target)&&((re=e.onFocus)===null||re===void 0||re.call(e,g))}function W(g){var S,re;!((S=i.value)===null||S===void 0)&&S.contains(g.relatedTarget)||(re=e.onBlur)===null||re===void 0||re.call(e,g)}tt(Rt,{handleOptionMouseEnter:F,handleOptionClick:_,valueSetRef:T,pendingTmNodeRef:h,nodePropsRef:ae(e,"nodeProps"),showCheckmarkRef:ae(e,"showCheckmark"),multipleRef:ae(e,"multiple"),valueRef:ae(e,"value"),renderLabelRef:ae(e,"renderLabel"),renderOptionRef:ae(e,"renderOption"),labelFieldRef:ae(e,"labelField"),valueFieldRef:ae(e,"valueField")}),tt(qn,i),Ue(()=>{const{value:g}=d;g&&g.sync()});const ee=E(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:S},self:{height:re,borderRadius:ce,color:ge,groupHeaderTextColor:ue,actionDividerColor:he,optionTextColorPressed:Re,optionTextColor:xe,optionTextColorDisabled:Ce,optionTextColorActive:Ne,optionOpacityDisabled:He,optionCheckColor:Te,actionTextColor:Oe,optionColorPending:We,optionColorActive:De,loadingColor:Ve,loadingSize:Me,optionColorActivePending:$e,[J("optionFontSize",g)]:me,[J("optionHeight",g)]:p,[J("optionPadding",g)]:R}}=s.value;return{"--n-height":re,"--n-action-divider-color":he,"--n-action-text-color":Oe,"--n-bezier":S,"--n-border-radius":ce,"--n-color":ge,"--n-option-font-size":me,"--n-group-header-text-color":ue,"--n-option-check-color":Te,"--n-option-color-pending":We,"--n-option-color-active":De,"--n-option-color-active-pending":$e,"--n-option-height":p,"--n-option-opacity-disabled":He,"--n-option-text-color":xe,"--n-option-text-color-active":Ne,"--n-option-text-color-disabled":Ce,"--n-option-text-color-pressed":Re,"--n-option-padding":R,"--n-option-padding-left":_e(R,"left"),"--n-option-padding-right":_e(R,"right"),"--n-loading-color":Ve,"--n-loading-size":Me}}),{inlineThemeDisabled:te}=e,ne=te?Le("internal-select-menu",E(()=>e.size[0]),ee,e):void 0,ie={selfRef:i,next:O,prev:j,getPendingTmNode:L};return Zt(i,e.onResize),Object.assign({mergedTheme:s,mergedClsPrefix:t,rtlEnabled:r,virtualListRef:l,scrollbarRef:d,itemSize:m,padding:I,flattenedNodes:c,empty:z,mergedRenderEmpty:M,virtualListContainer(){const{value:g}=l;return g==null?void 0:g.listElRef},virtualListContent(){const{value:g}=l;return g==null?void 0:g.itemsElRef},doScroll:w,handleFocusin:oe,handleFocusout:W,handleKeyUp:U,handleKeyDown:Q,handleMouseDown:b,handleVirtualListResize:H,handleVirtualListScroll:$,cssVars:te?void 0:ee,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender},ie)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:r,onRender:s}=this;return s==null||s(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,r,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},ye(e.header,i=>i&&f("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},i)),this.loading?f("div",{class:`${n}-base-select-menu__loading`},f(jt,{clsPrefix:n,strokeWidth:20})):this.empty?f("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},En(e.empty,()=>{var i;return[((i=this.mergedRenderEmpty)===null||i===void 0?void 0:i.call(this))||f(Wo,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty,size:this.size})]})):f(_n,Object.assign({ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?f(lo,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:i})=>i.isGroup?f(Lt,{key:i.key,clsPrefix:n,tmNode:i}):i.ignored?null:f(Nt,{clsPrefix:n,key:i.key,tmNode:i})}):f("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(i=>i.isGroup?f(Lt,{key:i.key,clsPrefix:n,tmNode:i}):f(Nt,{clsPrefix:n,key:i.key,tmNode:i})))}),ye(e.action,i=>i&&[f("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},i),f(uo,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Go={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function qo(e){const{textColor2:t,primaryColorHover:n,primaryColorPressed:o,primaryColor:r,infoColor:s,successColor:i,warningColor:l,errorColor:d,baseColor:c,borderColor:u,opacityDisabled:h,tagColor:x,closeIconColor:k,closeIconColorHover:v,closeIconColorPressed:m,borderRadiusSmall:I,fontSizeMini:T,fontSizeTiny:z,fontSizeSmall:M,fontSizeMedium:y,heightMini:w,heightTiny:$,heightSmall:H,heightMedium:L,closeColorHover:F,closeColorPressed:_,buttonColor2Hover:U,buttonColor2Pressed:Q,fontWeightStrong:b}=e;return Object.assign(Object.assign({},Go),{closeBorderRadius:I,heightTiny:w,heightSmall:$,heightMedium:H,heightLarge:L,borderRadius:I,opacityDisabled:h,fontSizeTiny:T,fontSizeSmall:z,fontSizeMedium:M,fontSizeLarge:y,fontWeightStrong:b,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:U,colorPressedCheckable:Q,colorChecked:r,colorCheckedHover:n,colorCheckedPressed:o,border:`1px solid ${u}`,textColor:t,color:x,colorBordered:"rgb(250, 250, 252)",closeIconColor:k,closeIconColorHover:v,closeIconColorPressed:m,closeColorHover:F,closeColorPressed:_,borderPrimary:`1px solid ${X(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:X(r,{alpha:.12}),colorBorderedPrimary:X(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:X(r,{alpha:.12}),closeColorPressedPrimary:X(r,{alpha:.18}),borderInfo:`1px solid ${X(s,{alpha:.3})}`,textColorInfo:s,colorInfo:X(s,{alpha:.12}),colorBorderedInfo:X(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:X(s,{alpha:.12}),closeColorPressedInfo:X(s,{alpha:.18}),borderSuccess:`1px solid ${X(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:X(i,{alpha:.12}),colorBorderedSuccess:X(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:X(i,{alpha:.12}),closeColorPressedSuccess:X(i,{alpha:.18}),borderWarning:`1px solid ${X(l,{alpha:.35})}`,textColorWarning:l,colorWarning:X(l,{alpha:.15}),colorBorderedWarning:X(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:X(l,{alpha:.12}),closeColorPressedWarning:X(l,{alpha:.18}),borderError:`1px solid ${X(d,{alpha:.23})}`,textColorError:d,colorError:X(d,{alpha:.1}),colorBorderedError:X(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:X(d,{alpha:.12}),closeColorPressedError:X(d,{alpha:.18})})}const Xo={common:Ee,self:qo},Yo={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},Zo=K("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Z("strong",`
 font-weight: var(--n-font-weight-strong);
 `),P("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),P("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),P("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),P("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Z("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[P("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),P("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Z("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Z("icon, avatar",[Z("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Z("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Z("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ke("disabled",[de("&:hover","background-color: var(--n-color-hover-checkable);",[ke("checked","color: var(--n-text-color-hover-checkable);")]),de("&:active","background-color: var(--n-color-pressed-checkable);",[ke("checked","color: var(--n-text-color-pressed-checkable);")])]),Z("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ke("disabled",[de("&:hover","background-color: var(--n-color-checked-hover);"),de("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Jo=Object.assign(Object.assign(Object.assign({},pe.props),Yo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Qo=Ln("n-tag"),bt=ve({name:"Tag",props:Jo,slots:Object,setup(e){const t=A(null),{mergedBorderedRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:s,mergedComponentPropsRef:i}=Ae(e),l=E(()=>{var m,I;return e.size||((I=(m=i==null?void 0:i.value)===null||m===void 0?void 0:m.Tag)===null||I===void 0?void 0:I.size)||"medium"}),d=pe("Tag","-tag",Zo,Xo,e,o);tt(Qo,{roundRef:ae(e,"round")});function c(){if(!e.disabled&&e.checkable){const{checked:m,onCheckedChange:I,onUpdateChecked:T,"onUpdate:checked":z}=e;T&&T(!m),z&&z(!m),I&&I(!m)}}function u(m){if(e.triggerClickOnClose||m.stopPropagation(),!e.disabled){const{onClose:I}=e;I&&fe(I,m)}}const h={setTextContent(m){const{value:I}=t;I&&(I.textContent=m)}},x=kt("Tag",s,o),k=E(()=>{const{type:m,color:{color:I,textColor:T}={}}=e,z=l.value,{common:{cubicBezierEaseInOut:M},self:{padding:y,closeMargin:w,borderRadius:$,opacityDisabled:H,textColorCheckable:L,textColorHoverCheckable:F,textColorPressedCheckable:_,textColorChecked:U,colorCheckable:Q,colorHoverCheckable:b,colorPressedCheckable:O,colorChecked:j,colorCheckedHover:q,colorCheckedPressed:Y,closeBorderRadius:oe,fontWeightStrong:W,[J("colorBordered",m)]:ee,[J("closeSize",z)]:te,[J("closeIconSize",z)]:ne,[J("fontSize",z)]:ie,[J("height",z)]:g,[J("color",m)]:S,[J("textColor",m)]:re,[J("border",m)]:ce,[J("closeIconColor",m)]:ge,[J("closeIconColorHover",m)]:ue,[J("closeIconColorPressed",m)]:he,[J("closeColorHover",m)]:Re,[J("closeColorPressed",m)]:xe}}=d.value,Ce=_e(w);return{"--n-font-weight-strong":W,"--n-avatar-size-override":`calc(${g} - 8px)`,"--n-bezier":M,"--n-border-radius":$,"--n-border":ce,"--n-close-icon-size":ne,"--n-close-color-pressed":xe,"--n-close-color-hover":Re,"--n-close-border-radius":oe,"--n-close-icon-color":ge,"--n-close-icon-color-hover":ue,"--n-close-icon-color-pressed":he,"--n-close-icon-color-disabled":ge,"--n-close-margin-top":Ce.top,"--n-close-margin-right":Ce.right,"--n-close-margin-bottom":Ce.bottom,"--n-close-margin-left":Ce.left,"--n-close-size":te,"--n-color":I||(n.value?ee:S),"--n-color-checkable":Q,"--n-color-checked":j,"--n-color-checked-hover":q,"--n-color-checked-pressed":Y,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":O,"--n-font-size":ie,"--n-height":g,"--n-opacity-disabled":H,"--n-padding":y,"--n-text-color":T||re,"--n-text-color-checkable":L,"--n-text-color-checked":U,"--n-text-color-hover-checkable":F,"--n-text-color-pressed-checkable":_}}),v=r?Le("tag",E(()=>{let m="";const{type:I,color:{color:T,textColor:z}={}}=e;return m+=I[0],m+=l.value[0],T&&(m+=`a${Tt(T)}`),z&&(m+=`b${Tt(z)}`),n.value&&(m+="c"),m}),k,e):void 0;return Object.assign(Object.assign({},h),{rtlEnabled:x,mergedClsPrefix:o,contentRef:t,mergedBordered:n,handleClick:c,handleCloseClick:u,cssVars:r?void 0:k,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:o,closable:r,color:{borderColor:s}={},round:i,onRender:l,$slots:d}=this;l==null||l();const c=ye(d.avatar,h=>h&&f("div",{class:`${n}-tag__avatar`},h)),u=ye(d.icon,h=>h&&f("div",{class:`${n}-tag__icon`},h));return f("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:o,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:i,[`${n}-tag--avatar`]:c,[`${n}-tag--icon`]:u,[`${n}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||c,f("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&r?f(An,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?f("div",{class:`${n}-tag__border`,style:{borderColor:s}}):null)}}),er={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};function tr(e){const{borderRadius:t,textColor2:n,textColorDisabled:o,inputColor:r,inputColorDisabled:s,primaryColor:i,primaryColorHover:l,warningColor:d,warningColorHover:c,errorColor:u,errorColorHover:h,borderColor:x,iconColor:k,iconColorDisabled:v,clearColor:m,clearColorHover:I,clearColorPressed:T,placeholderColor:z,placeholderColorDisabled:M,fontSizeTiny:y,fontSizeSmall:w,fontSizeMedium:$,fontSizeLarge:H,heightTiny:L,heightSmall:F,heightMedium:_,heightLarge:U,fontWeight:Q}=e;return Object.assign(Object.assign({},er),{fontSizeTiny:y,fontSizeSmall:w,fontSizeMedium:$,fontSizeLarge:H,heightTiny:L,heightSmall:F,heightMedium:_,heightLarge:U,borderRadius:t,fontWeight:Q,textColor:n,textColorDisabled:o,placeholderColor:z,placeholderColorDisabled:M,color:r,colorDisabled:s,colorActive:r,border:`1px solid ${x}`,borderHover:`1px solid ${l}`,borderActive:`1px solid ${i}`,borderFocus:`1px solid ${l}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${X(i,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${X(i,{alpha:.2})}`,caretColor:i,arrowColor:k,arrowColorDisabled:v,loadingColor:i,borderWarning:`1px solid ${d}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${d}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${X(d,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${X(d,{alpha:.2})}`,colorActiveWarning:r,caretColorWarning:d,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${h}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${h}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${X(u,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${X(u,{alpha:.2})}`,colorActiveError:r,caretColorError:u,clearColor:m,clearColorHover:I,clearColorPressed:T})}const nn=St({name:"InternalSelection",common:Ee,peers:{Popover:Xn},self:tr}),nr=de([K("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[K("base-loading",`
 color: var(--n-loading-color);
 `),K("base-selection-tags","min-height: var(--n-height);"),P("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),P("state-border",`
 z-index: 1;
 border-color: #0000;
 `),K("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[P("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),K("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[P("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),K("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[P("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),K("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),K("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[K("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[P("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),P("render-label",`
 color: var(--n-text-color);
 `)]),ke("disabled",[de("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Z("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Z("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),K("base-selection-label","background-color: var(--n-color-active);"),K("base-selection-tags","background-color: var(--n-color-active);")])]),Z("disabled","cursor: not-allowed;",[P("arrow",`
 color: var(--n-arrow-color-disabled);
 `),K("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[K("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),P("render-label",`
 color: var(--n-text-color-disabled);
 `)]),K("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),K("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),K("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[P("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),P("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Z(`${e}-status`,[P("state-border",`border: var(--n-border-${e});`),ke("disabled",[de("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Z("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),K("base-selection-label",`background-color: var(--n-color-active-${e});`),K("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Z("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),K("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),K("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[de("&:last-child","padding-right: 0;"),K("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[P("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),or=ve({name:"InternalSelection",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=Ae(e),o=kt("InternalSelection",n,t),r=A(null),s=A(null),i=A(null),l=A(null),d=A(null),c=A(null),u=A(null),h=A(null),x=A(null),k=A(null),v=A(!1),m=A(!1),I=A(!1),T=pe("InternalSelection","-internal-selection",nr,nn,e,ae(e,"clsPrefix")),z=E(()=>e.clearable&&!e.disabled&&(I.value||e.active)),M=E(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Be(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),y=E(()=>{const p=e.selectedOption;if(p)return p[e.labelField]}),w=E(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function $(){var p;const{value:R}=r;if(R){const{value:le}=s;le&&(le.style.width=`${R.offsetWidth}px`,e.maxTagCount!=="responsive"&&((p=x.value)===null||p===void 0||p.sync({showAllItemsBeforeCalculate:!1})))}}function H(){const{value:p}=k;p&&(p.style.display="none")}function L(){const{value:p}=k;p&&(p.style.display="inline-block")}Ie(ae(e,"active"),p=>{p||H()}),Ie(ae(e,"pattern"),()=>{e.multiple&&wt($)});function F(p){const{onFocus:R}=e;R&&R(p)}function _(p){const{onBlur:R}=e;R&&R(p)}function U(p){const{onDeleteOption:R}=e;R&&R(p)}function Q(p){const{onClear:R}=e;R&&R(p)}function b(p){const{onPatternInput:R}=e;R&&R(p)}function O(p){var R;(!p.relatedTarget||!(!((R=i.value)===null||R===void 0)&&R.contains(p.relatedTarget)))&&F(p)}function j(p){var R;!((R=i.value)===null||R===void 0)&&R.contains(p.relatedTarget)||_(p)}function q(p){Q(p)}function Y(){I.value=!0}function oe(){I.value=!1}function W(p){!e.active||!e.filterable||p.target!==s.value&&p.preventDefault()}function ee(p){U(p)}const te=A(!1);function ne(p){if(p.key==="Backspace"&&!te.value&&!e.pattern.length){const{selectedOptions:R}=e;R!=null&&R.length&&ee(R[R.length-1])}}let ie=null;function g(p){const{value:R}=r;if(R){const le=p.target.value;R.textContent=le,$()}e.ignoreComposition&&te.value?ie=p:b(p)}function S(){te.value=!0}function re(){te.value=!1,e.ignoreComposition&&b(ie),ie=null}function ce(p){var R;m.value=!0,(R=e.onPatternFocus)===null||R===void 0||R.call(e,p)}function ge(p){var R;m.value=!1,(R=e.onPatternBlur)===null||R===void 0||R.call(e,p)}function ue(){var p,R;if(e.filterable)m.value=!1,(p=c.value)===null||p===void 0||p.blur(),(R=s.value)===null||R===void 0||R.blur();else if(e.multiple){const{value:le}=l;le==null||le.blur()}else{const{value:le}=d;le==null||le.blur()}}function he(){var p,R,le;e.filterable?(m.value=!1,(p=c.value)===null||p===void 0||p.focus()):e.multiple?(R=l.value)===null||R===void 0||R.focus():(le=d.value)===null||le===void 0||le.focus()}function Re(){const{value:p}=s;p&&(L(),p.focus())}function xe(){const{value:p}=s;p&&p.blur()}function Ce(p){const{value:R}=u;R&&R.setTextContent(`+${p}`)}function Ne(){const{value:p}=h;return p}function He(){return s.value}let Te=null;function Oe(){Te!==null&&window.clearTimeout(Te)}function We(){e.active||(Oe(),Te=window.setTimeout(()=>{w.value&&(v.value=!0)},100))}function De(){Oe()}function Ve(p){p||(Oe(),v.value=!1)}Ie(w,p=>{p||(v.value=!1)}),Ue(()=>{Wn(()=>{const p=c.value;p&&(e.disabled?p.removeAttribute("tabindex"):p.tabIndex=m.value?-1:0)})}),Zt(i,e.onResize);const{inlineThemeDisabled:Me}=e,$e=E(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:R},self:{fontWeight:le,borderRadius:rt,color:it,placeholderColor:lt,textColor:Ge,paddingSingle:qe,paddingMultiple:Xe,caretColor:at,colorDisabled:st,textColorDisabled:Ye,placeholderColorDisabled:ze,colorActive:a,boxShadowFocus:C,boxShadowActive:B,boxShadowHover:V,border:N,borderFocus:D,borderHover:G,borderActive:se,arrowColor:we,arrowColorDisabled:rn,loadingColor:ln,colorActiveWarning:an,boxShadowFocusWarning:sn,boxShadowActiveWarning:dn,boxShadowHoverWarning:cn,borderWarning:un,borderFocusWarning:hn,borderHoverWarning:fn,borderActiveWarning:vn,colorActiveError:gn,boxShadowFocusError:bn,boxShadowActiveError:pn,boxShadowHoverError:mn,borderError:yn,borderFocusError:xn,borderHoverError:Cn,borderActiveError:wn,clearColor:Sn,clearColorHover:kn,clearColorPressed:Rn,clearSize:zn,arrowSize:Pn,[J("height",p)]:Tn,[J("fontSize",p)]:On}}=T.value,Ze=_e(qe),Je=_e(Xe);return{"--n-bezier":R,"--n-border":N,"--n-border-active":se,"--n-border-focus":D,"--n-border-hover":G,"--n-border-radius":rt,"--n-box-shadow-active":B,"--n-box-shadow-focus":C,"--n-box-shadow-hover":V,"--n-caret-color":at,"--n-color":it,"--n-color-active":a,"--n-color-disabled":st,"--n-font-size":On,"--n-height":Tn,"--n-padding-single-top":Ze.top,"--n-padding-multiple-top":Je.top,"--n-padding-single-right":Ze.right,"--n-padding-multiple-right":Je.right,"--n-padding-single-left":Ze.left,"--n-padding-multiple-left":Je.left,"--n-padding-single-bottom":Ze.bottom,"--n-padding-multiple-bottom":Je.bottom,"--n-placeholder-color":lt,"--n-placeholder-color-disabled":ze,"--n-text-color":Ge,"--n-text-color-disabled":Ye,"--n-arrow-color":we,"--n-arrow-color-disabled":rn,"--n-loading-color":ln,"--n-color-active-warning":an,"--n-box-shadow-focus-warning":sn,"--n-box-shadow-active-warning":dn,"--n-box-shadow-hover-warning":cn,"--n-border-warning":un,"--n-border-focus-warning":hn,"--n-border-hover-warning":fn,"--n-border-active-warning":vn,"--n-color-active-error":gn,"--n-box-shadow-focus-error":bn,"--n-box-shadow-active-error":pn,"--n-box-shadow-hover-error":mn,"--n-border-error":yn,"--n-border-focus-error":xn,"--n-border-hover-error":Cn,"--n-border-active-error":wn,"--n-clear-size":zn,"--n-clear-color":Sn,"--n-clear-color-hover":kn,"--n-clear-color-pressed":Rn,"--n-arrow-size":Pn,"--n-font-weight":le}}),me=Me?Le("internal-selection",E(()=>e.size[0]),$e,e):void 0;return{mergedTheme:T,mergedClearable:z,mergedClsPrefix:t,rtlEnabled:o,patternInputFocused:m,filterablePlaceholder:M,label:y,selected:w,showTagsPanel:v,isComposing:te,counterRef:u,counterWrapperRef:h,patternInputMirrorRef:r,patternInputRef:s,selfRef:i,multipleElRef:l,singleElRef:d,patternInputWrapperRef:c,overflowRef:x,inputTagElRef:k,handleMouseDown:W,handleFocusin:O,handleClear:q,handleMouseEnter:Y,handleMouseLeave:oe,handleDeleteOption:ee,handlePatternKeyDown:ne,handlePatternInputInput:g,handlePatternInputBlur:ge,handlePatternInputFocus:ce,handleMouseEnterCounter:We,handleMouseLeaveCounter:De,handleFocusout:j,handleCompositionEnd:re,handleCompositionStart:S,onPopoverUpdateShow:Ve,focus:he,focusInput:Re,blur:ue,blurInput:xe,updateCounter:Ce,getCounter:Ne,getTail:He,renderLabel:e.renderLabel,cssVars:Me?void 0:$e,themeClass:me==null?void 0:me.themeClass,onRender:me==null?void 0:me.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:r,maxTagCount:s,bordered:i,clsPrefix:l,ellipsisTagPopoverProps:d,onRender:c,renderTag:u,renderLabel:h}=this;c==null||c();const x=s==="responsive",k=typeof s=="number",v=x||k,m=f(Nn,null,{default:()=>f(no,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var T,z;return(z=(T=this.$slots).arrow)===null||z===void 0?void 0:z.call(T)}})});let I;if(t){const{labelField:T}=this,z=b=>f("div",{class:`${l}-base-selection-tag-wrapper`,key:b.value},u?u({option:b,handleClose:()=>{this.handleDeleteOption(b)}}):f(bt,{size:n,closable:!b.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(b)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(b,!0):Be(b[T],b,!0)})),M=()=>(k?this.selectedOptions.slice(0,s):this.selectedOptions).map(z),y=r?f("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),f("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,w=x?()=>f("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},f(bt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let $;if(k){const b=this.selectedOptions.length-s;b>0&&($=f("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},f(bt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${b}`})))}const H=x?r?f(Bt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:w,tail:()=>y}):f(Bt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:w}):k&&$?M().concat($):M(),L=v?()=>f("div",{class:`${l}-base-selection-popover`},x?M():this.selectedOptions.map(z)):void 0,F=v?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},d):null,U=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},f("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,Q=r?f("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},H,x?null:y,m):f("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:o?void 0:0},H,m);I=f(Hn,null,v?f(Yn,Object.assign({},F,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Q,default:L}):Q,U)}else if(r){const T=this.pattern||this.isComposing,z=this.active?!T:!this.selected,M=this.active?!1:this.selected;I=f("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:_t(this.label)},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),M?f("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},f("div",{class:`${l}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Be(this.label,this.selectedOption,!0))):null,z?f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else I=f("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?f("div",{class:`${l}-base-selection-input`,title:_t(this.label),key:"input"},f("div",{class:`${l}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Be(this.label,this.selectedOption,!0))):f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),m);return f("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},I,i?f("div",{class:`${l}-base-selection__border`}):null,i?f("div",{class:`${l}-base-selection__state-border`}):null)}});function ot(e){return e.type==="group"}function on(e){return e.type==="ignored"}function pt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function rr(e,t){return{getIsGroup:ot,getIgnored:on,getKey(o){return ot(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function ir(e,t,n,o){if(!t)return e;function r(s){if(!Array.isArray(s))return[];const i=[];for(const l of s)if(ot(l)){const d=r(l[o]);d.length&&i.push(Object.assign({},l,{[o]:d}))}else{if(on(l))continue;t(n,l)&&i.push(l)}return i}return r(e)}function lr(e,t,n){const o=new Map;return e.forEach(r=>{ot(r)?r[n].forEach(s=>{o.set(s[t],s)}):o.set(r[t],r)}),o}function ar(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const sr=St({name:"Select",common:Ee,peers:{InternalSelection:nn,InternalSelectMenu:tn},self:ar}),dr=de([K("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),K("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Gt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),cr=Object.assign(Object.assign({},pe.props),{to:yt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),yr=ve({name:"Select",props:cr,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:r,mergedComponentPropsRef:s}=Ae(e),i=pe("Select","-select",dr,sr,e,t),l=A(e.defaultValue),d=ae(e,"value"),c=mt(d,l),u=A(!1),h=A(""),x=to(e,["items","options"]),k=A([]),v=A([]),m=E(()=>v.value.concat(k.value).concat(x.value)),I=E(()=>{const{filter:a}=e;if(a)return a;const{labelField:C,valueField:B}=e;return(V,N)=>{if(!N)return!1;const D=N[C];if(typeof D=="string")return pt(V,D);const G=N[B];return typeof G=="string"?pt(V,G):typeof G=="number"?pt(V,String(G)):!1}}),T=E(()=>{if(e.remote)return x.value;{const{value:a}=m,{value:C}=h;return!C.length||!e.filterable?a:ir(a,I.value,C,e.childrenField)}}),z=E(()=>{const{valueField:a,childrenField:C}=e,B=rr(a,C);return Eo(T.value,B)}),M=E(()=>lr(m.value,e.valueField,e.childrenField)),y=A(!1),w=mt(ae(e,"show"),y),$=A(null),H=A(null),L=A(null),{localeRef:F}=qt("Select"),_=E(()=>{var a;return(a=e.placeholder)!==null&&a!==void 0?a:F.value.placeholder}),U=[],Q=A(new Map),b=E(()=>{const{fallbackOption:a}=e;if(a===void 0){const{labelField:C,valueField:B}=e;return V=>({[C]:String(V),[B]:V})}return a===!1?!1:C=>Object.assign(a(C),{value:C})});function O(a){const C=e.remote,{value:B}=Q,{value:V}=M,{value:N}=b,D=[];return a.forEach(G=>{if(V.has(G))D.push(V.get(G));else if(C&&B.has(G))D.push(B.get(G));else if(N){const se=N(G);se&&D.push(se)}}),D}const j=E(()=>{if(e.multiple){const{value:a}=c;return Array.isArray(a)?O(a):[]}return null}),q=E(()=>{const{value:a}=c;return!e.multiple&&!Array.isArray(a)?a===null?null:O([a])[0]||null:null}),Y=Kt(e,{mergedSize:a=>{var C,B;const{size:V}=e;if(V)return V;const{mergedSize:N}=a||{};if(N!=null&&N.value)return N.value;const D=(B=(C=s==null?void 0:s.value)===null||C===void 0?void 0:C.Select)===null||B===void 0?void 0:B.size;return D||"medium"}}),{mergedSizeRef:oe,mergedDisabledRef:W,mergedStatusRef:ee}=Y;function te(a,C){const{onChange:B,"onUpdate:value":V,onUpdateValue:N}=e,{nTriggerFormChange:D,nTriggerFormInput:G}=Y;B&&fe(B,a,C),N&&fe(N,a,C),V&&fe(V,a,C),l.value=a,D(),G()}function ne(a){const{onBlur:C}=e,{nTriggerFormBlur:B}=Y;C&&fe(C,a),B()}function ie(){const{onClear:a}=e;a&&fe(a)}function g(a){const{onFocus:C,showOnFocus:B}=e,{nTriggerFormFocus:V}=Y;C&&fe(C,a),V(),B&&ue()}function S(a){const{onSearch:C}=e;C&&fe(C,a)}function re(a){const{onScroll:C}=e;C&&fe(C,a)}function ce(){var a;const{remote:C,multiple:B}=e;if(C){const{value:V}=Q;if(B){const{valueField:N}=e;(a=j.value)===null||a===void 0||a.forEach(D=>{V.set(D[N],D)})}else{const N=q.value;N&&V.set(N[e.valueField],N)}}}function ge(a){const{onUpdateShow:C,"onUpdate:show":B}=e;C&&fe(C,a),B&&fe(B,a),y.value=a}function ue(){W.value||(ge(!0),y.value=!0,e.filterable&&Xe())}function he(){ge(!1)}function Re(){h.value="",v.value=U}const xe=A(!1);function Ce(){e.filterable&&(xe.value=!0)}function Ne(){e.filterable&&(xe.value=!1,w.value||Re())}function He(){W.value||(w.value?e.filterable?Xe():he():ue())}function Te(a){var C,B;!((B=(C=L.value)===null||C===void 0?void 0:C.selfRef)===null||B===void 0)&&B.contains(a.relatedTarget)||(u.value=!1,ne(a),he())}function Oe(a){g(a),u.value=!0}function We(){u.value=!0}function De(a){var C;!((C=$.value)===null||C===void 0)&&C.$el.contains(a.relatedTarget)||(u.value=!1,ne(a),he())}function Ve(){var a;(a=$.value)===null||a===void 0||a.focus(),he()}function Me(a){var C;w.value&&(!((C=$.value)===null||C===void 0)&&C.$el.contains(Kn(a))||he())}function $e(a){if(!Array.isArray(a))return[];if(b.value)return Array.from(a);{const{remote:C}=e,{value:B}=M;if(C){const{value:V}=Q;return a.filter(N=>B.has(N)||V.has(N))}else return a.filter(V=>B.has(V))}}function me(a){p(a.rawNode)}function p(a){if(W.value)return;const{tag:C,remote:B,clearFilterAfterSelect:V,valueField:N}=e;if(C&&!B){const{value:D}=v,G=D[0]||null;if(G){const se=k.value;se.length?se.push(G):k.value=[G],v.value=U}}if(B&&Q.value.set(a[N],a),e.multiple){const D=$e(c.value),G=D.findIndex(se=>se===a[N]);if(~G){if(D.splice(G,1),C&&!B){const se=R(a[N]);~se&&(k.value.splice(se,1),V&&(h.value=""))}}else D.push(a[N]),V&&(h.value="");te(D,O(D))}else{if(C&&!B){const D=R(a[N]);~D?k.value=[k.value[D]]:k.value=U}qe(),he(),te(a[N],a)}}function R(a){return k.value.findIndex(B=>B[e.valueField]===a)}function le(a){w.value||ue();const{value:C}=a.target;h.value=C;const{tag:B,remote:V}=e;if(S(C),B&&!V){if(!C){v.value=U;return}const{onCreate:N}=e,D=N?N(C):{[e.labelField]:C,[e.valueField]:C},{valueField:G,labelField:se}=e;x.value.some(we=>we[G]===D[G]||we[se]===D[se])||k.value.some(we=>we[G]===D[G]||we[se]===D[se])?v.value=U:v.value=[D]}}function rt(a){a.stopPropagation();const{multiple:C,tag:B,remote:V,clearCreatedOptionsOnClear:N}=e;!C&&e.filterable&&he(),B&&!V&&N&&(k.value=U),ie(),C?te([],[]):te(null,null)}function it(a){!Ke(a,"action")&&!Ke(a,"empty")&&!Ke(a,"header")&&a.preventDefault()}function lt(a){re(a)}function Ge(a){var C,B,V,N,D;if(!e.keyboard){a.preventDefault();return}switch(a.key){case" ":if(e.filterable)break;a.preventDefault();case"Enter":if(!(!((C=$.value)===null||C===void 0)&&C.isComposing)){if(w.value){const G=(B=L.value)===null||B===void 0?void 0:B.getPendingTmNode();G?me(G):e.filterable||(he(),qe())}else if(ue(),e.tag&&xe.value){const G=v.value[0];if(G){const se=G[e.valueField],{value:we}=c;e.multiple&&Array.isArray(we)&&we.includes(se)||p(G)}}}a.preventDefault();break;case"ArrowUp":if(a.preventDefault(),e.loading)return;w.value&&((V=L.value)===null||V===void 0||V.prev());break;case"ArrowDown":if(a.preventDefault(),e.loading)return;w.value?(N=L.value)===null||N===void 0||N.next():ue();break;case"Escape":w.value&&(eo(a),he()),(D=$.value)===null||D===void 0||D.focus();break}}function qe(){var a;(a=$.value)===null||a===void 0||a.focus()}function Xe(){var a;(a=$.value)===null||a===void 0||a.focusInput()}function at(){var a;w.value&&((a=H.value)===null||a===void 0||a.syncPosition())}ce(),Ie(ae(e,"options"),ce);const st={focus:()=>{var a;(a=$.value)===null||a===void 0||a.focus()},focusInput:()=>{var a;(a=$.value)===null||a===void 0||a.focusInput()},blur:()=>{var a;(a=$.value)===null||a===void 0||a.blur()},blurInput:()=>{var a;(a=$.value)===null||a===void 0||a.blurInput()}},Ye=E(()=>{const{self:{menuBoxShadow:a}}=i.value;return{"--n-menu-box-shadow":a}}),ze=r?Le("select",void 0,Ye,e):void 0;return Object.assign(Object.assign({},st),{mergedStatus:ee,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:z,isMounted:jn(),triggerRef:$,menuRef:L,pattern:h,uncontrolledShow:y,mergedShow:w,adjustedTo:yt(e),uncontrolledValue:l,mergedValue:c,followerRef:H,localizedPlaceholder:_,selectedOption:q,selectedOptions:j,mergedSize:oe,mergedDisabled:W,focused:u,activeWithoutMenuOpen:xe,inlineThemeDisabled:r,onTriggerInputFocus:Ce,onTriggerInputBlur:Ne,handleTriggerOrMenuResize:at,handleMenuFocus:We,handleMenuBlur:De,handleMenuTabOut:Ve,handleTriggerClick:He,handleToggle:me,handleDeleteOption:p,handlePatternInput:le,handleClear:rt,handleTriggerBlur:Te,handleTriggerFocus:Oe,handleKeydown:Ge,handleMenuAfterLeave:Re,handleMenuClickOutside:Me,handleMenuScroll:lt,handleMenuKeydown:Ge,handleMenuMousedown:it,mergedTheme:i,cssVars:r?void 0:Ye,themeClass:ze==null?void 0:ze.themeClass,onRender:ze==null?void 0:ze.onRender})},render(){return f("div",{class:`${this.mergedClsPrefix}-select`},f(Zn,null,{default:()=>[f(Jn,null,{default:()=>f(or,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),f(Qn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===yt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>f(Vt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Dn(f(Uo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var o,r;return[(r=(o=this.$slots).empty)===null||r===void 0?void 0:r.call(o)]},header:()=>{var o,r;return[(r=(o=this.$slots).header)===null||r===void 0?void 0:r.call(o)]},action:()=>{var o,r;return[(r=(o=this.$slots).action)===null||r===void 0?void 0:r.call(o)]}}),this.displayDirective==="show"?[[Vn,this.mergedShow],[Ft,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ft,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),ur={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};function hr(e){const{primaryColor:t,opacityDisabled:n,borderRadius:o,textColor3:r}=e;return Object.assign(Object.assign({},ur),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:n,railColor:"rgba(0, 0, 0, .14)",railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${X(t,{alpha:.2})}`})}const fr={common:Ee,self:hr},vr=K("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[P("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),P("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),P("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),K("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Ot({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),P("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),P("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),P("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),de("&:focus",[P("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),Z("round",[P("rail","border-radius: calc(var(--n-rail-height) / 2);",[P("button","border-radius: calc(var(--n-button-height) / 2);")])]),ke("disabled",[ke("icon",[Z("rubber-band",[Z("pressed",[P("rail",[P("button","max-width: var(--n-button-width-pressed);")])]),P("rail",[de("&:active",[P("button","max-width: var(--n-button-width-pressed);")])]),Z("active",[Z("pressed",[P("rail",[P("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),P("rail",[de("&:active",[P("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),Z("active",[P("rail",[P("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),P("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[P("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Ot()]),P("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),Z("active",[P("rail","background-color: var(--n-rail-color-active);")]),Z("loading",[P("rail",`
 cursor: wait;
 `)]),Z("disabled",[P("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),gr=Object.assign(Object.assign({},pe.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]});let je;const xr=ve({name:"Switch",props:gr,slots:Object,setup(e){je===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?je=CSS.supports("width","max(1px)"):je=!1:je=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:o}=Ae(e),r=pe("Switch","-switch",vr,fr,e,t),s=Kt(e,{mergedSize(F){var _,U;if(e.size!==void 0)return e.size;if(F)return F.mergedSize.value;const Q=(U=(_=o==null?void 0:o.value)===null||_===void 0?void 0:_.Switch)===null||U===void 0?void 0:U.size;return Q||"medium"}}),{mergedSizeRef:i,mergedDisabledRef:l}=s,d=A(e.defaultValue),c=ae(e,"value"),u=mt(c,d),h=E(()=>u.value===e.checkedValue),x=A(!1),k=A(!1),v=E(()=>{const{railStyle:F}=e;if(F)return F({focused:k.value,checked:h.value})});function m(F){const{"onUpdate:value":_,onChange:U,onUpdateValue:Q}=e,{nTriggerFormInput:b,nTriggerFormChange:O}=s;_&&fe(_,F),Q&&fe(Q,F),U&&fe(U,F),d.value=F,b(),O()}function I(){const{nTriggerFormFocus:F}=s;F()}function T(){const{nTriggerFormBlur:F}=s;F()}function z(){e.loading||l.value||(u.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue))}function M(){k.value=!0,I()}function y(){k.value=!1,T(),x.value=!1}function w(F){e.loading||l.value||F.key===" "&&(u.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue),x.value=!1)}function $(F){e.loading||l.value||F.key===" "&&(F.preventDefault(),x.value=!0)}const H=E(()=>{const{value:F}=i,{self:{opacityDisabled:_,railColor:U,railColorActive:Q,buttonBoxShadow:b,buttonColor:O,boxShadowFocus:j,loadingColor:q,textColor:Y,iconColor:oe,[J("buttonHeight",F)]:W,[J("buttonWidth",F)]:ee,[J("buttonWidthPressed",F)]:te,[J("railHeight",F)]:ne,[J("railWidth",F)]:ie,[J("railBorderRadius",F)]:g,[J("buttonBorderRadius",F)]:S},common:{cubicBezierEaseInOut:re}}=r.value;let ce,ge,ue;return je?(ce=`calc((${ne} - ${W}) / 2)`,ge=`max(${ne}, ${W})`,ue=`max(${ie}, calc(${ie} + ${W} - ${ne}))`):(ce=Pe((be(ne)-be(W))/2),ge=Pe(Math.max(be(ne),be(W))),ue=be(ne)>be(W)?ie:Pe(be(ie)+be(W)-be(ne))),{"--n-bezier":re,"--n-button-border-radius":S,"--n-button-box-shadow":b,"--n-button-color":O,"--n-button-width":ee,"--n-button-width-pressed":te,"--n-button-height":W,"--n-height":ge,"--n-offset":ce,"--n-opacity-disabled":_,"--n-rail-border-radius":g,"--n-rail-color":U,"--n-rail-color-active":Q,"--n-rail-height":ne,"--n-rail-width":ie,"--n-width":ue,"--n-box-shadow-focus":j,"--n-loading-color":q,"--n-text-color":Y,"--n-icon-color":oe}}),L=n?Le("switch",E(()=>i.value[0]),H,e):void 0;return{handleClick:z,handleBlur:y,handleFocus:M,handleKeyup:w,handleKeydown:$,mergedRailStyle:v,pressed:x,mergedClsPrefix:t,mergedValue:u,checked:h,mergedDisabled:l,cssVars:n?void 0:H,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:o,onRender:r,$slots:s}=this;r==null||r();const{checked:i,unchecked:l,icon:d,"checked-icon":c,"unchecked-icon":u}=s,h=!(ct(d)&&ct(c)&&ct(u));return f("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},f("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},ye(i,x=>ye(l,k=>x||k?f("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},f("div",{class:`${e}-switch__rail-placeholder`},f("div",{class:`${e}-switch__button-placeholder`}),x),f("div",{class:`${e}-switch__rail-placeholder`},f("div",{class:`${e}-switch__button-placeholder`}),k)):null)),f("div",{class:`${e}-switch__button`},ye(d,x=>ye(c,k=>ye(u,v=>f(Un,null,{default:()=>this.loading?f(jt,Object.assign({key:"loading",clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(k||x)?f("div",{class:`${e}-switch__button-icon`,key:k?"checked-icon":"icon"},k||x):!this.checked&&(v||x)?f("div",{class:`${e}-switch__button-icon`,key:v?"unchecked-icon":"icon"},v||x):null})))),ye(i,x=>x&&f("div",{key:"checked",class:`${e}-switch__checked`},x)),ye(l,x=>x&&f("div",{key:"unchecked",class:`${e}-switch__unchecked`},x)))))}});export{yr as N,xr as a};
