import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-BSnFy17d.js";import{s as n}from"./spacing-tokens-D0rW3Zez.js";import{f as B,t as a,g as c}from"./typography-tokens-DtjjMcdU.js";import{p as ae}from"./primitive-colors-CqocY7XZ.js";import{r as ie}from"./radius-tokens-D-KuzIVl.js";import{B as o}from"./Box-D0N3bMl-.js";import{I as k,C as le}from"./info-D4xN_RYm.js";import{C as A}from"./circle-alert-yUrDUNcd.js";import{I as ce}from"./IconButton-CfAanETB.js";import{X as de}from"./x-D6V3VCLa.js";import"./createTheme-DI3Ygkl-.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./extendSxProp-BsGpowVv.js";import"./createLucideIcon-VIERY1cO.js";import"./memoTheme-BRZfWJPw.js";import"./DefaultPropsProvider-3wuxoqT1.js";import"./createSimplePaletteValueFilter-DP1slul8.js";import"./useId-BL9O7AM2.js";import"./ButtonBase-C-pKo4oY.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./CircularProgress-DMSsZ7A0.js";const r=ae,pe={info:k,success:le,warning:A,danger:A,neutral:k};function ue(s){return s==="success"?{bg:r.green[100],fg:r.green[800],border:r.green[400]}:s==="warning"?{bg:r.orange[100],fg:r.orange[800],border:r.orange[400]}:s==="danger"?{bg:r.red[100],fg:r.red[800],border:r.red[400]}:s==="info"?{bg:r.blue[100],fg:r.blue[800],border:r.blue[400]}:{bg:r.gray[100],fg:r.gray[800],border:r.gray[400]}}function me(s,t){const i=ue(t);return s==="solid"?{backgroundColor:i.border,color:t==="warning"?r.orange[950]:"#ffffff",border:`1px solid ${i.border}`}:s==="outline"?{backgroundColor:"#ffffff",color:i.fg,border:`1px solid ${i.border}`}:{backgroundColor:i.bg,color:i.fg,border:"1px solid transparent"}}const l=({title:s,message:t,semantic:i="info",variant:d="soft",showIcon:ee=!0,ctaLabel:v,onCtaClick:oe,linkLabel:j,onLinkClick:se,onClose:p,autoDismissMs:C,pauseOnHover:ne=!0})=>{S.useEffect(()=>{if(!C||!p)return;const te=window.setTimeout(()=>p(),C);return()=>window.clearTimeout(te)},[C,p]);const re=pe[i];return e.jsxs(o,{role:"status","aria-live":"polite",sx:{...me(d,i),width:360,maxWidth:"100%",display:"grid",gridTemplateColumns:"auto 1fr auto",gap:n[2],borderRadius:ie.md,px:n[3],py:n[2.5],boxShadow:`0 10px 24px ${r.gray[900]}22`,...ne&&{transition:"transform 120ms ease","&:hover":{transform:"translateY(-1px)"}}},children:[e.jsx(o,{sx:{width:18,height:18,mt:n[.5]},children:ee?e.jsx(re,{size:18,"aria-hidden":!0,strokeWidth:2.1}):null}),e.jsxs(o,{sx:{display:"grid",gap:n[1]},children:[s?e.jsx(o,{sx:{fontSize:a.sm.fontSize,fontWeight:B.semibold},children:s}):null,e.jsx(o,{sx:{fontSize:a.sm.fontSize},children:t}),v||j?e.jsxs(o,{sx:{display:"flex",gap:n[2]},children:[v?e.jsx(o,{component:"button",type:"button",onClick:oe,sx:{border:"none",background:"transparent",color:"inherit",p:0,cursor:"pointer",fontWeight:B.semibold,textDecoration:"underline",fontSize:a.xs.fontSize},children:v}):null,j?e.jsx(o,{component:"button",type:"button",onClick:se,sx:{border:"none",background:"transparent",color:"inherit",p:0,cursor:"pointer",textDecoration:"underline",fontSize:a.xs.fontSize},children:j}):null]}):null]}),p?e.jsx(ce,{size:"small","aria-label":"Close toast",onClick:p,sx:{color:"inherit"},children:e.jsx(de,{size:16,"aria-hidden":!0})}):e.jsx(o,{})]})};try{l.displayName="Toast",l.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},semantic:{defaultValue:{value:"info"},description:"",name:"semantic",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"soft"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"soft"'},{value:'"solid"'}]}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},ctaLabel:{defaultValue:null,description:"",name:"ctaLabel",required:!1,type:{name:"string"}},onCtaClick:{defaultValue:null,description:"",name:"onCtaClick",required:!1,type:{name:"(() => void)"}},linkLabel:{defaultValue:null,description:"",name:"linkLabel",required:!1,type:{name:"string"}},onLinkClick:{defaultValue:null,description:"",name:"onLinkClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},autoDismissMs:{defaultValue:null,description:"",name:"autoDismissMs",required:!1,type:{name:"number"}},pauseOnHover:{defaultValue:{value:"true"},description:"",name:"pauseOnHover",required:!1,type:{name:"boolean"}}}}}catch{}const Q=["neutral","info","success","warning","danger"],Z=["soft","outline","solid"],Me={title:"Shared/Toast",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Notification éphémère et non bloquante. Contrairement à l'alerte, le toast se ferme automatiquement et s'empile en coin de l'écran."}}},argTypes:{title:{control:"text"},message:{control:"text"},semantic:{control:"inline-radio",options:Q},variant:{control:"inline-radio",options:Z},showIcon:{control:"boolean"},ctaLabel:{control:"text"},linkLabel:{control:"text"},autoDismissMs:{control:"number"},pauseOnHover:{control:"boolean"},onCtaClick:{action:"cta clicked"},onLinkClick:{action:"link clicked"},onClose:{action:"close clicked"}},args:{title:"Annonce publiée",message:"Votre annonce est maintenant visible sur YaoundéLogis.",semantic:"success",variant:"soft",showIcon:!0,ctaLabel:"Annuler",linkLabel:"Voir l'annonce",autoDismissMs:4e3,pauseOnHover:!0}},u={},m={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:n[3]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.secondary},children:"Objectif du toast : retour rapide et non bloquant pour des actions asynchrones (annonce publiée, message envoyé, erreur réseau, copie du lien)."}),e.jsx(l,{title:"Profil mis à jour",message:"Vos informations sont maintenant visibles par les locataires.",semantic:"success",ctaLabel:"Annuler",onClose:()=>{}})]})},g={parameters:{controls:{disable:!0}},render:()=>e.jsx(o,{sx:{display:"grid",gap:n[4]},children:Z.map(s=>e.jsxs(o,{sx:{display:"grid",gap:n[2]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.primary,textTransform:"capitalize"},children:s}),e.jsx(o,{sx:{display:"grid",gap:n[2]},children:Q.map(t=>e.jsx(l,{title:`Notification ${t}`,message:"Retour rapide sur une action YaoundéLogis.",semantic:t,variant:s,onClose:()=>{}},`${s}-${t}`))})]},s))})},x={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:n[3]},children:[e.jsx(l,{title:"Message envoyé au propriétaire",message:"Votre demande a bien été transmise. Réponse sous 24h.",semantic:"info",ctaLabel:"Annuler",linkLabel:"Détails",onClose:()=>{}}),e.jsx(l,{title:"Lien copié",message:"Le lien de l'annonce a été copié dans le presse-papier.",semantic:"neutral",variant:"outline",onClose:()=>{}}),e.jsx(l,{title:"Favori ajouté",message:"Ce logement a été ajouté à vos favoris.",showIcon:!1,semantic:"success",onClose:()=>{}})]})};function ge(){const[s,t]=S.useState(!0);return S.useEffect(()=>{if(!s)return;const i=window.setTimeout(()=>t(!1),3500);return()=>window.clearTimeout(i)},[s]),e.jsxs(o,{sx:{display:"grid",gap:n[2]},children:[e.jsx(o,{sx:{fontSize:a.xs.fontSize,color:c.secondary},children:"Fermeture automatique après 3,5s. Rouvrir avec le bouton."}),e.jsx(o,{component:"button",type:"button",onClick:()=>t(!0),style:{width:100,height:32,cursor:"pointer"},children:"Déclencher"}),s?e.jsx(l,{title:"Auto-dismiss",message:"This toast closes automatically.",semantic:"info",autoDismissMs:3500,onClose:()=>t(!1)}):null]})}const f={parameters:{controls:{disable:!0}},render:()=>e.jsx(ge,{})};function z({position:s}){const t=S.useMemo(()=>[{id:1,title:"Saved",semantic:"success",msg:"Configuration updated."},{id:2,title:"Sync delayed",semantic:"warning",msg:"Background retry in progress."},{id:3,title:"Connection lost",semantic:"danger",msg:"Trying to reconnect…"}],[]),i=s==="top-right"?{justifyContent:"end",alignItems:"start"}:s==="bottom-left"?{justifyContent:"start",alignItems:"end"}:{justifyContent:"center",alignItems:"center"};return e.jsx(o,{sx:{minHeight:340,border:"1px dashed #d1d5db",p:n[3],display:"grid",...i},children:e.jsx(o,{sx:{display:"grid",gap:n[2]},children:t.map(d=>e.jsx(l,{title:d.title,message:d.msg,semantic:d.semantic,onClose:()=>{}},d.id))})})}const b={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:n[4]},children:[e.jsx(o,{sx:{fontSize:a.xs.fontSize,color:c.secondary},children:"Typical positioning for toast containers."}),e.jsxs(o,{sx:{display:"grid",gap:n[2]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize},children:"Top-right (standard)"}),e.jsx(z,{position:"top-right"})]}),e.jsxs(o,{sx:{display:"grid",gap:n[2]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize},children:"Bottom-left"}),e.jsx(z,{position:"bottom-left"})]}),e.jsxs(o,{sx:{display:"grid",gap:n[2]},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize},children:"Center"}),e.jsx(z,{position:"center"})]})]})},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:n[3],maxWidth:860},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.secondary},children:"Toast should be announced through live regions (`aria-live`). Do not dismiss too quickly. If toast has action, keep it visible long enough and ensure controls are keyboard reachable."}),e.jsx(l,{title:"A11y example",message:"Action remains available while toast is visible.",semantic:"info",ctaLabel:"Open",onClose:()=>{}})]})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{sx:{display:"grid",gap:n[2],maxWidth:920},children:[e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.primary},children:"Toast vs Alert"}),e.jsx(o,{sx:{fontSize:a.sm.fontSize,color:c.secondary},children:"Toast: ephemeral, non-blocking, often auto-dismiss and stack. Alert: persistent, in flow or banner, manual close, stronger contextual permanence."})]})};var T,w,V;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(V=(w=u.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var I,L,D;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3]
  }}>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.secondary
    }}>\r
        Objectif du toast : retour rapide et non bloquant pour des actions asynchrones (annonce publiée, message envoyé, erreur réseau, copie du lien).\r
      </Box>\r
      <Toast title="Profil mis à jour" message="Vos informations sont maintenant visibles par les locataires." semantic="success" ctaLabel="Annuler" onClose={() => undefined} />\r
    </Box>
}`,...(D=(L=m.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var q,O,_;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      {VARIANTS.map(variant => <Box key={variant} sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
          <Box sx={{
        fontSize: typeScale.sm.fontSize,
        color: textStateColors.primary,
        textTransform: 'capitalize'
      }}>\r
            {variant}\r
          </Box>\r
          <Box sx={{
        display: 'grid',
        gap: spacing[2]
      }}>\r
            {SEMANTICS.map(semantic => <Toast key={\`\${variant}-\${semantic}\`} title={\`Notification \${semantic}\`} message="Retour rapide sur une action YaoundéLogis." semantic={semantic} variant={variant} onClose={() => undefined} />)}\r
          </Box>\r
        </Box>)}\r
    </Box>
}`,...(_=(O=g.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var N,M,R;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3]
  }}>\r
      <Toast title="Message envoyé au propriétaire" message="Votre demande a bien été transmise. Réponse sous 24h." semantic="info" ctaLabel="Annuler" linkLabel="Détails" onClose={() => undefined} />\r
      <Toast title="Lien copié" message="Le lien de l'annonce a été copié dans le presse-papier." semantic="neutral" variant="outline" onClose={() => undefined} />\r
      <Toast title="Favori ajouté" message="Ce logement a été ajouté à vos favoris." showIcon={false} semantic="success" onClose={() => undefined} />\r
    </Box>
}`,...(R=(M=x.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var W,$,E;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <AutoDismissDemo />
}`,...(E=($=f.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var P,H,Y;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4]
  }}>\r
      <Box sx={{
      fontSize: typeScale.xs.fontSize,
      color: textStateColors.secondary
    }}>\r
        Typical positioning for toast containers.\r
      </Box>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize
      }}>Top-right (standard)</Box>\r
        <StackDemo position="top-right" />\r
      </Box>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize
      }}>Bottom-left</Box>\r
        <StackDemo position="bottom-left" />\r
      </Box>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize
      }}>Center</Box>\r
        <StackDemo position="center" />\r
      </Box>\r
    </Box>
}`,...(Y=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var F,G,U;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.secondary
    }}>\r
        Toast should be announced through live regions (\`aria-live\`). Do not dismiss too quickly.\r
        If toast has action, keep it visible long enough and ensure controls are keyboard reachable.\r
      </Box>\r
      <Toast title="A11y example" message="Action remains available while toast is visible." semantic="info" ctaLabel="Open" onClose={() => undefined} />\r
    </Box>
}`,...(U=(G=y.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var X,J,K;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[2],
    maxWidth: 920
  }}>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.primary
    }}>Toast vs Alert</Box>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.secondary
    }}>\r
        Toast: ephemeral, non-blocking, often auto-dismiss and stack. Alert: persistent, in flow or\r
        banner, manual close, stronger contextual permanence.\r
      </Box>\r
    </Box>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Re=["Playground","ObjectiveAndUseCases","VariantsAndSemantics","StructureAndActions","BehaviorAutoDismissAndPause","PositioningAndStack","Accessibility","ToastVsAlertGuidance"];export{y as Accessibility,f as BehaviorAutoDismissAndPause,m as ObjectiveAndUseCases,u as Playground,b as PositioningAndStack,x as StructureAndActions,h as ToastVsAlertGuidance,g as VariantsAndSemantics,Re as __namedExportsOrder,Me as default};
