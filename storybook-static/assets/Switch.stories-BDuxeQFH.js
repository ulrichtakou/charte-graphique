import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as F}from"./index-BSnFy17d.js";import{s}from"./spacing-tokens-D0rW3Zez.js";import{g as y,f as je,t as B}from"./typography-tokens-DtjjMcdU.js";import{p as Te}from"./primitive-colors-CqocY7XZ.js";import{r as K}from"./radius-tokens-D-KuzIVl.js";import{c as Be,a as C,b as v}from"./createTheme-DI3Ygkl-.js";import{c as $e}from"./createSimplePaletteValueFilter-DP1slul8.js";import{S as Me,F as Pe}from"./FormControlLabel-D4S5vkvh.js";import{c as ze,s as U,m as _}from"./memoTheme-BRZfWJPw.js";import{g as Ie,a as Oe}from"./generateUtilityClasses-DGi4yQgU.js";import{u as X}from"./useSlot-BPdpMB5v.js";import{u as Re}from"./DefaultPropsProvider-3wuxoqT1.js";import{m as Ae}from"./mergeSlotProps-Z9pVGpSy.js";import{F as G,a as Ve}from"./FormHelperText-B0TJpcuu.js";import{B as c}from"./Box-D0N3bMl-.js";import{S as b}from"./Stack-BUQa9Y5t.js";import{T as $}from"./Typography-DVAwIxBx.js";import"./utils-qtldwDL5.js";import"./useControlled-DHwV1zIL.js";import"./ButtonBase-C-pKo4oY.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-DJ73tQiJ.js";import"./extendSxProp-BsGpowVv.js";import"./index-CwGUpMSx.js";function We(e){return Ie("MuiSwitch",e)}const i=Oe("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Ne=e=>{const{classes:a,edge:r,size:o,color:d,checked:x,disabled:g}=e,f={root:["root",r&&`edge${C(r)}`,`size${C(o)}`],switchBase:["switchBase",`color${C(d)}`,x&&"checked",g&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=ze(f,We,a);return{...a,...h}},De=U("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.edge&&a[`edge${C(r.edge)}`],a[`size${C(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${i.thumb}`]:{width:16,height:16},[`& .${i.switchBase}`]:{padding:4,[`&.${i.checked}`]:{transform:"translateX(16px)"}}}}]}),Ee=U(Me,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.switchBase,{[`& .${i.input}`]:a.input},r.color!=="default"&&a[`color${C(r.color)}`]]}})(_(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${i.checked}`]:{transform:"translateX(20px)"},[`&.${i.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${i.checked} + .${i.track}`]:{opacity:.5},[`&.${i.disabled} + .${i.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${i.input}`]:{left:"-100%",width:"300%"}})),_(({theme:e})=>({"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter($e(["light"])).map(([a])=>({props:{color:a},style:{[`&.${i.checked}`]:{color:(e.vars||e).palette[a].main,"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[a].main,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${i.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${a}DisabledColor`]:`${e.palette.mode==="light"?e.lighten(e.palette[a].main,.62):e.darken(e.palette[a].main,.55)}`}},[`&.${i.checked} + .${i.track}`]:{backgroundColor:(e.vars||e).palette[a].main}}}))]}))),qe=U("span",{name:"MuiSwitch",slot:"Track"})(_(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,boxSizing:"border-box",border:"1px solid transparent",zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`}))),Le=U("span",{name:"MuiSwitch",slot:"Thumb"})(_(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",boxSizing:"border-box",border:"1px solid transparent",width:20,height:20,borderRadius:"50%"}))),Fe=F.forwardRef(function(a,r){const o=Re({props:a,name:"MuiSwitch"}),{className:d,color:x="primary",edge:g=!1,size:f="medium",sx:h,slots:p={},slotProps:u={},...w}=o,l={...o,color:x,edge:g,size:f},S=Ne(l),j=u.input,T={slots:p,slotProps:u},[k,P]=X("root",{className:Be(S.root,d),elementType:De,externalForwardedProps:T,ownerState:l,additionalProps:{sx:h}}),[Y,z]=X("thumb",{className:S.thumb,elementType:Le,externalForwardedProps:T,ownerState:l}),I=t.jsx(Y,{...z}),[O,H]=X("track",{className:S.track,elementType:qe,externalForwardedProps:T,ownerState:l});return t.jsxs(k,{...P,children:[t.jsx(Ee,{type:"checkbox",icon:I,checkedIcon:I,ref:r,ownerState:l,...w,classes:{...S,root:S.switchBase},slots:{...p.switchBase&&{root:p.switchBase},...p.input&&{input:p.input}},slotProps:{...u.switchBase&&{root:typeof u.switchBase=="function"?u.switchBase(l):u.switchBase},input:Ae(typeof j=="function"?j(l):j,{role:"switch"})}}),t.jsx(O,{...H})]})}),m=Te,_e={sm:"small",md:"medium",lg:"medium"};function Ue(e,a,r){const o=r?m.red[600]:m.blue[600],d=r?v(m.red[200],.9):m.gray[300],x=e==="soft"?v(o,.45):o,g="#ffffff",f=r?m.red[50]:"#ffffff",h=a==="lg"?1.08:1,u={...h!==1?{transform:`scale(${h})`,transformOrigin:"left center"}:{},m:0,p:a==="sm"?s[.5]:s[1],"& .MuiSwitch-track":{borderRadius:K.full,backgroundColor:d,opacity:1,border:"none"},"& .MuiSwitch-switchBase + .MuiSwitch-track":{backgroundColor:d},"& .MuiSwitch-switchBase":{color:f,"&:not(.Mui-checked):hover":{backgroundColor:v(m.gray[900],.04)},"&.Mui-focusVisible":{outline:`2px solid ${o}`,outlineOffset:2,borderRadius:K.sm}},"& .MuiSwitch-switchBase.Mui-checked":{color:g,"&:hover":{backgroundColor:v(o,.12)}},"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:x,opacity:1},"& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track":{backgroundColor:m.gray[200],opacity:1},"& .MuiSwitch-switchBase.Mui-disabled.Mui-checked + .MuiSwitch-track":{backgroundColor:v(o,.35)},"& .MuiSwitch-switchBase.Mui-disabled":{color:m.gray[100]}};return e==="outlined"?{...u,"& .MuiSwitch-track":{borderRadius:K.full,backgroundColor:"transparent",opacity:1,border:`2px solid ${r?m.red[400]:m.gray[400]}`},"& .MuiSwitch-switchBase + .MuiSwitch-track":{backgroundColor:"transparent"},"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:v(o,.22),borderColor:o,opacity:1}}:u}const n=F.forwardRef(function({label:a,description:r,helperText:o,invalid:d=!1,variant:x="default",density:g="md",labelPlacement:f="end",fullWidth:h=!1,disabled:p,id:u,inputProps:w,sx:l,...S},j){const T=F.useId(),k=u??`sparing-switch-${T}`,P=`${k}-helper`,z=[w==null?void 0:w["aria-describedby"],r?`${k}-desc`:null,o?P:null].filter(Boolean).join(" "),I={...w,id:k,role:"switch","aria-invalid":d||void 0,...z?{"aria-describedby":z}:{}},O=t.jsx(Fe,{ref:j,disableRipple:!0,size:_e[g],disabled:p,inputProps:I,sx:[Ue(x,g,d),...Array.isArray(l)?l:l?[l]:[]],...S});if(a==null&&r==null&&o==null)return t.jsx(G,{disabled:p,error:d,sx:{display:"inline-flex"},children:O});const H=t.jsxs(c,{sx:{display:"flex",flexDirection:"column",gap:s[.5],pt:.25},children:[t.jsx(c,{component:"span",sx:{fontSize:B.sm.fontSize,fontWeight:je.medium,color:p?y.disabled:y.primary,lineHeight:1.4},children:a}),r?t.jsx(c,{component:"span",id:`${k}-desc`,sx:{fontSize:B.xs.fontSize,color:y.secondary,lineHeight:1.45},children:r}):null]});return t.jsxs(G,{component:"div",disabled:p,error:d,sx:{width:h?"100%":"auto",alignItems:"flex-start"},children:[t.jsx(Pe,{control:O,label:H,labelPlacement:f,sx:{alignItems:"flex-start",m:0,gap:s[1],width:h?"100%":"auto",justifyContent:f==="start"?"space-between":"flex-start","& .MuiFormControlLabel-label":{width:h?"100%":"auto"}}}),o?t.jsx(Ve,{id:P,sx:{mx:0,mt:s[1],ml:{xs:0,sm:f==="end"?6.5:0}},children:o}):null]})});try{n.displayName="Switch",n.__docgenInfo={description:"Toggle switch for binary settings that apply immediately (on/off). Prefer over `Checkbox` when\nthe control is not part of a multi-select or explicit “agree” pattern.",displayName:"Switch",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"soft"'},{value:'"outlined"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<SwitchSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"span", SwitchRootSlotPropsOverrides, SwitchOwnerState>; track?: SlotProps<"span", SwitchTrackSlotPropsOverrides, SwitchOwnerState>; thumb?: SlotProps<...> | undefined; switchBase?: SlotProps<...> | undefined; input?: SlotProps<...> | undefined; } | undefined'}},density:{defaultValue:{value:"md"},description:"",name:"density",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},labelPlacement:{defaultValue:{value:"end"},description:"Position of the label relative to the control.",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}}}}}catch{}const M=["default","soft","outlined"],Ce=["sm","md","lg"];function He({title:e,children:a}){return t.jsxs(c,{component:"section",sx:{display:"grid",gap:s[2]},children:[t.jsx($,{variant:"subtitle2",sx:{fontWeight:600,color:y.primary},children:e}),a]})}function Ke(){return t.jsxs(c,{sx:{display:"flex",gap:s[4],pl:12},children:[t.jsx(c,{sx:{width:160,fontSize:B.xs.fontSize,fontWeight:600,color:y.secondary},children:"Off"}),t.jsx(c,{sx:{width:160,fontSize:B.xs.fontSize,fontWeight:600,color:y.secondary},children:"On"})]})}const wt={title:"Shared/Switch",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'Binary toggle for settings that take effect immediately (e.g. dark mode, notifications). Uses `role="switch"` on the input for assistive technology.'}}},argTypes:{label:{control:"text"},description:{control:"text"},helperText:{control:"text"},invalid:{control:"boolean"},disabled:{control:"boolean"},checked:{control:"boolean"},variant:{control:"inline-radio",options:M},density:{control:"inline-radio",options:Ce},labelPlacement:{control:"inline-radio",options:["end","start"]},fullWidth:{control:"boolean"}},args:{label:"Enable notifications",description:"Applies as soon as you toggle.",helperText:"",invalid:!1,disabled:!1,defaultChecked:!1,variant:"default",density:"md",labelPlacement:"end",fullWidth:!1}},R={},A={parameters:{controls:{disable:!0}},render:()=>t.jsxs(b,{spacing:s[2],sx:{maxWidth:640},children:[t.jsxs($,{variant:"body2",color:"text.secondary",children:["The underlying input uses ",t.jsx("code",{children:'role="switch"'})," with ",t.jsx("code",{children:"aria-checked"})," ","managed by MUI. Pair with a visible ",t.jsx("code",{children:"label"})," (or ",t.jsx("code",{children:"aria-label"}),") and optional description via ",t.jsx("code",{children:"aria-describedby"}),"."]}),t.jsx(n,{label:"Public profile",description:"Anyone signed in can see your display name."})]})},V={parameters:{controls:{disable:!0}},render:()=>t.jsxs(c,{sx:{display:"grid",gap:s[3]},children:[t.jsx(Ke,{}),M.map(e=>t.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:s[4]},children:[t.jsx(c,{sx:{width:100,fontSize:B.xs.fontSize,fontWeight:600,color:y.secondary,textTransform:"capitalize"},children:e}),t.jsx(c,{sx:{width:160},children:t.jsx(n,{variant:e,label:"Wi‑Fi",defaultChecked:!1})}),t.jsx(c,{sx:{width:160},children:t.jsx(n,{variant:e,label:"Wi‑Fi",defaultChecked:!0})})]},e))]})},W={parameters:{controls:{disable:!0}},render:()=>t.jsx(b,{spacing:s[4],children:Ce.map(e=>t.jsx(He,{title:`Density · ${e}`,children:t.jsx(b,{direction:"row",flexWrap:"wrap",gap:s[3],alignItems:"center",children:M.map(a=>t.jsx(n,{density:e,variant:a,label:`${a}`,defaultChecked:a==="soft"},`${e}-${a}`))})},e))})},N={parameters:{controls:{disable:!0}},render:()=>t.jsx(b,{direction:"row",flexWrap:"wrap",gap:s[4],children:M.map(e=>t.jsxs(b,{spacing:s[2],children:[t.jsx($,{variant:"caption",sx:{fontWeight:600,textTransform:"capitalize"},children:e}),t.jsx(n,{variant:e,label:"Off (disabled)",disabled:!0,defaultChecked:!1}),t.jsx(n,{variant:e,label:"On (disabled)",disabled:!0,defaultChecked:!0})]},e))})},D={parameters:{controls:{disable:!0}},render:()=>t.jsx(b,{spacing:s[3],children:M.map(e=>t.jsx(n,{variant:e,label:`${e} · accept terms`,invalid:!0,helperText:"Turn on to agree with the updated policy.",defaultChecked:!1},e))})},E={parameters:{controls:{disable:!0}},render:()=>t.jsxs(b,{spacing:s[3],sx:{maxWidth:420},children:[t.jsx(n,{label:"Label end (default)",labelPlacement:"end",defaultChecked:!0}),t.jsx(n,{label:"Label start",labelPlacement:"start",defaultChecked:!0})]})},q={parameters:{controls:{disable:!0}},render:function(){const[a,r]=F.useState(!1);return t.jsxs(b,{spacing:s[2],alignItems:"flex-start",children:[t.jsxs($,{variant:"body2",color:"text.secondary",children:["Controlled ",t.jsx("code",{children:"checked"})," and ",t.jsx("code",{children:"onChange"}),"."]}),t.jsx(n,{label:"Low power mode",checked:a,onChange:o=>r(o.target.checked)})]})}},L={parameters:{controls:{disable:!0}},render:()=>t.jsxs(b,{spacing:s[2],sx:{maxWidth:720},children:[t.jsxs($,{variant:"body2",color:"text.secondary",component:"ul",sx:{m:0,pl:3},children:[t.jsx("li",{children:"Keyboard: Space toggles when the switch is focused."}),t.jsxs("li",{children:["Screen readers: state is exposed as a switch; descriptions use ",t.jsx("code",{children:"aria-describedby"}),"."]}),t.jsx("li",{children:"Ensure on/off is clear from the label (e.g. “Enable …” rather than only “Notifications”)."})]}),t.jsx(n,{label:"Screen reader demo",description:"Secondary text is included in the accessible description.",defaultChecked:!0})]})};var J,Q,Z;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(Z=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[2]} sx={{
    maxWidth: 640
  }}>\r
      <Typography variant="body2" color="text.secondary">\r
        The underlying input uses <code>role=&quot;switch&quot;</code> with <code>aria-checked</code>{' '}\r
        managed by MUI. Pair with a visible <code>label</code> (or <code>aria-label</code>) and optional\r
        description via <code>aria-describedby</code>.\r
      </Typography>\r
      <Switch label="Public profile" description="Anyone signed in can see your display name." />\r
    </Stack>
}`,...(ae=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,oe,se;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3]
  }}>\r
      <VariantLabels />\r
      {VARIANTS.map(variant => <Box key={variant} sx={{
      display: 'flex',
      alignItems: 'center',
      gap: spacing[4]
    }}>\r
          <Box sx={{
        width: 100,
        fontSize: typeScale.xs.fontSize,
        fontWeight: 600,
        color: textStateColors.secondary,
        textTransform: 'capitalize'
      }}>\r
            {variant}\r
          </Box>\r
          <Box sx={{
        width: 160
      }}>\r
            <Switch variant={variant} label="Wi‑Fi" defaultChecked={false} />\r
          </Box>\r
          <Box sx={{
        width: 160
      }}>\r
            <Switch variant={variant} label="Wi‑Fi" defaultChecked />\r
          </Box>\r
        </Box>)}\r
    </Box>
}`,...(se=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ne,le;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[4]}>\r
      {DENSITIES.map(density => <StorySection key={density} title={\`Density · \${density}\`}>\r
          <Stack direction="row" flexWrap="wrap" gap={spacing[3]} alignItems="center">\r
            {VARIANTS.map(variant => <Switch key={\`\${density}-\${variant}\`} density={density} variant={variant} label={\`\${variant}\`} defaultChecked={variant === 'soft'} />)}\r
          </Stack>\r
        </StorySection>)}\r
    </Stack>
}`,...(le=(ne=W.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ce,de,pe;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack direction="row" flexWrap="wrap" gap={spacing[4]}>\r
      {VARIANTS.map(variant => <Stack key={variant} spacing={spacing[2]}>\r
          <Typography variant="caption" sx={{
        fontWeight: 600,
        textTransform: 'capitalize'
      }}>\r
            {variant}\r
          </Typography>\r
          <Switch variant={variant} label="Off (disabled)" disabled defaultChecked={false} />\r
          <Switch variant={variant} label="On (disabled)" disabled defaultChecked />\r
        </Stack>)}\r
    </Stack>
}`,...(pe=(de=N.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,he,me;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]}>\r
      {VARIANTS.map(variant => <Switch key={variant} variant={variant} label={\`\${variant} · accept terms\`} invalid helperText="Turn on to agree with the updated policy." defaultChecked={false} />)}\r
    </Stack>
}`,...(me=(he=D.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var fe,be,ge;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]} sx={{
    maxWidth: 420
  }}>\r
      <Switch label="Label end (default)" labelPlacement="end" defaultChecked />\r
      <Switch label="Label start" labelPlacement="start" defaultChecked />\r
    </Stack>
}`,...(ge=(be=E.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var xe,Se,ye;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Controlled() {
    const [on, setOn] = useState(false);
    return <Stack spacing={spacing[2]} alignItems="flex-start">\r
        <Typography variant="body2" color="text.secondary">\r
          Controlled <code>checked</code> and <code>onChange</code>.\r
        </Typography>\r
        <Switch label="Low power mode" checked={on} onChange={e => setOn(e.target.checked)} />\r
      </Stack>;
  }
}`,...(ye=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var we,ke,ve;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[2]} sx={{
    maxWidth: 720
  }}>\r
      <Typography variant="body2" color="text.secondary" component="ul" sx={{
      m: 0,
      pl: 3
    }}>\r
        <li>Keyboard: Space toggles when the switch is focused.</li>\r
        <li>\r
          Screen readers: state is exposed as a switch; descriptions use <code>aria-describedby</code>.\r
        </li>\r
        <li>\r
          Ensure on/off is clear from the label (e.g. “Enable …” rather than only “Notifications”).\r
        </li>\r
      </Typography>\r
      <Switch label="Screen reader demo" description="Secondary text is included in the accessible description." defaultChecked />\r
    </Stack>
}`,...(ve=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};const kt=["Playground","RoleAndStructure","AllVariantsOffOn","AllDensities","DisabledStates","Validation","LabelPlacement","BehaviorControlled","Accessibility"];export{L as Accessibility,W as AllDensities,V as AllVariantsOffOn,q as BehaviorControlled,N as DisabledStates,E as LabelPlacement,R as Playground,A as RoleAndStructure,D as Validation,kt as __namedExportsOrder,wt as default};
