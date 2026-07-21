import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BSnFy17d.js";import{p as ie}from"./primitive-colors-CqocY7XZ.js";import{s as t}from"./spacing-tokens-D0rW3Zez.js";import{a as ye,i as be,c as Nr,L as Wr,s as Ir,b as Vr}from"./ui-sizes-tokens-DV8X2A0Z.js";import{t as m,f as x,g as W,a as jr}from"./typography-tokens-DtjjMcdU.js";import{m as Tr,a as Br}from"./motion-tokens-Jd29rd68.js";import{r as te}from"./radius-tokens-D-KuzIVl.js";import{B as n}from"./Box-DmS7QK-Z.js";import{I as Rr}from"./InputBase-_14f0Rhn.js";import{X as _r}from"./x-D6V3VCLa.js";import{c as se}from"./createLucideIcon-VIERY1cO.js";import{C as qr}from"./chevron-down-BdnZffoU.js";import{U as kr}from"./user-BcLmEa3e.js";import"./createTheme-Dzku1811.js";import"./utils-qtldwDL5.js";import"./index-D63g48RC.js";import"./DefaultPropsProvider-ClZCZKfr.js";import"./useForkRef-DcxLCGpL.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-DxURyTVq.js";import"./isHostComponent-DVu5iVWx.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Cr=se("ChevronUp",zr);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],wr=se("EyeOff",$r);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Er=se("Eye",Lr);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Fr=se("Search",Pr),p=ie,Hr={sm:t[3],md:t[4],lg:t[4],xl:t[5]};function Ur(r,a){if(a)return p.red[50];switch(r){case"filled":return p.gray[100];case"soft":return p.blue[50];default:return"#ffffff"}}function Ie(r,a){if(a)return p.red[400];switch(r){case"outline":return p.gray[300];case"filled":return"transparent";case"soft":return p.blue[200];default:return p.gray[300]}}function Ve(r){return r?p.red[600]:p.blue[600]}const s=g.forwardRef(function({label:a,variant:o="outline",density:i="md",helperText:b,errorMessage:u,invalid:d=!1,loading:h=!1,fullWidth:v=!1,startAdornment:A,endAdornment:T,clearable:k=!1,onClear:z,inputRef:I,disabled:B,readOnly:N,id:P,value:C,defaultValue:F,onChange:R,sx:_,className:de,type:S="text",placeholder:V,hideNativeNumberSpinners:H=!1,...U},ue){const $=g.useId(),j=P??`sparing-input-${$}`,ce=`${j}-helper`,M=`${j}-error`,ve=g.useRef(null),mr=g.useCallback(c=>{ve.current=c,typeof I=="function"?I(c):I&&(I.current=c)},[I]),pe=C!==void 0,[fr,Se]=g.useState(()=>String(F??"").length),Ae=ye[i],xr=m[Ae.body].fontSize,q=be[Ae.icon],hr=g.useMemo(()=>{const c=[];return b&&c.push(ce),d&&u&&c.push(M),c.length?c.join(" "):void 0},[b,ce,d,u,M]),gr=pe?String(C??"").length>0:fr>0,yr=k&&!B&&!N&&!h&&gr,br=c=>{pe||Se(c.target.value.length),R==null||R(c)},vr=()=>{var We;const c=ve.current;if(c){const fe=(We=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value"))==null?void 0:We.set;fe==null||fe.call(c,""),c.dispatchEvent(new Event("input",{bubbles:!0}))}pe||Se(0),z==null||z()},me=`${Tr.short} ${Br.standard}`,Sr={display:"flex",alignItems:"center",gap:t[2],minHeight:Nr[i],px:Hr[i],borderRadius:te.sm,borderWidth:1,borderStyle:"solid",borderColor:Ie(o,d),backgroundColor:Ur(o,d),transition:`border-color ${me}, background-color ${me}, box-shadow ${me}`,boxSizing:"border-box",opacity:B?.55:1,pointerEvents:B?"none":"auto","&:focus-within":{outline:`2px solid ${Ve(d)}`,outlineOffset:2,borderColor:d?p.red[500]:o==="outline"?p.blue[500]:Ie(o,d)},...N&&{cursor:"default",backgroundColor:p.gray[50]}},Ar={flex:1,minWidth:0,fontFamily:jr.sans,fontSize:xr,fontWeight:x.regular,lineHeight:1.4,color:W.primary,"&:before":{display:"none"},"&:after":{border:"none"},"& input":{padding:0,font:"inherit",color:"inherit","&::placeholder":{color:p.gray[400],opacity:1}},"& input:disabled":{color:W.disabled,WebkitTextFillColor:W.disabled}},Ne=Ir(i);return e.jsxs(n,{ref:ue,className:de,sx:[{width:v?"100%":"auto"},H&&{'& input[type="number"]':{MozAppearance:"textfield"},'& input[type="number"]::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button':{WebkitAppearance:"none",margin:0}},...Array.isArray(_)?_:_?[_]:[]],children:[a!=null&&a!==!1&&e.jsx(n,{component:"label",htmlFor:j,sx:{display:"block",mb:t[1],fontSize:m.sm.fontSize,fontWeight:x.semibold,color:p.gray[800],lineHeight:1.35},children:a}),e.jsxs(n,{sx:Sr,children:[A!=null&&e.jsx(n,{"aria-hidden":!0,sx:{display:"flex",alignItems:"center",color:W.secondary,flexShrink:0,"& svg":{width:q,height:q}},children:A}),e.jsx(Rr,{id:j,sx:Ar,inputRef:mr,disabled:B,readOnly:N,fullWidth:!0,type:S,placeholder:V,value:C,defaultValue:F,onChange:br,inputProps:{"aria-invalid":d||void 0,"aria-describedby":hr,"aria-errormessage":d&&u?M:void 0,"aria-busy":h||void 0,"aria-readonly":N||void 0,...U}}),T!=null&&e.jsx(n,{sx:{display:"flex",alignItems:"center",color:W.secondary,flexShrink:0,"& svg":{width:q,height:q}},children:T}),yr&&e.jsx(n,{component:"button",type:"button",tabIndex:-1,onClick:vr,"aria-label":"Clear value",sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",p:t[1],m:0,border:"none",background:"transparent",borderRadius:te.xs,color:W.secondary,cursor:"pointer",flexShrink:0,"&:focus-visible":{outline:`2px solid ${Ve(d)}`,outlineOffset:1},"& svg":{width:q,height:q}},children:e.jsx(_r,{"aria-hidden":!0,strokeWidth:2.25})}),h&&e.jsx(Wr,{"aria-hidden":!0,style:{width:Ne,height:Ne,flexShrink:0,animation:"sparing-input-spin 0.75s linear infinite"},strokeWidth:2.25})]}),e.jsx("style",{children:"@keyframes sparing-input-spin { to { transform: rotate(360deg); } }"}),b!=null&&b!==!1&&e.jsx(n,{component:"p",id:ce,sx:{m:0,mt:t[1],fontSize:m.xs.fontSize,color:W.secondary,lineHeight:1.45},children:b}),d&&u!=null&&u!==!1&&e.jsx(n,{component:"p",id:M,role:"alert","aria-live":"polite",sx:{m:0,mt:t[1],fontSize:m.xs.fontSize,color:W.error,fontWeight:x.medium,lineHeight:1.45},children:u})]})});try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'},{value:'"soft"'}]}},density:{defaultValue:{value:"md"},description:"",name:"density",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:{value:"false"},description:"Sets `aria-invalid` and error styling when true",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},sx:{defaultValue:null,description:"Root box — use `inputRef` for the `<input>`",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},hideNativeNumberSpinners:{defaultValue:{value:"false"},description:'For `type="number"`: hide browser steppers when using a custom stepper',name:"hideNativeNumberSpinners",required:!1,type:{name:"boolean"}}}}}catch{}const le=ie;function je(r){return r?le.red[600]:le.blue[600]}function oe({step:r=1,min:a,max:o,showStepper:i=!0,endAdornment:b,density:u="md",invalid:d=!1,disabled:h,readOnly:v,inputRef:A,onChange:T,value:k,defaultValue:z,...I}){const B=ye[u],N=be[B.icon],P=g.useRef(null),C=g.useCallback(S=>{P.current=S,typeof A=="function"?A(S):A&&(A.current=S)},[A]),F=g.useCallback(S=>a!=null&&S<a?a:o!=null&&S>o?o:S,[a,o]),R=S=>{var j;if(h||v)return;const V=P.current;if(!V)return;const H=V.value,U=H===""?0:Number.parseFloat(H);if(Number.isNaN(U))return;const ue=F(U+S*r),$=(j=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value"))==null?void 0:j.set;$==null||$.call(V,String(ue)),V.dispatchEvent(new Event("input",{bubbles:!0})),V.dispatchEvent(new Event("change",{bubbles:!0}))},_=i?e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:0,ml:t[1],flexShrink:0},children:[e.jsx(n,{component:"button",type:"button",tabIndex:-1,disabled:h||v,"aria-label":"Augmenter",onClick:()=>R(1),sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",p:0,m:0,width:N,height:N,border:"none",background:"transparent",borderRadius:te.xs,color:le.gray[600],cursor:h||v?"not-allowed":"pointer","&:focus-visible":{outline:`2px solid ${je(d)}`,outlineOffset:1},"& svg":{width:"0.75rem",height:"0.75rem"}},children:e.jsx(Cr,{"aria-hidden":!0,strokeWidth:2.5})}),e.jsx(n,{component:"button",type:"button",tabIndex:-1,disabled:h||v,"aria-label":"Diminuer",onClick:()=>R(-1),sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",p:0,m:0,width:N,height:N,border:"none",background:"transparent",borderRadius:te.xs,color:le.gray[600],cursor:h||v?"not-allowed":"pointer","&:focus-visible":{outline:`2px solid ${je(d)}`,outlineOffset:1},"& svg":{width:"0.75rem",height:"0.75rem"}},children:e.jsx(qr,{"aria-hidden":!0,strokeWidth:2.5})})]}):null,de=e.jsxs(e.Fragment,{children:[b,_]});return e.jsx(s,{...I,density:u,invalid:d,disabled:h,readOnly:v,type:"number",inputRef:C,step:r,min:a,max:o,value:k,defaultValue:z,onChange:T,hideNativeNumberSpinners:i,endAdornment:de})}try{oe.displayName="NumberField",oe.__docgenInfo={description:"",displayName:"NumberField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"'outline'"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'},{value:'"soft"'}]}},sx:{defaultValue:null,description:"Root box — use `inputRef` for the `<input>`",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},density:{defaultValue:{value:"md"},description:"",name:"density",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:{value:"false"},description:"Sets `aria-invalid` and error styling when true",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},showStepper:{defaultValue:{value:"true"},description:"Show custom increment / decrement controls",name:"showStepper",required:!1,type:{name:"boolean"}}}}}catch{}const xe=ie;function Mr(r){return r?xe.red[600]:xe.blue[600]}function he({endAdornment:r,density:a="md",invalid:o=!1,autoComplete:i="current-password",...b}){const[u,d]=g.useState(!1),h=ye[a],v=be[h.icon],A=e.jsx(n,{component:"button",type:"button",tabIndex:-1,onClick:()=>d(k=>!k),"aria-label":u?"Masquer le mot de passe":"Afficher le mot de passe","aria-pressed":u,sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",p:t[1],m:0,border:"none",background:"transparent",borderRadius:"0.25rem",color:xe.gray[500],cursor:"pointer",flexShrink:0,"&:focus-visible":{outline:`2px solid ${Mr(o)}`,outlineOffset:1},"& svg":{width:v,height:v}},children:u?e.jsx(wr,{"aria-hidden":!0,strokeWidth:2.25}):e.jsx(Er,{"aria-hidden":!0,strokeWidth:2.25})}),T=e.jsxs(e.Fragment,{children:[r,A]});return e.jsx(s,{...b,density:a,invalid:o,type:u?"text":"password",autoComplete:i,endAdornment:T})}try{he.displayName="PasswordField",he.__docgenInfo={description:"",displayName:"PasswordField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"'outline'"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'},{value:'"soft"'}]}},sx:{defaultValue:null,description:"Root box — use `inputRef` for the `<input>`",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},density:{defaultValue:{value:"md"},description:"",name:"density",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:{value:"false"},description:"Sets `aria-invalid` and error styling when true",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},hideNativeNumberSpinners:{defaultValue:null,description:'For `type="number"`: hide browser steppers when using a custom stepper',name:"hideNativeNumberSpinners",required:!1,type:{name:"boolean"}}}}}catch{}function ge({startAdornment:r,clearable:a=!0,placeholder:o="Rechercher…",...i}){return e.jsx(s,{...i,type:"search",placeholder:o,clearable:a,startAdornment:r??e.jsx(Fr,{"aria-hidden":!0,strokeWidth:2.25})})}try{ge.displayName="SearchField",ge.__docgenInfo={description:"",displayName:"SearchField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"'outline'"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'},{value:'"soft"'}]}},sx:{defaultValue:null,description:"Root box — use `inputRef` for the `<input>`",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},density:{defaultValue:{value:"'md'"},description:"",name:"density",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Sets `aria-invalid` and error styling when true",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},clearable:{defaultValue:{value:"true"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},hideNativeNumberSpinners:{defaultValue:null,description:'For `type="number"`: hide browser steppers when using a custom stepper',name:"hideNativeNumberSpinners",required:!1,type:{name:"boolean"}}}}}catch{}const y=ie,l=["outline","filled","soft"],f={outline:"Outline",filled:"Filled",soft:"Soft"},w={overflowX:"auto",maxWidth:"100%",pb:.5},L={display:"grid",gridTemplateColumns:"88px repeat(3, minmax(0, 1fr))",gap:t[2],alignItems:"start",minWidth:560,maxWidth:880},E={fontSize:m.xs.fontSize,fontWeight:x.semibold,textTransform:"capitalize",color:y.gray[600],pb:t[1]},xn={title:"Shared/Input",component:s,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"inline-radio",options:["outline","filled","soft"]},density:{control:"select",options:Vr()},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},invalid:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},fullWidth:{control:"boolean"},startAdornment:{control:!1},endAdornment:{control:!1},sx:{control:!1}},args:{label:"Nom",placeholder:"Jean Dupont",variant:"outline",density:"md",fullWidth:!0}},D={},G={parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(3, minmax(0, 1fr))"},gap:t[4],maxWidth:960},children:l.map(r=>e.jsx(s,{label:f[r],variant:r,placeholder:r,fullWidth:!0},r))})},O={name:"Tailles (density)",parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",lg:"repeat(3, minmax(0, 1fr))"},gap:t[4],maxWidth:960,maxHeight:"85vh",overflow:"auto",pr:1},children:l.map(r=>e.jsxs(n,{children:[e.jsx(n,{component:"h4",sx:{m:0,mb:t[2],fontSize:m.sm.fontSize,fontWeight:x.semibold,color:y.gray[800]},children:f[r]}),e.jsx(n,{sx:{display:"grid",gap:t[2]},children:["sm","md","lg","xl"].map(a=>e.jsx(s,{variant:r,label:`Density · ${a}`,density:a,placeholder:a,fullWidth:!0},`${r}-${a}`))})]},r))})},Q={name:"États visuels",parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:{display:"flex",flexDirection:"column",gap:t[4]},children:e.jsx(n,{sx:w,children:e.jsxs(n,{sx:L,children:[e.jsx(n,{}),l.map(r=>e.jsx(n,{sx:E,children:f[r]},r)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:x.semibold,color:y.gray[700],pt:1.25},children:"Défaut"}),l.map(r=>e.jsx(s,{variant:r,placeholder:"Saisie",fullWidth:!0},`def-${r}`)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:x.semibold,color:y.gray[700],pt:1.25},children:"Disabled"}),l.map(r=>e.jsx(s,{variant:r,placeholder:"—",disabled:!0,fullWidth:!0},`dis-${r}`)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:x.semibold,color:y.gray[700],pt:1.25},children:"Read-only"}),l.map(r=>e.jsx(s,{variant:r,value:"Non modifiable",readOnly:!0,fullWidth:!0},`ro-${r}`)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:x.semibold,color:y.gray[700],pt:1.25},children:"Chargement"}),l.map(r=>e.jsx(s,{variant:r,placeholder:"…",loading:!0,fullWidth:!0},`load-${r}`))]})})})},X={name:"Validation",parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:w,children:e.jsxs(n,{sx:L,children:[e.jsx(n,{}),l.map(r=>e.jsx(n,{sx:E,children:f[r]},r)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:x.semibold,color:y.gray[700],pt:1.25},children:"Erreur"}),l.map(r=>e.jsx(s,{variant:r,label:"Email",placeholder:"vous@exemple.com",invalid:!0,errorMessage:"Adresse e-mail invalide.",defaultValue:"bad",fullWidth:!0},r))]})})},J={name:"Texte d’aide et erreur",parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:t[5]},children:[e.jsx(n,{sx:w,children:e.jsxs(n,{sx:L,children:[e.jsx(n,{}),l.map(r=>e.jsx(n,{sx:E,children:f[r]},r)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:x.semibold,color:y.gray[700],pt:1.25},children:"Aide seule"}),l.map(r=>e.jsx(s,{variant:r,label:"Code postal",placeholder:"75001",helperText:"5 chiffres pour la France métropolitaine.",fullWidth:!0},`h-${r}`))]})}),e.jsx(n,{sx:w,children:e.jsxs(n,{sx:L,children:[e.jsx(n,{}),l.map(r=>e.jsx(n,{sx:E,children:f[r]},`h2-${r}`)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:x.semibold,color:y.gray[700],pt:1.25},children:"Aide + erreur"}),l.map(r=>e.jsx(s,{variant:r,label:"Téléphone",placeholder:"06 …",invalid:!0,helperText:"Format international accepté.",errorMessage:"Numéro incomplet : vérifiez l’indicatif et le nombre de chiffres.",fullWidth:!0},`e-${r}`))]})})]})};function Dr({variant:r}){const[a,o]=g.useState("alice");return e.jsx(s,{variant:r,label:`Utilisateur · ${f[r]}`,placeholder:"nom",startAdornment:e.jsx(kr,{"aria-hidden":!0,strokeWidth:2.25}),value:a,onChange:i=>o(i.target.value),clearable:!0,fullWidth:!0})}const K={name:"Icône et clear",parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:w,children:e.jsxs(n,{sx:L,children:[e.jsx(n,{}),l.map(r=>e.jsx(n,{sx:E,children:f[r]},r)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:x.semibold,color:y.gray[700],pt:1.25},children:"Icône + clear"}),l.map(r=>e.jsx(Dr,{variant:r},r))]})})},Y={render:()=>e.jsx(n,{sx:{display:"grid",gap:t[4],maxWidth:960},children:l.map(r=>e.jsx(he,{variant:r,label:`Mot de passe · ${f[r]}`,placeholder:"••••••••",fullWidth:!0,helperText:"Afficher / masquer avec le bouton œil (Lucide)."},r))})},Z={render:function(){const[a,o]=g.useState({outline:"",filled:"",soft:""});return e.jsx(n,{sx:{display:"grid",gap:t[4],maxWidth:960},children:l.map(i=>e.jsx(ge,{variant:i,label:`Recherche · ${f[i]}`,value:a[i],onChange:b=>o(u=>({...u,[i]:b.target.value})),fullWidth:!0,helperText:"Loupe à gauche, clear quand il y a du texte."},i))})}},ee={name:"Nombre · stepper",render:()=>e.jsx(n,{sx:{display:"grid",gap:t[4],maxWidth:960},children:l.map(r=>e.jsx(oe,{variant:r,label:`Quantité · ${f[r]}`,defaultValue:0,min:0,max:99,step:1,fullWidth:!0,helperText:"Stepper interne ; flèches natives masquées."},r))})},re={name:"Nombre · sans stepper",render:()=>e.jsx(n,{sx:{display:"grid",gap:t[4],maxWidth:960},children:l.map(r=>e.jsx(oe,{variant:r,label:`Pourcentage · ${f[r]}`,defaultValue:50,min:0,max:100,showStepper:!1,fullWidth:!0},r))})},ne={render:()=>e.jsx(n,{sx:{maxWidth:960},children:e.jsx(n,{sx:{border:`1px dashed ${y.gray[300]}`,p:2,display:"grid",gap:t[3]},children:l.map(r=>e.jsx(s,{variant:r,label:`Pleine largeur · ${f[r]}`,placeholder:"…",fullWidth:!0},r))})})},ae={name:"Accessibilité (résumé)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{component:"section",sx:{maxWidth:520,fontSize:14,color:W.secondary,lineHeight:1.55,"& code":{fontSize:13,background:y.gray[100],padding:"2px 6px",borderRadius:4}},children:[e.jsxs("p",{style:{marginTop:0},children:["Le composant associe ",e.jsx("code",{children:"label"})," et ",e.jsx("code",{children:"id"}),", expose"," ",e.jsx("code",{children:"aria-invalid"}),", ",e.jsx("code",{children:"aria-describedby"})," (aide + erreur),"," ",e.jsx("code",{children:"aria-errormessage"})," si erreur, ",e.jsx("code",{children:"aria-readonly"}),","," ",e.jsx("code",{children:"aria-busy"})," en chargement. Le contour au focus est visible sur le champ (anneau contrasté). Préférez des messages d’erreur explicites et un contraste suffisant (tokens ",e.jsx("code",{children:"textStateColors"}),")."]}),e.jsx(n,{sx:{display:"grid",gap:t[3]},children:l.map(r=>e.jsx(s,{id:`demo-a11y-email-${r}`,variant:r,label:`E-mail (id explicite) · ${f[r]}`,placeholder:"vous@exemple.com",helperText:"Helper lié via aria-describedby.",invalid:!0,errorMessage:"Exemple d’erreur.",defaultValue:"x",fullWidth:!0},r))})]})};var Te,Be,Re;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:"{}",...(Re=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var _e,qe,ke;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(3, minmax(0, 1fr))'
    },
    gap: spacing[4],
    maxWidth: 960
  }}>\r
      {INPUT_VARIANTS.map(v => <Input key={v} label={VARIANT_LABEL[v]} variant={v} placeholder={v} fullWidth />)}\r
    </Box>
}`,...(ke=(qe=G.parameters)==null?void 0:qe.docs)==null?void 0:ke.source}}};var ze,Ce,$e;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Tailles (density)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      lg: 'repeat(3, minmax(0, 1fr))'
    },
    gap: spacing[4],
    maxWidth: 960,
    maxHeight: '85vh',
    overflow: 'auto',
    pr: 1
  }}>\r
      {INPUT_VARIANTS.map(v => <Box key={v}>\r
          <Box component="h4" sx={{
        m: 0,
        mb: spacing[2],
        fontSize: typeScale.sm.fontSize,
        fontWeight: fontWeights.semibold,
        color: pc.gray[800]
      }}>\r
            {VARIANT_LABEL[v]}\r
          </Box>\r
          <Box sx={{
        display: 'grid',
        gap: spacing[2]
      }}>\r
            {(['sm', 'md', 'lg', 'xl'] satisfies ComponentHeightToken[]).map(d => <Input key={\`\${v}-\${d}\`} variant={v} label={\`Density · \${d}\`} density={d} placeholder={d} fullWidth />)}\r
          </Box>\r
        </Box>)}\r
    </Box>
}`,...($e=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var we,Le,Ee;Q.parameters={...Q.parameters,docs:{...(we=Q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'États visuels',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[4]
  }}>\r
      <Box sx={variantGridScrollWrapSx}>\r
        <Box sx={variantGridSx}>\r
        <Box />\r
        {INPUT_VARIANTS.map(v => <Box key={v} sx={variantColHeaderSx}>\r
            {VARIANT_LABEL[v]}\r
          </Box>)}\r
        <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
          Défaut\r
        </Box>\r
        {INPUT_VARIANTS.map(v => <Input key={\`def-\${v}\`} variant={v} placeholder="Saisie" fullWidth />)}\r
        <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
          Disabled\r
        </Box>\r
        {INPUT_VARIANTS.map(v => <Input key={\`dis-\${v}\`} variant={v} placeholder="—" disabled fullWidth />)}\r
        <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
          Read-only\r
        </Box>\r
        {INPUT_VARIANTS.map(v => <Input key={\`ro-\${v}\`} variant={v} value="Non modifiable" readOnly fullWidth />)}\r
        <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
          Chargement\r
        </Box>\r
        {INPUT_VARIANTS.map(v => <Input key={\`load-\${v}\`} variant={v} placeholder="…" loading fullWidth />)}\r
        </Box>\r
      </Box>\r
    </Box>
}`,...(Ee=(Le=Q.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Pe,Fe,He;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Validation',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={variantGridScrollWrapSx}>\r
      <Box sx={variantGridSx}>\r
      <Box />\r
      {INPUT_VARIANTS.map(v => <Box key={v} sx={variantColHeaderSx}>\r
          {VARIANT_LABEL[v]}\r
        </Box>)}\r
      <Box sx={{
        fontSize: typeScale.xs.fontSize,
        fontWeight: fontWeights.semibold,
        color: pc.gray[700],
        pt: 1.25
      }}>\r
        Erreur\r
      </Box>\r
      {INPUT_VARIANTS.map(v => <Input key={v} variant={v} label="Email" placeholder="vous@exemple.com" invalid errorMessage="Adresse e-mail invalide." defaultValue="bad" fullWidth />)}\r
      </Box>\r
    </Box>
}`,...(He=(Fe=X.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Ue,Me,De;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Texte d’aide et erreur',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[5]
  }}>\r
      <Box sx={variantGridScrollWrapSx}>\r
        <Box sx={variantGridSx}>\r
        <Box />\r
        {INPUT_VARIANTS.map(v => <Box key={v} sx={variantColHeaderSx}>\r
            {VARIANT_LABEL[v]}\r
          </Box>)}\r
        <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
          Aide seule\r
        </Box>\r
        {INPUT_VARIANTS.map(v => <Input key={\`h-\${v}\`} variant={v} label="Code postal" placeholder="75001" helperText="5 chiffres pour la France métropolitaine." fullWidth />)}\r
        </Box>\r
      </Box>\r
      <Box sx={variantGridScrollWrapSx}>\r
        <Box sx={variantGridSx}>\r
        <Box />\r
        {INPUT_VARIANTS.map(v => <Box key={\`h2-\${v}\`} sx={variantColHeaderSx}>\r
            {VARIANT_LABEL[v]}\r
          </Box>)}\r
        <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
          Aide + erreur\r
        </Box>\r
        {INPUT_VARIANTS.map(v => <Input key={\`e-\${v}\`} variant={v} label="Téléphone" placeholder="06 …" invalid helperText="Format international accepté." errorMessage="Numéro incomplet : vérifiez l’indicatif et le nombre de chiffres." fullWidth />)}\r
        </Box>\r
      </Box>\r
    </Box>
}`,...(De=(Me=J.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Ge,Oe,Qe;K.parameters={...K.parameters,docs:{...(Ge=K.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Icône et clear',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={variantGridScrollWrapSx}>\r
      <Box sx={variantGridSx}>\r
      <Box />\r
      {INPUT_VARIANTS.map(v => <Box key={v} sx={variantColHeaderSx}>\r
          {VARIANT_LABEL[v]}\r
        </Box>)}\r
      <Box sx={{
        fontSize: typeScale.xs.fontSize,
        fontWeight: fontWeights.semibold,
        color: pc.gray[700],
        pt: 1.25
      }}>\r
        Icône + clear\r
      </Box>\r
      {INPUT_VARIANTS.map(v => <IconClearCell key={v} variant={v} />)}\r
      </Box>\r
    </Box>
}`,...(Qe=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:Qe.source}}};var Xe,Je,Ke;Y.parameters={...Y.parameters,docs:{...(Xe=Y.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4],
    maxWidth: 960
  }}>\r
      {INPUT_VARIANTS.map(v => <PasswordField key={v} variant={v} label={\`Mot de passe · \${VARIANT_LABEL[v]}\`} placeholder="••••••••" fullWidth helperText="Afficher / masquer avec le bouton œil (Lucide)." />)}\r
    </Box>
}`,...(Ke=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Ye,Ze,er;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: function SearchStory() {
    const [queries, setQueries] = useState<Record<InputFieldVariant, string>>({
      outline: '',
      filled: '',
      soft: ''
    });
    return <Box sx={{
      display: 'grid',
      gap: spacing[4],
      maxWidth: 960
    }}>\r
        {INPUT_VARIANTS.map(v => <SearchField key={v} variant={v} label={\`Recherche · \${VARIANT_LABEL[v]}\`} value={queries[v]} onChange={e => setQueries(prev => ({
        ...prev,
        [v]: e.target.value
      }))} fullWidth helperText="Loupe à gauche, clear quand il y a du texte." />)}\r
      </Box>;
  }
}`,...(er=(Ze=Z.parameters)==null?void 0:Ze.docs)==null?void 0:er.source}}};var rr,nr,ar;ee.parameters={...ee.parameters,docs:{...(rr=ee.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  name: 'Nombre · stepper',
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4],
    maxWidth: 960
  }}>\r
      {INPUT_VARIANTS.map(v => <NumberField key={v} variant={v} label={\`Quantité · \${VARIANT_LABEL[v]}\`} defaultValue={0} min={0} max={99} step={1} fullWidth helperText="Stepper interne ; flèches natives masquées." />)}\r
    </Box>
}`,...(ar=(nr=ee.parameters)==null?void 0:nr.docs)==null?void 0:ar.source}}};var tr,lr,or;re.parameters={...re.parameters,docs:{...(tr=re.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  name: 'Nombre · sans stepper',
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4],
    maxWidth: 960
  }}>\r
      {INPUT_VARIANTS.map(v => <NumberField key={v} variant={v} label={\`Pourcentage · \${VARIANT_LABEL[v]}\`} defaultValue={50} min={0} max={100} showStepper={false} fullWidth />)}\r
    </Box>
}`,...(or=(lr=re.parameters)==null?void 0:lr.docs)==null?void 0:or.source}}};var ir,sr,dr;ne.parameters={...ne.parameters,docs:{...(ir=ne.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  render: () => <Box sx={{
    maxWidth: 960
  }}>\r
      <Box sx={{
      border: \`1px dashed \${pc.gray[300]}\`,
      p: 2,
      display: 'grid',
      gap: spacing[3]
    }}>\r
        {INPUT_VARIANTS.map(v => <Input key={v} variant={v} label={\`Pleine largeur · \${VARIANT_LABEL[v]}\`} placeholder="…" fullWidth />)}\r
      </Box>\r
    </Box>
}`,...(dr=(sr=ne.parameters)==null?void 0:sr.docs)==null?void 0:dr.source}}};var ur,cr,pr;ae.parameters={...ae.parameters,docs:{...(ur=ae.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  name: 'Accessibilité (résumé)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box component="section" sx={{
    maxWidth: 520,
    fontSize: 14,
    color: textStateColors.secondary,
    lineHeight: 1.55,
    '& code': {
      fontSize: 13,
      background: pc.gray[100],
      padding: '2px 6px',
      borderRadius: 4
    }
  }}>\r
      <p style={{
      marginTop: 0
    }}>\r
        Le composant associe <code>label</code> et <code>id</code>, expose{' '}\r
        <code>aria-invalid</code>, <code>aria-describedby</code> (aide + erreur),{' '}\r
        <code>aria-errormessage</code> si erreur, <code>aria-readonly</code>,{' '}\r
        <code>aria-busy</code> en chargement. Le contour au focus est visible sur le champ\r
        (anneau contrasté). Préférez des messages d’erreur explicites et un contraste suffisant\r
        (tokens <code>textStateColors</code>).\r
      </p>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[3]
    }}>\r
        {INPUT_VARIANTS.map(v => <Input key={v} id={\`demo-a11y-email-\${v}\`} variant={v} label={\`E-mail (id explicite) · \${VARIANT_LABEL[v]}\`} placeholder="vous@exemple.com" helperText="Helper lié via aria-describedby." invalid errorMessage="Exemple d’erreur." defaultValue="x" fullWidth />)}\r
      </Box>\r
    </Box>
}`,...(pr=(cr=ae.parameters)==null?void 0:cr.docs)==null?void 0:pr.source}}};const hn=["Playground","Variants","Densities","States","Validation","HelperAndError","IconAndClear","Password","Search","NumberWithStepper","NumberWithoutStepper","FullWidth","Accessibility"];export{ae as Accessibility,O as Densities,ne as FullWidth,J as HelperAndError,K as IconAndClear,ee as NumberWithStepper,re as NumberWithoutStepper,Y as Password,D as Playground,Z as Search,Q as States,X as Validation,G as Variants,hn as __namedExportsOrder,xn as default};
