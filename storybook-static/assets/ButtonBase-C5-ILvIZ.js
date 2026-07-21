var wt=Object.defineProperty;var St=(t,n,e)=>n in t?wt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var Y=(t,n,e)=>St(t,typeof n!="symbol"?n+"":n,e);import{R as X,r as l}from"./index-BSnFy17d.js";import{_ as Dt,c as x}from"./createTheme-CZra9FL3.js";import{j as O}from"./jsx-runtime-BjG_zV1W.js";import{a as ct,g as jt}from"./generateUtilityClasses-DGi4yQgU.js";import{u as pt,k as tt}from"./DefaultPropsProvider-B6Ngu_92.js";import{s as et,c as Lt}from"./memoTheme-D8FMIFCS.js";import{u as st,a as G}from"./useForkRef-B-TD92He.js";import{i as at}from"./createSimplePaletteValueFilter-DP1slul8.js";function Nt(t,n){if(t==null)return{};var e={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;e[s]=t[s]}return e}function J(t,n){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,s){return e.__proto__=s,e},J(t,n)}function Ot(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,J(t,n)}const lt=X.createContext(null);function kt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,n){var e=function(r){return n&&l.isValidElement(r)?n(r):r},s=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){s[o.key]=e(o)}),s}function vt(t,n){t=t||{},n=n||{};function e(d){return d in n?n[d]:t[d]}var s=Object.create(null),o=[];for(var r in t)r in n?o.length&&(s[r]=o,o=[]):o.push(r);var a,p={};for(var u in n){if(s[u])for(a=0;a<s[u].length;a++){var f=s[u][a];p[s[u][a]]=e(f)}p[u]=e(u)}for(a=0;a<o.length;a++)p[o[a]]=e(o[a]);return p}function N(t,n,e){return e[n]!=null?e[n]:t.props[n]}function $t(t,n){return nt(t.children,function(e){return l.cloneElement(e,{onExited:n.bind(null,e),in:!0,appear:N(e,"appear",t),enter:N(e,"enter",t),exit:N(e,"exit",t)})})}function Ft(t,n,e){var s=nt(t.children),o=vt(n,s);return Object.keys(o).forEach(function(r){var a=o[r];if(l.isValidElement(a)){var p=r in n,u=r in s,f=n[r],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[r]=l.cloneElement(a,{onExited:e.bind(null,a),in:!0,exit:N(a,"exit",t),enter:N(a,"enter",t)}):!u&&p&&!d?o[r]=l.cloneElement(a,{in:!1}):u&&p&&l.isValidElement(f)&&(o[r]=l.cloneElement(a,{onExited:e.bind(null,a),in:f.props.in,exit:N(a,"exit",t),enter:N(a,"enter",t)}))}}),o}var Ut=Object.values||function(t){return Object.keys(t).map(function(n){return t[n]})},zt={component:"div",childFactory:function(n){return n}},ot=function(t){Ot(n,t);function n(s,o){var r;r=t.call(this,s,o)||this;var a=r.handleExited.bind(kt(r));return r.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},r}var e=n.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(o,r){var a=r.children,p=r.handleExited,u=r.firstRender;return{children:u?$t(o,p):Ft(o,a,p),firstRender:!1}},e.handleExited=function(o,r){var a=nt(this.props.children);o.key in a||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var u=Dt({},p.children);return delete u[o.key],{children:u}}))},e.render=function(){var o=this.props,r=o.component,a=o.childFactory,p=Nt(o,["component","childFactory"]),u=this.state.contextValue,f=Ut(this.state.children).map(a);return delete p.appear,delete p.enter,delete p.exit,r===null?X.createElement(lt.Provider,{value:u},f):X.createElement(lt.Provider,{value:u},X.createElement(r,p,f))},n}(X.Component);ot.propTypes={};ot.defaultProps=zt;const ut={};function ft(t,n){const e=l.useRef(ut);return e.current===ut&&(e.current=t(n)),e}const At=[];function _t(t){l.useEffect(t,At)}class rt{constructor(){Y(this,"currentId",null);Y(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Y(this,"disposeEffect",()=>this.clear)}static create(){return new rt}start(n,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},n)}}function Yt(){const t=ft(rt.create).current;return _t(t.disposeEffect),t}class q{constructor(){Y(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const n=ft(q.create).current,[e,s]=l.useState(!1);return n.shouldMount=e,n.setShouldMount=s,l.useEffect(n.mountEffect,[e]),n}mount(){return this.mounted||(this.mounted=Kt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...n)})}stop(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...n)})}pulsate(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...n)})}}function Xt(){return q.use()}function Kt(){let t,n;const e=new Promise((s,o)=>{t=s,n=o});return e.resolve=t,e.reject=n,e}function Wt(t){const{className:n,classes:e,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:a,in:p,onExited:u,timeout:f}=t,[d,h]=l.useState(!1),M=x(n,e.ripple,e.rippleVisible,s&&e.ripplePulsate),V={width:a,height:a,top:-(a/2)+r,left:-(a/2)+o},b=x(e.child,d&&e.childLeaving,s&&e.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const S=setTimeout(u,f);return()=>{clearTimeout(S)}}},[u,p,f]),O.jsx("span",{className:M,style:V,children:O.jsx("span",{className:b})})}const g=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Ht=80,Gt=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,qt=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Zt=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Jt=et("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Qt=et(Wt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Gt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${qt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Zt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,te=l.forwardRef(function(n,e){const s=pt({props:n,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:a,...p}=s,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=Yt(),b=l.useRef(null),S=l.useRef(null),T=l.useCallback(c=>{const{pulsate:y,rippleX:R,rippleY:$,rippleSize:D,cb:U}=c;f(E=>[...E,O.jsx(Qt,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:Q,pulsate:y,rippleX:R,rippleY:$,rippleSize:D},d.current)]),d.current+=1,h.current=U},[r]),k=l.useCallback((c={},y={},R=()=>{})=>{const{pulsate:$=!1,center:D=o||y.pulsate,fakeElement:U=!1}=y;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=U?null:S.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,C,w;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)I=Math.round(B.width/2),C=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;I=Math.round(z-B.left),C=Math.round(j-B.top)}if(D)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-I),I)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-C),C)*2+2;w=Math.sqrt(z**2+j**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{T({pulsate:$,rippleX:I,rippleY:C,rippleSize:w,cb:R})},V.start(Ht,()=>{b.current&&(b.current(),b.current=null)})):T({pulsate:$,rippleX:I,rippleY:C,rippleSize:w,cb:R})},[o,T,V]),K=l.useCallback(()=>{k({},{pulsate:!0})},[k]),v=l.useCallback((c,y)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{v(c,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return l.useImperativeHandle(e,()=>({pulsate:K,start:k,stop:v}),[K,k,v]),O.jsx(Jt,{className:x(g.root,r.root,a),ref:S,...p,children:O.jsx(ot,{component:null,exit:!0,children:u})})});function ee(t){return jt("MuiButtonBase",t)}const ne=ct("MuiButtonBase",["root","disabled","focusVisible"]),oe=t=>{const{disabled:n,focusVisible:e,focusVisibleClassName:s,classes:o}=t,a=Lt({root:["root",n&&"disabled",e&&"focusVisible"]},ee,o);return e&&s&&(a.root+=` ${s}`),a},re=et("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ne.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),he=l.forwardRef(function(n,e){const s=pt({props:n,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:a,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:S,onClick:T,onContextMenu:k,onDragLeave:K,onFocus:v,onFocusVisible:c,onKeyDown:y,onKeyUp:R,onMouseDown:$,onMouseLeave:D,onMouseUp:U,onTouchEnd:E,onTouchMove:B,onTouchStart:I,tabIndex:C=0,TouchRippleProps:w,touchRippleRef:z,type:j,...F}=s,A=l.useRef(null),m=Xt(),dt=st(m.ref,z),[L,W]=l.useState(!1);f&&L&&W(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const ht=m.shouldMount&&!d&&!f;l.useEffect(()=>{L&&M&&!d&&m.pulsate()},[d,M,L,m]);const mt=P(m,"start",$,h),bt=P(m,"stop",k,h),gt=P(m,"stop",K,h),Mt=P(m,"stop",U,h),Rt=P(m,"stop",i=>{L&&i.preventDefault(),D&&D(i)},h),yt=P(m,"start",I,h),Et=P(m,"stop",E,h),xt=P(m,"stop",B,h),Tt=P(m,"stop",i=>{at(i.target)||W(!1),S&&S(i)},!1),Ct=G(i=>{A.current||(A.current=i.currentTarget),at(i.target)&&(W(!0),c&&c(i)),v&&v(i)}),Z=()=>{const i=A.current;return i?i.tagName==="BUTTON"?!1:!(i.tagName==="A"&&i.href):u&&u!=="button"},Pt=G(i=>{M&&!i.repeat&&L&&i.key===" "&&m.stop(i,()=>{m.start(i)}),i.target===i.currentTarget&&Z()&&i.key===" "&&i.preventDefault(),y&&y(i),i.target===i.currentTarget&&Z()&&i.key==="Enter"&&!f&&(i.preventDefault(),T&&T(i))}),Vt=G(i=>{M&&i.key===" "&&L&&!i.defaultPrevented&&m.stop(i,()=>{m.pulsate(i)}),R&&R(i),T&&i.target===i.currentTarget&&Z()&&i.key===" "&&!i.defaultPrevented&&!f&&T(i)});let H=u;H==="button"&&(F.href||F.to)&&(H=b);const _={};if(H==="button"){const i=!!F.formAction;_.type=j===void 0&&!i?"button":j,_.disabled=f}else!F.href&&!F.to&&(_.role="button"),f&&(_["aria-disabled"]=f);const Bt=st(e,A),it={...s,centerRipple:r,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:C,focusVisible:L},It=oe(it);return O.jsxs(re,{as:H,className:x(It.root,p),ownerState:it,onBlur:Tt,onClick:T,onContextMenu:bt,onFocus:Ct,onKeyDown:Pt,onKeyUp:Vt,onMouseDown:mt,onMouseLeave:Rt,onMouseUp:Mt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:xt,onTouchStart:yt,ref:Bt,tabIndex:f?-1:C,type:j,..._,...F,children:[a,ht?O.jsx(te,{ref:dt,center:r,...w}):null]})});function P(t,n,e,s=!1){return G(o=>(e&&e(o),s||t[n](o),!0))}export{he as B,lt as T,Ot as _,Nt as a,rt as b,Yt as u};
