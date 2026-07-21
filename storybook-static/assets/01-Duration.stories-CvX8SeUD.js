import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{p as g}from"./primitive-colors-CqocY7XZ.js";import{m as o,a as x,b as h,c as u}from"./motion-tokens-Jd29rd68.js";import{w as f}from"./motion-decorator-DjKaoVs4.js";import{u as b,S as k,a as j}from"./motion-playhead-2fJRMzyE.js";import"./index-BSnFy17d.js";const t=g,R={title:"Design System/Tokens/Motion/01 Duration",decorators:[f],parameters:{docs:{disable:!0},chromatic:{pauseAnimationAtEnd:!0}}},r={name:"Compare durations",render:function(){const{replayKey:p,replay:c}=b(),y=u(),m=x.standard;return n.jsxs("div",{style:{fontFamily:'"DM Sans", system-ui, sans-serif',color:t.gray[900],maxWidth:920},children:[n.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,margin:"0 0 8px"},children:"Duration tokens (same easing: standard)"}),n.jsx("p",{style:{margin:"0 0 8px",color:t.gray[600],lineHeight:1.6},children:"Scroll the table to compare rows — use the sticky control below to replay all demos in sync (not the Storybook side panel)."}),n.jsx(k,{onReplay:c,buttonBackground:t.blue[600]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{borderBottom:`2px solid ${t.gray[200]}`},children:[n.jsx("th",{style:{textAlign:"left",padding:"10px 8px"},children:"Token"}),n.jsx("th",{style:{textAlign:"left",padding:"10px 8px"},children:"Value"}),n.jsx("th",{style:{textAlign:"left",padding:"10px 8px",minWidth:200},children:"Motion"}),n.jsx("th",{style:{textAlign:"left",padding:"10px 8px"},children:"Usage"})]})}),n.jsx("tbody",{children:y.map(e=>n.jsxs("tr",{style:{borderBottom:`1px solid ${t.gray[100]}`},children:[n.jsxs("td",{style:{padding:"12px 8px",fontFamily:"ui-monospace, monospace",color:t.gray[700]},children:["duration.",e]}),n.jsx("td",{style:{padding:"12px 8px",color:t.gray[600]},children:o[e]}),n.jsx("td",{style:{padding:"12px 8px",verticalAlign:"middle"},children:n.jsx(j,{replayKey:p,duration:o[e],easing:m,background:t.blue[500]})}),n.jsx("td",{style:{padding:"12px 8px",color:t.gray[600],lineHeight:1.45},children:h[e]})]},e))})]})]})}};var a,i,s,l,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Compare durations',
  render: function CompareDurationsStory() {
    const {
      replayKey,
      replay
    } = useReplayTrigger();
    const keys = motionDurationKeysInOrder();
    const fixedEasing = motionEasing.standard;
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
          Duration tokens (same easing: standard)\r
        </h2>\r
        <p style={{
        margin: '0 0 8px',
        color: pc.gray[600],
        lineHeight: 1.6
      }}>\r
          Scroll the table to compare rows — use the sticky control below to replay\r
          all demos in sync (not the Storybook side panel).\r
        </p>\r
        <StickyReplayToolbar onReplay={replay} buttonBackground={pc.blue[600]} />\r
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
            }}>Value</th>\r
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
                  duration.{token}\r
                </td>\r
                <td style={{
              padding: '12px 8px',
              color: pc.gray[600]
            }}>\r
                  {motionDuration[token]}\r
                </td>\r
                <td style={{
              padding: '12px 8px',
              verticalAlign: 'middle'
            }}>\r
                  <SlidingBlock replayKey={replayKey} duration={motionDuration[token]} easing={fixedEasing} background={pc.blue[500]} />\r
                </td>\r
                <td style={{
              padding: '12px 8px',
              color: pc.gray[600],
              lineHeight: 1.45
            }}>\r
                  {motionDurationUsage[token]}\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source},description:{story:"Fixed easing so only duration differs — replay fires all rows at once",...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};const T=["CompareDurations"];export{r as CompareDurations,T as __namedExportsOrder,R as default};
