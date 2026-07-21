import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BSnFy17d.js";import{p as xe}from"./primitive-colors-CqocY7XZ.js";import{s as o}from"./spacing-tokens-D0rW3Zez.js";import{a as ke,c as D,L as Pe,s as we,b as De}from"./ui-sizes-tokens-DV8X2A0Z.js";import{t as m,f as u,g as y,a as He}from"./typography-tokens-DtjjMcdU.js";import{m as qe,a as Fe}from"./motion-tokens-Jd29rd68.js";import{r as U}from"./radius-tokens-D-KuzIVl.js";import{B as n}from"./Box-DrEq2iOC.js";import{S as Ge}from"./Select-SV_Is0ui.js";import{M as b}from"./MenuItem-BtnBjCad.js";import"./createLucideIcon-VIERY1cO.js";import"./createTheme-CZra9FL3.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./extendSxProp-DZuivdIl.js";import"./SelectFocusSourceContext-9D7F1SPr.js";import"./index-C02k3_5W.js";import"./memoTheme-D8FMIFCS.js";import"./DefaultPropsProvider-B6Ngu_92.js";import"./useSlot-DYV3dq3d.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./isHostComponent-DVu5iVWx.js";import"./Grow-BPSmSPR8.js";import"./index-CjqGi09T.js";import"./useTheme-nsrTYsm4.js";import"./ButtonBase-C5-ILvIZ.js";import"./createSimplePaletteValueFilter-DP1slul8.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-DxURyTVq.js";import"./mergeSlotProps-Dr_4Yha2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./utils-qtldwDL5.js";import"./useControlled-DHwV1zIL.js";import"./useId-BL9O7AM2.js";import"./createSvgIcon-Drgr87pV.js";import"./InputBase-C0liwt4f.js";import"./index-B0TAKvhP.js";const i=xe,Ke={sm:o[3],md:o[4],lg:o[4],xl:o[5]};function Ue(r,t){if(t)return i.red[50];switch(r){case"filled":return i.gray[100];case"soft":return i.blue[50];default:return"#ffffff"}}function X(r,t){if(t)return i.red[400];switch(r){case"outline":return i.gray[300];case"filled":return"transparent";case"soft":return i.blue[200];default:return i.gray[300]}}function Xe(r){return r?i.red[600]:i.blue[600]}function Je(r){return r.props.children}function J(r,t){let l=null;return g.Children.forEach(r,a=>{l==null&&g.isValidElement(a)&&a.props.value===t&&(l=Je(a))}),l??(t!=null&&t!==""?String(t):null)}function Q(r,t,l){if(!t)return J(l,r);const a=r??[];return a.length?a.map((s,x)=>e.jsxs("span",{children:[x>0?", ":"",J(l,s)]},String(s))):null}const f=g.forwardRef(function({label:t,variant:l="outline",density:a="md",helperText:s,errorMessage:x,invalid:c=!1,loading:j=!1,fullWidth:ye=!1,placeholder:_,disabled:$,readOnly:q,id:be,value:ve,defaultValue:We,onChange:je,children:O,className:Be,displayEmpty:Te=!0,MenuProps:d,inputProps:Ve,multiple:B,sx:T,renderValue:Ie,...Ce},Ae){var G,K;const ze=g.useId(),V=be??`sparing-select-${ze}`,k=`${V}-helper`,I=`${V}-error`,Ee=ke[a],W=m[Ee.body].fontSize,P=`${qe.short} ${Fe.standard}`,Le=g.useMemo(()=>{const p=[];return s&&p.push(k),c&&x&&p.push(I),p.length?p.join(" "):void 0},[s,k,c,x,I]),Ne={display:"flex",alignItems:"center",gap:o[2],minHeight:D[a],px:0,py:0,pr:o[1],borderRadius:U.sm,borderWidth:1,borderStyle:"solid",borderColor:X(l,c),backgroundColor:Ue(l,c),transition:`border-color ${P}, background-color ${P}, box-shadow ${P}`,boxSizing:"border-box",opacity:$?.55:1,pointerEvents:$||j?"none":"auto","&:focus-within":{outline:`2px solid ${Xe(c)}`,outlineOffset:2,borderColor:c?i.red[500]:l==="outline"?i.blue[500]:X(l,c)},...q&&{cursor:"default",backgroundColor:i.gray[50]}},F=we(a),Re={...d,PaperProps:{...d==null?void 0:d.PaperProps,sx:[{borderRadius:U.sm,mt:.5,maxHeight:280,boxShadow:`0 10px 28px ${i.gray[900]}22`,border:`1px solid ${i.gray[200]}`},...Array.isArray((G=d==null?void 0:d.PaperProps)==null?void 0:G.sx)?d.PaperProps.sx:(K=d==null?void 0:d.PaperProps)!=null&&K.sx?[d.PaperProps.sx]:[]]}},_e={...Ve,id:V,"aria-invalid":c||void 0,"aria-describedby":Le,"aria-errormessage":c&&x?I:void 0,"aria-busy":j||void 0,readOnly:q||void 0},$e=Ie??(_!=null?p=>{if(B){const w=p;return w!=null&&w.length?e.jsx(n,{component:"span",sx:{fontSize:W,color:y.primary},children:Q(p,B,O)}):e.jsx(n,{component:"span",sx:{color:i.gray[400],fontSize:W},children:_})}return p===""||p==null?e.jsx(n,{component:"span",sx:{color:i.gray[400],fontSize:W},children:_}):e.jsx(n,{component:"span",sx:{fontSize:W,color:y.primary},children:Q(p,B,O)})}:void 0),Oe={flex:1,minWidth:0,minHeight:D[a],fontFamily:He.sans,fontSize:W,fontWeight:u.regular,color:y.primary,"&::before":{display:"none"},"&::after":{display:"none"},"& .MuiSelect-select":{display:"flex",alignItems:"center",minHeight:D[a],py:o[1],pl:Ke[a],pr:o[5],boxSizing:"border-box"},"& .MuiSelect-icon":{right:o[2],color:y.secondary}};return e.jsxs(n,{ref:Ae,className:Be,sx:[{width:ye?"100%":"auto"},...Array.isArray(T)?T:T?[T]:[]],children:[t!=null&&t!==!1&&e.jsx(n,{component:"label",htmlFor:V,sx:{display:"block",mb:o[1],fontSize:m.sm.fontSize,fontWeight:u.semibold,color:i.gray[800],lineHeight:1.35},children:t}),e.jsxs(n,{sx:Ne,children:[e.jsx(Ge,{...Ce,variant:"standard",disableUnderline:!0,fullWidth:!0,displayEmpty:Te,disabled:$||j,multiple:B,value:ve,defaultValue:We,onChange:je,inputProps:_e,renderValue:$e,MenuProps:Re,sx:Oe,children:O}),j&&e.jsx(Pe,{"aria-hidden":!0,style:{width:F,height:F,flexShrink:0,marginRight:o[2],animation:"sparing-select-spin 0.75s linear infinite"},strokeWidth:2.25})]}),e.jsx("style",{children:"@keyframes sparing-select-spin { to { transform: rotate(360deg); } }"}),s!=null&&s!==!1&&e.jsx(n,{component:"p",id:k,sx:{m:0,mt:o[1],fontSize:m.xs.fontSize,color:y.secondary,lineHeight:1.45},children:s}),c&&x!=null&&x!==!1&&e.jsx(n,{component:"p",id:I,role:"alert","aria-live":"polite",sx:{m:0,mt:o[1],fontSize:m.xs.fontSize,color:y.error,fontWeight:u.medium,lineHeight:1.45},children:x})]})});try{f.displayName="Select",f.__docgenInfo={description:"",displayName:"Select",props:{variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"soft"'},{value:'"filled"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},density:{defaultValue:{value:"md"},description:"",name:"density",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Shown when `displayEmpty` and value is empty.",name:"placeholder",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}}}}}catch{}const v=xe,h=["outline","filled","soft"],R={outline:"Outline",filled:"Filled",soft:"Soft"},S=e.jsxs(e.Fragment,{children:[e.jsx(b,{value:"apple",children:"Apple"}),e.jsx(b,{value:"orange",children:"Orange"}),e.jsx(b,{value:"kiwi",children:"Kiwi"})]}),he={overflowX:"auto",maxWidth:"100%",pb:.5},ge={display:"grid",gridTemplateColumns:"88px repeat(3, minmax(0, 1fr))",gap:o[2],alignItems:"start",minWidth:560,maxWidth:880},Se={fontSize:m.xs.fontSize,fontWeight:u.semibold,textTransform:"capitalize",color:v.gray[600],pb:o[1]},Rr={title:"Shared/Select",component:f,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Dropdown field aligned with Input shells (outline / filled / soft, density). Use `SelectItem` for options. Pass `placeholder` for an empty-state label when `displayEmpty` is true."}}},argTypes:{variant:{control:"inline-radio",options:["outline","filled","soft"]},density:{control:"select",options:De()},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},invalid:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},multiple:{control:"boolean"},displayEmpty:{control:"boolean"},sx:{control:!1},children:{control:!1},value:{control:!1},onChange:{control:!1},defaultValue:{control:!1}},args:{label:"Fruit",placeholder:"Choose one",variant:"outline",density:"md",fullWidth:!0}},C={render:function(t){const[l,a]=g.useState("");return e.jsx(f,{...t,value:l,onChange:s=>a(s.target.value),children:S})}},A={parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(3, minmax(0, 1fr))"},gap:o[4],maxWidth:960},children:h.map(r=>e.jsx(H,{label:R[r],variant:r,placeholder:r,fullWidth:!0,children:S},r))})},z={parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",lg:"repeat(3, minmax(0, 1fr))"},gap:o[4],maxWidth:960,maxHeight:"85vh",overflow:"auto",pr:1},children:h.map(r=>e.jsxs(n,{children:[e.jsx(n,{component:"h4",sx:{m:0,mb:o[2],fontSize:m.sm.fontSize,fontWeight:u.semibold,color:v.gray[800]},children:R[r]}),e.jsx(n,{sx:{display:"grid",gap:o[2]},children:["sm","md","lg","xl"].map(t=>e.jsx(H,{variant:r,label:`Density · ${t}`,density:t,placeholder:t,fullWidth:!0,children:S},`${r}-${t}`))})]},r))})},E={parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:{display:"flex",flexDirection:"column",gap:o[4]},children:e.jsx(n,{sx:he,children:e.jsxs(n,{sx:ge,children:[e.jsx(n,{}),h.map(r=>e.jsx(n,{sx:Se,children:R[r]},r)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:u.semibold,color:v.gray[700],pt:1.25},children:"Default"}),h.map(r=>e.jsx(H,{variant:r,placeholder:"Pick",fullWidth:!0,children:S},`def-${r}`)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:u.semibold,color:v.gray[700],pt:1.25},children:"Disabled"}),h.map(r=>e.jsx(f,{variant:r,placeholder:"—",disabled:!0,fullWidth:!0,defaultValue:"",children:S},`dis-${r}`)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:u.semibold,color:v.gray[700],pt:1.25},children:"Loading"}),h.map(r=>e.jsx(f,{variant:r,placeholder:"…",loading:!0,fullWidth:!0,defaultValue:"",children:S},`load-${r}`))]})})})},L={parameters:{controls:{disable:!0}},render:()=>e.jsx(n,{sx:he,children:e.jsxs(n,{sx:ge,children:[e.jsx(n,{}),h.map(r=>e.jsx(n,{sx:Se,children:R[r]},r)),e.jsx(n,{sx:{fontSize:m.xs.fontSize,fontWeight:u.semibold,color:v.gray[700],pt:1.25},children:"Error"}),h.map(r=>e.jsx(f,{variant:r,label:"Team",placeholder:"Select a team",invalid:!0,errorMessage:"This field is required.",defaultValue:"",fullWidth:!0,children:S},r))]})})},N={parameters:{controls:{disable:!0}},render:function(){const[t,l]=g.useState([]);return e.jsx(n,{sx:{maxWidth:400},children:e.jsxs(f,{label:"Tags",placeholder:"Select tags",multiple:!0,value:t,onChange:a=>l(a.target.value),fullWidth:!0,children:[e.jsx(b,{value:"a11y",children:"Accessibility"}),e.jsx(b,{value:"perf",children:"Performance"}),e.jsx(b,{value:"dx",children:"Developer experience"})]})})}};function H({children:r,...t}){const[l,a]=g.useState("");return e.jsx(f,{...t,value:l,onChange:s=>a(s.target.value),children:r})}var Y,Z,M;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: function PlaygroundRender(args) {
    const [value, setValue] = useState<string>('');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value as string)}>\r
        {OPTIONS}\r
      </Select>;
  }
}`,...(M=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};var ee,re,ne;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(3, minmax(0, 1fr))'
    },
    gap: spacing[4],
    maxWidth: 960
  }}>\r
      {SELECT_VARIANTS.map(v => <ControlledSelect key={v} label={VARIANT_LABEL[v]} variant={v} placeholder={v} fullWidth>\r
          {OPTIONS}\r
        </ControlledSelect>)}\r
    </Box>
}`,...(ne=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,oe,ae;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      lg: 'repeat(3, minmax(0, 1fr))'
    },
    gap: spacing[4],
    maxWidth: 960,
    maxHeight: '85vh',
    overflow: 'auto',
    pr: 1
  }}>\r
      {SELECT_VARIANTS.map(v => <Box key={v}>\r
          <Box component="h4" sx={{
        m: 0,
        mb: spacing[2],
        fontSize: typeScale.sm.fontSize,
        fontWeight: fontWeights.semibold,
        color: pc.gray[800]
      }}>\r
            {VARIANT_LABEL[v]}\r
          </Box>\r
          <Box sx={{
        display: 'grid',
        gap: spacing[2]
      }}>\r
            {(['sm', 'md', 'lg', 'xl'] satisfies ComponentHeightToken[]).map(d => <ControlledSelect key={\`\${v}-\${d}\`} variant={v} label={\`Density · \${d}\`} density={d} placeholder={d} fullWidth>\r
                {OPTIONS}\r
              </ControlledSelect>)}\r
          </Box>\r
        </Box>)}\r
    </Box>
}`,...(ae=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var le,ie,se;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[4]
  }}>\r
      <Box sx={variantGridScrollWrapSx}>\r
        <Box sx={variantGridSx}>\r
          <Box />\r
          {SELECT_VARIANTS.map(v => <Box key={v} sx={variantColHeaderSx}>\r
              {VARIANT_LABEL[v]}\r
            </Box>)}\r
          <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
            Default\r
          </Box>\r
          {SELECT_VARIANTS.map(v => <ControlledSelect key={\`def-\${v}\`} variant={v} placeholder="Pick" fullWidth>\r
              {OPTIONS}\r
            </ControlledSelect>)}\r
          <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
            Disabled\r
          </Box>\r
          {SELECT_VARIANTS.map(v => <Select key={\`dis-\${v}\`} variant={v} placeholder="—" disabled fullWidth defaultValue="">\r
              {OPTIONS}\r
            </Select>)}\r
          <Box sx={{
          fontSize: typeScale.xs.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[700],
          pt: 1.25
        }}>\r
            Loading\r
          </Box>\r
          {SELECT_VARIANTS.map(v => <Select key={\`load-\${v}\`} variant={v} placeholder="…" loading fullWidth defaultValue="">\r
              {OPTIONS}\r
            </Select>)}\r
        </Box>\r
      </Box>\r
    </Box>
}`,...(se=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ce,pe;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={variantGridScrollWrapSx}>\r
      <Box sx={variantGridSx}>\r
        <Box />\r
        {SELECT_VARIANTS.map(v => <Box key={v} sx={variantColHeaderSx}>\r
            {VARIANT_LABEL[v]}\r
          </Box>)}\r
        <Box sx={{
        fontSize: typeScale.xs.fontSize,
        fontWeight: fontWeights.semibold,
        color: pc.gray[700],
        pt: 1.25
      }}>\r
          Error\r
        </Box>\r
        {SELECT_VARIANTS.map(v => <Select key={v} variant={v} label="Team" placeholder="Select a team" invalid errorMessage="This field is required." defaultValue="" fullWidth>\r
            {OPTIONS}\r
          </Select>)}\r
      </Box>\r
    </Box>
}`,...(pe=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,fe;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function MultipleRender() {
    const [value, setValue] = useState<string[]>([]);
    return <Box sx={{
      maxWidth: 400
    }}>\r
        <Select label="Tags" placeholder="Select tags" multiple value={value} onChange={e => setValue(e.target.value as string[])} fullWidth>\r
          <SelectItem value="a11y">Accessibility</SelectItem>\r
          <SelectItem value="perf">Performance</SelectItem>\r
          <SelectItem value="dx">Developer experience</SelectItem>\r
        </Select>\r
      </Box>;
  }
}`,...(fe=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};const _r=["Playground","Variants","Densities","States","Validation","Multiple"];export{z as Densities,N as Multiple,C as Playground,E as States,L as Validation,A as Variants,_r as __namedExportsOrder,Rr as default};
