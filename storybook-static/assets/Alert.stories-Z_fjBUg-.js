import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{s as r}from"./spacing-tokens-D0rW3Zez.js";import{f as Y,t as l,g as u}from"./typography-tokens-DtjjMcdU.js";import{p as ee}from"./primitive-colors-CqocY7XZ.js";import{r as ne}from"./radius-tokens-D-KuzIVl.js";import{B as n}from"./Box-D0N3bMl-.js";import{I as j,C as re}from"./info-D4xN_RYm.js";import{C as te}from"./circle-alert-yUrDUNcd.js";import{B as se}from"./bell-BlOIC-r5.js";import{I as ae}from"./IconButton-CfAanETB.js";import{X as ie}from"./x-D6V3VCLa.js";import"./createTheme-DI3Ygkl-.js";import"./index-BSnFy17d.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./extendSxProp-BsGpowVv.js";import"./createLucideIcon-VIERY1cO.js";import"./memoTheme-BRZfWJPw.js";import"./DefaultPropsProvider-3wuxoqT1.js";import"./createSimplePaletteValueFilter-DP1slul8.js";import"./useId-BL9O7AM2.js";import"./ButtonBase-C-pKo4oY.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./CircularProgress-DMSsZ7A0.js";const s=ee,oe={info:j,success:re,warning:se,danger:te,neutral:j};function le(t){return t==="success"?{bg:s.green[100],fg:s.green[800],border:s.green[400]}:t==="warning"?{bg:s.orange[100],fg:s.orange[800],border:s.orange[400]}:t==="danger"?{bg:s.red[100],fg:s.red[800],border:s.red[400]}:t==="info"?{bg:s.blue[100],fg:s.blue[800],border:s.blue[400]}:{bg:s.gray[100],fg:s.gray[800],border:s.gray[400]}}function ce(t,o){const a=le(o);return t==="solid"?{backgroundColor:a.border,color:o==="warning"?s.orange[950]:"#ffffff",border:`1px solid ${a.border}`}:t==="outline"?{backgroundColor:"#ffffff",color:a.fg,border:`1px solid ${a.border}`}:{backgroundColor:a.bg,color:a.fg,border:"1px solid transparent"}}function m({children:t,onClick:o}){return t?e.jsx(n,{component:"button",type:"button",onClick:o,sx:{border:"none",background:"transparent",p:0,cursor:"pointer",color:"inherit",fontWeight:Y.semibold,fontSize:l.xs.fontSize,textDecoration:"underline"},children:t}):null}const i=({title:t,message:o,semantic:a="info",variant:F="soft",layout:G="multiline",showIcon:H=!0,ctaLabel:c,onCtaClick:S,linkLabel:d,onLinkClick:C,onClose:J,closeLabel:Q="Close alert"})=>{const Z=oe[a],p=G==="single-line";return e.jsxs(n,{role:a==="danger"||a==="warning"?"alert":"status","aria-live":a==="danger"||a==="warning"?"assertive":"polite",sx:{...ce(F,a),display:"grid",gridTemplateColumns:"auto 1fr auto",gap:r[2],borderRadius:ne.md,px:r[3],py:r[2.5],alignItems:p?"center":"start"},children:[e.jsx(n,{sx:{width:18,height:18,mt:p?0:r[.5]},children:H?e.jsx(Z,{size:18,"aria-hidden":!0,strokeWidth:2.1}):null}),e.jsxs(n,{sx:{display:"grid",gap:r[1]},children:[t?e.jsx(n,{sx:{fontSize:l.sm.fontSize,fontWeight:Y.semibold},children:t}):null,e.jsx(n,{sx:{fontSize:l.sm.fontSize,color:"inherit"},children:o}),(c||d)&&!p?e.jsxs(n,{sx:{display:"flex",gap:r[2]},children:[c?e.jsx(m,{onClick:S,children:c}):null,d?e.jsx(m,{onClick:C,children:d}):null]}):null]}),e.jsxs(n,{sx:{display:"flex",alignItems:"start",gap:r[2]},children:[(c||d)&&p?e.jsxs(n,{sx:{display:"flex",gap:r[2],alignItems:"center"},children:[c?e.jsx(m,{onClick:S,children:c}):null,d?e.jsx(m,{onClick:C,children:d}):null]}):null,e.jsx(ae,{size:"small","aria-label":Q,onClick:J,sx:{color:"inherit",mt:"-2px"},children:e.jsx(ie,{size:16,"aria-hidden":!0})})]})]})};try{i.displayName="Alert",i.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},semantic:{defaultValue:{value:"info"},description:"",name:"semantic",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"soft"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"soft"'},{value:'"outline"'},{value:'"solid"'}]}},layout:{defaultValue:{value:"multiline"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"single-line"'},{value:'"multiline"'}]}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},ctaLabel:{defaultValue:null,description:"",name:"ctaLabel",required:!1,type:{name:"string"}},onCtaClick:{defaultValue:null,description:"",name:"onCtaClick",required:!1,type:{name:"(() => void)"}},linkLabel:{defaultValue:null,description:"",name:"linkLabel",required:!1,type:{name:"string"}},onLinkClick:{defaultValue:null,description:"",name:"onLinkClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Close is mandatory for Alert by design rules.",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"Close alert"},description:"",name:"closeLabel",required:!1,type:{name:"string"}}}}}catch{}const K=["neutral","info","success","warning","danger"],X=["soft","outline","solid"],Ue={title:"Shared/Alert",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Alert is persistent and contextual feedback. Unlike toast, alert is usually inline or banner-based and always includes manual close action."}}},argTypes:{title:{control:"text"},message:{control:"text"},semantic:{control:"inline-radio",options:K},variant:{control:"inline-radio",options:X},layout:{control:"inline-radio",options:["single-line","multiline"]},showIcon:{control:"boolean"},ctaLabel:{control:"text"},linkLabel:{control:"text"},onCtaClick:{action:"cta clicked"},onLinkClick:{action:"link clicked"},onClose:{action:"close clicked"}},args:{title:"Connection issue",message:"Your last action was not saved. Please retry.",semantic:"warning",variant:"soft",layout:"multiline",showIcon:!0,ctaLabel:"Retry",linkLabel:"Learn more"}},g={},x={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:r[3],maxWidth:900},children:[e.jsx(n,{sx:{fontSize:l.sm.fontSize,color:u.secondary},children:"Alert objective: persistent, contextual communication in-page. Typical cases: validation summary, environment warning, permissions issue, billing notice, migration notice."}),e.jsx(i,{title:"Billing warning",message:"Your payment method expires soon. Update it to avoid service interruption.",semantic:"warning",variant:"soft",ctaLabel:"Update method",onClose:()=>{}})]})},f={parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:{display:"grid",gap:r[4]},children:X.map(t=>e.jsxs(n,{sx:{display:"grid",gap:r[2]},children:[e.jsx(n,{sx:{fontSize:l.sm.fontSize,color:u.primary,textTransform:"capitalize"},children:t}),e.jsx(n,{sx:{display:"grid",gap:r[2]},children:K.map(o=>e.jsx(i,{title:`${o} alert`,message:"Message for contextual feedback.",semantic:o,variant:t,onClose:()=>{}},`${t}-${o}`))})]},t))})},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:r[3],maxWidth:900},children:[e.jsx(i,{title:"With CTA + link + close",message:"Manual close is required for alert.",semantic:"info",ctaLabel:"Retry",linkLabel:"Details",onClose:()=>{}}),e.jsx(i,{title:"With close only",message:"Use this for passive but persistent information.",semantic:"neutral",variant:"outline",onClose:()=>{}})]})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:r[3]},children:[e.jsx(i,{title:"Single line with actions",message:"Deployment paused.",layout:"single-line",semantic:"warning",ctaLabel:"Retry",linkLabel:"Logs",onClose:()=>{}}),e.jsx(i,{title:"Multiline with icon",message:"This alert uses multiline layout. It supports longer contextual explanation while staying persistent.",layout:"multiline",semantic:"danger",onClose:()=>{}}),e.jsx(i,{title:"Multiline without icon",message:"Icons are optional, content still communicates meaning.",showIcon:!1,semantic:"success",onClose:()=>{}})]})},b={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:r[4],maxWidth:980},children:[e.jsxs(n,{sx:{display:"grid",gap:r[2]},children:[e.jsx(n,{sx:{fontSize:l.sm.fontSize,color:u.primary},children:"Inline in page flow"}),e.jsxs(n,{sx:{border:"1px dashed #d1d5db",p:r[3],display:"grid",gap:r[3]},children:[e.jsx(n,{sx:{fontSize:l.sm.fontSize},children:"Profile settings"}),e.jsx(i,{title:"Unsaved changes",message:"Save or discard before leaving this section.",semantic:"warning",onClose:()=>{}})]})]}),e.jsxs(n,{sx:{display:"grid",gap:r[2]},children:[e.jsx(n,{sx:{fontSize:l.sm.fontSize,color:u.primary},children:"Top-page banner"}),e.jsx(i,{title:"Scheduled maintenance",message:"The platform will be read-only from 02:00 to 02:30 UTC.",semantic:"info",variant:"outline",onClose:()=>{}})]})]})},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:r[3],maxWidth:860},children:[e.jsx(n,{sx:{fontSize:l.sm.fontSize,color:u.secondary},children:'Non-urgent alerts should use polite announcements (`role="status"`). Urgent alerts can use `role="alert"` with assertive live region. Keep close control keyboard-reachable and keep enough time for users to act when actions are present.'}),e.jsx(i,{title:"A11y example (urgent)",message:"This variant simulates critical content and should be announced immediately.",semantic:"danger",ctaLabel:"Resolve",onClose:()=>{}})]})};var w,B,A;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(A=(B=g.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var k,z,I;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3],
    maxWidth: 900
  }}>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.secondary
    }}>\r
        Alert objective: persistent, contextual communication in-page. Typical cases: validation\r
        summary, environment warning, permissions issue, billing notice, migration notice.\r
      </Box>\r
      <Alert title="Billing warning" message="Your payment method expires soon. Update it to avoid service interruption." semantic="warning" variant="soft" ctaLabel="Update method" onClose={() => undefined} />\r
    </Box>
}`,...(I=(z=x.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var T,L,V;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            {SEMANTICS.map(semantic => <Alert key={\`\${variant}-\${semantic}\`} title={\`\${semantic} alert\`} message="Message for contextual feedback." semantic={semantic} variant={variant} onClose={() => undefined} />)}\r
          </Box>\r
        </Box>)}\r
    </Box>
}`,...(V=(L=f.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var W,U,q;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3],
    maxWidth: 900
  }}>\r
      <Alert title="With CTA + link + close" message="Manual close is required for alert." semantic="info" ctaLabel="Retry" linkLabel="Details" onClose={() => undefined} />\r
      <Alert title="With close only" message="Use this for passive but persistent information." semantic="neutral" variant="outline" onClose={() => undefined} />\r
    </Box>
}`,...(q=(U=y.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var _,M,R;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3]
  }}>\r
      <Alert title="Single line with actions" message="Deployment paused." layout="single-line" semantic="warning" ctaLabel="Retry" linkLabel="Logs" onClose={() => undefined} />\r
      <Alert title="Multiline with icon" message="This alert uses multiline layout. It supports longer contextual explanation while staying persistent." layout="multiline" semantic="danger" onClose={() => undefined} />\r
      <Alert title="Multiline without icon" message="Icons are optional, content still communicates meaning." showIcon={false} semantic="success" onClose={() => undefined} />\r
    </Box>
}`,...(R=(M=h.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var N,$,E;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4],
    maxWidth: 980
  }}>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize,
        color: textStateColors.primary
      }}>Inline in page flow</Box>\r
        <Box sx={{
        border: '1px dashed #d1d5db',
        p: spacing[3],
        display: 'grid',
        gap: spacing[3]
      }}>\r
          <Box sx={{
          fontSize: typeScale.sm.fontSize
        }}>Profile settings</Box>\r
          <Alert title="Unsaved changes" message="Save or discard before leaving this section." semantic="warning" onClose={() => undefined} />\r
        </Box>\r
      </Box>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize,
        color: textStateColors.primary
      }}>Top-page banner</Box>\r
        <Alert title="Scheduled maintenance" message="The platform will be read-only from 02:00 to 02:30 UTC." semantic="info" variant="outline" onClose={() => undefined} />\r
      </Box>\r
    </Box>
}`,...(E=($=b.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var P,D,O;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        Non-urgent alerts should use polite announcements (\`role="status"\`). Urgent alerts can use\r
        \`role="alert"\` with assertive live region. Keep close control keyboard-reachable and keep\r
        enough time for users to act when actions are present.\r
      </Box>\r
      <Alert title="A11y example (urgent)" message="This variant simulates critical content and should be announced immediately." semantic="danger" ctaLabel="Resolve" onClose={() => undefined} />\r
    </Box>
}`,...(O=(D=v.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const qe=["Playground","ObjectiveAndUseCases","VariantsAndSemantics","StructureAndActions","LayoutVariants","PositioningExamples","Accessibility"];export{v as Accessibility,h as LayoutVariants,x as ObjectiveAndUseCases,g as Playground,b as PositioningExamples,y as StructureAndActions,f as VariantsAndSemantics,qe as __namedExportsOrder,Ue as default};
