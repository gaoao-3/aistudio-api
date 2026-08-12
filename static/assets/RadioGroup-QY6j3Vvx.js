import{a6 as te,bf as D,i as re,ad as E,bb as M,r as k,ap as N,u as A,h as ne,t as V,aq as $,l as j,q as z,ak as ae,a7 as _,a9 as C,aa as S,a2 as T,a8 as H,ae as G,af as ie,ah as de,f as U,ax as P,p as se}from"./Icon.vue_vue_type_script_setup_true_lang-ubaGEFKU.js";import{A as le}from"./app-BRjXuR0T.js";function ue(e,o="default",t=[]){const a=e.$slots[o];return a===void 0?t:a()}const ce={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"};function be(e){const{borderColor:o,primaryColor:t,baseColor:i,textColorDisabled:a,inputColorDisabled:h,textColor2:s,opacityDisabled:l,borderRadius:u,fontSizeSmall:f,fontSizeMedium:g,fontSizeLarge:p,heightSmall:c,heightMedium:m,heightLarge:b,lineHeight:x}=e;return Object.assign(Object.assign({},ce),{labelLineHeight:x,buttonHeightSmall:c,buttonHeightMedium:m,buttonHeightLarge:b,fontSizeSmall:f,fontSizeMedium:g,fontSizeLarge:p,boxShadow:`inset 0 0 0 1px ${o}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${D(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${o}`,color:i,colorDisabled:h,colorActive:"#0000",textColor:s,textColorDisabled:a,dotColorActive:t,dotColorDisabled:o,buttonBorderColor:o,buttonBorderColorActive:t,buttonBorderColorHover:o,buttonColor:i,buttonColorActive:i,buttonTextColor:s,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:l,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${D(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:u})}const he={common:te,self:be},fe={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},L=ne("n-radio-group");function ve(e){const o=re(L,null),{mergedClsPrefixRef:t,mergedComponentPropsRef:i}=E(e),a=M(e,{mergedSize(r){var n,d;const{size:v}=e;if(v!==void 0)return v;if(o){const{mergedSizeRef:{value:I}}=o;if(I!==void 0)return I}if(r)return r.mergedSize.value;const F=(d=(n=i==null?void 0:i.value)===null||n===void 0?void 0:n.Radio)===null||d===void 0?void 0:d.size;return F||"medium"},mergedDisabled(r){return!!(e.disabled||o!=null&&o.disabledRef.value||r!=null&&r.disabled.value)}}),{mergedSizeRef:h,mergedDisabledRef:s}=a,l=k(null),u=k(null),f=k(e.defaultChecked),g=V(e,"checked"),p=N(g,f),c=A(()=>o?o.valueRef.value===e.value:p.value),m=A(()=>{const{name:r}=e;if(r!==void 0)return r;if(o)return o.nameRef.value}),b=k(!1);function x(){if(o){const{doUpdateValue:r}=o,{value:n}=e;$(r,n)}else{const{onUpdateChecked:r,"onUpdate:checked":n}=e,{nTriggerFormInput:d,nTriggerFormChange:v}=a;r&&$(r,!0),n&&$(n,!0),d(),v(),f.value=!0}}function B(){s.value||c.value||x()}function y(){B(),l.value&&(l.value.checked=c.value)}function w(){b.value=!1}function R(){b.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:t,inputRef:l,labelRef:u,mergedName:m,mergedDisabled:s,renderSafeChecked:c,focus:b,mergedSize:h,handleRadioInputChange:y,handleRadioInputBlur:w,handleRadioInputFocus:R}}const Re=j({name:"RadioButton",props:fe,setup:ve,render(){const{mergedClsPrefix:e}=this;return z("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},z("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),z("div",{class:`${e}-radio-button__state-border`}),ae(this.$slots.default,o=>!o&&!this.label?null:z("div",{ref:"labelRef",class:`${e}-radio__label`},o||this.label)))}}),ge=_("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[C("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[S("checked",{backgroundColor:"var(--n-button-border-color-active)"}),S("disabled",{opacity:"var(--n-opacity-disabled)"})]),S("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[_("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),C("splitor",{height:"var(--n-height)"})]),_("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[_("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),C("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),T("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[C("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),T("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[C("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),H("disabled",`
 cursor: pointer;
 `,[T("&:hover",[C("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),H("checked",{color:"var(--n-button-text-color-hover)"})]),S("focus",[T("&:not(:active)",[C("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),S("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),S("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function pe(e,o,t){var i;const a=[];let h=!1;for(let s=0;s<e.length;++s){const l=e[s],u=(i=l.type)===null||i===void 0?void 0:i.name;u==="RadioButton"&&(h=!0);const f=l.props;if(u!=="RadioButton"){a.push(l);continue}if(s===0)a.push(l);else{const g=a[a.length-1].props,p=o===g.value,c=g.disabled,m=o===f.value,b=f.disabled,x=(p?2:0)+(c?0:1),B=(m?2:0)+(b?0:1),y={[`${t}-radio-group__splitor--disabled`]:c,[`${t}-radio-group__splitor--checked`]:p},w={[`${t}-radio-group__splitor--disabled`]:b,[`${t}-radio-group__splitor--checked`]:m},R=x<B?w:y;a.push(z("div",{class:[`${t}-radio-group__splitor`,R]}),l)}}return{children:a,isButtonGroup:h}}const me=Object.assign(Object.assign({},G.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Se=j({name:"RadioGroup",props:me,setup(e){const o=k(null),{mergedSizeRef:t,mergedDisabledRef:i,nTriggerFormChange:a,nTriggerFormInput:h,nTriggerFormBlur:s,nTriggerFormFocus:l}=M(e),{mergedClsPrefixRef:u,inlineThemeDisabled:f,mergedRtlRef:g}=E(e),p=G("Radio","-radio-group",ge,he,e,u),c=k(e.defaultValue),m=V(e,"value"),b=N(m,c);function x(n){const{onUpdateValue:d,"onUpdate:value":v}=e;d&&$(d,n),v&&$(v,n),c.value=n,a(),h()}function B(n){const{value:d}=o;d&&(d.contains(n.relatedTarget)||l())}function y(n){const{value:d}=o;d&&(d.contains(n.relatedTarget)||s())}se(L,{mergedClsPrefixRef:u,nameRef:V(e,"name"),valueRef:b,disabledRef:i,mergedSizeRef:t,doUpdateValue:x});const w=ie("Radio",g,u),R=U(()=>{const{value:n}=t,{common:{cubicBezierEaseInOut:d},self:{buttonBorderColor:v,buttonBorderColorActive:F,buttonBorderRadius:I,buttonBoxShadow:O,buttonBoxShadowFocus:K,buttonBoxShadowHover:q,buttonColor:W,buttonColorActive:J,buttonTextColor:Q,buttonTextColorActive:X,buttonTextColorHover:Y,opacityDisabled:Z,[P("buttonHeight",n)]:ee,[P("fontSize",n)]:oe}}=p.value;return{"--n-font-size":oe,"--n-bezier":d,"--n-button-border-color":v,"--n-button-border-color-active":F,"--n-button-border-radius":I,"--n-button-box-shadow":O,"--n-button-box-shadow-focus":K,"--n-button-box-shadow-hover":q,"--n-button-color":W,"--n-button-color-active":J,"--n-button-text-color":Q,"--n-button-text-color-hover":Y,"--n-button-text-color-active":X,"--n-height":ee,"--n-opacity-disabled":Z}}),r=f?de("radio-group",U(()=>t.value[0]),R,e):void 0;return{selfElRef:o,rtlEnabled:w,mergedClsPrefix:u,mergedValue:b,handleFocusout:y,handleFocusin:B,cssVars:f?void 0:R,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:t,handleFocusin:i,handleFocusout:a}=this,{children:h,isButtonGroup:s}=pe(le(ue(this)),o,t);return(e=this.onRender)===null||e===void 0||e.call(this),z("div",{onFocusin:i,onFocusout:a,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,s&&`${t}-radio-group--button-group`],style:this.cssVars},h)}});export{Se as N,Re as a};
