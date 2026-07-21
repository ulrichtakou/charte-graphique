import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{s as n}from"./spacing-tokens-D0rW3Zez.js";import{f as H,t as l,g as u}from"./typography-tokens-DtjjMcdU.js";import{p as ee}from"./primitive-colors-CqocY7XZ.js";import{r as re}from"./radius-tokens-D-KuzIVl.js";import{B as r}from"./Box-D0N3bMl-.js";import{I as j,C as ne}from"./info-D4xN_RYm.js";import{C as te}from"./circle-alert-yUrDUNcd.js";import{B as ae}from"./bell-BlOIC-r5.js";import{I as ie}from"./IconButton-CfAanETB.js";import{X as se}from"./x-D6V3VCLa.js";import"./createTheme-DI3Ygkl-.js";import"./index-BSnFy17d.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./extendSxProp-BsGpowVv.js";import"./createLucideIcon-VIERY1cO.js";import"./memoTheme-BRZfWJPw.js";import"./DefaultPropsProvider-3wuxoqT1.js";import"./createSimplePaletteValueFilter-DP1slul8.js";import"./useId-BL9O7AM2.js";import"./ButtonBase-C-pKo4oY.js";import"./useForkRef-B-TD92He.js";import"./useEnhancedEffect-BbTNGpuT.js";import"./CircularProgress-DMSsZ7A0.js";const a=ee,oe={info:j,success:ne,warning:ae,danger:te,neutral:j};function le(t){return t==="success"?{bg:a.green[100],fg:a.green[800],border:a.green[400]}:t==="warning"?{bg:a.orange[100],fg:a.orange[800],border:a.orange[400]}:t==="danger"?{bg:a.red[100],fg:a.red[800],border:a.red[400]}:t==="info"?{bg:a.blue[100],fg:a.blue[800],border:a.blue[400]}:{bg:a.gray[100],fg:a.gray[800],border:a.gray[400]}}function ce(t,o){const i=le(o);return t==="solid"?{backgroundColor:i.border,color:o==="warning"?a.orange[950]:"#ffffff",border:`1px solid ${i.border}`}:t==="outline"?{backgroundColor:"#ffffff",color:i.fg,border:`1px solid ${i.border}`}:{backgroundColor:i.bg,color:i.fg,border:"1px solid transparent"}}function m({children:t,onClick:o}){return t?e.jsx(r,{component:"button",type:"button",onClick:o,sx:{border:"none",background:"transparent",p:0,cursor:"pointer",color:"inherit",fontWeight:H.semibold,fontSize:l.xs.fontSize,textDecoration:"underline"},children:t}):null}const s=({title:t,message:o,semantic:i="info",variant:F="soft",layout:G="multiline",showIcon:J=!0,ctaLabel:c,onCtaClick:C,linkLabel:d,onLinkClick:S,onClose:K,closeLabel:Q="Close alert"})=>{const Z=oe[i],p=G==="single-line";return e.jsxs(r,{role:i==="danger"||i==="warning"?"alert":"status","aria-live":i==="danger"||i==="warning"?"assertive":"polite",sx:{...ce(F,i),display:"grid",gridTemplateColumns:"auto 1fr auto",gap:n[2],borderRadius:re.md,px:n[3],py:n[2.5],alignItems:p?"center":"start"},children:[e.jsx(r,{sx:{width:18,height:18,mt:p?0:n[.5]},children:J?e.jsx(Z,{size:18,"aria-hidden":!0,strokeWidth:2.1}):null}),e.jsxs(r,{sx:{display:"grid",gap:n[1]},children:[t?e.jsx(r,{sx:{fontSize:l.sm.fontSize,fontWeight:H.semibold},children:t}):null,e.jsx(r,{sx:{fontSize:l.sm.fontSize,color:"inherit"},children:o}),(c||d)&&!p?e.jsxs(r,{sx:{display:"flex",gap:n[2]},children:[c?e.jsx(m,{onClick:C,children:c}):null,d?e.jsx(m,{onClick:S,children:d}):null]}):null]}),e.jsxs(r,{sx:{display:"flex",alignItems:"start",gap:n[2]},children:[(c||d)&&p?e.jsxs(r,{sx:{display:"flex",gap:n[2],alignItems:"center"},children:[c?e.jsx(m,{onClick:C,children:c}):null,d?e.jsx(m,{onClick:S,children:d}):null]}):null,e.jsx(ie,{size:"small","aria-label":Q,onClick:K,sx:{color:"inherit",mt:"-2px"},children:e.jsx(se,{size:16,"aria-hidden":!0})})]})]})};try{s.displayName="Alert",s.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},semantic:{defaultValue:{value:"info"},description:"",name:"semantic",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"soft"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"soft"'},{value:'"solid"'}]}},layout:{defaultValue:{value:"multiline"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"multiline"'},{value:'"single-line"'}]}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},ctaLabel:{defaultValue:null,description:"",name:"ctaLabel",required:!1,type:{name:"string"}},onCtaClick:{defaultValue:null,description:"",name:"onCtaClick",required:!1,type:{name:"(() => void)"}},linkLabel:{defaultValue:null,description:"",name:"linkLabel",required:!1,type:{name:"string"}},onLinkClick:{defaultValue:null,description:"",name:"onLinkClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Close is mandatory for Alert by design rules.",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"Close alert"},description:"",name:"closeLabel",required:!1,type:{name:"string"}}}}}catch{}const U=["neutral","info","success","warning","danger"],X=["soft","outline","solid"],Ee={title:"Shared/Alert",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Alerte persistante et contextuelle dans la page. Contrairement au toast, l'alerte est inline ou en bannière et inclut toujours une action de fermeture manuelle."}}},argTypes:{title:{control:"text"},message:{control:"text"},semantic:{control:"inline-radio",options:U},variant:{control:"inline-radio",options:X},layout:{control:"inline-radio",options:["single-line","multiline"]},showIcon:{control:"boolean"},ctaLabel:{control:"text"},linkLabel:{control:"text"},onCtaClick:{action:"cta clicked"},onLinkClick:{action:"link clicked"},onClose:{action:"close clicked"}},args:{title:"Annonce non publiée",message:"Votre annonce n'a pas été enregistrée. Veuillez réessayer.",semantic:"warning",variant:"soft",layout:"multiline",showIcon:!0,ctaLabel:"Réessayer",linkLabel:"En savoir plus"}},g={},x={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{sx:{display:"grid",gap:n[3],maxWidth:900},children:[e.jsx(r,{sx:{fontSize:l.sm.fontSize,color:u.secondary},children:"Alert objective: persistent, contextual communication in-page. Typical cases: validation summary, environment warning, permissions issue, billing notice, migration notice."}),e.jsx(s,{title:"Moyen de paiement expirant",message:"Votre moyen de paiement expire bientôt. Mettez-le à jour pour éviter toute interruption.",semantic:"warning",variant:"soft",ctaLabel:"Mettre à jour",onClose:()=>{}})]})},f={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{sx:{display:"grid",gap:n[4]},children:X.map(t=>e.jsxs(r,{sx:{display:"grid",gap:n[2]},children:[e.jsx(r,{sx:{fontSize:l.sm.fontSize,color:u.primary,textTransform:"capitalize"},children:t}),e.jsx(r,{sx:{display:"grid",gap:n[2]},children:U.map(o=>e.jsx(s,{title:`Alerte ${o}`,message:"Message de retour contextuel pour l'utilisateur.",semantic:o,variant:t,onClose:()=>{}},`${t}-${o}`))})]},t))})},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{sx:{display:"grid",gap:n[3],maxWidth:900},children:[e.jsx(s,{title:"Annonce en attente de validation",message:"Votre annonce est en cours de vérification par notre équipe.",semantic:"info",ctaLabel:"Voir l'annonce",linkLabel:"Détails",onClose:()=>{}}),e.jsx(s,{title:"Informations complémentaires requises",message:"Veuillez compléter votre profil agent pour publier des annonces.",semantic:"neutral",variant:"outline",onClose:()=>{}})]})},b={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{sx:{display:"grid",gap:n[3]},children:[e.jsx(s,{title:"Annonce expirée",message:"Votre annonce a expiré.",layout:"single-line",semantic:"warning",ctaLabel:"Renouveler",linkLabel:"Historique",onClose:()=>{}}),e.jsx(s,{title:"Annonce supprimée",message:"Cette annonce a été retirée de la plateforme. Contactez le support si vous pensez qu'il s'agit d'une erreur.",layout:"multiline",semantic:"danger",onClose:()=>{}}),e.jsx(s,{title:"Annonce publiée avec succès",message:"Votre logement est maintenant visible par les locataires.",showIcon:!1,semantic:"success",onClose:()=>{}})]})},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{sx:{display:"grid",gap:n[4],maxWidth:980},children:[e.jsxs(r,{sx:{display:"grid",gap:n[2]},children:[e.jsx(r,{sx:{fontSize:l.sm.fontSize,color:u.primary},children:"Intégrée dans la page"}),e.jsxs(r,{sx:{border:"1px dashed #d1d5db",p:n[3],display:"grid",gap:n[3]},children:[e.jsx(r,{sx:{fontSize:l.sm.fontSize},children:"Paramètres du profil agent"}),e.jsx(s,{title:"Modifications non enregistrées",message:"Enregistrez ou annulez avant de quitter cette section.",semantic:"warning",onClose:()=>{}})]})]}),e.jsxs(r,{sx:{display:"grid",gap:n[2]},children:[e.jsx(r,{sx:{fontSize:l.sm.fontSize,color:u.primary},children:"Bannière haut de page"}),e.jsx(s,{title:"Maintenance planifiée",message:"La plateforme sera en lecture seule de 02h00 à 02h30 (heure de Yaoundé).",semantic:"info",variant:"outline",onClose:()=>{}})]})]})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{sx:{display:"grid",gap:n[3],maxWidth:860},children:[e.jsx(r,{sx:{fontSize:l.sm.fontSize,color:u.secondary},children:'Les alertes non urgentes utilisent `role="status"`. Les alertes urgentes utilisent `role="alert"`. Le bouton de fermeture doit être accessible au clavier.'}),e.jsx(s,{title:"Exemple accessibilité (urgent)",message:"Ce contenu critique doit être annoncé immédiatement aux lecteurs d'écran.",semantic:"danger",ctaLabel:"Résoudre",onClose:()=>{}})]})};var z,A,B;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var V,k,I;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3],
    maxWidth: 900
  }}>\r
      <Box sx={{
      fontSize: typeScale.sm.fontSize,
      color: textStateColors.secondary
    }}>\r
        Alert objective: persistent, contextual communication in-page. Typical cases: validation\r
        summary, environment warning, permissions issue, billing notice, migration notice.\r
      </Box>\r
      <Alert title="Moyen de paiement expirant" message="Votre moyen de paiement expire bientôt. Mettez-le à jour pour éviter toute interruption." semantic="warning" variant="soft" ctaLabel="Mettre à jour" onClose={() => undefined} />\r
    </Box>
}`,...(I=(k=x.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var L,q,w;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
            {SEMANTICS.map(semantic => <Alert key={\`\${variant}-\${semantic}\`} title={\`Alerte \${semantic}\`} message="Message de retour contextuel pour l'utilisateur." semantic={semantic} variant={variant} onClose={() => undefined} />)}\r
          </Box>\r
        </Box>)}\r
    </Box>
}`,...(w=(q=f.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var M,E,W;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3],
    maxWidth: 900
  }}>\r
      <Alert title="Annonce en attente de validation" message="Votre annonce est en cours de vérification par notre équipe." semantic="info" ctaLabel="Voir l'annonce" linkLabel="Détails" onClose={() => undefined} />\r
      <Alert title="Informations complémentaires requises" message="Veuillez compléter votre profil agent pour publier des annonces." semantic="neutral" variant="outline" onClose={() => undefined} />\r
    </Box>
}`,...(W=(E=y.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,T,R;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[3]
  }}>\r
      <Alert title="Annonce expirée" message="Votre annonce a expiré." layout="single-line" semantic="warning" ctaLabel="Renouveler" linkLabel="Historique" onClose={() => undefined} />\r
      <Alert title="Annonce supprimée" message="Cette annonce a été retirée de la plateforme. Contactez le support si vous pensez qu'il s'agit d'une erreur." layout="multiline" semantic="danger" onClose={() => undefined} />\r
      <Alert title="Annonce publiée avec succès" message="Votre logement est maintenant visible par les locataires." showIcon={false} semantic="success" onClose={() => undefined} />\r
    </Box>
}`,...(R=(T=b.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var N,$,P;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: spacing[4],
    maxWidth: 980
  }}>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize,
        color: textStateColors.primary
      }}>Intégrée dans la page</Box>\r
        <Box sx={{
        border: '1px dashed #d1d5db',
        p: spacing[3],
        display: 'grid',
        gap: spacing[3]
      }}>\r
          <Box sx={{
          fontSize: typeScale.sm.fontSize
        }}>Paramètres du profil agent</Box>\r
          <Alert title="Modifications non enregistrées" message="Enregistrez ou annulez avant de quitter cette section." semantic="warning" onClose={() => undefined} />\r
        </Box>\r
      </Box>\r
      <Box sx={{
      display: 'grid',
      gap: spacing[2]
    }}>\r
        <Box sx={{
        fontSize: typeScale.sm.fontSize,
        color: textStateColors.primary
      }}>Bannière haut de page</Box>\r
        <Alert title="Maintenance planifiée" message="La plateforme sera en lecture seule de 02h00 à 02h30 (heure de Yaoundé)." semantic="info" variant="outline" onClose={() => undefined} />\r
      </Box>\r
    </Box>
}`,...(P=($=v.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var O,D,Y;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        Les alertes non urgentes utilisent \`role="status"\`. Les alertes urgentes utilisent \`role="alert"\`.\r
        Le bouton de fermeture doit être accessible au clavier.\r
      </Box>\r
      <Alert title="Exemple accessibilité (urgent)" message="Ce contenu critique doit être annoncé immédiatement aux lecteurs d'écran." semantic="danger" ctaLabel="Résoudre" onClose={() => undefined} />\r
    </Box>
}`,...(Y=(D=h.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};const We=["Playground","ObjectiveAndUseCases","VariantsAndSemantics","StructureAndActions","LayoutVariants","PositioningExamples","Accessibility"];export{h as Accessibility,b as LayoutVariants,x as ObjectiveAndUseCases,g as Playground,v as PositioningExamples,y as StructureAndActions,f as VariantsAndSemantics,We as __namedExportsOrder,Ee as default};
