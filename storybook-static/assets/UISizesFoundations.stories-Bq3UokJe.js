import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{p as E}from"./primitive-colors-CqocY7XZ.js";import{r as m}from"./radius-tokens-D-KuzIVl.js";import{s}from"./spacing-tokens-D0rW3Zez.js";import{a as g,f as a,t as i}from"./typography-tokens-DtjjMcdU.js";import{c as y,i as x,b as T,a as d,L as _,s as S}from"./ui-sizes-tokens-DV8X2A0Z.js";import{U as K}from"./user-BcLmEa3e.js";import{c as N}from"./createLucideIcon-VIERY1cO.js";import"./index-BSnFy17d.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],U=N("Mail",Y),t=E,ie={title:"YaoundéLogis/Tokens/Tailles UI",parameters:{layout:"padded",docs:{description:{story:"Control heights (spacing-based), icon sizes (type-scale-aligned), and spinners sized relative to controls. Icons in stories use lucide-react. Shown in real UI patterns — not abstract token grids."}}}},f={fontFamily:g.sans,color:t.gray[900],maxWidth:520},q=n=>{const o=d[n];return{flex:1,minWidth:0,minHeight:y[n],padding:`0 ${s[3]}`,border:`1px solid ${t.gray[300]}`,borderRadius:m.sm,fontSize:i[o.body].fontSize,fontFamily:g.sans,color:t.gray[900],background:t.gray[50],outline:"none",boxSizing:"border-box"}},u=(n,o)=>{const r=d[n];return{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:s[2],minHeight:y[n],padding:`0 ${s[4]}`,border:"none",borderRadius:m.sm,fontSize:i[r.body].fontSize,fontWeight:a.medium,fontFamily:g.sans,color:"#fff",background:t.blue[600],cursor:"pointer",boxSizing:"border-box",...o}},l={name:"1. Form density (all sizes)",render:()=>e.jsxs("div",{style:{...f,maxWidth:480},children:[e.jsx("h2",{style:{fontSize:i.xl.fontSize,fontWeight:a.bold,margin:"0 0 8px"},children:"Same pattern, four densities"}),e.jsxs("p",{style:{margin:"0 0 24px",color:t.gray[600],lineHeight:1.6,fontSize:i.sm.fontSize},children:["Each block uses ",e.jsx("code",{children:"componentHeights"}),", paired body text and"," ",e.jsx("code",{children:"iconSizes"})," via ",e.jsx("code",{children:"controlDensityPairing"}),". Compare vertical rhythm — gaps between blocks are intentional."]}),T().map(n=>{const o=d[n],r=x[o.icon];return e.jsxs("div",{style:{marginBottom:s[6],paddingBottom:s[5],borderBottom:`1px solid ${t.gray[200]}`},children:[e.jsxs("div",{style:{fontSize:i.xs.fontSize,fontWeight:a.semibold,textTransform:"uppercase",letterSpacing:"0.06em",color:t.gray[500],marginBottom:s[2]},children:[n," — ",y[n]," (",o.body," / ",o.icon,")"]}),e.jsxs("div",{style:{display:"flex",gap:s[3],alignItems:"stretch"},children:[e.jsx("input",{type:"email",readOnly:!0,"aria-label":"Work email",placeholder:"you@company.com",style:q(n)}),e.jsxs("button",{type:"button",style:u(n),children:[e.jsx(U,{"aria-hidden":!0,width:r,height:r,strokeWidth:2}),"Invite"]})]})]},n)})]})},c={name:"2. Icon + label (buttons)",render:()=>e.jsxs("div",{style:f,children:[e.jsx("h2",{style:{fontSize:i.xl.fontSize,fontWeight:a.bold,margin:"0 0 8px"},children:"Icon size tracks label text"}),e.jsxs("p",{style:{margin:"0 0 20px",color:t.gray[600],lineHeight:1.6,fontSize:i.sm.fontSize},children:["Icons are never shown alone: each control pairs"," ",e.jsx("code",{children:"iconSizes[…]"})," with the same density as the label (via"," ",e.jsx("code",{children:"controlDensityPairing"}),")."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:s[3],alignItems:"flex-start"},children:["sm","md","lg","xl"].map(n=>{const o=d[n],r=x[o.icon];return e.jsxs("button",{type:"button",style:u(n),children:[e.jsx(U,{"aria-hidden":!0,width:r,height:r,strokeWidth:2}),"Send invitation"]},n)})})]})},p={name:"3. Badge on avatar",render:()=>{const n=y.lg,o=d.md,r=x[o.icon];return e.jsxs("div",{style:f,children:[e.jsx("h2",{style:{fontSize:i.xl.fontSize,fontWeight:a.bold,margin:"0 0 8px"},children:"Avatar and notification badge"}),e.jsxs("p",{style:{margin:"0 0 20px",color:t.gray[600],lineHeight:1.6,fontSize:i.sm.fontSize},children:["Avatar diameter uses ",e.jsx("code",{children:"componentHeights.lg"}),"; the icon uses the md density pairing; the badge uses a smaller type step and padding from ",e.jsx("code",{children:"spacing"})," so it does not fight the avatar edge."]}),e.jsxs("div",{style:{position:"relative",display:"inline-block",width:n,height:n},children:[e.jsx("div",{style:{width:"100%",height:"100%",borderRadius:m.full,background:t.gray[200],display:"flex",alignItems:"center",justifyContent:"center",color:t.gray[600]},children:e.jsx(K,{width:r,height:r,strokeWidth:2,"aria-hidden":!0})}),e.jsx("span",{style:{position:"absolute",top:0,right:0,transform:"translate(25%, -25%)",minWidth:s[5],height:s[5],padding:`0 ${s[1.5]}`,borderRadius:m.full,background:t.red[500],color:"#fff",fontSize:i.xs.fontSize,fontWeight:a.semibold,fontFamily:g.sans,display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:"3"})]})]})}},h={name:"4. Loading state (spinner)",render:()=>e.jsxs("div",{style:f,children:[e.jsx("style",{children:`
          @keyframes ui-sizes-spin {
            to { transform: rotate(360deg); }
          }
        `}),e.jsx("h2",{style:{fontSize:i.xl.fontSize,fontWeight:a.bold,margin:"0 0 8px"},children:"Spinner scales with the control"}),e.jsxs("p",{style:{margin:"0 0 20px",color:t.gray[600],lineHeight:1.6,fontSize:i.sm.fontSize},children:["Lucide ",e.jsx("code",{children:"Loader2"})," width/height come from"," ",e.jsx("code",{children:"spinnerDiameterForComponent(size)"})," (relative to the control). Use ",e.jsx("code",{children:"spinnerStrokeWidthForComponent"})," when building a custom ring; here the glyph scales with its box."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:s[4]},children:["sm","md","lg"].map(n=>{const o=d[n],r=S(n);return e.jsxs("button",{type:"button",style:u(n,{opacity:.9,cursor:"default"}),children:[e.jsx(_,{"aria-hidden":!0,style:{width:r,height:r,animation:"ui-sizes-spin 0.75s linear infinite",flexShrink:0},strokeWidth:2.25}),e.jsx("span",{style:{fontSize:i[o.body].fontSize},children:"Saving…"})]},n)})}),e.jsx("p",{style:{marginTop:s[5],fontSize:i.xs.fontSize,color:t.gray[500],fontFamily:"ui-monospace, monospace"},children:`spinnerDiameterForComponent('md') → ${S("md")}`})]})};var b,z,v,j,W;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '1. Form density (all sizes)',
  render: () => <div style={{
    ...docMaxWidth,
    maxWidth: 480
  }}>\r
      <h2 style={{
      fontSize: typeScale.xl.fontSize,
      fontWeight: fontWeights.bold,
      margin: '0 0 8px'
    }}>\r
        Same pattern, four densities\r
      </h2>\r
      <p style={{
      margin: '0 0 24px',
      color: pc.gray[600],
      lineHeight: 1.6,
      fontSize: typeScale.sm.fontSize
    }}>\r
        Each block uses <code>componentHeights</code>, paired body text and{' '}\r
        <code>iconSizes</code> via <code>controlDensityPairing</code>. Compare\r
        vertical rhythm — gaps between blocks are intentional.\r
      </p>\r
      {componentHeightKeysInOrder().map(size => {
      const pair = controlDensityPairing[size];
      const iconPx = iconSizes[pair.icon];
      return <div key={size} style={{
        marginBottom: spacing[6],
        paddingBottom: spacing[5],
        borderBottom: \`1px solid \${pc.gray[200]}\`
      }}>\r
            <div style={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: pc.gray[500],
          marginBottom: spacing[2]
        }}>\r
              {size} — {componentHeights[size]} ({pair.body} / {pair.icon})\r
            </div>\r
            <div style={{
          display: 'flex',
          gap: spacing[3],
          alignItems: 'stretch'
        }}>\r
              <input type="email" readOnly aria-label="Work email" placeholder="you@company.com" style={fieldShell(size)} />\r
              <button type="button" style={buttonShell(size)}>\r
                <Mail aria-hidden width={iconPx} height={iconPx} strokeWidth={2} />\r
                Invite\r
              </button>\r
            </div>\r
          </div>;
    })}\r
    </div>
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source},description:{story:"Input + primary button at the same control height — how density feels in a form",...(W=(j=l.parameters)==null?void 0:j.docs)==null?void 0:W.description}}};var k,w,I,D,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '2. Icon + label (buttons)',
  render: () => <div style={docMaxWidth}>\r
      <h2 style={{
      fontSize: typeScale.xl.fontSize,
      fontWeight: fontWeights.bold,
      margin: '0 0 8px'
    }}>\r
        Icon size tracks label text\r
      </h2>\r
      <p style={{
      margin: '0 0 20px',
      color: pc.gray[600],
      lineHeight: 1.6,
      fontSize: typeScale.sm.fontSize
    }}>\r
        Icons are never shown alone: each control pairs{' '}\r
        <code>iconSizes[…]</code> with the same density as the label (via{' '}\r
        <code>controlDensityPairing</code>).\r
      </p>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: spacing[3],
      alignItems: 'flex-start'
    }}>\r
        {(['sm', 'md', 'lg', 'xl'] as const).map(size => {
        const pair = controlDensityPairing[size];
        const iconPx = iconSizes[pair.icon];
        return <button key={size} type="button" style={buttonShell(size)}>\r
              <Mail aria-hidden width={iconPx} height={iconPx} strokeWidth={2} />\r
              Send invitation\r
            </button>;
      })}\r
      </div>\r
    </div>
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source},description:{story:"Icon + label — critical alignment check",...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var P,C,H,B,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '3. Badge on avatar',
  render: () => {
    const avatarSize = componentHeights.lg;
    const pair = controlDensityPairing.md;
    const iconPx = iconSizes[pair.icon];
    return <div style={docMaxWidth}>\r
        <h2 style={{
        fontSize: typeScale.xl.fontSize,
        fontWeight: fontWeights.bold,
        margin: '0 0 8px'
      }}>\r
          Avatar and notification badge\r
        </h2>\r
        <p style={{
        margin: '0 0 20px',
        color: pc.gray[600],
        lineHeight: 1.6,
        fontSize: typeScale.sm.fontSize
      }}>\r
          Avatar diameter uses <code>componentHeights.lg</code>; the icon uses\r
          the md density pairing; the badge uses a smaller type step and padding\r
          from <code>spacing</code> so it does not fight the avatar edge.\r
        </p>\r
        <div style={{
        position: 'relative',
        display: 'inline-block',
        width: avatarSize,
        height: avatarSize
      }}>\r
          <div style={{
          width: '100%',
          height: '100%',
          borderRadius: radii.full,
          background: pc.gray[200],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: pc.gray[600]
        }}>\r
            <User width={iconPx} height={iconPx} strokeWidth={2} aria-hidden />\r
          </div>\r
          <span style={{
          position: 'absolute',
          top: 0,
          right: 0,
          transform: 'translate(25%, -25%)',
          minWidth: spacing[5],
          height: spacing[5],
          padding: \`0 \${spacing[1.5]}\`,
          borderRadius: radii.full,
          background: pc.red[500],
          color: '#fff',
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          fontFamily: fontFamilies.sans,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}>\r
            3\r
          </span>\r
        </div>\r
      </div>;
  }
}`,...(H=(C=p.parameters)==null?void 0:C.docs)==null?void 0:H.source},description:{story:"Badge + avatar — nested scale",...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var M,R,$,A,O;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '4. Loading state (spinner)',
  render: () => <div style={docMaxWidth}>\r
      <style>\r
        {\`
          @keyframes ui-sizes-spin {
            to { transform: rotate(360deg); }
          }
        \`}\r
      </style>\r
      <h2 style={{
      fontSize: typeScale.xl.fontSize,
      fontWeight: fontWeights.bold,
      margin: '0 0 8px'
    }}>\r
        Spinner scales with the control\r
      </h2>\r
      <p style={{
      margin: '0 0 20px',
      color: pc.gray[600],
      lineHeight: 1.6,
      fontSize: typeScale.sm.fontSize
    }}>\r
        Lucide <code>Loader2</code> width/height come from{' '}\r
        <code>spinnerDiameterForComponent(size)</code> (relative to the control).\r
        Use <code>spinnerStrokeWidthForComponent</code> when building a custom\r
        ring; here the glyph scales with its box.\r
      </p>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: spacing[4]
    }}>\r
        {(['sm', 'md', 'lg'] as const).map(size => {
        const pair = controlDensityPairing[size];
        const d = spinnerDiameterForComponent(size);
        return <button key={size} type="button" style={buttonShell(size, {
          opacity: 0.9,
          cursor: 'default'
        })}>\r
              <Loader2 aria-hidden style={{
            width: d,
            height: d,
            animation: 'ui-sizes-spin 0.75s linear infinite',
            flexShrink: 0
          }} strokeWidth={2.25} />\r
              <span style={{
            fontSize: typeScale[pair.body].fontSize
          }}>\r
                Saving…\r
              </span>\r
            </button>;
      })}\r
      </div>\r
      <p style={{
      marginTop: spacing[5],
      fontSize: typeScale.xs.fontSize,
      color: pc.gray[500],
      fontFamily: 'ui-monospace, monospace'
    }}>\r
        {\`spinnerDiameterForComponent('md') → \${spinnerDiameterForComponent('md')}\`}\r
      </p>\r
    </div>
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source},description:{story:"Spinner relative to button height",...(O=(A=h.parameters)==null?void 0:A.docs)==null?void 0:O.description}}};const oe=["FormRowAtEachDensity","IconWithLabelButtons","BadgeOnAvatar","LoadingButtons"];export{p as BadgeOnAvatar,l as FormRowAtEachDensity,c as IconWithLabelButtons,h as LoadingButtons,oe as __namedExportsOrder,ie as default};
