import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BSnFy17d.js";import{s as t}from"./spacing-tokens-D0rW3Zez.js";import{g as d,f as qe,t as u}from"./typography-tokens-DtjjMcdU.js";import{p as Oe}from"./primitive-colors-CqocY7XZ.js";import{r as T}from"./radius-tokens-D-KuzIVl.js";import{c as Ge,a as O,b as J}from"./createTheme-DI3Ygkl-.js";import{S as Ue,F as He}from"./FormControlLabel-D4S5vkvh.js";import{c as Z}from"./createSvgIcon-BPoagk93.js";import{c as Ye,s as Ke,r as Je,m as Qe}from"./memoTheme-BRZfWJPw.js";import{g as Xe,a as Ze}from"./generateUtilityClasses-DGi4yQgU.js";import{c as ee}from"./createSimplePaletteValueFilter-DP1slul8.js";import{u as er}from"./useSlot-BPdpMB5v.js";import{u as rr}from"./DefaultPropsProvider-3wuxoqT1.js";import{m as ar}from"./mergeSlotProps-Z9pVGpSy.js";import{F as X,a as De}from"./FormHelperText-B0TJpcuu.js";import{B as a}from"./Box-D0N3bMl-.js";import{F as nr}from"./FormGroup-2lVUP10D.js";import{S as U}from"./Stack-BUQa9Y5t.js";import{T as C}from"./Typography-DVAwIxBx.js";import"./utils-qtldwDL5.js";import"./useControlled-DHwV1zIL.js";import"./ButtonBase-C-pKo4oY.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-DJ73tQiJ.js";import"./extendSxProp-BsGpowVv.js";import"./index-CwGUpMSx.js";const tr=Z(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),or=Z(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),sr=Z(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function ir(r){return Xe("MuiCheckbox",r)}const Q=Ze("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),lr=r=>{const{classes:n,indeterminate:s,color:o,size:l}=r,c={root:["root",s&&"indeterminate",`color${O(o)}`,`size${O(l)}`]},b=Ye(c,ir,n);return{...n,...b}},cr=Ke(Ue,{shouldForwardProp:r=>Je(r)||r==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(r,n)=>{const{ownerState:s}=r;return[n.root,s.indeterminate&&n.indeterminate,n[`size${O(s.size)}`],s.color!=="default"&&n[`color${O(s.color)}`]]}})(Qe(({theme:r})=>({color:(r.vars||r).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:r.alpha((r.vars||r).palette.action.active,(r.vars||r).palette.action.hoverOpacity)}}},...Object.entries(r.palette).filter(ee()).map(([n])=>({props:{color:n,disableRipple:!1},style:{"&:hover":{backgroundColor:r.alpha((r.vars||r).palette[n].main,(r.vars||r).palette.action.hoverOpacity)}}})),...Object.entries(r.palette).filter(ee()).map(([n])=>({props:{color:n},style:{[`&.${Q.checked}, &.${Q.indeterminate}`]:{color:(r.vars||r).palette[n].main},[`&.${Q.disabled}`]:{color:(r.vars||r).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),dr=e.jsx(or,{}),pr=e.jsx(tr,{}),xr=e.jsx(sr,{}),ur=m.forwardRef(function(n,s){const o=rr({props:n,name:"MuiCheckbox"}),{checkedIcon:l=dr,color:c="primary",icon:b=pr,indeterminate:p=!1,indeterminateIcon:x=xr,inputProps:h,size:g="medium",disableRipple:k=!1,className:H,slots:I={},slotProps:V={},...S}=o,w=p?x:b,Y=p?x:l,v={...o,disableRipple:k,color:c,indeterminate:p,size:g},z=lr(v),j=V.input??h,[K,Le]=er("root",{ref:s,elementType:cr,className:Ge(z.root,H),shouldForwardComponentProp:!0,externalForwardedProps:{slots:I,slotProps:V,...S},ownerState:v,additionalProps:{type:"checkbox",icon:m.cloneElement(w,{fontSize:w.props.fontSize??g}),checkedIcon:m.cloneElement(Y,{fontSize:Y.props.fontSize??g}),disableRipple:k,slots:I,slotProps:{input:ar(typeof j=="function"?j(v):j,{"data-indeterminate":p,"aria-checked":p?"mixed":void 0})}}});return e.jsx(K,{...Le,classes:z})}),y=Oe,hr={sm:"small",md:"medium",lg:"medium"};function mr(r,n,s){const o=s?y.red[600]:y.blue[600],l=s?y.red[400]:y.gray[400],c={p:n==="sm"?t[1]:t[1.5],m:0,...n==="lg"?{transform:"scale(1.12)",transformOrigin:"center"}:{},color:l,"&.Mui-checked":{color:o},"&.MuiCheckbox-indeterminate":{color:o},"&.Mui-disabled":{color:y.gray[300]},"&:hover:not(.Mui-disabled)":{backgroundColor:J(y.gray[900],.04),borderRadius:T.sm},"&.Mui-focusVisible":{outline:`2px solid ${o}`,outlineOffset:2}};return r==="soft"?{...c,"&.Mui-checked":{color:o,backgroundColor:J(o,.12),borderRadius:T.sm},"&.MuiCheckbox-indeterminate":{color:o,backgroundColor:J(o,.12),borderRadius:T.sm}}:r==="outlined"?{...c,borderRadius:T.xs,"&:not(.Mui-checked):not(.MuiCheckbox-indeterminate):not(.Mui-disabled)":{outline:`2px solid ${s?y.red[400]:y.gray[400]}`,outlineOffset:1},"&.Mui-disabled":{outline:"none"}}:c}const i=m.forwardRef(function({label:n,description:s,helperText:o,invalid:l=!1,variant:c="default",density:b="md",fullWidth:p=!1,disabled:x,id:h,inputProps:g,sx:k,...H},I){const V=m.useId(),S=h??`sparing-checkbox-${V}`,w=`${S}-helper`,v=[g==null?void 0:g["aria-describedby"],s?`${S}-desc`:null,o?w:null].filter(Boolean).join(" "),z={...g,id:S,"aria-invalid":l||void 0,...v?{"aria-describedby":v}:{}},j=e.jsx(ur,{ref:I,disableRipple:!0,size:hr[b],disabled:x,inputProps:z,sx:[mr(c,b,l),...Array.isArray(k)?k:k?[k]:[]],...H});if(n==null&&s==null&&o==null)return e.jsx(X,{disabled:x,error:l,sx:{display:"inline-flex"},children:j});const K=e.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:t[.5],pt:.25},children:[e.jsx(a,{component:"span",sx:{fontSize:u.sm.fontSize,fontWeight:qe.medium,color:x?d.disabled:d.primary,lineHeight:1.4},children:n}),s?e.jsx(a,{component:"span",id:`${S}-desc`,sx:{fontSize:u.xs.fontSize,color:d.secondary,lineHeight:1.45},children:s}):null]});return e.jsxs(X,{component:"div",disabled:x,error:l,sx:{width:p?"100%":"auto",alignItems:"flex-start"},children:[e.jsx(He,{control:j,label:K,sx:{alignItems:"flex-start",m:0,gap:t[1],width:p?"100%":"auto","& .MuiFormControlLabel-label":{width:p?"100%":"auto"}}}),o?e.jsx(De,{id:w,sx:{mx:0,mt:t[1],ml:{xs:0,sm:6.5}},children:o}):null]})});function G({legend:r,children:n,error:s=!1,helperText:o}){return e.jsxs(X,{component:"fieldset",variant:"standard",error:s,sx:{width:"100%",alignItems:"flex-start"},children:[e.jsx(a,{component:"legend",sx:{fontSize:u.sm.fontSize,fontWeight:qe.semibold,mb:t[2],color:d.primary,width:"100%"},children:r}),e.jsx(nr,{sx:{width:"100%",gap:t[1]},children:n}),o?e.jsx(De,{sx:{mx:0,mt:t[1]},children:o}):null]})}try{G.displayName="CheckboxGroup",G.__docgenInfo={description:"Groups related checkboxes with a `fieldset` / `legend` for semantics and screen readers.",displayName:"CheckboxGroup",props:{legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"ReactNode"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}}}}}catch{}try{i.displayName="Checkbox",i.__docgenInfo={description:`Accessible checkbox with design tokens. Use for **multi-select** or **binary consent** in a list.
For on/off settings that take effect immediately, prefer a **Switch**.`,displayName:"Checkbox",props:{label:{defaultValue:null,description:"Visible label — required for most product usage (accessibility).",name:"label",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"soft"'},{value:'"outlined"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<CheckboxSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<SwitchBaseProps, keyof IntrinsicElements>, CheckboxRootSlotPropsOverrides, CheckboxOwnerState>; input?: SlotProps<...>; } | undefined"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},description:{defaultValue:null,description:"Secondary line under the label",name:"description",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:{value:"false"},description:"Validation error: sets error styling and `aria-invalid` on the input",name:"invalid",required:!1,type:{name:"boolean"}},density:{defaultValue:{value:"md"},description:"",name:"density",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const f=["default","soft","outlined"],Fe=["sm","md","lg"];function B(){return e.jsx(a,{sx:{display:"flex",gap:t[2],pl:14},children:f.map(r=>e.jsx(a,{sx:{width:200,fontSize:u.xs.fontSize,fontWeight:600,color:d.secondary,textTransform:"capitalize"},children:r},r))})}function fr({title:r,children:n}){return e.jsxs(a,{component:"section",sx:{display:"grid",gap:t[2]},children:[e.jsx(C,{variant:"subtitle2",sx:{fontWeight:600,color:d.primary},children:r}),n]})}const Hr={title:"Shared/Checkbox",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Token-based checkbox for multiple selection, explicit consent, or “choose any” lists. Not a substitute for an on/off setting control — use a Switch for that pattern."}}},argTypes:{label:{control:"text"},description:{control:"text"},helperText:{control:"text"},invalid:{control:"boolean"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},variant:{control:"inline-radio",options:f},density:{control:"inline-radio",options:Fe},fullWidth:{control:"boolean"}},args:{label:"I agree to the terms",description:"You can change this later in settings.",helperText:"",invalid:!1,disabled:!1,checked:!1,indeterminate:!1,variant:"default",density:"md",fullWidth:!1}},A={},R={parameters:{controls:{disable:!0}},render:()=>e.jsxs(U,{spacing:t[3],sx:{maxWidth:720},children:[e.jsxs(C,{variant:"body2",color:"text.secondary",children:["Native ",e.jsx("code",{children:'role="checkbox"'})," with a binary or tri-state value (including"," ",e.jsx("code",{children:"indeterminate"}),"). The visible label is associated with the control; optional description and helper text are wired with ",e.jsx("code",{children:"aria-describedby"}),"."]}),e.jsx(i,{label:"Subscribe to product updates",description:"We send at most one email per week."})]})},$={parameters:{controls:{disable:!0}},render:()=>e.jsxs(a,{sx:{display:"grid",gap:t[2]},children:[e.jsx(B,{}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:t[2]},children:[e.jsx(a,{sx:{width:120,fontSize:u.xs.fontSize,fontWeight:600,color:d.secondary},children:"Unchecked"}),e.jsx(a,{sx:{display:"flex",gap:t[2]},children:f.map(r=>e.jsx(a,{sx:{width:200},children:e.jsx(i,{variant:r,label:`${r} · off`})},r))})]})]})},W={parameters:{controls:{disable:!0}},render:()=>e.jsxs(a,{sx:{display:"grid",gap:t[2]},children:[e.jsx(B,{}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:t[2]},children:[e.jsx(a,{sx:{width:120,fontSize:u.xs.fontSize,fontWeight:600,color:d.secondary},children:"Checked"}),e.jsx(a,{sx:{display:"flex",gap:t[2]},children:f.map(r=>e.jsx(a,{sx:{width:200},children:e.jsx(i,{variant:r,label:`${r} · on`,checked:!0})},r))})]})]})};function br(){return e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:t[2]},children:[e.jsx(a,{sx:{width:120,fontSize:u.xs.fontSize,fontWeight:600,color:d.secondary},children:"Indeterminate"}),e.jsx(a,{sx:{display:"flex",gap:t[2]},children:f.map(r=>e.jsx(a,{sx:{width:200},children:e.jsx(i,{variant:r,label:`${r} · mixed`,indeterminate:!0})},r))})]})}const P={parameters:{controls:{disable:!0}},render:()=>e.jsxs(a,{sx:{display:"grid",gap:t[2]},children:[e.jsx(B,{}),e.jsx(br,{}),e.jsxs(C,{variant:"caption",color:"text.secondary",sx:{maxWidth:640},children:["Use ",e.jsx("code",{children:"indeterminate"})," for parent rows when children are only partially selected. Clicking behavior should be implemented in app logic (select all / clear)."]})]})},_={parameters:{controls:{disable:!0}},render:()=>e.jsxs(a,{sx:{display:"grid",gap:t[3]},children:[e.jsx(B,{}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:t[2]},children:[e.jsx(a,{sx:{width:120,fontSize:u.xs.fontSize,fontWeight:600,color:d.secondary},children:"Disabled off"}),e.jsx(a,{sx:{display:"flex",gap:t[2]},children:f.map(r=>e.jsx(a,{sx:{width:200},children:e.jsx(i,{variant:r,label:`${r}`,disabled:!0})},r))})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:t[2]},children:[e.jsx(a,{sx:{width:120,fontSize:u.xs.fontSize,fontWeight:600,color:d.secondary},children:"Disabled on"}),e.jsx(a,{sx:{display:"flex",gap:t[2]},children:f.map(r=>e.jsx(a,{sx:{width:200},children:e.jsx(i,{variant:r,label:`${r}`,disabled:!0,checked:!0})},r))})]})]})},N={parameters:{controls:{disable:!0}},render:()=>e.jsxs(a,{sx:{display:"grid",gap:t[2]},children:[e.jsx(B,{}),e.jsxs(a,{sx:{display:"flex",alignItems:"flex-start",gap:t[2]},children:[e.jsx(a,{sx:{width:120,fontSize:u.xs.fontSize,fontWeight:600,color:d.secondary,pt:1},children:"Invalid"}),e.jsx(a,{sx:{display:"flex",gap:t[2]},children:f.map(r=>e.jsx(a,{sx:{width:200},children:e.jsx(i,{variant:r,label:`${r} · required`,invalid:!0,helperText:"You must accept to continue."})},r))})]})]})},M={parameters:{controls:{disable:!0}},render:()=>e.jsx(a,{sx:{display:"grid",gap:t[4]},children:Fe.map(r=>e.jsx(fr,{title:`Density · ${r}`,children:e.jsx(a,{sx:{display:"flex",gap:t[2],flexWrap:"wrap"},children:f.map(n=>e.jsx(i,{density:r,variant:n,label:`${n} (${r})`,checked:n==="soft"},`${r}-${n}`))})},r))})},E={parameters:{controls:{disable:!0}},render:function(){const[n,s]=m.useState(!1);return e.jsxs(U,{spacing:t[2],alignItems:"flex-start",children:[e.jsxs(C,{variant:"body2",color:"text.secondary",children:["Standard controlled pattern with ",e.jsx("code",{children:"checked"})," and ",e.jsx("code",{children:"onChange"}),"."]}),e.jsx(i,{label:"Enable beta features",checked:n,onChange:(o,l)=>s(l)})]})}},q={parameters:{controls:{disable:!0}},render:()=>e.jsx(a,{sx:{maxWidth:420},children:e.jsxs(G,{legend:"One option per visual variant (same fieldset)",children:[e.jsx(i,{variant:"default",label:"Default variant",defaultChecked:!0}),e.jsx(i,{variant:"soft",label:"Soft variant"}),e.jsx(i,{variant:"outlined",label:"Outlined variant"})]})})},D={parameters:{controls:{disable:!0}},render:function(){const[n,s]=m.useState(!1),[o,l]=m.useState(!1),[c,b]=m.useState(!0),p=!n&&!o&&!c;return e.jsx(a,{sx:{maxWidth:400},children:e.jsxs(G,{legend:"How should we reach you?",...p?{helperText:"Select at least one option.",error:!0}:{error:!1},children:[e.jsx(i,{variant:"default",label:"Email",checked:n,onChange:(x,h)=>s(h)}),e.jsx(i,{variant:"default",label:"SMS",checked:o,onChange:(x,h)=>l(h)}),e.jsx(i,{variant:"default",label:"Push notifications",checked:c,onChange:(x,h)=>b(h)})]})})}},F={parameters:{controls:{disable:!0}},render:()=>e.jsxs(U,{spacing:t[3],sx:{maxWidth:640},children:[e.jsxs(C,{variant:"body2",color:"text.secondary",children:["Padding on the control increases the clickable area; the whole ",e.jsx("code",{children:"FormControlLabel"})," row activates the checkbox. Avoid icon-only checkboxes without an ",e.jsx("code",{children:"aria-label"}),"."]}),e.jsx(i,{density:"lg",variant:"default",label:"Large density — bigger hit target"})]})},L={parameters:{controls:{disable:!0}},render:()=>e.jsxs(U,{spacing:t[2],sx:{maxWidth:720},children:[e.jsxs(C,{variant:"body2",color:"text.secondary",component:"ul",sx:{m:0,pl:3},children:[e.jsx("li",{children:"Keyboard: Space toggles when focused."}),e.jsxs("li",{children:["Screen readers: label is read with the control; description and helper use"," ",e.jsx("code",{children:"aria-describedby"}),"."]}),e.jsxs("li",{children:["Validation: ",e.jsx("code",{children:"aria-invalid"})," when ",e.jsx("code",{children:"invalid"})," is true."]}),e.jsx("li",{children:"Contrast: checked and focus ring use token colors on light backgrounds."})]}),e.jsx(i,{label:"Accessible example",description:"Secondary text is announced after the label.",helperText:"Helper is also linked via aria-describedby.",invalid:!0})]})};var re,ae,ne;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:"{}",...(ne=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,oe,se;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]} sx={{
    maxWidth: 720
  }}>\r
      <Typography variant="body2" color="text.secondary">\r
        Native <code>role=&quot;checkbox&quot;</code> with a binary or tri-state value (including{' '}\r
        <code>indeterminate</code>). The visible label is associated with the control; optional\r
        description and helper text are wired with <code>aria-describedby</code>.\r
      </Typography>\r
      <Checkbox label="Subscribe to product updates" description="We send at most one email per week." />\r
    </Stack>
}`,...(se=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,ce;$.parameters={...$.parameters,docs:{...(ie=$.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[2]
  }}>\r
      <VariantLabels />\r
      <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        width: 120,
        fontSize: typeScale.xs.fontSize,
        fontWeight: 600,
        color: textStateColors.secondary
      }}>\r
          Unchecked\r
        </Box>\r
        <Box sx={{
        display: 'flex',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Box key={variant} sx={{
          width: 200
        }}>\r
              <Checkbox variant={variant} label={\`\${variant} · off\`} />\r
            </Box>)}\r
        </Box>\r
      </Box>\r
    </Box>
}`,...(ce=(le=$.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,xe;W.parameters={...W.parameters,docs:{...(de=W.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[2]
  }}>\r
      <VariantLabels />\r
      <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        width: 120,
        fontSize: typeScale.xs.fontSize,
        fontWeight: 600,
        color: textStateColors.secondary
      }}>\r
          Checked\r
        </Box>\r
        <Box sx={{
        display: 'flex',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Box key={variant} sx={{
          width: 200
        }}>\r
              <Checkbox variant={variant} label={\`\${variant} · on\`} checked />\r
            </Box>)}\r
        </Box>\r
      </Box>\r
    </Box>
}`,...(xe=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var ue,he,me;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[2]
  }}>\r
      <VariantLabels />\r
      <IndeterminateRow />\r
      <Typography variant="caption" color="text.secondary" sx={{
      maxWidth: 640
    }}>\r
        Use <code>indeterminate</code> for parent rows when children are only partially selected.\r
        Clicking behavior should be implemented in app logic (select all / clear).\r
      </Typography>\r
    </Box>
}`,...(me=(he=P.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var fe,be,ge;_.parameters={..._.parameters,docs:{...(fe=_.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3]
  }}>\r
      <VariantLabels />\r
      <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        width: 120,
        fontSize: typeScale.xs.fontSize,
        fontWeight: 600,
        color: textStateColors.secondary
      }}>\r
          Disabled off\r
        </Box>\r
        <Box sx={{
        display: 'flex',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Box key={variant} sx={{
          width: 200
        }}>\r
              <Checkbox variant={variant} label={\`\${variant}\`} disabled />\r
            </Box>)}\r
        </Box>\r
      </Box>\r
      <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        width: 120,
        fontSize: typeScale.xs.fontSize,
        fontWeight: 600,
        color: textStateColors.secondary
      }}>\r
          Disabled on\r
        </Box>\r
        <Box sx={{
        display: 'flex',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Box key={variant} sx={{
          width: 200
        }}>\r
              <Checkbox variant={variant} label={\`\${variant}\`} disabled checked />\r
            </Box>)}\r
        </Box>\r
      </Box>\r
    </Box>
}`,...(ge=(be=_.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ye,ke,Se;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[2]
  }}>\r
      <VariantLabels />\r
      <Box sx={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        width: 120,
        fontSize: typeScale.xs.fontSize,
        fontWeight: 600,
        color: textStateColors.secondary,
        pt: 1
      }}>\r
          Invalid\r
        </Box>\r
        <Box sx={{
        display: 'flex',
        gap: spacing[2]
      }}>\r
          {VARIANTS.map(variant => <Box key={variant} sx={{
          width: 200
        }}>\r
              <Checkbox variant={variant} label={\`\${variant} · required\`} invalid helperText="You must accept to continue." />\r
            </Box>)}\r
        </Box>\r
      </Box>\r
    </Box>
}`,...(Se=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var ve,je,Ce;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      {DENSITIES.map(density => <StorySection key={density} title={\`Density · \${density}\`}>\r
          <Box sx={{
        display: 'flex',
        gap: spacing[2],
        flexWrap: 'wrap'
      }}>\r
            {VARIANTS.map(variant => <Checkbox key={\`\${density}-\${variant}\`} density={density} variant={variant} label={\`\${variant} (\${density})\`} checked={variant === 'soft'} />)}\r
          </Box>\r
        </StorySection>)}\r
    </Box>
}`,...(Ce=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var we,Be,Ie;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Controlled() {
    const [checked, setChecked] = useState(false);
    return <Stack spacing={spacing[2]} alignItems="flex-start">\r
        <Typography variant="body2" color="text.secondary">\r
          Standard controlled pattern with <code>checked</code> and <code>onChange</code>.\r
        </Typography>\r
        <Checkbox label="Enable beta features" checked={checked} onChange={(_, v) => setChecked(v)} />\r
      </Stack>;
  }
}`,...(Ie=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:Ie.source}}};var Ve,ze,Te;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    maxWidth: 420
  }}>\r
      <CheckboxGroup legend="One option per visual variant (same fieldset)">\r
        <Checkbox variant="default" label="Default variant" defaultChecked />\r
        <Checkbox variant="soft" label="Soft variant" />\r
        <Checkbox variant="outlined" label="Outlined variant" />\r
      </CheckboxGroup>\r
    </Box>
}`,...(Te=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:Te.source}}};var Ae,Re,$e;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RealisticGroup() {
    const [email, setEmail] = useState(false);
    const [sms, setSms] = useState(false);
    const [push, setPush] = useState(true);
    const none = !email && !sms && !push;
    return <Box sx={{
      maxWidth: 400
    }}>\r
        <CheckboxGroup legend="How should we reach you?" {...none ? {
        helperText: 'Select at least one option.',
        error: true
      } : {
        error: false
      }}>\r
          <Checkbox variant="default" label="Email" checked={email} onChange={(_, v) => setEmail(v)} />\r
          <Checkbox variant="default" label="SMS" checked={sms} onChange={(_, v) => setSms(v)} />\r
          <Checkbox variant="default" label="Push notifications" checked={push} onChange={(_, v) => setPush(v)} />\r
        </CheckboxGroup>\r
      </Box>;
  }
}`,...($e=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:$e.source}}};var We,Pe,_e;F.parameters={...F.parameters,docs:{...(We=F.parameters)==null?void 0:We.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[3]} sx={{
    maxWidth: 640
  }}>\r
      <Typography variant="body2" color="text.secondary">\r
        Padding on the control increases the clickable area; the whole <code>FormControlLabel</code> row\r
        activates the checkbox. Avoid icon-only checkboxes without an <code>aria-label</code>.\r
      </Typography>\r
      <Checkbox density="lg" variant="default" label="Large density — bigger hit target" />\r
    </Stack>
}`,...(_e=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var Ne,Me,Ee;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={spacing[2]} sx={{
    maxWidth: 720
  }}>\r
      <Typography variant="body2" color="text.secondary" component="ul" sx={{
      m: 0,
      pl: 3
    }}>\r
        <li>Keyboard: Space toggles when focused.</li>\r
        <li>\r
          Screen readers: label is read with the control; description and helper use{' '}\r
          <code>aria-describedby</code>.\r
        </li>\r
        <li>\r
          Validation: <code>aria-invalid</code> when <code>invalid</code> is true.\r
        </li>\r
        <li>Contrast: checked and focus ring use token colors on light backgrounds.</li>\r
      </Typography>\r
      <Checkbox label="Accessible example" description="Secondary text is announced after the label." helperText="Helper is also linked via aria-describedby." invalid />\r
    </Stack>
}`,...(Ee=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};const Yr=["Playground","RoleAndStructure","AllVariantsUnchecked","AllVariantsChecked","AllVariantsIndeterminate","AllVariantsDisabled","AllVariantsValidation","AllVariantsDensities","BehaviorControlled","GroupAllVariants","GroupRealistic","TouchTargetAndLabel","Accessibility"];export{L as Accessibility,W as AllVariantsChecked,M as AllVariantsDensities,_ as AllVariantsDisabled,P as AllVariantsIndeterminate,$ as AllVariantsUnchecked,N as AllVariantsValidation,E as BehaviorControlled,q as GroupAllVariants,D as GroupRealistic,A as Playground,R as RoleAndStructure,F as TouchTargetAndLabel,Yr as __namedExportsOrder,Hr as default};
