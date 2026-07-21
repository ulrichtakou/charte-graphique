import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BSnFy17d.js";import{p as v}from"./primitive-colors-CqocY7XZ.js";import{r as y}from"./radius-tokens-D-KuzIVl.js";import{s as n}from"./spacing-tokens-D0rW3Zez.js";import{a as p,f,t as s}from"./typography-tokens-DtjjMcdU.js";import{f as x}from"./motion-tokens-Jd29rd68.js";import{w}from"./motion-decorator-DjKaoVs4.js";const e=v,d=x.enter,l=x.exit,u=x.layout,N={title:"YaoundéLogis/Tokens/Motion/03 Patterns",decorators:[w],parameters:{docs:{disable:!0},chromatic:{pauseAnimationAtEnd:!0}}};function k(){const[o,r]=m.useState(!1),[i,a]=m.useState(!1),j=()=>{r(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>a(!0)))},z=()=>{a(!1)},$=m.useCallback(E=>{E.propertyName==="opacity"&&(i||r(!1))},[i]),W=i?`opacity ${d.duration} ${d.easing}, transform ${d.duration} ${d.easing}`:`opacity ${l.duration} ${l.easing}, transform ${l.duration} ${l.easing}`;return t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",gap:n[2],marginBottom:n[4]},children:[t.jsx("button",{type:"button",onClick:j,style:g(e.green[600]),children:"Show (enter)"}),t.jsx("button",{type:"button",onClick:z,disabled:!o,style:g(e.gray[600],!o),children:"Hide (exit)"})]}),o&&t.jsxs("div",{className:"motion-animated",onTransitionEnd:$,style:{maxWidth:320,padding:n[5],borderRadius:y.md,background:e.gray[50],border:`1px solid ${e.gray[200]}`,boxShadow:"0 4px 24px rgba(15, 23, 42, 0.08)",opacity:i?1:0,transform:i?"translateY(0) scale(1)":"translateY(12px) scale(0.98)",transition:W,fontFamily:p.sans,fontSize:s.sm.fontSize,color:e.gray[700]},children:["Enter uses ",t.jsx("code",{children:"motionPatterns.enter"})," — exit uses"," ",t.jsx("code",{children:"motionPatterns.exit"})," (shorter duration + exit curve)."]})]})}function g(o,r){return{padding:`${n[2]} ${n[4]}`,fontWeight:f.semibold,fontSize:s.sm.fontSize,border:"none",borderRadius:y.sm,background:o,color:"#fff",cursor:r?"not-allowed":"pointer",opacity:r?.5:1,fontFamily:p.sans}}function C(){const[o,r]=m.useState(!1),i=`${u.duration} ${u.easing}`;return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:()=>r(a=>!a),style:g(e.blue[600]),children:"Toggle width (layout pattern)"}),t.jsx("div",{className:"motion-animated",style:{marginTop:n[4],height:48,width:o?"100%":"42%",maxWidth:400,borderRadius:y.sm,background:`linear-gradient(90deg, ${e.cyan[400]}, ${e.blue[500]})`,transition:`width ${i}`}}),t.jsxs("p",{style:{marginTop:n[3],fontSize:s.xs.fontSize,color:e.gray[500],fontFamily:p.sans},children:[t.jsx("code",{children:"motionPatterns.layout"})," — ",u.duration," / standard easing"]})]})}const c={name:"Enter, exit, and layout",render:()=>t.jsxs("div",{style:{fontFamily:p.sans,color:e.gray[900],maxWidth:560},children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,margin:"0 0 8px"},children:"Composed patterns"}),t.jsx("p",{style:{margin:"0 0 24px",color:e.gray[600],lineHeight:1.6},children:"Validate combined tokens — not just isolated durations or curves."}),t.jsx("h3",{style:{fontSize:s.sm.fontSize,fontWeight:f.semibold,color:e.gray[500],textTransform:"uppercase",letterSpacing:"0.06em",margin:"0 0 12px"},children:"Enter / exit"}),t.jsx(k,{}),t.jsx("h3",{style:{fontSize:s.sm.fontSize,fontWeight:f.semibold,color:e.gray[500],textTransform:"uppercase",letterSpacing:"0.06em",margin:`${n[8]} 0 12px`},children:"Layout"}),t.jsx(C,{})]})};var h,S,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Enter, exit, and layout',
  render: () => <div style={{
    fontFamily: fontFamilies.sans,
    color: pc.gray[900],
    maxWidth: 560
  }}>\r
      <h2 style={{
      fontSize: '1.25rem',
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Composed patterns\r
      </h2>\r
      <p style={{
      margin: '0 0 24px',
      color: pc.gray[600],
      lineHeight: 1.6
    }}>\r
        Validate combined tokens — not just isolated durations or curves.\r
      </p>\r
\r
      <h3 style={{
      fontSize: typeScale.sm.fontSize,
      fontWeight: fontWeights.semibold,
      color: pc.gray[500],
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      margin: '0 0 12px'
    }}>\r
        Enter / exit\r
      </h3>\r
      <EnterExitCard />\r
\r
      <h3 style={{
      fontSize: typeScale.sm.fontSize,
      fontWeight: fontWeights.semibold,
      color: pc.gray[500],
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      margin: \`\${spacing[8]} 0 12px\`
    }}>\r
        Layout\r
      </h3>\r
      <LayoutResizeDemo />\r
    </div>
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const Y=["Recipes"];export{c as Recipes,Y as __namedExportsOrder,N as default};
