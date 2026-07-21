import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BSnFy17d.js";import{p as w}from"./primitive-colors-CqocY7XZ.js";import{r as h}from"./radius-tokens-D-KuzIVl.js";import{s as r}from"./spacing-tokens-D0rW3Zez.js";import{a as g,f,t as m}from"./typography-tokens-DtjjMcdU.js";import{f as v,m as k,a as M}from"./motion-tokens-Jd29rd68.js";import{w as F}from"./motion-decorator-DjKaoVs4.js";const o=w,i=v.enter,a=v.exit,I={title:"Design System/Tokens/Motion/04 Components",decorators:[F],parameters:{docs:{disable:!0},chromatic:{pauseAnimationAtEnd:!0}}};function W(){const[e,s]=c.useState(!1),[t,l]=c.useState(!1),d=()=>{s(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>l(!0)))},p=()=>l(!1),x=c.useCallback(z=>{z.propertyName==="opacity"&&(t||s(!1))},[t]),b=t?`opacity ${i.duration} ${i.easing}`:`opacity ${a.duration} ${a.easing}`,S=t?`opacity ${i.duration} ${i.easing}, transform ${i.duration} ${i.easing}`:`opacity ${a.duration} ${a.easing}, transform ${a.duration} ${a.easing}`;return{mounted:e,open:t,openModal:d,closeModal:p,onTransitionEnd:x,overlayT:b,panelT:S}}function C(){const e=W();return n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:e.openModal,style:u(o.blue[600]),children:"Open modal"}),e.mounted?n.jsxs(n.Fragment,{children:[n.jsx("div",{role:"presentation",className:"motion-animated",onTransitionEnd:e.onTransitionEnd,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(15, 23, 42, 0.45)",opacity:e.open?1:0,transition:e.overlayT},onClick:e.closeModal}),n.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",className:"motion-animated",onTransitionEnd:e.onTransitionEnd,style:{position:"fixed",zIndex:1001,left:"50%",top:"22%",transform:e.open?"translate(-50%, 0) scale(1)":"translate(-50%, 8px) scale(0.97)",opacity:e.open?1:0,transition:e.panelT,width:"min(400px, 92vw)",padding:r[6],borderRadius:h.lg,background:"#fff",boxShadow:"0 24px 48px rgba(15, 23, 42, 0.18)",fontFamily:g.sans,pointerEvents:e.open?"auto":"none"},onClick:s=>s.stopPropagation(),children:[n.jsx("h2",{id:"modal-title",style:{margin:"0 0 8px",fontSize:m.lg.fontSize,fontWeight:f.bold,color:o.gray[900]},children:"Save changes?"}),n.jsx("p",{style:{margin:"0 0 20px",color:o.gray[600],fontSize:m.sm.fontSize},children:"Motion uses the same enter/exit patterns as tokens — check the overlay and panel together."}),n.jsx("button",{type:"button",onClick:e.closeModal,style:u(o.gray[700]),children:"Close"})]})]}):null]})}function D(){const[e,s]=c.useState(!1),[t,l]=c.useState(!1),d=()=>{s(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>l(!0)))},p=()=>l(!1),x=c.useCallback(S=>{S.propertyName==="transform"&&(t||s(!1))},[t]),b=t?`opacity ${i.duration} ${i.easing}`:`opacity ${a.duration} ${a.easing}`;return n.jsxs("div",{style:{position:"relative",minHeight:200},children:[n.jsx("button",{type:"button",onClick:d,style:u(o.violet[600]),children:"Open drawer"}),e?n.jsxs(n.Fragment,{children:[n.jsx("div",{role:"presentation",className:"motion-animated",onClick:p,style:{position:"absolute",inset:0,background:"rgba(15, 23, 42, 0.25)",opacity:t?1:0,transition:b,borderRadius:h.md}}),n.jsxs("aside",{className:"motion-animated",onTransitionEnd:x,style:{position:"absolute",top:0,left:0,bottom:0,width:"min(280px, 85%)",background:"#fff",borderRight:`1px solid ${o.gray[200]}`,boxShadow:"8px 0 32px rgba(15, 23, 42, 0.1)",transform:t?"translateX(0)":"translateX(-100%)",transition:`transform ${t?i.duration:a.duration} ${t?i.easing:a.easing}`,padding:r[5],fontFamily:g.sans,fontSize:m.sm.fontSize,color:o.gray[700]},children:[n.jsx("strong",{style:{display:"block",marginBottom:r[3]},children:"Navigation"}),"Drawer slide uses enter/exit durations explicitly (spatial motion).",n.jsx("button",{type:"button",onClick:p,style:{...u(o.violet[600]),marginTop:r[5],width:"100%"},children:"Close"})]})]}):null]})}function E(){const[e,s]=c.useState(!1),t=c.useRef(null),l=()=>{t.current&&clearTimeout(t.current),s(!0)},d=()=>{t.current=setTimeout(()=>s(!1),80)},p=`${k.short} ${M.enter}`;return n.jsxs("div",{style:{position:"relative",paddingTop:56},children:[n.jsx("button",{type:"button",onMouseEnter:l,onMouseLeave:d,onFocus:l,onBlur:d,style:u(o.cyan[700]),children:"Hover for tooltip"}),n.jsx("div",{role:"tooltip",className:"motion-animated",style:{position:"absolute",left:0,bottom:"100%",marginBottom:r[2],padding:`${r[2]} ${r[3]}`,borderRadius:h.sm,background:o.gray[900],color:"#fff",fontSize:m.xs.fontSize,fontFamily:g.sans,whiteSpace:"nowrap",opacity:e?1:0,transform:e?"translateY(0)":"translateY(4px)",transition:`opacity ${p}, transform ${p}`,pointerEvents:"none"},children:"Short duration + enter easing"})]})}function u(e){return{padding:`${r[2]} ${r[4]}`,fontWeight:f.semibold,fontSize:m.sm.fontSize,border:"none",borderRadius:h.sm,background:e,color:"#fff",cursor:"pointer",fontFamily:g.sans}}const y={name:"Modal, drawer, and tooltip",render:()=>n.jsxs("div",{style:{fontFamily:g.sans,color:o.gray[900],maxWidth:480},children:[n.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,margin:"0 0 8px"},children:"Motion on real surfaces"}),n.jsx("p",{style:{margin:"0 0 28px",color:o.gray[600],lineHeight:1.6},children:"Abstract tokens can feel fine in isolation but wrong on real components. These examples use the same pattern recipes as in “03 Patterns”."}),n.jsxs("section",{style:{marginBottom:r[10]},children:[n.jsx("h3",{style:{fontSize:m.sm.fontSize,fontWeight:f.semibold,color:o.gray[500],textTransform:"uppercase",letterSpacing:"0.06em",margin:"0 0 12px"},children:"Modal (center + scrim)"}),n.jsx(C,{})]}),n.jsxs("section",{style:{marginBottom:r[10]},children:[n.jsx("h3",{style:{fontSize:m.sm.fontSize,fontWeight:f.semibold,color:o.gray[500],textTransform:"uppercase",letterSpacing:"0.06em",margin:"0 0 12px"},children:"Drawer (edge slide)"}),n.jsx(D,{})]}),n.jsxs("section",{children:[n.jsx("h3",{style:{fontSize:m.sm.fontSize,fontWeight:f.semibold,color:o.gray[500],textTransform:"uppercase",letterSpacing:"0.06em",margin:"0 0 12px"},children:"Tooltip"}),n.jsx(E,{})]})]})};var j,T,$;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Modal, drawer, and tooltip',
  render: () => <div style={{
    fontFamily: fontFamilies.sans,
    color: pc.gray[900],
    maxWidth: 480
  }}>\r
      <h2 style={{
      fontSize: '1.25rem',
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Motion on real surfaces\r
      </h2>\r
      <p style={{
      margin: '0 0 28px',
      color: pc.gray[600],
      lineHeight: 1.6
    }}>\r
        Abstract tokens can feel fine in isolation but wrong on real components.\r
        These examples use the same pattern recipes as in “03 Patterns”.\r
      </p>\r
\r
      <section style={{
      marginBottom: spacing[10]
    }}>\r
        <h3 style={{
        fontSize: typeScale.sm.fontSize,
        fontWeight: fontWeights.semibold,
        color: pc.gray[500],
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        margin: '0 0 12px'
      }}>\r
          Modal (center + scrim)\r
        </h3>\r
        <ModalDemo />\r
      </section>\r
\r
      <section style={{
      marginBottom: spacing[10]
    }}>\r
        <h3 style={{
        fontSize: typeScale.sm.fontSize,
        fontWeight: fontWeights.semibold,
        color: pc.gray[500],
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        margin: '0 0 12px'
      }}>\r
          Drawer (edge slide)\r
        </h3>\r
        <DrawerDemo />\r
      </section>\r
\r
      <section>\r
        <h3 style={{
        fontSize: typeScale.sm.fontSize,
        fontWeight: fontWeights.semibold,
        color: pc.gray[500],
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        margin: '0 0 12px'
      }}>\r
          Tooltip\r
        </h3>\r
        <TooltipDemo />\r
      </section>\r
    </div>
}`,...($=(T=y.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const X=["RealComponents"];export{y as RealComponents,X as __namedExportsOrder,I as default};
