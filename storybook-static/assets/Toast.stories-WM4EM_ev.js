import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-BSnFy17d.js";import{s as t}from"./spacing-tokens-D0rW3Zez.js";import{f as z,t as a,g as c}from"./typography-tokens-DtjjMcdU.js";import{p as ae}from"./primitive-colors-CqocY7XZ.js";import{r as ie}from"./radius-tokens-D-KuzIVl.js";import{B as o}from"./Box-D0N3bMl-.js";import{I as B,C as le}from"./info-D4xN_RYm.js";import{C as T}from"./circle-alert-yUrDUNcd.js";import{I as ce}from"./IconButton-CfAanETB.js";import{X as de}from"./x-D6V3VCLa.js";import"./createTheme-DI3Ygkl-.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./extendSxProp-BsGpowVv.js";import"./createLucideIcon-VIERY1cO.js";import"./memoTheme-BRZfWJPw.js";import"./DefaultPropsProvider-3wuxoqT1.js";import"./createSimplePaletteValueFilter-DP1slul8.js";import"./useId-BL9O7AM2.js";import"./ButtonBase-C-pKo4oY.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./CircularProgress-DMSsZ7A0.js";const r=ae,pe={info:B,success:le,warning:T,danger:T,neutral:B};function ue(s){return s==="success"?{bg:r.green[100],fg:r.green[800],border:r.green[400]}:s==="warning"?{bg:r.orange[100],fg:r.orange[800],border:r.orange[400]}:s==="danger"?{bg:r.red[100],fg:r.red[800],border:r.red[400]}:s==="info"?{bg:r.blue[100],fg:r.blue[800],border:r.blue[400]}:{bg:r.gray[100],fg:r.gray[800],border:r.gray[400]}}function me(s,n){const i=ue(n);return s==="solid"?{backgroundColor:i.border,color:n==="warning"?r.orange[950]:"#ffffff",border:`1px solid ${i.border}`}:s==="outline"?{backgroundColor:"#ffffff",color:i.fg,border:`1px solid ${i.border}`}:{backgroundColor:i.bg,color:i.fg,border:"1px solid transparent"}}const l=({title:s,message:n,semantic:i="info",variant:d="soft",showIcon:ee=!0,ctaLabel:v,onCtaClick:oe,linkLabel:k,onLinkClick:se,onClose:p,autoDismissMs:C,pauseOnHover:te=!0})=>{S.useEffect(()=>{if(!C||!p)return;const ne=window.setTimeout(()=>p(),C);return()=>window.clearTimeout(ne)},[C,p]);const re=pe[i];return e.jsxs(o,{role:"status","aria-live":"polite",sx:{...me(d,i),width:360,maxWidth:"100%",display:"grid",gridTemplateColumns:"auto 1fr auto",gap:t[2],borderRadius:ie.md,px:t[3],py:t[2.5],boxShadow:`0 10px 24px ${r.gray[900]}22`,...te&&{transition:"transform 120ms ease","&:hover":{transform:"translateY(-1px)"}}},children:[e.jsx(o,{sx:{width:18,height:18,mt:t[.5]},children:ee?e.jsx(re,{size:18,"aria-hidden":!0,strokeWidth:2.1}):null}),e.jsxs(o,{sx:{display:"grid",gap:t[1]},children:[s?e.jsx(o,{sx:{fontSize:a.sm.fontSize,fontWeight:z.semibold},children:s}):null,e.jsx(o,{sx:{fontSize:a.sm.fontSize},children:n}),v||k?e.jsxs(o,{sx:{display:"flex",gap:t[2]},children:[v?e.jsx(o,{component:"button",type:"button",onClick:oe,sx:{border:"none",background:"transparent",color:"inherit",p:0,cursor:"pointer",fontWeight:z.semibold,textDecoration:"underline",fontSize:a.xs.fontSize},children:v}):null,k?e.jsx(o,{component:"button",type:"button",onClick:se,sx:{border:"none",background:"transparent",color:"inherit",p:0,cursor:"pointer",textDecoration:"underline",fontSize:a.xs.fontSize},children:k}):null]}):null]}),p?e.jsx(ce,{size:"small","aria-label":"Close toast",onClick:p,sx:{color:"inherit"},children:e.jsx(de,{size:16,"aria-hidden":!0})}):e.jsx(o,{})]})};try{l.displayName="Toast",l.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},semantic:{defaultValue:{value:"info"},description:"",name:"semantic",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"soft"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"solid"'},{value:'"soft"'}]}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},ctaLabel:{defaultValue:null,description:"",name:"ctaLabel",required:!1,type:{name:"string"}},onCtaClick:{defaultValue:null,description:"",name:"onCtaClick",required:!1,type:{name:"(() => void)"}},linkLabel:{defaultValue:null,description:"",name:"linkLabel",required:!1,type:{name:"string"}},onLinkClick:{defaultValue:null,description:"",name:"onLinkClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},autoDismissMs:{defaultValue:null,description:"",name:"autoDismissMs",required:!1,type:{name:"number"}},pauseOnHover:{defaultValue:{value:"true"},description:"",name:"pauseOnHover",required:!1,type:{name:"boolean"}}}}}catch{}const Q=["neutral","info","success","warning","danger"],Z=["soft","outline","solid"],Ne={title:"Shared/Toast",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Toast is non-blocking and ephemeral feedback. Unlike alert, toast is usually auto-dismissed, stacked and positioned around viewport corners."}}},argTypes:{title:{control:"text"},message:{control:"text"},semantic:{control:"inline-radio",options:Q},variant:{control:"inline-radio",options:Z},showIcon:{control:"boolean"},ctaLabel:{control:"text"},linkLabel:{control:"text"},autoDismissMs:{control:"number"},pauseOnHover:{control:"boolean"},onCtaClick:{action:"cta clicked"},onLinkClick:{action:"link clicked"},onClose:{action:"close clicked"}},args:{title:"Saved",message:"Your settings were updated.",semantic:"success",variant:"soft",showIcon:!0,ctaLabel:"Undo",linkLabel:"Details",autoDismissMs:4e3,pauseOnHover:!0}},u={},m={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:t[3]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.secondary},children:"Toast objective: quick, non-blocking feedback for asynchronous outcomes (saved, synced, failed, copied, queued)."}),e.jsx(l,{title:"Profile updated",message:"Changes are available across your workspace.",semantic:"success",ctaLabel:"Undo",onClose:()=>{}})]})},g={parameters:{controls:{disable:!0}},render:()=>e.jsx(o,{sx:{display:"grid",gap:t[4]},children:Z.map(s=>e.jsxs(o,{sx:{display:"grid",gap:t[2]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.primary,textTransform:"capitalize"},children:s}),e.jsx(o,{sx:{display:"grid",gap:t[2]},children:Q.map(n=>e.jsx(l,{title:`${n} toast`,message:"Short asynchronous feedback.",semantic:n,variant:s,onClose:()=>{}},`${s}-${n}`))})]},s))})},x={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:t[3]},children:[e.jsx(l,{title:"With CTA + link + close",message:"Toast supports optional actions and optional close.",semantic:"info",ctaLabel:"Retry",linkLabel:"Details",onClose:()=>{}}),e.jsx(l,{title:"Without actions",message:"Minimal toast for lightweight confirmation.",semantic:"neutral",variant:"outline",onClose:()=>{}}),e.jsx(l,{title:"No icon",message:"Icon can be omitted if context already communicates intent.",showIcon:!1,semantic:"success",onClose:()=>{}})]})};function ge(){const[s,n]=S.useState(!0);return S.useEffect(()=>{if(!s)return;const i=window.setTimeout(()=>n(!1),3500);return()=>window.clearTimeout(i)},[s]),e.jsxs(o,{sx:{display:"grid",gap:t[2]},children:[e.jsx(o,{sx:{fontSize:a.xs.fontSize,color:c.secondary},children:"Auto-dismiss after 3.5s. Re-open with the button."}),e.jsx(o,{component:"button",type:"button",onClick:()=>n(!0),style:{width:100,height:32,cursor:"pointer"},children:"Trigger"}),s?e.jsx(l,{title:"Auto-dismiss",message:"This toast closes automatically.",semantic:"info",autoDismissMs:3500,onClose:()=>n(!1)}):null]})}const f={parameters:{controls:{disable:!0}},render:()=>e.jsx(ge,{})};function j({position:s}){const n=S.useMemo(()=>[{id:1,title:"Saved",semantic:"success",msg:"Configuration updated."},{id:2,title:"Sync delayed",semantic:"warning",msg:"Background retry in progress."},{id:3,title:"Connection lost",semantic:"danger",msg:"Trying to reconnect…"}],[]),i=s==="top-right"?{justifyContent:"end",alignItems:"start"}:s==="bottom-left"?{justifyContent:"start",alignItems:"end"}:{justifyContent:"center",alignItems:"center"};return e.jsx(o,{sx:{minHeight:340,border:"1px dashed #d1d5db",p:t[3],display:"grid",...i},children:e.jsx(o,{sx:{display:"grid",gap:t[2]},children:n.map(d=>e.jsx(l,{title:d.title,message:d.msg,semantic:d.semantic,onClose:()=>{}},d.id))})})}const y={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:t[4]},children:[e.jsx(o,{sx:{fontSize:a.xs.fontSize,color:c.secondary},children:"Typical positioning for toast containers."}),e.jsxs(o,{sx:{display:"grid",gap:t[2]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize},children:"Top-right (standard)"}),e.jsx(j,{position:"top-right"})]}),e.jsxs(o,{sx:{display:"grid",gap:t[2]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize},children:"Bottom-left"}),e.jsx(j,{position:"bottom-left"})]}),e.jsxs(o,{sx:{display:"grid",gap:t[2]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize},children:"Center"}),e.jsx(j,{position:"center"})]})]})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:t[3],maxWidth:860},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.secondary},children:"Toast should be announced through live regions (`aria-live`). Do not dismiss too quickly. If toast has action, keep it visible long enough and ensure controls are keyboard reachable."}),e.jsx(l,{title:"A11y example",message:"Action remains available while toast is visible.",semantic:"info",ctaLabel:"Open",onClose:()=>{}})]})},b={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:t[2],maxWidth:920},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.primary},children:"Toast vs Alert"}),e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.secondary},children:"Toast: ephemeral, non-blocking, often auto-dismiss and stack. Alert: persistent, in flow or banner, manual close, stronger contextual permanence."})]})};var A,w,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(I=(w=u.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var D,q,V;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3]
  }}>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.secondary
    }}>\r
        Toast objective: quick, non-blocking feedback for asynchronous outcomes (saved, synced,\r
        failed, copied, queued).\r
      </Box>\r
      <Toast title="Profile updated" message="Changes are available across your workspace." semantic="success" ctaLabel="Undo" onClose={() => undefined} />\r
    </Box>
}`,...(V=(q=m.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var L,W,_;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      {VARIANTS.map(variant => <Box key={variant} sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
          <Box sx={{
        fontSize: typeScale.sm.fontSize,
        color: textStateColors.primary,
        textTransform: 'capitalize'
      }}>\r
            {variant}\r
          </Box>\r
          <Box sx={{
        display: 'grid',
        gap: spacing[2]
      }}>\r
            {SEMANTICS.map(semantic => <Toast key={\`\${variant}-\${semantic}\`} title={\`\${semantic} toast\`} message="Short asynchronous feedback." semantic={semantic} variant={variant} onClose={() => undefined} />)}\r
          </Box>\r
        </Box>)}\r
    </Box>
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,N,M;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3]
  }}>\r
      <Toast title="With CTA + link + close" message="Toast supports optional actions and optional close." semantic="info" ctaLabel="Retry" linkLabel="Details" onClose={() => undefined} />\r
      <Toast title="Without actions" message="Minimal toast for lightweight confirmation." semantic="neutral" variant="outline" onClose={() => undefined} />\r
      <Toast title="No icon" message="Icon can be omitted if context already communicates intent." showIcon={false} semantic="success" onClose={() => undefined} />\r
    </Box>
}`,...(M=(N=x.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var $,E,P;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <AutoDismissDemo />
}`,...(P=(E=f.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var R,U,H;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      <Box sx={{
      fontSize: typeScale.xs.fontSize,
      color: textStateColors.secondary
    }}>\r
        Typical positioning for toast containers.\r
      </Box>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize
      }}>Top-right (standard)</Box>\r
        <StackDemo position="top-right" />\r
      </Box>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize
      }}>Bottom-left</Box>\r
        <StackDemo position="bottom-left" />\r
      </Box>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize
      }}>Center</Box>\r
        <StackDemo position="center" />\r
      </Box>\r
    </Box>
}`,...(H=(U=y.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var Y,G,X;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3],
    maxWidth: 860
  }}>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.secondary
    }}>\r
        Toast should be announced through live regions (\`aria-live\`). Do not dismiss too quickly.\r
        If toast has action, keep it visible long enough and ensure controls are keyboard reachable.\r
      </Box>\r
      <Toast title="A11y example" message="Action remains available while toast is visible." semantic="info" ctaLabel="Open" onClose={() => undefined} />\r
    </Box>
}`,...(X=(G=h.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var F,J,K;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[2],
    maxWidth: 920
  }}>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.primary
    }}>Toast vs Alert</Box>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.secondary
    }}>\r
        Toast: ephemeral, non-blocking, often auto-dismiss and stack. Alert: persistent, in flow or\r
        banner, manual close, stronger contextual permanence.\r
      </Box>\r
    </Box>
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Me=["Playground","ObjectiveAndUseCases","VariantsAndSemantics","StructureAndActions","BehaviorAutoDismissAndPause","PositioningAndStack","Accessibility","ToastVsAlertGuidance"];export{h as Accessibility,f as BehaviorAutoDismissAndPause,m as ObjectiveAndUseCases,u as Playground,y as PositioningAndStack,x as StructureAndActions,b as ToastVsAlertGuidance,g as VariantsAndSemantics,Me as __namedExportsOrder,Ne as default};
