import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BSnFy17d.js";import{s as i}from"./spacing-tokens-D0rW3Zez.js";import{g as j,f as Pe,t as $}from"./typography-tokens-DtjjMcdU.js";import{p as Je}from"./primitive-colors-CqocY7XZ.js";import{r as K}from"./radius-tokens-D-KuzIVl.js";import{c as ze,a as L,b as oe}from"./createTheme-DI3Ygkl-.js";import{S as Ke,F as Qe}from"./FormControlLabel-D4S5vkvh.js";import{c as Me}from"./createSvgIcon-BPoagk93.js";import{s as H,r as Oe,m as Ee,c as Ne}from"./memoTheme-BRZfWJPw.js";import{u as Xe}from"./utils-qtldwDL5.js";import{g as qe,a as De}from"./generateUtilityClasses-DGi4yQgU.js";import{c as re}from"./createSimplePaletteValueFilter-DP1slul8.js";import{u as ea}from"./useSlot-BPdpMB5v.js";import{u as aa}from"./DefaultPropsProvider-3wuxoqT1.js";import{c as oa}from"./createChainedFunction-BO_9K8Jh.js";import{F as Q,a as We}from"./FormHelperText-B0TJpcuu.js";import{B as u}from"./Box-D0N3bMl-.js";import{u as ra}from"./useControlled-DHwV1zIL.js";import{u as ta}from"./useForkRef-B-TD92He.js";import{u as na}from"./useId-BL9O7AM2.js";import{F as sa}from"./FormGroup-2lVUP10D.js";import{S as C}from"./Stack-BUQa9Y5t.js";import{T as I}from"./Typography-DVAwIxBx.js";import"./ButtonBase-C-pKo4oY.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-DJ73tQiJ.js";import"./extendSxProp-BsGpowVv.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./index-CwGUpMSx.js";const ia=Me(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),la=Me(a.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),da=H("span",{name:"MuiRadioButtonIcon",shouldForwardProp:Oe})({position:"relative",display:"flex"}),ca=H(ia,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),ua=H(la,{name:"MuiRadioButtonIcon"})(Ee(({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]})));function _e(e){const{checked:o=!1,classes:t={},fontSize:r}=e,n={...e,checked:o};return a.jsxs(da,{className:t.root,ownerState:n,children:[a.jsx(ca,{fontSize:r,className:t.background,ownerState:n}),a.jsx(ua,{fontSize:r,className:t.dot,ownerState:n})]})}const Ue=l.createContext(void 0);function pa(){return l.useContext(Ue)}function ma(e){return qe("MuiRadio",e)}const te=De("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),fa=e=>{const{classes:o,color:t,size:r}=e,n={root:["root",`color${L(t)}`,r!=="medium"&&`size${L(r)}`]};return{...o,...Ne(n,ma,o)}},xa=H(Ke,{shouldForwardProp:e=>Oe(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.size!=="medium"&&o[`size${L(t.size)}`],o[`color${L(t.color)}`]]}})(Ee(({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${te.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(re()).map(([o])=>({props:{color:o,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[o].main,(e.vars||e).palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(re()).map(([o])=>({props:{color:o,disabled:!1},style:{[`&.${te.checked}`]:{color:(e.vars||e).palette[o].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function ga(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const ha=a.jsx(_e,{checked:!0}),va=a.jsx(_e,{}),ya=l.forwardRef(function(o,t){const r=aa({props:o,name:"MuiRadio"}),{checked:n,checkedIcon:d=ha,color:v="primary",icon:f=va,name:p,onChange:T,size:x="medium",className:g,disabled:F,disableRipple:k=!1,slots:b={},slotProps:h={},inputProps:S,...G}=r,c=Xe();let R=F;c&&typeof R>"u"&&(R=c.disabled),R??(R=!1);const w={...r,disabled:R,disableRipple:k,color:v,size:x},A=fa(w),B=pa();let Y=n;const He=oa(T,B&&B.onChange);let Z=p;B&&(typeof Y>"u"&&(Y=ga(B.value,r.value)),typeof Z>"u"&&(Z=B.name));const J=h.input??S,[Ye,Ze]=ea("root",{ref:t,elementType:xa,className:ze(A.root,g),shouldForwardComponentProp:!0,externalForwardedProps:{slots:b,slotProps:h,...G},getSlotProps:P=>({...P,onChange:(X,...ee)=>{var ae;(ae=P.onChange)==null||ae.call(P,X,...ee),He(X,...ee)}}),ownerState:w,additionalProps:{type:"radio",icon:l.cloneElement(f,{fontSize:f.props.fontSize??x}),checkedIcon:l.cloneElement(d,{fontSize:d.props.fontSize??x}),disabled:R,name:Z,checked:Y,slots:b,slotProps:{input:typeof J=="function"?J(w):J}}});return a.jsx(Ye,{...Ze,classes:A})});function ba(e){return qe("MuiRadioGroup",e)}De("MuiRadioGroup",["root","row","error"]);const Sa=e=>{const{classes:o,row:t,error:r}=e;return Ne({root:["root",t&&"row",r&&"error"]},ba,o)},Ra=l.forwardRef(function(o,t){const{actions:r,children:n,className:d,defaultValue:v,name:f,onChange:p,value:T,...x}=o,g=l.useRef(null),F=Sa(o),[k,b]=ra({controlled:T,default:v,name:"RadioGroup"});l.useImperativeHandle(r,()=>({focus:()=>{let c=g.current.querySelector("input:not(:disabled):checked");c||(c=g.current.querySelector("input:not(:disabled)")),c&&c.focus()}}),[]);const h=ta(t,g),S=na(f),G=l.useMemo(()=>({name:S,onChange(c){b(c.target.value),p&&p(c,c.target.value)},value:k}),[S,p,b,k]);return a.jsx(Ue.Provider,{value:G,children:a.jsx(sa,{role:"radiogroup",ref:h,className:ze(F.root,d),...x,children:n})})}),y=Je,ja={sm:"small",md:"medium",lg:"medium"};function Ca(e,o,t){const r=t?y.red[600]:y.blue[600],n=t?y.red[400]:y.gray[400],d={p:o==="sm"?i[1]:i[1.5],m:0,...o==="lg"?{transform:"scale(1.12)",transformOrigin:"center"}:{},color:n,"&.Mui-checked":{color:r},"&.Mui-disabled":{color:y.gray[300]},"&:hover:not(.Mui-disabled)":{backgroundColor:oe(y.gray[900],.04),borderRadius:K.sm},"&.Mui-focusVisible":{outline:`2px solid ${r}`,outlineOffset:2}};return e==="soft"?{...d,"&.Mui-checked":{color:r,backgroundColor:oe(r,.12),borderRadius:K.sm}}:e==="outlined"?{...d,borderRadius:K.xs,"&:not(.Mui-checked):not(.Mui-disabled)":{outline:`2px solid ${t?y.red[400]:y.gray[400]}`,outlineOffset:1},"&.Mui-disabled":{outline:"none"}}:d}const s=l.forwardRef(function({label:o,description:t,helperText:r,invalid:n=!1,variant:d="default",density:v="md",fullWidth:f=!1,disabled:p,id:T,inputProps:x,sx:g,...F},k){const b=l.useId(),h=T??`sparing-radio-${b}`,S=`${h}-helper`,c=[x==null?void 0:x["aria-describedby"],t?`${h}-desc`:null,r?S:null].filter(Boolean).join(" "),R={...x,id:h,"aria-invalid":n||void 0,...c?{"aria-describedby":c}:{}},w=a.jsx(ya,{ref:k,disableRipple:!0,size:ja[v],disabled:p,inputProps:R,sx:[Ca(d,v,n),...Array.isArray(g)?g:g?[g]:[]],...F});if(o==null&&t==null&&r==null)return a.jsx(Q,{disabled:p,error:n,sx:{display:"inline-flex"},children:w});const A=a.jsxs(u,{sx:{display:"flex",flexDirection:"column",gap:i[.5],pt:.25},children:[a.jsx(u,{component:"span",sx:{fontSize:$.sm.fontSize,fontWeight:Pe.medium,color:p?j.disabled:j.primary,lineHeight:1.4},children:o}),t?a.jsx(u,{component:"span",id:`${h}-desc`,sx:{fontSize:$.xs.fontSize,color:j.secondary,lineHeight:1.45},children:t}):null]});return a.jsxs(Q,{component:"div",disabled:p,error:n,sx:{width:f?"100%":"auto",alignItems:"flex-start"},children:[a.jsx(Qe,{control:w,label:A,sx:{alignItems:"flex-start",m:0,gap:i[1],width:f?"100%":"auto","& .MuiFormControlLabel-label":{width:f?"100%":"auto"}}}),r?a.jsx(We,{id:S,sx:{mx:0,mt:i[1],ml:{xs:0,sm:6.5}},children:r}):null]})});function m({legend:e,name:o,children:t,error:r=!1,helperText:n,row:d=!1,value:v,defaultValue:f,onChange:p}){return a.jsxs(Q,{component:"fieldset",variant:"standard",error:r,sx:{width:"100%",alignItems:"flex-start"},children:[a.jsx(u,{component:"legend",sx:{fontSize:$.sm.fontSize,fontWeight:Pe.semibold,mb:i[2],color:j.primary,width:"100%"},children:e}),a.jsx(Ra,{name:o,value:v,defaultValue:f,onChange:p,row:d,sx:{width:"100%",gap:d?i[2]:i[1],display:d?"flex":"grid"},children:t}),n?a.jsx(We,{sx:{mx:0,mt:i[1]},children:n}):null]})}try{m.displayName="RadioFieldGroup",m.__docgenInfo={description:"`fieldset` + `legend` + `RadioGroup` for a mutually exclusive set of {@link Radio} options.",displayName:"RadioFieldGroup",props:{legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Passed to MUI `RadioGroup` — required for native grouping.",name:"name",required:!0,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},row:{defaultValue:{value:"false"},description:"",name:"row",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement, Element>, value: string) => void)"}}}}}catch{}try{s.displayName="Radio",s.__docgenInfo={description:"Single radio option. Must be used inside a {@link RadioFieldGroup} (or MUI `RadioGroup`) so\n`name` / selection state are shared. One choice per group.",displayName:"Radio",props:{label:{defaultValue:null,description:"Visible label — use for almost all product UIs.",name:"label",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"soft"'},{value:'"outlined"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<RadioSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<SwitchBaseProps, keyof IntrinsicElements>, RadioRootSlotPropsOverrides, RadioOwnerState>; input?: SlotProps<...>; } | undefined"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},density:{defaultValue:{value:"md"},description:"",name:"density",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const V=["default","soft","outlined"],Le=["sm","md","lg"];function Va(){return a.jsx(u,{sx:{display:"flex",gap:i[2],pl:14},children:V.map(e=>a.jsx(u,{sx:{width:220,fontSize:$.xs.fontSize,fontWeight:600,color:j.secondary,textTransform:"capitalize"},children:e},e))})}function ka({title:e,children:o}){return a.jsxs(u,{component:"section",sx:{display:"grid",gap:i[2]},children:[a.jsx(I,{variant:"subtitle2",sx:{fontWeight:600,color:j.primary},children:e}),o]})}function wa({variant:e}){const[o,t]=l.useState("b");return a.jsxs(u,{sx:{display:"grid",gap:i[2]},children:[a.jsx(I,{variant:"caption",sx:{fontWeight:600,textTransform:"capitalize"},children:e}),a.jsxs(m,{legend:`${e} · payment method`,name:`radio-variant-${e}`,value:o,onChange:r=>t(r.target.value),children:[a.jsx(s,{variant:e,value:"a",label:"Card"}),a.jsx(s,{variant:e,value:"b",label:"Bank transfer"})]})]})}function Ia({variant:e}){const[o,t]=l.useState("a");return a.jsxs(m,{legend:`${e} · one option disabled`,name:`dis-${e}`,value:o,onChange:r=>t(r.target.value),children:[a.jsx(s,{variant:e,value:"a",label:"Available"}),a.jsx(s,{variant:e,value:"b",label:"Unavailable",disabled:!0})]})}function Ta({variant:e}){const[o,t]=l.useState(""),r=o==="";return a.jsxs(m,{legend:`${e} · pick one`,name:`val-${e}`,value:o,onChange:n=>t(n.target.value),...r?{error:!0,helperText:"Please select a plan to continue."}:{error:!1},children:[a.jsx(s,{variant:e,value:"basic",label:"Basic",invalid:r}),a.jsx(s,{variant:e,value:"pro",label:"Pro",invalid:r})]})}const so={title:"Shared/Radio",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Token-styled radio for mutually exclusive choices. Use inside `RadioFieldGroup` (or MUI `RadioGroup`) so only one option is selected per group."}}},argTypes:{label:{control:"text"},description:{control:"text"},helperText:{control:"text"},invalid:{control:"boolean"},disabled:{control:"boolean"},value:{control:"text"},variant:{control:"inline-radio",options:V},density:{control:"inline-radio",options:Le},fullWidth:{control:"boolean"}},args:{label:"Standard shipping",description:"Arrives in 3–5 business days.",helperText:"",invalid:!1,disabled:!1,value:"standard",variant:"default",density:"md",fullWidth:!1}},z={render:function(o){const[t,r]=l.useState("standard");return a.jsx(u,{sx:{maxWidth:420},children:a.jsxs(m,{legend:"Delivery",name:"playground-delivery",value:t,onChange:n=>r(n.target.value),children:[a.jsx(s,{value:"standard",label:o.label,description:o.description,helperText:o.helperText||void 0,variant:o.variant,density:o.density,invalid:o.invalid,disabled:o.disabled,fullWidth:o.fullWidth}),a.jsx(s,{value:"express",label:"Express",description:"Extra fee applies.",variant:o.variant,density:o.density})]})})}},M={parameters:{controls:{disable:!0}},render:function(){const[o,t]=l.useState("monthly");return a.jsxs(C,{spacing:i[3],sx:{maxWidth:720},children:[a.jsxs(I,{variant:"body2",color:"text.secondary",children:["Each option exposes ",a.jsx("code",{children:'role="radio"'})," and participates in a single selection group via ",a.jsx("code",{children:"RadioFieldGroup"})," (",a.jsx("code",{children:"fieldset"})," +"," ",a.jsx("code",{children:"RadioGroup"}),"). Labels are associated with their controls."]}),a.jsxs(m,{legend:"Billing cadence",name:"billing-cadence",value:o,onChange:r=>t(r.target.value),children:[a.jsx(s,{value:"monthly",label:"Monthly",description:"Pay each month."}),a.jsx(s,{value:"annual",label:"Annual",description:"One invoice per year."})]})]})}},O={parameters:{controls:{disable:!0}},render:()=>a.jsxs(C,{spacing:i[4],children:[a.jsxs(I,{variant:"body2",color:"text.secondary",children:["Each block is one visual variant; groups use separate ",a.jsx("code",{children:"name"})," attributes."]}),V.map(e=>a.jsx(wa,{variant:e},e))]})},E={parameters:{controls:{disable:!0}},render:()=>a.jsxs(u,{sx:{display:"grid",gap:i[2]},children:[a.jsx(Va,{}),["a","b"].map(e=>a.jsxs(u,{sx:{display:"flex",alignItems:"flex-start",gap:i[2]},children:[a.jsxs(u,{sx:{width:120,fontSize:$.xs.fontSize,fontWeight:600,color:j.secondary,pt:1},children:["Selected: ",e.toUpperCase()]}),a.jsx(u,{sx:{display:"flex",gap:i[2]},children:V.map(o=>a.jsx(u,{sx:{width:220},children:a.jsxs(m,{legend:`${o} · ${e}`,name:`side-${e}-${o}`,value:e,onChange:()=>{},children:[a.jsx(s,{variant:o,value:"a",label:"Option A"}),a.jsx(s,{variant:o,value:"b",label:"Option B"})]})},`${e}-${o}`))})]},e))]})},N={parameters:{controls:{disable:!0}},render:()=>a.jsx(C,{spacing:i[3],children:V.map(e=>a.jsx(Ia,{variant:e},e))})},q={parameters:{controls:{disable:!0}},render:()=>a.jsx(C,{spacing:i[3],children:V.map(e=>a.jsx(Ta,{variant:e},e))})},D={parameters:{controls:{disable:!0}},render:()=>a.jsx(C,{spacing:i[4],children:Le.map(e=>a.jsx(ka,{title:`Density · ${e}`,children:a.jsx(m,{legend:"Variant",name:`density-${e}`,defaultValue:"default",children:V.map(o=>a.jsx(s,{density:e,variant:o,value:o,label:`${o} (${e})`},o))})},e))})},W={parameters:{controls:{disable:!0}},render:function(){const[o,t]=l.useState("s");return a.jsxs(m,{legend:"Size (horizontal group)",name:"size-row",value:o,onChange:r=>t(r.target.value),row:!0,children:[a.jsx(s,{value:"s",label:"S",variant:"default"}),a.jsx(s,{value:"m",label:"M",variant:"default"}),a.jsx(s,{value:"l",label:"L",variant:"default"})]})}},_={parameters:{controls:{disable:!0}},render:function(){const[o,t]=l.useState("draft");return a.jsxs(C,{spacing:i[2],alignItems:"flex-start",children:[a.jsxs(I,{variant:"body2",color:"text.secondary",children:["Controlled ",a.jsx("code",{children:"value"})," + ",a.jsx("code",{children:"onChange"})," on ",a.jsx("code",{children:"RadioFieldGroup"}),"."]}),a.jsxs(m,{legend:"Status",name:"status-controlled",value:o,onChange:r=>t(r.target.value),children:[a.jsx(s,{value:"draft",label:"Draft"}),a.jsx(s,{value:"published",label:"Published"})]})]})}},U={parameters:{controls:{disable:!0}},render:function(){const[o,t]=l.useState("yes");return a.jsxs(C,{spacing:i[2],sx:{maxWidth:720},children:[a.jsxs(I,{variant:"body2",color:"text.secondary",component:"ul",sx:{m:0,pl:3},children:[a.jsx("li",{children:"Arrow keys move between radios in the same group (MUI / browser behavior)."}),a.jsx("li",{children:"Space selects the focused option."}),a.jsxs("li",{children:[a.jsx("code",{children:"fieldset"})," / ",a.jsx("code",{children:"legend"})," expose the group name to assistive tech."]}),a.jsxs("li",{children:["Optional description text is linked with ",a.jsx("code",{children:"aria-describedby"})," on the input."]})]}),a.jsxs(m,{legend:"Notifications",name:"a11y-demo",value:o,onChange:r=>t(r.target.value),children:[a.jsx(s,{value:"yes",label:"Enable",description:"You can change this in settings at any time."}),a.jsx(s,{value:"no",label:"Disable"})]})]})}};var ne,se,ie;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: function PlaygroundRender(args) {
    const [value, setValue] = useState('standard');
    return <Box sx={{
      maxWidth: 420
    }}>\r
        <RadioFieldGroup legend="Delivery" name="playground-delivery" value={value} onChange={e => setValue(e.target.value)}>\r
          <Radio value="standard" label={args.label} description={args.description} helperText={args.helperText || undefined} variant={args.variant} density={args.density} invalid={args.invalid} disabled={args.disabled} fullWidth={args.fullWidth} />\r
          <Radio value="express" label="Express" description="Extra fee applies." variant={args.variant} density={args.density} />\r
        </RadioFieldGroup>\r
      </Box>;
  }
}`,...(ie=(se=z.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,de,ce;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RoleStory() {
    const [v, setV] = useState('monthly');
    return <Stack spacing={spacing[3]} sx={{
      maxWidth: 720
    }}>\r
        <Typography variant="body2" color="text.secondary">\r
          Each option exposes <code>role=&quot;radio&quot;</code> and participates in a single\r
          selection group via <code>RadioFieldGroup</code> (<code>fieldset</code> +{' '}\r
          <code>RadioGroup</code>). Labels are associated with their controls.\r
        </Typography>\r
        <RadioFieldGroup legend="Billing cadence" name="billing-cadence" value={v} onChange={e => setV(e.target.value)}>\r
          <Radio value="monthly" label="Monthly" description="Pay each month." />\r
          <Radio value="annual" label="Annual" description="One invoice per year." />\r
        </RadioFieldGroup>\r
      </Stack>;
  }
}`,...(ce=(de=M.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,me;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[4]}>\r
      <Typography variant="body2" color="text.secondary">\r
        Each block is one visual variant; groups use separate <code>name</code> attributes.\r
      </Typography>\r
      {VARIANTS.map(variant => <TwoOptionRow key={variant} variant={variant} />)}\r
    </Stack>
}`,...(me=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,xe,ge;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[2]
  }}>\r
      <VariantLabels />\r
      {(['a', 'b'] as const).map(selected => <Box key={selected} sx={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing[2]
    }}>\r
          <Box sx={{
        width: 120,
        fontSize: typeScale.xs.fontSize,
        fontWeight: 600,
        color: textStateColors.secondary,
        pt: 1
      }}>\r
            Selected: {selected.toUpperCase()}\r
          </Box>\r
          <Box sx={{
        display: 'flex',
        gap: spacing[2]
      }}>\r
            {VARIANTS.map(variant => <Box key={\`\${selected}-\${variant}\`} sx={{
          width: 220
        }}>\r
                <RadioFieldGroup legend={\`\${variant} · \${selected}\`} name={\`side-\${selected}-\${variant}\`} value={selected} onChange={() => undefined}>\r
                  <Radio variant={variant} value="a" label="Option A" />\r
                  <Radio variant={variant} value="b" label="Option B" />\r
                </RadioFieldGroup>\r
              </Box>)}\r
          </Box>\r
        </Box>)}\r
    </Box>
}`,...(ge=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var he,ve,ye;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]}>\r
      {VARIANTS.map(variant => <DisabledOptionsRow key={variant} variant={variant} />)}\r
    </Stack>
}`,...(ye=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var be,Se,Re;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]}>\r
      {VARIANTS.map(variant => <ValidationRow key={variant} variant={variant} />)}\r
    </Stack>
}`,...(Re=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:Re.source}}};var je,Ce,Ve;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[4]}>\r
      {DENSITIES.map(density => <StorySection key={density} title={\`Density · \${density}\`}>\r
          <RadioFieldGroup legend="Variant" name={\`density-\${density}\`} defaultValue="default">\r
            {VARIANTS.map(variant => <Radio key={variant} density={density} variant={variant} value={variant} label={\`\${variant} (\${density})\`} />)}\r
          </RadioFieldGroup>\r
        </StorySection>)}\r
    </Stack>
}`,...(Ve=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var ke,we,Ie;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RowStory() {
    const [v, setV] = useState('s');
    return <RadioFieldGroup legend="Size (horizontal group)" name="size-row" value={v} onChange={e => setV(e.target.value)} row>\r
        <Radio value="s" label="S" variant="default" />\r
        <Radio value="m" label="M" variant="default" />\r
        <Radio value="l" label="L" variant="default" />\r
      </RadioFieldGroup>;
  }
}`,...(Ie=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Te,Fe,Be;_.parameters={..._.parameters,docs:{...(Te=_.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Controlled() {
    const [value, setValue] = useState('draft');
    return <Stack spacing={spacing[2]} alignItems="flex-start">\r
        <Typography variant="body2" color="text.secondary">\r
          Controlled <code>value</code> + <code>onChange</code> on <code>RadioFieldGroup</code>.\r
        </Typography>\r
        <RadioFieldGroup legend="Status" name="status-controlled" value={value} onChange={e => setValue(e.target.value)}>\r
          <Radio value="draft" label="Draft" />\r
          <Radio value="published" label="Published" />\r
        </RadioFieldGroup>\r
      </Stack>;
  }
}`,...(Be=(Fe=_.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var $e,Ge,Ae;U.parameters={...U.parameters,docs:{...($e=U.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function A11y() {
    const [v, setV] = useState('yes');
    return <Stack spacing={spacing[2]} sx={{
      maxWidth: 720
    }}>\r
        <Typography variant="body2" color="text.secondary" component="ul" sx={{
        m: 0,
        pl: 3
      }}>\r
          <li>Arrow keys move between radios in the same group (MUI / browser behavior).</li>\r
          <li>Space selects the focused option.</li>\r
          <li>\r
            <code>fieldset</code> / <code>legend</code> expose the group name to assistive tech.\r
          </li>\r
          <li>\r
            Optional description text is linked with <code>aria-describedby</code> on the input.\r
          </li>\r
        </Typography>\r
        <RadioFieldGroup legend="Notifications" name="a11y-demo" value={v} onChange={e => setV(e.target.value)}>\r
          <Radio value="yes" label="Enable" description="You can change this in settings at any time." />\r
          <Radio value="no" label="Disable" />\r
        </RadioFieldGroup>\r
      </Stack>;
  }
}`,...(Ae=(Ge=U.parameters)==null?void 0:Ge.docs)==null?void 0:Ae.source}}};const io=["Playground","RoleAndStructure","AllVariantsTwoOptions","AllVariantsSideBySide","AllVariantsDisabledOption","AllVariantsValidation","AllDensities","RowLayout","BehaviorControlled","Accessibility"];export{U as Accessibility,D as AllDensities,N as AllVariantsDisabledOption,E as AllVariantsSideBySide,O as AllVariantsTwoOptions,q as AllVariantsValidation,_ as BehaviorControlled,z as Playground,M as RoleAndStructure,W as RowLayout,io as __namedExportsOrder,so as default};
