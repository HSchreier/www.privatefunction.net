const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Root-C2_xEuK_.js","assets/index-BiwAorwW.js","assets/index.esm-CfbmJrcN.js","assets/App-DaUYFAND.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const y="modulepreload",v=function(e){return"/"+e},m={},p=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.all(n.map(a=>{if(a=v(a),a in m)return;m[a]=!0;const l=a.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":y,l||(c.as="script",c.crossOrigin=""),c.href=a,i&&c.setAttribute("nonce",i),document.head.appendChild(c),l)return new Promise((g,b)=>{c.addEventListener("load",g),c.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};function w(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function S(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function s(){return this instanceof s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}),n}var u={exports:{}};u.exports=f;u.exports.isMobile=f;u.exports.default=f;const O=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,E=/CrOS/,P=/android|ipad|playbook|silk/i;function f(e){e||(e={});let t=e.ua;if(!t&&typeof navigator<"u"&&(t=navigator.userAgent),t&&t.headers&&typeof t.headers["user-agent"]=="string"&&(t=t.headers["user-agent"]),typeof t!="string")return!1;let n=O.test(t)&&!E.test(t)||!!e.tablet&&P.test(t);return!n&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&t.indexOf("Macintosh")!==-1&&t.indexOf("Safari")!==-1&&(n=!0),n}var _=u.exports;const x=w(_),$=x(),M="Privatefunction",L="helle@privatefunction.net",A="https://github.com/HSchreier/www.privatefunction.net",j="https://www.linkedin.com/in/helmutschreier",C="https://x.com/silentium",T={app:{crash:{title:"Oooops... Sorry, I guess, something went wrong. You can:",options:{email:`contact with author by this email - ${L}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Hey bro? What are you looking for?"},D={options:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3},maxSnack:$?3:4},H={delay:300,minimumLoading:700},N={image:"/cover.png",description:"Helmut has a website about Tech, Music & his stuff....."},I="https://giphy.com/embed/xTiN0L7EW5trfOvEk0";function d(){return Math.floor(Math.random()*256)}function k(){const e=d(),t=d(),n=d();return[`rgb(${e}, ${t}, ${n})`,`rgb(${255-e}, ${255-t}, ${255-n})`]}function R(){const[e,t]=k(),n=["font-size: 40px",`color: ${e}`,`border: 1px solid ${t}`,`background-color: ${t}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${M} ===`,n)}Promise.all([p(()=>import("./Root-C2_xEuK_.js"),__vite__mapDeps([0,1,2])),p(()=>import("./App-DaUYFAND.js").then(e=>e.A),__vite__mapDeps([3,1]))]).then(([{default:e},{default:t}])=>{e(t)});R();export{p as _,j as a,w as b,M as c,N as d,L as e,I as f,S as g,H as l,T as m,D as n,A as r,C as t};