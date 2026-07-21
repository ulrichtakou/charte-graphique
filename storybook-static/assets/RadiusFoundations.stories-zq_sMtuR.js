import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{p as R}from"./primitive-colors-CqocY7XZ.js";import{s as a}from"./spacing-tokens-D0rW3Zez.js";import{r as o,n as z,a as w,b as j,c as C}from"./radius-tokens-D-KuzIVl.js";const n=R,t={fontFamily:'"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',color:n.gray[900],maxWidth:720},p={fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:n.gray[500],marginBottom:8},F={none:"Dense grids, flat tables, dividers",xs:"Compact fields, subtle chips, micro controls",sm:"Default buttons, list rows, light inset surfaces",md:"Content cards, menus, popovers, medium panels",lg:"Modals, drawers, large cards, primary sections",full:"Pill badges, avatars, switches, any circular / capsule shape"},V={title:"Design System/Tokens/Radius",parameters:{layout:"padded",docs:{description:{story:"Border radii (rem, 4px grid). Nested corners: inner radius = outer radius − padding (see `nestedRadius`)."}}}},s={name:"1. Scale",render:()=>{const S=C();return e.jsxs("div",{style:t,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Border radius scale"}),e.jsxs("p",{style:{margin:"0 0 20px",color:n.gray[600],lineHeight:1.6},children:["Five useful steps (plus ",e.jsx("code",{children:"none"}),"), aligned with spacing steps (xs→4px … lg→16px) and ",e.jsx("code",{children:"full"})," for pill / circular shapes."]}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:14},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:`2px solid ${n.gray[200]}`,textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 8px"},children:"Token"}),e.jsx("th",{style:{padding:"10px 8px"},children:"Value"}),e.jsx("th",{style:{padding:"10px 8px"},children:"~px @16"}),e.jsx("th",{style:{padding:"10px 8px"},children:"Variable"}),e.jsx("th",{style:{padding:"10px 8px",minWidth:200},children:"Target components"}),e.jsx("th",{style:{padding:"10px 8px",width:120},children:"Preview"})]})}),e.jsx("tbody",{children:S.map(r=>{const l=o[r],c=w[r],k=j(r);return e.jsxs("tr",{style:{borderBottom:`1px solid ${n.gray[100]}`},children:[e.jsx("td",{style:{padding:"10px 8px",fontFamily:"ui-monospace, monospace",fontSize:12,color:n.gray[600]},children:r}),e.jsx("td",{style:{padding:"10px 8px",fontFamily:"ui-monospace, monospace",fontSize:12},children:l}),e.jsx("td",{style:{padding:"10px 8px",color:n.gray[500]},children:c!==void 0?c:"—"}),e.jsx("td",{style:{padding:"10px 8px",fontFamily:"ui-monospace, monospace",fontSize:11,color:n.gray[400],wordBreak:"break-all"},children:k}),e.jsx("td",{style:{padding:"10px 8px",color:n.gray[600],lineHeight:1.45},children:F[r]}),e.jsx("td",{style:{padding:"10px 8px",verticalAlign:"middle"},children:e.jsx("div",{style:{width:72,height:48,background:n.blue[500],borderRadius:l}})})]},r)})})]})]})}},d={name:"2. Nested corners",render:()=>e.jsxs("div",{style:t,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Nested corners"}),e.jsxs("p",{style:{margin:"0 0 16px",color:n.gray[600],lineHeight:1.6},children:[e.jsx("code",{children:"nestedRadius(outer, padding)"})," resolves to"," ",e.jsx("code",{children:"max(0px, outer − padding)"})," to avoid misaligned arcs when content is inset using ",e.jsx("code",{children:"spacing"})," tokens."]}),e.jsxs("div",{style:{marginBottom:24},children:[e.jsxs("div",{style:p,children:["Example — outer ",e.jsx("code",{children:"lg"}),", gutter ",e.jsx("code",{children:"spacing[3]"})]}),e.jsx("div",{style:{display:"inline-block",padding:a[3],background:n.gray[200],borderRadius:o.lg},children:e.jsxs("div",{style:{padding:a[4],background:n.blue[200],color:n.blue[900],borderRadius:z("lg",3),fontSize:14},children:["Inner radius = ",e.jsx("code",{children:"nestedRadius('lg', 3)"})," (outer − gutter), concentric with the parent corner."]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Code"}),e.jsxs("code",{style:{display:"block",fontSize:12,color:n.gray[600],fontFamily:"ui-monospace, monospace",padding:a[3],background:n.gray[50],borderRadius:o.sm},children:[`nestedRadius('lg', 4) // → max(0px, calc(1rem - 1rem)) — square inner
`,"nestedRadius('lg', 3) // → max(0px, calc(1rem - 0.75rem)) — same as radii.xs"]})]})]})},i={name:"3. Usage",render:()=>e.jsxs("div",{style:t,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Usage"}),e.jsxs("p",{style:{margin:"0 0 20px",color:n.gray[600],lineHeight:1.6},children:["Import ",e.jsx("code",{children:"radii"})," for inline styles, or"," ",e.jsx("code",{children:"radiusRootStyleObject()"})," on a root container and then"," ",e.jsxs("code",{children:["var(",j("md"),")"]})," in CSS."]}),e.jsx("code",{style:{display:"block",fontSize:12,color:n.gray[600],fontFamily:"ui-monospace, monospace",padding:a[3],background:n.gray[50],borderRadius:o.sm},children:"import { radii, nestedRadius, radiusRootStyleObject, radiusCssVar } from 'charte-graphique';"})]})};var g,x,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '1. Scale',
  render: () => {
    const keys = radiusKeysInOrder();
    return <div style={docShell}>\r
        <h2 style={{
        fontSize: 22,
        fontWeight: 700,
        margin: '0 0 8px'
      }}>\r
          Border radius scale\r
        </h2>\r
        <p style={{
        margin: '0 0 20px',
        color: pc.gray[600],
        lineHeight: 1.6
      }}>\r
          Five useful steps (plus <code>none</code>), aligned with spacing steps\r
          (xs→4px … lg→16px) and <code>full</code> for pill / circular shapes.\r
        </p>\r
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 14
      }}>\r
          <thead>\r
            <tr style={{
            borderBottom: \`2px solid \${pc.gray[200]}\`,
            textAlign: 'left'
          }}>\r
              <th style={{
              padding: '10px 8px'
            }}>Token</th>\r
              <th style={{
              padding: '10px 8px'
            }}>Value</th>\r
              <th style={{
              padding: '10px 8px'
            }}>~px @16</th>\r
              <th style={{
              padding: '10px 8px'
            }}>Variable</th>\r
              <th style={{
              padding: '10px 8px',
              minWidth: 200
            }}>\r
                Target components\r
              </th>\r
              <th style={{
              padding: '10px 8px',
              width: 120
            }}>Preview</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {keys.map(key => {
            const value = radii[key];
            const px = radiusPxAt16Root[key];
            const varName = radiusCssVar(key);
            return <tr key={key} style={{
              borderBottom: \`1px solid \${pc.gray[100]}\`
            }}>\r
                  <td style={{
                padding: '10px 8px',
                fontFamily: 'ui-monospace, monospace',
                fontSize: 12,
                color: pc.gray[600]
              }}>\r
                    {key}\r
                  </td>\r
                  <td style={{
                padding: '10px 8px',
                fontFamily: 'ui-monospace, monospace',
                fontSize: 12
              }}>\r
                    {value}\r
                  </td>\r
                  <td style={{
                padding: '10px 8px',
                color: pc.gray[500]
              }}>\r
                    {px !== undefined ? px : '—'}\r
                  </td>\r
                  <td style={{
                padding: '10px 8px',
                fontFamily: 'ui-monospace, monospace',
                fontSize: 11,
                color: pc.gray[400],
                wordBreak: 'break-all'
              }}>\r
                    {varName}\r
                  </td>\r
                  <td style={{
                padding: '10px 8px',
                color: pc.gray[600],
                lineHeight: 1.45
              }}>\r
                    {radiusUsage[key]}\r
                  </td>\r
                  <td style={{
                padding: '10px 8px',
                verticalAlign: 'middle'
              }}>\r
                    <div style={{
                  width: 72,
                  height: 48,
                  background: pc.blue[500],
                  borderRadius: value
                }} />\r
                  </td>\r
                </tr>;
          })}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var y,u,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '2. Nested corners',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Nested corners\r
      </h2>\r
      <p style={{
      margin: '0 0 16px',
      color: pc.gray[600],
      lineHeight: 1.6
    }}>\r
        <code>nestedRadius(outer, padding)</code> resolves to{' '}\r
        <code>max(0px, outer − padding)</code> to avoid misaligned arcs when\r
        content is inset using <code>spacing</code> tokens.\r
      </p>\r
      <div style={{
      marginBottom: 24
    }}>\r
        <div style={labelStyle}>\r
          Example — outer <code>lg</code>, gutter <code>spacing[3]</code>\r
        </div>\r
        <div style={{
        display: 'inline-block',
        padding: spacing[3],
        background: pc.gray[200],
        borderRadius: radii.lg
      }}>\r
          <div style={{
          padding: spacing[4],
          background: pc.blue[200],
          color: pc.blue[900],
          borderRadius: nestedRadius('lg', 3),
          fontSize: 14
        }}>\r
            Inner radius = <code>nestedRadius(&apos;lg&apos;, 3)</code> (outer −\r
            gutter), concentric with the parent corner.\r
          </div>\r
        </div>\r
      </div>\r
      <div>\r
        <div style={labelStyle}>Code</div>\r
        <code style={{
        display: 'block',
        fontSize: 12,
        color: pc.gray[600],
        fontFamily: 'ui-monospace, monospace',
        padding: spacing[3],
        background: pc.gray[50],
        borderRadius: radii.sm
      }}>\r
          {\`nestedRadius('lg', 4) // → max(0px, calc(1rem - 1rem)) — square inner\\n\`}\r
          {\`nestedRadius('lg', 3) // → max(0px, calc(1rem - 0.75rem)) — same as radii.xs\`}\r
        </code>\r
      </div>\r
    </div>
}`,...(h=(u=d.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,b,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '3. Usage',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Usage\r
      </h2>\r
      <p style={{
      margin: '0 0 20px',
      color: pc.gray[600],
      lineHeight: 1.6
    }}>\r
        Import <code>radii</code> for inline styles, or{' '}\r
        <code>radiusRootStyleObject()</code> on a root container and then{' '}\r
        <code>var({radiusCssVar('md')})</code> in CSS.\r
      </p>\r
      <code style={{
      display: 'block',
      fontSize: 12,
      color: pc.gray[600],
      fontFamily: 'ui-monospace, monospace',
      padding: spacing[3],
      background: pc.gray[50],
      borderRadius: radii.sm
    }}>\r
        {\`import { radii, nestedRadius, radiusRootStyleObject, radiusCssVar } from 'charte-graphique';\`}\r
      </code>\r
    </div>
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const H=["Scale","NestedCorners","Usage"];export{d as NestedCorners,s as Scale,i as Usage,H as __namedExportsOrder,V as default};
