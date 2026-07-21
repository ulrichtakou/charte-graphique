import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as xe}from"./index-BSnFy17d.js";import{p as de}from"./primitive-colors-CqocY7XZ.js";import{s as t}from"./spacing-tokens-D0rW3Zez.js";import{t as c,f as ye,g as p}from"./typography-tokens-DtjjMcdU.js";import{r as C}from"./semantic-colors-BF1-ctIX.js";import{r as fe}from"./radius-tokens-D-KuzIVl.js";import{B as n}from"./Box-DrEq2iOC.js";import{C as be}from"./circle-alert-yUrDUNcd.js";import{c as w}from"./createLucideIcon-VIERY1cO.js";import{B as he}from"./bell-BlOIC-r5.js";import"./createTheme-CZra9FL3.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./extendSxProp-DZuivdIl.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ve=w("Check",Se);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]],Be=w("Clock3",je);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],ke=w("Tag",ze),o=de,pe={sm:{minHeight:t[5],px:t[2],gap:t[1],fontSize:c["2xs"].fontSize,iconPx:12},md:{minHeight:t[6],px:t[2.5],gap:t[1.5],fontSize:c.xs.fontSize,iconPx:14},lg:{minHeight:t[7],px:t[3],gap:t[2],fontSize:c.sm.fontSize,iconPx:16}};function We(a){return a==="disabled"?{text:o.gray[400],background:o.gray[100],border:o.gray[200]}:a==="hover"?{text:o.orange[900],background:o.orange[200],border:o.orange[500]}:a==="press"?{text:o.orange[950],background:o.orange[300],border:o.orange[600]}:{text:o.orange[800],background:o.orange[100],border:o.orange[400]}}function Ce(a,r){if(a==="warning")return We(r);const s=a==="neutral"?"neutral":a==="info"?"primary":a==="success"?"positive":"negative";return{text:C("text",s,"accent",r),background:C("background",s,"subtle",r),border:C("border",s,"accent",r)}}function Ie(a,r,s){const l=Ce(r,s),g=s==="disabled";return a==="solid"?{color:r==="warning"?l.text:"#ffffff",backgroundColor:g?l.background:l.border,border:`1px solid ${l.border}`}:a==="outline"?{color:l.text,backgroundColor:g?o.gray[50]:"transparent",border:`1px solid ${l.border}`}:{color:l.text,backgroundColor:l.background,border:"1px solid transparent"}}function I(a){return pe[a].iconPx}const i=({label:a,variant:r="soft",semantic:s="neutral",size:l="md",state:g="default",startIcon:T,endIcon:P,maxLabelWidth:ue})=>{const y=pe[l];return e.jsxs(n,{component:"span","aria-disabled":g==="disabled"||void 0,sx:{...Ie(r,s,g),display:"inline-flex",alignItems:"center",justifyContent:"center",minHeight:y.minHeight,px:y.px,gap:y.gap,borderRadius:fe.full,fontWeight:ye.medium,fontSize:y.fontSize,lineHeight:1,whiteSpace:"nowrap",boxSizing:"border-box",userSelect:"none","& .shared-ui-badge-icon":{display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:0},"& .shared-ui-badge-label":{display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",maxWidth:ue??"none"}},children:[T?e.jsx("span",{className:"shared-ui-badge-icon",children:T}):null,e.jsx("span",{className:"shared-ui-badge-label",children:a}),P?e.jsx("span",{className:"shared-ui-badge-icon",children:P}):null]})};try{I.displayName="badgeIconSize",I.__docgenInfo={description:"",displayName:"badgeIconSize",props:{}}}catch{}try{i.displayName="Badge",i.__docgenInfo={description:"",displayName:"Badge",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"soft"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"soft"'},{value:'"solid"'}]}},semantic:{defaultValue:{value:"neutral"},description:"",name:"semantic",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"danger"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"disabled"'},{value:'"hover"'},{value:'"press"'}]}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},maxLabelWidth:{defaultValue:null,description:`Optional hard cap for label width.
Long text is truncated with ellipsis to keep dense UIs stable.`,name:"maxLabelWidth",required:!1,type:{name:"string | number"}}}}}catch{}const we=de,m=["solid","soft","outline"],A=["neutral","info","success","warning","danger"],me=["sm","md","lg"],ge=["default","hover","press","disabled"],u={neutral:"Neutral",info:"Info",success:"Success",warning:"Warning",danger:"Danger"},$={default:"Default",hover:"Hover",press:"Press",disabled:"Disabled"},Ae={neutral:ke,info:he,success:ve,warning:Be,danger:be};function d({title:a,children:r}){return e.jsxs(n,{component:"section",sx:{display:"grid",gap:t[2]},children:[e.jsx(n,{component:"h4",sx:{m:0,fontSize:c.sm.fontSize,color:p.primary},children:a}),r]})}function x({buildProps:a}){return e.jsx(n,{sx:{overflowX:"auto"},children:e.jsxs(n,{sx:{minWidth:700,display:"grid",gridTemplateColumns:"120px repeat(3, minmax(0, 1fr))",gap:t[2],alignItems:"center"},children:[e.jsx(n,{}),m.map(r=>e.jsx(n,{sx:{fontSize:c.xs.fontSize,fontWeight:600,color:p.secondary,textTransform:"capitalize"},children:r},r)),A.map(r=>e.jsxs(xe.Fragment,{children:[e.jsx(n,{sx:{fontSize:c.xs.fontSize,fontWeight:600,color:p.secondary},children:u[r]}),m.map(s=>e.jsx(n,{children:e.jsx(i,{...a(r,s)})},`${r}-${s}`))]},r))]})})}const De={title:"Shared/Badge",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Token-driven badge used for compact status, metadata and classification. This component supports semantic meaning, visual variants, sizing, icon presence and visual states while preserving consistency across products."}}},argTypes:{label:{control:"text"},semantic:{control:"inline-radio",options:A},variant:{control:"inline-radio",options:m},size:{control:"inline-radio",options:me},state:{control:"inline-radio",options:ge},startIcon:{control:!1},endIcon:{control:!1},maxLabelWidth:{control:"text"}},args:{label:"In review",semantic:"info",variant:"soft",size:"md",state:"default"}},f={},b={parameters:{controls:{disable:!0}},render:()=>e.jsx(x,{buildProps:(a,r)=>({label:"Badge",semantic:a,variant:r,size:"md",state:"default"})})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:t[4]},children:[me.map(a=>e.jsx(d,{title:`Size: ${a.toUpperCase()}`,children:e.jsx(n,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:t[2]},children:m.map(r=>e.jsx(i,{size:a,variant:r,semantic:"success",label:`${r} ${a}`},`${a}-${r}`))})},a)),e.jsx(n,{sx:{fontSize:c.xs.fontSize,color:p.secondary},children:"Horizontal spacing uses `spacing` tokens and keeps enough breathing room for optional icons."})]})},S={parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:{display:"grid",gap:t[4]},children:ge.map(a=>e.jsx(d,{title:$[a],children:e.jsx(x,{buildProps:(r,s)=>({label:$[a],semantic:r,variant:s,state:a,size:"md"})})},a))})},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:t[4]},children:[e.jsx(d,{title:"With leading icons (all variants)",children:e.jsx(x,{buildProps:(a,r)=>{const s=Ae[a];return{label:u[a],semantic:a,variant:r,startIcon:e.jsx(s,{size:I("md"),"aria-hidden":!0,strokeWidth:2.2})}}})}),e.jsx(d,{title:"Without icons (all variants)",children:e.jsx(x,{buildProps:(a,r)=>({label:u[a],semantic:a,variant:r})})})]})},j={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:t[4]},children:[e.jsx(d,{title:"Status typology",children:e.jsx(n,{sx:{display:"flex",flexWrap:"wrap",gap:t[2]},children:m.map(a=>e.jsx(i,{variant:a,semantic:"success",label:"Active"},`status-${a}`))})}),e.jsx(d,{title:"Category typology",children:e.jsx(n,{sx:{display:"flex",flexWrap:"wrap",gap:t[2]},children:m.map(a=>e.jsx(i,{variant:a,semantic:"info",label:"Marketing"},`category-${a}`))})}),e.jsx(d,{title:"Counter typology",children:e.jsx(n,{sx:{display:"flex",flexWrap:"wrap",gap:t[2]},children:m.map(a=>e.jsx(i,{variant:a,semantic:"neutral",label:"12"},`counter-${a}`))})})]})},B={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:t[4]},children:[e.jsx(d,{title:"Label rhythm and truncation",children:e.jsx(n,{sx:{display:"flex",flexWrap:"wrap",gap:t[2]},children:m.map(a=>e.jsx(i,{variant:a,semantic:"neutral",label:"This is a long badge label that is truncated",maxLabelWidth:180},a))})}),e.jsx(n,{sx:{fontSize:c.xs.fontSize,color:p.secondary},children:"Typography is token-based (`typeScale` + `fontWeights`) and remains legible at compact densities."})]})},z={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{component:"section",sx:{display:"grid",gap:t[3],maxWidth:760,fontSize:c.sm.fontSize,color:p.secondary,lineHeight:1.6,"& code":{fontSize:c.xs.fontSize,backgroundColor:we.gray[100],borderRadius:4,padding:"2px 6px"}},children:[e.jsxs("p",{style:{margin:0},children:["Badges are usually non-interactive, short, and textual. Keep semantic meaning in text, not only in color. If a badge is icon-only in product code, provide a descriptive"," ",e.jsx("code",{children:"aria-label"}),"."]}),e.jsx(n,{sx:{display:"flex",flexWrap:"wrap",gap:t[2]},children:A.map(a=>e.jsx(i,{semantic:a,variant:"soft",label:`${u[a]} status`},a))}),e.jsx("p",{style:{margin:0},children:"For interactive chips (filters, removable tags), prefer dedicated interactive components so keyboard behavior, focus rings, and action semantics stay explicit."})]})},k={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:t[3],maxWidth:840},children:[e.jsx(d,{title:"Common usage contexts",children:e.jsxs(n,{sx:{display:"flex",flexWrap:"wrap",gap:t[2]},children:[e.jsx(i,{semantic:"info",variant:"soft",label:"Plan: Pro"}),e.jsx(i,{semantic:"success",variant:"soft",label:"Published"}),e.jsx(i,{semantic:"warning",variant:"outline",label:"Requires action"}),e.jsx(i,{semantic:"danger",variant:"solid",label:"Blocked"})]})}),e.jsx(d,{title:"When to use badges",children:e.jsxs(n,{component:"ul",sx:{m:0,pl:t[5],color:p.secondary},children:[e.jsx("li",{children:"Short status labels in tables, cards, and detail headers."}),e.jsx("li",{children:"Compact metadata such as plan tiers, categories, and lifecycle state."}),e.jsx("li",{children:"At-a-glance semantic signaling when space is limited."})]})}),e.jsx(d,{title:"When not to use badges",children:e.jsxs(n,{component:"ul",sx:{m:0,pl:t[5],color:p.secondary},children:[e.jsx("li",{children:"Long explanatory text (use helper text or body copy instead)."}),e.jsx("li",{children:"Primary call-to-action interactions (use buttons instead)."}),e.jsx("li",{children:"As the only communication channel for important errors."})]})})]})},W={parameters:{controls:{disable:!0}},render:()=>e.jsxs(n,{sx:{display:"grid",gap:t[3],maxWidth:860},children:[e.jsx("p",{style:{margin:0,color:p.secondary},children:"The API is designed to scale by adding new semantics and variants through centralized token mappings in the component, not by introducing one-off inline styles in products."}),e.jsx(x,{buildProps:(a,r)=>({label:`${u[a]} · ${r}`,semantic:a,variant:r})}),e.jsx(n,{sx:{fontSize:c.xs.fontSize,color:p.secondary},children:"To add a new semantic in the future, extend the semantic union and its color mapping once, then all story matrices immediately reflect the new badge family."})]})};var _,L,N;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(N=(L=f.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var R,V,H;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <BadgeGrid buildProps={(semantic, variant) => ({
    label: 'Badge',
    semantic,
    variant,
    size: 'md',
    state: 'default'
  })} />
}`,...(H=(V=b.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var q,E,M;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      {SIZES.map(size => <StorySection key={size} title={\`Size: \${size.toUpperCase()}\`}>\r
          <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: spacing[2]
      }}>\r
            {VARIANTS.map(variant => <Badge key={\`\${size}-\${variant}\`} size={size} variant={variant} semantic="success" label={\`\${variant} \${size}\`} />)}\r
          </Box>\r
        </StorySection>)}\r
      <Box sx={{
      fontSize: typeScale.xs.fontSize,
      color: textStateColors.secondary
    }}>\r
        Horizontal spacing uses \`spacing\` tokens and keeps enough breathing room for optional icons.\r
      </Box>\r
    </Box>
}`,...(M=(E=h.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var G,U,D;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      {STATES.map(state => <StorySection key={state} title={stateLabel[state]}>\r
          <BadgeGrid buildProps={(semantic, variant) => ({
        label: stateLabel[state],
        semantic,
        variant,
        state,
        size: 'md'
      })} />\r
        </StorySection>)}\r
    </Box>
}`,...(D=(U=S.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var F,O,Z;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      <StorySection title="With leading icons (all variants)">\r
        <BadgeGrid buildProps={(semantic, variant) => {
        const Icon = iconBySemantic[semantic];
        return {
          label: semanticLabel[semantic],
          semantic,
          variant,
          startIcon: <Icon size={badgeIconSize('md')} aria-hidden strokeWidth={2.2} />
        };
      }} />\r
      </StorySection>\r
      <StorySection title="Without icons (all variants)">\r
        <BadgeGrid buildProps={(semantic, variant) => ({
        label: semanticLabel[semantic],
        semantic,
        variant
      })} />\r
      </StorySection>\r
    </Box>
}`,...(Z=(O=v.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var K,X,Y;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      <StorySection title="Status typology">\r
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Badge key={\`status-\${variant}\`} variant={variant} semantic="success" label="Active" />)}\r
        </Box>\r
      </StorySection>\r
      <StorySection title="Category typology">\r
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Badge key={\`category-\${variant}\`} variant={variant} semantic="info" label="Marketing" />)}\r
        </Box>\r
      </StorySection>\r
      <StorySection title="Counter typology">\r
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Badge key={\`counter-\${variant}\`} variant={variant} semantic="neutral" label="12" />)}\r
        </Box>\r
      </StorySection>\r
    </Box>
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,Q,ee;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      <StorySection title="Label rhythm and truncation">\r
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Badge key={variant} variant={variant} semantic="neutral" label="This is a long badge label that is truncated" maxLabelWidth={180} />)}\r
        </Box>\r
      </StorySection>\r
      <Box sx={{
      fontSize: typeScale.xs.fontSize,
      color: textStateColors.secondary
    }}>\r
        Typography is token-based (\`typeScale\` + \`fontWeights\`) and remains legible at compact\r
        densities.\r
      </Box>\r
    </Box>
}`,...(ee=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,re,ne;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box component="section" sx={{
    display: 'grid',
    gap: spacing[3],
    maxWidth: 760,
    fontSize: typeScale.sm.fontSize,
    color: textStateColors.secondary,
    lineHeight: 1.6,
    '& code': {
      fontSize: typeScale.xs.fontSize,
      backgroundColor: pc.gray[100],
      borderRadius: 4,
      padding: '2px 6px'
    }
  }}>\r
      <p style={{
      margin: 0
    }}>\r
        Badges are usually non-interactive, short, and textual. Keep semantic meaning in text,\r
        not only in color. If a badge is icon-only in product code, provide a descriptive{' '}\r
        <code>aria-label</code>.\r
      </p>\r
      <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: spacing[2]
    }}>\r
        {SEMANTICS.map(semantic => <Badge key={semantic} semantic={semantic} variant="soft" label={\`\${semanticLabel[semantic]} status\`} />)}\r
      </Box>\r
      <p style={{
      margin: 0
    }}>\r
        For interactive chips (filters, removable tags), prefer dedicated interactive components so\r
        keyboard behavior, focus rings, and action semantics stay explicit.\r
      </p>\r
    </Box>
}`,...(ne=(re=z.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,se,ie;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3],
    maxWidth: 840
  }}>\r
      <StorySection title="Common usage contexts">\r
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacing[2]
      }}>\r
          <Badge semantic="info" variant="soft" label="Plan: Pro" />\r
          <Badge semantic="success" variant="soft" label="Published" />\r
          <Badge semantic="warning" variant="outline" label="Requires action" />\r
          <Badge semantic="danger" variant="solid" label="Blocked" />\r
        </Box>\r
      </StorySection>\r
      <StorySection title="When to use badges">\r
        <Box component="ul" sx={{
        m: 0,
        pl: spacing[5],
        color: textStateColors.secondary
      }}>\r
          <li>Short status labels in tables, cards, and detail headers.</li>\r
          <li>Compact metadata such as plan tiers, categories, and lifecycle state.</li>\r
          <li>At-a-glance semantic signaling when space is limited.</li>\r
        </Box>\r
      </StorySection>\r
      <StorySection title="When not to use badges">\r
        <Box component="ul" sx={{
        m: 0,
        pl: spacing[5],
        color: textStateColors.secondary
      }}>\r
          <li>Long explanatory text (use helper text or body copy instead).</li>\r
          <li>Primary call-to-action interactions (use buttons instead).</li>\r
          <li>As the only communication channel for important errors.</li>\r
        </Box>\r
      </StorySection>\r
    </Box>
}`,...(ie=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,le,ce;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3],
    maxWidth: 860
  }}>\r
      <p style={{
      margin: 0,
      color: textStateColors.secondary
    }}>\r
        The API is designed to scale by adding new semantics and variants through centralized token\r
        mappings in the component, not by introducing one-off inline styles in products.\r
      </p>\r
      <BadgeGrid buildProps={(semantic, variant) => ({
      label: \`\${semanticLabel[semantic]} · \${variant}\`,
      semantic,
      variant
    })} />\r
      <Box sx={{
      fontSize: typeScale.xs.fontSize,
      color: textStateColors.secondary
    }}>\r
        To add a new semantic in the future, extend the semantic union and its color mapping once,\r
        then all story matrices immediately reflect the new badge family.\r
      </Box>\r
    </Box>
}`,...(ce=(le=W.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Fe=["Playground","VariantAndSemanticMatrix","SizesAndSpacing","States","WithAndWithoutIcons","Typologies","TypographyAndLongContent","Accessibility","UsageContextAndRules","ScalabilityPattern"];export{z as Accessibility,f as Playground,W as ScalabilityPattern,h as SizesAndSpacing,S as States,B as TypographyAndLongContent,j as Typologies,k as UsageContextAndRules,b as VariantAndSemanticMatrix,v as WithAndWithoutIcons,Fe as __namedExportsOrder,De as default};
