import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-BSnFy17d.js";import{p as oe,P as d,C as j}from"./primitive-colors-CqocY7XZ.js";import{a as se}from"./ui-sizes-tokens-DV8X2A0Z.js";import{t as le}from"./typography-tokens-DtjjMcdU.js";import{I as a,s as te,a as re,b as ne,P as de}from"./button-primitive-sx-C98tZvP1.js";import{B as s}from"./Button-DwIGEH-P.js";import{c as ce}from"./createLucideIcon-VIERY1cO.js";import"./spacing-tokens-D0rW3Zez.js";import"./radius-tokens-D-KuzIVl.js";import"./Button--keFMW37.js";import"./createTheme-DI3Ygkl-.js";import"./memoTheme-BRZfWJPw.js";import"./DefaultPropsProvider-3wuxoqT1.js";import"./createSimplePaletteValueFilter-DP1slul8.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useId-BL9O7AM2.js";import"./ButtonBase-C-pKo4oY.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./CircularProgress-DMSsZ7A0.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pe=ce("ArrowRight",me),o=oe;function ie(i){const n=se[i].body;return le[n].pxEquivalent}const c={fontFamily:"var(--yaoundelogis-font-family, Poppins, sans-serif)",maxWidth:"100%"},ae={display:"flex",flexWrap:"wrap",gap:10,alignItems:"center"},m=[{title:"Contained",variant:"contained",sx:te},{title:"Outlined",variant:"outlined",sx:re},{title:"Text",variant:"text",sx:ne}],he=["sm","md","lg","xl"],Le={title:"Shared/Button",component:s,tags:["autodocs"],argTypes:{children:{control:"text",description:"Visible label (required — icon-only is not supported)"},density:{control:"inline-radio",options:["sm","md","lg","xl"]},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["primary","secondary","success","error","warning","info","inherit"]},loading:{control:"boolean"},loadingText:{control:"text"},loadingPosition:{control:"inline-radio",options:["start"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"},startIcon:{control:!1},endIcon:{control:!1},onClick:{action:"clicked"}},args:{children:"Continue",variant:"contained",color:"primary",density:"md",loading:!1,disabled:!1,fullWidth:!1,loadingPosition:"start"}};function b({variant:i,sxFn:n}){return e.jsx("div",{style:{overflow:"auto",maxHeight:"min(72vh, 720px)"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontSize:11,width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{position:"sticky",left:0,background:"#F5F6F7",zIndex:1,padding:6,textAlign:"left"},children:"hue \\ step"}),j.map(r=>e.jsx("th",{style:{padding:6,minWidth:52},children:r},r))]})}),e.jsx("tbody",{children:d.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{position:"sticky",left:0,background:"#F5F6F7",fontWeight:600,padding:6,textTransform:"capitalize"},children:r}),j.map(t=>e.jsx("td",{style:{padding:4,textAlign:"center"},children:e.jsx(s,{variant:i,color:"inherit",density:"md",sx:n(r,t),children:String(t)})},t))]},r))})]})})}const p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...c,maxHeight:"85vh",overflow:"auto",paddingRight:8},children:[e.jsx("h3",{style:{margin:"0 0 12px",fontSize:18},children:"Contained"}),e.jsx(b,{variant:"contained",sxFn:te}),e.jsx("h3",{style:{margin:"24px 0 12px",fontSize:18},children:"Outlined"}),e.jsx(b,{variant:"outlined",sxFn:re}),e.jsx("h3",{style:{margin:"24px 0 12px",fontSize:18},children:"Text"}),e.jsx(b,{variant:"text",sxFn:ne})]})},h={name:"Densities",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...c,maxHeight:"85vh",overflow:"auto",paddingRight:8},children:[e.jsxs("p",{style:{margin:"0 0 16px",fontSize:14,color:o.gray[500],maxWidth:520},children:["Each row is one hue: buttons are ",e.jsx("strong",{children:"sm → xl"})," densities. All three variants below use primitive fills at tone ",e.jsx("strong",{children:a}),"."]}),m.map(({title:i,variant:n,sx:r})=>e.jsxs("section",{style:{marginBottom:28},children:[e.jsx("h4",{style:{margin:"0 0 12px",fontSize:15,fontWeight:600,textTransform:"capitalize"},children:i}),d.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"},children:[e.jsx("span",{style:{width:64,fontSize:12,fontWeight:600,textTransform:"capitalize",color:o.gray[600]},children:t}),he.map(l=>e.jsx(s,{density:l,variant:n,color:"inherit",sx:r(t,a),children:l},l))]},t))]},n))]})},x={name:"Icon + label (start)",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{...c,maxHeight:"85vh",overflow:"auto",paddingRight:8},children:m.map(({title:i,variant:n,sx:r})=>e.jsxs("section",{style:{marginBottom:24},children:[e.jsx("h4",{style:{margin:"0 0 10px",fontSize:15,fontWeight:600,textTransform:"capitalize"},children:i}),e.jsx("div",{style:ae,children:d.map(t=>e.jsx(s,{variant:n,color:"inherit",density:"md",sx:r(t,a),startIcon:e.jsx(de,{size:ie("md"),strokeWidth:2,"aria-hidden":!0,color:"currentColor"}),children:t},t))})]},n))})},g={name:"Label + icon (end)",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{...c,maxHeight:"85vh",overflow:"auto",paddingRight:8},children:m.map(({title:i,variant:n,sx:r})=>e.jsxs("section",{style:{marginBottom:24},children:[e.jsx("h4",{style:{margin:"0 0 10px",fontSize:15,fontWeight:600,textTransform:"capitalize"},children:i}),e.jsx("div",{style:ae,children:d.map(t=>e.jsx(s,{variant:n,color:"inherit",density:"md",sx:r(t,a),endIcon:e.jsx(pe,{size:ie("md"),strokeWidth:2,"aria-hidden":!0,color:"currentColor"}),children:t},t))})]},n))})};function xe({variant:i,sx:n}){const[r,t]=S.useState(!1);return S.useEffect(()=>{if(!r)return;const l=window.setTimeout(()=>t(!1),2500);return()=>window.clearTimeout(l)},[r]),e.jsx(s,{variant:i,color:"inherit",density:"md",sx:n,loading:r,loadingPosition:"start",onClick:()=>t(!0),children:"Save"})}function ge({variant:i,sx:n}){const[r,t]=S.useState(!1);return S.useEffect(()=>{if(!r)return;const l=window.setTimeout(()=>t(!1),2500);return()=>window.clearTimeout(l)},[r]),e.jsx(s,{variant:i,color:"inherit",density:"md",sx:n,loading:r,loadingPosition:"start",loadingText:"Saving…",onClick:()=>t(!0),children:"Save"})}const u={name:"Loading · spinner + label",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...c,maxHeight:"85vh",overflow:"auto",paddingRight:8},children:[e.jsxs("p",{style:{margin:"0 0 16px",fontSize:14,color:o.gray[500],maxWidth:560},children:["Click any button: spinner stays beside the label, then resets after a simulated delay. All primitive hues at tone ",e.jsx("strong",{children:a}),", every variant."]}),m.map(({title:i,variant:n,sx:r})=>e.jsxs("section",{style:{marginBottom:24},children:[e.jsx("h4",{style:{margin:"0 0 10px",fontSize:15,fontWeight:600,textTransform:"capitalize"},children:i}),d.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8,flexWrap:"wrap"},children:[e.jsx("span",{style:{width:64,fontSize:12,fontWeight:600,textTransform:"capitalize",color:o.gray[600]},children:t}),e.jsx(xe,{variant:n,sx:r(t,a)})]},t))]},n))]})},y={name:"Loading · replace label",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...c,maxHeight:"85vh",overflow:"auto",paddingRight:8},children:[e.jsx("p",{style:{margin:"0 0 16px",fontSize:14,color:o.gray[500],maxWidth:560},children:'Click any button: label becomes "Saving…", spinner shows, control disables, then resets. Same primitive matrix as above.'}),m.map(({title:i,variant:n,sx:r})=>e.jsxs("section",{style:{marginBottom:24},children:[e.jsx("h4",{style:{margin:"0 0 10px",fontSize:15,fontWeight:600,textTransform:"capitalize"},children:i}),d.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8,flexWrap:"wrap"},children:[e.jsx("span",{style:{width:64,fontSize:12,fontWeight:600,textTransform:"capitalize",color:o.gray[600]},children:t}),e.jsx(ge,{variant:n,sx:r(t,a)})]},t))]},n))]})},f={args:{disabled:!0,children:"Unavailable",variant:"contained",color:"primary"}},v={name:"Full width",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...c,maxWidth:440},children:[e.jsxs("p",{style:{margin:"0 0 16px",fontSize:14,color:o.gray[500]},children:["Narrow column so ",e.jsx("code",{children:"fullWidth"})," is visible — every hue and variant at tone"," ",e.jsx("strong",{children:a}),"."]}),m.map(({title:i,variant:n,sx:r})=>e.jsxs("section",{style:{marginBottom:24},children:[e.jsx("h4",{style:{margin:"0 0 10px",fontSize:15,fontWeight:600,textTransform:"capitalize"},children:i}),d.map(t=>e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("div",{style:{fontSize:11,marginBottom:4,textTransform:"capitalize",color:o.gray[600],fontWeight:600},children:t}),e.jsx(s,{fullWidth:!0,variant:n,color:"inherit",density:"md",sx:r(t,a),children:"Continue"})]},t))]},n))]})};var T,I,z,W,w;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...shell,
    maxHeight: '85vh',
    overflow: 'auto',
    paddingRight: 8
  }}>\r
      <h3 style={{
      margin: '0 0 12px',
      fontSize: 18
    }}>Contained</h3>\r
      <MatrixTable variant="contained" sxFn={sxContained} />\r
      <h3 style={{
      margin: '24px 0 12px',
      fontSize: 18
    }}>Outlined</h3>\r
      <MatrixTable variant="outlined" sxFn={sxOutlined} />\r
      <h3 style={{
      margin: '24px 0 12px',
      fontSize: 18
    }}>Text</h3>\r
      <MatrixTable variant="text" sxFn={sxText} />\r
    </div>
}`,...(z=(I=p.parameters)==null?void 0:I.docs)==null?void 0:z.source},description:{story:"All primitive hues × all scale steps × contained | outlined | text. Spinner sizes follow `spinnerDiameterForComponent` in the component.",...(w=(W=p.parameters)==null?void 0:W.docs)==null?void 0:w.description}}};var R,C,E,O,N;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Densities',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...shell,
    maxHeight: '85vh',
    overflow: 'auto',
    paddingRight: 8
  }}>\r
      <p style={{
      margin: '0 0 16px',
      fontSize: 14,
      color: pc.gray[500],
      maxWidth: 520
    }}>\r
        Each row is one hue: buttons are <strong>sm → xl</strong> densities. All three variants\r
        below use primitive fills at tone <strong>{ICON_TONE}</strong>.\r
      </p>\r
      {VARIANT_ROWS.map(({
      title,
      variant,
      sx
    }) => <section key={variant} style={{
      marginBottom: 28
    }}>\r
          <h4 style={{
        margin: '0 0 12px',
        fontSize: 15,
        fontWeight: 600,
        textTransform: 'capitalize'
      }}>\r
            {title}\r
          </h4>\r
          {PRIMITIVE_HUES.map(hue => <div key={hue} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
        flexWrap: 'wrap'
      }}>\r
              <span style={{
          width: 64,
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'capitalize',
          color: pc.gray[600]
        }}>\r
                {hue}\r
              </span>\r
              {DENSITY_KEYS.map(d => <Button key={d} density={d} variant={variant} color="inherit" sx={sx(hue, ICON_TONE)}>\r
                  {d}\r
                </Button>)}\r
            </div>)}\r
        </section>)}\r
    </div>
}`,...(E=(C=h.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:"Every primitive hue × sm–xl × contained | outlined | text (tone {ICON_TONE}).",...(N=(O=h.parameters)==null?void 0:O.docs)==null?void 0:N.description}}};var _,B,k,P,L;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Icon + label (start)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...shell,
    maxHeight: '85vh',
    overflow: 'auto',
    paddingRight: 8
  }}>\r
      {VARIANT_ROWS.map(({
      title,
      variant,
      sx
    }) => <section key={variant} style={{
      marginBottom: 24
    }}>\r
          <h4 style={{
        margin: '0 0 10px',
        fontSize: 15,
        fontWeight: 600,
        textTransform: 'capitalize'
      }}>\r
            {title}\r
          </h4>\r
          <div style={iconRowStyle}>\r
            {PRIMITIVE_HUES.map(hue => <Button key={hue} variant={variant} color="inherit" density="md" sx={sx(hue, ICON_TONE)} startIcon={<Plus size={iconPx('md')} strokeWidth={2} aria-hidden color="currentColor" />}>\r
                {hue}\r
              </Button>)}\r
          </div>\r
        </section>)}\r
    </div>
}`,...(k=(B=x.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:"Icon + label — every primitive hue at tone {ICON_TONE}, all variants",...(L=(P=x.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var A,H,F,V,D;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Label + icon (end)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...shell,
    maxHeight: '85vh',
    overflow: 'auto',
    paddingRight: 8
  }}>\r
      {VARIANT_ROWS.map(({
      title,
      variant,
      sx
    }) => <section key={variant} style={{
      marginBottom: 24
    }}>\r
          <h4 style={{
        margin: '0 0 10px',
        fontSize: 15,
        fontWeight: 600,
        textTransform: 'capitalize'
      }}>\r
            {title}\r
          </h4>\r
          <div style={iconRowStyle}>\r
            {PRIMITIVE_HUES.map(hue => <Button key={hue} variant={variant} color="inherit" density="md" sx={sx(hue, ICON_TONE)} endIcon={<ArrowRight size={iconPx('md')} strokeWidth={2} aria-hidden color="currentColor" />}>\r
                {hue}\r
              </Button>)}\r
          </div>\r
        </section>)}\r
    </div>
}`,...(F=(H=g.parameters)==null?void 0:H.docs)==null?void 0:F.source},description:{story:"Label + icon — every primitive hue at tone {ICON_TONE}, all variants",...(D=(V=g.parameters)==null?void 0:V.docs)==null?void 0:D.description}}};var M,U,q;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Loading · spinner + label',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...shell,
    maxHeight: '85vh',
    overflow: 'auto',
    paddingRight: 8
  }}>\r
      <p style={{
      margin: '0 0 16px',
      fontSize: 14,
      color: pc.gray[500],
      maxWidth: 560
    }}>\r
        Click any button: spinner stays beside the label, then resets after a simulated delay.\r
        All primitive hues at tone <strong>{ICON_TONE}</strong>, every variant.\r
      </p>\r
      {VARIANT_ROWS.map(({
      title,
      variant,
      sx
    }) => <section key={variant} style={{
      marginBottom: 24
    }}>\r
          <h4 style={{
        margin: '0 0 10px',
        fontSize: 15,
        fontWeight: 600,
        textTransform: 'capitalize'
      }}>\r
            {title}\r
          </h4>\r
          {PRIMITIVE_HUES.map(hue => <div key={hue} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
        flexWrap: 'wrap'
      }}>\r
              <span style={{
          width: 64,
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'capitalize',
          color: pc.gray[600]
        }}>\r
                {hue}\r
              </span>\r
              <LoadingSpinnerDemoCell variant={variant} sx={sx(hue, ICON_TONE)} />\r
            </div>)}\r
        </section>)}\r
    </div>
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var Y,K,G;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Loading · replace label',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...shell,
    maxHeight: '85vh',
    overflow: 'auto',
    paddingRight: 8
  }}>\r
      <p style={{
      margin: '0 0 16px',
      fontSize: 14,
      color: pc.gray[500],
      maxWidth: 560
    }}>\r
        Click any button: label becomes &quot;Saving…&quot;, spinner shows, control disables,\r
        then resets. Same primitive matrix as above.\r
      </p>\r
      {VARIANT_ROWS.map(({
      title,
      variant,
      sx
    }) => <section key={variant} style={{
      marginBottom: 24
    }}>\r
          <h4 style={{
        margin: '0 0 10px',
        fontSize: 15,
        fontWeight: 600,
        textTransform: 'capitalize'
      }}>\r
            {title}\r
          </h4>\r
          {PRIMITIVE_HUES.map(hue => <div key={hue} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
        flexWrap: 'wrap'
      }}>\r
              <span style={{
          width: 64,
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'capitalize',
          color: pc.gray[600]
        }}>\r
                {hue}\r
              </span>\r
              <LoadingReplaceDemoCell variant={variant} sx={sx(hue, ICON_TONE)} />\r
            </div>)}\r
        </section>)}\r
    </div>
}`,...(G=(K=y.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Unavailable',
    variant: 'contained',
    color: 'primary'
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Full width',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...shell,
    maxWidth: 440
  }}>\r
      <p style={{
      margin: '0 0 16px',
      fontSize: 14,
      color: pc.gray[500]
    }}>\r
        Narrow column so <code>fullWidth</code> is visible — every hue and variant at tone{' '}\r
        <strong>{ICON_TONE}</strong>.\r
      </p>\r
      {VARIANT_ROWS.map(({
      title,
      variant,
      sx
    }) => <section key={variant} style={{
      marginBottom: 24
    }}>\r
          <h4 style={{
        margin: '0 0 10px',
        fontSize: 15,
        fontWeight: 600,
        textTransform: 'capitalize'
      }}>\r
            {title}\r
          </h4>\r
          {PRIMITIVE_HUES.map(hue => <div key={hue} style={{
        marginBottom: 10
      }}>\r
              <div style={{
          fontSize: 11,
          marginBottom: 4,
          textTransform: 'capitalize',
          color: pc.gray[600],
          fontWeight: 600
        }}>\r
                {hue}\r
              </div>\r
              <Button fullWidth variant={variant} color="inherit" density="md" sx={sx(hue, ICON_TONE)}>\r
                Continue\r
              </Button>\r
            </div>)}\r
        </section>)}\r
    </div>
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Ae=["Playground","Densities","IconPlusLabel","LabelPlusIcon","LoadingSpinnerPlusLabel","LoadingReplaceLabel","Disabled","FullWidth"];export{h as Densities,f as Disabled,v as FullWidth,x as IconPlusLabel,g as LabelPlusIcon,y as LoadingReplaceLabel,u as LoadingSpinnerPlusLabel,p as Playground,Ae as __namedExportsOrder,Le as default};
