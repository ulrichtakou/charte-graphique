import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as be}from"./index-BSnFy17d.js";import{B as n}from"./Button-DwIGEH-P.js";import{p as he}from"./primitive-colors-CqocY7XZ.js";import{s as o}from"./spacing-tokens-D0rW3Zez.js";import{e as ve,f as Te,t as ye,g as ge}from"./typography-tokens-DtjjMcdU.js";import{r as Se}from"./radius-tokens-D-KuzIVl.js";import{T as je,a as ke,b as P}from"./ToggleButtonGroup-Cmj9_4zm.js";import{B as u}from"./Box-D0N3bMl-.js";import{S as s}from"./Stack-BUQa9Y5t.js";import{T as d}from"./Typography-DVAwIxBx.js";import{c as we}from"./createLucideIcon-VIERY1cO.js";import"./ui-sizes-tokens-DV8X2A0Z.js";import"./Button--keFMW37.js";import"./createTheme-DI3Ygkl-.js";import"./memoTheme-BRZfWJPw.js";import"./DefaultPropsProvider-3wuxoqT1.js";import"./createSimplePaletteValueFilter-DP1slul8.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useId-BL9O7AM2.js";import"./ButtonBase-C-pKo4oY.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./CircularProgress-DMSsZ7A0.js";import"./index-C02k3_5W.js";import"./useTheme-DAYYvk9K.js";import"./extendSxProp-BsGpowVv.js";import"./useSlot-BPdpMB5v.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-DHwV1zIL.js";import"./Grow-yu_np8wp.js";import"./index-CjqGi09T.js";import"./ownerDocument-DW-IO8s5.js";import"./index-CwGUpMSx.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],De=we("CircleHelp",Be),p=he,Ce={compact:{px:o[2],py:o[1.5]},comfortable:{px:o[2.5],py:o[2]}};function We(r,a,l){const i=Ce[l],c=typeof a=="number"?`${a}px`:a,m={bgcolor:p.gray[900],color:"#ffffff",border:`1px solid ${p.gray[800]}`,boxShadow:`0 4px 16px ${p.gray[900]}55`},y={bgcolor:p.gray[100],color:p.gray[900],border:`1px solid ${p.gray[300]}`,boxShadow:`0 4px 16px ${p.gray[900]}22`};return{...r==="light"?y:m,maxWidth:c,px:i.px,py:i.py,borderRadius:Se.sm,fontSize:ye.xs.fontSize,fontWeight:Te.medium,lineHeight:ve.normal,textAlign:"left",wordBreak:"break-word"}}function Ie(r,a,l,i){const c=We(r,a,l),m=i==null?void 0:i.tooltip;if(typeof m=="function")return i;const y=m??{},{sx:h,...W}=y,fe=[c,...Array.isArray(h)?h:h?[h]:[]];return{...i,tooltip:{...W,sx:fe}}}function t({tone:r="dark",maxWidth:a=280,density:l="comfortable",describeChild:i=!0,enterDelay:c=200,leaveDelay:m=0,disableInteractive:y=!1,slotProps:h,...W}){return e.jsx(je,{describeChild:i,enterDelay:c,leaveDelay:m,disableInteractive:y,slotProps:Ie(r,a,l,h),...W})}function I({children:r,sx:a}){return e.jsx(u,{component:"span",sx:{display:"inline-flex",alignItems:"center",maxWidth:"100%",...a},children:r})}try{t.displayName="Tooltip",t.__docgenInfo={description:'Design-system tooltip built on MUI `Tooltip` with token-based surface styles.\n\n- **Role**: the floating label uses the browser tooltip semantics via MUI (`role="tooltip"`).\n- **Trigger**: hover and keyboard focus on the child (when the child forwards focus).\n- Prefer short, non-interactive `title` content; use `Popover` / `Dialog` for links and forms.',displayName:"Tooltip",props:{slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<TooltipSlots>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},tone:{defaultValue:{value:"dark"},description:"Surface tone. Dark is the default for high-contrast hints; light for use on dark canvases.",name:"tone",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},maxWidth:{defaultValue:{value:"280"},description:"Max width of the tooltip surface (px number or CSS length).",name:"maxWidth",required:!1,type:{name:"string | number"}},density:{defaultValue:{value:"comfortable"},description:"Padding scale — maps to spacing tokens.",name:"density",required:!1,type:{name:"enum",value:[{value:'"compact"'},{value:'"comfortable"'}]}},slotProps:{defaultValue:null,description:"",name:"slotProps",required:!1,type:{name:"{ popper?: SlotProps<ElementType<PopperProps, keyof IntrinsicElements>, TooltipPopperSlotPropsOverrides, TooltipOwnerState>; transition?: SlotProps<...>; tooltip?: SlotProps<...> | undefined; arrow?: SlotProps<...> | undefined; } | undefined"}}}}}catch{}try{I.displayName="TooltipDisabledWrap",I.__docgenInfo={description:"Wrap a disabled control so the tooltip still receives pointer events.",displayName:"TooltipDisabledWrap",props:{sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const xe=he,Pe=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"];function g({title:r,children:a}){return e.jsxs(u,{component:"section",sx:{display:"grid",gap:o[2]},children:[e.jsx(d,{variant:"subtitle2",sx:{fontWeight:600,color:ge.primary},children:r}),a]})}const ut={title:"Shared/Tooltip",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Token-styled tooltip for short, supplementary hints. Built on MUI Tooltip for placement, delays, focus/hover triggers, and accessible description wiring."}}},argTypes:{title:{control:"text"},tone:{control:"inline-radio",options:["dark","light"]},density:{control:"inline-radio",options:["compact","comfortable"]},placement:{control:"select"},enterDelay:{control:"number"},leaveDelay:{control:"number"},describeChild:{control:"boolean"},disableInteractive:{control:"boolean"},followCursor:{control:"boolean"},arrow:{control:"boolean"},maxWidth:{control:"number"}},args:{title:"Additional context appears here.",tone:"dark",density:"comfortable",placement:"top",enterDelay:200,leaveDelay:0,describeChild:!0,disableInteractive:!1,followCursor:!1,arrow:!1,maxWidth:280},decorators:[r=>e.jsx(u,{sx:{p:o[4]},children:e.jsx(r,{})})]},x={render:r=>e.jsx(t,{...r,children:e.jsx(n,{variant:"outlined",density:"md",children:"Hover or focus me"})})},f={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{spacing:o[3],sx:{maxWidth:720},children:[e.jsxs(d,{variant:"body2",color:"text.secondary",children:["The floating surface is exposed with ",e.jsx("code",{children:'role="tooltip"'})," (via MUI). The trigger remains the focusable / hoverable child. Keep the title short; structure complex UI elsewhere."]}),e.jsx(t,{title:"Saved automatically every few minutes.",children:e.jsx(n,{variant:"contained",density:"md",children:"Save"})})]})},b={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{spacing:o[3],sx:{maxWidth:720},children:[e.jsxs(d,{variant:"body2",color:"text.secondary",children:[e.jsx("strong",{children:"Do:"})," one concise sentence, plain language, no critical-only information.",e.jsx("br",{}),e.jsx("strong",{children:"Avoid:"})," links, buttons, or forms inside the tooltip — keyboard users and screen-reader timing make that inaccessible; use a popover or dialog instead."]}),e.jsxs(s,{direction:"row",gap:o[2],flexWrap:"wrap",alignItems:"center",children:[e.jsx(t,{title:"Copies the row id to your clipboard.",children:e.jsx(n,{variant:"outlined",density:"sm",children:"Good · short hint"})}),e.jsx(t,{title:"This is intentionally long copy to show wrapping and max width. Prefer splitting into body text or a help article instead of stuffing a tooltip.",maxWidth:240,children:e.jsx(n,{variant:"outlined",density:"sm",children:"Long copy (wrapped)"})})]})]})},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{spacing:o[3],alignItems:"flex-start",children:[e.jsxs(d,{variant:"body2",color:"text.secondary",sx:{maxWidth:640},children:["Default component uses ",e.jsx("code",{children:"enterDelay=200"})," ms to reduce accidental flashes. Use a higher ",e.jsx("code",{children:"leaveDelay"})," when readers need time before the surface closes (e.g. 300–500 ms)."]}),e.jsxs(s,{direction:"row",gap:o[3],flexWrap:"wrap",children:[e.jsx(t,{title:"Fast leave (0 ms)",enterDelay:0,leaveDelay:0,children:e.jsx(n,{variant:"outlined",density:"md",children:"Snappy"})}),e.jsx(t,{title:"Slower to open (600 ms)",enterDelay:600,leaveDelay:0,children:e.jsx(n,{variant:"outlined",density:"md",children:"Delayed show"})}),e.jsx(t,{title:"Stays briefly after pointer leaves (500 ms)",leaveDelay:500,children:e.jsx(n,{variant:"outlined",density:"md",children:"Generous leave"})})]})]})},T={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{spacing:o[2],children:[e.jsxs(d,{variant:"body2",color:"text.secondary",children:[e.jsx("code",{children:"followCursor"})," tracks the pointer — useful for dense canvases; keep titles short."]}),e.jsx(t,{title:"Following pointer",followCursor:!0,children:e.jsx(u,{sx:{width:280,height:120,border:`1px dashed ${xe.gray[300]}`,borderRadius:1,display:"flex",alignItems:"center",justifyContent:"center",color:ge.secondary,fontSize:ye.sm.fontSize},children:"Move the mouse here"})})]})},S={parameters:{controls:{disable:!0}},render:()=>e.jsx(u,{sx:{display:"flex",flexWrap:"wrap",gap:o[2],maxWidth:900},children:Pe.map(r=>e.jsx(t,{title:`placement="${r}"`,placement:r,children:e.jsx(n,{variant:"outlined",density:"sm",sx:{textTransform:"none"},children:r})},r))})},j={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{spacing:o[4],children:[e.jsx(g,{title:"Dark (default) — high contrast on neutral dark surface",children:e.jsx(t,{title:"Neutral dark surface, light text, token padding & radius.",tone:"dark",children:e.jsx(n,{variant:"contained",density:"md",children:"Dark tone"})})}),e.jsx(g,{title:"Light — for dark backgrounds or inverted regions",children:e.jsx(u,{sx:{bgcolor:xe.gray[800],p:o[3],borderRadius:1,display:"inline-block"},children:e.jsx(t,{title:"Light tooltip surface",tone:"light",children:e.jsx(n,{variant:"contained",density:"md",color:"secondary",children:"Light tone on dark canvas"})})})}),e.jsx(g,{title:"Density — compact vs comfortable padding (spacing tokens)",children:e.jsxs(s,{direction:"row",gap:o[2],flexWrap:"wrap",children:[e.jsx(t,{title:"Compact padding",density:"compact",children:e.jsx(n,{variant:"outlined",density:"sm",children:"Compact"})}),e.jsx(t,{title:"Comfortable padding",density:"comfortable",children:e.jsx(n,{variant:"outlined",density:"sm",children:"Comfortable"})})]})}),e.jsx(g,{title:"Optional arrow",children:e.jsx(t,{title:"Arrow variant",arrow:!0,children:e.jsx(n,{variant:"outlined",density:"md",children:"With arrow"})})})]})},k={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{spacing:o[3],sx:{maxWidth:640},children:[e.jsxs(d,{variant:"body2",color:"text.secondary",children:[e.jsx("strong",{children:"Keyboard:"})," Tab to the trigger — the tooltip should open on focus, not only on hover. ",e.jsx("strong",{children:"Screen readers:"})," with ",e.jsx("code",{children:"describeChild"})," (default), MUI wires the description relationship (",e.jsx("code",{children:"aria-describedby"}),") on the child when supported. Increase ",e.jsx("code",{children:"leaveDelay"})," if users need more time to read the message. Never put the only copy of required instructions exclusively in a tooltip."]}),e.jsx(t,{title:"Supplementary hint: this action cannot be undone.",describeChild:!0,leaveDelay:400,children:e.jsx(n,{variant:"outlined",density:"md",children:"Focus me (Tab) — tooltip stays briefly after blur"})})]})},w={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{spacing:o[2],alignItems:"flex-start",children:[e.jsxs(d,{variant:"body2",color:"text.secondary",sx:{maxWidth:560},children:["Disabled elements do not fire pointer events. Wrap with ",e.jsx("code",{children:"TooltipDisabledWrap"})," ","(inline span) so the tooltip can still open."]}),e.jsx(t,{title:"You need the editor role to run this action.",children:e.jsx(I,{children:e.jsx(n,{variant:"contained",density:"md",disabled:!0,children:"Generate"})})})]})},B={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{spacing:o[2],sx:{maxWidth:640},children:[e.jsxs(d,{variant:"body2",color:"text.secondary",children:["With ",e.jsx("code",{children:"disableInteractive=false"})," (default), the pointer can move into the tooltip without it closing immediately — useful to reduce accidental dismiss. Do not place focusable controls inside ",e.jsx("code",{children:"title"}),"; use a Popover/Dialog for actionable content."]}),e.jsx(t,{title:"Non-interactive text only. No links or buttons here.",disableInteractive:!1,children:e.jsx(n,{variant:"outlined",density:"md",children:"Hover — tooltip stays briefly under pointer"})})]})},D={parameters:{controls:{disable:!0}},render:function(){const[a,l]=be.useState(!1);return e.jsxs(s,{spacing:o[2],alignItems:"flex-start",children:[e.jsxs(d,{variant:"body2",color:"text.secondary",children:["Controlled ",e.jsx("code",{children:"open"})," for docs or rare sync with other UI."]}),e.jsxs(ke,{value:a?"on":"off",exclusive:!0,color:"standard",onChange:(i,c)=>c!=null&&l(c==="on"),size:"small",children:[e.jsx(P,{value:"off",children:"Hidden"}),e.jsx(P,{value:"on",children:"Visible"})]}),e.jsx(t,{title:"Controlled visibility",open:a,onClose:()=>l(!1),children:e.jsx(n,{variant:"outlined",density:"md",onClick:()=>l(i=>!i),children:"Toggle via button"})})]})}},C={parameters:{controls:{disable:!0}},render:()=>e.jsx(t,{title:"More information about this field.",describeChild:!0,children:e.jsx(u,{component:"button",type:"button","aria-label":"Help: scheduling rules",sx:{border:"none",background:"transparent",cursor:"pointer",p:.5,borderRadius:1,color:"primary.main",display:"inline-flex"},children:e.jsx(De,{size:20,strokeWidth:2,"aria-hidden":!0})})})};var _,N,M;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <Button variant="outlined" density="md">\r
        Hover or focus me\r
      </Button>\r
    </Tooltip>
}`,...(M=(N=x.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var A,R,H;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]} sx={{
    maxWidth: 720
  }}>\r
      <Typography variant="body2" color="text.secondary">\r
        The floating surface is exposed with <code>role=&quot;tooltip&quot;</code> (via MUI). The\r
        trigger remains the focusable / hoverable child. Keep the title short; structure complex UI\r
        elsewhere.\r
      </Typography>\r
      <Tooltip title="Saved automatically every few minutes.">\r
        <Button variant="contained" density="md">\r
          Save\r
        </Button>\r
      </Tooltip>\r
    </Stack>
}`,...(H=(R=f.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var U,q,L;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]} sx={{
    maxWidth: 720
  }}>\r
      <Typography variant="body2" color="text.secondary">\r
        <strong>Do:</strong> one concise sentence, plain language, no critical-only information.\r
        <br />\r
        <strong>Avoid:</strong> links, buttons, or forms inside the tooltip — keyboard users and\r
        screen-reader timing make that inaccessible; use a popover or dialog instead.\r
      </Typography>\r
      <Stack direction="row" gap={spacing[2]} flexWrap="wrap" alignItems="center">\r
        <Tooltip title="Copies the row id to your clipboard.">\r
          <Button variant="outlined" density="sm">\r
            Good · short hint\r
          </Button>\r
        </Tooltip>\r
        <Tooltip title="This is intentionally long copy to show wrapping and max width. Prefer splitting into body text or a help article instead of stuffing a tooltip." maxWidth={240}>\r
          <Button variant="outlined" density="sm">\r
            Long copy (wrapped)\r
          </Button>\r
        </Tooltip>\r
      </Stack>\r
    </Stack>
}`,...(L=(q=b.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var O,V,$;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]} alignItems="flex-start">\r
      <Typography variant="body2" color="text.secondary" sx={{
      maxWidth: 640
    }}>\r
        Default component uses <code>enterDelay=200</code> ms to reduce accidental flashes. Use a\r
        higher <code>leaveDelay</code> when readers need time before the surface closes (e.g. 300–500\r
        ms).\r
      </Typography>\r
      <Stack direction="row" gap={spacing[3]} flexWrap="wrap">\r
        <Tooltip title="Fast leave (0 ms)" enterDelay={0} leaveDelay={0}>\r
          <Button variant="outlined" density="md">\r
            Snappy\r
          </Button>\r
        </Tooltip>\r
        <Tooltip title="Slower to open (600 ms)" enterDelay={600} leaveDelay={0}>\r
          <Button variant="outlined" density="md">\r
            Delayed show\r
          </Button>\r
        </Tooltip>\r
        <Tooltip title="Stays briefly after pointer leaves (500 ms)" leaveDelay={500}>\r
          <Button variant="outlined" density="md">\r
            Generous leave\r
          </Button>\r
        </Tooltip>\r
      </Stack>\r
    </Stack>
}`,...($=(V=v.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var z,E,G;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[2]}>\r
      <Typography variant="body2" color="text.secondary">\r
        <code>followCursor</code> tracks the pointer — useful for dense canvases; keep titles short.\r
      </Typography>\r
      <Tooltip title="Following pointer" followCursor>\r
        <Box sx={{
        width: 280,
        height: 120,
        border: \`1px dashed \${pc.gray[300]}\`,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: textStateColors.secondary,
        fontSize: typeScale.sm.fontSize
      }}>\r
          Move the mouse here\r
        </Box>\r
      </Tooltip>\r
    </Stack>
}`,...(G=(E=T.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var F,K,Y;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing[2],
    maxWidth: 900
  }}>\r
      {PLACEMENTS.map(placement => <Tooltip key={placement} title={\`placement="\${placement}"\`} placement={placement}>\r
          <Button variant="outlined" density="sm" sx={{
        textTransform: 'none'
      }}>\r
            {placement}\r
          </Button>\r
        </Tooltip>)}\r
    </Box>
}`,...(Y=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var J,Q,X;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[4]}>\r
      <StorySection title="Dark (default) — high contrast on neutral dark surface">\r
        <Tooltip title="Neutral dark surface, light text, token padding & radius." tone="dark">\r
          <Button variant="contained" density="md">\r
            Dark tone\r
          </Button>\r
        </Tooltip>\r
      </StorySection>\r
      <StorySection title="Light — for dark backgrounds or inverted regions">\r
        <Box sx={{
        bgcolor: pc.gray[800],
        p: spacing[3],
        borderRadius: 1,
        display: 'inline-block'
      }}>\r
          <Tooltip title="Light tooltip surface" tone="light">\r
            <Button variant="contained" density="md" color="secondary">\r
              Light tone on dark canvas\r
            </Button>\r
          </Tooltip>\r
        </Box>\r
      </StorySection>\r
      <StorySection title="Density — compact vs comfortable padding (spacing tokens)">\r
        <Stack direction="row" gap={spacing[2]} flexWrap="wrap">\r
          <Tooltip title="Compact padding" density="compact">\r
            <Button variant="outlined" density="sm">\r
              Compact\r
            </Button>\r
          </Tooltip>\r
          <Tooltip title="Comfortable padding" density="comfortable">\r
            <Button variant="outlined" density="sm">\r
              Comfortable\r
            </Button>\r
          </Tooltip>\r
        </Stack>\r
      </StorySection>\r
      <StorySection title="Optional arrow">\r
        <Tooltip title="Arrow variant" arrow>\r
          <Button variant="outlined" density="md">\r
            With arrow\r
          </Button>\r
        </Tooltip>\r
      </StorySection>\r
    </Stack>
}`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]} sx={{
    maxWidth: 640
  }}>\r
      <Typography variant="body2" color="text.secondary">\r
        <strong>Keyboard:</strong> Tab to the trigger — the tooltip should open on focus, not only on\r
        hover. <strong>Screen readers:</strong> with <code>describeChild</code> (default), MUI wires\r
        the description relationship (<code>aria-describedby</code>) on the child when supported.\r
        Increase <code>leaveDelay</code> if users need more time to read the message. Never put the\r
        only copy of required instructions exclusively in a tooltip.\r
      </Typography>\r
      <Tooltip title="Supplementary hint: this action cannot be undone." describeChild leaveDelay={400}>\r
        <Button variant="outlined" density="md">\r
          Focus me (Tab) — tooltip stays briefly after blur\r
        </Button>\r
      </Tooltip>\r
    </Stack>
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,ne;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[2]} alignItems="flex-start">\r
      <Typography variant="body2" color="text.secondary" sx={{
      maxWidth: 560
    }}>\r
        Disabled elements do not fire pointer events. Wrap with <code>TooltipDisabledWrap</code>{' '}\r
        (inline span) so the tooltip can still open.\r
      </Typography>\r
      <Tooltip title="You need the editor role to run this action.">\r
        <TooltipDisabledWrap>\r
          <Button variant="contained" density="md" disabled>\r
            Generate\r
          </Button>\r
        </TooltipDisabledWrap>\r
      </Tooltip>\r
    </Stack>
}`,...(ne=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,ie,se;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[2]} sx={{
    maxWidth: 640
  }}>\r
      <Typography variant="body2" color="text.secondary">\r
        With <code>disableInteractive=false</code> (default), the pointer can move into the tooltip\r
        without it closing immediately — useful to reduce accidental dismiss. Do not place focusable\r
        controls inside <code>title</code>; use a Popover/Dialog for actionable content.\r
      </Typography>\r
      <Tooltip title="Non-interactive text only. No links or buttons here." disableInteractive={false}>\r
        <Button variant="outlined" density="md">\r
          Hover — tooltip stays briefly under pointer\r
        </Button>\r
      </Tooltip>\r
    </Stack>
}`,...(se=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,de,ce;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Controlled() {
    const [open, setOpen] = useState(false);
    return <Stack spacing={spacing[2]} alignItems="flex-start">\r
        <Typography variant="body2" color="text.secondary">\r
          Controlled <code>open</code> for docs or rare sync with other UI.\r
        </Typography>\r
        <ToggleButtonGroup value={open ? 'on' : 'off'} exclusive color="standard" onChange={(_, v) => v != null && setOpen(v === 'on')} size="small">\r
          <ToggleButton value="off">Hidden</ToggleButton>\r
          <ToggleButton value="on">Visible</ToggleButton>\r
        </ToggleButtonGroup>\r
        <Tooltip title="Controlled visibility" open={open} onClose={() => setOpen(false)}>\r
          <Button variant="outlined" density="md" onClick={() => setOpen(o => !o)}>\r
            Toggle via button\r
          </Button>\r
        </Tooltip>\r
      </Stack>;
  }
}`,...(ce=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,me;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Tooltip title="More information about this field." describeChild>\r
      <Box component="button" type="button" aria-label="Help: scheduling rules" sx={{
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      p: 0.5,
      borderRadius: 1,
      color: 'primary.main',
      display: 'inline-flex'
    }}>\r
        <HelpCircle size={20} strokeWidth={2} aria-hidden />\r
      </Box>\r
    </Tooltip>
}`,...(me=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const mt=["Playground","RoleAndStructure","ContentRules","BehaviorDelays","BehaviorFollowCursor","Placements","VisualDesignTokens","Accessibility","DisabledTrigger","InteractiveTooltipCaution","ControlledState","IconTrigger"];export{k as Accessibility,v as BehaviorDelays,T as BehaviorFollowCursor,b as ContentRules,D as ControlledState,w as DisabledTrigger,C as IconTrigger,B as InteractiveTooltipCaution,S as Placements,x as Playground,f as RoleAndStructure,j as VisualDesignTokens,mt as __namedExportsOrder,ut as default};
