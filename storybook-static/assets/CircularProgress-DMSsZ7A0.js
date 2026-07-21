import{r as R}from"./index-BSnFy17d.js";import{c as w,a as l}from"./createTheme-DI3Ygkl-.js";import{c as N,s as m,m as h}from"./memoTheme-BRZfWJPw.js";import{c as T}from"./createSimplePaletteValueFilter-DP1slul8.js";import{g as U,a as E}from"./generateUtilityClasses-DGi4yQgU.js";import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{u as F,c as $,k as b}from"./DefaultPropsProvider-3wuxoqT1.js";function I(r){return U("MuiCircularProgress",r)}E("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","track","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,g=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,y=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,z=typeof g!="string"?$`
        animation: ${g} 1.4s linear infinite;
      `:null,A=typeof y!="string"?$`
        animation: ${y} 1.4s ease-in-out infinite;
      `:null,K=r=>{const{classes:e,variant:t,color:i,disableShrink:p}=r,u={root:["root",t,`color${l(i)}`],svg:["svg"],track:["track"],circle:["circle",`circle${l(t)}`,p&&"circleDisableShrink"]};return N(u,I,e)},O=m("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${l(t.color)}`]]}})(h(({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:z||{animation:`${g} 1.4s linear infinite`}},...Object.entries(r.palette).filter(T()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}))),V=m("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),W=m("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${l(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(h(({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:A||{animation:`${y} 1.4s ease-in-out infinite`}}]}))),B=m("circle",{name:"MuiCircularProgress",slot:"Track"})(h(({theme:r})=>({stroke:"currentColor",opacity:(r.vars||r).palette.action.activatedOpacity}))),X=R.forwardRef(function(e,t){const i=F({props:e,name:"MuiCircularProgress"}),{className:p,color:u="primary",disableShrink:D=!1,enableTrackSlot:v=!1,size:f=40,style:M,thickness:a=3.6,value:d=0,variant:x="indeterminate",...j}=i,o={...i,color:u,disableShrink:D,size:f,thickness:a,value:d,variant:x,enableTrackSlot:v},n=K(o),k={},C={},P={};if(x==="determinate"){const S=2*Math.PI*((s-a)/2);k.strokeDasharray=S.toFixed(3),P["aria-valuenow"]=Math.round(d),k.strokeDashoffset=`${((100-d)/100*S).toFixed(3)}px`,C.transform="rotate(-90deg)"}return c.jsx(O,{className:w(n.root,p),style:{width:f,height:f,...C,...M},ownerState:o,ref:t,role:"progressbar",...P,...j,children:c.jsxs(V,{className:n.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:[v?c.jsx(B,{className:n.track,ownerState:o,cx:s,cy:s,r:(s-a)/2,fill:"none",strokeWidth:a,"aria-hidden":"true"}):null,c.jsx(W,{className:n.circle,style:k,ownerState:o,cx:s,cy:s,r:(s-a)/2,fill:"none",strokeWidth:a})]})})});export{X as C};
