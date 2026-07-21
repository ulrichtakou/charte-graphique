import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{a as m,s,b,c as S}from"./spacing-tokens-D0rW3Zez.js";const f={fontFamily:"var(--yaoundelogis-font-family, Poppins, sans-serif)",color:"#0F3D2E",maxWidth:720},d={fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"#5C6B63",marginBottom:8},w={title:"YaoundéLogis/Tokens/Espacement",parameters:{layout:"padded",docs:{description:{story:"Spacing scale for margin, padding, gap, and layout — rem-based 4px grid at 16px root."}}}},r={name:"1. Scale",render:()=>{const i=S();return n.jsxs("div",{style:f,children:[n.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Spacing scale"}),n.jsx("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:"Token → value and CSS variable. Bar width matches the spacing value (max width capped for large steps)."}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:14},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{borderBottom:"2px solid #e2e8f0",textAlign:"left"},children:[n.jsx("th",{style:{padding:"10px 8px"},children:"Token"}),n.jsx("th",{style:{padding:"10px 8px"},children:"Value"}),n.jsx("th",{style:{padding:"10px 8px"},children:"~px @16"}),n.jsx("th",{style:{padding:"10px 8px"},children:"Variable"}),n.jsx("th",{style:{padding:"10px 8px",width:"45%"},children:"Preview"})]})}),n.jsx("tbody",{children:i.map(e=>{const t=s[e],o=b[e],v=m(e),l=String(e),u=e===0||t==="0";return n.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9"},children:[n.jsx("td",{style:{padding:"10px 8px",fontFamily:"ui-monospace, monospace",fontSize:12,color:"#475569"},children:l}),n.jsx("td",{style:{padding:"10px 8px",fontFamily:"ui-monospace, monospace",fontSize:12},children:t}),n.jsx("td",{style:{padding:"10px 8px",color:"#64748b"},children:o!==void 0?o:"—"}),n.jsx("td",{style:{padding:"10px 8px",fontFamily:"ui-monospace, monospace",fontSize:11,color:"#94a3b8",wordBreak:"break-all"},children:v}),n.jsx("td",{style:{padding:"10px 8px",verticalAlign:"middle"},children:n.jsx("div",{style:{maxWidth:280,overflow:"hidden",height:24,display:"flex",alignItems:"center"},children:n.jsx("div",{title:`${t}`,style:{width:u?2:t,height:16,background:"#3b82f6",borderRadius:4,flexShrink:0}})})})]},l)})})]})]})}},a={name:"2. Usage",render:()=>n.jsxs("div",{style:f,children:[n.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Usage"}),n.jsxs("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:["Import ",n.jsx("code",{children:"spacing"})," for inline styles, or inject"," ",n.jsx("code",{children:"spacingRootStyleObject()"})," on ",n.jsx("code",{children:":root"})," and use"," ",n.jsx("code",{children:"spacingCssVar(4)"})," in CSS."]}),n.jsxs("div",{style:{marginBottom:24},children:[n.jsx("div",{style:d,children:"padding via token (React)"}),n.jsx("div",{style:{display:"inline-block",background:"#e0f2fe",color:"#0c4a6e",padding:s[4],borderRadius:8,fontSize:14},children:"padding: spacing[4] (1rem)"})]}),n.jsxs("div",{style:{marginBottom:24},children:[n.jsx("div",{style:d,children:"gap via token (flex)"}),n.jsx("div",{style:{display:"flex",gap:s[3],flexWrap:"wrap"},children:["A","B","C"].map(i=>n.jsx("div",{style:{width:48,height:48,background:"#f1f5f9",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:i},i))})]}),n.jsxs("div",{children:[n.jsx("div",{style:d,children:"CSS variable name"}),n.jsx("code",{style:{display:"block",fontSize:12,color:"#475569",fontFamily:"ui-monospace, monospace",padding:s[3],background:"#f8fafc",borderRadius:8},children:`gap: var(${m(4)});`})]})]})};var p,c,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '1. Scale',
  render: () => {
    const keys = spacingKeysInOrder();
    return <div style={docShell}>\r
        <h2 style={{
        fontSize: 22,
        fontWeight: 700,
        margin: '0 0 8px'
      }}>\r
          Spacing scale\r
        </h2>\r
        <p style={{
        margin: '0 0 20px',
        color: '#475569',
        lineHeight: 1.6
      }}>\r
          Token → value and CSS variable. Bar width matches the spacing value\r
          (max width capped for large steps).\r
        </p>\r
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 14
      }}>\r
          <thead>\r
            <tr style={{
            borderBottom: '2px solid #e2e8f0',
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
              width: '45%'
            }}>Preview</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {keys.map(key => {
            const value = spacing[key];
            const px = spacingPxAt16Root[key];
            const varName = spacingCssVar(key);
            const displayKey = String(key);
            const isZero = key === 0 || value === '0';
            return <tr key={displayKey} style={{
              borderBottom: '1px solid #f1f5f9'
            }}>\r
                  <td style={{
                padding: '10px 8px',
                fontFamily: 'ui-monospace, monospace',
                fontSize: 12,
                color: '#475569'
              }}>\r
                    {displayKey}\r
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
                color: '#64748b'
              }}>\r
                    {px !== undefined ? px : '—'}\r
                  </td>\r
                  <td style={{
                padding: '10px 8px',
                fontFamily: 'ui-monospace, monospace',
                fontSize: 11,
                color: '#94a3b8',
                wordBreak: 'break-all'
              }}>\r
                    {varName}\r
                  </td>\r
                  <td style={{
                padding: '10px 8px',
                verticalAlign: 'middle'
              }}>\r
                    <div style={{
                  maxWidth: 280,
                  overflow: 'hidden',
                  height: 24,
                  display: 'flex',
                  alignItems: 'center'
                }}>\r
                      <div title={\`\${value}\`} style={{
                    width: isZero ? 2 : value,
                    height: 16,
                    background: '#3b82f6',
                    borderRadius: 4,
                    flexShrink: 0
                  }} />\r
                    </div>\r
                  </td>\r
                </tr>;
          })}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var g,y,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '2. Usage',
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
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        Import <code>spacing</code> for inline styles, or inject{' '}\r
        <code>spacingRootStyleObject()</code> on <code>:root</code> and use{' '}\r
        <code>spacingCssVar(4)</code> in CSS.\r
      </p>\r
      <div style={{
      marginBottom: 24
    }}>\r
        <div style={labelStyle}>padding via token (React)</div>\r
        <div style={{
        display: 'inline-block',
        background: '#e0f2fe',
        color: '#0c4a6e',
        padding: spacing[4],
        borderRadius: 8,
        fontSize: 14
      }}>\r
          padding: spacing[4] (1rem)\r
        </div>\r
      </div>\r
      <div style={{
      marginBottom: 24
    }}>\r
        <div style={labelStyle}>gap via token (flex)</div>\r
        <div style={{
        display: 'flex',
        gap: spacing[3],
        flexWrap: 'wrap'
      }}>\r
          {(['A', 'B', 'C'] as const).map(x => <div key={x} style={{
          width: 48,
          height: 48,
          background: '#f1f5f9',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700
        }}>\r
              {x}\r
            </div>)}\r
        </div>\r
      </div>\r
      <div>\r
        <div style={labelStyle}>CSS variable name</div>\r
        <code style={{
        display: 'block',
        fontSize: 12,
        color: '#475569',
        fontFamily: 'ui-monospace, monospace',
        padding: spacing[3],
        background: '#f8fafc',
        borderRadius: 8
      }}>\r
          {\`gap: var(\${spacingCssVar(4)});\`}\r
        </code>\r
      </div>\r
    </div>
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const C=["Scale","Usage"];export{r as Scale,a as Usage,C as __namedExportsOrder,w as default};
