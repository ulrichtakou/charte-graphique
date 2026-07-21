import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BSnFy17d.js";function a({children:t}){const[o,s]=n.useState(!1);return n.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>s(r.matches);return i(),r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[]),e.jsxs("div",{"data-motion-reduced":o?"true":void 0,children:[e.jsx("style",{children:`
          [data-motion-reduced="true"] * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        `}),t]})}const m=t=>e.jsx(a,{children:e.jsx(t,{})});export{m as w};
