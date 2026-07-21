import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{p as m}from"./primitive-colors-CqocY7XZ.js";import{m as x,a,d as h,e as u}from"./motion-tokens-Jd29rd68.js";import{w as f}from"./motion-decorator-DjKaoVs4.js";import{u as b,S as k,a as S}from"./motion-playhead-2fJRMzyE.js";import"./index-BSnFy17d.js";const e=m,w={title:"Design System/Tokens/Motion/02 Easing",decorators:[f],parameters:{docs:{disable:!0},chromatic:{pauseAnimationAtEnd:!0}}},r={name:"Compare easing",render:function(){const{replayKey:c,replay:g}=b(),y=u(),o=x.moderate;return n.jsxs("div",{style:{fontFamily:'"DM Sans", system-ui, sans-serif',color:e.gray[900],maxWidth:920},children:[n.jsxs("h2",{style:{fontSize:"1.25rem",fontWeight:700,margin:"0 0 8px"},children:["Easing tokens (",o," for all)"]}),n.jsx("p",{style:{margin:"0 0 8px",color:e.gray[600],lineHeight:1.6},children:"Same distance and duration — only the curve changes. Scroll the table and use the sticky bar to replay all rows together."}),n.jsx(k,{onReplay:g,buttonBackground:e.violet[600]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{borderBottom:`2px solid ${e.gray[200]}`},children:[n.jsx("th",{style:{textAlign:"left",padding:"10px 8px"},children:"Token"}),n.jsx("th",{style:{textAlign:"left",padding:"10px 8px"},children:"Curve"}),n.jsx("th",{style:{textAlign:"left",padding:"10px 8px",minWidth:200},children:"Motion"}),n.jsx("th",{style:{textAlign:"left",padding:"10px 8px"},children:"Usage"})]})}),n.jsx("tbody",{children:y.map(t=>n.jsxs("tr",{style:{borderBottom:`1px solid ${e.gray[100]}`},children:[n.jsxs("td",{style:{padding:"12px 8px",fontFamily:"ui-monospace, monospace",color:e.gray[700]},children:["easing.",t]}),n.jsx("td",{style:{padding:"12px 8px",fontFamily:"ui-monospace, monospace",fontSize:11,color:e.gray[500],wordBreak:"break-all",maxWidth:280},children:a[t]}),n.jsx("td",{style:{padding:"12px 8px",verticalAlign:"middle"},children:n.jsx(S,{replayKey:c,duration:o,easing:a[t],background:e.violet[500]})}),n.jsx("td",{style:{padding:"12px 8px",color:e.gray[600],lineHeight:1.45},children:h[t]})]},t))})]})]})}};var i,s,l,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Compare easing',
  render: function CompareEasingsStory() {
    const {
      replayKey,
      replay
    } = useReplayTrigger();
    const keys = motionEasingKeysInOrder();
    const fixedDuration = motionDuration.moderate;
    return <div style={{
      fontFamily: '"DM Sans", system-ui, sans-serif',
      color: pc.gray[900],
      maxWidth: 920
    }}>\r
        <h2 style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        margin: '0 0 8px'
      }}>\r
          Easing tokens ({fixedDuration} for all)\r
        </h2>\r
        <p style={{
        margin: '0 0 8px',
        color: pc.gray[600],
        lineHeight: 1.6
      }}>\r
          Same distance and duration — only the curve changes. Scroll the table and\r
          use the sticky bar to replay all rows together.\r
        </p>\r
        <StickyReplayToolbar onReplay={replay} buttonBackground={pc.violet[600]} />\r
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.875rem'
      }}>\r
          <thead>\r
            <tr style={{
            borderBottom: \`2px solid \${pc.gray[200]}\`
          }}>\r
              <th style={{
              textAlign: 'left',
              padding: '10px 8px'
            }}>Token</th>\r
              <th style={{
              textAlign: 'left',
              padding: '10px 8px'
            }}>Curve</th>\r
              <th style={{
              textAlign: 'left',
              padding: '10px 8px',
              minWidth: 200
            }}>\r
                Motion\r
              </th>\r
              <th style={{
              textAlign: 'left',
              padding: '10px 8px'
            }}>Usage</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {keys.map(token => <tr key={token} style={{
            borderBottom: \`1px solid \${pc.gray[100]}\`
          }}>\r
                <td style={{
              padding: '12px 8px',
              fontFamily: 'ui-monospace, monospace',
              color: pc.gray[700]
            }}>\r
                  easing.{token}\r
                </td>\r
                <td style={{
              padding: '12px 8px',
              fontFamily: 'ui-monospace, monospace',
              fontSize: 11,
              color: pc.gray[500],
              wordBreak: 'break-all',
              maxWidth: 280
            }}>\r
                  {motionEasing[token]}\r
                </td>\r
                <td style={{
              padding: '12px 8px',
              verticalAlign: 'middle'
            }}>\r
                  <SlidingBlock replayKey={replayKey} duration={fixedDuration} easing={motionEasing[token]} background={pc.violet[500]} />\r
                </td>\r
                <td style={{
              padding: '12px 8px',
              color: pc.gray[600],
              lineHeight: 1.45
            }}>\r
                  {motionEasingUsage[token]}\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Fixed duration so only the curve differs",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};const W=["CompareEasings"];export{r as CompareEasings,W as __namedExportsOrder,w as default};
