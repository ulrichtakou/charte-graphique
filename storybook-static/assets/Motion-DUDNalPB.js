import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-B07ghbpt.js";import{b as i}from"./index-COwjDyaI.js";import"./index-BSnFy17d.js";import"./iframe-DiG03ZuA.js";import"./index-CjqGi09T.js";import"./index-HgsIUkmk.js";const{deprecate:t}=__STORYBOOK_MODULE_CLIENT_LOGGER__;t("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function s(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Design System/Tokens/Motion",parameters:{docs:{description:{component:"Duration, easing, composed patterns, and component-level validation. Individual `.stories.tsx` files disable autodocs — use this page and the linked stories for learning."}}}}),`
`,e.jsx(n.h1,{id:"motion",children:"Motion"}),`
`,e.jsxs(n.p,{children:["Motion tokens define ",e.jsx(n.strong,{children:"how long"})," transitions run and ",e.jsx(n.strong,{children:"which easing curve"})," they follow. They complement spacing, radius, and typography: nothing here is raw magic numbers in product code — import from ",e.jsx(n.code,{children:"charte-graphique"}),"."]}),`
`,e.jsx(n.h2,{id:"layers",children:"Layers"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"motionDuration"})})," — named steps from ",e.jsx(n.code,{children:"instant"})," through ",e.jsx(n.code,{children:"deliberate"})," (milliseconds in CSS)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"motionEasing"})})," — curves for enter, exit, symmetric moves, and emphasis."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"motionPatterns"})})," — opinionated pairs (",e.jsx(n.code,{children:"enter"}),", ",e.jsx(n.code,{children:"exit"}),", ",e.jsx(n.code,{children:"layout"}),") used for recipes and real components."]}),`
`]}),`
`,e.jsxs(n.p,{children:["CSS custom properties are available via ",e.jsx(n.code,{children:"motionRootStyleObject()"})," and ",e.jsx(n.code,{children:"motionDurationCssVar"})," / ",e.jsx(n.code,{children:"motionEasingCssVar"})," (prefix ",e.jsx(n.code,{children:"--sparing-motion-"}),")."]}),`
`,e.jsx(n.h2,{id:"how-to-use-these-stories",children:"How to use these stories"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"01 Duration"})," & ",e.jsx(n.strong,{children:"02 Easing"})," — use ",e.jsx(n.strong,{children:"Replay all"})," so every row animates at once; that is the only fair way to compare 150ms vs 200ms or two curves."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"03 Patterns"})," — validates ",e.jsx(n.strong,{children:"combined"})," tokens (enter vs exit, layout)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"04 Components"})," — modal, drawer, and tooltip; tokens should still feel right on real surfaces."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility--tooling",children:"Accessibility & tooling"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Stories wrap content with a decorator that respects ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"prefers-reduced-motion: reduce"})})," (transitions collapse to near-zero duration when the user requests reduced motion)."]}),`
`,e.jsxs(n.li,{children:["Visual snapshot tools (e.g. Chromatic) should ",e.jsx(n.strong,{children:"pause after animations"})," or rely on that reduced-motion behavior — animated frames are inherently unstable for screenshots."]}),`
`]}),`
`,e.jsx(n.h2,{id:"api-quick-reference",children:"API (quick reference)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  motionDuration,
  motionEasing,
  motionPatterns,
  motionRootStyleObject,
  motionDurationCssVar,
  motionEasingCssVar,
} from 'charte-graphique';
`})}),`
`,e.jsxs(n.p,{children:["Apply ",e.jsx(n.code,{children:"motionRootStyleObject()"})," on ",e.jsx(n.code,{children:":root"})," or a provider, then reference e.g. ",e.jsx(n.code,{children:"var(--sparing-motion-duration-normal)"})," in CSS."]})]})}function p(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{p as default};
