import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as se}from"./index-BSnFy17d.js";import{a as t,r as F,b as ae,s as de,m as ce,c as b,f as v,t as o,d as le,h as z,l as j,e as k,g as l}from"./typography-tokens-DtjjMcdU.js";import"./primitive-colors-CqocY7XZ.js";const s={fontFamily:t.sans,color:"#0f172a",maxWidth:720},r={fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"#64748b",marginBottom:8},he={title:"Design System/Tokens/Typography",parameters:{layout:"padded",docs:{description:{story:"Typography foundations: families, scale, headings, body, weights, italic/oblique, rhythm, code, states, alignment."}}}},H="The quick brown fox jumps over the lazy dog. 0123456789 Sparing UI.",a={name:"1. Font families",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Font families"}),e.jsxs("p",{style:{margin:"0 0 28px",color:"#475569",lineHeight:1.6},children:["UI uses ",e.jsx("strong",{children:"sans"})," for interface copy; ",e.jsx("strong",{children:"mono"})," ","for code and technical strings. Below, each face listed in the token is rendered in isolation (single face + generic fallback) so you can compare DM Sans, system fonts, and mono stack members."]}),e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("div",{style:r,children:"Sans — full stack (fontFamilies.sans)"}),e.jsx("p",{style:{fontFamily:t.sans,fontSize:28,lineHeight:1.3,margin:0},children:H}),e.jsx("code",{style:{display:"block",marginTop:8,fontSize:12,color:"#64748b",fontFamily:t.mono},children:t.sans})]}),e.jsxs("div",{style:{marginBottom:40},children:[e.jsx("div",{style:r,children:"Mono — full stack (fontFamilies.mono)"}),e.jsx("p",{style:{fontFamily:t.mono,fontSize:18,lineHeight:1.5,margin:0},children:"const theme = useTheme(); // 0x1f4a9"}),e.jsx("code",{style:{display:"block",marginTop:8,fontSize:12,color:"#64748b",fontFamily:t.mono,wordBreak:"break-all"},children:t.mono})]}),e.jsx("h3",{style:{fontSize:16,fontWeight:700,margin:"0 0 12px",color:"#0f172a"},children:"Sans stack — each face alone"}),e.jsx("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:"Same phrase; only the named face from the stack is requested (browser substitutes if the font is missing)."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20,marginBottom:40},children:de.map(({label:n,fontFamily:i,face:u})=>e.jsxs("div",{children:[e.jsx("div",{style:{...r,marginBottom:4},children:n}),e.jsx("p",{style:{fontFamily:i,fontSize:22,lineHeight:1.35,margin:0},children:H}),e.jsxs("code",{style:{display:"block",marginTop:6,fontSize:11,color:"#94a3b8",fontFamily:t.mono,wordBreak:"break-all"},children:["font-family: ",i,";"]})]},u))}),e.jsx("h3",{style:{fontSize:16,fontWeight:700,margin:"0 0 12px",color:"#0f172a"},children:"Mono stack — each face alone"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:ce.map(({label:n,fontFamily:i,face:u})=>e.jsxs("div",{children:[e.jsx("div",{style:{...r,marginBottom:4},children:n}),e.jsx("p",{style:{fontFamily:i,fontSize:16,lineHeight:1.5,margin:0},children:"const x = () => { 0x1f4a9 }; // mono specimen"}),e.jsxs("code",{style:{display:"block",marginTop:6,fontSize:11,color:"#94a3b8",fontFamily:t.mono,wordBreak:"break-all"},children:["font-family: ",i,";"]})]},u))})]})},d={name:"2. Type scale",render:()=>{const n=Object.keys(o);return e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Type scale"}),e.jsxs("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:["Token → ",e.jsx("code",{children:"rem"})," size and approximate px at 16px root."]}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:14},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e2e8f0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 8px"},children:"Token"}),e.jsx("th",{style:{padding:"10px 8px"},children:"rem"}),e.jsx("th",{style:{padding:"10px 8px"},children:"~px"}),e.jsx("th",{style:{padding:"10px 8px"},children:"Sample"})]})}),e.jsx("tbody",{children:n.map(i=>e.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{padding:"12px 8px",fontFamily:t.mono,fontSize:12,color:"#475569"},children:i}),e.jsx("td",{style:{padding:"12px 8px",fontFamily:t.mono},children:o[i].fontSize}),e.jsx("td",{style:{padding:"12px 8px"},children:o[i].pxEquivalent}),e.jsx("td",{style:{padding:"12px 8px"},children:e.jsx("span",{style:{fontSize:o[i].fontSize},children:"Ag sample"})})]},i))})]})]})}},c={name:"3. Headings",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Headings"}),e.jsxs("p",{style:{margin:"0 0 24px",color:"#475569",lineHeight:1.6},children:["H1–H6 mapped to ",e.jsx("code",{children:"headingPresets"})," (scale, weight, leading, tracking)."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:Object.keys(z).map(n=>{const i=z[n].level;return e.jsxs("div",{children:[e.jsx("div",{style:{...r,marginBottom:4},children:n}),se.createElement(`h${i}`,{style:le(n)},`Heading level ${i} specimen`)]},n)})})]})},p={name:"4. Body text",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Body text"}),e.jsxs("p",{style:{margin:"0 0 24px",color:"#475569",lineHeight:1.6},children:["Large, base, small, xsmall via ",e.jsx("code",{children:"bodyTextPresets"}),"."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:Object.keys(ae).map(n=>e.jsxs("div",{children:[e.jsx("div",{style:r,children:n}),e.jsxs("p",{style:F(n),children:["Croki Digital builds clear interfaces. This paragraph uses the"," ",e.jsx("strong",{children:n})," preset for long-form reading and UI density."]})]},n))})]})},m={name:"5. Font weights",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Font weights"}),e.jsxs("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:[e.jsx("code",{children:"fontWeights"}),": regular (400) through bold (700)."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:Object.keys(v).map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:{...r,marginBottom:4},children:[n," — ",v[n]]}),e.jsx("p",{style:{fontFamily:t.sans,fontSize:o.lg.fontSize,fontWeight:v[n],margin:0,lineHeight:1.4},children:"The quick brown fox jumps over the lazy dog."})]},n))})]})},y={name:"5b. Italic and oblique",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Italic and oblique"}),e.jsxs("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:[e.jsx("code",{children:"fontStyles"}),": ",e.jsx("strong",{children:"italic"})," uses the typeface’s true italic glyphs; ",e.jsx("strong",{children:"oblique"})," slants the upright shapes. Use ",e.jsx("code",{children:"resolveBodyTextStyle"})," / ",e.jsx("code",{children:"resolveHeadingStyle"})," ","with ",e.jsx("code",{children:"{ fontStyle: 'italic' }"}),", or CSS variables"," ",e.jsx("code",{children:"--sparing-typography-style-*"}),"."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:Object.keys(b).map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:{...r,marginBottom:4},children:[n," — fontStyles.",n," (",b[n],")"]}),e.jsx("p",{style:{fontFamily:t.sans,fontSize:o.lg.fontSize,fontWeight:v.regular,fontStyle:b[n],margin:0,lineHeight:1.5},children:"Sparing builds clear, purposeful interfaces — the quick brown fox jumps over the lazy dog."})]},n))}),e.jsxs("div",{style:{marginTop:28},children:[e.jsx("div",{style:r,children:"Body preset + italic"}),e.jsx("p",{style:F("base",{fontStyle:"italic"}),children:"Base body in italic for quotes, captions, or light emphasis."})]}),e.jsxs("div",{style:{marginTop:20},children:[e.jsx("div",{style:r,children:"H4 heading + oblique"}),se.createElement("h4",{style:le("h4",{fontStyle:"oblique"})},"Slanted subheading or label")]})]})},g={name:"6. Line height",render:()=>e.jsxs("div",{style:{...s,maxWidth:480},children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Line height"}),e.jsxs("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:[e.jsx("code",{children:"lineHeights"}),": tight, normal, relaxed (unitless multipliers)."]}),Object.keys(k).map(n=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsxs("div",{style:r,children:[n," — ",k[n]]}),e.jsxs("p",{style:{fontFamily:t.sans,fontSize:o.base.fontSize,lineHeight:k[n],margin:0,color:"#334155"},children:["Line height controls vertical rhythm. This block uses the"," ",e.jsx("strong",{children:n})," token so you can compare density across paragraphs in product copy and forms."]})]},n))]})},h={name:"7. Letter spacing",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Letter spacing"}),e.jsxs("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:[e.jsx("code",{children:"letterSpacings"}),": tight, normal, wide."]}),Object.keys(j).map(n=>e.jsxs("div",{style:{marginBottom:20},children:[e.jsxs("div",{style:r,children:[n," — ",j[n]||"0"]}),e.jsx("p",{style:{fontFamily:t.sans,fontSize:o["2xl"].fontSize,fontWeight:600,letterSpacing:j[n],margin:0},children:"SPACING SPECIMEN"})]},n))]})},f={name:"8. Monospace / code",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Monospace / code"}),e.jsxs("p",{style:{margin:"0 0 16px",color:"#475569",lineHeight:1.6},children:["Inline: use a ",e.jsx("code",{style:{fontFamily:t.mono},children:"code"})," ","element with ",e.jsx("code",{children:"fontFamilies.mono"}),". Block: padded container with the same family."]}),e.jsxs("p",{style:{fontSize:o.base.fontSize,lineHeight:1.6,margin:"0 0 20px"},children:["Run ",e.jsx("code",{style:{fontFamily:t.mono,fontSize:"0.9em",background:"#f1f5f9",padding:"2px 6px",borderRadius:4},children:"nx run ui-docs:storybook"})," ","to preview tokens."]}),e.jsx("div",{style:r,children:"Block"}),e.jsx("pre",{style:{fontFamily:t.mono,fontSize:o.sm.fontSize,lineHeight:1.55,margin:0,padding:16,background:"#0f172a",color:"#e2e8f0",borderRadius:8,overflow:"auto"},children:`import { fontFamilies, typeScale } from 'charte-graphique';

export function Example() {
  return <p style={{ fontFamily: fontFamilies.sans }}>Hello</p>;
}`})]})},x={name:"9. Text states",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Text states"}),e.jsxs("p",{style:{margin:"0 0 20px",color:"#475569",lineHeight:1.6},children:[e.jsx("code",{children:"textStateColors"})," maps UI meaning to primitive palette (see color tokens)."]}),e.jsxs("div",{style:{fontSize:o.base.fontSize,lineHeight:1.7,display:"flex",flexDirection:"column",gap:12},children:[e.jsx("p",{style:{margin:0,color:l.primary},children:"Primary — main content"}),e.jsx("p",{style:{margin:0,color:l.secondary},children:"Secondary — supporting copy"}),e.jsxs("p",{style:{margin:0},children:[e.jsx("a",{href:"https://example.com",onClick:n=>n.preventDefault(),style:{color:l.link,fontWeight:600},children:"Link — default"})," · ",e.jsx("span",{style:{color:l.linkHover,fontWeight:600},children:"Link hover color"})]}),e.jsx("p",{style:{margin:0,color:l.error},children:"Error — validation and destructive context"}),e.jsx("p",{style:{margin:0,color:l.warning},children:"Warning — caution and non-blocking alerts"}),e.jsx("p",{style:{margin:0,color:l.success},children:"Success — confirmation and positive feedback"}),e.jsx("p",{style:{margin:0,color:l.info},children:"Info — neutral notices and contextual tips"}),e.jsx("p",{style:{margin:0,color:l.disabled},children:"Disabled — inactive controls"})]})]})},S={name:"10. Alignments",render:()=>e.jsxs("div",{style:s,children:[e.jsx("h2",{style:{fontSize:22,fontWeight:700,margin:"0 0 8px"},children:"Alignments"}),e.jsxs("p",{style:{margin:"0 0 24px",color:"#475569",lineHeight:1.6},children:["Use ",e.jsx("code",{children:"textAlign"})," on the container; tokens stay the same."]}),[{label:"Left",align:"left"},{label:"Center",align:"center"},{label:"Right",align:"right"}].map(({label:n,align:i})=>e.jsxs("div",{style:{marginBottom:24,padding:16,background:"#f1f5f9",borderRadius:8,textAlign:i},children:[e.jsx("div",{style:{...r,textAlign:"left"},children:n}),e.jsx("p",{style:{...F("base"),color:"#334155",display:"inline-block",maxWidth:320,textAlign:i},children:"Alignment specimen. Short lines show how rag changes for titles and callouts."})]},n))]})};var T,B,W;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '1. Font families',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Font families\r
      </h2>\r
      <p style={{
      margin: '0 0 28px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        UI uses <strong>sans</strong> for interface copy; <strong>mono</strong>{' '}\r
        for code and technical strings. Below, each face listed in the token is\r
        rendered in isolation (single face + generic fallback) so you can compare\r
        DM Sans, system fonts, and mono stack members.\r
      </p>\r
      <div style={{
      marginBottom: 32
    }}>\r
        <div style={labelStyle}>Sans — full stack (fontFamilies.sans)</div>\r
        <p style={{
        fontFamily: fontFamilies.sans,
        fontSize: 28,
        lineHeight: 1.3,
        margin: 0
      }}>\r
          {specimenLine}\r
        </p>\r
        <code style={{
        display: 'block',
        marginTop: 8,
        fontSize: 12,
        color: '#64748b',
        fontFamily: fontFamilies.mono
      }}>\r
          {fontFamilies.sans}\r
        </code>\r
      </div>\r
      <div style={{
      marginBottom: 40
    }}>\r
        <div style={labelStyle}>Mono — full stack (fontFamilies.mono)</div>\r
        <p style={{
        fontFamily: fontFamilies.mono,
        fontSize: 18,
        lineHeight: 1.5,
        margin: 0
      }}>\r
          const theme = useTheme(); // 0x1f4a9\r
        </p>\r
        <code style={{
        display: 'block',
        marginTop: 8,
        fontSize: 12,
        color: '#64748b',
        fontFamily: fontFamilies.mono,
        wordBreak: 'break-all'
      }}>\r
          {fontFamilies.mono}\r
        </code>\r
      </div>\r
\r
      <h3 style={{
      fontSize: 16,
      fontWeight: 700,
      margin: '0 0 12px',
      color: '#0f172a'
    }}>\r
        Sans stack — each face alone\r
      </h3>\r
      <p style={{
      margin: '0 0 20px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        Same phrase; only the named face from the stack is requested (browser\r
        substitutes if the font is missing).\r
      </p>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginBottom: 40
    }}>\r
        {sansFontStackFaceSpecimens.map(({
        label,
        fontFamily,
        face
      }) => <div key={face}>\r
            <div style={{
          ...labelStyle,
          marginBottom: 4
        }}>{label}</div>\r
            <p style={{
          fontFamily,
          fontSize: 22,
          lineHeight: 1.35,
          margin: 0
        }}>\r
              {specimenLine}\r
            </p>\r
            <code style={{
          display: 'block',
          marginTop: 6,
          fontSize: 11,
          color: '#94a3b8',
          fontFamily: fontFamilies.mono,
          wordBreak: 'break-all'
        }}>\r
              font-family: {fontFamily};\r
            </code>\r
          </div>)}\r
      </div>\r
\r
      <h3 style={{
      fontSize: 16,
      fontWeight: 700,
      margin: '0 0 12px',
      color: '#0f172a'
    }}>\r
        Mono stack — each face alone\r
      </h3>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }}>\r
        {monoFontStackFaceSpecimens.map(({
        label,
        fontFamily,
        face
      }) => <div key={face}>\r
            <div style={{
          ...labelStyle,
          marginBottom: 4
        }}>{label}</div>\r
            <p style={{
          fontFamily,
          fontSize: 16,
          lineHeight: 1.5,
          margin: 0
        }}>\r
              {\`const x = () => { 0x1f4a9 }; // mono specimen\`}\r
            </p>\r
            <code style={{
          display: 'block',
          marginTop: 6,
          fontSize: 11,
          color: '#94a3b8',
          fontFamily: fontFamilies.mono,
          wordBreak: 'break-all'
        }}>\r
              font-family: {fontFamily};\r
            </code>\r
          </div>)}\r
      </div>\r
    </div>
}`,...(W=(B=a.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var w,C,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '2. Type scale',
  render: () => {
    const keys = Object.keys(typeScale) as TypeScaleToken[];
    return <div style={docShell}>\r
        <h2 style={{
        fontSize: 22,
        fontWeight: 700,
        margin: '0 0 8px'
      }}>\r
          Type scale\r
        </h2>\r
        <p style={{
        margin: '0 0 20px',
        color: '#475569',
        lineHeight: 1.6
      }}>\r
          Token → <code>rem</code> size and approximate px at 16px root.\r
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
            }}>rem</th>\r
              <th style={{
              padding: '10px 8px'
            }}>~px</th>\r
              <th style={{
              padding: '10px 8px'
            }}>Sample</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {keys.map(key => <tr key={key} style={{
            borderBottom: '1px solid #f1f5f9'
          }}>\r
                <td style={{
              padding: '12px 8px',
              fontFamily: fontFamilies.mono,
              fontSize: 12,
              color: '#475569'
            }}>\r
                  {key}\r
                </td>\r
                <td style={{
              padding: '12px 8px',
              fontFamily: fontFamilies.mono
            }}>\r
                  {typeScale[key].fontSize}\r
                </td>\r
                <td style={{
              padding: '12px 8px'
            }}>\r
                  {typeScale[key].pxEquivalent}\r
                </td>\r
                <td style={{
              padding: '12px 8px'
            }}>\r
                  <span style={{
                fontSize: typeScale[key].fontSize
              }}>\r
                    Ag sample\r
                  </span>\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var q,D,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '3. Headings',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Headings\r
      </h2>\r
      <p style={{
      margin: '0 0 24px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        H1–H6 mapped to <code>headingPresets</code> (scale, weight, leading,\r
        tracking).\r
      </p>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }}>\r
        {(Object.keys(headingPresets) as HeadingPresetKey[]).map(key => {
        const lvl = headingPresets[key].level;
        return <div key={key}>\r
              <div style={{
            ...labelStyle,
            marginBottom: 4
          }}>{key}</div>\r
              {React.createElement(\`h\${lvl}\` as 'h1', {
            style: resolveHeadingStyle(key)
          }, \`Heading level \${lvl} specimen\`)}\r
            </div>;
      })}\r
      </div>\r
    </div>
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var I,P,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '4. Body text',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Body text\r
      </h2>\r
      <p style={{
      margin: '0 0 24px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        Large, base, small, xsmall via <code>bodyTextPresets</code>.\r
      </p>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>\r
        {(Object.keys(bodyTextPresets) as BodyTextPresetKey[]).map(key => <div key={key}>\r
            <div style={labelStyle}>{key}</div>\r
            <p style={resolveBodyTextStyle(key)}>\r
              Croki Digital builds clear interfaces. This paragraph uses the{' '}\r
              <strong>{key}</strong> preset for long-form reading and UI density.\r
            </p>\r
          </div>)}\r
      </div>\r
    </div>
}`,...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var O,R,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '5. Font weights',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Font weights\r
      </h2>\r
      <p style={{
      margin: '0 0 20px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        <code>fontWeights</code>: regular (400) through bold (700).\r
      </p>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>\r
        {(Object.keys(fontWeights) as FontWeightToken[]).map(key => <div key={key}>\r
            <div style={{
          ...labelStyle,
          marginBottom: 4
        }}>\r
              {key} — {fontWeights[key]}\r
            </div>\r
            <p style={{
          fontFamily: fontFamilies.sans,
          fontSize: typeScale.lg.fontSize,
          fontWeight: fontWeights[key],
          margin: 0,
          lineHeight: 1.4
        }}>\r
              The quick brown fox jumps over the lazy dog.\r
            </p>\r
          </div>)}\r
      </div>\r
    </div>
}`,...(M=(R=m.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var U,N,$;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '5b. Italic and oblique',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Italic and oblique\r
      </h2>\r
      <p style={{
      margin: '0 0 20px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        <code>fontStyles</code>: <strong>italic</strong> uses the typeface’s\r
        true italic glyphs; <strong>oblique</strong> slants the upright shapes.\r
        Use <code>resolveBodyTextStyle</code> / <code>resolveHeadingStyle</code>{' '}\r
        with <code>{'{ fontStyle: \\'italic\\' }'}</code>, or CSS variables{' '}\r
        <code>--sparing-typography-style-*</code>.\r
      </p>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }}>\r
        {(Object.keys(fontStyles) as FontStyleToken[]).map(key => <div key={key}>\r
            <div style={{
          ...labelStyle,
          marginBottom: 4
        }}>\r
              {key} — fontStyles.{key} ({fontStyles[key]})\r
            </div>\r
            <p style={{
          fontFamily: fontFamilies.sans,
          fontSize: typeScale.lg.fontSize,
          fontWeight: fontWeights.regular,
          fontStyle: fontStyles[key],
          margin: 0,
          lineHeight: 1.5
        }}>\r
              Sparing builds clear, purposeful interfaces — the quick brown fox\r
              jumps over the lazy dog.\r
            </p>\r
          </div>)}\r
      </div>\r
      <div style={{
      marginTop: 28
    }}>\r
        <div style={labelStyle}>Body preset + italic</div>\r
        <p style={resolveBodyTextStyle('base', {
        fontStyle: 'italic'
      })}>\r
          Base body in italic for quotes, captions, or light emphasis.\r
        </p>\r
      </div>\r
      <div style={{
      marginTop: 20
    }}>\r
        <div style={labelStyle}>H4 heading + oblique</div>\r
        {React.createElement('h4', {
        style: resolveHeadingStyle('h4', {
          fontStyle: 'oblique'
        })
      }, 'Slanted subheading or label')}\r
      </div>\r
    </div>
}`,...($=(N=y.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var G,K,_;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '6. Line height',
  render: () => <div style={{
    ...docShell,
    maxWidth: 480
  }}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Line height\r
      </h2>\r
      <p style={{
      margin: '0 0 20px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        <code>lineHeights</code>: tight, normal, relaxed (unitless multipliers).\r
      </p>\r
      {(Object.keys(lineHeights) as LineHeightToken[]).map(key => <div key={key} style={{
      marginBottom: 24
    }}>\r
          <div style={labelStyle}>\r
            {key} — {lineHeights[key]}\r
          </div>\r
          <p style={{
        fontFamily: fontFamilies.sans,
        fontSize: typeScale.base.fontSize,
        lineHeight: lineHeights[key],
        margin: 0,
        color: '#334155'
      }}>\r
            Line height controls vertical rhythm. This block uses the{' '}\r
            <strong>{key}</strong> token so you can compare density across\r
            paragraphs in product copy and forms.\r
          </p>\r
        </div>)}\r
    </div>
}`,...(_=(K=g.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var J,Q,V;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '7. Letter spacing',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Letter spacing\r
      </h2>\r
      <p style={{
      margin: '0 0 20px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        <code>letterSpacings</code>: tight, normal, wide.\r
      </p>\r
      {(Object.keys(letterSpacings) as LetterSpacingToken[]).map(key => <div key={key} style={{
      marginBottom: 20
    }}>\r
          <div style={labelStyle}>\r
            {key} — {letterSpacings[key] || '0'}\r
          </div>\r
          <p style={{
        fontFamily: fontFamilies.sans,
        fontSize: typeScale['2xl'].fontSize,
        fontWeight: 600,
        letterSpacing: letterSpacings[key],
        margin: 0
      }}>\r
            SPACING SPECIMEN\r
          </p>\r
        </div>)}\r
    </div>
}`,...(V=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '8. Monospace / code',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Monospace / code\r
      </h2>\r
      <p style={{
      margin: '0 0 16px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        Inline: use a <code style={{
        fontFamily: fontFamilies.mono
      }}>code</code>{' '}\r
        element with <code>fontFamilies.mono</code>. Block: padded container with\r
        the same family.\r
      </p>\r
      <p style={{
      fontSize: typeScale.base.fontSize,
      lineHeight: 1.6,
      margin: '0 0 20px'
    }}>\r
        Run <code style={{
        fontFamily: fontFamilies.mono,
        fontSize: '0.9em',
        background: '#f1f5f9',
        padding: '2px 6px',
        borderRadius: 4
      }}>nx run ui-docs:storybook</code>{' '}\r
        to preview tokens.\r
      </p>\r
      <div style={labelStyle}>Block</div>\r
      <pre style={{
      fontFamily: fontFamilies.mono,
      fontSize: typeScale.sm.fontSize,
      lineHeight: 1.55,
      margin: 0,
      padding: 16,
      background: '#0f172a',
      color: '#e2e8f0',
      borderRadius: 8,
      overflow: 'auto'
    }}>\r
        {\`import { fontFamilies, typeScale } from 'charte-graphique';

export function Example() {
  return <p style={{ fontFamily: fontFamilies.sans }}>Hello</p>;
}\`}\r
      </pre>\r
    </div>
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '9. Text states',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Text states\r
      </h2>\r
      <p style={{
      margin: '0 0 20px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        <code>textStateColors</code> maps UI meaning to primitive palette (see\r
        color tokens).\r
      </p>\r
      <div style={{
      fontSize: typeScale.base.fontSize,
      lineHeight: 1.7,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>\r
        <p style={{
        margin: 0,
        color: textStateColors.primary
      }}>\r
          Primary — main content\r
        </p>\r
        <p style={{
        margin: 0,
        color: textStateColors.secondary
      }}>\r
          Secondary — supporting copy\r
        </p>\r
        <p style={{
        margin: 0
      }}>\r
          <a href="https://example.com" onClick={e => e.preventDefault()} style={{
          color: textStateColors.link,
          fontWeight: 600
        }}>\r
            Link — default\r
          </a>\r
          {' · '}\r
          <span style={{
          color: textStateColors.linkHover,
          fontWeight: 600
        }}>\r
            Link hover color\r
          </span>\r
        </p>\r
        <p style={{
        margin: 0,
        color: textStateColors.error
      }}>\r
          Error — validation and destructive context\r
        </p>\r
        <p style={{
        margin: 0,
        color: textStateColors.warning
      }}>\r
          Warning — caution and non-blocking alerts\r
        </p>\r
        <p style={{
        margin: 0,
        color: textStateColors.success
      }}>\r
          Success — confirmation and positive feedback\r
        </p>\r
        <p style={{
        margin: 0,
        color: textStateColors.info
      }}>\r
          Info — neutral notices and contextual tips\r
        </p>\r
        <p style={{
        margin: 0,
        color: textStateColors.disabled
      }}>\r
          Disabled — inactive controls\r
        </p>\r
      </div>\r
    </div>
}`,...(te=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ie,re,oe;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: '10. Alignments',
  render: () => <div style={docShell}>\r
      <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>\r
        Alignments\r
      </h2>\r
      <p style={{
      margin: '0 0 24px',
      color: '#475569',
      lineHeight: 1.6
    }}>\r
        Use <code>textAlign</code> on the container; tokens stay the same.\r
      </p>\r
      {([{
      label: 'Left',
      align: 'left' as const
    }, {
      label: 'Center',
      align: 'center' as const
    }, {
      label: 'Right',
      align: 'right' as const
    }] as const).map(({
      label,
      align
    }) => <div key={label} style={{
      marginBottom: 24,
      padding: 16,
      background: '#f1f5f9',
      borderRadius: 8,
      textAlign: align
    }}>\r
          <div style={{
        ...labelStyle,
        textAlign: 'left'
      }}>{label}</div>\r
          <p style={{
        ...resolveBodyTextStyle('base'),
        color: '#334155',
        display: 'inline-block',
        maxWidth: 320,
        textAlign: align
      }}>\r
            Alignment specimen. Short lines show how rag changes for titles and\r
            callouts.\r
          </p>\r
        </div>)}\r
    </div>
}`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const fe=["FontFamilies","TypeScale","Headings","BodyText","FontWeights","FontStyles","LineHeight","LetterSpacing","MonospaceCode","TextStates","Alignments"];export{S as Alignments,p as BodyText,a as FontFamilies,y as FontStyles,m as FontWeights,c as Headings,h as LetterSpacing,g as LineHeight,f as MonospaceCode,x as TextStates,d as TypeScale,fe as __namedExportsOrder,he as default};
