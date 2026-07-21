import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{C as Y}from"./Chip-C83tGrj-.js";import{B as Z}from"./Box-DmS7QK-Z.js";import"./index-BSnFy17d.js";import"./createTheme-Dzku1811.js";import"./createSvgIcon-D-J456Hj.js";import"./DefaultPropsProvider-ClZCZKfr.js";import"./createSimplePaletteValueFilter-DP1slul8.js";import"./useSlot-dMO3wYTK.js";import"./useForkRef-DcxLCGpL.js";import"./isHostComponent-DVu5iVWx.js";import"./ButtonBase-CthXrRY3.js";const $=r=>r==="default"?"neutral":r,ee={neutral:"default",success:"success",warning:"warning",error:"error",info:"info"},e=({label:r,tone:K,variant:Q="default",size:U="small"})=>{const X=K??$(Q);return a.jsx(Y,{label:r,color:ee[X],size:U,sx:{borderRadius:"9999px",fontWeight:500,fontSize:"11px",height:25,"& .MuiChip-label":{px:1}}})};try{e.displayName="StatusBadge",e.__docgenInfo={description:"",displayName:"StatusBadge",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},tone:{defaultValue:null,description:"",name:"tone",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},variant:{defaultValue:{value:"default"},description:"@deprecated use `tone`",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}}}catch{}const me={title:"Shared/StatusBadge",component:e,tags:["autodocs"],argTypes:{label:{control:"text"},tone:{control:"inline-radio",options:["neutral","success","warning","error","info"]},size:{control:"inline-radio",options:["small","medium"]},variant:{control:"select",options:["default","success","warning","error","info"],description:"Deprecated: use tone"}},args:{label:"Status",tone:"neutral",size:"small"}},s={},n={args:{label:"Draft",tone:"neutral"}},o={args:{label:"Active",tone:"success"}},t={args:{label:"Pending",tone:"warning"}},l={args:{label:"Failed",tone:"error"}},c={args:{label:"Published",tone:"info"}},u={args:{label:"Medium chip",tone:"success",size:"medium"}},i={args:{label:"Very long status label that should wrap or stretch the badge depending on layout constraints",tone:"warning"}},d={args:{label:"Legacy default",tone:void 0,variant:"default"}},p={args:{label:"Legacy success",tone:void 0,variant:"success"}},m={render:()=>a.jsxs(Z,{sx:{display:"flex",flexWrap:"wrap",gap:1,alignItems:"center"},children:[a.jsx(e,{label:"Neutral",tone:"neutral"}),a.jsx(e,{label:"Success",tone:"success"}),a.jsx(e,{label:"Warning",tone:"warning"}),a.jsx(e,{label:"Error",tone:"error"}),a.jsx(e,{label:"Info",tone:"info"})]})};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,v,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Draft',
    tone: 'neutral'
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,h,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    tone: 'success'
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var B,L,V;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Pending',
    tone: 'warning'
  }
}`,...(V=(L=t.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,j,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Failed',
    tone: 'error'
  }
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var C,I,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Published',
    tone: 'info'
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var W,E,N;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Medium chip',
    tone: 'success',
    size: 'medium'
  }
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var P,D,M;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Very long status label that should wrap or stretch the badge depending on layout constraints',
    tone: 'warning'
  }
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var q,A,F;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Legacy default',
    tone: undefined,
    variant: 'default'
  }
}`,...(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var R,O,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Legacy success',
    tone: undefined,
    variant: 'success'
  }
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    alignItems: 'center'
  }}>\r
      <StatusBadge label="Neutral" tone="neutral" />\r
      <StatusBadge label="Success" tone="success" />\r
      <StatusBadge label="Warning" tone="warning" />\r
      <StatusBadge label="Error" tone="error" />\r
      <StatusBadge label="Info" tone="info" />\r
    </Box>
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ge=["Playground","Neutral","Success","Warning","Error","Info","MediumSize","LongLabel","LegacyVariantDefault","LegacyVariantSuccess","ToneComparison"];export{l as Error,c as Info,d as LegacyVariantDefault,p as LegacyVariantSuccess,i as LongLabel,u as MediumSize,n as Neutral,s as Playground,o as Success,m as ToneComparison,t as Warning,ge as __namedExportsOrder,me as default};
