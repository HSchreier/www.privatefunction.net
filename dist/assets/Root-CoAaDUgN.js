import{r as E,a as c,j as n,_ as a,b as x,u as y,T as _,D as b,c as m,d,e as R,f as M,R as C}from"./index-xNnwmBma.js";import{H as S}from"./index.esm-Dn9cDnZ6.js";import"./index-BWv8SOSl.js";var v,l=E;v=l.createRoot,l.hydrateRoot;const T=c.createContext(null);function g(){return c.useContext(T)}const D=typeof Symbol=="function"&&Symbol.for,$=D?Symbol.for("mui.nested"):"__THEME_NESTED__";function k(e,t){return typeof t=="function"?t(e):a({},e,t)}function H(e){const{children:t,theme:r}=e,o=g(),u=c.useMemo(()=>{const s=o===null?r:k(o,r);return s!=null&&(s[$]=o!==null),s},[r,o]);return n.jsx(T.Provider,{value:u,children:t})}const B=["value"],L=c.createContext();function O(e){let{value:t}=e,r=x(e,B);return n.jsx(L.Provider,a({value:t??!0},r))}const f={};function h(e,t,r,o=!1){return c.useMemo(()=>{const u=e&&t[e]||t;if(typeof r=="function"){const s=r(u),i=e?a({},t,{[e]:s}):s;return o?()=>i:i}return e?a({},t,{[e]:r}):a({},t,r)},[e,t,r,o])}function w(e){const{children:t,theme:r,themeId:o}=e,u=y(f),s=g()||f,i=h(o,u,r),j=h(o,s,r,!0),P=i.direction==="rtl";return n.jsx(H,{theme:j,children:n.jsx(_.Provider,{value:i,children:n.jsx(O,{value:P,children:n.jsx(b,{value:i==null?void 0:i.components,children:t})})})})}const N=["theme"];function V(e){let{theme:t}=e,r=x(e,N);const o=t[m];return n.jsx(w,a({},r,{themeId:o?m:void 0,theme:o||t}))}const p={palette:{background:{default:"#fafafa",paper:"#fff"}},components:{MuiButtonBase:{defaultProps:{disableRipple:!0}},MuiDivider:{styleOverrides:{vertical:{marginRight:10,marginLeft:10},middle:{marginTop:10,marginBottom:10,width:"80%"}}}}},W={light:d(p,{palette:{mode:"light",background:{default:"#fafafa",paper:"#fff"},primary:{main:"#3f51b5"}}}),dark:d(p,{palette:{mode:"dark",background:{default:"#111",paper:"#171717"},primary:{main:"#333"}}})};function Y({children:e}){const[t]=R();return n.jsx(V,{theme:M(W[t]),children:e})}const q=document.getElementById("root"),z=v(q);function J(e){z.render(n.jsx(c.StrictMode,{children:n.jsx(C,{children:n.jsx(S,{children:n.jsx(Y,{children:n.jsx(e,{})})})})}))}export{J as default};