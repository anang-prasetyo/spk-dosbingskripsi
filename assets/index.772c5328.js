(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Wu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const xT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",DT=Wu(xT),PT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",OT=Wu(PT);function pv(t){return!!t||t===""}function Ja(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Qe(s)?FT(s):Ja(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Qe(t))return t;if(Ze(t))return t}}const LT=/;(?![^(]*\))/g,MT=/:(.+)/;function FT(t){const e={};return t.split(LT).forEach(n=>{if(n){const s=n.split(MT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Je(t){let e="";if(Qe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=Je(t[n]);s&&(e+=s+" ")}else if(Ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function UT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Qe(e)&&(t.class=Je(e)),n&&(t.style=Ja(n)),t}function VT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ls(t[s],e[s]);return n}function Ls(t,e){if(t===e)return!0;let n=pm(t),s=pm(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ga(t),s=ga(e),n||s)return t===e;if(n=ne(t),s=ne(e),n||s)return n&&s?VT(t,e):!1;if(n=Ze(t),s=Ze(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ls(t[o],e[o]))return!1}}return String(t)===String(e)}function zu(t,e){return t.findIndex(n=>Ls(n,e))}const qd=t=>Qe(t)?t:t==null?"":ne(t)||Ze(t)&&(t.toString===gv||!fe(t.toString))?JSON.stringify(t,mv,2):String(t),mv=(t,e)=>e&&e.__v_isRef?mv(t,e.value):Si(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Jr(e)?{[`Set(${e.size})`]:[...e.values()]}:Ze(e)&&!ne(e)&&!yv(e)?String(e):e,Pe={},Ti=[],bn=()=>{},BT=()=>!1,$T=/^on[^a-z]/,Ya=t=>$T.test(t),jd=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Kd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qT=Object.prototype.hasOwnProperty,ke=(t,e)=>qT.call(t,e),ne=Array.isArray,Si=t=>Xa(t)==="[object Map]",Jr=t=>Xa(t)==="[object Set]",pm=t=>Xa(t)==="[object Date]",fe=t=>typeof t=="function",Qe=t=>typeof t=="string",ga=t=>typeof t=="symbol",Ze=t=>t!==null&&typeof t=="object",Hd=t=>Ze(t)&&fe(t.then)&&fe(t.catch),gv=Object.prototype.toString,Xa=t=>gv.call(t),jT=t=>Xa(t).slice(8,-1),yv=t=>Xa(t)==="[object Object]",Gd=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zo=Wu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},KT=/-(\w)/g,hn=Qu(t=>t.replace(KT,(e,n)=>n?n.toUpperCase():"")),HT=/\B([A-Z])/g,Fn=Qu(t=>t.replace(HT,"-$1").toLowerCase()),Za=Qu(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qo=Qu(t=>t?`on${Za(t)}`:""),Li=(t,e)=>!Object.is(t,e),ki=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},uu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mm;const GT=()=>mm||(mm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let sn;class Wd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&sn&&(this.parent=sn,this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}run(e){if(this.active){const n=sn;try{return sn=this,e()}finally{sn=n}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function WT(t){return new Wd(t)}function vv(t,e=sn){e&&e.active&&e.effects.push(t)}function zT(){return sn}function QT(t){sn&&sn.cleanups.push(t)}const zd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},wv=t=>(t.w&Fs)>0,_v=t=>(t.n&Fs)>0,JT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Fs},YT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];wv(r)&&!_v(r)?r.delete(t):e[n++]=r,r.w&=~Fs,r.n&=~Fs}e.length=n}},Mh=new WeakMap;let Vo=0,Fs=1;const Fh=30;let _n;const Sr=Symbol(""),Uh=Symbol("");class ec{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vv(this,s)}run(){if(!this.active)return this.fn();let e=_n,n=xs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_n,_n=this,xs=!0,Fs=1<<++Vo,Vo<=Fh?JT(this):gm(this),this.fn()}finally{Vo<=Fh&&YT(this),Fs=1<<--Vo,_n=this.parent,xs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_n===this?this.deferStop=!0:this.active&&(gm(this),this.onStop&&this.onStop(),this.active=!1)}}function gm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function XT(t,e){t.effect&&(t=t.effect.fn);const n=new ec(t);e&&(Xe(n,e),e.scope&&vv(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function ZT(t){t.effect.stop()}let xs=!0;const Iv=[];function Yr(){Iv.push(xs),xs=!1}function Xr(){const t=Iv.pop();xs=t===void 0?!0:t}function dn(t,e,n){if(xs&&_n){let s=Mh.get(t);s||Mh.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=zd()),bv(r)}}function bv(t,e){let n=!1;Vo<=Fh?_v(t)||(t.n|=Fs,n=!wv(t)):n=!t.has(_n),n&&(t.add(_n),_n.deps.push(t))}function ss(t,e,n,s,r,i){const o=Mh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?Gd(n)&&a.push(o.get("length")):(a.push(o.get(Sr)),Si(t)&&a.push(o.get(Uh)));break;case"delete":ne(t)||(a.push(o.get(Sr)),Si(t)&&a.push(o.get(Uh)));break;case"set":Si(t)&&a.push(o.get(Sr));break}if(a.length===1)a[0]&&Vh(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Vh(zd(c))}}function Vh(t,e){const n=ne(t)?t:[...t];for(const s of n)s.computed&&ym(s);for(const s of n)s.computed||ym(s)}function ym(t,e){(t!==_n||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const e0=Wu("__proto__,__v_isRef,__isVue"),Ev=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ga)),t0=Ju(),n0=Ju(!1,!0),s0=Ju(!0),r0=Ju(!0,!0),vm=i0();function i0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Te(this);for(let i=0,o=this.length;i<o;i++)dn(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Yr();const s=Te(this)[e].apply(this,n);return Xr(),s}}),t}function Ju(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Nv:Rv:e?Av:Cv).get(s))return s;const o=ne(s);if(!t&&o&&ke(vm,r))return Reflect.get(vm,r,i);const a=Reflect.get(s,r,i);return(ga(r)?Ev.has(r):e0(r))||(t||dn(s,"get",r),e)?a:lt(a)?o&&Gd(r)?a:a.value:Ze(a)?t?Jd(a):ro(a):a}}const o0=Tv(),a0=Tv(!0);function Tv(t=!1){return function(n,s,r,i){let o=n[s];if(Mi(o)&&lt(o)&&!lt(r))return!1;if(!t&&!Mi(r)&&(lu(r)||(r=Te(r),o=Te(o)),!ne(n)&&lt(o)&&!lt(r)))return o.value=r,!0;const a=ne(n)&&Gd(s)?Number(s)<n.length:ke(n,s),c=Reflect.set(n,s,r,i);return n===Te(i)&&(a?Li(r,o)&&ss(n,"set",s,r):ss(n,"add",s,r)),c}}function c0(t,e){const n=ke(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ss(t,"delete",e,void 0),s}function u0(t,e){const n=Reflect.has(t,e);return(!ga(e)||!Ev.has(e))&&dn(t,"has",e),n}function l0(t){return dn(t,"iterate",ne(t)?"length":Sr),Reflect.ownKeys(t)}const Sv={get:t0,set:o0,deleteProperty:c0,has:u0,ownKeys:l0},kv={get:s0,set(t,e){return!0},deleteProperty(t,e){return!0}},h0=Xe({},Sv,{get:n0,set:a0}),d0=Xe({},kv,{get:r0}),Qd=t=>t,Yu=t=>Reflect.getPrototypeOf(t);function xc(t,e,n=!1,s=!1){t=t.__v_raw;const r=Te(t),i=Te(e);n||(e!==i&&dn(r,"get",e),dn(r,"get",i));const{has:o}=Yu(r),a=s?Qd:n?Zd:ya;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Dc(t,e=!1){const n=this.__v_raw,s=Te(n),r=Te(t);return e||(t!==r&&dn(s,"has",t),dn(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Pc(t,e=!1){return t=t.__v_raw,!e&&dn(Te(t),"iterate",Sr),Reflect.get(t,"size",t)}function wm(t){t=Te(t);const e=Te(this);return Yu(e).has.call(e,t)||(e.add(t),ss(e,"add",t,t)),this}function _m(t,e){e=Te(e);const n=Te(this),{has:s,get:r}=Yu(n);let i=s.call(n,t);i||(t=Te(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Li(e,o)&&ss(n,"set",t,e):ss(n,"add",t,e),this}function Im(t){const e=Te(this),{has:n,get:s}=Yu(e);let r=n.call(e,t);r||(t=Te(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ss(e,"delete",t,void 0),i}function bm(){const t=Te(this),e=t.size!==0,n=t.clear();return e&&ss(t,"clear",void 0,void 0),n}function Oc(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Te(o),c=e?Qd:t?Zd:ya;return!t&&dn(a,"iterate",Sr),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Lc(t,e,n){return function(...s){const r=this.__v_raw,i=Te(r),o=Si(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Qd:e?Zd:ya;return!e&&dn(i,"iterate",c?Uh:Sr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function ms(t){return function(...e){return t==="delete"?!1:this}}function f0(){const t={get(i){return xc(this,i)},get size(){return Pc(this)},has:Dc,add:wm,set:_m,delete:Im,clear:bm,forEach:Oc(!1,!1)},e={get(i){return xc(this,i,!1,!0)},get size(){return Pc(this)},has:Dc,add:wm,set:_m,delete:Im,clear:bm,forEach:Oc(!1,!0)},n={get(i){return xc(this,i,!0)},get size(){return Pc(this,!0)},has(i){return Dc.call(this,i,!0)},add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear"),forEach:Oc(!0,!1)},s={get(i){return xc(this,i,!0,!0)},get size(){return Pc(this,!0)},has(i){return Dc.call(this,i,!0)},add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear"),forEach:Oc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Lc(i,!1,!1),n[i]=Lc(i,!0,!1),e[i]=Lc(i,!1,!0),s[i]=Lc(i,!0,!0)}),[t,n,e,s]}const[p0,m0,g0,y0]=f0();function Xu(t,e){const n=e?t?y0:g0:t?m0:p0;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ke(n,r)&&r in s?n:s,r,i)}const v0={get:Xu(!1,!1)},w0={get:Xu(!1,!0)},_0={get:Xu(!0,!1)},I0={get:Xu(!0,!0)},Cv=new WeakMap,Av=new WeakMap,Rv=new WeakMap,Nv=new WeakMap;function b0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E0(t){return t.__v_skip||!Object.isExtensible(t)?0:b0(jT(t))}function ro(t){return Mi(t)?t:Zu(t,!1,Sv,v0,Cv)}function xv(t){return Zu(t,!1,h0,w0,Av)}function Jd(t){return Zu(t,!0,kv,_0,Rv)}function T0(t){return Zu(t,!0,d0,I0,Nv)}function Zu(t,e,n,s,r){if(!Ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=E0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function kr(t){return Mi(t)?kr(t.__v_raw):!!(t&&t.__v_isReactive)}function Mi(t){return!!(t&&t.__v_isReadonly)}function lu(t){return!!(t&&t.__v_isShallow)}function Yd(t){return kr(t)||Mi(t)}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Xd(t){return uu(t,"__v_skip",!0),t}const ya=t=>Ze(t)?ro(t):t,Zd=t=>Ze(t)?Jd(t):t;function ef(t){xs&&_n&&(t=Te(t),bv(t.dep||(t.dep=zd())))}function el(t,e){t=Te(t),t.dep&&Vh(t.dep)}function lt(t){return!!(t&&t.__v_isRef===!0)}function Oe(t){return Pv(t,!1)}function Dv(t){return Pv(t,!0)}function Pv(t,e){return lt(t)?t:new S0(t,e)}class S0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Te(e),this._value=n?e:ya(e)}get value(){return ef(this),this._value}set value(e){e=this.__v_isShallow?e:Te(e),Li(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ya(e),el(this))}}function k0(t){el(t)}function w(t){return lt(t)?t.value:t}const C0={get:(t,e,n)=>w(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return lt(r)&&!lt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function tf(t){return kr(t)?t:new Proxy(t,C0)}class A0{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>ef(this),()=>el(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function R0(t){return new A0(t)}function N0(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Ov(t,n);return e}class x0{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ov(t,e,n){const s=t[e];return lt(s)?s:new x0(t,e,n)}class D0{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ec(e,()=>{this._dirty||(this._dirty=!0,el(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Te(this);return ef(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function P0(t,e,n=!1){let s,r;const i=fe(t);return i?(s=t,r=bn):(s=t.get,r=t.set),new D0(s,r,i||!r,n)}const Jo=[];function Lv(t,...e){Yr();const n=Jo.length?Jo[Jo.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=O0();if(s)Un(s,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${Cw(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${t}`,...e];r.length&&i.push(`
`,...L0(r)),console.warn(...i)}Xr()}function O0(){let t=Jo[Jo.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function L0(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...M0(n))}),e}function M0({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,r=` at <${Cw(t.component,t.type,s)}`,i=">"+n;return t.props?[r,...F0(t.props),i]:[r+i]}function F0(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...Mv(s,t[s]))}),n.length>3&&e.push(" ..."),e}function Mv(t,e,n){return Qe(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:lt(e)?(e=Mv(t,Te(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):fe(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Te(e),n?e:[`${t}=`,e])}function Un(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Zr(i,e,n)}return r}function un(t,e,n,s){if(fe(t)){const i=Un(t,e,n,s);return i&&Hd(i)&&i.catch(o=>{Zr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(un(t[i],e,n,s));return r}function Zr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Un(c,null,10,[t,o,a]);return}}U0(t,n,r,s)}function U0(t,e,n,s=!0){console.error(t)}let hu=!1,Bh=!1;const an=[];let Yn=0;const Yo=[];let Bo=null,gi=0;const Xo=[];let bs=null,yi=0;const Fv=Promise.resolve();let nf=null,$h=null;function tl(t){const e=nf||Fv;return t?e.then(this?t.bind(this):t):e}function V0(t){let e=Yn+1,n=an.length;for(;e<n;){const s=e+n>>>1;va(an[s])<t?e=s+1:n=s}return e}function sf(t){(!an.length||!an.includes(t,hu&&t.allowRecurse?Yn+1:Yn))&&t!==$h&&(t.id==null?an.push(t):an.splice(V0(t.id),0,t),Uv())}function Uv(){!hu&&!Bh&&(Bh=!0,nf=Fv.then(Bv))}function B0(t){const e=an.indexOf(t);e>Yn&&an.splice(e,1)}function Vv(t,e,n,s){ne(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Uv()}function $0(t){Vv(t,Bo,Yo,gi)}function rf(t){Vv(t,bs,Xo,yi)}function nl(t,e=null){if(Yo.length){for($h=e,Bo=[...new Set(Yo)],Yo.length=0,gi=0;gi<Bo.length;gi++)Bo[gi]();Bo=null,gi=0,$h=null,nl(t,e)}}function du(t){if(nl(),Xo.length){const e=[...new Set(Xo)];if(Xo.length=0,bs){bs.push(...e);return}for(bs=e,bs.sort((n,s)=>va(n)-va(s)),yi=0;yi<bs.length;yi++)bs[yi]();bs=null,yi=0}}const va=t=>t.id==null?1/0:t.id;function Bv(t){Bh=!1,hu=!0,nl(t),an.sort((n,s)=>va(n)-va(s));const e=bn;try{for(Yn=0;Yn<an.length;Yn++){const n=an[Yn];n&&n.active!==!1&&Un(n,null,14)}}finally{Yn=0,an.length=0,du(),hu=!1,nf=null,(an.length||Yo.length||Xo.length)&&Bv(t)}}let vi,Mc=[];function $v(t,e){var n,s;vi=t,vi?(vi.enabled=!0,Mc.forEach(({event:r,args:i})=>vi.emit(r,...i)),Mc=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{$v(i,e)}),setTimeout(()=>{vi||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Mc=[])},3e3)):Mc=[]}function q0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||Pe;d&&(r=n.map(f=>f.trim())),h&&(r=n.map(Ms))}let a,c=s[a=Qo(e)]||s[a=Qo(hn(e))];!c&&i&&(c=s[a=Qo(Fn(e))]),c&&un(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,un(u,t,6,r)}}function qv(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!fe(t)){const c=u=>{const l=qv(u,e,!0);l&&(a=!0,Xe(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):Xe(o,i),s.set(t,o),o)}function sl(t,e){return!t||!Ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Fn(e))||ke(t,e))}let Dt=null,rl=null;function wa(t){const e=Dt;return Dt=t,rl=t&&t.type.__scopeId||null,e}function of(t){rl=t}function af(){rl=null}const j0=t=>Fi;function Fi(t,e=Dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&zh(-1);const i=wa(e),o=t(...r);return wa(i),s._d&&zh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Xc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:b}=t;let _,y;const g=wa(t);try{if(n.shapeFlag&4){const C=r||s;_=rn(l.call(C,C,h,i,f,d,p)),y=c}else{const C=e;_=rn(C.length>1?C(i,{attrs:c,slots:a,emit:u}):C(i,null)),y=e.props?c:H0(c)}}catch(C){ta.length=0,Zr(C,t,1),_=_e(Pt)}let I=_;if(y&&b!==!1){const C=Object.keys(y),{shapeFlag:D}=I;C.length&&D&7&&(o&&C.some(jd)&&(y=G0(y,o)),I=jn(I,y))}return n.dirs&&(I=jn(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),_=I,wa(g),_}function K0(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Us(s)){if(s.type!==Pt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const H0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ya(n))&&((e||(e={}))[n]=t[n]);return e},G0=(t,e)=>{const n={};for(const s in t)(!jd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function W0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Em(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!sl(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Em(s,o,u):!0:!!o;return!1}function Em(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!sl(n,i))return!0}return!1}function cf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const jv=t=>t.__isSuspense,z0={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,u){t==null?Q0(e,n,s,r,i,o,a,c,u):J0(t,e,n,s,r,o,a,c,u)},hydrate:Y0,create:uf,normalize:X0},Kv=z0;function _a(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function Q0(t,e,n,s,r,i,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=t.suspense=uf(t,r,s,e,h,n,i,o,a,c);u(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(_a(t,"onPending"),_a(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),Ci(d,t.ssFallback)):d.resolve()}function J0(t,e,n,s,r,i,o,a,{p:c,um:u,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:p,pendingBranch:b,isInFallback:_,isHydrating:y}=h;if(b)h.pendingBranch=d,Rn(d,b)?(c(b,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():_&&(c(p,f,n,s,r,null,i,o,a),Ci(h,f))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=b):u(b,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),_?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(p,f,n,s,r,null,i,o,a),Ci(h,f))):p&&Rn(d,p)?(c(p,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&Rn(d,p))c(p,d,n,s,r,h,i,o,a),Ci(h,d);else if(_a(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:I}=h;g>0?setTimeout(()=>{h.pendingId===I&&h.fallback(f)},g):g===0&&h.fallback(f)}}function uf(t,e,n,s,r,i,o,a,c,u,l=!1){const{p:h,m:d,um:f,n:p,o:{parentNode:b,remove:_}}=u,y=Ms(t.props&&t.props.timeout),g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(I=!1){const{vnode:C,activeBranch:D,pendingBranch:P,pendingId:$,effects:x,parentComponent:z,container:X}=g;if(g.isHydrating)g.isHydrating=!1;else if(!I){const le=D&&P.transition&&P.transition.mode==="out-in";le&&(D.transition.afterLeave=()=>{$===g.pendingId&&d(P,X,O,0)});let{anchor:O}=g;D&&(O=p(D),f(D,z,g,!0)),le||d(P,X,O,0)}Ci(g,P),g.pendingBranch=null,g.isInFallback=!1;let A=g.parent,T=!1;for(;A;){if(A.pendingBranch){A.effects.push(...x),T=!0;break}A=A.parent}T||rf(x),g.effects=[],_a(C,"onResolve")},fallback(I){if(!g.pendingBranch)return;const{vnode:C,activeBranch:D,parentComponent:P,container:$,isSVG:x}=g;_a(C,"onFallback");const z=p(D),X=()=>{!g.isInFallback||(h(null,I,$,z,P,null,x,a,c),Ci(g,I))},A=I.transition&&I.transition.mode==="out-in";A&&(D.transition.afterLeave=X),g.isInFallback=!0,f(D,P,null,!0),A||X()},move(I,C,D){g.activeBranch&&d(g.activeBranch,I,C,D),g.container=I},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(I,C){const D=!!g.pendingBranch;D&&g.deps++;const P=I.vnode.el;I.asyncDep.catch($=>{Zr($,I,0)}).then($=>{if(I.isUnmounted||g.isUnmounted||g.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:x}=I;Qh(I,$,!1),P&&(x.el=P);const z=!P&&I.subTree.el;C(I,x,b(P||I.subTree.el),P?null:p(I.subTree),g,o,c),z&&_(z),cf(I,x.el),D&&--g.deps===0&&g.resolve()})},unmount(I,C){g.isUnmounted=!0,g.activeBranch&&f(g.activeBranch,n,I,C),g.pendingBranch&&f(g.pendingBranch,n,I,C)}};return g}function Y0(t,e,n,s,r,i,o,a,c){const u=e.suspense=uf(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(),l}function X0(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Tm(s?n.default:n),t.ssFallback=s?Tm(n.fallback):_e(Pt)}function Tm(t){let e;if(fe(t)){const n=Pr&&t._c;n&&(t._d=!1,ue()),t=t(),n&&(t._d=!0,e=Yt,yw())}return ne(t)&&(t=K0(t)),t=rn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Hv(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):rf(t)}function Ci(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,cf(s,r))}function Zo(t,e){if(ut){let n=ut.provides;const s=ut.parent&&ut.parent.provides;s===n&&(n=ut.provides=Object.create(s)),n[t]=e}}function Vn(t,e,n=!1){const s=ut||Dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(e)?e.call(s.proxy):e}}function Z0(t,e){return tc(t,null,e)}function Gv(t,e){return tc(t,null,{flush:"post"})}function eS(t,e){return tc(t,null,{flush:"sync"})}const Sm={};function Ai(t,e,n){return tc(t,e,n)}function tc(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Pe){const a=ut;let c,u=!1,l=!1;if(lt(t)?(c=()=>t.value,u=lu(t)):kr(t)?(c=()=>t,s=!0):ne(t)?(l=!0,u=t.some(y=>kr(y)||lu(y)),c=()=>t.map(y=>{if(lt(y))return y.value;if(kr(y))return wr(y);if(fe(y))return Un(y,a,2)})):fe(t)?e?c=()=>Un(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),un(t,a,3,[d])}:c=bn,e&&s){const y=c;c=()=>wr(y())}let h,d=y=>{h=_.onStop=()=>{Un(y,a,4)}};if(Bi)return d=bn,e?n&&un(e,a,3,[c(),l?[]:void 0,d]):c(),bn;let f=l?[]:Sm;const p=()=>{if(!!_.active)if(e){const y=_.run();(s||u||(l?y.some((g,I)=>Li(g,f[I])):Li(y,f)))&&(h&&h(),un(e,a,3,[y,f===Sm?void 0:f,d]),f=y)}else _.run()};p.allowRecurse=!!e;let b;r==="sync"?b=p:r==="post"?b=()=>bt(p,a&&a.suspense):b=()=>$0(p);const _=new ec(c,b);return e?n?p():f=_.run():r==="post"?bt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Kd(a.scope.effects,_)}}function tS(t,e,n){const s=this.proxy,r=Qe(t)?t.includes(".")?Wv(s,t):()=>s[t]:t.bind(s,s);let i;fe(e)?i=e:(i=e.handler,n=e);const o=ut;Vs(this);const a=tc(r,i.bind(s),n);return o?Vs(o):Ds(),a}function Wv(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function wr(t,e){if(!Ze(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),lt(t))wr(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)wr(t[n],e);else if(Jr(t)||Si(t))t.forEach(n=>{wr(n,e)});else if(yv(t))for(const n in t)wr(t[n],e);return t}function lf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return io(()=>{t.isMounted=!0}),cl(()=>{t.isUnmounting=!0}),t}const gn=[Function,Array],nS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},setup(t,{slots:e}){const n=Ys(),s=lf();let r;return()=>{const i=e.default&&il(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==Pt){o=b;break}}const a=Te(t),{mode:c}=a;if(s.isLeaving)return rh(o);const u=km(o);if(!u)return rh(o);const l=Ui(u,a,s,n);Dr(u,l);const h=n.subTree,d=h&&km(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const b=p();r===void 0?r=b:b!==r&&(r=b,f=!0)}if(d&&d.type!==Pt&&(!Rn(u,d)||f)){const b=Ui(d,a,s,n);if(Dr(d,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},rh(o);c==="in-out"&&u.type!==Pt&&(b.delayLeave=(_,y,g)=>{const I=zv(s,d);I[String(d.key)]=d,_._leaveCb=()=>{y(),_._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=g})}return o}}},hf=nS;function zv(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ui(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:b,onAppear:_,onAfterAppear:y,onAppearCancelled:g}=e,I=String(t.key),C=zv(n,t),D=(x,z)=>{x&&un(x,s,9,z)},P=(x,z)=>{const X=z[1];D(x,z),ne(x)?x.every(A=>A.length<=1)&&X():x.length<=1&&X()},$={mode:i,persisted:o,beforeEnter(x){let z=a;if(!n.isMounted)if(r)z=b||a;else return;x._leaveCb&&x._leaveCb(!0);const X=C[I];X&&Rn(t,X)&&X.el._leaveCb&&X.el._leaveCb(),D(z,[x])},enter(x){let z=c,X=u,A=l;if(!n.isMounted)if(r)z=_||c,X=y||u,A=g||l;else return;let T=!1;const le=x._enterCb=O=>{T||(T=!0,O?D(A,[x]):D(X,[x]),$.delayedLeave&&$.delayedLeave(),x._enterCb=void 0)};z?P(z,[x,le]):le()},leave(x,z){const X=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return z();D(h,[x]);let A=!1;const T=x._leaveCb=le=>{A||(A=!0,z(),le?D(p,[x]):D(f,[x]),x._leaveCb=void 0,C[X]===t&&delete C[X])};C[X]=t,d?P(d,[x,T]):T()},clone(x){return Ui(x,e,n,s)}};return $}function rh(t){if(sc(t))return t=jn(t),t.children=null,t}function km(t){return sc(t)?t.children?t.children[0]:void 0:t}function Dr(t,e){t.shapeFlag&6&&t.component?Dr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function il(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&r++,s=s.concat(il(o.children,e,a))):(e||o.type!==Pt)&&s.push(a!=null?jn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function nc(t){return fe(t)?{setup:t,name:t.name}:t}const Cr=t=>!!t.type.__asyncLoader;function $o(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,u,l=0;const h=()=>(l++,c=null,d()),d=()=>{let f;return c||(f=c=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((b,_)=>{a(p,()=>b(h()),()=>_(p),l+1)});throw p}).then(p=>f!==c&&c?c:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),u=p,p)))};return nc({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return u},setup(){const f=ut;if(u)return()=>ih(u,f);const p=g=>{c=null,Zr(g,f,13,!s)};if(o&&f.suspense||Bi)return d().then(g=>()=>ih(g,f)).catch(g=>(p(g),()=>s?_e(s,{error:g}):null));const b=Oe(!1),_=Oe(),y=Oe(!!r);return r&&setTimeout(()=>{y.value=!1},r),i!=null&&setTimeout(()=>{if(!b.value&&!_.value){const g=new Error(`Async component timed out after ${i}ms.`);p(g),_.value=g}},i),d().then(()=>{b.value=!0,f.parent&&sc(f.parent.vnode)&&sf(f.parent.update)}).catch(g=>{p(g),_.value=g}),()=>{if(b.value&&u)return ih(u,f);if(_.value&&s)return _e(s,{error:_.value});if(n&&!y.value)return _e(n)}}})}function ih(t,{vnode:{ref:e,props:n,children:s,shapeFlag:r},parent:i}){const o=_e(t,n,s);return o.ref=e,o}const sc=t=>t.type.__isKeepAlive,sS={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ys(),s=n.ctx;if(!s.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:l,o:{createElement:h}}}=s,d=h("div");s.activate=(g,I,C,D,P)=>{const $=g.component;u(g,I,C,0,a),c($.vnode,g,I,C,$,a,D,g.slotScopeIds,P),bt(()=>{$.isDeactivated=!1,$.a&&ki($.a);const x=g.props&&g.props.onVnodeMounted;x&&zt(x,$.parent,g)},a)},s.deactivate=g=>{const I=g.component;u(g,d,null,1,a),bt(()=>{I.da&&ki(I.da);const C=g.props&&g.props.onVnodeUnmounted;C&&zt(C,I.parent,g),I.isDeactivated=!0},a)};function f(g){oh(g),l(g,n,a,!0)}function p(g){r.forEach((I,C)=>{const D=yu(I.type);D&&(!g||!g(D))&&b(C)})}function b(g){const I=r.get(g);!o||I.type!==o.type?f(I):o&&oh(o),r.delete(g),i.delete(g)}Ai(()=>[t.include,t.exclude],([g,I])=>{g&&p(C=>qo(g,C)),I&&p(C=>!qo(I,C))},{flush:"post",deep:!0});let _=null;const y=()=>{_!=null&&r.set(_,ah(n.subTree))};return io(y),al(y),cl(()=>{r.forEach(g=>{const{subTree:I,suspense:C}=n,D=ah(I);if(g.type===D.type){oh(D);const P=D.component.da;P&&bt(P,C);return}f(g)})}),()=>{if(_=null,!e.default)return null;const g=e.default(),I=g[0];if(g.length>1)return o=null,g;if(!Us(I)||!(I.shapeFlag&4)&&!(I.shapeFlag&128))return o=null,I;let C=ah(I);const D=C.type,P=yu(Cr(C)?C.type.__asyncResolved||{}:D),{include:$,exclude:x,max:z}=t;if($&&(!P||!qo($,P))||x&&P&&qo(x,P))return o=C,I;const X=C.key==null?D:C.key,A=r.get(X);return C.el&&(C=jn(C),I.shapeFlag&128&&(I.ssContent=C)),_=X,A?(C.el=A.el,C.component=A.component,C.transition&&Dr(C,C.transition),C.shapeFlag|=512,i.delete(X),i.add(X)):(i.add(X),z&&i.size>parseInt(z,10)&&b(i.values().next().value)),C.shapeFlag|=256,o=C,jv(I.type)?I:C}}},rS=sS;function qo(t,e){return ne(t)?t.some(n=>qo(n,e)):Qe(t)?t.split(",").includes(e):t.test?t.test(e):!1}function Qv(t,e){Yv(t,"a",e)}function Jv(t,e){Yv(t,"da",e)}function Yv(t,e,n=ut){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ol(e,s,n),n){let r=n.parent;for(;r&&r.parent;)sc(r.parent.vnode)&&iS(s,e,n,r),r=r.parent}}function iS(t,e,n,s){const r=ol(e,t,s,!0);rc(()=>{Kd(s[e],r)},n)}function oh(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function ah(t){return t.shapeFlag&128?t.ssContent:t}function ol(t,e,n=ut,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Yr(),Vs(n);const a=un(e,n,t,o);return Ds(),Xr(),a});return s?r.unshift(i):r.push(i),i}}const cs=t=>(e,n=ut)=>(!Bi||t==="sp")&&ol(t,e,n),Xv=cs("bm"),io=cs("m"),Zv=cs("bu"),al=cs("u"),cl=cs("bum"),rc=cs("um"),ew=cs("sp"),tw=cs("rtg"),nw=cs("rtc");function sw(t,e=ut){ol("ec",t,e)}function nn(t,e){const n=Dt;if(n===null)return t;const s=ll(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Pe]=e[i];fe(o)&&(o={mounted:o,updated:o}),o.deep&&wr(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Cn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Yr(),un(c,n,8,[t.el,a,t,e]),Xr())}}const df="components",oS="directives";function aS(t,e){return ff(df,t,!0,e)||t}const rw=Symbol();function cS(t){return Qe(t)?ff(df,t,!1)||t:t||rw}function uS(t){return ff(oS,t)}function ff(t,e,n=!0,s=!1){const r=Dt||ut;if(r){const i=r.type;if(t===df){const a=yu(i,!1);if(a&&(a===e||a===hn(e)||a===Za(hn(e))))return i}const o=Cm(r[t]||i[t],e)||Cm(r.appContext[t],e);return!o&&s?i:o}}function Cm(t,e){return t&&(t[e]||t[hn(e)]||t[Za(hn(e))])}function As(t,e,n,s){let r;const i=n&&n[s];if(ne(t)||Qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ze(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function lS(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(ne(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.fn)}return t}function hS(t,e,n={},s,r){if(Dt.isCE||Dt.parent&&Cr(Dt.parent)&&Dt.parent.isCE)return _e("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),ue();const o=i&&iw(i(n)),a=An(He,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function iw(t){return t.some(e=>Us(e)?!(e.type===Pt||e.type===He&&!iw(e.children)):!0)?t:null}function dS(t){const e={};for(const n in t)e[Qo(n)]=t[n];return e}const qh=t=>t?Ew(t)?ll(t)||t.proxy:qh(t.parent):null,fu=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qh(t.parent),$root:t=>qh(t.root),$emit:t=>t.emit,$options:t=>aw(t),$forceUpdate:t=>t.f||(t.f=()=>sf(t.update)),$nextTick:t=>t.n||(t.n=tl.bind(t.proxy)),$watch:t=>tS.bind(t)}),jh={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Pe&&ke(s,e))return o[e]=1,s[e];if(r!==Pe&&ke(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Pe&&ke(n,e))return o[e]=4,n[e];Kh&&(o[e]=0)}}const l=fu[e];let h,d;if(l)return e==="$attrs"&&dn(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&ke(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ke(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Pe&&ke(r,e)?(r[e]=n,!0):s!==Pe&&ke(s,e)?(s[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Pe&&ke(t,o)||e!==Pe&&ke(e,o)||(a=i[0])&&ke(a,o)||ke(s,o)||ke(fu,o)||ke(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},fS=Xe({},jh,{get(t,e){if(e!==Symbol.unscopables)return jh.get(t,e,t)},has(t,e){return e[0]!=="_"&&!DT(e)}});let Kh=!0;function pS(t){const e=aw(t),n=t.proxy,s=t.ctx;Kh=!1,e.beforeCreate&&Am(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:b,deactivated:_,beforeDestroy:y,beforeUnmount:g,destroyed:I,unmounted:C,render:D,renderTracked:P,renderTriggered:$,errorCaptured:x,serverPrefetch:z,expose:X,inheritAttrs:A,components:T,directives:le,filters:O}=e;if(u&&mS(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const re=o[Z];fe(re)&&(s[Z]=re.bind(n))}if(r){const Z=r.call(n,n);Ze(Z)&&(t.data=ro(Z))}if(Kh=!0,i)for(const Z in i){const re=i[Z],xe=fe(re)?re.bind(n,n):fe(re.get)?re.get.bind(n,n):bn,ps=!fe(re)&&fe(re.set)?re.set.bind(n):bn,mn=xt({get:xe,set:ps});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>mn.value,set:it=>mn.value=it})}if(a)for(const Z in a)ow(a[Z],s,n,Z);if(c){const Z=fe(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(re=>{Zo(re,Z[re])})}l&&Am(l,t,"c");function ee(Z,re){ne(re)?re.forEach(xe=>Z(xe.bind(n))):re&&Z(re.bind(n))}if(ee(Xv,h),ee(io,d),ee(Zv,f),ee(al,p),ee(Qv,b),ee(Jv,_),ee(sw,x),ee(nw,P),ee(tw,$),ee(cl,g),ee(rc,C),ee(ew,z),ne(X))if(X.length){const Z=t.exposed||(t.exposed={});X.forEach(re=>{Object.defineProperty(Z,re,{get:()=>n[re],set:xe=>n[re]=xe})})}else t.exposed||(t.exposed={});D&&t.render===bn&&(t.render=D),A!=null&&(t.inheritAttrs=A),T&&(t.components=T),le&&(t.directives=le)}function mS(t,e,n=bn,s=!1){ne(t)&&(t=Hh(t));for(const r in t){const i=t[r];let o;Ze(i)?"default"in i?o=Vn(i.from||r,i.default,!0):o=Vn(i.from||r):o=Vn(i),lt(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Am(t,e,n){un(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ow(t,e,n,s){const r=s.includes(".")?Wv(n,s):()=>n[s];if(Qe(t)){const i=e[t];fe(i)&&Ai(r,i)}else if(fe(t))Ai(r,t.bind(n));else if(Ze(t))if(ne(t))t.forEach(i=>ow(i,e,n,s));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Ai(r,i,t)}}function aw(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>pu(c,u,o,!0)),pu(c,e,o)),i.set(e,c),c}function pu(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&pu(t,i,n,!0),r&&r.forEach(o=>pu(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=gS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gS={data:Rm,props:ur,emits:ur,methods:ur,computed:ur,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:ur,directives:ur,watch:vS,provide:Rm,inject:yS};function Rm(t,e){return e?t?function(){return Xe(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function yS(t,e){return ur(Hh(t),Hh(e))}function Hh(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function ur(t,e){return t?Xe(Xe(Object.create(null),t),e):e}function vS(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=Ft(t[s],e[s]);return n}function wS(t,e,n,s=!1){const r={},i={};uu(i,ul,1),t.propsDefaults=Object.create(null),cw(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:xv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function _S(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Te(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(sl(t.emitsOptions,d))continue;const f=e[d];if(c)if(ke(i,d))f!==i[d]&&(i[d]=f,u=!0);else{const p=hn(d);r[p]=Gh(c,a,p,f,t,!1)}else f!==i[d]&&(i[d]=f,u=!0)}}}else{cw(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ke(e,h)&&((l=Fn(h))===h||!ke(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Gh(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ke(e,h)&&!0)&&(delete i[h],u=!0)}u&&ss(t,"set","$attrs")}function cw(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(zo(c))continue;const u=e[c];let l;r&&ke(r,l=hn(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:sl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Te(n),u=a||Pe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Gh(r,c,h,u[h],t,!ke(u,h))}}return o}function Gh(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&fe(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Vs(r),s=u[n]=c.call(null,e),Ds())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Fn(n))&&(s=!0))}return s}function uw(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!fe(t)){const l=h=>{c=!0;const[d,f]=uw(h,e,!0);Xe(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return s.set(t,Ti),Ti;if(ne(i))for(let l=0;l<i.length;l++){const h=hn(i[l]);Nm(h)&&(o[h]=Pe)}else if(i)for(const l in i){const h=hn(l);if(Nm(h)){const d=i[l],f=o[h]=ne(d)||fe(d)?{type:d}:d;if(f){const p=Pm(Boolean,f.type),b=Pm(String,f.type);f[0]=p>-1,f[1]=b<0||p<b,(p>-1||ke(f,"default"))&&a.push(h)}}}const u=[o,a];return s.set(t,u),u}function Nm(t){return t[0]!=="$"}function xm(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Dm(t,e){return xm(t)===xm(e)}function Pm(t,e){return ne(e)?e.findIndex(n=>Dm(n,t)):fe(e)&&Dm(e,t)?0:-1}const lw=t=>t[0]==="_"||t==="$stable",pf=t=>ne(t)?t.map(rn):[rn(t)],IS=(t,e,n)=>{if(e._n)return e;const s=Fi((...r)=>pf(e(...r)),n);return s._c=!1,s},hw=(t,e,n)=>{const s=t._ctx;for(const r in t){if(lw(r))continue;const i=t[r];if(fe(i))e[r]=IS(r,i,s);else if(i!=null){const o=pf(i);e[r]=()=>o}}},dw=(t,e)=>{const n=pf(e);t.slots.default=()=>n},bS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Te(e),uu(e,"_",n)):hw(e,t.slots={})}else t.slots={},e&&dw(t,e);uu(t.slots,ul,1)},ES=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,hw(e,r)),o=e}else e&&(dw(t,e),o={default:1});if(i)for(const a in r)!lw(a)&&!(a in o)&&delete r[a]};function fw(){return{app:null,config:{isNativeTag:BT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let TS=0;function SS(t,e){return function(s,r=null){fe(s)||(s=Object.assign({},s)),r!=null&&!Ze(r)&&(r=null);const i=fw(),o=new Set;let a=!1;const c=i.app={_uid:TS++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:xw,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&fe(u.install)?(o.add(u),u.install(c,...l)):fe(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=_e(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,ll(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function mu(t,e,n,s,r=!1){if(ne(t)){t.forEach((d,f)=>mu(d,e&&(ne(e)?e[f]:e),n,s,r));return}if(Cr(s)&&!r)return;const i=s.shapeFlag&4?ll(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Qe(u)?(l[u]=null,ke(h,u)&&(h[u]=null)):lt(u)&&(u.value=null)),fe(c))Un(c,a,12,[o,l]);else{const d=Qe(c),f=lt(c);if(d||f){const p=()=>{if(t.f){const b=d?l[c]:c.value;r?ne(b)&&Kd(b,i):ne(b)?b.includes(i)||b.push(i):d?(l[c]=[i],ke(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ke(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(p.id=-1,bt(p,n)):p()}}}let gs=!1;const Fc=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Uc=t=>t.nodeType===8;function kS(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,l=(y,g)=>{if(!g.hasChildNodes()){n(null,y,g),du(),g._vnode=y;return}gs=!1,h(g.firstChild,y,null,null,null),du(),g._vnode=y,gs&&console.error("Hydration completed but contains mismatches.")},h=(y,g,I,C,D,P=!1)=>{const $=Uc(y)&&y.data==="[",x=()=>b(y,g,I,C,D,$),{type:z,ref:X,shapeFlag:A,patchFlag:T}=g,le=y.nodeType;g.el=y,T===-2&&(P=!1,g.dynamicChildren=null);let O=null;switch(z){case Vi:le!==3?g.children===""?(c(g.el=r(""),o(y),y),O=y):O=x():(y.data!==g.children&&(gs=!0,y.data=g.children),O=i(y));break;case Pt:le!==8||$?O=x():O=i(y);break;case Ar:if(le!==1&&le!==3)O=x();else{O=y;const me=!g.children.length;for(let ee=0;ee<g.staticCount;ee++)me&&(g.children+=O.nodeType===1?O.outerHTML:O.data),ee===g.staticCount-1&&(g.anchor=O),O=i(O);return O}break;case He:$?O=p(y,g,I,C,D,P):O=x();break;default:if(A&1)le!==1||g.type.toLowerCase()!==y.tagName.toLowerCase()?O=x():O=d(y,g,I,C,D,P);else if(A&6){g.slotScopeIds=D;const me=o(y);if(e(g,me,null,I,C,Fc(me),P),O=$?_(y):i(y),O&&Uc(O)&&O.data==="teleport end"&&(O=i(O)),Cr(g)){let ee;$?(ee=_e(He),ee.anchor=O?O.previousSibling:me.lastChild):ee=y.nodeType===3?oo(""):_e("div"),ee.el=y,g.component.subTree=ee}}else A&64?le!==8?O=x():O=g.type.hydrate(y,g,I,C,D,P,t,f):A&128&&(O=g.type.hydrate(y,g,I,C,Fc(o(y)),D,P,t,h))}return X!=null&&mu(X,null,C,g),O},d=(y,g,I,C,D,P)=>{P=P||!!g.dynamicChildren;const{type:$,props:x,patchFlag:z,shapeFlag:X,dirs:A}=g,T=$==="input"&&A||$==="option";if(T||z!==-1){if(A&&Cn(g,null,I,"created"),x)if(T||!P||z&48)for(const O in x)(T&&O.endsWith("value")||Ya(O)&&!zo(O))&&s(y,O,null,x[O],!1,void 0,I);else x.onClick&&s(y,"onClick",null,x.onClick,!1,void 0,I);let le;if((le=x&&x.onVnodeBeforeMount)&&zt(le,I,g),A&&Cn(g,null,I,"beforeMount"),((le=x&&x.onVnodeMounted)||A)&&Hv(()=>{le&&zt(le,I,g),A&&Cn(g,null,I,"mounted")},C),X&16&&!(x&&(x.innerHTML||x.textContent))){let O=f(y.firstChild,g,y,I,C,D,P);for(;O;){gs=!0;const me=O;O=O.nextSibling,a(me)}}else X&8&&y.textContent!==g.children&&(gs=!0,y.textContent=g.children)}return y.nextSibling},f=(y,g,I,C,D,P,$)=>{$=$||!!g.dynamicChildren;const x=g.children,z=x.length;for(let X=0;X<z;X++){const A=$?x[X]:x[X]=rn(x[X]);if(y)y=h(y,A,C,D,P,$);else{if(A.type===Vi&&!A.children)continue;gs=!0,n(null,A,I,null,C,D,Fc(I),P)}}return y},p=(y,g,I,C,D,P)=>{const{slotScopeIds:$}=g;$&&(D=D?D.concat($):$);const x=o(y),z=f(i(y),g,x,I,C,D,P);return z&&Uc(z)&&z.data==="]"?i(g.anchor=z):(gs=!0,c(g.anchor=u("]"),x,z),z)},b=(y,g,I,C,D,P)=>{if(gs=!0,g.el=null,P){const z=_(y);for(;;){const X=i(y);if(X&&X!==z)a(X);else break}}const $=i(y),x=o(y);return a(y),n(null,g,x,$,I,C,Fc(x),D),$},_=y=>{let g=0;for(;y;)if(y=i(y),y&&Uc(y)&&(y.data==="["&&g++,y.data==="]")){if(g===0)return i(y);g--}return y};return[l,h]}const bt=Hv;function pw(t){return gw(t)}function mw(t){return gw(t,kS)}function gw(t,e){const n=GT();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=bn,cloneNode:p,insertStaticContent:b}=t,_=(m,v,k,F=null,L=null,j=null,Q=!1,q=null,H=!!v.dynamicChildren)=>{if(m===v)return;m&&!Rn(m,v)&&(F=ie(m),De(m,L,j,!0),m=null),v.patchFlag===-2&&(H=!1,v.dynamicChildren=null);const{type:V,ref:ae,shapeFlag:te}=v;switch(V){case Vi:y(m,v,k,F);break;case Pt:g(m,v,k,F);break;case Ar:m==null&&I(v,k,F,Q);break;case He:le(m,v,k,F,L,j,Q,q,H);break;default:te&1?P(m,v,k,F,L,j,Q,q,H):te&6?O(m,v,k,F,L,j,Q,q,H):(te&64||te&128)&&V.process(m,v,k,F,L,j,Q,q,H,Be)}ae!=null&&L&&mu(ae,m&&m.ref,j,v||m,!v)},y=(m,v,k,F)=>{if(m==null)s(v.el=a(v.children),k,F);else{const L=v.el=m.el;v.children!==m.children&&u(L,v.children)}},g=(m,v,k,F)=>{m==null?s(v.el=c(v.children||""),k,F):v.el=m.el},I=(m,v,k,F)=>{[m.el,m.anchor]=b(m.children,v,k,F,m.el,m.anchor)},C=({el:m,anchor:v},k,F)=>{let L;for(;m&&m!==v;)L=d(m),s(m,k,F),m=L;s(v,k,F)},D=({el:m,anchor:v})=>{let k;for(;m&&m!==v;)k=d(m),r(m),m=k;r(v)},P=(m,v,k,F,L,j,Q,q,H)=>{Q=Q||v.type==="svg",m==null?$(v,k,F,L,j,Q,q,H):X(m,v,L,j,Q,q,H)},$=(m,v,k,F,L,j,Q,q)=>{let H,V;const{type:ae,props:te,shapeFlag:ce,transition:ge,patchFlag:Ae,dirs:Fe}=m;if(m.el&&p!==void 0&&Ae===-1)H=m.el=p(m.el);else{if(H=m.el=o(m.type,j,te&&te.is,te),ce&8?l(H,m.children):ce&16&&z(m.children,H,null,F,L,j&&ae!=="foreignObject",Q,q),Fe&&Cn(m,null,F,"created"),te){for(const qe in te)qe!=="value"&&!zo(qe)&&i(H,qe,null,te[qe],j,m.children,F,L,G);"value"in te&&i(H,"value",null,te.value),(V=te.onVnodeBeforeMount)&&zt(V,F,m)}x(H,m,m.scopeId,Q,F)}Fe&&Cn(m,null,F,"beforeMount");const Ue=(!L||L&&!L.pendingBranch)&&ge&&!ge.persisted;Ue&&ge.beforeEnter(H),s(H,v,k),((V=te&&te.onVnodeMounted)||Ue||Fe)&&bt(()=>{V&&zt(V,F,m),Ue&&ge.enter(H),Fe&&Cn(m,null,F,"mounted")},L)},x=(m,v,k,F,L)=>{if(k&&f(m,k),F)for(let j=0;j<F.length;j++)f(m,F[j]);if(L){let j=L.subTree;if(v===j){const Q=L.vnode;x(m,Q,Q.scopeId,Q.slotScopeIds,L.parent)}}},z=(m,v,k,F,L,j,Q,q,H=0)=>{for(let V=H;V<m.length;V++){const ae=m[V]=q?Ts(m[V]):rn(m[V]);_(null,ae,v,k,F,L,j,Q,q)}},X=(m,v,k,F,L,j,Q)=>{const q=v.el=m.el;let{patchFlag:H,dynamicChildren:V,dirs:ae}=v;H|=m.patchFlag&16;const te=m.props||Pe,ce=v.props||Pe;let ge;k&&ir(k,!1),(ge=ce.onVnodeBeforeUpdate)&&zt(ge,k,v,m),ae&&Cn(v,m,k,"beforeUpdate"),k&&ir(k,!0);const Ae=L&&v.type!=="foreignObject";if(V?A(m.dynamicChildren,V,q,k,F,Ae,j):Q||xe(m,v,q,null,k,F,Ae,j,!1),H>0){if(H&16)T(q,v,te,ce,k,F,L);else if(H&2&&te.class!==ce.class&&i(q,"class",null,ce.class,L),H&4&&i(q,"style",te.style,ce.style,L),H&8){const Fe=v.dynamicProps;for(let Ue=0;Ue<Fe.length;Ue++){const qe=Fe[Ue],wn=te[qe],ui=ce[qe];(ui!==wn||qe==="value")&&i(q,qe,wn,ui,L,m.children,k,F,G)}}H&1&&m.children!==v.children&&l(q,v.children)}else!Q&&V==null&&T(q,v,te,ce,k,F,L);((ge=ce.onVnodeUpdated)||ae)&&bt(()=>{ge&&zt(ge,k,v,m),ae&&Cn(v,m,k,"updated")},F)},A=(m,v,k,F,L,j,Q)=>{for(let q=0;q<v.length;q++){const H=m[q],V=v[q],ae=H.el&&(H.type===He||!Rn(H,V)||H.shapeFlag&70)?h(H.el):k;_(H,V,ae,null,F,L,j,Q,!0)}},T=(m,v,k,F,L,j,Q)=>{if(k!==F){for(const q in F){if(zo(q))continue;const H=F[q],V=k[q];H!==V&&q!=="value"&&i(m,q,V,H,Q,v.children,L,j,G)}if(k!==Pe)for(const q in k)!zo(q)&&!(q in F)&&i(m,q,k[q],null,Q,v.children,L,j,G);"value"in F&&i(m,"value",k.value,F.value)}},le=(m,v,k,F,L,j,Q,q,H)=>{const V=v.el=m?m.el:a(""),ae=v.anchor=m?m.anchor:a("");let{patchFlag:te,dynamicChildren:ce,slotScopeIds:ge}=v;ge&&(q=q?q.concat(ge):ge),m==null?(s(V,k,F),s(ae,k,F),z(v.children,k,ae,L,j,Q,q,H)):te>0&&te&64&&ce&&m.dynamicChildren?(A(m.dynamicChildren,ce,k,L,j,Q,q),(v.key!=null||L&&v===L.subTree)&&mf(m,v,!0)):xe(m,v,k,ae,L,j,Q,q,H)},O=(m,v,k,F,L,j,Q,q,H)=>{v.slotScopeIds=q,m==null?v.shapeFlag&512?L.ctx.activate(v,k,F,Q,H):me(v,k,F,L,j,Q,H):ee(m,v,H)},me=(m,v,k,F,L,j,Q)=>{const q=m.component=bw(m,F,L);if(sc(m)&&(q.ctx.renderer=Be),Tw(q),q.asyncDep){if(L&&L.registerDep(q,Z),!m.el){const H=q.subTree=_e(Pt);g(null,H,v,k)}return}Z(q,m,v,k,L,j,Q)},ee=(m,v,k)=>{const F=v.component=m.component;if(W0(m,v,k))if(F.asyncDep&&!F.asyncResolved){re(F,v,k);return}else F.next=v,B0(F.update),F.update();else v.el=m.el,F.vnode=v},Z=(m,v,k,F,L,j,Q)=>{const q=()=>{if(m.isMounted){let{next:ae,bu:te,u:ce,parent:ge,vnode:Ae}=m,Fe=ae,Ue;ir(m,!1),ae?(ae.el=Ae.el,re(m,ae,Q)):ae=Ae,te&&ki(te),(Ue=ae.props&&ae.props.onVnodeBeforeUpdate)&&zt(Ue,ge,ae,Ae),ir(m,!0);const qe=Xc(m),wn=m.subTree;m.subTree=qe,_(wn,qe,h(wn.el),ie(wn),m,L,j),ae.el=qe.el,Fe===null&&cf(m,qe.el),ce&&bt(ce,L),(Ue=ae.props&&ae.props.onVnodeUpdated)&&bt(()=>zt(Ue,ge,ae,Ae),L)}else{let ae;const{el:te,props:ce}=v,{bm:ge,m:Ae,parent:Fe}=m,Ue=Cr(v);if(ir(m,!1),ge&&ki(ge),!Ue&&(ae=ce&&ce.onVnodeBeforeMount)&&zt(ae,Fe,v),ir(m,!0),te&&Ie){const qe=()=>{m.subTree=Xc(m),Ie(te,m.subTree,m,L,null)};Ue?v.type.__asyncLoader().then(()=>!m.isUnmounted&&qe()):qe()}else{const qe=m.subTree=Xc(m);_(null,qe,k,F,m,L,j),v.el=qe.el}if(Ae&&bt(Ae,L),!Ue&&(ae=ce&&ce.onVnodeMounted)){const qe=v;bt(()=>zt(ae,Fe,qe),L)}(v.shapeFlag&256||Fe&&Cr(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&m.a&&bt(m.a,L),m.isMounted=!0,v=k=F=null}},H=m.effect=new ec(q,()=>sf(V),m.scope),V=m.update=()=>H.run();V.id=m.uid,ir(m,!0),V()},re=(m,v,k)=>{v.component=m;const F=m.vnode.props;m.vnode=v,m.next=null,_S(m,v.props,F,k),ES(m,v.children,k),Yr(),nl(void 0,m.update),Xr()},xe=(m,v,k,F,L,j,Q,q,H=!1)=>{const V=m&&m.children,ae=m?m.shapeFlag:0,te=v.children,{patchFlag:ce,shapeFlag:ge}=v;if(ce>0){if(ce&128){mn(V,te,k,F,L,j,Q,q,H);return}else if(ce&256){ps(V,te,k,F,L,j,Q,q,H);return}}ge&8?(ae&16&&G(V,L,j),te!==V&&l(k,te)):ae&16?ge&16?mn(V,te,k,F,L,j,Q,q,H):G(V,L,j,!0):(ae&8&&l(k,""),ge&16&&z(te,k,F,L,j,Q,q,H))},ps=(m,v,k,F,L,j,Q,q,H)=>{m=m||Ti,v=v||Ti;const V=m.length,ae=v.length,te=Math.min(V,ae);let ce;for(ce=0;ce<te;ce++){const ge=v[ce]=H?Ts(v[ce]):rn(v[ce]);_(m[ce],ge,k,null,L,j,Q,q,H)}V>ae?G(m,L,j,!0,!1,te):z(v,k,F,L,j,Q,q,H,te)},mn=(m,v,k,F,L,j,Q,q,H)=>{let V=0;const ae=v.length;let te=m.length-1,ce=ae-1;for(;V<=te&&V<=ce;){const ge=m[V],Ae=v[V]=H?Ts(v[V]):rn(v[V]);if(Rn(ge,Ae))_(ge,Ae,k,null,L,j,Q,q,H);else break;V++}for(;V<=te&&V<=ce;){const ge=m[te],Ae=v[ce]=H?Ts(v[ce]):rn(v[ce]);if(Rn(ge,Ae))_(ge,Ae,k,null,L,j,Q,q,H);else break;te--,ce--}if(V>te){if(V<=ce){const ge=ce+1,Ae=ge<ae?v[ge].el:F;for(;V<=ce;)_(null,v[V]=H?Ts(v[V]):rn(v[V]),k,Ae,L,j,Q,q,H),V++}}else if(V>ce)for(;V<=te;)De(m[V],L,j,!0),V++;else{const ge=V,Ae=V,Fe=new Map;for(V=Ae;V<=ce;V++){const tn=v[V]=H?Ts(v[V]):rn(v[V]);tn.key!=null&&Fe.set(tn.key,V)}let Ue,qe=0;const wn=ce-Ae+1;let ui=!1,hm=0;const So=new Array(wn);for(V=0;V<wn;V++)So[V]=0;for(V=ge;V<=te;V++){const tn=m[V];if(qe>=wn){De(tn,L,j,!0);continue}let kn;if(tn.key!=null)kn=Fe.get(tn.key);else for(Ue=Ae;Ue<=ce;Ue++)if(So[Ue-Ae]===0&&Rn(tn,v[Ue])){kn=Ue;break}kn===void 0?De(tn,L,j,!0):(So[kn-Ae]=V+1,kn>=hm?hm=kn:ui=!0,_(tn,v[kn],k,null,L,j,Q,q,H),qe++)}const dm=ui?CS(So):Ti;for(Ue=dm.length-1,V=wn-1;V>=0;V--){const tn=Ae+V,kn=v[tn],fm=tn+1<ae?v[tn+1].el:F;So[V]===0?_(null,kn,k,fm,L,j,Q,q,H):ui&&(Ue<0||V!==dm[Ue]?it(kn,k,fm,2):Ue--)}}},it=(m,v,k,F,L=null)=>{const{el:j,type:Q,transition:q,children:H,shapeFlag:V}=m;if(V&6){it(m.component.subTree,v,k,F);return}if(V&128){m.suspense.move(v,k,F);return}if(V&64){Q.move(m,v,k,Be);return}if(Q===He){s(j,v,k);for(let te=0;te<H.length;te++)it(H[te],v,k,F);s(m.anchor,v,k);return}if(Q===Ar){C(m,v,k);return}if(F!==2&&V&1&&q)if(F===0)q.beforeEnter(j),s(j,v,k),bt(()=>q.enter(j),L);else{const{leave:te,delayLeave:ce,afterLeave:ge}=q,Ae=()=>s(j,v,k),Fe=()=>{te(j,()=>{Ae(),ge&&ge()})};ce?ce(j,Ae,Fe):Fe()}else s(j,v,k)},De=(m,v,k,F=!1,L=!1)=>{const{type:j,props:Q,ref:q,children:H,dynamicChildren:V,shapeFlag:ae,patchFlag:te,dirs:ce}=m;if(q!=null&&mu(q,null,k,m,!0),ae&256){v.ctx.deactivate(m);return}const ge=ae&1&&ce,Ae=!Cr(m);let Fe;if(Ae&&(Fe=Q&&Q.onVnodeBeforeUnmount)&&zt(Fe,v,m),ae&6)se(m.component,k,F);else{if(ae&128){m.suspense.unmount(k,F);return}ge&&Cn(m,null,v,"beforeUnmount"),ae&64?m.type.remove(m,v,k,L,Be,F):V&&(j!==He||te>0&&te&64)?G(V,v,k,!1,!0):(j===He&&te&384||!L&&ae&16)&&G(H,v,k),F&&Mt(m)}(Ae&&(Fe=Q&&Q.onVnodeUnmounted)||ge)&&bt(()=>{Fe&&zt(Fe,v,m),ge&&Cn(m,null,v,"unmounted")},k)},Mt=m=>{const{type:v,el:k,anchor:F,transition:L}=m;if(v===He){N(k,F);return}if(v===Ar){D(m);return}const j=()=>{r(k),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(m.shapeFlag&1&&L&&!L.persisted){const{leave:Q,delayLeave:q}=L,H=()=>Q(k,j);q?q(m.el,j,H):H()}else j()},N=(m,v)=>{let k;for(;m!==v;)k=d(m),r(m),m=k;r(v)},se=(m,v,k)=>{const{bum:F,scope:L,update:j,subTree:Q,um:q}=m;F&&ki(F),L.stop(),j&&(j.active=!1,De(Q,m,v,k)),q&&bt(q,v),bt(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},G=(m,v,k,F=!1,L=!1,j=0)=>{for(let Q=j;Q<m.length;Q++)De(m[Q],v,k,F,L)},ie=m=>m.shapeFlag&6?ie(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),Me=(m,v,k)=>{m==null?v._vnode&&De(v._vnode,null,null,!0):_(v._vnode||null,m,v,null,null,null,k),du(),v._vnode=m},Be={p:_,um:De,m:it,r:Mt,mt:me,mc:z,pc:xe,pbc:A,n:ie,o:t};let Ee,Ie;return e&&([Ee,Ie]=e(Be)),{render:Me,hydrate:Ee,createApp:SS(Me,Ee)}}function ir({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mf(t,e,n=!1){const s=t.children,r=e.children;if(ne(s)&&ne(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ts(r[i]),a.el=o.el),n||mf(o,a))}}function CS(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const AS=t=>t.__isTeleport,ea=t=>t&&(t.disabled||t.disabled===""),Om=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Wh=(t,e)=>{const n=t&&t.to;return Qe(n)?e?e(n):null:n},RS={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:b,createComment:_}}=u,y=ea(e.props);let{shapeFlag:g,children:I,dynamicChildren:C}=e;if(t==null){const D=e.el=b(""),P=e.anchor=b("");f(D,n,s),f(P,n,s);const $=e.target=Wh(e.props,p),x=e.targetAnchor=b("");$&&(f(x,$),o=o||Om($));const z=(X,A)=>{g&16&&l(I,X,A,r,i,o,a,c)};y?z(n,P):$&&z($,x)}else{e.el=t.el;const D=e.anchor=t.anchor,P=e.target=t.target,$=e.targetAnchor=t.targetAnchor,x=ea(t.props),z=x?n:P,X=x?D:$;if(o=o||Om(P),C?(d(t.dynamicChildren,C,z,r,i,o,a),mf(t,e,!0)):c||h(t,e,z,X,r,i,o,a,!1),y)x||Vc(e,n,D,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const A=e.target=Wh(e.props,p);A&&Vc(e,A,null,u,0)}else x&&Vc(e,P,$,u,1)}},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=t;if(h&&i(l),(o||!ea(d))&&(i(u),a&16))for(let f=0;f<c.length;f++){const p=c[f];r(p,e,n,!0,!!p.dynamicChildren)}},move:Vc,hydrate:NS};function Vc(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,h=i===2;if(h&&s(o,e,n),(!h||ea(l))&&c&16)for(let d=0;d<u.length;d++)r(u[d],e,n,2);h&&s(a,e,n)}function NS(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=e.target=Wh(e.props,c);if(l){const h=l._lpa||l.firstChild;if(e.shapeFlag&16)if(ea(e.props))e.anchor=u(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,l._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(h,e,l,n,s,r,i)}}return e.anchor&&o(e.anchor)}const xS=RS,He=Symbol(void 0),Vi=Symbol(void 0),Pt=Symbol(void 0),Ar=Symbol(void 0),ta=[];let Yt=null;function ue(t=!1){ta.push(Yt=t?null:[])}function yw(){ta.pop(),Yt=ta[ta.length-1]||null}let Pr=1;function zh(t){Pr+=t}function vw(t){return t.dynamicChildren=Pr>0?Yt||Ti:null,yw(),Pr>0&&Yt&&Yt.push(t),t}function ye(t,e,n,s,r,i){return vw(R(t,e,n,s,r,i,!0))}function An(t,e,n,s,r){return vw(_e(t,e,n,s,r,!0))}function Us(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}function DS(t){}const ul="__vInternal",ww=({key:t})=>t!=null?t:null,Zc=({ref:t,ref_key:e,ref_for:n})=>t!=null?Qe(t)||lt(t)||fe(t)?{i:Dt,r:t,k:e,f:!!n}:t:null;function R(t,e=null,n=null,s=0,r=null,i=t===He?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ww(e),ref:e&&Zc(e),scopeId:rl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(gf(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),Pr>0&&!o&&Yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Yt.push(c),c}const _e=PS;function PS(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===rw)&&(t=Pt),Us(t)){const a=jn(t,e,!0);return n&&gf(a,n),Pr>0&&!i&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(jS(t)&&(t=t.__vccOpts),e){e=_w(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=Je(a)),Ze(c)&&(Yd(c)&&!ne(c)&&(c=Xe({},c)),e.style=Ja(c))}const o=Qe(t)?1:jv(t)?128:AS(t)?64:Ze(t)?4:fe(t)?2:0;return R(t,e,n,s,r,o,i,!0)}function _w(t){return t?Yd(t)||ul in t?Xe({},t):t:null}function jn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Iw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ww(a),ref:e&&e.ref?n&&r?ne(r)?r.concat(Zc(e)):[r,Zc(e)]:Zc(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor}}function oo(t=" ",e=0){return _e(Vi,null,t,e)}function OS(t,e){const n=_e(Ar,null,t);return n.staticCount=e,n}function Wt(t="",e=!1){return e?(ue(),An(Pt,null,t)):_e(Pt,null,t)}function rn(t){return t==null||typeof t=="boolean"?_e(Pt):ne(t)?_e(He,null,t.slice()):typeof t=="object"?Ts(t):_e(Vi,null,String(t))}function Ts(t){return t.el===null||t.memo?t:jn(t)}function gf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),gf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ul in e)?e._ctx=Dt:r===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),s&64?(n=16,e=[oo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Iw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Je([e.class,s.class]));else if(r==="style")e.style=Ja([e.style,s.style]);else if(Ya(r)){const i=e[r],o=s[r];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function zt(t,e,n,s=null){un(t,e,7,[n,s])}const LS=fw();let MS=0;function bw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||LS,i={uid:MS++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uw(s,r),emitsOptions:qv(s,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=q0.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const Ys=()=>ut||Dt,Vs=t=>{ut=t,t.scope.on()},Ds=()=>{ut&&ut.scope.off(),ut=null};function Ew(t){return t.vnode.shapeFlag&4}let Bi=!1;function Tw(t,e=!1){Bi=e;const{props:n,children:s}=t.vnode,r=Ew(t);wS(t,n,r,e),bS(t,s);const i=r?FS(t,e):void 0;return Bi=!1,i}function FS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xd(new Proxy(t.ctx,jh));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?kw(t):null;Vs(t),Yr();const i=Un(s,t,0,[t.props,r]);if(Xr(),Ds(),Hd(i)){if(i.then(Ds,Ds),e)return i.then(o=>{Qh(t,o,e)}).catch(o=>{Zr(o,t,0)});t.asyncDep=i}else Qh(t,i,e)}else Sw(t,e)}function Qh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ze(e)&&(t.setupState=tf(e)),Sw(t,n)}let gu,Jh;function US(t){gu=t,Jh=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,fS))}}const VS=()=>!gu;function Sw(t,e,n){const s=t.type;if(!t.render){if(!e&&gu&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Xe(Xe({isCustomElement:i,delimiters:a},o),c);s.render=gu(r,u)}}t.render=s.render||bn,Jh&&Jh(t)}Vs(t),Yr(),pS(t),Xr(),Ds()}function BS(t){return new Proxy(t.attrs,{get(e,n){return dn(t,"get","$attrs"),e[n]}})}function kw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=BS(t))},slots:t.slots,emit:t.emit,expose:e}}function ll(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(tf(Xd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fu)return fu[n](t)}}))}const $S=/(?:^|[-_])(\w)/g,qS=t=>t.replace($S,e=>e.toUpperCase()).replace(/[-_]/g,"");function yu(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Cw(t,e,n=!1){let s=yu(e);if(!s&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&t&&t.parent){const r=i=>{for(const o in i)if(i[o]===e)return o};s=r(t.components||t.parent.type.components)||r(t.appContext.components)}return s?qS(s):n?"App":"Anonymous"}function jS(t){return fe(t)&&"__vccOpts"in t}const xt=(t,e)=>P0(t,e,Bi);function KS(){return null}function HS(){return null}function GS(t){}function WS(t,e){return null}function zS(){return Aw().slots}function QS(){return Aw().attrs}function Aw(){const t=Ys();return t.setupContext||(t.setupContext=kw(t))}function JS(t,e){const n=ne(t)?t.reduce((s,r)=>(s[r]={},s),{}):t;for(const s in e){const r=n[s];r?ne(r)||fe(r)?n[s]={type:r,default:e[s]}:r.default=e[s]:r===null&&(n[s]={default:e[s]})}return n}function YS(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function XS(t){const e=Ys();let n=t();return Ds(),Hd(n)&&(n=n.catch(s=>{throw Vs(e),s})),[n,()=>Vs(e)]}function ic(t,e,n){const s=arguments.length;return s===2?Ze(e)&&!ne(e)?Us(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Us(n)&&(n=[n]),_e(t,e,n))}const Rw=Symbol(""),ZS=()=>{{const t=Vn(Rw);return t||Lv("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function ek(){}function tk(t,e,n,s){const r=n[s];if(r&&Nw(r,t))return r;const i=e();return i.memo=t.slice(),n[s]=i}function Nw(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(Li(n[s],e[s]))return!1;return Pr>0&&Yt&&Yt.push(t),!0}const xw="3.2.37",nk={createComponentInstance:bw,setupComponent:Tw,renderComponentRoot:Xc,setCurrentRenderingInstance:wa,isVNode:Us,normalizeVNode:rn},sk=nk,rk=null,ik=null,ok="http://www.w3.org/2000/svg",fr=typeof document<"u"?document:null,Lm=fr&&fr.createElement("template"),ak={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?fr.createElementNS(ok,t):fr.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>fr.createTextNode(t),createComment:t=>fr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Lm.innerHTML=s?`<svg>${t}</svg>`:t;const a=Lm.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ck(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uk(t,e,n){const s=t.style,r=Qe(n);if(n&&!r){for(const i in n)Yh(s,i,n[i]);if(e&&!Qe(e))for(const i in e)n[i]==null&&Yh(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Mm=/\s*!important$/;function Yh(t,e,n){if(ne(n))n.forEach(s=>Yh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=lk(t,e);Mm.test(n)?t.setProperty(Fn(s),n.replace(Mm,""),"important"):t[s]=n}}const Fm=["Webkit","Moz","ms"],ch={};function lk(t,e){const n=ch[e];if(n)return n;let s=hn(e);if(s!=="filter"&&s in t)return ch[e]=s;s=Za(s);for(let r=0;r<Fm.length;r++){const i=Fm[r]+s;if(i in t)return ch[e]=i}return e}const Um="http://www.w3.org/1999/xlink";function hk(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Um,e.slice(6,e.length)):t.setAttributeNS(Um,e,n);else{const i=OT(e);n==null||i&&!pv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function dk(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=pv(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Dw,fk]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Xh=0;const pk=Promise.resolve(),mk=()=>{Xh=0},gk=()=>Xh||(pk.then(mk),Xh=Dw());function Xn(t,e,n,s){t.addEventListener(e,n,s)}function yk(t,e,n,s){t.removeEventListener(e,n,s)}function vk(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=wk(e);if(s){const u=i[e]=_k(s,r);Xn(t,a,u,c)}else o&&(yk(t,a,o,c),i[e]=void 0)}}const Vm=/(?:Once|Passive|Capture)$/;function wk(t){let e;if(Vm.test(t)){e={};let n;for(;n=t.match(Vm);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Fn(t.slice(2)),e]}function _k(t,e){const n=s=>{const r=s.timeStamp||Dw();(fk||r>=n.attached-1)&&un(Ik(s,n.value),e,5,[s])};return n.value=t,n.attached=gk(),n}function Ik(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Bm=/^on[a-z]/,bk=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?ck(t,s,r):e==="style"?uk(t,n,s):Ya(e)?jd(e)||vk(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ek(t,e,s,r))?dk(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),hk(t,e,s,r))};function Ek(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Bm.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bm.test(e)&&Qe(n)?!1:e in t}function Pw(t,e){const n=nc(t);class s extends hl{constructor(i){super(n,i,e)}}return s.def=n,s}const Tk=t=>Pw(t,Ww),Sk=typeof HTMLElement<"u"?HTMLElement:class{};class hl extends Sk{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,tl(()=>{this._connected||(Ia(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const e=s=>{const{props:r,styles:i}=s,o=!ne(r),a=r?o?Object.keys(r):r:[];let c;if(o)for(const u in this._props){const l=r[u];(l===Number||l&&l.type===Number)&&(this._props[u]=Ms(this._props[u]),(c||(c=Object.create(null)))[u]=!0)}this._numberProps=c;for(const u of Object.keys(this))u[0]!=="_"&&this._setProp(u,this[u],!0,!1);for(const u of a.map(hn))Object.defineProperty(this,u,{get(){return this._getProp(u)},set(l){this._setProp(u,l)}});this._applyStyles(i),this._update()},n=this._def.__asyncLoader;n?n().then(e):e(this._def)}_setAttr(e){let n=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(n=Ms(n)),this._setProp(hn(e),n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,r=!0){n!==this._props[e]&&(this._props[e]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Fn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Fn(e),n+""):n||this.removeAttribute(Fn(e))))}_update(){Ia(this._createVNode(),this.shadowRoot)}_createVNode(){const e=_e(this._def,Xe({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(r,...i)=>{this.dispatchEvent(new CustomEvent(r,{detail:i}))};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof hl){n.parent=s._instance;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function kk(t="$style"){{const e=Ys();if(!e)return Pe;const n=e.type.__cssModules;if(!n)return Pe;const s=n[t];return s||Pe}}function Ck(t){const e=Ys();if(!e)return;const n=()=>Zh(e.subTree,t(e.proxy));Gv(n),io(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),rc(()=>s.disconnect())})}function Zh(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Zh(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)$m(t.el,e);else if(t.type===He)t.children.forEach(n=>Zh(n,e));else if(t.type===Ar){let{el:n,anchor:s}=t;for(;n&&($m(n,e),n!==s);)n=n.nextSibling}}function $m(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const ys="transition",ko="animation",dl=(t,{slots:e})=>ic(hf,Lw(t),e);dl.displayName="Transition";const Ow={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ak=dl.props=Xe({},hf.props,Ow),or=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},qm=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Lw(t){const e={};for(const T in t)T in Ow||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=Rk(r),b=p&&p[0],_=p&&p[1],{onBeforeEnter:y,onEnter:g,onEnterCancelled:I,onLeave:C,onLeaveCancelled:D,onBeforeAppear:P=y,onAppear:$=g,onAppearCancelled:x=I}=e,z=(T,le,O)=>{Es(T,le?l:a),Es(T,le?u:o),O&&O()},X=(T,le)=>{T._isLeaving=!1,Es(T,h),Es(T,f),Es(T,d),le&&le()},A=T=>(le,O)=>{const me=T?$:g,ee=()=>z(le,T,O);or(me,[le,ee]),jm(()=>{Es(le,T?c:i),Qn(le,T?l:a),qm(me)||Km(le,s,b,ee)})};return Xe(e,{onBeforeEnter(T){or(y,[T]),Qn(T,i),Qn(T,o)},onBeforeAppear(T){or(P,[T]),Qn(T,c),Qn(T,u)},onEnter:A(!1),onAppear:A(!0),onLeave(T,le){T._isLeaving=!0;const O=()=>X(T,le);Qn(T,h),Fw(),Qn(T,d),jm(()=>{!T._isLeaving||(Es(T,h),Qn(T,f),qm(C)||Km(T,s,_,O))}),or(C,[T,O])},onEnterCancelled(T){z(T,!1),or(I,[T])},onAppearCancelled(T){z(T,!0),or(x,[T])},onLeaveCancelled(T){X(T),or(D,[T])}})}function Rk(t){if(t==null)return null;if(Ze(t))return[uh(t.enter),uh(t.leave)];{const e=uh(t);return[e,e]}}function uh(t){return Ms(t)}function Qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Es(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function jm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Nk=0;function Km(t,e,n,s){const r=t._endId=++Nk,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Mw(t,e);if(!o)return s();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),i()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function Mw(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),r=s(ys+"Delay"),i=s(ys+"Duration"),o=Hm(r,i),a=s(ko+"Delay"),c=s(ko+"Duration"),u=Hm(a,c);let l=null,h=0,d=0;e===ys?o>0&&(l=ys,h=o,d=i.length):e===ko?u>0&&(l=ko,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?ys:ko:null,d=l?l===ys?i.length:c.length:0);const f=l===ys&&/\b(transform|all)(,|$)/.test(n[ys+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Hm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Gm(n)+Gm(t[s])))}function Gm(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Fw(){return document.body.offsetHeight}const Uw=new WeakMap,Vw=new WeakMap,xk={name:"TransitionGroup",props:Xe({},Ak,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ys(),s=lf();let r,i;return al(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Mk(r[0].el,n.vnode.el,o))return;r.forEach(Pk),r.forEach(Ok);const a=r.filter(Lk);Fw(),a.forEach(c=>{const u=c.el,l=u.style;Qn(u,o),l.transform=l.webkitTransform=l.transitionDuration="";const h=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",h),u._moveCb=null,Es(u,o))};u.addEventListener("transitionend",h)})}),()=>{const o=Te(t),a=Lw(o);let c=o.tag||He;r=i,i=e.default?il(e.default()):[];for(let u=0;u<i.length;u++){const l=i[u];l.key!=null&&Dr(l,Ui(l,a,s,n))}if(r)for(let u=0;u<r.length;u++){const l=r[u];Dr(l,Ui(l,a,s,n)),Uw.set(l,l.el.getBoundingClientRect())}return _e(c,null,i)}}},Dk=xk;function Pk(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Ok(t){Vw.set(t,t.el.getBoundingClientRect())}function Lk(t){const e=Uw.get(t),n=Vw.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function Mk(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Mw(s);return r.removeChild(s),i}const Bs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>ki(e,n):e};function Fk(t){t.target.composing=!0}function Wm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ut={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Bs(r);const i=s||r.props&&r.props.type==="number";Xn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ms(a)),t._assign(a)}),n&&Xn(t,"change",()=>{t.value=t.value.trim()}),e||(Xn(t,"compositionstart",Fk),Xn(t,"compositionend",Wm),Xn(t,"change",Wm))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Bs(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ms(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},yf={deep:!0,created(t,e,n){t._assign=Bs(n),Xn(t,"change",()=>{const s=t._modelValue,r=$i(t),i=t.checked,o=t._assign;if(ne(s)){const a=zu(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(Jr(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o($w(t,i))})},mounted:zm,beforeUpdate(t,e,n){t._assign=Bs(n),zm(t,e,n)}};function zm(t,{value:e,oldValue:n},s){t._modelValue=e,ne(e)?t.checked=zu(e,s.props.value)>-1:Jr(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Ls(e,$w(t,!0)))}const vf={created(t,{value:e},n){t.checked=Ls(e,n.props.value),t._assign=Bs(n),Xn(t,"change",()=>{t._assign($i(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Bs(s),e!==n&&(t.checked=Ls(e,s.props.value))}},Bw={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Jr(e);Xn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ms($i(o)):$i(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Bs(s)},mounted(t,{value:e}){Qm(t,e)},beforeUpdate(t,e,n){t._assign=Bs(n)},updated(t,{value:e}){Qm(t,e)}};function Qm(t,e){const n=t.multiple;if(!(n&&!ne(e)&&!Jr(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=$i(i);if(n)ne(e)?i.selected=zu(e,o)>-1:i.selected=e.has(o);else if(Ls($i(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $i(t){return"_value"in t?t._value:t.value}function $w(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const qw={created(t,e,n){Bc(t,e,n,null,"created")},mounted(t,e,n){Bc(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Bc(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Bc(t,e,n,s,"updated")}};function jw(t,e){switch(t){case"SELECT":return Bw;case"TEXTAREA":return Ut;default:switch(e){case"checkbox":return yf;case"radio":return vf;default:return Ut}}}function Bc(t,e,n,s,r){const o=jw(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}function Uk(){Ut.getSSRProps=({value:t})=>({value:t}),vf.getSSRProps=({value:t},e)=>{if(e.props&&Ls(e.props.value,t))return{checked:!0}},yf.getSSRProps=({value:t},e)=>{if(ne(t)){if(e.props&&zu(t,e.props.value)>-1)return{checked:!0}}else if(Jr(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},qw.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=jw(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const Vk=["ctrl","shift","alt","meta"],Bk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Vk.some(n=>t[`${n}Key`]&&!e.includes(n))},$k=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Bk[e[r]];if(i&&i(n,e))return}return t(n,...s)},qk={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Jn=(t,e)=>n=>{if(!("key"in n))return;const s=Fn(n.key);if(e.some(r=>r===s||qk[r]===s))return t(n)},wf={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Co(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Co(t,!0),s.enter(t)):s.leave(t,()=>{Co(t,!1)}):Co(t,e))},beforeUnmount(t,{value:e}){Co(t,e)}};function Co(t,e){t.style.display=e?t._vod:"none"}function jk(){wf.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Kw=Xe({patchProp:bk},ak);let na,Jm=!1;function Hw(){return na||(na=pw(Kw))}function Gw(){return na=Jm?na:mw(Kw),Jm=!0,na}const Ia=(...t)=>{Hw().render(...t)},Ww=(...t)=>{Gw().hydrate(...t)},zw=(...t)=>{const e=Hw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Qw(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},Kk=(...t)=>{const e=Gw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Qw(s);if(r)return n(r,!0,r instanceof SVGElement)},e};function Qw(t){return Qe(t)?document.querySelector(t):t}let Ym=!1;const Hk=()=>{Ym||(Ym=!0,Uk(),jk())},Gk=()=>{},Wk=Object.freeze(Object.defineProperty({__proto__:null,compile:Gk,EffectScope:Wd,ReactiveEffect:ec,customRef:R0,effect:XT,effectScope:WT,getCurrentScope:zT,isProxy:Yd,isReactive:kr,isReadonly:Mi,isRef:lt,isShallow:lu,markRaw:Xd,onScopeDispose:QT,proxyRefs:tf,reactive:ro,readonly:Jd,ref:Oe,shallowReactive:xv,shallowReadonly:T0,shallowRef:Dv,stop:ZT,toRaw:Te,toRef:Ov,toRefs:N0,triggerRef:k0,unref:w,camelize:hn,capitalize:Za,normalizeClass:Je,normalizeProps:UT,normalizeStyle:Ja,toDisplayString:qd,toHandlerKey:Qo,BaseTransition:hf,Comment:Pt,Fragment:He,KeepAlive:rS,Static:Ar,Suspense:Kv,Teleport:xS,Text:Vi,callWithAsyncErrorHandling:un,callWithErrorHandling:Un,cloneVNode:jn,compatUtils:ik,computed:xt,createBlock:An,createCommentVNode:Wt,createElementBlock:ye,createElementVNode:R,createHydrationRenderer:mw,createPropsRestProxy:YS,createRenderer:pw,createSlots:lS,createStaticVNode:OS,createTextVNode:oo,createVNode:_e,defineAsyncComponent:$o,defineComponent:nc,defineEmits:HS,defineExpose:GS,defineProps:KS,get devtools(){return vi},getCurrentInstance:Ys,getTransitionRawChildren:il,guardReactiveProps:_w,h:ic,handleError:Zr,initCustomFormatter:ek,inject:Vn,isMemoSame:Nw,isRuntimeOnly:VS,isVNode:Us,mergeDefaults:JS,mergeProps:Iw,nextTick:tl,onActivated:Qv,onBeforeMount:Xv,onBeforeUnmount:cl,onBeforeUpdate:Zv,onDeactivated:Jv,onErrorCaptured:sw,onMounted:io,onRenderTracked:nw,onRenderTriggered:tw,onServerPrefetch:ew,onUnmounted:rc,onUpdated:al,openBlock:ue,popScopeId:af,provide:Zo,pushScopeId:of,queuePostFlushCb:rf,registerRuntimeCompiler:US,renderList:As,renderSlot:hS,resolveComponent:aS,resolveDirective:uS,resolveDynamicComponent:cS,resolveFilter:rk,resolveTransitionHooks:Ui,setBlockTracking:zh,setDevtoolsHook:$v,setTransitionHooks:Dr,ssrContextKey:Rw,ssrUtils:sk,toHandlers:dS,transformVNodeArgs:DS,useAttrs:QS,useSSRContext:ZS,useSlots:zS,useTransitionState:lf,version:xw,warn:Lv,watch:Ai,watchEffect:Z0,watchPostEffect:Gv,watchSyncEffect:eS,withAsyncContext:XS,withCtx:Fi,withDefaults:WS,withDirectives:nn,withMemo:tk,withScopeId:j0,Transition:dl,TransitionGroup:Dk,VueElement:hl,createApp:zw,createSSRApp:Kk,defineCustomElement:Pw,defineSSRCustomElement:Tk,hydrate:Ww,initDirectivesForSSR:Hk,render:Ia,useCssModule:kk,useCssVars:Ck,vModelCheckbox:yf,vModelDynamic:qw,vModelRadio:vf,vModelSelect:Bw,vModelText:Ut,vShow:wf,withKeys:Jn,withModifiers:$k},Symbol.toStringTag,{value:"Module"})),zk="modulepreload",Qk=function(t){return"/"+t},Xm={},nt=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=Qk(r),r in Xm)return;Xm[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":zk,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Jk=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),s.push(n[l],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const f=a<<4&240|u>>2;if(s.push(f),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yk=function(t){const e=Jw(t);return Yw.encodeByteArray(e,!0)},vu=function(t){return Yk(t).replace(/\./g,"")},Xk=function(t){try{return Yw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function wu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zk(n)||(t[n]=wu(t[n],e[n]));return t}function Zk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vu(JSON.stringify(n)),vu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function _f(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nC(){return typeof self=="object"&&self.self===self}function If(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sC(){return Ke().indexOf("Electron/")>=0}function bf(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rC(){return Ke().indexOf("MSAppHost/")>=0}function iC(){return!_f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ba(){return typeof indexedDB=="object"}function oC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="FirebaseError";class Ht extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=aC,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?cC(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ht(r,a,s)}}function cC(t,e){return t.replace(uC,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const uC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ed(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(eg(i)&&eg(o)){if(!ed(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function eg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ii(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function jo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zw(t,e){const n=new hC(t,e);return n.subscribe.bind(n)}class hC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");dC(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=lh),r.error===void 0&&(r.error=lh),r.complete===void 0&&(r.complete=lh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new eC;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mC(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pC(t){return t===lr?void 0:t}function mC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=[];var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const e_={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},yC=Re.INFO,vC={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},wC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=vC[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=yC,this._logHandler=wC,this._userLogHandler=null,Ef.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}function _C(t){Ef.forEach(e=>{e.setLogLevel(t)})}function IC(t,e){for(const n of Ef){let s=null;e&&e.level&&(s=e_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(s!=null?s:r.logLevel)&&t({level:Re[i].toLowerCase(),message:a,args:o,type:r.name})}}}const bC=(t,e)=>e.some(n=>t instanceof n);let tg,ng;function EC(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TC(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t_=new WeakMap,td=new WeakMap,n_=new WeakMap,hh=new WeakMap,Tf=new WeakMap;function SC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ps(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t_.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function kC(t){if(td.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});td.set(t,e)}let nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CC(t){nd=t(nd)}function AC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(dh(this),e,...n);return n_.set(s,e.sort?e.sort():[e]),Ps(s)}:TC().includes(t)?function(...e){return t.apply(dh(this),e),Ps(t_.get(this))}:function(...e){return Ps(t.apply(dh(this),e))}}function RC(t){return typeof t=="function"?AC(t):(t instanceof IDBTransaction&&kC(t),bC(t,EC())?new Proxy(t,nd):t)}function Ps(t){if(t instanceof IDBRequest)return SC(t);if(hh.has(t))return hh.get(t);const e=RC(t);return e!==t&&(hh.set(t,e),Tf.set(e,t)),e}const dh=t=>Tf.get(t);function NC(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ps(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ps(o.result),c.oldVersion,c.newVersion,Ps(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const xC=["get","getKey","getAll","getAllKeys","count"],DC=["put","add","delete","clear"],fh=new Map;function sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=DC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||xC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return fh.set(e,i),i}CC(t=>({...t,get:(e,n,s)=>sg(e,n)||t.get(e,n,s),has:(e,n)=>!!sg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function OC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sd="@firebase/app",rg="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new pl("@firebase/app"),LC="@firebase/app-compat",MC="@firebase/analytics-compat",FC="@firebase/analytics",UC="@firebase/app-check-compat",VC="@firebase/app-check",BC="@firebase/auth",$C="@firebase/auth-compat",qC="@firebase/database",jC="@firebase/database-compat",KC="@firebase/functions",HC="@firebase/functions-compat",GC="@firebase/installations",WC="@firebase/installations-compat",zC="@firebase/messaging",QC="@firebase/messaging-compat",JC="@firebase/performance",YC="@firebase/performance-compat",XC="@firebase/remote-config",ZC="@firebase/remote-config-compat",eA="@firebase/storage",tA="@firebase/storage-compat",nA="@firebase/firestore",sA="@firebase/firestore-compat",rA="firebase",iA="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]",oA={[sd]:"fire-core",[LC]:"fire-core-compat",[FC]:"fire-analytics",[MC]:"fire-analytics-compat",[VC]:"fire-app-check",[UC]:"fire-app-check-compat",[BC]:"fire-auth",[$C]:"fire-auth-compat",[qC]:"fire-rtdb",[jC]:"fire-rtdb-compat",[KC]:"fire-fn",[HC]:"fire-fn-compat",[GC]:"fire-iid",[WC]:"fire-iid-compat",[zC]:"fire-fcm",[QC]:"fire-fcm-compat",[JC]:"fire-perf",[YC]:"fire-perf-compat",[XC]:"fire-rc",[ZC]:"fire-rc-compat",[eA]:"fire-gcs",[tA]:"fire-gcs-compat",[nA]:"fire-fst",[sA]:"fire-fst-compat","fire-js":"fire-js",[rA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Map,Ea=new Map;function _u(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function s_(t,e){t.container.addOrOverwriteComponent(e)}function qs(t){const e=t.name;if(Ea.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;Ea.set(e,t);for(const n of $s.values())_u(n,t);return!0}function r_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function aA(t,e,n=Lr){r_(t,e).clearInstance(n)}function cA(){Ea.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},js=new ei("app","Firebase",uA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw js.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=iA;function i_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Lr,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw js.create("bad-app-name",{appName:String(s)});const r=$s.get(s);if(r){if(ed(t,r.options)&&ed(n,r.config))return r;throw js.create("duplicate-app",{appName:s})}const i=new gC(s);for(const a of Ea.values())i.addComponent(a);const o=new lA(t,n,i);return $s.set(s,o),o}function hA(t=Lr){const e=$s.get(t);if(!e)throw js.create("no-app",{appName:t});return e}function dA(){return Array.from($s.values())}async function o_(t){const e=t.name;$s.has(e)&&($s.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Bn(t,e,n){var s;let r=(s=oA[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(a.join(" "));return}qs(new Kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function a_(t,e){if(t!==null&&typeof t!="function")throw js.create("invalid-log-argument");IC(t,e)}function c_(t){_C(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="firebase-heartbeat-database",pA=1,Ta="firebase-heartbeat-store";let ph=null;function u_(){return ph||(ph=NC(fA,pA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ta)}}}).catch(t=>{throw js.create("idb-open",{originalErrorMessage:t.message})})),ph}async function mA(t){var e;try{return(await u_()).transaction(Ta).objectStore(Ta).get(l_(t))}catch(n){if(n instanceof Ht)Or.warn(n.message);else{const s=js.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Or.warn(s.message)}}}async function ig(t,e){var n;try{const r=(await u_()).transaction(Ta,"readwrite");return await r.objectStore(Ta).put(e,l_(t)),r.done}catch(s){if(s instanceof Ht)Or.warn(s.message);else{const r=js.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Or.warn(r.message)}}}function l_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=1024,yA=30*24*60*60*1e3;class vA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _A(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=og();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=yA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=og(),{heartbeatsToSend:n,unsentEntries:s}=wA(this._heartbeatsCache.heartbeats),r=vu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function og(){return new Date().toISOString().substring(0,10)}function wA(t,e=gA){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ag(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ag(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ba()?oC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ig(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ig(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ag(t){return vu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){qs(new Kn("platform-logger",e=>new PC(e),"PRIVATE")),qs(new Kn("heartbeat",e=>new vA(e),"PRIVATE")),Bn(sd,rg,t),Bn(sd,rg,"esm2017"),Bn("fire-js","")}IA("");const bA=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:ti,_DEFAULT_ENTRY_NAME:Lr,_addComponent:_u,_addOrOverwriteComponent:s_,_apps:$s,_clearComponents:cA,_components:Ea,_getProvider:r_,_registerComponent:qs,_removeServiceInstance:aA,deleteApp:o_,getApp:hA,getApps:dA,initializeApp:i_,onLog:a_,registerVersion:Bn,setLogLevel:c_,FirebaseError:Ht},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n){this._delegate=e,this.firebase=n,_u(e,new Kn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),o_(this._delegate)))}_getService(e,n=Lr){var s;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((s=r.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=Lr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){_u(this._delegate,e)}_addOrOverwriteComponent(e){s_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},cg=new ei("app-compat","Firebase",TA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){const e={},n={__esModule:!0,initializeApp:i,app:r,registerVersion:Bn,setLogLevel:c_,onLog:a_,apps:null,SDK_VERSION:ti,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:bA}};n.default=n,Object.defineProperty(n,"apps",{get:o});function s(u){delete e[u]}function r(u){if(u=u||Lr,!Zm(e,u))throw cg.create("no-app",{appName:u});return e[u]}r.App=t;function i(u,l={}){const h=i_(u,l);if(Zm(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(qs(u)&&u.type==="PUBLIC"){const d=(f=r())=>{if(typeof f[h]!="function")throw cg.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&wu(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){const t=SA(EA);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h_,extendNamespace:e,createSubscribe:Zw,ErrorFactory:ei,deepExtend:wu});function e(n){wu(t,n)}return t}const kA=h_();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new pl("@firebase/app-compat"),CA="@firebase/app-compat",AA="0.1.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){Bn(CA,AA,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(nC()&&self.firebase!==void 0){ug.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&ug.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const $t=kA;RA();var NA="firebase",xA="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.registerVersion(NA,xA,"app-compat");function Sf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}const Ao={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},li={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PA=DA,OA=d_,f_=new ei("auth","Firebase",d_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new pl("@firebase/auth");function eu(t,...e){lg.logLevel<=Re.ERROR&&lg.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw kf(t,...e)}function kt(t,...e){return kf(t,...e)}function p_(t,e,n){const s=Object.assign(Object.assign({},OA()),{[e]:n});return new ei("auth","Firebase",s).create(e,{appName:t.name})}function co(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Rt(t,"argument-error"),p_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return f_.create(t,...e)}function B(t,e,...n){if(!t)throw kf(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eu(e),new Error(e)}function Tn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function cn(t){Tn(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}function LA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Cf(){return dg()==="http:"||dg()==="https:"}function dg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cf()||If()||"connection"in navigator)?navigator.onLine:!0}function FA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xw()||fl()}get(){return MA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new oc(3e4,6e4);function dt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wt(t,e,n,s,r={}){return g_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ao(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),m_.fetch()(y_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function g_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},UA),e);try{const r=new BA(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ko(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw p_(t,l,u);Rt(t,l)}}catch(r){if(r instanceof Ht)throw r;Rt(t,"network-request-failed")}}async function us(t,e,n,s,r={}){const i=await wt(t,e,n,s,r);return"mfaPendingCredential"in i&&Rt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function y_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Af(t.config,r):`${t.config.apiScheme}://${r}`}class BA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(kt(this.auth,"network-request-failed")),VA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=kt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e){return wt(t,"POST","/v1/accounts:delete",e)}async function qA(t,e){return wt(t,"POST","/v1/accounts:update",e)}async function jA(t,e){return wt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KA(t,e=!1){const n=oe(t),s=await n.getIdToken(e),r=ml(s);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:sa(mh(r.auth_time)),issuedAtTime:sa(mh(r.iat)),expirationTime:sa(mh(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mh(t){return Number(t)*1e3}function ml(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xk(s);return i?JSON.parse(i):(eu("Failed to decode base64 JWT payload"),null)}catch(i){return eu("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function HA(t){const e=ml(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ht&&GA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function GA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sa(this.lastLoginAt),this.creationTime=sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t){var e;const n=t.auth,s=await t.getIdToken(),r=await rs(t,jA(n,{idToken:s}));B(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?JA(i.providerUserInfo):[],a=QA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new v_(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function zA(t){const e=oe(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QA(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function JA(t){return t.map(e=>{var{providerId:n}=e,s=Sf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){const n=await g_(t,{},async()=>{const s=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=y_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",m_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await YA(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ca;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ca,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new v_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KA(this,e)}reload(){return zA(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rs(this,$A(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:I,emailVerified:C,isAnonymous:D,providerData:P,stsTokenManager:$}=n;B(I&&$,e,"internal-error");const x=Ca.fromJSON(this.name,$);B(typeof I=="string",e,"internal-error"),vs(h,e.name),vs(d,e.name),B(typeof C=="boolean",e,"internal-error"),B(typeof D=="boolean",e,"internal-error"),vs(f,e.name),vs(p,e.name),vs(b,e.name),vs(_,e.name),vs(y,e.name),vs(g,e.name);const z=new Rr({uid:I,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:D,photoURL:p,phoneNumber:f,tenantId:b,stsTokenManager:x,createdAt:y,lastLoginAt:g});return P&&Array.isArray(P)&&(z.providerData=P.map(X=>Object.assign({},X))),_&&(z._redirectEventId=_),z}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ca;r.updateFromServerResponse(n);const i=new Rr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ka(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}w_.type="NONE";const qi=w_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Nr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Nr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ri(cn(qi),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||cn(qi);const o=Nr(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Rr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ri(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ri(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(__(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E_(e))return"Blackberry";if(T_(e))return"Webos";if(Rf(e))return"Safari";if((e.includes("chrome/")||I_(e))&&!e.includes("edge/"))return"Chrome";if(ac(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function __(t=Ke()){return/firefox\//i.test(t)}function Rf(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I_(t=Ke()){return/crios\//i.test(t)}function b_(t=Ke()){return/iemobile/i.test(t)}function ac(t=Ke()){return/android/i.test(t)}function E_(t=Ke()){return/blackberry/i.test(t)}function T_(t=Ke()){return/webos/i.test(t)}function uo(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XA(t=Ke()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function ZA(t=Ke()){var e;return uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eR(){return bf()&&document.documentMode===10}function S_(t=Ke()){return uo(t)||ac(t)||T_(t)||E_(t)||/windows phone/i.test(t)||b_(t)}function tR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e=[]){let n;switch(t){case"Browser":n=fg(Ke());break;case"Worker":n=`${fg(Ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new nR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ka(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?oe(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=k_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function yt(t){return oe(t)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zw(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rR(t,e,n){const s=yt(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=C_(e),{host:o,port:a}=iR(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||oR()}function C_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iR(t){const e=C_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:mg(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:mg(o)}}}function mg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,e){return wt(t,"POST","/v1/accounts:resetPassword",dt(t,e))}async function R_(t,e){return wt(t,"POST","/v1/accounts:update",e)}async function aR(t,e){return wt(t,"POST","/v1/accounts:update",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t,e){return us(t,"POST","/v1/accounts:signInWithPassword",dt(t,e))}async function gl(t,e){return wt(t,"POST","/v1/accounts:sendOobCode",dt(t,e))}async function uR(t,e){return gl(t,e)}async function lR(t,e){return gl(t,e)}async function hR(t,e){return gl(t,e)}async function dR(t,e){return gl(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}async function pR(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends lo{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Aa(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Aa(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fR(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return R_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pR(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return us(t,"POST","/v1/accounts:signInWithIdp",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="http://localhost";class Hn extends lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Sf(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Hn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ns(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:mR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(t,e){return wt(t,"POST","/v1/accounts:sendVerificationCode",dt(t,e))}async function yR(t,e){return us(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e))}async function vR(t,e){const n=await us(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e));if(n.temporaryProof)throw Ko(t,"account-exists-with-different-credential",n);return n}const wR={USER_NOT_FOUND:"user-not-found"};async function _R(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return us(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,n),wR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends lo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new xr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new xr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return yR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return vR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _R(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!n&&!r&&!i?null:new xr({verificationId:n,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bR(t){const e=Ii(jo(t)).link,n=e?Ii(jo(e)).deep_link_id:null,s=Ii(jo(t)).deep_link_id;return(s?Ii(jo(s)).link:null)||s||n||e||t}class yl{constructor(e){var n,s,r,i,o,a;const c=Ii(jo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=IR((r=c.mode)!==null&&r!==void 0?r:null);B(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bR(e);try{return new yl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return Aa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=yl.parseLink(n);return B(s,"argument-error"),Aa._fromEmailAndCode(e,s.code,s.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends ls{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ni extends ho{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return B("providerId"in n&&"signInMethod"in n,"argument-error"),Hn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),Hn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ni.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ni.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!s&&!r&&!n&&!i||!a)return null;try{return new Ni(a)._credential({idToken:n,accessToken:s,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ho{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xn.credential(n,s)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ho{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="http://localhost";class ji extends lo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ns(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,pendingToken:i}=n;return!s||!r||!i||s!==r?null:new ji(s,i)}static _create(e,n){return new ji(e,n)}buildRequest(){return{requestUri:ER,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="saml.";class Iu extends ls{constructor(e){B(e.startsWith(TR),"argument-error"),super(e)}static credentialFromResult(e){return Iu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Iu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ji.fromJSON(e);return B(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:s}=e;if(!n||!s)return null;try{return ji._create(s,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ho{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Pn.credential(n,s)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(t,e){return us(t,"POST","/v1/accounts:signUp",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Rr._fromIdTokenResponse(e,s,r),o=gg(s);return new vn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=gg(s);return new vn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t){var e;const n=yt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await N_(n,{returnSecureToken:!0}),r=await vn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends Ht{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,bu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new bu(e,n,s,r)}}function x_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bu._fromErrorAndOperation(t,i,e,s):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){const n=oe(t);await vl(!0,n,e);const{providerUserInfo:s}=await qA(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=D_(s||[]);return n.providerData=n.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Nf(t,e,n=!1){const s=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",s)}async function vl(t,e,n){await ka(e);const s=D_(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";B(s.has(n)===t,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await rs(t,x_(r,i,e,t),n);B(o.idToken,r,"internal-error");const a=ml(o.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(t.uid===c,r,"user-mismatch"),vn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e,n=!1){const s="signIn",r=await x_(t,s,e),i=await vn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function wl(t,e){return O_(yt(t),e)}async function L_(t,e){const n=oe(t);return await vl(!1,n,e.providerId),Nf(n,e)}async function M_(t,e){return P_(oe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(t,e){return us(t,"POST","/v1/accounts:signInWithCustomToken",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e){const n=yt(t),s=await CR(n,{token:e,returnSecureToken:!0}),r=await vn._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?xf._fromServerResponse(e,n):Rt(e,"internal-error")}}class xf extends _l{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new xf(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e,n){var s;B(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),B(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(B(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(B(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e,n){const s=oe(t),r={requestType:"PASSWORD_RESET",email:e};n&&Il(s,r,n),await lR(s,r)}async function NR(t,e,n){await A_(oe(t),{oobCode:e,newPassword:n})}async function xR(t,e){await aR(oe(t),{oobCode:e})}async function F_(t,e){const n=oe(t),s=await A_(n,{oobCode:e}),r=s.requestType;switch(B(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":B(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":B(s.mfaInfo,n,"internal-error");default:B(s.email,n,"internal-error")}let i=null;return s.mfaInfo&&(i=_l._fromServerResponse(yt(n),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:i},operation:r}}async function DR(t,e){const{data:n}=await F_(oe(t),e);return n.email}async function PR(t,e,n){const s=yt(t),r=await N_(s,{returnSecureToken:!0,email:e,password:n}),i=await vn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function OR(t,e,n){return wl(oe(t),Xs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,e,n){const s=oe(t),r={requestType:"EMAIL_SIGNIN",email:e};B(n.handleCodeInApp,s,"argument-error"),n&&Il(s,r,n),await hR(s,r)}function MR(t,e){const n=yl.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function FR(t,e,n){const s=oe(t),r=Xs.credentialWithLink(e,n||Sa());return B(r._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),wl(s,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e){return wt(t,"POST","/v1/accounts:createAuthUri",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(t,e){const n=Cf()?Sa():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:r}=await UR(oe(t),s);return r||[]}async function BR(t,e){const n=oe(t),s=await t.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:s};e&&Il(n.auth,r,e);const{email:i}=await uR(n.auth,r);i!==t.email&&await t.reload()}async function $R(t,e,n){const s=oe(t),r=await t.getIdToken(),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:e};n&&Il(s.auth,i,n);const{email:o}=await dR(s.auth,i);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e){return wt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=oe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await rs(s,qR(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function KR(t,e){return U_(oe(t),e,null)}function HR(t,e){return U_(oe(t),null,e)}async function U_(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await rs(t,R_(s,i));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){var e,n;if(!t)return null;const{providerId:s}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},i=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(t==null?void 0:t.idToken)){const o=(n=(e=ml(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new xi(i,a)}}if(!s)return null;switch(s){case"facebook.com":return new WR(i,r);case"github.com":return new zR(i,r);case"google.com":return new QR(i,r);case"twitter.com":return new JR(i,r,t.screenName||null);case"custom":case"anonymous":return new xi(i,null);default:return new xi(i,s,r)}}class xi{constructor(e,n,s={}){this.isNewUser=e,this.providerId=n,this.profile=s}}class V_ extends xi{constructor(e,n,s,r){super(e,n,s),this.username=r}}class WR extends xi{constructor(e,n){super(e,"facebook.com",n)}}class zR extends V_{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class QR extends xi{constructor(e,n){super(e,"google.com",n)}}class JR extends V_{constructor(e,n,s){super(e,"twitter.com",n,s)}}function YR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:GR(n)}class _r{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new _r("enroll",e)}static _fromMfaPendingCredential(e){return new _r("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,s;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return _r._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return _r._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,s){this.session=e,this.hints=n,this.signInResolver=s}static _fromError(e,n){const s=yt(e),r=n.customData._serverResponse,i=(r.mfaInfo||[]).map(a=>_l._fromServerResponse(s,a));B(r.mfaPendingCredential,s,"internal-error");const o=_r._fromMfaPendingCredential(r.mfaPendingCredential);return new Df(o,i,async a=>{const c=await a._process(s,o);delete r.mfaInfo,delete r.mfaPendingCredential;const u=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await vn._fromIdTokenResponse(s,n.operationType,u);return await s._updateCurrentUser(l.user),l;case"reauthenticate":return B(n.user,s,"internal-error"),vn._forOperation(n.user,n.operationType,u);default:Rt(s,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function XR(t,e){var n;const s=oe(t),r=e;return B(e.customData.operationType,s,"argument-error"),B((n=r.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,s,"argument-error"),Df._fromError(s,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t,e){return wt(t,"POST","/v2/accounts/mfaEnrollment:start",dt(t,e))}function eN(t,e){return wt(t,"POST","/v2/accounts/mfaEnrollment:finalize",dt(t,e))}function tN(t,e){return wt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",dt(t,e))}class Pf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>_l._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Pf(e)}async getSession(){return _r._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const s=e,r=await this.getSession(),i=await rs(this.user,s._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var n;const s=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await rs(this.user,tN(this.user.auth,{idToken:r,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==s),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const gh=new WeakMap;function nN(t){const e=oe(t);return gh.has(e)||gh.set(e,Pf._fromUser(e)),gh.get(e)}const Eu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(){const t=Ke();return Rf(t)||uo(t)}const rN=1e3,iN=10;class $_ extends B_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sN()&&tR(),this.fallbackToPolling=S_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);eR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,iN):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$_.type="LOCAL";const Of=$_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_ extends B_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q_.type="SESSION";const Mr=q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new bl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await oN(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=cc("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function cN(t){ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function uN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hN(){return Lf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="firebaseLocalStorageDb",dN=1,Tu="firebaseLocalStorage",K_="fbase_key";class uc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function El(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function fN(){const t=indexedDB.deleteDatabase(j_);return new uc(t).toPromise()}function rd(){const t=indexedDB.open(j_,dN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Tu,{keyPath:K_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Tu)?e(s):(s.close(),await fN(),e(await rd()))})})}async function yg(t,e,n){const s=El(t,!0).put({[K_]:e,value:n});return new uc(s).toPromise()}async function pN(t,e){const n=El(t,!1).get(e),s=await new uc(n).toPromise();return s===void 0?null:s.value}function vg(t,e){const n=El(t,!0).delete(e);return new uc(n).toPromise()}const mN=800,gN=3;class H_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>gN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(hN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uN(),!this.activeServiceWorker)return;this.sender=new aN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await yg(e,Eu,"1"),await vg(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>yg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>pN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=El(r,!1).getAll();return new uc(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H_.type="LOCAL";const Ra=H_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t,e){return wt(t,"POST","/v2/accounts/mfaSignIn:start",dt(t,e))}function vN(t,e){return wt(t,"POST","/v2/accounts/mfaSignIn:finalize",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t){return(await wt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function G_(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=kt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",_N().appendChild(s)})}function W_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=500,bN=6e4,$c=1e12;class EN{constructor(e){this.auth=e,this.counter=$c,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new TN(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||$c;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||$c;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||$c;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class TN{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;B(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=SN(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},bN)},IN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function SN(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<t;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=W_("rcb"),kN=new oc(3e4,6e4),CN="https://www.google.com/recaptcha/api.js?";class AN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ct().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return B(RN(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(ct().grecaptcha):new Promise((s,r)=>{const i=ct().setTimeout(()=>{r(kt(e,"network-request-failed"))},kN.get());ct()[yh]=()=>{ct().clearTimeout(i),delete ct()[yh];const a=ct().grecaptcha;if(!a){r(kt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,s(a)};const o=`${CN}?${ao({onload:yh,render:"explicit",hl:n})}`;G_(o).catch(()=>{clearTimeout(i),r(kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ct().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function RN(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class NN{async load(e){return new EN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="recaptcha",xN={theme:"light",type:"image"};class DN{constructor(e,n=Object.assign({},xN),s){this.parameters=n,this.type=z_,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=yt(s),this.isInvisible=this.parameters.size==="invisible",B(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;B(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new NN:new AN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(r=>{const i=o=>{!o||(this.tokenChangeListeners.delete(i),r(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){B(!this.parameters.sitekey,this.auth,"argument-error"),B(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),B(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=ct()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){B(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){B(Cf()&&!Lf(),this.auth,"internal-error"),await PN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await wN(this.auth);B(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return B(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function PN(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=xr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function ON(t,e,n){const s=yt(t),r=await Tl(s,e,oe(n));return new Mf(r,i=>wl(s,i))}async function LN(t,e,n){const s=oe(t);await vl(!1,s,"phone");const r=await Tl(s.auth,e,oe(n));return new Mf(r,i=>L_(s,i))}async function MN(t,e,n){const s=oe(t),r=await Tl(s.auth,e,oe(n));return new Mf(r,i=>M_(s,i))}async function Tl(t,e,n){var s;const r=await n.verify();try{B(typeof r=="string",t,"argument-error"),B(n.type===z_,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return B(o.type==="enroll",t,"internal-error"),(await ZR(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{B(o.type==="signin",t,"internal-error");const a=((s=i.multiFactorHint)===null||s===void 0?void 0:s.uid)||i.multiFactorUid;return B(a,t,"missing-multi-factor-info"),(await yN(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await gR(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}async function FN(t,e){await Nf(oe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.providerId=En.PROVIDER_ID,this.auth=yt(e)}verifyPhoneNumber(e,n){return Tl(this.auth,e,oe(n))}static credential(e,n){return xr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return En.credentialFromTaggedObject(n)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?xr._fromTokenResponse(n,s):null}}En.PROVIDER_ID="phone";En.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t,e){return e?cn(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff extends lo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UN(t){return O_(t.auth,new Ff(t),t.bypassAuthState)}function VN(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),P_(n,new Ff(t),t.bypassAuthState)}async function BN(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Nf(n,new Ff(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UN;case"linkViaPopup":case"linkViaRedirect":return BN;case"reauthViaPopup":case"reauthViaRedirect":return VN;default:Rt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=new oc(2e3,1e4);async function qN(t,e,n){const s=yt(t);co(t,e,ls);const r=ni(s,n);return new Zn(s,"signInViaPopup",e,r).executeNotNull()}async function jN(t,e,n){const s=oe(t);co(s.auth,e,ls);const r=ni(s.auth,n);return new Zn(s.auth,"reauthViaPopup",e,r,s).executeNotNull()}async function KN(t,e,n){const s=oe(t);co(s.auth,e,ls);const r=ni(s.auth,n);return new Zn(s.auth,"linkViaPopup",e,r,s).executeNotNull()}class Zn extends Q_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$N.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN="pendingRedirect",ra=new Map;class GN extends Q_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ra.get(this.auth._key());if(!e){try{const s=await WN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ra.set(this.auth._key(),e)}return this.bypassAuthState||ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WN(t,e){const n=Y_(e),s=J_(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function Uf(t,e){return J_(t)._set(Y_(e),"true")}function zN(){ra.clear()}function Vf(t,e){ra.set(t._key(),e)}function J_(t){return cn(t._redirectPersistence)}function Y_(t){return Nr(HN,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t,e,n){return JN(t,e,n)}async function JN(t,e,n){const s=yt(t);co(t,e,ls);const r=ni(s,n);return await Uf(r,s),r._openRedirect(s,e,"signInViaRedirect")}function YN(t,e,n){return XN(t,e,n)}async function XN(t,e,n){const s=oe(t);co(s.auth,e,ls);const r=ni(s.auth,n);await Uf(r,s.auth);const i=await X_(s);return r._openRedirect(s.auth,e,"reauthViaRedirect",i)}function ZN(t,e,n){return ex(t,e,n)}async function ex(t,e,n){const s=oe(t);co(s.auth,e,ls);const r=ni(s.auth,n);await vl(!1,s,e.providerId),await Uf(r,s.auth);const i=await X_(s);return r._openRedirect(s.auth,e,"linkViaRedirect",i)}async function tx(t,e){return await yt(t)._initializationPromise,Sl(t,e,!1)}async function Sl(t,e,n=!1){const s=yt(t),r=ni(s,e),o=await new GN(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}async function X_(t){const e=cc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=10*60*1e3;class Z_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!eI(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nx&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e={}){return wt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ix=/^https?/;async function ox(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tI(t);for(const n of e)try{if(ax(n))return}catch{}Rt(t,"unauthorized-domain")}function ax(t){const e=Sa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ix.test(n))return!1;if(rx.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=new oc(3e4,6e4);function _g(){const t=ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ux(t){return new Promise((e,n)=>{var s,r,i;function o(){_g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_g(),n(kt(t,"network-request-failed"))},timeout:cx.get()})}if(!((r=(s=ct().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=W_("iframefcb");return ct()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},G_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw tu=null,e})}let tu=null;function lx(t){return tu=tu||ux(t),tu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=new oc(5e3,15e3),dx="__/auth/iframe",fx="emulator/auth/iframe",px={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gx(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Af(e,fx):`https://${t.config.authDomain}/${dx}`,s={apiKey:e.apiKey,appName:t.name,v:ti},r=mx.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ao(s).slice(1)}`}async function yx(t){const e=await lx(t),n=ct().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:gx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:px,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},hx.get());function c(){ct().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wx=500,_x=600,Ix="_blank",bx="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ex(t,e,n,s=wx,r=_x){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vx),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ke().toLowerCase();n&&(a=I_(u)?Ix:n),__(u)&&(e=e||bx,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(ZA(u)&&a!=="_self")return Tx(e||"",a),new Ig(null);const h=window.open(e||"",a,l);B(h,t,"popup-blocked");try{h.focus()}catch{}return new Ig(h)}function Tx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="__/auth/handler",kx="emulator/auth/handler";function id(t,e,n,s,r,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ti,eventId:r};if(e instanceof ls){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ho){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Cx(t)}?${ao(a).slice(1)}`}function Cx({config:t}){return t.emulator?Af(t,kx):`https://${t.authDomain}/${Sx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="webStorageSupport";class Ax{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mr,this._completeRedirectFn=Sl,this._overrideRedirectResult=Vf}async _openPopup(e,n,s,r){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=id(e,n,s,Sa(),r);return Ex(e,o,cc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),cN(id(e,n,s,Sa(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Tn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yx(e),s=new Z_(e);return n.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vh,{type:vh},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[vh];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ox(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S_()||Rf()||uo()}}const Rx=Ax;class Nx{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return On("unexpected MultiFactorSessionType")}}}class Bf extends Nx{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Bf(e)}_finalizeEnroll(e,n,s){return eN(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return vN(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nI{constructor(){}static assertion(e){return Bf._fromCredential(e)}}nI.FACTOR_ID="phone";var bg="@firebase/auth",Eg="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Px(t){qs(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:k_(t)},l=new sR(a,c,u);return LA(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qs(new Kn("auth-internal",e=>{const n=yt(e.getProvider("auth").getImmediate());return(s=>new xx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(bg,Eg,Dx(t)),Bn(bg,Eg,"esm2017")}Px("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=2e3;async function Lx(t,e,n){var s;const{BuildInfo:r}=Fr();Tn(e.sessionId,"AuthEvent did not contain a session ID");const i=await Bx(e.sessionId),o={};return uo()?o.ibi=r.packageName:ac()?o.apn=r.packageName:Rt(t,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=i,id(t,n,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,o)}async function Mx(t){const{BuildInfo:e}=Fr(),n={};uo()?n.iosBundleId=e.packageName:ac()?n.androidPackageName=e.packageName:Rt(t,"operation-not-supported-in-this-environment"),await tI(t,n)}function Fx(t){const{cordova:e}=Fr();return new Promise(n=>{e.plugins.browsertab.isAvailable(s=>{let r=null;s?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,XA()?"_blank":"_system","location=yes"),n(r)})})}async function Ux(t,e,n){const{cordova:s}=Fr();let r=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=s.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(kt(t,"redirect-cancelled-by-user"))},Ox))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),ac()&&document.addEventListener("visibilitychange",l,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{r()}}function Vx(t){var e,n,s,r,i,o,a,c,u,l;const h=Fr();B(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),B(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),B(typeof((i=(r=(s=h==null?void 0:h.cordova)===null||s===void 0?void 0:s.plugins)===null||r===void 0?void 0:r.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),B(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),B(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Bx(t){const e=$x(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function $x(t){if(Tn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=20;class jx extends Z_{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Kx(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Wx(),postBody:null,tenantId:t.tenantId,error:kt(t,"no-auth-event")}}function Hx(t,e){return od()._set(ad(t),e)}async function Tg(t){const e=await od()._get(ad(t));return e&&await od()._remove(ad(t)),e}function Gx(t,e){var n,s;const r=Qx(e);if(r.includes("/__/auth/callback")){const i=nu(r),o=i.firebaseError?zx(decodeURIComponent(i.firebaseError)):null,a=(s=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||s===void 0?void 0:s[1],c=a?kt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function Wx(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<qx;n++){const s=Math.floor(Math.random()*e.length);t.push(e.charAt(s))}return t.join("")}function od(){return cn(Of)}function ad(t){return Nr("authEvent",t.config.apiKey,t.name)}function zx(t){try{return JSON.parse(t)}catch{return null}}function Qx(t){const e=nu(t),n=e.link?decodeURIComponent(e.link):void 0,s=nu(n).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return nu(r).link||r||s||n||t}function nu(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ii(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=500;class Yx{constructor(){this._redirectPersistence=Mr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Sl,this._overrideRedirectResult=Vf}async _initialize(e){const n=e._key();let s=this.eventManagers.get(n);return s||(s=new jx(e),this.eventManagers.set(n,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){Rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,s,r){Vx(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),zN(),await this._originValidation(e);const o=Kx(e,s,r);await Hx(e,o);const a=await Lx(e,o,n),c=await Fx(a);return Ux(e,i,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Mx(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:s,handleOpenURL:r,BuildInfo:i}=Fr(),o=setTimeout(async()=>{await Tg(e),n.onEvent(Sg())},Jx),a=async l=>{clearTimeout(o);const h=await Tg(e);let d=null;h&&(l==null?void 0:l.url)&&(d=Gx(h,l.url)),n.onEvent(d||Sg())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,a);const c=r,u=`${i.packageName.toLowerCase()}://`;Fr().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const Xx=Yx;function Sg(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:kt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t,e){yt(t)._logFramework(e)}var eD="@firebase/auth-compat",tD="0.2.18";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=1e3;function ia(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function sD(){return ia()==="http:"||ia()==="https:"}function sI(t=Ke()){return!!((ia()==="file:"||ia()==="ionic:"||ia()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function rD(){return fl()||_f()}function iD(){return bf()&&(document==null?void 0:document.documentMode)===11}function oD(t=Ke()){return/Edge\/\d+/.test(t)}function aD(t=Ke()){return iD()||oD(t)}function rI(){try{const t=self.localStorage,e=cc();if(t)return t.setItem(e,"1"),t.removeItem(e),aD()?ba():!0}catch{return $f()&&ba()}return!1}function $f(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function wh(){return(sD()||If()||sI())&&!rD()&&rI()&&!$f()}function iI(){return sI()&&typeof document<"u"}async function cD(){return iI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},nD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function uD(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on={LOCAL:"local",NONE:"none",SESSION:"session"},Ro=B,oI="persistence";function lD(t,e){if(Ro(Object.values(on).includes(e),t,"invalid-persistence-type"),fl()){Ro(e!==on.SESSION,t,"unsupported-persistence-type");return}if(_f()){Ro(e===on.NONE,t,"unsupported-persistence-type");return}if($f()){Ro(e===on.NONE||e===on.LOCAL&&ba(),t,"unsupported-persistence-type");return}Ro(e===on.NONE||rI(),t,"unsupported-persistence-type")}async function cd(t){await t._initializationPromise;const e=aI(),n=Nr(oI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function hD(t,e){const n=aI();if(!n)return[];const s=Nr(oI,t,e);switch(n.getItem(s)){case on.NONE:return[qi];case on.LOCAL:return[Ra,Mr];case on.SESSION:return[Mr];default:return[]}}function aI(){var t;try{return((t=uD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=B;class Rs{constructor(){this.browserResolver=cn(Rx),this.cordovaResolver=cn(Xx),this.underlyingResolver=null,this._redirectPersistence=Mr,this._completeRedirectFn=Sl,this._overrideRedirectResult=Vf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,s,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,s,r)}async _openRedirect(e,n,s,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,s,r)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return iI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return dD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await cD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){return t.unwrap()}function fD(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){return uI(t)}function mD(t,e){var n,s;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((s=e)===null||s===void 0?void 0:s.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new gD(t,XR(t,e))}else if(r){const i=uI(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function uI(t){const{_tokenResponse:e}=t instanceof Ht?t.customData:t;if(!e)return null;if(!(t instanceof Ht)&&"temporaryProof"in e&&"phoneNumber"in e)return En.credentialFromResult(t);const n=e.providerId;if(!n||n===Ao.PASSWORD)return null;let s;switch(n){case Ao.GOOGLE:s=xn;break;case Ao.FACEBOOK:s=Nn;break;case Ao.GITHUB:s=Dn;break;case Ao.TWITTER:s=Pn;break;default:const{oauthIdToken:r,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!r&&!a?null:a?n.startsWith("saml.")?ji._create(n,a):Hn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:r,accessToken:i}):new Ni(n).credential({idToken:r,accessToken:i,rawNonce:c})}return t instanceof Ht?s.credentialFromError(t):s.credentialFromResult(t)}function Qt(t,e){return e.catch(n=>{throw n instanceof Ht&&mD(t,n),n}).then(n=>{const s=n.operationType,r=n.user;return{operationType:s,credential:pD(n),additionalUserInfo:YR(n),user:es.getOrCreate(r)}})}async function ud(t,e){const n=await e;return{verificationId:n.verificationId,confirm:s=>Qt(t,n.confirm(s))}}class gD{constructor(e,n){this.resolver=n,this.auth=fD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Qt(cI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this._delegate=e,this.multiFactor=nN(e)}static getOrCreate(e){return es.USER_MAP.has(e)||es.USER_MAP.set(e,new es(e)),es.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Qt(this.auth,L_(this._delegate,e))}async linkWithPhoneNumber(e,n){return ud(this.auth,LN(this._delegate,e,n))}async linkWithPopup(e){return Qt(this.auth,KN(this._delegate,e,Rs))}async linkWithRedirect(e){return await cd(yt(this.auth)),ZN(this._delegate,e,Rs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Qt(this.auth,M_(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return ud(this.auth,MN(this._delegate,e,n))}reauthenticateWithPopup(e){return Qt(this.auth,jN(this._delegate,e,Rs))}async reauthenticateWithRedirect(e){return await cd(yt(this.auth)),YN(this._delegate,e,Rs)}sendEmailVerification(e){return BR(this._delegate,e)}async unlink(e){return await kR(this._delegate,e),this}updateEmail(e){return KR(this._delegate,e)}updatePassword(e){return HR(this._delegate,e)}updatePhoneNumber(e){return FN(this._delegate,e)}updateProfile(e){return jR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return $R(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}es.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=B;class ld{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;No(s,"invalid-api-key",{appName:e.name}),No(s,"invalid-api-key",{appName:e.name});const r=typeof window<"u"?Rs:void 0;this._delegate=n.initialize({options:{persistence:yD(s,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(PA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?es.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){rR(this._delegate,e,n)}applyActionCode(e){return xR(this._delegate,e)}checkActionCode(e){return F_(this._delegate,e)}confirmPasswordReset(e,n){return NR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Qt(this._delegate,PR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return VR(this._delegate,e)}isSignInWithEmailLink(e){return MR(this._delegate,e)}async getRedirectResult(){No(wh(),this._delegate,"operation-not-supported-in-this-environment");const e=await tx(this._delegate,Rs);return e?Qt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Zx(this._delegate,e)}onAuthStateChanged(e,n,s){const{next:r,error:i,complete:o}=kg(e,n,s);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,n,s){const{next:r,error:i,complete:o}=kg(e,n,s);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,n){return LR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return RR(this._delegate,e,n||void 0)}async setPersistence(e){lD(this._delegate,e);let n;switch(e){case on.SESSION:n=Mr;break;case on.LOCAL:n=await cn(Ra)._isAvailable()?Ra:Of;break;case on.NONE:n=qi;break;default:return Rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Qt(this._delegate,SR(this._delegate))}signInWithCredential(e){return Qt(this._delegate,wl(this._delegate,e))}signInWithCustomToken(e){return Qt(this._delegate,AR(this._delegate,e))}signInWithEmailAndPassword(e,n){return Qt(this._delegate,OR(this._delegate,e,n))}signInWithEmailLink(e,n){return Qt(this._delegate,FR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return ud(this._delegate,ON(this._delegate,e,n))}async signInWithPopup(e){return No(wh(),this._delegate,"operation-not-supported-in-this-environment"),Qt(this._delegate,qN(this._delegate,e,Rs))}async signInWithRedirect(e){return No(wh(),this._delegate,"operation-not-supported-in-this-environment"),await cd(this._delegate),QN(this._delegate,e,Rs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return DR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ld.Persistence=on;function kg(t,e,n){let s=t;typeof t!="function"&&({next:s,error:e,complete:n}=t);const r=s;return{next:o=>r(o&&es.getOrCreate(o)),error:e,complete:n}}function yD(t,e){const n=hD(t,e);if(typeof self<"u"&&!n.includes(Ra)&&n.push(Ra),typeof window<"u")for(const s of[Of,Mr])n.includes(s)||n.push(s);return n.includes(qi)||n.push(qi),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.providerId="phone",this._delegate=new En(cI($t.auth()))}static credential(e,n){return En.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}qf.PHONE_SIGN_IN_METHOD=En.PHONE_SIGN_IN_METHOD;qf.PROVIDER_ID=En.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=B;class wD{constructor(e,n,s=$t.app()){var r;vD((r=s.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new DN(e,n,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="auth-compat";function ID(t){t.INTERNAL.registerComponent(new Kn(_D,e=>{const n=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new ld(n,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:li.EMAIL_SIGNIN,PASSWORD_RESET:li.PASSWORD_RESET,RECOVER_EMAIL:li.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:li.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:li.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:li.VERIFY_EMAIL}},EmailAuthProvider:Xs,FacebookAuthProvider:Nn,GithubAuthProvider:Dn,GoogleAuthProvider:xn,OAuthProvider:Ni,SAMLAuthProvider:Iu,PhoneAuthProvider:qf,PhoneMultiFactorGenerator:nI,RecaptchaVerifier:wD,TwitterAuthProvider:Pn,Auth:ld,AuthCredential:lo,Error:Ht}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(eD,tD)}ID($t);var bD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J,jf=jf||{},pe=bD||self;function Su(){}function hd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ED(t){return Object.prototype.hasOwnProperty.call(t,_h)&&t[_h]||(t[_h]=++TD)}var _h="closure_uid_"+(1e9*Math.random()>>>0),TD=0;function SD(t,e,n){return t.call.apply(t.bind,arguments)}function kD(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=SD:Ct=kD,Ct.apply(null,arguments)}function qc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Nt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Zs(){this.s=this.s,this.o=this.o}var CD=0;Zs.prototype.s=!1;Zs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),CD!=0)&&ED(this)};Zs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},hI=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function AD(t){e:{var e=wP;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Cg(t){return Array.prototype.concat.apply([],arguments)}function Kf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ku(t){return/^[\s\xa0]*$/.test(t)}var Ag=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qt(t,e){return t.indexOf(e)!=-1}function Ih(t,e){return t<e?-1:t>e?1:0}var jt;e:{var Rg=pe.navigator;if(Rg){var Ng=Rg.userAgent;if(Ng){jt=Ng;break e}}jt=""}function Hf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function dI(t){const e={};for(const n in t)e[n]=t[n];return e}var xg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fI(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<xg.length;i++)n=xg[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Gf(t){return Gf[" "](t),t}Gf[" "]=Su;function RD(t){var e=DD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ND=qt(jt,"Opera"),Ki=qt(jt,"Trident")||qt(jt,"MSIE"),pI=qt(jt,"Edge"),dd=pI||Ki,mI=qt(jt,"Gecko")&&!(qt(jt.toLowerCase(),"webkit")&&!qt(jt,"Edge"))&&!(qt(jt,"Trident")||qt(jt,"MSIE"))&&!qt(jt,"Edge"),xD=qt(jt.toLowerCase(),"webkit")&&!qt(jt,"Edge");function gI(){var t=pe.document;return t?t.documentMode:void 0}var Cu;e:{var bh="",Eh=function(){var t=jt;if(mI)return/rv:([^\);]+)(\)|;)/.exec(t);if(pI)return/Edge\/([\d\.]+)/.exec(t);if(Ki)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xD)return/WebKit\/(\S+)/.exec(t);if(ND)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Eh&&(bh=Eh?Eh[1]:""),Ki){var Th=gI();if(Th!=null&&Th>parseFloat(bh)){Cu=String(Th);break e}}Cu=bh}var DD={};function PD(){return RD(function(){let t=0;const e=Ag(String(Cu)).split("."),n=Ag("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ih(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ih(r[2].length==0,i[2].length==0)||Ih(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var fd;if(pe.document&&Ki){var Dg=gI();fd=Dg||parseInt(Cu,10)||void 0}else fd=void 0;var OD=fd,LD=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",Su,e),pe.removeEventListener("test",Su,e)}catch{}return t}();function Ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};function Na(t,e){if(Ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mI){e:{try{Gf(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Na.Z.h.call(this)}}Nt(Na,Ot);var MD={2:"touch",3:"pen",4:"mouse"};Na.prototype.h=function(){Na.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hc="closure_listenable_"+(1e6*Math.random()|0),FD=0;function UD(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++FD,this.ca=this.fa=!1}function kl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Cl(t){this.src=t,this.g={},this.h=0}Cl.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=md(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new UD(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function pd(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=lI(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(kl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function md(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Wf="closure_lm_"+(1e6*Math.random()|0),Sh={};function yI(t,e,n,s,r){if(s&&s.once)return wI(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yI(t,e[i],n,s,r);return null}return n=Jf(n),t&&t[hc]?t.N(e,n,lc(s)?!!s.capture:!!s,r):vI(t,e,n,!1,s,r)}function vI(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=lc(r)?!!r.capture:!!r,a=Qf(t);if(a||(t[Wf]=a=new Cl(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=VD(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)LD||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(II(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VD(){function t(n){return e.call(t.src,t.listener,n)}var e=BD;return t}function wI(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wI(t,e[i],n,s,r);return null}return n=Jf(n),t&&t[hc]?t.O(e,n,lc(s)?!!s.capture:!!s,r):vI(t,e,n,!0,s,r)}function _I(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)_I(t,e[i],n,s,r);else s=lc(s)?!!s.capture:!!s,n=Jf(n),t&&t[hc]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=md(i,n,s,r),-1<n&&(kl(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=md(e,n,s,r)),(n=-1<t?e[t]:null)&&zf(n))}function zf(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[hc])pd(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(II(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Qf(e))?(pd(n,t),n.h==0&&(n.src=null,e[Wf]=null)):kl(t)}}}function II(t){return t in Sh?Sh[t]:Sh[t]="on"+t}function BD(t,e){if(t.ca)t=!0;else{e=new Na(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&zf(t),t=n.call(s,e)}return t}function Qf(t){return t=t[Wf],t instanceof Cl?t:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jf(t){return typeof t=="function"?t:(t[kh]||(t[kh]=function(e){return t.handleEvent(e)}),t[kh])}function vt(){Zs.call(this),this.i=new Cl(this),this.P=this,this.I=null}Nt(vt,Zs);vt.prototype[hc]=!0;vt.prototype.removeEventListener=function(t,e,n,s){_I(this,t,e,n,s)};function At(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ot(e,t);else if(e instanceof Ot)e.target=e.target||t;else{var r=e;e=new Ot(s,t),fI(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=jc(o,s,!0,e)&&r}if(o=e.g=t,r=jc(o,s,!0,e)&&r,r=jc(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=jc(o,s,!1,e)&&r}vt.prototype.M=function(){if(vt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)kl(n[s]);delete t.g[e],t.h--}}this.I=null};vt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};vt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function jc(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&pd(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Yf=pe.JSON.stringify;function $D(){var t=EI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qD{constructor(){this.h=this.g=null}add(e,n){const s=bI.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var bI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jD,t=>t.reset());class jD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KD(t){pe.setTimeout(()=>{throw t},0)}function Xf(t,e){gd||HD(),yd||(gd(),yd=!0),EI.add(t,e)}var gd;function HD(){var t=pe.Promise.resolve(void 0);gd=function(){t.then(GD)}}var yd=!1,EI=new qD;function GD(){for(var t;t=$D();){try{t.h.call(t.g)}catch(n){KD(n)}var e=bI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yd=!1}function Al(t,e){vt.call(this),this.h=t||1,this.g=e||pe,this.j=Ct(this.kb,this),this.l=Date.now()}Nt(Al,vt);J=Al.prototype;J.da=!1;J.S=null;J.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),At(this,"tick"),this.da&&(Zf(this),this.start()))}};J.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zf(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}J.M=function(){Al.Z.M.call(this),Zf(this),delete this.g};function ep(t,e,n){if(typeof t=="function")n&&(t=Ct(t,n));else if(t&&typeof t.handleEvent=="function")t=Ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function TI(t){t.g=ep(()=>{t.g=null,t.i&&(t.i=!1,TI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class WD extends Zs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:TI(this)}M(){super.M(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xa(t){Zs.call(this),this.h=t,this.g={}}Nt(xa,Zs);var Pg=[];function SI(t,e,n,s){Array.isArray(n)||(n&&(Pg[0]=n.toString()),n=Pg);for(var r=0;r<n.length;r++){var i=yI(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function kI(t){Hf(t.g,function(e,n){this.g.hasOwnProperty(n)&&zf(e)},t),t.g={}}xa.prototype.M=function(){xa.Z.M.call(this),kI(this)};xa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rl(){this.g=!0}Rl.prototype.Aa=function(){this.g=!1};function zD(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function QD(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function bi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+YD(t,n)+(s?" "+s:"")})}function JD(t,e){t.info(function(){return"TIMEOUT: "+e})}Rl.prototype.info=function(){};function YD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Yf(n)}catch{return e}}var si={},Og=null;function Nl(){return Og=Og||new vt}si.Ma="serverreachability";function CI(t){Ot.call(this,si.Ma,t)}Nt(CI,Ot);function Da(t){const e=Nl();At(e,new CI(e))}si.STAT_EVENT="statevent";function AI(t,e){Ot.call(this,si.STAT_EVENT,t),this.stat=e}Nt(AI,Ot);function Kt(t){const e=Nl();At(e,new AI(e,t))}si.Na="timingevent";function RI(t,e){Ot.call(this,si.Na,t),this.size=e}Nt(RI,Ot);function dc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var xl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},NI={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function tp(){}tp.prototype.h=null;function Lg(t){return t.h||(t.h=t.i())}function xI(){}var fc={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function np(){Ot.call(this,"d")}Nt(np,Ot);function sp(){Ot.call(this,"c")}Nt(sp,Ot);var vd;function Dl(){}Nt(Dl,tp);Dl.prototype.g=function(){return new XMLHttpRequest};Dl.prototype.i=function(){return{}};vd=new Dl;function pc(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new xa(this),this.P=XD,t=dd?125:void 0,this.W=new Al(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new DI}function DI(){this.i=null,this.g="",this.h=!1}var XD=45e3,wd={},Au={};J=pc.prototype;J.setTimeout=function(t){this.P=t};function _d(t,e,n){t.K=1,t.v=Ol(is(e)),t.s=n,t.U=!0,PI(t,null)}function PI(t,e){t.F=Date.now(),mc(t),t.A=is(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),BI(n.h,"t",s),t.C=0,n=t.l.H,t.h=new DI,t.g=ob(t.l,n?e:null,!t.s),0<t.O&&(t.L=new WD(Ct(t.Ia,t,t.g),t.O)),SI(t.V,t.g,"readystatechange",t.gb),e=t.H?dI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Da(),zD(t.j,t.u,t.A,t.m,t.X,t.s)}J.gb=function(t){t=t.target;const e=this.L;e&&ts(t)==3?e.l():this.Ia(t)};J.Ia=function(t){try{if(t==this.g)e:{const l=ts(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||dd||this.g&&(this.h.h||this.g.ga()||Vg(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Da(3):Da(2)),Pl(this);var n=this.g.ba();this.N=n;t:if(OI(this)){var s=Vg(this.g);t="";var r=s.length,i=ts(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),oa(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,QD(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ku(a)){var u=a;break t}}u=null}if(n=u)bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Id(this,n);else{this.i=!1,this.o=3,Kt(12),Ir(this),oa(this);break e}}this.U?(LI(this,l,o),dd&&this.i&&l==3&&(SI(this.V,this.W,"tick",this.fb),this.W.start())):(bi(this.j,this.m,o,null),Id(this,o)),l==4&&Ir(this),this.i&&!this.I&&(l==4?nb(this.l,this):(this.i=!1,mc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),Ir(this),oa(this)}}}catch{}finally{}};function OI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function LI(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=ZD(t,n),r==Au){e==4&&(t.o=4,Kt(14),s=!1),bi(t.j,t.m,null,"[Incomplete Response]");break}else if(r==wd){t.o=4,Kt(15),bi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else bi(t.j,t.m,r,null),Id(t,r);OI(t)&&r!=Au&&r!=wd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Kt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),dp(e),e.L=!0,Kt(11))):(bi(t.j,t.m,n,"[Invalid Chunked Response]"),Ir(t),oa(t))}J.fb=function(){if(this.g){var t=ts(this.g),e=this.g.ga();this.C<e.length&&(Pl(this),LI(this,t,e),this.i&&t!=4&&mc(this))}};function ZD(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Au:(n=Number(e.substring(n,s)),isNaN(n)?wd:(s+=1,s+n>e.length?Au:(e=e.substr(s,n),t.C=s+n,e)))}J.cancel=function(){this.I=!0,Ir(this)};function mc(t){t.Y=Date.now()+t.P,MI(t,t.P)}function MI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=dc(Ct(t.eb,t),e)}function Pl(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}J.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(JD(this.j,this.A),this.K!=2&&(Da(),Kt(17)),Ir(this),this.o=2,oa(this)):MI(this,this.Y-t)};function oa(t){t.l.G==0||t.I||nb(t.l,t)}function Ir(t){Pl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Zf(t.W),kI(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Id(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bd(n.i,t))){if(n.I=t.N,!t.J&&bd(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Du(n),Fl(n);else break e;hp(n),Kt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=dc(Ct(n.ab,n),6e3));if(1>=jI(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&Du(n),!ku(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.i;!i.g&&(qt(p,"spdy")||qt(p,"quic")||qt(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(op(i,i.h),i.h=null))}if(s.D){const b=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,Ge(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=ib(s,s.H?s.la:null,s.W),o.J){KI(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Pl(a),mc(a)),s.g=o}else eb(s);0<n.l.length&&Ul(n)}else u[0]!="stop"&&u[0]!="close"||br(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?br(n,7):lp(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Da(4)}catch{}}function eP(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(hd(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function rp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hd(t)||typeof t=="string")hI(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(hd(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=eP(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function fo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof fo)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}J=fo.prototype;J.R=function(){ip(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};J.T=function(){return ip(this),this.g.concat()};function ip(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Ur(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Ur(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}J.get=function(t,e){return Ur(this.h,t)?this.h[t]:e};J.set=function(t,e){Ur(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};J.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Ur(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var FI=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Vr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Vr){this.g=e!==void 0?e:t.g,Ru(this,t.j),this.s=t.s,Nu(this,t.i),xu(this,t.m),this.l=t.l,e=t.h;var n=new Pa;n.i=e.i,e.g&&(n.g=new fo(e.g),n.h=e.h),Mg(this,n),this.o=t.o}else t&&(n=String(t).match(FI))?(this.g=!!e,Ru(this,n[1]||"",!0),this.s=aa(n[2]||""),Nu(this,n[3]||"",!0),xu(this,n[4]),this.l=aa(n[5]||"",!0),Mg(this,n[6]||"",!0),this.o=aa(n[7]||"")):(this.g=!!e,this.h=new Pa(null,this.g))}Vr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ho(e,Fg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ho(e,Fg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ho(n,n.charAt(0)=="/"?oP:iP,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ho(n,cP)),t.join("")};function is(t){return new Vr(t)}function Ru(t,e,n){t.j=n?aa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nu(t,e,n){t.i=n?aa(e,!0):e}function xu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mg(t,e,n){e instanceof Pa?(t.h=e,uP(t.h,t.g)):(n||(e=Ho(e,aP)),t.h=new Pa(e,t.g))}function Ge(t,e,n){t.h.set(e,n)}function Ol(t){return Ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nP(t){return t instanceof Vr?is(t):new Vr(t,void 0)}function sP(t,e,n,s){var r=new Vr(null,void 0);return t&&Ru(r,t),e&&Nu(r,e),n&&xu(r,n),s&&(r.l=s),r}function aa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ho(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fg=/[#\/\?@]/g,iP=/[#\?:]/g,oP=/[#\?]/g,aP=/[#\?@]/g,cP=/#/g;function Pa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function er(t){t.g||(t.g=new fo,t.h=0,t.i&&tP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}J=Pa.prototype;J.add=function(t,e){er(this),this.i=null,t=po(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function UI(t,e){er(t),e=po(t,e),Ur(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ur(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ip(t)))}function VI(t,e){return er(t),e=po(t,e),Ur(t.g.h,e)}J.forEach=function(t,e){er(this),this.g.forEach(function(n,s){hI(n,function(r){t.call(e,r,s,this)},this)},this)};J.T=function(){er(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};J.R=function(t){er(this);var e=[];if(typeof t=="string")VI(this,t)&&(e=Cg(e,this.g.get(po(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Cg(e,t[n])}return e};J.set=function(t,e){return er(this),this.i=null,t=po(this,t),VI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};J.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function BI(t,e,n){UI(t,e),0<n.length&&(t.i=null,t.g.set(po(t,e),Kf(n)),t.h+=n.length)}J.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function po(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uP(t,e){e&&!t.j&&(er(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(UI(this,s),BI(this,r,n))},t)),t.j=e}var lP=class{constructor(t,e){this.h=t,this.g=e}};function $I(t){this.l=t||hP,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ea&&pe.g.Ea()&&pe.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hP=10;function qI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jI(t){return t.h?1:t.g?t.g.size:0}function bd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function op(t,e){t.g?t.g.add(e):t.h=e}function KI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$I.prototype.cancel=function(){if(this.i=HI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function HI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Kf(t.i)}function ap(){}ap.prototype.stringify=function(t){return pe.JSON.stringify(t,void 0)};ap.prototype.parse=function(t){return pe.JSON.parse(t,void 0)};function dP(){this.g=new ap}function fP(t,e,n){const s=n||"";try{rp(t,function(r,i){let o=r;lc(r)&&(o=Yf(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function pP(t,e){const n=new Rl;if(pe.Image){const s=new Image;s.onload=qc(Kc,n,s,"TestLoadImage: loaded",!0,e),s.onerror=qc(Kc,n,s,"TestLoadImage: error",!1,e),s.onabort=qc(Kc,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=qc(Kc,n,s,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Kc(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function gc(t){this.l=t.$b||null,this.j=t.ib||!1}Nt(gc,tp);gc.prototype.g=function(){return new Ll(this.l,this.j)};gc.prototype.i=function(t){return function(){return t}}({});function Ll(t,e){vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=cp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Nt(Ll,vt);var cp=0;J=Ll.prototype;J.open=function(t,e){if(this.readyState!=cp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Oa(this)};J.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||pe).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};J.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yc(this)),this.readyState=cp};J.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Oa(this)),this.g&&(this.readyState=3,Oa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;GI(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function GI(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}J.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yc(this):Oa(this),this.readyState==3&&GI(this)}};J.Ua=function(t){this.g&&(this.response=this.responseText=t,yc(this))};J.Ta=function(t){this.g&&(this.response=t,yc(this))};J.ha=function(){this.g&&yc(this)};function yc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Oa(t)}J.setRequestHeader=function(t,e){this.v.append(t,e)};J.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};J.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Oa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ll.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mP=pe.JSON.parse;function at(t){vt.call(this),this.headers=new fo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=WI,this.K=this.L=!1}Nt(at,vt);var WI="",gP=/^https?$/i,yP=["POST","PUT"];J=at.prototype;J.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vd.g(),this.C=this.u?Lg(this.u):Lg(vd),this.g.onreadystatechange=Ct(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ug(this,i);return}t=n||"";const r=new fo(this.headers);s&&rp(s,function(i,o){r.set(o,i)}),s=AD(r.T()),n=pe.FormData&&t instanceof pe.FormData,!(0<=lI(yP,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{JI(this),0<this.B&&((this.K=vP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.pa,this)):this.A=ep(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ug(this,i)}};function vP(t){return Ki&&PD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function wP(t){return t.toLowerCase()=="content-type"}J.pa=function(){typeof jf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function Ug(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zI(t),Ml(t)}function zI(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}J.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Ml(this))};J.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ml(this,!0)),at.Z.M.call(this)};J.Fa=function(){this.s||(this.F||this.v||this.l?QI(this):this.cb())};J.cb=function(){QI(this)};function QI(t){if(t.h&&typeof jf<"u"&&(!t.C[1]||ts(t)!=4||t.ba()!=2)){if(t.v&&ts(t)==4)ep(t.Fa,0,t);else if(At(t,"readystatechange"),ts(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(FI)[1]||null;if(!r&&pe.self&&pe.self.location){var i=pe.self.location.protocol;r=i.substr(0,i.length-1)}s=!gP.test(r?r.toLowerCase():"")}n=s}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var o=2<ts(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",zI(t)}}finally{Ml(t)}}}}function Ml(t,e){if(t.g){JI(t);const n=t.g,s=t.C[0]?Su:null;t.g=null,t.C=null,e||At(t,"ready");try{n.onreadystatechange=s}catch{}}}function JI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}function ts(t){return t.g?t.g.readyState:0}J.ba=function(){try{return 2<ts(this)?this.g.status:-1}catch{return-1}};J.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};J.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mP(e)}};function Vg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case WI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}J.Da=function(){return this.m};J.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function _P(t){let e="";return Hf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function up(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=_P(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ge(t,e,n))}function xo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function YI(t){this.za=0,this.l=[],this.h=new Rl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=xo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=xo("baseRetryDelayMs",5e3,t),this.$a=xo("retryDelaySeedMs",1e4,t),this.Ya=xo("forwardChannelMaxRetries",2,t),this.ra=xo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new $I(t&&t.concurrentRequestLimit),this.Ca=new dP,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}J=YI.prototype;J.ma=8;J.G=1;function lp(t){if(XI(t),t.G==3){var e=t.V++,n=is(t.F);Ge(n,"SID",t.J),Ge(n,"RID",e),Ge(n,"TYPE","terminate"),vc(t,n),e=new pc(t,t.h,e,void 0),e.K=2,e.v=Ol(is(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon&&(n=pe.navigator.sendBeacon(e.v.toString(),"")),!n&&pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=ob(e.l,null),e.g.ea(e.v)),e.F=Date.now(),mc(e)}rb(t)}J.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Fl(t){t.g&&(dp(t),t.g.cancel(),t.g=null)}function XI(t){Fl(t),t.u&&(pe.clearTimeout(t.u),t.u=null),Du(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function Ch(t,e){t.l.push(new lP(t.Za++,e)),t.G==3&&Ul(t)}function Ul(t){qI(t.i)||t.m||(t.m=!0,Xf(t.Ha,t),t.C=0)}function IP(t,e){return jI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=dc(Ct(t.Ha,t,e),sb(t,t.C)),t.C++,!0)}J.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new pc(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=dI(i),fI(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ZI(this,r,e),n=is(this.F),Ge(n,"RID",t),Ge(n,"CVER",22),this.D&&Ge(n,"X-HTTP-Session-Id",this.D),vc(this,n),this.o&&i&&up(n,this.o,i),op(this.i,r),this.Ra&&Ge(n,"TYPE","init"),this.ja?(Ge(n,"$req",e),Ge(n,"SID","null"),r.$=!0,_d(r,n,null)):_d(r,n,e),this.G=2}}else this.G==3&&(t?Bg(this,t):this.l.length==0||qI(this.i)||Bg(this))};function Bg(t,e){var n;e?n=e.m:n=t.V++;const s=is(t.F);Ge(s,"SID",t.J),Ge(s,"RID",n),Ge(s,"AID",t.U),vc(t,s),t.o&&t.s&&up(s,t.o,t.s),n=new pc(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ZI(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),op(t.i,n),_d(n,s,e)}function vc(t,e){t.j&&rp({},function(n,s){Ge(e,s,n)})}function ZI(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ct(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{fP(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function eb(t){t.g||t.u||(t.Y=1,Xf(t.Ga,t),t.A=0)}function hp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=dc(Ct(t.Ga,t),sb(t,t.A)),t.A++,!0)}J.Ga=function(){if(this.u=null,tb(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=dc(Ct(this.bb,this),t)}};J.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Kt(10),Fl(this),tb(this))};function dp(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function tb(t){t.g=new pc(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=is(t.oa);Ge(e,"RID","rpc"),Ge(e,"SID",t.J),Ge(e,"CI",t.N?"0":"1"),Ge(e,"AID",t.U),vc(t,e),Ge(e,"TYPE","xmlhttp"),t.o&&t.s&&up(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ol(is(e)),n.s=null,n.U=!0,PI(n,t)}J.ab=function(){this.v!=null&&(this.v=null,Fl(this),hp(this),Kt(19))};function Du(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function nb(t,e){var n=null;if(t.g==e){Du(t),dp(t),t.g=null;var s=2}else if(bd(t.i,e))n=e.D,KI(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Nl(),At(s,new RI(s,n)),Ul(t)}else eb(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&IP(t,e)||s==2&&hp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}}function sb(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ct(t.jb,t);n||(n=new Vr("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||Ru(n,"https"),Ol(n)),pP(n.toString(),s)}else Kt(2);t.G=0,t.j&&t.j.va(e),rb(t),XI(t)}J.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Kt(2)):(this.h.info("Failed to ping google.com"),Kt(1))};function rb(t){t.G=0,t.I=-1,t.j&&((HI(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Kf(t.l),t.l.length=0),t.j.ua())}function ib(t,e,n){let s=nP(n);if(s.i!="")e&&Nu(s,e+"."+s.i),xu(s,s.m);else{const r=pe.location;s=sP(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Hf(t.aa,function(r,i){Ge(s,i,r)}),e=t.D,n=t.sa,e&&n&&Ge(s,e,n),Ge(s,"VER",t.ma),vc(t,s),s}function ob(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new at(new gc({ib:!0})):new at(t.qa),e.L=t.H,e}function ab(){}J=ab.prototype;J.xa=function(){};J.wa=function(){};J.va=function(){};J.ua=function(){};J.Oa=function(){};function Pu(){if(Ki&&!(10<=Number(OD)))throw Error("Environmental error: no available transport.")}Pu.prototype.g=function(t,e){return new fn(t,e)};function fn(t,e){vt.call(this),this.g=new YI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ku(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ku(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mo(this)}Nt(fn,vt);fn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Xf(Ct(t.hb,t,e))),Kt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ib(t,null,t.W),Ul(t)};fn.prototype.close=function(){lp(this.g)};fn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ch(this.g,e)}else this.v?(e={},e.__data__=Yf(t),Ch(this.g,e)):Ch(this.g,t)};fn.prototype.M=function(){this.g.j=null,delete this.j,lp(this.g),delete this.g,fn.Z.M.call(this)};function cb(t){np.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Nt(cb,np);function ub(){sp.call(this),this.status=1}Nt(ub,sp);function mo(t){this.g=t}Nt(mo,ab);mo.prototype.xa=function(){At(this.g,"a")};mo.prototype.wa=function(t){At(this.g,new cb(t))};mo.prototype.va=function(t){At(this.g,new ub)};mo.prototype.ua=function(){At(this.g,"b")};Pu.prototype.createWebChannel=Pu.prototype.g;fn.prototype.send=fn.prototype.u;fn.prototype.open=fn.prototype.m;fn.prototype.close=fn.prototype.close;xl.NO_ERROR=0;xl.TIMEOUT=8;xl.HTTP_ERROR=6;NI.COMPLETE="complete";xI.EventType=fc;fc.OPEN="a";fc.CLOSE="b";fc.ERROR="c";fc.MESSAGE="d";vt.prototype.listen=vt.prototype.N;at.prototype.listenOnce=at.prototype.O;at.prototype.getLastError=at.prototype.La;at.prototype.getLastErrorCode=at.prototype.Da;at.prototype.getStatus=at.prototype.ba;at.prototype.getResponseJson=at.prototype.Qa;at.prototype.getResponseText=at.prototype.ga;at.prototype.send=at.prototype.ea;var bP=function(){return new Pu},EP=function(){return Nl()},Ah=xl,TP=NI,SP=si,$g={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},kP=gc,Hc=xI,CP=at;const qg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new pl("@firebase/firestore");function Ed(){return Ks.logLevel}function AP(t){Ks.setLogLevel(t)}function U(t,...e){if(Ks.logLevel<=Re.DEBUG){const n=e.map(fp);Ks.debug(`Firestore (${go}): ${t}`,...n)}}function st(t,...e){if(Ks.logLevel<=Re.ERROR){const n=e.map(fp);Ks.error(`Firestore (${go}): ${t}`,...n)}}function Hi(t,...e){if(Ks.logLevel<=Re.WARN){const n=e.map(fp);Ks.warn(`Firestore (${go}): ${t}`,...n)}}function fp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw st(e),new Error(e)}function de(t,e){t||Y()}function RP(t,e){t||Y()}function W(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class xP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DP{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(de(typeof s.accessToken=="string"),new lb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new pt(e)}}class PP{constructor(e,n,s){this.type="FirstParty",this.user=pt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class OP{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new PP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MP{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.p=n.token,new LP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=FP(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ve(t,e){return t<e?-1:t>e?1:0}function Gi(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}function db(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new We(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new We(0,0))}static max(){return new he(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return La.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof La?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends La{construct(e,n,s){return new Ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const UP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends La{construct(e,n,s){return new rt(e,n,s)}static isValidIdentifier(e){return UP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ce.fromString(e))}static fromName(e){return new K(Ce.fromString(e).popFirst(5))}static empty(){return new K(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,s,r){this.indexId=e,this.collectionGroup=n,this.fields=s,this.indexState=r}}function Td(t){return t.fields.find(e=>e.kind===2)}function hr(t){return t.fields.filter(e=>e.kind!==2)}fb.UNKNOWN_ID=-1;class VP{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ou{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ou(0,pn.min())}}function pb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=he.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new pn(r,K.empty(),e)}function mb(t){return new pn(t.readTime,t.key,-1)}class pn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new pn(he.min(),K.empty(),-1)}static max(){return new pn(he.max(),K.empty(),-1)}}function pp(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==gb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(r=>r?E.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new E((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new E((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.T=new mt,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{n.error?this.T.reject(new ca(e,n.error)):this.T.resolve()},this.transaction.onerror=s=>{const r=mp(s.target.error);this.T.reject(new ca(e,r))}}static open(e,n,s,r){try{return new Vl(n,e.transaction(r,s))}catch(i){throw new ca(n,i)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new $P(n)}}class In{constructor(e,n,s){this.name=e,this.version=n,this.P=s,In.v(Ke())===12.2&&st("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),pr(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!ba())return!1;if(In.S())return!0;const e=Ke(),n=In.v(e),s=0<n&&n<10,r=In.D(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static S(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.C)==="YES"}static N(e,n){return e.store(n)}static v(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static D(e){const n=e.match(/Android ([\d.]+)/i),s=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async k(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;n(o)},r.onblocked=()=>{s(new ca(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new M(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new M(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new ca(e,o))},r.onupgradeneeded=i=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.P.M(o,r.transaction,i.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.O&&(this.db.onversionchange=n=>this.O(n)),this.db}F(e){this.O=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,s,r){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=Vl.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(u=>(a.R(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return c.catch(()=>{}),await a.A,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class BP{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return pr(this.$.delete())}}class ca extends M{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function nr(t){return t.name==="IndexedDbTransactionError"}class $P{constructor(e){this.store=e}put(e,n){let s;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),s=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),pr(s)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),pr(this.store.add(e))}get(e){return pr(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),pr(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),pr(this.store.count())}K(e,n){const s=this.options(e,n);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.G(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new E((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}j(e,n){const s=this.store.getAll(e,n===null?void 0:n);return new E((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}W(e,n){U("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,n);s.H=!1;const r=this.cursor(s);return this.G(r,(i,o,a)=>a.delete())}J(e,n){let s;n?s=e:(s={},n=e);const r=this.cursor(s);return this.G(r,n)}Y(e){const n=this.cursor({});return new E((s,r)=>{n.onerror=i=>{const o=mp(i.target.error);r(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}G(e,n){const s=[];return new E((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new BP(a),u=n(a.primaryKey,a.value,c);if(u instanceof E){const l=u.catch(h=>(c.done(),E.reject(h)));s.push(l)}c.isDone?r():c.U===null?a.continue():a.continue(c.U)}}).next(()=>E.waitFor(s))}options(e,n){let s;return e!==void 0&&(typeof e=="string"?s=e:n=e),{index:s,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const s=this.store.index(e.index);return e.H?s.openKeyCursor(e.range,n):s.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function pr(t){return new E((e,n)=>{t.onsuccess=s=>{const r=s.target.result;e(r)},t.onerror=s=>{const r=mp(s.target.error);n(r)}})}let jg=!1;function mp(t){const e=In.v(Ke());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const s=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return jg||(jg=!0,setTimeout(()=>{throw s},0)),s}}return t}class qP{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.Z(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}Z(e){U("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(n){nr(n)?U("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await tr(n)}await this.Z(1)})}}class jP{constructor(e,n){this.localStore=e,this.persistence=n}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.et(n,e))}et(e,n){const s=new Set;let r=n,i=!0;return E.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return U("IndexBackiller",`Processing collection: ${o}`),this.nt(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>n-r)}nt(e,n,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(r=>this.localStore.localDocuments.getNextDocuments(e,n,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.st(r,i)).next(a=>(U("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}st(e,n){let s=e;return n.changes.forEach((r,i)=>{const o=mb(i);pp(o,s)>0&&(s=o)}),new pn(s.readTime,s.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.ot=-1;class et{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gc(this.root,e,this.comparator,!0)}}class Gc{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Et.RED,this.left=r!=null?r:Et.EMPTY,this.right=i!=null?i:Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Et(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Et.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hg(this.data.getIterator())}getIteratorFrom(e){return new Hg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Hg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hi(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new ln([])}unionWith(e){let n=new Le(rt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const HP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hs(t){if(de(!!t),typeof t=="string"){let e=0;const n=HP.exec(t);if(de(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wb(t){const e=t.mapValue.fields.__previous_value__;return gp(e)?wb(e):e}function Ma(t){const e=Hs(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class os{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new os("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof os&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){return t==null}function Fa(t){return t===0&&1/t==-1/0}function _b(t){return typeof t=="number"&&Number.isInteger(t)&&!Fa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},su={nullValue:"NULL_VALUE"};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gp(t)?4:Ib(t)?9007199254740991:10:Y()}function Gn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ma(t).isEqual(Ma(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Hs(s.timestampValue),o=Hs(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Br(s.bytesValue).isEqual(Br(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ye(s.geoPointValue.latitude)===Ye(r.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ye(s.integerValue)===Ye(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ye(s.doubleValue),o=Ye(r.doubleValue);return i===o?Fa(i)===Fa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Gi(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Kg(i)!==Kg(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Gn(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Ua(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=$r(t),s=$r(e);if(n!==s)return ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ye(r.integerValue||r.doubleValue),a=Ye(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gg(t.timestampValue,e.timestampValue);case 4:return Gg(Ma(t),Ma(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Br(r),a=Br(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ve(o[c],a[c]);if(u!==0)return u}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ve(Ye(r.latitude),Ye(i.latitude));return o!==0?o:ve(Ye(r.longitude),Ye(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Gs(o[c],a[c]);if(u)return u}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ns.mapValue&&i===Ns.mapValue)return 0;if(r===Ns.mapValue)return 1;if(i===Ns.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ve(a[l],u[l]);if(h!==0)return h;const d=Gs(o[a[l]],c[u[l]]);if(d!==0)return d}return ve(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Hs(t),s=Hs(e),r=ve(n.seconds,s.seconds);return r!==0?r:ve(n.nanos,s.nanos)}function Di(t){return Sd(t)}function Sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Hs(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Br(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Sd(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Sd(s.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function qr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kd(t){return!!t&&"integerValue"in t}function Va(t){return!!t&&"arrayValue"in t}function Wg(t){return!!t&&"nullValue"in t}function zg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ru(t){return!!t&&"mapValue"in t}function ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ri(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ua(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function WP(t){return"nullValue"in t?su:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?qr(os.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Y()}function zP(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?qr(os.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Ns:Y()}function Qg(t,e){const n=Gs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Jg(t,e){const n=Gs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ru(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ua(n)}setAll(e){let n=rt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ua(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ru(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ru(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ri(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Tt(ua(this.value))}}function bb(t){const e=[];return ri(t.fields,(n,s)=>{const r=new rt([n]);if(ru(s)){const i=bb(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new $e(e,0,he.min(),he.min(),Tt.empty(),0)}static newFoundDocument(e,n,s){return new $e(e,1,n,he.min(),s,0)}static newNoDocument(e,n){return new $e(e,2,n,he.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,he.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Yg(t,e=null,n=[],s=[],r=null,i=null,o=null){return new QP(t,e,n,s,r,i,o)}function jr(t){const e=W(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Di(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Di(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Di(s)).join(",")),e.ut=n}return e.ut}function JP(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Di(s.value)}`;var s}).join(", ")}]`),wc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Di(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Di(n)).join(",")),`Target(${e})`}function _c(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!r1(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Gn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ty(t.startAt,e.startAt)&&ty(t.endAt,e.endAt)}function Lu(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Mu(t,e){return t.filters.filter(n=>n instanceof St&&n.field.isEqual(e))}function Xg(t,e,n){let s=su,r=!0;for(const i of Mu(t,e)){let o=su,a=!0;switch(i.op){case"<":case"<=":o=WP(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=su}Qg({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Qg({value:s,inclusive:r},{value:o,inclusive:n.inclusive})<0&&(s=o,r=n.inclusive);break}}return{value:s,inclusive:r}}function Zg(t,e,n){let s=Ns,r=!0;for(const i of Mu(t,e)){let o=Ns,a=!0;switch(i.op){case">=":case">":o=zP(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Ns}Jg({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Jg({value:s,inclusive:r},{value:o,inclusive:n.inclusive})>0&&(s=o,r=n.inclusive);break}}return{value:s,inclusive:r}}class St extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new YP(e,n,s):n==="array-contains"?new e1(e,s):n==="in"?new t1(e,s):n==="not-in"?new n1(e,s):n==="array-contains-any"?new s1(e,s):new St(e,n,s)}static ct(e,n,s){return n==="in"?new XP(e,s):new ZP(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Gs(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.at(Gs(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class YP extends St{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.at(n)}}class XP extends St{constructor(e,n){super(e,"in",n),this.keys=Eb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZP extends St{constructor(e,n){super(e,"not-in",n),this.keys=Eb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Eb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class e1 extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Va(n)&&Ua(n.arrayValue,this.value)}}class t1 extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class n1 extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ua(this.value.arrayValue,n)}}class s1 extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Va(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ua(this.value.arrayValue,s))}}class Ws{constructor(e,n){this.position=e,this.inclusive=n}}class Pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function r1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ey(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Gs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Tb(t,e,n,s,r,i,o,a){return new hs(t,e,n,s,r,i,o,a)}function yo(t){return new hs(t)}function ny(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vp(t){for(const e of t.filters)if(e.ht())return e.field;return null}function wp(t){return t.collectionGroup!==null}function Wi(t){const e=W(t);if(e.lt===null){e.lt=[];const n=vp(e),s=yp(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new Pi(n)),e.lt.push(new Pi(rt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Pi(rt.keyField(),i))}}}return e.lt}function en(t){const e=W(t);if(!e.ft)if(e.limitType==="F")e.ft=Yg(e.path,e.collectionGroup,Wi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Wi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Pi(i.field,o))}const s=e.endAt?new Ws(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ws(e.startAt.position,e.startAt.inclusive):null;e.ft=Yg(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function Fu(t,e,n){return new hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return _c(en(t),en(e))&&t.limitType===e.limitType}function Sb(t){return`${jr(en(t))}|lt:${t.limitType}`}function Cd(t){return`Query(target=${JP(en(t))}; limitType=${t.limitType})`}function _p(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):K.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ey(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Wi(n),s)||n.endAt&&!function(r,i,o){const a=ey(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Wi(n),s))}(t,e)}function kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cb(t){return(e,n)=>{let s=!1;for(const r of Wi(t)){const i=i1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function i1(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Gs(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fa(e)?"-0":e}}function Rb(t){return{integerValue:""+t}}function Nb(t,e){return _b(e)?Rb(e):Ab(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this._=void 0}}function o1(t,e,n){return t instanceof zi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Kr?Db(t,e):t instanceof Hr?Pb(t,e):function(s,r){const i=xb(s,r),o=sy(i)+sy(s._t);return kd(i)&&kd(s._t)?Rb(o):Ab(s.wt,o)}(t,e)}function a1(t,e,n){return t instanceof Kr?Db(t,e):t instanceof Hr?Pb(t,e):n}function xb(t,e){return t instanceof Qi?kd(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class zi extends Bl{}class Kr extends Bl{constructor(e){super(),this.elements=e}}function Db(t,e){const n=Ob(e);for(const s of t.elements)n.some(r=>Gn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Hr extends Bl{constructor(e){super(),this.elements=e}}function Pb(t,e){let n=Ob(e);for(const s of t.elements)n=n.filter(r=>!Gn(r,s));return{arrayValue:{values:n}}}class Qi extends Bl{constructor(e,n){super(),this.wt=e,this._t=n}}function sy(t){return Ye(t.integerValue||t.doubleValue)}function Ob(t){return Va(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n){this.field=e,this.transform=n}}function c1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Kr&&s instanceof Kr||n instanceof Hr&&s instanceof Hr?Gi(n.elements,s.elements,Gn):n instanceof Qi&&s instanceof Qi?Gn(n._t,s._t):n instanceof zi&&s instanceof zi}(t.transform,e.transform)}class u1{constructor(e,n){this.version=e,this.transformResults=n}}class ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $l{}function Lb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wo(t.key,ze.none()):new vo(t.key,t.data,ze.none());{const n=t.data,s=Tt.empty();let r=new Le(rt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ds(t.key,s,new ln(r.toArray()),ze.none())}}function l1(t,e,n){t instanceof vo?function(s,r,i){const o=s.value.clone(),a=iy(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ds?function(s,r,i){if(!iu(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=iy(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Mb(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function la(t,e,n,s){return t instanceof vo?function(r,i,o,a){if(!iu(r.precondition,i))return o;const c=r.value.clone(),u=oy(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ds?function(r,i,o,a){if(!iu(r.precondition,i))return o;const c=oy(r.fieldTransforms,a,i),u=i.data;return u.setAll(Mb(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return iu(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function h1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=xb(s.transform,r||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(s.field,i))}return n||null}function ry(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Gi(n,s,(r,i)=>c1(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vo extends $l{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ds extends $l{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function iy(t,e,n){const s=new Map;de(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,a1(o,a,n[r]))}return s}function oy(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,o1(i,o,e))}return s}class wo extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ip extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Se;function Fb(t){switch(t){default:return Y();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Ub(t){if(t===void 0)return st("GRPC error has no .code"),S.UNKNOWN;switch(t){case ot.OK:return S.OK;case ot.CANCELLED:return S.CANCELLED;case ot.UNKNOWN:return S.UNKNOWN;case ot.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ot.INTERNAL:return S.INTERNAL;case ot.UNAVAILABLE:return S.UNAVAILABLE;case ot.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ot.NOT_FOUND:return S.NOT_FOUND;case ot.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ot.ABORTED:return S.ABORTED;case ot.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ot.DATA_LOSS:return S.DATA_LOSS;default:return Y()}}(Se=ot||(ot={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return vb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=new et(K.comparator);function Zt(){return f1}const Vb=new et(K.comparator);function Go(...t){let e=Vb;for(const n of t)e=e.insert(n.key,n);return e}function Bb(t){let e=Vb;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ln(){return ha()}function $b(){return ha()}function ha(){return new sr(t=>t.toString(),(t,e)=>t.isEqual(e))}const p1=new et(K.comparator),m1=new Le(K.comparator);function we(...t){let e=m1;for(const n of t)e=e.add(n);return e}const g1=new Le(ve);function ql(){return g1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Tc.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ec(he.min(),s,ql(),Zt(),we())}}class Tc{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Tc(ht.EMPTY_BYTE_STRING,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class qb{constructor(e,n){this.targetId=e,this.It=n}}class jb{constructor(e,n,s=ht.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ay{constructor(){this.Tt=0,this.Et=uy(),this.At=ht.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=we(),n=we(),s=we();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Y()}}),new Tc(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=uy()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class y1{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Zt(),this.Bt=cy(),this.Lt=new Le(ve)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(Lu(i))if(s===0){const o=new K(i.path);this.Kt(n,o,$e.newNoDocument(o,he.min()))}else de(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Lu(a.target)){const c=new K(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,$e.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=we();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new Ec(e,n,this.Lt,this.$t,s);return this.$t=Zt(),this.Bt=cy(),this.Lt=new Le(ve),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new ay,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Le(ve),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new ay),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function cy(){return new et(K.comparator)}function uy(){return new et(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),w1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _1{constructor(e,n){this.databaseId=e,this.dt=n}}function Ba(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kb(t,e){return t.dt?e.toBase64():e.toUint8Array()}function I1(t,e){return Ba(t,e.toTimestamp())}function gt(t){return de(!!t),he.fromTimestamp(function(e){const n=Hs(e);return new We(n.seconds,n.nanos)}(t))}function bp(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Hb(t){const e=Ce.fromString(t);return de(Zb(e)),e}function $a(t,e){return bp(t.databaseId,e.path)}function $n(t,e){const n=Hb(e);if(n.get(1)!==t.databaseId.projectId)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Wb(n))}function Ad(t,e){return bp(t.databaseId,e)}function Gb(t){const e=Hb(t);return e.length===4?Ce.emptyPath():Wb(e)}function qa(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wb(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ly(t,e,n){return{name:$a(t,e),fields:n.value.mapValue.fields}}function zb(t,e,n){const s=$n(t,e.name),r=gt(e.updateTime),i=new Tt({mapValue:{fields:e.fields}}),o=$e.newFoundDocument(s,r,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function b1(t,e){return"found"in e?function(n,s){de(!!s.found),s.found.name,s.found.updateTime;const r=$n(n,s.found.name),i=gt(s.found.updateTime),o=new Tt({mapValue:{fields:s.found.fields}});return $e.newFoundDocument(r,i,o)}(t,e):"missing"in e?function(n,s){de(!!s.missing),de(!!s.readTime);const r=$n(n,s.missing),i=gt(s.readTime);return $e.newNoDocument(r,i)}(t,e):Y()}function E1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.dt?(de(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(de(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?S.UNKNOWN:Ub(c.code);return new M(u,c.message||"")}(o);n=new jb(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=$n(t,s.document.name),i=gt(s.document.updateTime),o=new Tt({mapValue:{fields:s.document.fields}}),a=$e.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ou(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=$n(t,s.document),i=s.readTime?gt(s.readTime):he.min(),o=$e.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ou([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=$n(t,s.document),i=s.removedTargetIds||[];n=new ou([],i,r,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new d1(r),o=s.targetId;n=new qb(o,i)}}return n}function ja(t,e){let n;if(e instanceof vo)n={update:ly(t,e.key,e.value)};else if(e instanceof wo)n={delete:$a(t,e.key)};else if(e instanceof ds)n={update:ly(t,e.key,e.data),updateMask:N1(e.fieldMask)};else{if(!(e instanceof Ip))return Y();n={verify:$a(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof zi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Kr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Hr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qi)return{fieldPath:i.field.canonicalString(),increment:o._t};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:I1(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function Rd(t,e){const n=e.currentDocument?function(r){return r.updateTime!==void 0?ze.updateTime(gt(r.updateTime)):r.exists!==void 0?ze.exists(r.exists):ze.none()}(e.currentDocument):ze.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)de(o.setToServerValue==="REQUEST_TIME"),a=new zi;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Kr(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Hr(u)}else"increment"in o?a=new Qi(i,o.increment):Y();const c=rt.fromServerFormat(o.fieldPath);return new bc(c,a)}(t,r)):[];if(e.update){e.update.name;const r=$n(t,e.update.name),i=new Tt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new ln(c.map(u=>rt.fromServerFormat(u)))}(e.updateMask);return new ds(r,i,o,n,s)}return new vo(r,i,n,s)}if(e.delete){const r=$n(t,e.delete);return new wo(r,n)}if(e.verify){const r=$n(t,e.verify);return new Ip(r,n)}return Y()}function T1(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?gt(s.updateTime):gt(r);return i.isEqual(he.min())&&(i=gt(r)),new u1(i,s.transformResults||[])}(n,e))):[]}function Qb(t,e){return{documents:[Ad(t,e.path)]}}function Jb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ad(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ad(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(zg(h.value))return{unaryFilter:{field:di(h.field),op:"IS_NAN"}};if(Wg(h.value))return{unaryFilter:{field:di(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(zg(h.value))return{unaryFilter:{field:di(h.field),op:"IS_NOT_NAN"}};if(Wg(h.value))return{unaryFilter:{field:di(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(h.field),op:C1(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:di(l.field),direction:k1(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||wc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Yb(t){let e=Gb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){de(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Xb(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Pi(Ei(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,wc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ws(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ws(d,h)}(n.endAt)),Tb(e,r,o,i,a,"F",c,u)}function S1(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xb(t){return t?t.unaryFilter!==void 0?[R1(t)]:t.fieldFilter!==void 0?[A1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Xb(e)).reduce((e,n)=>e.concat(n)):Y():[]}function k1(t){return v1[t]}function C1(t){return w1[t]}function di(t){return{fieldPath:t.canonicalString()}}function Ei(t){return rt.fromServerFormat(t.fieldPath)}function A1(t){return St.create(Ei(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function R1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ei(t.unaryFilter.field);return St.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ei(t.unaryFilter.field);return St.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ei(t.unaryFilter.field);return St.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ei(t.unaryFilter.field);return St.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function N1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hy(e)),e=x1(t.get(n),e);return hy(e)}function x1(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function hy(t){return t+""}function Mn(t){const e=t.length;if(de(e>=2),e===2)return de(t.charAt(0)===""&&t.charAt(1)===""),Ce.emptyPath();const n=e-2,s=[];let r="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&Y(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=t.substring(i,o),r+="\0";break;case"":r+=t.substring(i,o+1);break;default:Y()}i=o+2}return new Ce(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){return[t,Gt(e)]}function eE(t,e,n){return[t,Gt(e),n]}const D1={},P1=["prefixPath","collectionGroup","readTime","documentId"],O1=["prefixPath","collectionGroup","documentId"],L1=["collectionGroup","readTime","prefixPath","documentId"],M1=["canonicalId","targetId"],F1=["targetId","path"],U1=["path","targetId"],V1=["collectionId","parent"],B1=["indexId","uid"],$1=["uid","sequenceNumber"],q1=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],j1=["indexId","uid","orderedDocumentKey"],K1=["userId","collectionPath","documentId"],H1=["userId","collectionPath","largestBatchId"],G1=["userId","collectionGroup","largestBatchId"],tE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],W1=[...tE,"documentOverlays"],nE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],sE=nE,z1=[...sE,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends yb{constructor(e,n){super(),this.ee=e,this.currentSequenceNumber=n}}function _t(t,e){const n=W(t);return In.N(n.ee,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&l1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=la(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=la(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=$b();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Lb(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,(n,s)=>ry(n,s))&&Gi(this.baseMutations,e.baseMutations,(n,s)=>ry(n,s))}}class Tp{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){de(e.mutations.length===s.length);let r=p1;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Tp(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s,r,i=he.min(),o=he.min(),a=ht.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Os(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Os(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.ne=e}}function Q1(t,e){let n;if(e.document)n=zb(t.ne,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=K.fromSegments(e.noDocument.path),r=Wr(e.noDocument.readTime);n=$e.newNoDocument(s,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const s=K.fromSegments(e.unknownDocument.path),r=Wr(e.unknownDocument.version);n=$e.newUnknownDocument(s,r)}}return e.readTime&&n.setReadTime(function(s){const r=new We(s[0],s[1]);return he.fromTimestamp(r)}(e.readTime)),n}function fy(t,e){const n=e.key,s={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Uu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:$a(r,i.key),fields:i.data.value.mapValue.fields,updateTime:Ba(r,i.version.toTimestamp())}}(t.ne,e);else if(e.isNoDocument())s.noDocument={path:n.path.toArray(),readTime:Gr(e.version)};else{if(!e.isUnknownDocument())return Y();s.unknownDocument={path:n.path.toArray(),version:Gr(e.version)}}return s}function Uu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Gr(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Wr(t){const e=new We(t.seconds,t.nanoseconds);return he.fromTimestamp(e)}function mr(t,e){const n=(e.baseMutations||[]).map(i=>Rd(t.ne,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Rd(t.ne,i)),r=We.fromMillis(e.localWriteTimeMs);return new Ep(e.batchId,r,n,s)}function Wo(t){const e=Wr(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Wr(t.lastLimboFreeSnapshotVersion):he.min();let s;var r;return t.query.documents!==void 0?(de((r=t.query).documents.length===1),s=en(yo(Gb(r.documents[0])))):s=function(i){return en(Yb(i))}(t.query),new Os(s,t.targetId,0,t.lastListenSequenceNumber,e,n,ht.fromBase64String(t.resumeToken))}function iE(t,e){const n=Gr(e.snapshotVersion),s=Gr(e.lastLimboFreeSnapshotVersion);let r;r=Lu(e.target)?Qb(t.ne,e.target):Jb(t.ne,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:jr(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function kp(t){const e=Yb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fu(e,e.limit,"L"):e}function Rh(t,e){return new Sp(e.largestBatchId,Rd(t.ne,e.overlayMutation))}function py(t,e){const n=e.path.lastSegment();return[t,Gt(e.path.popLast()),n]}function my(t,e,n,s){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Gr(s.readTime),documentKey:Gt(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{getBundleMetadata(e,n){return gy(e).get(n).next(s=>{if(s)return{id:(r=s).bundleId,createTime:Wr(r.createTime),version:r.version};var r})}saveBundleMetadata(e,n){return gy(e).put({bundleId:(s=n).id,createTime:Gr(gt(s.createTime)),version:s.version});var s}getNamedQuery(e,n){return yy(e).get(n).next(s=>{if(s)return{name:(r=s).name,query:kp(r.bundledQuery),readTime:Wr(r.readTime)};var r})}saveNamedQuery(e,n){return yy(e).put(function(s){return{name:s.name,readTime:Gr(gt(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function gy(t){return _t(t,"bundles")}function yy(t){return _t(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.wt=e,this.userId=n}static se(e,n){const s=n.uid||"";return new jl(e,s)}getOverlay(e,n){return Do(e).get(py(this.userId,n)).next(s=>s?Rh(this.wt,s):null)}getOverlays(e,n){const s=Ln();return E.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){const r=[];return s.forEach((i,o)=>{const a=new Sp(n,o);r.push(this.ie(e,a))}),E.waitFor(r)}removeOverlaysForBatchId(e,n,s){const r=new Set;n.forEach(o=>r.add(Gt(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(Do(e).W("collectionPathOverlayIndex",a))}),E.waitFor(i)}getOverlaysForCollection(e,n,s){const r=Ln(),i=Gt(n),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Do(e).K("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Rh(this.wt,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,n,s,r){const i=Ln();let o;const a=IDBKeyRange.bound([this.userId,n,s],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Do(e).J({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Rh(this.wt,u);i.size()<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}ie(e,n){return Do(e).put(function(s,r,i){const[o,a,c]=py(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:ja(s.ne,i.mutation)}}(this.wt,this.userId,n))}}function Do(t){return _t(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){}re(e,n){this.oe(e,n),n.ue()}oe(e,n){if("nullValue"in e)this.ce(n,5);else if("booleanValue"in e)this.ce(n,10),n.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(n,15),n.ae(Ye(e.integerValue));else if("doubleValue"in e){const s=Ye(e.doubleValue);isNaN(s)?this.ce(n,13):(this.ce(n,15),Fa(s)?n.ae(0):n.ae(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ce(n,20),typeof s=="string"?n.he(s):(n.he(`${s.seconds||""}`),n.ae(s.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,n),this.fe(n);else if("bytesValue"in e)this.ce(n,30),n.de(Br(e.bytesValue)),this.fe(n);else if("referenceValue"in e)this._e(e.referenceValue,n);else if("geoPointValue"in e){const s=e.geoPointValue;this.ce(n,45),n.ae(s.latitude||0),n.ae(s.longitude||0)}else"mapValue"in e?Ib(e)?this.ce(n,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,n),this.fe(n)):"arrayValue"in e?(this.me(e.arrayValue,n),this.fe(n)):Y()}le(e,n){this.ce(n,25),this.ge(e,n)}ge(e,n){n.he(e)}we(e,n){const s=e.fields||{};this.ce(n,55);for(const r of Object.keys(s))this.le(r,n),this.oe(s[r],n)}me(e,n){const s=e.values||[];this.ce(n,50);for(const r of s)this.oe(r,n)}_e(e,n){this.ce(n,37),K.fromName(e).path.forEach(s=>{this.ce(n,60),this.ge(s,n)})}ce(e,n){e.ae(n)}fe(e){e.ae(2)}}gr.ye=new gr;function Y1(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function vy(t){const e=64-function(n){let s=0;for(let r=0;r<8;++r){const i=Y1(255&n[r]);if(s+=i,i!==8)break}return s}(t);return Math.ceil(e/8)}class X1{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.Ie(s.value),s=n.next();this.Te()}Ee(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.Ae(s.value),s=n.next();this.Re()}be(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.Ie(s);else if(s<2048)this.Ie(960|s>>>6),this.Ie(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.Ie(480|s>>>12),this.Ie(128|63&s>>>6),this.Ie(128|63&s);else{const r=n.codePointAt(0);this.Ie(240|r>>>18),this.Ie(128|63&r>>>12),this.Ie(128|63&r>>>6),this.Ie(128|63&r)}}this.Te()}Pe(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.Ae(s);else if(s<2048)this.Ae(960|s>>>6),this.Ae(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s);else{const r=n.codePointAt(0);this.Ae(240|r>>>18),this.Ae(128|63&r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r)}}this.Re()}ve(e){const n=this.Ve(e),s=vy(n);this.Se(1+s),this.buffer[this.position++]=255&s;for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=255&n[r]}De(e){const n=this.Ve(e),s=vy(n);this.Se(1+s),this.buffer[this.position++]=~(255&s);for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=~(255&n[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Me(){return this.buffer.slice(0,this.position)}Ve(e){const n=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&n[0])!=0;n[0]^=s?255:128;for(let r=1;r<n.length;++r)n[r]^=s?255:0;return n}Ie(e){const n=255&e;n===0?(this.xe(0),this.xe(255)):n===255?(this.xe(255),this.xe(0)):this.xe(n)}Ae(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const n=e+this.position;if(n<=this.buffer.length)return;let s=2*this.buffer.length;s<n&&(s=n);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class Z1{constructor(e){this.Oe=e}de(e){this.Oe.pe(e)}he(e){this.Oe.be(e)}ae(e){this.Oe.ve(e)}ue(){this.Oe.Ce()}}class eO{constructor(e){this.Oe=e}de(e){this.Oe.Ee(e)}he(e){this.Oe.Pe(e)}ae(e){this.Oe.De(e)}ue(){this.Oe.Ne()}}class Po{constructor(){this.Oe=new X1,this.Fe=new Z1(this.Oe),this.$e=new eO(this.Oe)}seed(e){this.Oe.seed(e)}Be(e){return e===0?this.Fe:this.$e}Me(){return this.Oe.Me()}reset(){this.Oe.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,s,r){this.indexId=e,this.documentKey=n,this.arrayValue=s,this.directionalValue=r}Le(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(n);return s.set(this.directionalValue,0),n!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new yr(this.indexId,this.documentKey,this.arrayValue,s)}}function ar(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=wy(t.arrayValue,e.arrayValue),n!==0?n:(n=wy(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function wy(t,e){for(let n=0;n<t.length&&n<e.length;++n){const s=t[n]-e[n];if(s!==0)return s}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const n of e.filters){const s=n;s.ht()?this.Ke=s:this.qe.push(s)}}Ge(e){const n=Td(e);if(n!==void 0&&!this.Qe(n))return!1;const s=hr(e);let r=0,i=0;for(;r<s.length&&this.Qe(s[r]);++r);if(r===s.length)return!0;if(this.Ke!==void 0){const o=s[r];if(!this.je(this.Ke,o)||!this.We(this.Ue[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Ue.length||!this.We(this.Ue[i++],o))return!1}return!0}Qe(e){for(const n of this.qe)if(this.je(n,e))return!0;return!1}je(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===s}We(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){this.ze=new Cp}addToCollectionParentIndex(e,n){return this.ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(pn.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class Cp{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Le(Ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Le(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Uint8Array(0);class sO{constructor(e,n){this.user=e,this.databaseId=n,this.He=new Cp,this.Je=new sr(s=>jr(s),(s,r)=>_c(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.He.has(n)){const s=n.lastSegment(),r=n.popLast();e.addOnCommittedListener(()=>{this.He.add(n)});const i={collectionId:s,parent:Gt(r)};return _y(e).put(i)}return E.resolve()}getCollectionParents(e,n){const s=[],r=IDBKeyRange.bound([n,""],[db(n),""],!1,!0);return _y(e).K(r).next(i=>{for(const o of i){if(o.collectionId!==n)break;s.push(Mn(o.parent))}return s})}addFieldIndex(e,n){const s=zc(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete r.indexId;const i=s.add(r);if(n.indexState){const o=Lo(e);return i.next(a=>{o.put(my(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const s=zc(e),r=Lo(e),i=Oo(e);return s.delete(n.indexId).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const s=Oo(e);let r=!0;const i=new Map;return E.forEach(this.Ye(n),o=>this.Xe(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=we();const a=[];return E.forEach(i,(c,u)=>{var l;U("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(I=>`${I.fieldPath}:${I.kind}`).join(",")}`} to execute ${jr(n)}`);const h=function(I,C){const D=Td(C);if(D===void 0)return null;for(const P of Mu(I,D.fieldPath))switch(P.op){case"array-contains-any":return P.value.arrayValue.values||[];case"array-contains":return[P.value]}return null}(u,c),d=function(I,C){const D=new Map;for(const P of hr(C))for(const $ of Mu(I,P.fieldPath))switch($.op){case"==":case"in":D.set(P.fieldPath.canonicalString(),$.value);break;case"not-in":case"!=":return D.set(P.fieldPath.canonicalString(),$.value),Array.from(D.values())}return null}(u,c),f=function(I,C){const D=[];let P=!0;for(const $ of hr(C)){const x=$.kind===0?Xg(I,$.fieldPath,I.startAt):Zg(I,$.fieldPath,I.startAt);D.push(x.value),P&&(P=x.inclusive)}return new Ws(D,P)}(u,c),p=function(I,C){const D=[];let P=!0;for(const $ of hr(C)){const x=$.kind===0?Zg(I,$.fieldPath,I.endAt):Xg(I,$.fieldPath,I.endAt);D.push(x.value),P&&(P=x.inclusive)}return new Ws(D,P)}(u,c),b=this.Ze(c,u,f),_=this.Ze(c,u,p),y=this.tn(c,u,d),g=this.en(c.indexId,h,b,f.inclusive,_,p.inclusive,y);return E.forEach(g,I=>s.j(I,n.limit).next(C=>{C.forEach(D=>{const P=K.fromSegments(D.documentKey);o.has(P)||(o=o.add(P),a.push(P))})}))}).next(()=>a)}return E.resolve(null)})}Ye(e){let n=this.Je.get(e);return n||(n=[e],this.Je.set(e,n),n)}en(e,n,s,r,i,o,a){const c=(n!=null?n.length:1)*Math.max(s.length,i.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.nn(n[h/u]):Wc,f=this.sn(e,d,s[h%u],r),p=this.rn(e,d,i[h%u],o),b=a.map(_=>this.sn(e,d,_,!0));l.push(...this.createRange(f,p,b))}return l}sn(e,n,s,r){const i=new yr(e,K.empty(),n,s);return r?i:i.Le()}rn(e,n,s,r){const i=new yr(e,K.empty(),n,s);return r?i.Le():i}Xe(e,n){const s=new tO(n),r=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.Ge(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let s=2;return E.forEach(this.Ye(n),r=>this.Xe(e,r).next(i=>{i?s!==0&&i.fields.length<function(o){let a=new Le(rt.comparator),c=!1;for(const u of o.filters){const l=u;l.field.isKeyField()||(l.op==="array-contains"||l.op==="array-contains-any"?c=!0:a=a.add(l.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(c?1:0)}(r)&&(s=1):s=0})).next(()=>s)}on(e,n){const s=new Po;for(const r of hr(e)){const i=n.data.field(r.fieldPath);if(i==null)return null;const o=s.Be(r.kind);gr.ye.re(i,o)}return s.Me()}nn(e){const n=new Po;return gr.ye.re(e,n.Be(0)),n.Me()}un(e,n){const s=new Po;return gr.ye.re(qr(this.databaseId,n),s.Be(function(r){const i=hr(r);return i.length===0?0:i[i.length-1].kind}(e))),s.Me()}tn(e,n,s){if(s===null)return[];let r=[];r.push(new Po);let i=0;for(const o of hr(e)){const a=s[i++];for(const c of r)if(this.cn(n,o.fieldPath)&&Va(a))r=this.an(r,o,a);else{const u=c.Be(o.kind);gr.ye.re(a,u)}}return this.hn(r)}Ze(e,n,s){return this.tn(e,n,s.position)}hn(e){const n=[];for(let s=0;s<e.length;++s)n[s]=e[s].Me();return n}an(e,n,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const c=new Po;c.seed(a.Me()),gr.ye.re(o,c.Be(n.kind)),i.push(c)}return i}cn(e,n){return!!e.filters.find(s=>s instanceof St&&s.field.isEqual(n)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,n){const s=zc(e),r=Lo(e);return(n?s.K("collectionGroupIndex",IDBKeyRange.bound(n,n)):s.K()).next(i=>{const o=[];return E.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Ou(l.sequenceNumber,new pn(Wr(l.readTime),new K(Mn(l.documentKey)),l.largestBatchId)):Ou.empty(),d=u.fields.map(([f,p])=>new VP(rt.fromServerFormat(f),p));return new fb(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:ve(s.collectionGroup,r.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,s){const r=zc(e),i=Lo(e);return this.ln(e).next(o=>r.K("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>E.forEach(a,c=>i.put(my(c.indexId,this.user,o,s)))))}updateIndexEntries(e,n){const s=new Map;return E.forEach(n,(r,i)=>{const o=s.get(r.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),E.forEach(a,c=>this.fn(e,r,c).next(u=>{const l=this.dn(i,c);return u.isEqual(l)?E.resolve():this._n(e,i,c,u,l)}))))})}wn(e,n,s,r){return Oo(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(s,n.key),documentKey:n.key.path.toArray()})}mn(e,n,s,r){return Oo(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(s,n.key),n.key.path.toArray()])}fn(e,n,s){const r=Oo(e);let i=new Le(ar);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.un(s,n)])},(o,a)=>{i=i.add(new yr(s.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}dn(e,n){let s=new Le(ar);const r=this.on(n,e);if(r==null)return s;const i=Td(n);if(i!=null){const o=e.data.field(i.fieldPath);if(Va(o))for(const a of o.arrayValue.values||[])s=s.add(new yr(n.indexId,e.key,this.nn(a),r))}else s=s.add(new yr(n.indexId,e.key,Wc,r));return s}_n(e,n,s,r,i){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let p=hi(d),b=hi(f);for(;p||b;){let _=!1,y=!1;if(p&&b){const g=u(p,b);g<0?y=!0:g>0&&(_=!0)}else p!=null?y=!0:_=!0;_?(l(b),b=hi(f)):y?(h(p),p=hi(d)):(p=hi(d),b=hi(f))}}(r,i,ar,a=>{o.push(this.wn(e,n,s,a))},a=>{o.push(this.mn(e,n,s,a))}),E.waitFor(o)}ln(e){let n=1;return Lo(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),n=r.sequenceNumber+1}).next(()=>n)}createRange(e,n,s){s=s.sort((o,a)=>ar(o,a)).filter((o,a,c)=>!a||ar(o,c[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=ar(o,e),c=ar(o,n);if(a===0)r[0]=e.Le();else if(a>0&&c<0)r.push(o),r.push(o.Le());else if(c>0)break}r.push(n);const i=[];for(let o=0;o<r.length;o+=2)i.push(IDBKeyRange.bound([r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,Wc,[]],[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,Wc,[]]));return i}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Iy)}getMinOffset(e,n){return E.mapArray(this.Ye(n),s=>this.Xe(e,s).next(r=>r||Y())).next(Iy)}}function _y(t){return _t(t,"collectionParents")}function Oo(t){return _t(t,"indexEntries")}function zc(t){return _t(t,"indexConfiguration")}function Lo(t){return _t(t,"indexState")}function Iy(t){de(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let s=1;s<t.length;s++){const r=t[s].indexState.offset;pp(r,e)<0&&(e=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new pn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Jt{constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t,e,n){const s=t.store("mutations"),r=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=s.J({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{de(a===1)}));const u=[];for(const l of n.mutations){const h=eE(e,l.key.path,n.batchId);i.push(r.delete(h)),u.push(l.key)}return E.waitFor(i).next(()=>u)}function Vu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Y();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(41943040,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);class Kl{constructor(e,n,s,r){this.userId=e,this.wt=n,this.indexManager=s,this.referenceDelegate=r,this.gn={}}static se(e,n,s,r){de(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Kl(i,n,s,r)}checkEmpty(e){let n=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ws(e).J({index:"userMutationsIndex",range:s},(r,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,s,r){const i=wi(e),o=ws(e);return o.add({}).next(a=>{de(typeof a=="number");const c=new Ep(a,n,s,r),u=function(d,f,p){const b=p.baseMutations.map(y=>ja(d.ne,y)),_=p.mutations.map(y=>ja(d.ne,y));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:b,mutations:_}}(this.wt,this.userId,c),l=[];let h=new Le((d,f)=>ve(d.canonicalString(),f.canonicalString()));for(const d of r){const f=eE(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(f,D1))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.gn[a]=c.keys()}),E.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return ws(e).get(n).next(s=>s?(de(s.userId===this.userId),mr(this.wt,s)):null)}yn(e,n){return this.gn[n]?E.resolve(this.gn[n]):this.lookupMutationBatch(e,n).next(s=>{if(s){const r=s.keys();return this.gn[n]=r,r}return null})}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return ws(e).J({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(de(a.batchId>=s),i=mr(this.wt,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return ws(e).J({index:"userMutationsIndex",range:n,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ws(e).K("userMutationsIndex",n).next(s=>s.map(r=>mr(this.wt,r)))}getAllMutationBatchesAffectingDocumentKey(e,n){const s=au(this.userId,n.path),r=IDBKeyRange.lowerBound(s),i=[];return wi(e).J({range:r},(o,a,c)=>{const[u,l,h]=o,d=Mn(l);if(u===this.userId&&n.path.isEqual(d))return ws(e).get(h).next(f=>{if(!f)throw Y();de(f.userId===this.userId),i.push(mr(this.wt,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Le(ve);const r=[];return n.forEach(i=>{const o=au(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=wi(e).J({range:a},(u,l,h)=>{const[d,f,p]=u,b=Mn(f);d===this.userId&&i.path.isEqual(b)?s=s.add(p):h.done()});r.push(c)}),E.waitFor(r).next(()=>this.pn(e,s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1,i=au(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new Le(ve);return wi(e).J({range:o},(c,u,l)=>{const[h,d,f]=c,p=Mn(d);h===this.userId&&s.isPrefixOf(p)?p.length===r&&(a=a.add(f)):l.done()}).next(()=>this.pn(e,a))}pn(e,n){const s=[],r=[];return n.forEach(i=>{r.push(ws(e).get(i).next(o=>{if(o===null)throw Y();de(o.userId===this.userId),s.push(mr(this.wt,o))}))}),E.waitFor(r).next(()=>s)}removeMutationBatch(e,n){return oE(e.ee,this.userId,n).next(s=>(e.addOnCommittedListener(()=>{this.In(n.batchId)}),E.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return wi(e).J({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=Mn(i[1]);r.push(c)}else a.done()}).next(()=>{de(r.length===0)})})}containsKey(e,n){return aE(e,this.userId,n)}Tn(e){return cE(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function aE(t,e,n){const s=au(e,n.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return wi(t).J({range:i,H:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===r&&(o=!0),u.done()}).next(()=>o)}function ws(t){return _t(t,"mutations")}function wi(t){return _t(t,"documentMutations")}function cE(t){return _t(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new zr(0)}static Rn(){return new zr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n){this.referenceDelegate=e,this.wt=n}allocateTargetId(e){return this.bn(e).next(n=>{const s=new zr(n.highestTargetId);return n.highestTargetId=s.next(),this.Pn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.bn(e).next(n=>he.fromTimestamp(new We(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,s){return this.bn(e).next(r=>(r.highestListenSequenceNumber=n,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),n>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=n),this.Pn(e,r)))}addTargetData(e,n){return this.vn(e,n).next(()=>this.bn(e).next(s=>(s.targetCount+=1,this.Vn(n,s),this.Pn(e,s))))}updateTargetData(e,n){return this.vn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>fi(e).delete(n.targetId)).next(()=>this.bn(e)).next(s=>(de(s.targetCount>0),s.targetCount-=1,this.Pn(e,s)))}removeTargets(e,n,s){let r=0;const i=[];return fi(e).J((o,a)=>{const c=Wo(a);c.sequenceNumber<=n&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>E.waitFor(i)).next(()=>r)}forEachTarget(e,n){return fi(e).J((s,r)=>{const i=Wo(r);n(i)})}bn(e){return Ey(e).get("targetGlobalKey").next(n=>(de(n!==null),n))}Pn(e,n){return Ey(e).put("targetGlobalKey",n)}vn(e,n){return fi(e).put(iE(this.wt,n))}Vn(e,n){let s=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,s=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.bn(e).next(n=>n.targetCount)}getTargetData(e,n){const s=jr(n),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return fi(e).J({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const u=Wo(a);_c(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,s){const r=[],i=ks(e);return n.forEach(o=>{const a=Gt(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),E.waitFor(r)}removeMatchingKeys(e,n,s){const r=ks(e);return E.forEach(n,i=>{const o=Gt(i.path);return E.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,n){const s=ks(e),r=IDBKeyRange.bound([n],[n+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,n){const s=IDBKeyRange.bound([n],[n+1],!1,!0),r=ks(e);let i=we();return r.J({range:s,H:!0},(o,a,c)=>{const u=Mn(o[1]),l=new K(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const s=Gt(n.path),r=IDBKeyRange.bound([s],[db(s)],!1,!0);let i=0;return ks(e).J({index:"documentTargetsIndex",H:!0,range:r},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}te(e,n){return fi(e).get(n).next(s=>s?Wo(s):null)}}function fi(t){return _t(t,"targets")}function Ey(t){return _t(t,"targetGlobal")}function ks(t){return _t(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty([t,e],[n,s]){const r=ve(t,n);return r===0?ve(e,s):r}class iO{constructor(e){this.Sn=e,this.buffer=new Le(Ty),this.Dn=0}Cn(){return++this.Dn}xn(e){const n=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Ty(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class oO{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Nn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return this.Nn!==null}kn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){nr(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await tr(n)}await this.kn(3e5)})}}class aO{constructor(e,n){this.Mn=e,this.params=n}calculateTargetCount(e,n){return this.Mn.On(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return E.resolve(Xt.ot);const s=new iO(n);return this.Mn.forEachTarget(e,r=>s.xn(r.sequenceNumber)).next(()=>this.Mn.Fn(e,r=>s.xn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Mn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Mn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(by)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),by):this.$n(e,n))}getCacheSize(e){return this.Mn.getCacheSize(e)}$n(e,n){let s,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(u=Date.now(),Ed()<=Re.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n){this.db=e,this.garbageCollector=function(s,r){return new aO(s,r)}(this,n)}On(e){const n=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}Bn(e){let n=0;return this.Fn(e,s=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Fn(e,n){return this.Ln(e,(s,r)=>n(r))}addReference(e,n,s){return Qc(e,s)}removeReference(e,n,s){return Qc(e,s)}removeTargets(e,n,s){return this.db.getTargetCache().removeTargets(e,n,s)}markPotentiallyOrphaned(e,n){return Qc(e,n)}Un(e,n){return function(s,r){let i=!1;return cE(s).Y(o=>aE(s,o,r).next(a=>(a&&(i=!0),E.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ln(e,(o,a)=>{if(a<=n){const c=this.Un(e,o).next(u=>{if(!u)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,he.min()),ks(e).delete([0,Gt(o.path)])))});r.push(c)}}).next(()=>E.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,n){return Qc(e,n)}Ln(e,n){const s=ks(e);let r,i=Xt.ot;return s.J({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Xt.ot&&n(new K(Mn(r)),i),i=u,r=c):i=Xt.ot}).next(()=>{i!==Xt.ot&&n(new K(Mn(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Qc(t,e){return ks(t).put(function(n,s){return{targetId:0,path:Gt(n.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.changes=new sr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,s){return cr(e).put(s)}removeEntry(e,n,s){return cr(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Uu(i),o[o.length-1]]}(n,s))}updateMetadata(e,n){return this.getMetadata(e).next(s=>(s.byteSize+=n,this.qn(e,s)))}getEntry(e,n){let s=$e.newInvalidDocument(n);return cr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Mo(n))},(r,i)=>{s=this.Kn(n,i)}).next(()=>s)}Gn(e,n){let s={size:0,document:$e.newInvalidDocument(n)};return cr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Mo(n))},(r,i)=>{s={document:this.Kn(n,i),size:Vu(i)}}).next(()=>s)}getEntries(e,n){let s=Zt();return this.Qn(e,n,(r,i)=>{const o=this.Kn(r,i);s=s.insert(r,o)}).next(()=>s)}jn(e,n){let s=Zt(),r=new et(K.comparator);return this.Qn(e,n,(i,o)=>{const a=this.Kn(i,o);s=s.insert(i,a),r=r.insert(i,Vu(o))}).next(()=>({documents:s,Wn:r}))}Qn(e,n,s){if(n.isEmpty())return E.resolve();let r=new Le(Cy);n.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(Mo(r.first()),Mo(r.last())),o=r.getIterator();let a=o.getNext();return cr(e).J({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=K.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Cy(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,u),a=o.hasNext()?o.getNext():null),a?l.q(Mo(a)):l.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,s){const r=[n.popLast().toArray(),n.lastSegment(),Uu(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],i=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return cr(e).K(IDBKeyRange.bound(r,i,!0)).next(o=>{let a=Zt();for(const c of o){const u=this.Kn(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,s,r){let i=Zt();const o=ky(n,s),a=ky(n,pn.max());return cr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Kn(K.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===r&&l.done()}).next(()=>i)}newChangeBuffer(e){return new lO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Sy(e).get("remoteDocumentGlobalKey").next(n=>(de(!!n),n))}qn(e,n){return Sy(e).put("remoteDocumentGlobalKey",n)}Kn(e,n){if(n){const s=Q1(this.wt,n);if(!(s.isNoDocument()&&s.version.isEqual(he.min())))return s}return $e.newInvalidDocument(e)}}function lE(t){return new uO(t)}class lO extends uE{constructor(e,n){super(),this.zn=e,this.trackRemovals=n,this.Hn=new sr(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const n=[];let s=0,r=new Le((i,o)=>ve(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Hn.get(i);if(n.push(this.zn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=fy(this.zn.wt,o);r=r.add(i.path.popLast()),s+=Vu(c)-a.size,n.push(this.zn.addEntry(e,i,c))}else if(s-=a.size,this.trackRemovals){const c=fy(this.zn.wt,o.convertToNoDocument(he.min()));n.push(this.zn.addEntry(e,i,c))}}),r.forEach(i=>{n.push(this.zn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.zn.updateMetadata(e,s)),E.waitFor(n)}getFromCache(e,n){return this.zn.Gn(e,n).next(s=>(this.Hn.set(n,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,n){return this.zn.jn(e,n).next(({documents:s,Wn:r})=>(r.forEach((i,o)=>{this.Hn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function Sy(t){return _t(t,"remoteDocumentGlobal")}function cr(t){return _t(t,"remoteDocumentsV14")}function Mo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ky(t,e){const n=e.documentKey.path.toArray();return[t,Uu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Cy(t,e){const n=t.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<n.length-2&&i<s.length-2;++i)if(r=ve(n[i],s[i]),r)return r;return r=ve(n.length,s.length),r||(r=ve(n[n.length-2],s[s.length-2]),r||ve(n[n.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&la(s.mutation,r,ln.empty(),We.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,we()).next(()=>s))}getLocalViewOfDocuments(e,n,s=we()){const r=Ln();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Go();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ln();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,we()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Zt();const o=ha(),a=ha();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ds)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),la(l.mutation,u,l.mutation.getFieldMask(),We.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new hO(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ha();let r=new et((o,a)=>o-a),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||ln.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||we()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=$b();l.forEach(d=>{if(!i.has(d)){const f=Lb(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):E.resolve(Ln());let a=-1,c=i;return o.next(u=>E.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?E.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,we())).next(l=>({batchId:a,changes:Bb(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let r=Go();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Go();return this.indexManager.getCollectionParents(e,r).next(o=>E.forEach(o,a=>{const c=function(u,l){return new hs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,$e.newInvalidDocument(u)))});let o=Go();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&la(u.mutation,c,ln.empty(),We.now()),_p(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):E.resolve($e.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return E.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:gt(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:kp(s.bundledQuery),readTime:gt(s.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(){this.overlays=new et(K.comparator),this.Xn=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ln();return E.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const r=Ln(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return E.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new et((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Ln(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ln(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return E.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Sp(n,s));let i=this.Xn.get(n);i===void 0&&(i=we(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.Zn=new Le(ft.ts),this.es=new Le(ft.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new ft(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new ft(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new K(new Ce([])),s=new ft(n,e),r=new ft(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new K(new Ce([])),s=new ft(n,e),r=new ft(n,e+1);let i=we();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ft{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return K.comparator(e.key,n.key)||ve(e.ls,n.ls)}static ns(e,n){return ve(e.ls,n.ls)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Le(ft.ts)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ep(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new ft(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ft(n,0),r=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Le(ve);return n.forEach(r=>{const i=new ft(r,0),o=new ft(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),E.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new ft(new K(i),0);let a=new Le(ve);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),E.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){de(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return E.forEach(n.mutations,r=>{const i=new ft(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new ft(n,0),r=this.ds.firstAfterOrEqual(s);return E.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.ps=e,this.docs=new et(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let s=Zt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$e.newInvalidDocument(r))}),E.resolve(s)}getAllFromCollection(e,n,s){let r=Zt();const i=new K(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||pp(mb(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,r){Y()}Is(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new gO(this)}getSize(e){return E.resolve(this.size)}}class gO extends uE{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.persistence=e,this.Ts=new sr(n=>jr(n),_c),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Es=0,this.As=new Ap,this.targetCount=0,this.Rs=zr.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),E.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new zr(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.vn(n),E.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),E.waitFor(i).next(()=>r)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Xt(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new yO(this),this.indexManager=new nO,this.remoteDocumentCache=function(s){return new mO(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new rE(n),this.Ds=new dO(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new pO(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new vO(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return E.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class vO extends yb{constructor(e){super(),this.currentSequenceNumber=e}}class Hl{constructor(e){this.persistence=e,this.ks=new Ap,this.Ms=null}static Os(e){return new Hl(e)}get Fs(){if(this.Ms)return this.Ms;throw Y()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),E.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Fs,s=>{const r=K.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,he.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return E.or([()=>E.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.wt=e}M(e,n,s,r){const i=new Vl("createOrUpgrade",n);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",dy,{unique:!0}),a.createObjectStore("documentMutations")}(e),Ay(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Ay(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:he.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").K().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",dy,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return E.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Bs(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(i)))),s<7&&r>=7&&(o=o.next(()=>this.Us(i))),s<8&&r>=8&&(o=o.next(()=>this.qs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.Ks(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:K1});c.createIndex("collectionPathOverlayIndex",H1,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",G1,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:P1});c.createIndex("documentKeyIndex",O1),c.createIndex("collectionGroupIndex",L1)}(e)).next(()=>this.Gs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.Qs(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:B1}).createIndex("sequenceNumberIndex",$1,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:q1}).createIndex("documentKeyIndex",j1,{unique:!1})}(e))),o}Ls(e){let n=0;return e.store("remoteDocuments").J((s,r)=>{n+=Vu(r)}).next(()=>{const s={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Bs(e){const n=e.store("mutationQueues"),s=e.store("mutations");return n.K().next(r=>E.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.K("userMutationsIndex",o).next(a=>E.forEach(a,c=>{de(c.userId===i.userId);const u=mr(this.wt,c);return oE(e,i.userId,u).next(()=>{})}))}))}Us(e){const n=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.J((o,a)=>{const c=new Ce(o),u=function(l){return[0,Gt(l)]}(c);i.push(n.get(u).next(l=>l?E.resolve():(h=>n.put({targetId:0,path:Gt(h),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>E.waitFor(i))})}qs(e,n){e.createObjectStore("collectionParents",{keyPath:V1});const s=n.store("collectionParents"),r=new Cp,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:Gt(c)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const c=new Ce(o);return i(c.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,c],u)=>{const l=Mn(a);return i(l.popLast())}))}Ks(e){const n=e.store("targets");return n.J((s,r)=>{const i=Wo(r),o=iE(this.wt,i);return n.put(o)})}Gs(e,n){const s=n.store("remoteDocuments"),r=[];return s.J((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new K(Ce.fromString(u.document.name).popFirst(5)):u.noDocument?K.fromSegments(u.noDocument.path):u.unknownDocument?K.fromSegments(u.unknownDocument.path):Y()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(l))}).next(()=>E.waitFor(r))}Qs(e,n){const s=n.store("mutations"),r=lE(this.wt),i=new dE(Hl.Os,this.wt.ne);return s.K().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:we();mr(this.wt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),E.forEach(a,(c,u)=>{const l=new pt(u),h=jl.se(this.wt,l),d=i.getIndexManager(l),f=Kl.se(l,this.wt,d,i.referenceDelegate);return new hE(r,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Nd(n,Xt.ot),c).next()})})}}function Ay(t){t.createObjectStore("targetDocuments",{keyPath:F1}).createIndex("documentTargetsIndex",U1,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",M1,{unique:!0}),t.createObjectStore("targetGlobal")}const Nh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Rp{constructor(e,n,s,r,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=s,this.js=i,this.window=o,this.document=a,this.Ws=u,this.zs=l,this.Hs=h,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=d=>Promise.resolve(),!Rp.V())throw new M(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cO(this,r),this.ei=n+"main",this.wt=new rE(c),this.ni=new In(this.ei,this.Hs,new wO(this.wt)),this.Vs=new rO(this.referenceDelegate,this.wt),this.remoteDocumentCache=lE(this.wt),this.Ds=new J1,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,l===!1&&st("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(S.FAILED_PRECONDITION,Nh);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Vs.getHighestSequenceNumber(e))}).then(e=>{this.Ps=new Xt(e,this.Ws)}).then(()=>{this.vs=!0}).catch(e=>(this.ni&&this.ni.close(),Promise.reject(e)))}ci(e){return this.ti=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget(async()=>{this.started&&await this.ii()}))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Jc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ai(e).next(n=>{n||(this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)))})}).next(()=>this.hi(e)).next(n=>this.isPrimary&&!n?this.li(e).next(()=>!1):!!n&&this.fi(e).next(()=>!0))).catch(e=>{if(nr(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.js.enqueueRetryable(()=>this.ti(e)),this.isPrimary=e})}ai(e){return Fo(e).get("owner").next(n=>E.resolve(this.di(n)))}_i(e){return Jc(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const s=_t(n,"clientMetadata");return s.K().next(r=>{const i=this.gi(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return E.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.si)for(const n of e)this.si.removeItem(this.yi(n.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ii().then(()=>this.wi()).then(()=>this.ui()))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?E.resolve(!0):Fo(e).get("owner").next(n=>{if(n!==null&&this.mi(n.leaseTimestampMs,5e3)&&!this.pi(n.ownerId)){if(this.di(n)&&this.networkEnabled)return!0;if(!this.di(n)){if(!n.allowTabSynchronization)throw new M(S.FAILED_PRECONDITION,Nh);return!1}}return!(!this.networkEnabled||!this.inForeground)||Jc(e).K().next(s=>this.gi(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Nd(e,Xt.ot);return this.li(n).next(()=>this._i(n))}),this.ni.close(),this.Ai()}gi(e,n){return e.filter(s=>this.mi(s.updateTimeMs,n)&&!this.pi(s.clientId))}Ri(){return this.runTransaction("getActiveClients","readonly",e=>Jc(e).K().next(n=>this.gi(n,18e5).map(s=>s.clientId)))}get started(){return this.vs}getMutationQueue(e,n){return Kl.se(e,this.wt,n,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sO(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return jl.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,n,s){U("IndexedDbPersistence","Starting transaction:",e);const r=n==="readonly"?"readonly":"readwrite",i=(o=this.Hs)===15?z1:o===14?sE:o===13?nE:o===12?W1:o===11?tE:void Y();var o;let a;return this.ni.runTransaction(e,r,i,c=>(a=new Nd(c,this.Ps?this.Ps.next():Xt.ot),n==="readwrite-primary"?this.ai(a).next(u=>!!u||this.hi(a)).next(u=>{if(!u)throw st(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)),new M(S.FAILED_PRECONDITION,gb);return s(a)}).next(u=>this.fi(a).next(()=>u)):this.bi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}bi(e){return Fo(e).get("owner").next(n=>{if(n!==null&&this.mi(n.leaseTimestampMs,5e3)&&!this.pi(n.ownerId)&&!this.di(n)&&!(this.zs||this.allowTabSynchronization&&n.allowTabSynchronization))throw new M(S.FAILED_PRECONDITION,Nh)})}fi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fo(e).put("owner",n)}static V(){return In.V()}li(e){const n=Fo(e);return n.get("owner").next(s=>this.di(s)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):E.resolve())}mi(e,n){const s=Date.now();return!(e<s-n)&&(!(e>s)||(st(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ys=()=>{this.js.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ii()))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground=this.document.visibilityState==="visible")}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Js=()=>{this.Ii(),iC()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var n;try{const s=((n=this.si)===null||n===void 0?void 0:n.getItem(this.yi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return st("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(e){st("Failed to set zombie client id.",e)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch{}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Fo(t){return _t(t,"owner")}function Jc(t){return _t(t,"clientMetadata")}function Np(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=we(),r=we();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xp(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(ny(n))return E.resolve(null);let s=en(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Fu(n,null,"F"),s=en(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=we(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ki(n,a);return this.Mi(n,u,o,c.readTime)?this.Ci(e,Fu(n,null,"F")):this.Oi(e,u,n,c)}))})))}xi(e,n,s,r){return ny(n)||r.isEqual(he.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(e,n):(Ed()<=Re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cd(n)),this.Oi(e,o,n,pb(r,-1)))})}ki(e,n){let s=new Le(Cb(e));return n.forEach((r,i)=>{_p(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return Ed()<=Re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Cd(n)),this.Di.getDocumentsMatchingQuery(e,n,pn.min())}Oi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new et(ve),this.Bi=new sr(i=>jr(i),_c),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hE(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function pE(t,e,n,s){return new _O(t,e,n,s)}async function mE(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=we();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function IO(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const b=c.docVersions.get(f);de(b!==null),p.version.compareTo(b)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=we();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function gE(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function bO(t,e){const n=W(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ht.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(h,f),function(p,b,_){return p.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,l)&&a.push(n.Vs.updateTargetData(i,f))});let c=Zt(),u=we();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(yE(i,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(he.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=r,i))}function yE(t,e,n){let s=we(),r=we();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Zt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function EO(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ji(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,E.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new Os(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Yi(t,e,n){const s=W(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!nr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function Bu(t,e,n){const s=W(t);let r=he.min(),i=we();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=W(a),h=l.Bi.get(u);return h!==void 0?E.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(s,o,en(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:he.min(),n?i:we())).next(a=>(_E(s,kb(e),a),{documents:a,ji:i})))}function vE(t,e){const n=W(t),s=W(n.Vs),r=n.$i.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",i=>s.te(i,e).next(o=>o?o.target:null))}function wE(t,e){const n=W(t),s=n.Li.get(e)||he.min();return n.persistence.runTransaction("Get new document changes","readonly",r=>n.Ui.getAllFromCollectionGroup(r,e,pb(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(_E(n,e,r),r))}function _E(t,e,n){let s=he.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}async function TO(t,e,n,s){const r=W(t);let i=we(),o=Zt();for(const u of n){const l=e.Wi(u.metadata.name);u.document&&(i=i.add(l));const h=e.zi(u);h.setReadTime(e.Hi(u.metadata.readTime)),o=o.insert(l,h)}const a=r.Ui.newChangeBuffer({trackRemovals:!0}),c=await Ji(r,function(u){return en(yo(Ce.fromString(`__bundle__/docs/${u}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",u=>yE(u,a,o).next(l=>(a.apply(u),l)).next(l=>r.Vs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>r.Vs.addMatchingKeys(u,i,c.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(u,l.Gi,l.Qi)).next(()=>l.Gi)))}async function SO(t,e,n=we()){const s=await Ji(t,en(kp(e.bundledQuery))),r=W(t);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=gt(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Ds.saveNamedQuery(i,e);const a=s.withResumeToken(ht.EMPTY_BYTE_STRING,o);return r.$i=r.$i.insert(a.targetId,a),r.Vs.updateTargetData(i,a).next(()=>r.Vs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Vs.addMatchingKeys(i,n,s.targetId)).next(()=>r.Ds.saveNamedQuery(i,e))})}function Ry(t,e){return`firestore_clients_${t}_${e}`}function Ny(t,e,n){let s=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function xh(t,e){return`firestore_targets_${t}_${e}`}class $u{constructor(e,n,s,r){this.user=e,this.batchId=n,this.state=s,this.error=r}static Ji(e,n,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new M(r.error.code,r.error.message))),o?new $u(e,n,r.state,i):(st("SharedClientState",`Failed to parse mutation state for ID '${n}': ${s}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class da{constructor(e,n,s){this.targetId=e,this.state=n,this.error=s}static Ji(e,n){const s=JSON.parse(n);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new M(s.error.code,s.error.message))),i?new da(e,s.state,r):(st("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class qu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ji(e,n){const s=JSON.parse(n);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=ql();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=_b(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new qu(e,i):(st("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Dp{constructor(e,n){this.clientId=e,this.onlineState=n}static Ji(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Dp(n.clientId,n.onlineState):(st("SharedClientState",`Failed to parse online state: ${e}`),null)}}class xd{constructor(){this.activeTargetIds=ql()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dh{constructor(e,n,s,r,i){this.window=e,this.js=n,this.persistenceKey=s,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new et(ve),this.started=!1,this.ir=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.rr=Ry(this.persistenceKey,this.tr),this.ur=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.sr=this.sr.insert(this.tr,new xd),this.cr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.lr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.dr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const s of e){if(s===this.tr)continue;const r=this.getItem(Ry(this.persistenceKey,s));if(r){const i=qu.Ji(s,r);i&&(this.sr=this.sr.insert(i.clientId,i))}}this._r();const n=this.storage.getItem(this.lr);if(n){const s=this.wr(n);s&&this.mr(s)}for(const s of this.ir)this.nr(s);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let n=!1;return this.sr.forEach((s,r)=>{r.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,n,s){this.yr(e,n,s),this.pr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(xh(this.persistenceKey,e));if(s){const r=da.Ji(e,s);r&&(n=r.state)}}return this.Ir.Xi(e),this._r(),n}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(xh(this.persistenceKey,e))}updateQueryState(e,n,s){this.Tr(e,n,s)}handleUserChange(e,n,s){n.forEach(r=>{this.pr(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return U("SharedClientState","READ",e,n),n}setItem(e,n){U("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const n=e;if(n.storageArea===this.storage){if(U("SharedClientState","EVENT",n.key,n.newValue),n.key===this.rr)return void st("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.cr.test(n.key)){if(n.newValue==null){const s=this.Rr(n.key);return this.br(s,null)}{const s=this.Pr(n.key,n.newValue);if(s)return this.br(s.clientId,s)}}else if(this.ar.test(n.key)){if(n.newValue!==null){const s=this.vr(n.key,n.newValue);if(s)return this.Vr(s)}}else if(this.hr.test(n.key)){if(n.newValue!==null){const s=this.Sr(n.key,n.newValue);if(s)return this.Dr(s)}}else if(n.key===this.lr){if(n.newValue!==null){const s=this.wr(n.newValue);if(s)return this.mr(s)}}else if(n.key===this.ur){const s=function(r){let i=Xt.ot;if(r!=null)try{const o=JSON.parse(r);de(typeof o=="number"),i=o}catch(o){st("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(n.newValue);s!==Xt.ot&&this.sequenceNumberHandler(s)}else if(n.key===this.dr){const s=this.Cr(n.newValue);await Promise.all(s.map(r=>this.syncEngine.Nr(r)))}}}else this.ir.push(n)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,n,s){const r=new $u(this.currentUser,e,n,s),i=Ny(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Yi())}pr(e){const n=Ny(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Er(e){const n={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(n))}Tr(e,n,s){const r=xh(this.persistenceKey,e),i=new da(e,n,s);this.setItem(r,i.Yi())}Ar(e){const n=JSON.stringify(Array.from(e));this.setItem(this.dr,n)}Rr(e){const n=this.cr.exec(e);return n?n[1]:null}Pr(e,n){const s=this.Rr(e);return qu.Ji(s,n)}vr(e,n){const s=this.ar.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return $u.Ji(new pt(i),r,n)}Sr(e,n){const s=this.hr.exec(e),r=Number(s[1]);return da.Ji(r,n)}wr(e){return Dp.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,n){const s=n?this.sr.insert(e,n):this.sr.remove(e),r=this.gr(this.sr),i=this.gr(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Or(o,a).then(()=>{this.sr=s})}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let n=ql();return e.forEach((s,r)=>{n=n.unionWith(r.activeTargetIds)}),n}}class IE{constructor(){this.Fr=new xd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new xd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);U("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw Hi("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+go,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=CO[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new CP;a.listenOnce(TP.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ah.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ah.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new M(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ah.HTTP_ERROR:const l=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(p)>=0?p:S.UNKNOWN}(h.status);o(new M(d,h.message))}else o(new M(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(S.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=bP(),o=EP(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new kP({})),this.uo(a.initMessageHeaders,n,s),Xw()||fl()||sC()||bf()||rC()||If()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new AO({jr:p=>{h?U("Connection","Not sending because WebChannel is closed:",p):(l||(U("Connection","Opening WebChannel transport."),u.open(),l=!0),U("Connection","WebChannel sending:",p),u.send(p))},Wr:()=>u.close()}),f=(p,b,_)=>{p.listen(b,y=>{try{_(y)}catch(g){setTimeout(()=>{throw g},0)}})};return f(u,Hc.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),f(u,Hc.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.eo())}),f(u,Hc.EventType.ERROR,p=>{h||(h=!0,Hi("Connection","WebChannel transport errored:",p),d.eo(new M(S.UNAVAILABLE,"The operation could not be completed")))}),f(u,Hc.EventType.MESSAGE,p=>{var b;if(!h){const _=p.data[0];de(!!_);const y=_,g=y.error||((b=y[0])===null||b===void 0?void 0:b.error);if(g){U("Connection","WebChannel received error:",g);const I=g.status;let C=function(P){const $=ot[P];if($!==void 0)return Ub($)}(I),D=g.message;C===void 0&&(C=S.INTERNAL,D="Unknown error status: "+I+" with message "+g.message),h=!0,d.eo(new M(C,D)),u.close()}else U("Connection","WebChannel received:",_),d.no(_)}}),f(o,SP.STAT_EVENT,p=>{p.stat===$g.PROXY?U("Connection","Detected buffering proxy"):p.stat===$g.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){return typeof window<"u"?window:null}function cu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){return new _1(t,!0)}class Pp{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Pp(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(st(n.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new M(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NO extends EE{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=E1(this.wt,e),s=function(r){if(!("targetChange"in r))return he.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?he.min():i.readTime?gt(i.readTime):he.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=qa(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Lu(a)?{documents:Qb(r,a)}:{query:Jb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Kb(r,i.resumeToken):i.snapshotVersion.compareTo(he.min())>0&&(o.readTime=Ba(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=S1(this.wt,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=qa(this.wt),n.removeTarget=e,this.Oo(n)}}class xO extends EE{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=T1(e.writeResults,e.commitTime),s=gt(e.commitTime);return this.listener.Jo(s,n)}return de(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=qa(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ja(this.wt,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(S.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(S.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class PO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(st(n),this.su=!1):U("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{rr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=W(a);c.lu.add(4),await _o(c),c._u.set("Unknown"),c.lu.delete(4),await kc(c)}(this))})}),this._u=new PO(s,r)}}async function kc(t){if(rr(t))for(const e of t.fu)await e(!0)}async function _o(t){for(const e of t.fu)await e(!1)}function Gl(t,e){const n=W(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Mp(n)?Lp(n):bo(n).Co()&&Op(n,e))}function Ka(t,e){const n=W(t),s=bo(n);n.hu.delete(e),s.Co()&&TE(n,e),n.hu.size===0&&(s.Co()?s.ko():rr(n)&&n._u.set("Unknown"))}function Op(t,e){t.wu.Nt(e.targetId),bo(t).Qo(e)}function TE(t,e){t.wu.Nt(e),bo(t).jo(e)}function Lp(t){t.wu=new y1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),bo(t).start(),t._u.iu()}function Mp(t){return rr(t)&&!bo(t).Do()&&t.hu.size>0}function rr(t){return W(t).lu.size===0}function SE(t){t.wu=void 0}async function LO(t){t.hu.forEach((e,n)=>{Op(t,e)})}async function MO(t,e){SE(t),Mp(t)?(t._u.uu(e),Lp(t)):t._u.set("Unknown")}async function FO(t,e,n){if(t._u.set("Online"),e instanceof jb&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ju(t,s)}else if(e instanceof ou?t.wu.Ut(e):e instanceof qb?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(he.min()))try{const s=await gE(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.hu.get(c);u&&r.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),TE(r,a);const u=new Os(c.target,a,1,c.sequenceNumber);Op(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await ju(t,s)}}async function ju(t,e,n){if(!nr(e))throw e;t.lu.add(1),await _o(t),t._u.set("Offline"),n||(n=()=>gE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await kc(t)})}function kE(t,e){return e().catch(n=>ju(t,n,e))}async function Io(t){const e=W(t),n=zs(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;UO(e);)try{const r=await EO(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,VO(e,r)}catch(r){await ju(e,r)}CE(e)&&AE(e)}function UO(t){return rr(t)&&t.au.length<10}function VO(t,e){t.au.push(e);const n=zs(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function CE(t){return rr(t)&&!zs(t).Do()&&t.au.length>0}function AE(t){zs(t).start()}async function BO(t){zs(t).Xo()}async function $O(t){const e=zs(t);for(const n of t.au)e.Ho(n.mutations)}async function qO(t,e,n){const s=t.au.shift(),r=Tp.from(s,e,n);await kE(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Io(t)}async function jO(t,e){e&&zs(t).zo&&await async function(n,s){if(r=s.code,Fb(r)&&r!==S.ABORTED){const i=n.au.shift();zs(n).No(),await kE(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Io(n)}var r}(t,e),CE(t)&&AE(t)}async function Dy(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=rr(n);n.lu.add(3),await _o(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await kc(n)}async function Dd(t,e){const n=W(t);e?(n.lu.delete(2),await kc(n)):e||(n.lu.add(2),await _o(n),n._u.set("Unknown"))}function bo(t){return t.mu||(t.mu=function(e,n,s){const r=W(e);return r.tu(),new NO(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:LO.bind(null,t),Jr:MO.bind(null,t),Go:FO.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Mp(t)?Lp(t):t._u.set("Unknown")):(await t.mu.stop(),SE(t))})),t.mu}function zs(t){return t.gu||(t.gu=function(e,n,s){const r=W(e);return r.tu(),new xO(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:BO.bind(null,t),Jr:jO.bind(null,t),Yo:$O.bind(null,t),Jo:qO.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Io(t)):(await t.gu.stop(),t.au.length>0&&(U("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Fp(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eo(t,e){if(st("AsyncQueue",`${e}: ${t}`),nr(t))return new M(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=Go(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new Oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Oi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.yu=new et(K.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):Y():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Xi{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Xi(e,n,Oi.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this.Iu=void 0,this.listeners=[]}}class HO{constructor(){this.queries=new sr(e=>Sb(e),Ic),this.onlineState="Unknown",this.Tu=new Set}}async function Up(t,e){const n=W(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new KO),r)try{i.Iu=await n.onListen(s)}catch(o){const a=Eo(o,`Initialization of query '${Cd(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Bp(n)}async function Vp(t,e){const n=W(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function GO(t,e){const n=W(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&Bp(n)}function WO(t,e,n){const s=W(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Bp(t){t.Tu.forEach(e=>{e.next()})}class $p{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Xi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n){this.payload=e,this.byteLength=n}Cu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.wt=e}Wi(e){return $n(this.wt,e)}zi(e){return e.metadata.exists?zb(this.wt,e.document,!1):$e.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return gt(e)}}class QO{constructor(e,n,s){this.xu=e,this.localStore=n,this.wt=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=RE(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n;const s=Ce.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ku(e){const n=new Map,s=new Oy(this.wt);for(const r of e)if(r.metadata.queries){const i=s.Wi(r.metadata.name);for(const o of r.metadata.queries){const a=(n.get(o)||we()).add(i);n.set(o,a)}}return n}async complete(){const e=await TO(this.localStore,new Oy(this.wt),this.documents,this.xu.id),n=this.ku(this.documents);for(const s of this.queries)await SO(this.localStore,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function RE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.key=e}}class xE{constructor(e){this.key=e}}class DE{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=we(),this.mutatedKeys=we(),this.Lu=Cb(e),this.Uu=new Oi(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new Py,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),f=_p(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),b=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?p!==b&&(s.track({type:3,doc:f}),_=!0):this.Qu(d,f)||(s.track({type:2,doc:f}),_=!0,(c&&this.Lu(f,c)>0||u&&this.Lu(f,u)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),_=!0):d&&!f&&(s.track({type:1,doc:d}),_=!0,(c||u)&&(a=!0)),_&&(f?(o=o.add(f),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,l)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return f(h)-f(d)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Xi(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Py,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=we(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new xE(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new NE(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=we();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Xi.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class JO{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class YO{constructor(e){this.key=e,this.Xu=!1}}class XO{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new sr(a=>Sb(a),Ic),this.ec=new Map,this.nc=new Set,this.sc=new et(K.comparator),this.ic=new Map,this.rc=new Ap,this.oc={},this.uc=new Map,this.cc=zr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function ZO(t,e){const n=Gp(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await Ji(n.localStore,en(e));n.isPrimaryClient&&Gl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await qp(n,e,s,a==="current")}return r}async function qp(t,e,n,s){t.hc=(l,h,d)=>async function(f,p,b,_){let y=p.view.Ku(b);y.Mi&&(y=await Bu(f.localStore,p.query,!1).then(({documents:C})=>p.view.Ku(C,y)));const g=_&&_.targetChanges.get(p.targetId),I=p.view.applyChanges(y,f.isPrimaryClient,g);return Pd(f,p.targetId,I.zu),I.snapshot}(t,l,h,d);const r=await Bu(t.localStore,e,!0),i=new DE(e,r.ji),o=i.Ku(r.documents),a=Tc.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Pd(t,n,c.zu);const u=new JO(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function eL(t,e){const n=W(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!Ic(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Yi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ka(n.remoteStore,s.targetId),Zi(n,s.targetId)}).catch(tr)):(Zi(n,s.targetId),await Yi(n.localStore,s.targetId,!0))}async function tL(t,e,n){const s=Wp(t);try{const r=await function(i,o){const a=W(i),c=We.now(),u=o.reduce((d,f)=>d.add(f.key),we());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Zt(),p=we();return a.Ui.getEntries(d,u).next(b=>{f=b,f.forEach((_,y)=>{y.isValidDocument()||(p=p.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(b=>{l=b;const _=[];for(const y of o){const g=h1(y,l.get(y.key).overlayedDocument);g!=null&&_.push(new ds(y.key,g,bb(g.value.mapValue),ze.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(b=>{h=b;const _=b.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(d,b.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Bb(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new et(ve)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await fs(s,r.changes),await Io(s.remoteStore)}catch(r){const i=Eo(r,"Failed to persist write");n.reject(i)}}async function PE(t,e){const n=W(t);try{const s=await bO(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(de(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?de(o.Xu):r.removedDocuments.size>0&&(de(o.Xu),o.Xu=!1))}),await fs(n,s,e)}catch(s){await tr(s)}}function Ly(t,e,n){const s=W(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=W(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&Bp(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nL(t,e,n){const s=W(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new et(K.comparator);o=o.insert(i,$e.newNoDocument(i,he.min()));const a=we().add(i),c=new Ec(he.min(),new Map,new Le(ve),o,a);await PE(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),Hp(s)}else await Yi(s.localStore,e,!1).then(()=>Zi(s,e,n)).catch(tr)}async function sL(t,e){const n=W(t),s=e.batch.batchId;try{const r=await IO(n.localStore,e);Kp(n,s,null),jp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await fs(n,r)}catch(r){await tr(r)}}async function rL(t,e,n){const s=W(t);try{const r=await function(i,o){const a=W(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(de(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Kp(s,e,n),jp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await fs(s,r)}catch(r){await tr(r)}}async function iL(t,e){const n=W(t);rr(n.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=W(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(s===-1)return void e.resolve();const r=n.uc.get(s)||[];r.push(e),n.uc.set(s,r)}catch(s){const r=Eo(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function jp(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function Kp(t,e,n){const s=W(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function Zi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||OE(t,s)})}function OE(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Ka(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Hp(t))}function Pd(t,e,n){for(const s of n)s instanceof NE?(t.rc.addReference(s.key,e),oL(t,s)):s instanceof xE?(U("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||OE(t,s.key)):Y()}function oL(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.nc.add(s),Hp(t))}function Hp(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new K(Ce.fromString(e)),s=t.cc.next();t.ic.set(s,new YO(n)),t.sc=t.sc.insert(n,s),Gl(t.remoteStore,new Os(en(yo(n.path)),s,2,Xt.ot))}}async function fs(t,e,n){const s=W(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=xp.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const u=W(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(c,h=>E.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>E.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!nr(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.$i.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.$i=u.$i.insert(h,p)}}}(s.localStore,i))}async function aL(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await mE(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new M(S.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await fs(n,s.Ki)}}function cL(t,e){const n=W(t),s=n.ic.get(e);if(s&&s.Xu)return we().add(s.key);{let r=we();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}async function uL(t,e){const n=W(t),s=await Bu(n.localStore,e.query,!0),r=e.view.Ju(s);return n.isPrimaryClient&&Pd(n,e.targetId,r.zu),r}async function lL(t,e){const n=W(t);return wE(n.localStore,e).then(s=>fs(n,s))}async function hL(t,e,n,s){const r=W(t),i=await function(o,a){const c=W(o),u=W(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.yn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):E.resolve(null)))}(r.localStore,e);i!==null?(n==="pending"?await Io(r.remoteStore):n==="acknowledged"||n==="rejected"?(Kp(r,e,s||null),jp(r,e),function(o,a){W(W(o).mutationQueue).In(a)}(r.localStore,e)):Y(),await fs(r,i)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function dL(t,e){const n=W(t);if(Gp(n),Wp(n),e===!0&&n.ac!==!0){const s=n.sharedClientState.getAllActiveQueryTargets(),r=await My(n,s.toArray());n.ac=!0,await Dd(n.remoteStore,!0);for(const i of r)Gl(n.remoteStore,i)}else if(e===!1&&n.ac!==!1){const s=[];let r=Promise.resolve();n.ec.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(Zi(n,o),Yi(n.localStore,o,!0))),Ka(n.remoteStore,o)}),await r,await My(n,s),function(i){const o=W(i);o.ic.forEach((a,c)=>{Ka(o.remoteStore,c)}),o.rc.cs(),o.ic=new Map,o.sc=new et(K.comparator)}(n),n.ac=!1,await Dd(n.remoteStore,!1)}}async function My(t,e,n){const s=W(t),r=[],i=[];for(const o of e){let a;const c=s.ec.get(o);if(c&&c.length!==0){a=await Ji(s.localStore,en(c[0]));for(const u of c){const l=s.tc.get(u),h=await uL(s,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await vE(s.localStore,o);a=await Ji(s.localStore,u),await qp(s,LE(u),o,!1)}r.push(a)}return s.Zu.Go(i),r}function LE(t){return Tb(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function fL(t){const e=W(t);return W(W(e.localStore).persistence).Ri()}async function pL(t,e,n,s){const r=W(t);if(r.ac)return void U("SyncEngine","Ignoring unexpected query state notification.");const i=r.ec.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await wE(r.localStore,kb(i[0])),a=Ec.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await fs(r,o,a);break}case"rejected":await Yi(r.localStore,e,!0),Zi(r,e,s);break;default:Y()}}async function mL(t,e,n){const s=Gp(t);if(s.ac){for(const r of e){if(s.ec.has(r)){U("SyncEngine","Adding an already active target "+r);continue}const i=await vE(s.localStore,r),o=await Ji(s.localStore,i);await qp(s,LE(i),o.targetId,!1),Gl(s.remoteStore,o)}for(const r of n)s.ec.has(r)&&await Yi(s.localStore,r,!1).then(()=>{Ka(s.remoteStore,r),Zi(s,r)}).catch(tr)}}function Gp(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nL.bind(null,e),e.Zu.Go=GO.bind(null,e.eventManager),e.Zu.lc=WO.bind(null,e.eventManager),e}function Wp(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rL.bind(null,e),e}function gL(t,e,n){const s=W(t);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(h,d){const f=W(h),p=gt(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",b=>f.Ds.getBundleMetadata(b,d.id)).then(b=>!!b&&b.createTime.compareTo(p)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(RE(a));const c=new QO(a,r.localStore,i.wt);let u=await i.fc();for(;u;){const h=await c.Nu(u);h&&o._updateProgress(h),u=await i.fc()}const l=await c.complete();return await fs(r,l.Ou,void 0),await function(h,d){const f=W(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ds.saveBundleMetadata(p,d))}(r.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Mu)}catch(a){return Hi("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,n).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class ME{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return pE(this.persistence,new fE,e.initialUser,this.wt)}_c(e){return new dE(Hl.Os,this.wt)}dc(e){return new IE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FE extends ME{constructor(e,n,s){super(),this.yc=e,this.cacheSizeBytes=n,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await Wp(this.yc.syncEngine),await Io(this.yc.remoteStore),await this.persistence.ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wc(e){return pE(this.persistence,new fE,e.initialUser,this.wt)}mc(e,n){const s=this.persistence.referenceDelegate.garbageCollector;return new oO(s,e.asyncQueue,n)}gc(e,n){const s=new jP(n,this.persistence);return new qP(e.asyncQueue,s)}_c(e){const n=Np(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Rp(this.synchronizeTabs,n,e.clientId,s,e.asyncQueue,bE(),cu(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new IE}}class yL extends FE{constructor(e,n){super(e,n,!1),this.yc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.yc.syncEngine;this.sharedClientState instanceof Dh&&(this.sharedClientState.syncEngine={kr:hL.bind(null,n),Mr:pL.bind(null,n),Or:mL.bind(null,n),Ri:fL.bind(null,n),Nr:lL.bind(null,n)},await this.sharedClientState.start()),await this.persistence.ci(async s=>{await dL(this.yc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}dc(e){const n=bE();if(!Dh.V(n))throw new M(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Np(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Dh(n,e.asyncQueue,s,e.clientId,e.initialUser)}}class zp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ly(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aL.bind(null,this.syncEngine),await Dd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new HO}createDatastore(e){const n=Sc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new RO(r));var r;return function(i,o,a,c){return new DO(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Ly(this.syncEngine,a,0),o=xy.V()?new xy:new kO,new OO(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new XO(s,r,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=W(e);U("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await _o(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const s={value:t.slice(n,n+e),done:!1};return n+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):st("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,n){this.Ec=e,this.wt=n,this.metadata=new mt,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then(s=>{s&&s.Cu()?this.metadata.resolve(s.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.payload)}`))},s=>this.metadata.reject(s))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(e===null)return null;const n=this.Ac.decode(e),s=Number(n);isNaN(s)&&this.Pc(`length string (${n}) is not valid number`);const r=await this.vc(s);return new zO(JSON.parse(r),e.length+s)}Vc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async bc(){for(;this.Vc()<0&&!await this.Sc(););if(this.buffer.length===0)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const n=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new M(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,r){const i=W(s),o=qa(i.wt)+"/documents",a={documents:r.map(h=>$a(i.wt,h))},c=await i.ao("BatchGetDocuments",o,a,r.length),u=new Map;c.forEach(h=>{const d=b1(i.wt,h);u.set(d.key.toString(),d)});const l=[];return r.forEach(h=>{const d=u.get(h.toString());de(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(s=>this.recordVersion(s)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new wo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,s)=>{const r=K.fromPath(s);this.mutations.push(new Ip(r,this.precondition(r)))}),await async function(n,s){const r=W(n),i=qa(r.wt)+"/documents",o={writes:s.map(a=>ja(r.wt,a))};await r.ro("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=he.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new M(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ze.updateTime(n):ze.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(he.min()))throw new M(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ze.updateTime(n)}return ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,n,s,r,i){this.asyncQueue=e,this.datastore=n,this.options=s,this.updateFunction=r,this.deferred=i,this.Dc=s.maxAttempts,this.So=new Pp(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io(async()=>{const e=new wL(this.datastore),n=this.xc(e);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Nc(r)}))}).catch(s=>{this.Nc(s)})})}xc(e){try{const n=this.updateFunction(e);return!wc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Cc(),Promise.resolve()))):this.deferred.reject(e)}kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!Fb(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=pt.UNAUTHENTICATED,this.clientId=hb.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Eo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function UE(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await mE(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function VE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qp(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Dy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dy(e.remoteStore,i)),t.onlineComponents=e}async function Qp(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await UE(t,new ME)),t.offlineComponents}async function zl(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await VE(t,new zp)),t.onlineComponents}function BE(t){return Qp(t).then(e=>e.persistence)}function Jp(t){return Qp(t).then(e=>e.localStore)}function $E(t){return zl(t).then(e=>e.remoteStore)}function Yp(t){return zl(t).then(e=>e.syncEngine)}async function eo(t){const e=await zl(t),n=e.eventManager;return n.onListen=ZO.bind(null,e.syncEngine),n.onUnlisten=eL.bind(null,e.syncEngine),n}function bL(t){return t.asyncQueue.enqueue(async()=>{const e=await BE(t),n=await $E(t);return e.setNetworkEnabled(!0),function(s){const r=W(s);return r.lu.delete(0),kc(r)}(n)})}function EL(t){return t.asyncQueue.enqueue(async()=>{const e=await BE(t),n=await $E(t);return e.setNetworkEnabled(!1),async function(s){const r=W(s);r.lu.add(0),await _o(r),r._u.set("Offline")}(n)})}function TL(t,e){const n=new mt;return t.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const u=W(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new M(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Eo(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await Jp(t),e,n)),n.promise}function qE(t,e,n={}){const s=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Wl({next:h=>{i.enqueueAndForget(()=>Vp(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new M(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new M(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new $p(yo(o.path),u,{includeMetadataChanges:!0,Du:!0});return Up(r,l)}(await eo(t),t.asyncQueue,e,n,s)),s.promise}function SL(t,e){const n=new mt;return t.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await Bu(s,r,!0),a=new DE(r,o.ji),c=a.Ku(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=Eo(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await Jp(t),e,n)),n.promise}function jE(t,e,n={}){const s=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Wl({next:h=>{i.enqueueAndForget(()=>Vp(r,l)),h.fromCache&&a.source==="server"?c.reject(new M(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new $p(o,u,{includeMetadataChanges:!0,Du:!0});return Up(r,l)}(await eo(t),t.asyncQueue,e,n,s)),s.promise}function kL(t,e){const n=new Wl(e);return t.asyncQueue.enqueueAndForget(async()=>function(s,r){W(s).Tu.add(r),r.next()}(await eo(t),n)),()=>{n.Tc(),t.asyncQueue.enqueueAndForget(async()=>function(s,r){W(s).Tu.delete(r)}(await eo(t),n))}}function CL(t,e,n){const s=new mt;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return zl(i).then(o=>o.datastore)}(t);new _L(t.asyncQueue,r,n,e,s).run()}),s.promise}function AL(t,e,n,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new vL(c,u)}(function(c,u){if(c instanceof Uint8Array)return Fy(c,u);if(c instanceof ArrayBuffer)return Fy(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Sc(e));t.asyncQueue.enqueueAndForget(async()=>{gL(await Yp(t),r,s)})}function RL(t,e){return t.asyncQueue.enqueue(async()=>function(n,s){const r=W(n);return r.persistence.runTransaction("Get named query","readonly",i=>r.Ds.getNamedQuery(i,s))}(await Jp(t),e))}const Uy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t,e,n){if(!n)throw new M(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KE(t,e,n,s){if(e===!0&&s===!0)throw new M(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vy(t){if(!K.isDocumentKey(t))throw new M(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function By(t){if(K.isDocumentKey(t))throw new M(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ql(t);throw new M(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function HE(t,e){if(e<=0)throw new M(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1,e instanceof os?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new M(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new os(r.options.projectId)}(e))}get app(){if(!this._app)throw new M(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new NP;switch(n.type){case"gapi":const s=n.client;return de(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new OP(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Uy.get(e);n&&(U("ComponentProvider","Removing Datastore"),Uy.delete(e),n.terminate())}(this),Promise.resolve()}}function NL(t,e,n,s={}){var r;const i=(t=Ne(t,Cc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Hi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=pt.MOCK_USER;else{o=tC(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new M(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pt(c)}t._authCredentials=new xP(new lb(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class Lt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Lt(this.firestore,e,this._query)}}class qn extends Lt{constructor(e,n,s){super(e,n,yo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new K(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function GE(t,e,...n){if(t=oe(t),Xp("collection","path",e),t instanceof Cc){const s=Ce.fromString(e,...n);return By(s),new qn(t,null,s)}{if(!(t instanceof je||t instanceof qn))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return By(s),new qn(t.firestore,null,s)}}function xL(t,e){if(t=Ne(t,Cc),Xp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Lt(t,null,function(n){return new hs(Ce.emptyPath(),n)}(e))}function Ku(t,e,...n){if(t=oe(t),arguments.length===1&&(e=hb.I()),Xp("doc","path",e),t instanceof Cc){const s=Ce.fromString(e,...n);return Vy(s),new je(t,null,new K(s))}{if(!(t instanceof je||t instanceof qn))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return Vy(s),new je(t.firestore,t instanceof qn?t.converter:null,new K(s))}}function WE(t,e){return t=oe(t),e=oe(e),(t instanceof je||t instanceof qn)&&(e instanceof je||e instanceof qn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function zE(t,e){return t=oe(t),e=oe(e),t instanceof Lt&&e instanceof Lt&&t.firestore===e.firestore&&Ic(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pp(this,"async_queue_retry"),this.Kc=()=>{const n=cu();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=cu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new mt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!nr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw st("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=Fp.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&Y()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Od(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class PL{constructor(){this._progressObserver={},this._taskCompletionResolver=new mt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,s){this._progressObserver={next:e,error:n,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=-1;class tt extends Cc{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new DL,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||QE(this),this._firestoreClient.terminate()}}function It(t){return t._firestoreClient||QE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function QE(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new GP(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new IL(t._authCredentials,t._appCheckCredentials,t._queue,s)}function LL(t,e){YE(t=Ne(t,tt));const n=It(t),s=t._freezeSettings(),r=new zp;return JE(n,r,new FE(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function ML(t){YE(t=Ne(t,tt));const e=It(t),n=t._freezeSettings(),s=new zp;return JE(e,s,new yL(s,n.cacheSizeBytes))}function JE(t,e,n){const s=new mt;return t.asyncQueue.enqueue(async()=>{try{await UE(t,n),await VE(t,e),s.resolve()}catch(r){const i=r;if(!function(o){return o.name==="FirebaseError"?o.code===S.FAILED_PRECONDITION||o.code===S.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;Hi("Error enabling offline persistence. Falling back to persistence disabled: "+i),s.reject(i)}}).then(()=>s.promise)}function FL(t){if(t._initialized&&!t._terminated)throw new M(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new mt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!In.V())return Promise.resolve();const s=n+"main";await In.delete(s)}(Np(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function UL(t){return function(e){const n=new mt;return e.asyncQueue.enqueueAndForget(async()=>iL(await Yp(e),n)),n.promise}(It(t=Ne(t,tt)))}function VL(t){return bL(It(t=Ne(t,tt)))}function BL(t){return EL(It(t=Ne(t,tt)))}function $L(t,e){const n=It(t=Ne(t,tt)),s=new PL;return AL(n,t._databaseId,e,s),s}function qL(t,e){return RL(It(t=Ne(t,tt)),e).then(n=>n?new Lt(t,null,n.query):null)}function YE(t){if(t._initialized||t._terminated)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(ht.fromBase64String(e))}catch(n){throw new M(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wn(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=/^__.*__$/;class KL{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}class XE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ds(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ZE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Yl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Hu(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(ZE(this.Zc)&&jL.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class HL{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Sc(e)}aa(e,n,s,r=!1){return new Yl({Zc:e,methodName:n,ca:s,path:rt.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function oi(t){const e=t._freezeSettings(),n=Sc(t._databaseId);return new HL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xl(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);nm("Data must be an object, but it was:",o,s);const a=nT(s,o);let c,u;if(i.merge)c=new ln(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Ld(e,h,n);if(!o.contains(d))throw new M(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rT(l,d)||l.push(d)}c=new ln(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new KL(new Tt(a),c,u)}class Ac extends ii{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function eT(t,e,n){return new Yl({Zc:3,ca:e.settings.ca,methodName:t._methodName,na:n},e.databaseId,e.wt,e.ignoreUndefinedProperties)}class Zp extends ii{_toFieldTransform(e){return new bc(e.path,new zi)}isEqual(e){return e instanceof Zp}}class GL extends ii{constructor(e,n){super(e),this.ha=n}_toFieldTransform(e){const n=eT(this,e,!0),s=this.ha.map(i=>ai(i,n)),r=new Kr(s);return new bc(e.path,r)}isEqual(e){return this===e}}class WL extends ii{constructor(e,n){super(e),this.ha=n}_toFieldTransform(e){const n=eT(this,e,!0),s=this.ha.map(i=>ai(i,n)),r=new Hr(s);return new bc(e.path,r)}isEqual(e){return this===e}}class zL extends ii{constructor(e,n){super(e),this.la=n}_toFieldTransform(e){const n=new Qi(e.wt,Nb(e.wt,this.la));return new bc(e.path,n)}isEqual(e){return this===e}}function em(t,e,n,s){const r=t.aa(1,e,n);nm("Data must be an object, but it was:",r,s);const i=[],o=Tt.empty();ri(s,(c,u)=>{const l=sm(e,c,n);u=oe(u);const h=r.ia(l);if(u instanceof Ac)i.push(l);else{const d=ai(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new ln(i);return new XE(o,a,r.fieldTransforms)}function tm(t,e,n,s,r,i){const o=t.aa(1,e,n),a=[Ld(e,s,n)],c=[r];if(i.length%2!=0)throw new M(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ld(e,i[d])),c.push(i[d+1]);const u=[],l=Tt.empty();for(let d=a.length-1;d>=0;--d)if(!rT(u,a[d])){const f=a[d];let p=c[d];p=oe(p);const b=o.ia(f);if(p instanceof Ac)u.push(f);else{const _=ai(p,b);_!=null&&(u.push(f),l.set(f,_))}}const h=new ln(u);return new XE(l,h,o.fieldTransforms)}function tT(t,e,n,s=!1){return ai(n,t.aa(s?4:3,e))}function ai(t,e){if(sT(t=oe(t)))return nm("Unsupported field value:",e,t),nT(t,e);if(t instanceof ii)return function(n,s){if(!ZE(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ai(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Nb(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=We.fromDate(n);return{timestampValue:Ba(s.wt,r)}}if(n instanceof We){const r=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ba(s.wt,r)}}if(n instanceof Jl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wn)return{bytesValue:Kb(s.wt,n._byteString)};if(n instanceof je){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:bp(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Ql(n)}`)}(t,e)}function nT(t,e){const n={};return vb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(t,(s,r)=>{const i=ai(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function sT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Jl||t instanceof Wn||t instanceof je||t instanceof ii)}function nm(t,e,n){if(!sT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ql(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function Ld(t,e,n){if((e=oe(e))instanceof Qs)return e._internalPath;if(typeof e=="string")return sm(t,e);throw Hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const QL=new RegExp("[~\\*/\\[\\]]");function sm(t,e,n){if(e.search(QL)>=0)throw Hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qs(...e.split("."))._internalPath}catch{throw Hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hu(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(S.INVALID_ARGUMENT,a+t+c)}function rT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JL extends Ha{data(){return super.data()}}function Zl(t,e){return typeof e=="string"?sm(t,e):e instanceof Qs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends Ha{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Zl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fa extends as{data(e={}){return super.data(e)}}class Js{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Er(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fa(this._firestore,this._userDataWriter,s.key,s,new Er(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new fa(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Er(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new fa(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Er(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:YL(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function iT(t,e){return t instanceof as&&e instanceof as?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Js&&e instanceof Js&&t._firestore===e._firestore&&zE(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rc{}function _s(t,...e){for(const n of e)t=n._apply(t);return t}class XL extends Rc{constructor(e,n,s){super(),this.fa=e,this.da=n,this._a=s,this.type="where"}_apply(e){const n=oi(e.firestore),s=function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){jy(l,u);const f=[];for(const p of l)f.push(qy(a,r,p));h={arrayValue:{values:f}}}else h=qy(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||jy(l,u),h=tT(o,i,l,u==="in"||u==="not-in");const d=St.create(c,u,h);return function(f,p){if(p.ht()){const _=vp(f);if(_!==null&&!_.isEqual(p.field))throw new M(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${p.field.toString()}'`);const y=yp(f);y!==null&&hT(f,p.field,y)}const b=function(_,y){for(const g of _.filters)if(y.indexOf(g.op)>=0)return g.op;return null}(f,function(_){switch(_){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(b!==null)throw b===p.op?new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${b.toString()}' filters.`)}(r,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Lt(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new hs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function ZL(t,e,n){const s=e,r=Zl("where",t);return new XL(r,s,n)}class eM extends Rc{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new M(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Pi(r,i);return function(a,c){if(yp(a)===null){const u=vp(a);u!==null&&hT(a,u,c.field)}}(s,o),o}(e._query,this.fa,this.wa);return new Lt(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new hs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function tM(t,e="asc"){const n=e,s=Zl("orderBy",t);return new eM(s,n)}class aT extends Rc{constructor(e,n,s){super(),this.type=e,this.ma=n,this.ga=s}_apply(e){return new Lt(e.firestore,e.converter,Fu(e._query,this.ma,this.ga))}}function nM(t){return HE("limit",t),new aT("limit",t,"F")}function sM(t){return HE("limitToLast",t),new aT("limitToLast",t,"L")}class cT extends Rc{constructor(e,n,s){super(),this.type=e,this.ya=n,this.pa=s}_apply(e){const n=lT(e,this.type,this.ya,this.pa);return new Lt(e.firestore,e.converter,function(s,r){return new hs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function rM(...t){return new cT("startAt",t,!0)}function iM(...t){return new cT("startAfter",t,!1)}class uT extends Rc{constructor(e,n,s){super(),this.type=e,this.ya=n,this.pa=s}_apply(e){const n=lT(e,this.type,this.ya,this.pa);return new Lt(e.firestore,e.converter,function(s,r){return new hs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function oM(...t){return new uT("endBefore",t,!1)}function aM(...t){return new uT("endAt",t,!0)}function lT(t,e,n,s){if(n[0]=oe(n[0]),n[0]instanceof Ha)return function(r,i,o,a,c){if(!a)throw new M(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Wi(r))if(l.field.isKeyField())u.push(qr(i,a.key));else{const h=a.data.field(l.field);if(gp(h))throw new M(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new M(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ws(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=oi(t.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new M(S.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const p=u[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new M(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!wp(i)&&p.indexOf("/")!==-1)throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const b=i.path.child(Ce.fromString(p));if(!K.isDocumentKey(b))throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const _=new K(b);d.push(qr(o,_))}else{const b=tT(a,c,p);d.push(b)}}return new Ws(d,l)}(t._query,t.firestore._databaseId,r,e,n,s)}}function qy(t,e,n){if(typeof(n=oe(n))=="string"){if(n==="")throw new M(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wp(e)&&n.indexOf("/")!==-1)throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ce.fromString(n));if(!K.isDocumentKey(s))throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return qr(t,new K(s))}if(n instanceof je)return qr(t,n._key);throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ql(n)}.`)}function jy(t,e){if(!Array.isArray(t)||t.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M(S.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function hT(t,e,n){if(!n.isEqual(e))throw new M(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return ri(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Jl(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=wb(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ma(e));default:return null}}convertTimestamp(e){const n=Hs(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ce.fromString(e);de(Zb(s));const r=new os(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||st(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class uM extends rm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=oi(e)}set(e,n,s){this._verifyNotCommitted();const r=Cs(e,this._firestore),i=eh(r.converter,n,s),o=Xl(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,ze.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=Cs(e,this._firestore);let o;return o=typeof(n=oe(n))=="string"||n instanceof Qs?tm(this._dataReader,"WriteBatch.update",i._key,n,s,r):em(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,ze.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Cs(e,this._firestore);return this._mutations=this._mutations.concat(new wo(n._key,ze.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Cs(t,e){if((t=oe(t)).firestore!==e)throw new M(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){t=Ne(t,je);const e=Ne(t.firestore,tt);return qE(It(e),t._key).then(n=>im(e,t,n))}class ci extends rm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function dM(t){t=Ne(t,je);const e=Ne(t.firestore,tt),n=It(e),s=new ci(e);return TL(n,t._key).then(r=>new as(e,s,t._key,r,new Er(r!==null&&r.hasLocalMutations,!0),t.converter))}function fM(t){t=Ne(t,je);const e=Ne(t.firestore,tt);return qE(It(e),t._key,{source:"server"}).then(n=>im(e,t,n))}function pM(t){t=Ne(t,Lt);const e=Ne(t.firestore,tt),n=It(e),s=new ci(e);return oT(t._query),jE(n,t._query).then(r=>new Js(e,s,t,r))}function mM(t){t=Ne(t,Lt);const e=Ne(t.firestore,tt),n=It(e),s=new ci(e);return SL(n,t._query).then(r=>new Js(e,s,t,r))}function gM(t){t=Ne(t,Lt);const e=Ne(t.firestore,tt),n=It(e),s=new ci(e);return jE(n,t._query,{source:"server"}).then(r=>new Js(e,s,t,r))}function Ky(t,e,n){t=Ne(t,je);const s=Ne(t.firestore,tt),r=eh(t.converter,e,n);return Nc(s,[Xl(oi(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,ze.none())])}function Hy(t,e,n,...s){t=Ne(t,je);const r=Ne(t.firestore,tt),i=oi(r);let o;return o=typeof(e=oe(e))=="string"||e instanceof Qs?tm(i,"updateDoc",t._key,e,n,s):em(i,"updateDoc",t._key,e),Nc(r,[o.toMutation(t._key,ze.exists(!0))])}function yM(t){return Nc(Ne(t.firestore,tt),[new wo(t._key,ze.none())])}function vM(t,e){const n=Ne(t.firestore,tt),s=Ku(t),r=eh(t.converter,e);return Nc(n,[Xl(oi(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,ze.exists(!1))]).then(()=>s)}function dT(t,...e){var n,s,r;t=oe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Od(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Od(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof je)u=Ne(t.firestore,tt),l=yo(t._key.path),c={next:h=>{e[o]&&e[o](im(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ne(t,Lt);u=Ne(h.firestore,tt),l=h._query;const d=new ci(u);c={next:f=>{e[o]&&e[o](new Js(u,d,h,f))},error:e[o+1],complete:e[o+2]},oT(t._query)}return function(h,d,f,p){const b=new Wl(p),_=new $p(d,b,f);return h.asyncQueue.enqueueAndForget(async()=>Up(await eo(h),_)),()=>{b.Tc(),h.asyncQueue.enqueueAndForget(async()=>Vp(await eo(h),_))}}(It(u),l,a,c)}function wM(t,e){return kL(It(t=Ne(t,tt)),Od(e)?e:{next:e})}function Nc(t,e){return function(n,s){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>tL(await Yp(n),s,r)),r.promise}(It(t),e)}function im(t,e,n){const s=n.docs.get(e._key),r=new ci(t);return new as(t,r,e._key,s,new Er(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=oi(e)}get(e){const n=Cs(e,this._firestore),s=new uM(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return Y();const i=r[0];if(i.isFoundDocument())return new Ha(this._firestore,s,i.key,i,n.converter);if(i.isNoDocument())return new Ha(this._firestore,s,n._key,null,n.converter);throw Y()})}set(e,n,s){const r=Cs(e,this._firestore),i=eh(r.converter,n,s),o=Xl(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,n,s,...r){const i=Cs(e,this._firestore);let o;return o=typeof(n=oe(n))=="string"||n instanceof Qs?tm(this._dataReader,"Transaction.update",i._key,n,s,r):em(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Cs(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Cs(e,this._firestore),s=new ci(this._firestore);return super.get(e).then(r=>new as(this._firestore,s,n._key,r._document,new Er(!1,!1),n.converter))}}function IM(t,e,n){t=Ne(t,tt);const s=Object.assign(Object.assign({},cM),n);return function(r){if(r.maxAttempts<1)throw new M(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),CL(It(t),r=>e(new _M(t,r)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){return new Ac("deleteField")}function EM(){return new Zp("serverTimestamp")}function TM(...t){return new GL("arrayUnion",t)}function SM(...t){return new WL("arrayRemove",t)}function kM(t){return new zL("increment",t)}(function(t,e=!0){(function(n){go=n})(ti),qs(new Kn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new tt(r,new DP(n.getProvider("auth-internal")),new MP(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Bn(qg,"3.4.14",t),Bn(qg,"3.4.14","esm2017")})();const CM="@firebase/firestore-compat",AM="0.1.23";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new M("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(){if(typeof Uint8Array>"u")throw new M("unimplemented","Uint8Arrays are not available in this environment.")}function Wy(){if(!KP())throw new M("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ga{constructor(e){this._delegate=e}static fromBase64String(e){return Wy(),new Ga(Wn.fromBase64String(e))}static fromUint8Array(e){return Gy(),new Ga(Wn.fromUint8Array(e))}toBase64(){return Wy(),this._delegate.toBase64()}toUint8Array(){return Gy(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){return RM(t,["next","error","complete"])}function RM(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const s of e)if(s in n&&typeof n[s]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{enableIndexedDbPersistence(e,n){return LL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return ML(e._delegate)}clearIndexedDbPersistence(e){return FL(e._delegate)}}class fT{constructor(e,n,s){this._delegate=n,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof os||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Hi("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,s={}){NL(this._delegate,e,n,s)}enableNetwork(){return VL(this._delegate)}disableNetwork(){return BL(this._delegate)}enablePersistence(e){let n=!1,s=!1;return e&&(n=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,KE("synchronizeTabs",n,"experimentalForceOwningTab",s)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return UL(this._delegate)}onSnapshotsInSync(e){return wM(this._delegate,e)}get app(){if(!this._appCompat)throw new M("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new to(this,GE(this._delegate,e))}catch(n){throw Bt(n,"collection()","Firestore.collection()")}}doc(e){try{return new yn(this,Ku(this._delegate,e))}catch(n){throw Bt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Vt(this,xL(this._delegate,e))}catch(n){throw Bt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return IM(this._delegate,n=>e(new pT(this,n)))}batch(){return It(this._delegate),new mT(new lM(this._delegate,e=>Nc(this._delegate,e)))}loadBundle(e){return $L(this._delegate,e)}namedQuery(e){return qL(this._delegate,e).then(n=>n?new Vt(this,n):null)}}class th extends rm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ga(new Wn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return yn.forKey(n,this.firestore,null)}}function xM(t){AP(t)}class pT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new th(e)}get(e){const n=Tr(e);return this._delegate.get(n).then(s=>new Wa(this._firestore,new as(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,n.converter)))}set(e,n,s){const r=Tr(e);return s?(om("Transaction.set",s),this._delegate.set(r,n,s)):this._delegate.set(r,n),this}update(e,n,s,...r){const i=Tr(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,s,...r),this}delete(e){const n=Tr(e);return this._delegate.delete(n),this}}class mT{constructor(e){this._delegate=e}set(e,n,s){const r=Tr(e);return s?(om("WriteBatch.set",s),this._delegate.set(r,n,s)):this._delegate.set(r,n),this}update(e,n,s,...r){const i=Tr(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,s,...r),this}delete(e){const n=Tr(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Qr{constructor(e,n,s){this._firestore=e,this._userDataWriter=n,this._delegate=s}fromFirestore(e,n){const s=new fa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new za(this._firestore,s),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const s=Qr.INSTANCES;let r=s.get(e);r||(r=new WeakMap,s.set(e,r));let i=r.get(n);return i||(i=new Qr(e,new th(e),n),r.set(n,i)),i}}Qr.INSTANCES=new WeakMap;class yn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new th(e)}static forPath(e,n,s){if(e.length%2!==0)throw new M("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new yn(n,new je(n._delegate,s,new K(e)))}static forKey(e,n,s){return new yn(n,new je(n._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new to(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new to(this.firestore,GE(this._delegate,e))}catch(n){throw Bt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=oe(e),e instanceof je?WE(this._delegate,e):!1}set(e,n){n=om("DocumentReference.set",n);try{return n?Ky(this._delegate,e,n):Ky(this._delegate,e)}catch(s){throw Bt(s,"setDoc()","DocumentReference.set()")}}update(e,n,...s){try{return arguments.length===1?Hy(this._delegate,e):Hy(this._delegate,e,n,...s)}catch(r){throw Bt(r,"updateDoc()","DocumentReference.update()")}}delete(){return yM(this._delegate)}onSnapshot(...e){const n=gT(e),s=yT(e,r=>new Wa(this.firestore,new as(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return dT(this._delegate,n,s)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=dM(this._delegate):(e==null?void 0:e.source)==="server"?n=fM(this._delegate):n=hM(this._delegate),n.then(s=>new Wa(this.firestore,new as(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new yn(this.firestore,e?this._delegate.withConverter(Qr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bt(t,e,n){return t.message=t.message.replace(e,n),t}function gT(t){for(const e of t)if(typeof e=="object"&&!Md(e))return e;return{}}function yT(t,e){var n,s;let r;return Md(t[0])?r=t[0]:Md(t[1])?r=t[1]:typeof t[0]=="function"?r={next:t[0],error:t[1],complete:t[2]}:r={next:t[1],error:t[2],complete:t[3]},{next:i=>{r.next&&r.next(e(i))},error:(n=r.error)===null||n===void 0?void 0:n.bind(r),complete:(s=r.complete)===null||s===void 0?void 0:s.bind(r)}}class Wa{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new yn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return iT(this._delegate,e._delegate)}}class za extends Wa{data(e){const n=this._delegate.data(e);return RP(n!==void 0),n}}class Vt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new th(e)}where(e,n,s){try{return new Vt(this.firestore,_s(this._delegate,ZL(e,n,s)))}catch(r){throw Bt(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Vt(this.firestore,_s(this._delegate,tM(e,n)))}catch(s){throw Bt(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Vt(this.firestore,_s(this._delegate,nM(e)))}catch(n){throw Bt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Vt(this.firestore,_s(this._delegate,sM(e)))}catch(n){throw Bt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Vt(this.firestore,_s(this._delegate,rM(...e)))}catch(n){throw Bt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Vt(this.firestore,_s(this._delegate,iM(...e)))}catch(n){throw Bt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Vt(this.firestore,_s(this._delegate,oM(...e)))}catch(n){throw Bt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Vt(this.firestore,_s(this._delegate,aM(...e)))}catch(n){throw Bt(n,"endAt()","Query.endAt()")}}isEqual(e){return zE(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=mM(this._delegate):(e==null?void 0:e.source)==="server"?n=gM(this._delegate):n=pM(this._delegate),n.then(s=>new Fd(this.firestore,new Js(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const n=gT(e),s=yT(e,r=>new Fd(this.firestore,new Js(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return dT(this._delegate,n,s)}withConverter(e){return new Vt(this.firestore,e?this._delegate.withConverter(Qr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class DM{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new za(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Fd{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Vt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new za(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new DM(this._firestore,n))}forEach(e,n){this._delegate.forEach(s=>{e.call(n,new za(this._firestore,s))})}isEqual(e){return iT(this._delegate,e._delegate)}}class to extends Vt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new yn(this.firestore,e):null}doc(e){try{return e===void 0?new yn(this.firestore,Ku(this._delegate)):new yn(this.firestore,Ku(this._delegate,e))}catch(n){throw Bt(n,"doc()","CollectionReference.doc()")}}add(e){return vM(this._delegate,e).then(n=>new yn(this.firestore,n))}isEqual(e){return WE(this._delegate,e._delegate)}withConverter(e){return new to(this.firestore,e?this._delegate.withConverter(Qr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Tr(t){return Ne(t,je)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(...e){this._delegate=new Qs(...e)}static documentId(){return new am(rt.keyField().canonicalString())}isEqual(e){return e=oe(e),e instanceof Qs?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this._delegate=e}static serverTimestamp(){const e=EM();return e._methodName="FieldValue.serverTimestamp",new vr(e)}static delete(){const e=bM();return e._methodName="FieldValue.delete",new vr(e)}static arrayUnion(...e){const n=TM(...e);return n._methodName="FieldValue.arrayUnion",new vr(n)}static arrayRemove(...e){const n=SM(...e);return n._methodName="FieldValue.arrayRemove",new vr(n)}static increment(e){const n=kM(e);return n._methodName="FieldValue.increment",new vr(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM={Firestore:fT,GeoPoint:Jl,Timestamp:We,Blob:Ga,Transaction:pT,WriteBatch:mT,DocumentReference:yn,DocumentSnapshot:Wa,Query:Vt,QueryDocumentSnapshot:za,QuerySnapshot:Fd,CollectionReference:to,FieldPath:am,FieldValue:vr,setLogLevel:xM,CACHE_SIZE_UNLIMITED:OL};function OM(t,e){t.INTERNAL.registerComponent(new Kn("firestore-compat",n=>{const s=n.getProvider("app-compat").getImmediate(),r=n.getProvider("firestore").getImmediate();return e(s,r)},"PUBLIC").setServiceProps(Object.assign({},PM)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(t){OM(t,(e,n)=>new fT(e,n,new NM)),t.registerVersion(CM,AM)}LM($t);$t.initializeApp({apiKey:"AIzaSyBPh0DVqo7Gf6r_CK3z0tQLdGEipGkb3Sw",authDomain:"spk-dosbingskripsi.firebaseapp.com",databaseURL:"https://spk-dosbingskripsi-default-rtdb.firebaseio.com",projectId:"spk-dosbingskripsi",storageBucket:"spk-dosbingskripsi.appspot.com",messagingSenderId:"826817552519",appId:"1:826817552519:web:5d49731d3592c7d65e5822",measurementId:"G-7SQ02HW0CM"});const pi=$t.auth();function MM(){const t=Oe(null),e=Oe(null),n=Oe({userEmail:"",userPassword:"",retypePassword:""}),s=Oe({userEmail:"",userPassword:""}),r=Oe({user:{userName:"",userNIM:"",userProdi:"Informatika"},profile:{avatar:"",url:"",background:"primary-gradient-1",color:"primary-text"}}),i=Oe(null),o=Oe(null),a=Oe(null),c=xt(()=>o.value!==null),u=Oe({judul:"",deskripsi:""}),l=Oe(null),h=Oe(null),d=pi.onAuthStateChanged(O=>{t.value=O,t.value!==null&&be.collection("saw2").doc(t.value.uid).get().then(me=>{me.exists?be.collection("users2").doc(t.value.uid).get().then(ee=>{ee.exists&&be.collection("users2").doc(t.value.uid).onSnapshot(Z=>{e.value=Z.data()})}):be.collection("users2").doc(t.value.uid).get().then(ee=>{ee.exists?be.collection("users2").doc(t.value.uid).onSnapshot(Z=>{e.value=Z.data()}):(pi.signOut(),_.value=null,t.value=null)}).catch(ee=>{console.log("Error getting document:",ee)})})});rc(d);const f=(O,me,ee,Z,re)=>{var xe={"user.userNameNew":O,"user.userNim":me,"user.userProdi":"INFORMATIKA",profile:{avatar:ee,background:Z,color:re},"login.afterLogin":!0};be.collection("users2").doc(e.value.user.userId).update(xe)},p=xt(()=>{var O=null;return t.value!==null&&e.value!==null&&e.value.login.isLogin==!0?(O=!0,b.value=O):b.value=null,b.value}),b=Oe(null),_=Oe(null),y=xt(()=>{var O=Oe(null);return t.value!==null&&e.value!==null&&e.value.login.afterLogin==!0?(O.value=!0,_.value=O.value,console.log(O.value)):_.value=null,_.value});return{user:t,isLogin:p,signIn:async()=>{const O=new $t.auth.GoogleAuthProvider;await pi.signInWithPopup(O);var me={user:{userId:t.value.uid,userName:t.value.displayName,userEmail:t.value.email},login:{isLogin:!0}},ee={user:{userId:t.value.uid,userName:t.value.displayName,userEmail:t.value.email},results:[]},Z={"user.userId":t.value.uid,"user.userName":t.value.displayName,"user.userEmail":t.value.email};be.collection("users").doc(t.value.uid).get().then(re=>{re.exists?_.value=!0:be.collection("users").doc(t.value.uid).set(me)}).catch(re=>{console.log("Error getting document:",re)}),be.collection("saw").doc(t.value.uid).get().then(re=>{re.exists?(console.log("user sudah memiliki dokumen saw"),be.collection("saw").doc(t.value.uid).update(Z)):be.collection("saw").doc(t.value.uid).set(ee)}).catch(re=>{console.log("Error getting document:",re)})},signOut:async()=>{e.value!==null?(pi.signOut(),t.value=null,e.value=null,_.value=null):console.log("gagal hapus dokumen"),console.log("log out")},finishLogin:f,thisUser:e,afterLogin:y,signUpGoogle:async()=>{const O=new $t.auth.GoogleAuthProvider;await pi.signInWithPopup(O).then(()=>{console.log("user.value =>",t.value);var me={user:{userId:t.value.email,userName:t.value.displayName,userEmail:t.value.email,userLevel:"Mahasiswa"},login:{isLogin:!0}},ee={user:{userId:t.value.email,userName:t.value.displayName,userEmail:t.value.email},results:[],sudahCariSaw:!1},Z={"user.userId":t.value.uid,"user.userName":t.value.displayName,"user.userEmail":t.value.email};be.collection("users2").doc(t.value.email).get().then(re=>{re.exists?(be.collection("users2").doc(t.value.email).onSnapshot(xe=>{e.value=xe.data()}),be.collection("saw2").doc(t.value.email).get().then(xe=>{xe.exists?(console.log("user sudah memiliki dokumen saw"),be.collection("saw2").doc(t.value.email).update(Z)):be.collection("saw2").doc(t.value.email).set(ee)}).catch(xe=>{console.log("Error getting document:",xe)})):(console.log("Alamat email belum terdaftar"),be.collection("users2").doc(t.value.email).set(me),console.log("berhasil menambah Alamat email"),be.collection("users2").doc(t.value.email).onSnapshot(xe=>{e.value=xe.data()}),console.log("thisUser.value =>",e.value))}).catch(re=>{console.log("Error getting document:",re)})})},signUpPassword:async(O,me)=>{var ee=O.toLowerCase();be.collection("alternatif").doc(ee).get().then(Z=>{if(Z.exists){console.log("email cocok dengan email dosen");var re=Z.data(),xe=re.profile,ps=re.nidn,mn=re.namaDosen;$t.auth().createUserWithEmailAndPassword(O,me).then(it=>{var De=it.user,Mt={user:{userId:De.uid,userEmail:De.email,userPassword:n.value.userPassword,userLevel:"Dosen",userProdi:"Informatika",userNIM:String(ps),userName:mn.namaDepan+" "+mn.namaBelakang},login:{isLogin:!0,afterLogin:!0},profile:{url:xe.url,avatar:xe.avatar,background:xe.background,color:xe.color},progres:{isRegistrasi:!0,isHitungSaw:!1,isJudulDeskripsi:!1,isDosbing:!1,notifHitungSaw:!1,notifLog:"Tidak ada pemberitahuan"},isFav:[],createdAt:new Date},N={user:{userId:De.uid,userEmail:De.email},sudahCariSaw:!1,results:[],kriteriaDipilih:[],subKriteriaDipilih:[],total:[],createdAt:new Date};be.collection("users2").doc(De.uid).set(Mt).then(()=>{t.value=De,e.value=Mt}).then(()=>{be.collection("saw2").doc(De.uid).set(N)}).then(()=>{n.value.userEmail="",n.value.userPassword="",n.value.retypePassword=""})}).catch(it=>{var De=it.code,Mt=it.message;console.log(De),console.log(Mt),a.value="Email sudah terdaftar, gunakan email lain atau pilih Log In",o.value=!0,setTimeout(()=>o.value=null,5e3)})}else console.log("email tidak cocok dengan email dosen"),$t.auth().createUserWithEmailAndPassword(O,me).then(it=>{var De=it.user,Mt={user:{userId:De.uid,userEmail:De.email,userPassword:n.value.userPassword,userLevel:"Mahasiswa"},login:{isLogin:!0,afterLogin:!1},isSkripsi:!1,skripsi:{judul:"",deskripsi:"",pembimbing:""},progres:{isRegistrasi:!0,isHitungSaw:!1,isJudulDeskripsi:!1,isDosbing:!1,notifHitungSaw:!1,notifLog:"Tidak ada pemberitahuan"},isFav:[]},N={user:{userId:De.uid,userEmail:De.email},sudahCariSaw:!1,results:[],kriteriaDipilih:[],subKriteriaDipilih:[],total:[],createdAt:new Date};be.collection("users2").doc(De.uid).set(Mt).then(()=>{t.value=De,e.value=Mt}).then(()=>{be.collection("saw2").doc(De.uid).set(N)}).then(()=>{n.value.userEmail="",n.value.userPassword="",n.value.retypePassword=""})}).catch(it=>{var De=it.code,Mt=it.message;console.log(De),console.log(Mt),a.value="Email sudah terdaftar, gunakan email lain atau pilih Log In",o.value=!0,setTimeout(()=>o.value=null,5e3)})})},signInGoogle:async()=>{const O=new $t.auth.GoogleAuthProvider;await pi.signInWithPopup(O);var me={user:{userId:t.value.email,userName:t.value.displayName,userEmail:t.value.email},sudahCariSaw:!1,results:[]},ee={"user.userId":t.value.email,"user.userName":t.value.displayName,"user.userEmail":t.value.email};await be.collection("users2").doc(t.value.email).get().then(Z=>{Z.exists?be.collection("saw2").doc(t.value.email).get().then(re=>{re.exists?be.collection("saw2").doc(t.value.email).update(ee):be.collection("saw2").doc(t.value.email).set(me)}).catch(re=>{console.log("Error getting document:",re)}):(a.value="Email belum terdaftar, gunakan email lain atau pilih Daftar dengan Google",o.value=!0,setTimeout(()=>o.value=null,5e3))}).catch(Z=>{console.log("Error getting document:",Z)})},signInPassword:async(O,me)=>{$t.auth().signInWithEmailAndPassword(O,me).then(ee=>{var Z=ee.user,re={user:{userId:Z.uid,userEmail:Z.email},sudahCariSaw:!1,results:[]};be.collection("users2").doc(Z.uid).get().then(xe=>{t.value=Z,e.value=xe.data()}).then(()=>{be.collection("saw2").doc(Z.uid).get().then(xe=>{xe.exists?console.log("user masih memiliki dokumen saw"):be.collection("saw2").doc(Z.uid).set(re)})}).then(()=>{s.value.userEmail="",s.value.userPassword=""})}).catch(ee=>{var Z=ee.code,re=ee.message;console.log(Z),console.log(re),Z==="auth/user-not-found"?(a.value="Email belum terdaftar, gunakan email lain atau pilih Sign Up",o.value=!0,setTimeout(()=>o.value=null,5e3)):Z==="auth/wrong-password"&&(a.value="Password salah",o.value=!0,setTimeout(()=>o.value=null,5e3))})},signUpForm:n,signInForm:s,isToast:c,msgToast:a,completeForm:r,sendCompleteForm:async()=>{var O={"user.userId":e.value.user.userId,"user.userEmail":e.value.user.userEmail,"user.userName":r.value.user.userName,"user.userNIM":r.value.user.userNIM,"user.userProdi":r.value.user.userProdi,"profile.avatar":r.value.profile.avatar,"profile.url":r.value.profile.url,"profile.background":r.value.profile.background,"profile.color":r.value.profile.color,"login.afterLogin":!0,createdAt:new Date};await be.collection("users2").doc(e.value.user.userId).get().then(me=>{me.exists?(be.collection("users2").doc(e.value.user.userId).update(O),be.collection("saw2").doc(e.value.user.userId).update({createdAt:new Date}),e.value=O,console.log("data sudah lengkap")):console.log("gagal")}).catch(me=>{console.log("Error getting document:",me)})},editProfile:i,getUserData:async()=>{be.collection("users2").doc(e.value.user.userId).get().then(O=>{O.exists?(console.log("Dokumen user siap diedit"),i.value=O.data()):console.log("gagal")}).catch(O=>{console.log("Error getting document:",O)})},updateUserData:async()=>{var O={"user.userName":i.value.user.userName,"user.userNIM":i.value.user.userNIM,"user.userProdi":i.value.user.userProdi,"profile.avatar":i.value.profile.avatar,"profile.url":i.value.profile.url,"profile.background":i.value.profile.background,"profile.color":i.value.profile.color};await be.collection("users2").doc(e.value.user.userId).get().then(me=>{me.exists?(console.log("berhasil update data user"),be.collection("users2").doc(e.value.user.userId).update(O),i.value=null):console.log("gagal")}).catch(me=>{console.log("Error getting document:",me)})},batalUpdateUserData:()=>{i.value=null},userSkripsi:u,addUserSkripsi:async(O,me)=>{var ee={isSkripsi:!0,"skripsi.judul":O,"skripsi.deskripsi":me,"progres.isJudulDeskripsi":!0,"progres.notifLog":"Judul dan Deskripsi skripsi telah diisi"};await be.collection("users2").doc(e.value.user.userId).get().then(Z=>{Z.exists?(console.log("skripsi ditambahkan ke Dokumen"),be.collection("users2").doc(e.value.user.userId).update(ee)):console.log("Dokumen tidak ditemukan")}).catch(Z=>{console.log("Error getting document:",Z)})},jmlhKriteria:l,jmlhAlternatif:h,signInPasswordToAdmin:async(O,me)=>{$t.auth().signInWithEmailAndPassword(O,me).then(ee=>{var Z=ee.user;be.collection("users2").doc(Z.uid).get().then(re=>{t.value=Z,e.value=re.data()})}).catch(ee=>{var Z=ee.code,re=ee.message;console.log(Z),console.log(re)})}}}const be=$t.firestore();function rB(t){return t.split(" ").map(n=>n[0]).slice(0,2).join("")}function iB(t){return t.split(" ").join("")}var FM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oB(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function UM(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var r=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return t[s]}})}),n}var vT={exports:{}};const VM=UM(Wk);(function(t,e){(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".po-password-strength-bar{border-radius:2px;transition:all .2s linear;height:5px;margin-top:8px}.po-password-strength-bar.risky{background-color:#f95e68;width:10%}.po-password-strength-bar.guessable{background-color:#fb964d;width:32.5%}.po-password-strength-bar.weak{background-color:#fdd244;width:55%}.po-password-strength-bar.safe{background-color:#b0dc53;width:77.5%}.po-password-strength-bar.secure{background-color:#35cc62;width:100%}")),document.head.appendChild(n)}}catch(s){console.error("vite-plugin-css-injected-by-js",s)}})(),function(n,s){t.exports=s(VM)}(FM,function(n){const s=u=>{let l=0,h=0,d=0,f=0,p=0;const b=/[^A-Za-z0-9]/g,_=/(.*[a-z].*)/g,y=/(.*[A-Z].*)/g,g=/(.*[0-9].*)/g,I=/(\w)(\1+\1+\1+\1+)/g,C=b.test(u),D=_.test(u),P=y.test(u),$=g.test(u),x=I.test(u);return u.length>4&&((D||P)&&$&&(p=1),P&&D&&(f=1),(D||P||$)&&C&&(d=1),u.length>8&&(h=1),u.length>12&&!x&&(h=2),u.length>25&&!x&&(h=3),l=h+d+f+p,l>4&&(l=4)),l},r=u=>{switch(u){case 0:return"risky";case 1:return"guessable";case 2:return"weak";case 3:return"safe";case 4:return"secure";default:return""}},i=u=>{const l=s(u);return r(l)},o={name:"PasswordMeter",props:{password:String},emits:["score"],computed:{passwordClass(){if(!this.password)return null;const u=i(this.password),l=s(this.password);return this.$emit("score",{score:l,strength:u}),{[u]:!0,scored:!0}}}},a=(u,l)=>{const h=u.__vccOpts||u;for(const[d,f]of l)h[d]=f;return h};function c(u,l,h,d,f,p){return n.openBlock(),n.createElementBlock("div",{class:n.normalizeClass(["po-password-strength-bar",p.passwordClass])},null,2)}return a(o,[["render",c]])})})(vT);const zy=vT.exports;const nh=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},BM={},To=t=>(of("data-v-488876f2"),t=t(),af(),t),$M={class:"columns skeleton"},qM={class:"column is-2 left"},jM=To(()=>R("div",{class:"title mb-3 el"},null,-1)),KM={class:"column mid"},HM={class:"mid-1"},GM=To(()=>R("div",{class:"judul mb-3 el"},null,-1)),WM=To(()=>R("div",{class:"isi-2 el"},null,-1)),zM=To(()=>R("div",{class:"btn el"},null,-1)),QM=To(()=>R("div",{class:"mid-2"},null,-1)),JM={class:"column is-2 right"},YM={class:"right-1"},XM=To(()=>R("div",{class:"judul el"},null,-1));function ZM(t,e){return ue(),ye("div",$M,[R("div",qM,[jM,(ue(),ye(He,null,As(8,n=>R("div",{key:n,class:"menu el"})),64))]),R("div",KM,[R("div",HM,[GM,(ue(),ye(He,null,As(3,n=>R("div",{key:n,class:"isi-1 el"})),64)),WM,zM]),QM]),R("div",JM,[R("div",YM,[XM,(ue(),ye(He,null,As(5,n=>R("div",{key:n,class:"isi el"})),64))])])])}const Qy=nh(BM,[["render",ZM],["__scopeId","data-v-488876f2"]]);const eF=t=>(of("data-v-bceed3f5"),t=t(),af(),t),tF={class:"toast-my"},nF={class:"toast-my--notif notif-color"},sF=eF(()=>R("span",{class:"toast-my--progress progres-color"},null,-1)),rF={__name:"ToastWarning",props:{msg:String},setup(t){return(e,n)=>(ue(),ye("div",tF,[R("div",nF,[R("p",null,qd(t.msg),1),sF])]))}},Jy=nh(rF,[["__scopeId","data-v-bceed3f5"]]);const iF={class:"arrow-wrapper"},oF={__name:"ModernButton",props:{msg:String,color:String},setup(t){return(e,n)=>(ue(),ye("button",{class:Je(t.color)},[oo(qd(t.msg)+" ",1),R("div",iF,[R("div",{class:Je(["arrow",t.color])},null,2)])],2))}},Yc=nh(oF,[["__scopeId","data-v-2af33677"]]);const aF={key:0},cF={key:1},uF={key:0,class:"toast"},lF={key:1},hF={key:0},dF={key:0,id:"login",class:"columns fixed-columns"},fF={id:"login-left",class:"column white"},pF={class:"kotak"},mF={class:"kotak-1"},gF=R("div",{class:"text-125 text-semi-bold"},"Yuk lengkapi data kamu",-1),yF=R("div",{class:"mb-4"},"1/2",-1),vF={class:"input-my light-mode-input-my flex border-bottom-info"},wF=R("div",{class:"mt-4 mb-2"},"Nama Lengkap",-1),_F=R("div",{class:"mt-4 mb-2"},"NIM",-1),IF=R("div",{class:"mt-4 mb-2"},"Prodi",-1),bF={key:1,class:"button-my flex mt-6 py-4 text-1 info disable"},EF=R("div",{id:"login-right",class:"column np"},[R("div",{class:"kotak kotak-2"},[R("div",{class:"lingkaran info"}),R("div",{class:"glass"})])],-1),TF={key:1,id:"signup",class:"columns fixed-columns"},SF={id:"signup-left",class:"column white"},kF={id:"signup-kotak",class:"kotak"},CF={id:"signup-kotak-1",class:"kotak-1"},AF=R("div",{class:"text-125 text-semi-bold"},"Hampir selesai",-1),RF=R("div",{class:""},"2/2",-1),NF={style:{width:"100%"}},xF={id:"signup-edit-my--profil",class:"edit-my--profil"},DF={class:"left"},PF=["src"],OF={class:"right"},LF=R("div",{class:""},"Pilih avatar",-1),MF={class:"top-2"},FF={class:"top"},UF={key:0,class:"dot-select dot-select-light"},VF=["src","alt","onClick"],BF=R("div",{class:"mt-2"},"Pilih background",-1),$F={class:"bot-2"},qF={class:"bot"},jF={key:0,class:"dot-select dot-select-light"},KF=["onClick"],HF={key:1,class:"button-my flex success mt-2 py-4 disable"},GF=R("div",{id:"signup-right",class:"column np"},[R("div",{class:"kotak kotak-2"},[R("div",{class:"lingkaran success"}),R("div",{class:"glass"})])],-1),WF={id:"signup-mobile",class:"light-mode-bg"},zF={key:0,style:{height:"100vh",display:"flex"}},QF={id:"signup-mobile-kotak-1",class:"kotak-1"},JF=R("div",{class:"text-125 text-semi-bold"},"Hampir selesai",-1),YF=R("div",{class:"text-sm"},"2/2",-1),XF={style:{width:"100%"}},ZF={id:"signup-mobile-edit-my--profil",class:"edit-my--profil"},eU={class:"left"},tU=["src"],nU={class:"right"},sU=R("div",{class:"text"},"Pilih avatar",-1),rU={class:"top-2"},iU={class:"top"},oU={key:0,class:"dot-select dot-select-light"},aU=["src","alt","onClick"],cU=R("div",{class:"text mt-2"},"Pilih background",-1),uU={class:"bot-2"},lU={class:"bot"},hU={key:0,class:"dot-select dot-select-light"},dU=["onClick"],fU={key:3},pU={key:0,class:"toast"},mU={key:1,id:"login",class:"columns fixed-columns"},gU={id:"login-left",class:"column white p-0"},yU={class:"kotak"},vU=R("div",{class:"text-175 text-semi-bold"},"Login",-1),wU=R("p",{class:"mb-5"},"Untuk mencari rekomendasi dosen pembimbing skripsi.",-1),_U=R("div",{class:"mt-4 mb-2"},"Email",-1),IU=R("div",{class:"mt-5 mb-2"},"Password",-1),bU={key:0,style:{position:"relative"}},EU={key:1,style:{position:"relative"}},TU={class:"text-075 mt-4 typography-semu-light"},SU=oo("Belum punya akun? "),kU=R("div",{id:"login-right",class:"column p-0"},[R("div",{class:"kotak kotak-2"},[R("div",{class:"lingkaran primary"}),R("div",{class:"glass"})])],-1),CU={key:2,id:"login",class:"columns fixed-columns"},AU={id:"login-left",class:"column white p-0"},RU={class:"kotak"},NU=R("div",{class:"text-175 text-semi-bold"},"Signup",-1),xU=R("p",{class:"mb-5"},"Untuk membuat akun baru.",-1),DU=R("div",{class:"mt-4 mb-2"},"Email",-1),PU=R("div",{class:"mt-4 mb-2"},"Password",-1),OU={key:0,style:{position:"relative"}},LU={key:1,style:{position:"relative"}},MU=R("div",{class:"mt-4 mb-2"},"Ulangi Password",-1),FU={key:2,style:{position:"relative"}},UU={key:3,style:{position:"relative"}},VU={class:"text-075 mt-4 typography-semu-light"},BU=oo("Sudah punya akun? "),$U=R("div",{id:"login-right",class:"column np"},[R("div",{class:"kotak kotak-2"},[R("div",{class:"lingkaran warning"}),R("div",{class:"glass"})])],-1),qU={__name:"App",setup(t){const e=$o(()=>nt(()=>import("./HomePage.10500318.js"),["assets/HomePage.10500318.js","assets/HomePage.78743d12.css","assets/OtherFunctions.92fbf448.js","assets/DataService.5f1e1429.js","assets/sweetalert.min.b2bbc6aa.js"])),n=$o(()=>nt(()=>import("./EyeIcon.25ed8560.js"),[])),s=$o(()=>nt(()=>import("./EyeSlashIcon.34822b09.js"),[])),r=$o(()=>nt(()=>import("./CheckIcon.f7749ca5.js"),[])),{isLogin:i,afterLogin:o,signUpPassword:a,signInPassword:c,signInForm:u,signUpForm:l,isToast:h,msgToast:d,thisUser:f,completeForm:p,sendCompleteForm:b}=MM(),_=Oe("login");function y(X){var A=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;return A.test(X)}const g=Oe(1),I=Oe(null),C=Oe(null),D=Oe(null),P=Oe(!1),$=Oe([{image:"ToyFaces_Tansparent_BG_1.png",name:"Avatar 1",url:"https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_1.png?alt=media&token=d4338eef-64b8-49b3-a18c-e58d5ca54024"},{image:"ToyFaces_Tansparent_BG_2.png",name:"Avatar 2",url:"https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_2.png?alt=media&token=d53638ef-519d-468b-9b3f-c367540ef819"},{image:"ToyFaces_Tansparent_BG_3.png",name:"Avatar 3",url:"https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_3.png?alt=media&token=c595dd8f-ee73-4f6f-aef5-b5ed07bbb55c"},{image:"ToyFaces_Tansparent_BG_4.png",name:"Avatar 4",url:"https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_4.png?alt=media&token=8413c2d1-6249-430d-8942-271061fbd72b"},{image:"ToyFaces_Tansparent_BG_5.png",name:"Avatar 5",url:"https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_5.png?alt=media&token=049245cb-4a07-461c-922b-e1810f0fa3be"},{image:"ToyFaces_Tansparent_BG_6.png",name:"Avatar 6",url:"https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_6.png?alt=media&token=79294ba1-5189-466b-b51a-1973f9629f43"},{image:"ToyFaces_Tansparent_BG_7.png",name:"Avatar 7",url:"https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_7.png?alt=media&token=067f5918-770b-4e93-8355-f5b18ccd10e5"}]),x=Oe([{bgColor:"danger-gradient-1",color:"danger-text"},{bgColor:"primary-gradient-1",color:"primary-text"},{bgColor:"link-gradient-1",color:"link-text"},{bgColor:"info-gradient-1",color:"info-text"},{bgColor:"success-gradient-1",color:"success-text"},{bgColor:"warning-gradient-1",color:"warning-text"}]),z=Oe(!0);return io(()=>{P.value=!0,setTimeout(()=>P.value=!1,6e3)}),(X,A)=>(ue(),An(Kv,null,{default:Fi(()=>[w(o)?(ue(),ye("div",aF,[_e(w(e))])):w(i)?(ue(),ye("div",cF,[w(h)?(ue(),ye("div",uF,[_e(Jy,{msg:w(d)},null,8,["msg"])])):Wt("",!0),w(f)?(ue(),ye("div",lF,[w(f).login.isLogin==!0?(ue(),ye("div",hF,[g.value==1?(ue(),ye("div",dF,[R("div",fF,[R("div",pF,[R("div",mF,[gF,yF,R("div",vF,[wF,nn(R("input",{type:"text","onUpdate:modelValue":A[0]||(A[0]=T=>w(p).user.userName=T),placeholder:"Nama lengkap",class:"input-my--input light-mode-input-my--input"},null,512),[[Ut,w(p).user.userName]]),_F,nn(R("input",{type:"text","onUpdate:modelValue":A[1]||(A[1]=T=>w(p).user.userNIM=T),placeholder:"NIM",class:"input-my--input light-mode-input-my--input"},null,512),[[Ut,w(p).user.userNIM]]),IF,nn(R("input",{type:"text","onUpdate:modelValue":A[2]||(A[2]=T=>w(p).user.userProdi=T),readonly:"",class:"input-my--input light-mode-input-my--input"},null,512),[[Ut,w(p).user.userProdi]])]),w(p).user.userNIM!==""&&w(p).user.userName!==""&&w(p).user.userProdi!==""?(ue(),ye("div",{key:0,class:"button-my flex mt-6 py-4 text-1 glow info info-glow",onClick:A[3]||(A[3]=T=>g.value=2)},"Lanjut")):(ue(),ye("div",bF,"Lanjut"))])])]),EF])):g.value==2?(ue(),ye("div",TF,[R("div",SF,[R("div",kF,[R("div",CF,[AF,RF,R("div",NF,[R("div",xF,[R("div",DF,[R("div",{class:Je(["main xl",w(p).profile.background?w(p).profile.background:"light-gradient"])},[w(p).profile.url?(ue(),ye("img",{key:0,src:w(p).profile.url},null,8,PF)):Wt("",!0)],2)]),R("div",OF,[LF,R("div",MF,[R("div",FF,[(ue(!0),ye(He,null,As($.value,(T,le)=>(ue(),ye("div",{key:le,class:"item"},[R("div",{class:Je(["main sm light-gradient",w(p).profile.url===T.url?"selected-light":""])},[w(p).profile.url==T.url?(ue(),ye("div",UF,[_e(w(r))])):Wt("",!0),R("img",{src:T.url,alt:T.image,onClick:O=>(w(p).profile.avatar=T.image,w(p).profile.url=T.url)},null,8,VF)],2)]))),128))])]),BF,R("div",$F,[R("div",qF,[(ue(!0),ye(He,null,As(x.value,(T,le)=>(ue(),ye("div",{key:le,class:"item"},[w(p).profile.background==T.bgColor?(ue(),ye("div",jF,[_e(w(r))])):Wt("",!0),R("div",{class:Je(["main sm",w(p).profile.background==T.bgColor?T.bgColor+" selected-light":T.bgColor]),onClick:O=>(w(p).profile.background=T.bgColor,w(p).profile.color=T.color)},null,10,KF)]))),128))])])])])]),w(p).profile.avatar!==""&&w(p).profile.url!==""&&w(p).profile.background!==""?(ue(),ye("div",{key:0,class:"button-my flex glow success success-glow mt-2 py-4",onClick:A[4]||(A[4]=T=>w(b)())},"Selesai")):(ue(),ye("div",HF,"Selesai")),R("div",{class:"button-my flex light-transparent py-4",onClick:A[5]||(A[5]=T=>g.value=1)},"Kembali")])])]),GF])):Wt("",!0)])):Wt("",!0)])):Wt("",!0),R("div",WF,[g.value==2?(ue(),ye("div",zF,[R("div",QF,[JF,YF,R("div",XF,[R("div",ZF,[R("div",eU,[R("div",{class:Je(["main xl",w(p).profile.background?w(p).profile.background:"light-gradient"])},[w(p).profile.url?(ue(),ye("img",{key:0,src:w(p).profile.url},null,8,tU)):Wt("",!0)],2)]),R("div",nU,[sU,R("div",rU,[R("div",iU,[(ue(!0),ye(He,null,As($.value,(T,le)=>(ue(),ye("div",{key:le,class:"item"},[R("div",{class:Je(["main sm light-gradient",w(p).profile.url===T.url?"selected":""])},[w(p).profile.url==T.url?(ue(),ye("div",oU,[_e(w(r))])):Wt("",!0),R("img",{src:T.url,alt:T.image,onClick:O=>(w(p).profile.avatar=T.image,w(p).profile.url=T.url)},null,8,aU)],2)]))),128))])]),cU,R("div",uU,[R("div",lU,[(ue(!0),ye(He,null,As(x.value,(T,le)=>(ue(),ye("div",{key:le,class:"item"},[w(p).profile.background==T.bgColor?(ue(),ye("div",hU,[_e(w(r))])):Wt("",!0),R("div",{class:Je(["main sm",w(p).profile.background==T.bgColor?T.bgColor+" selected":T.bgColor]),onClick:O=>(w(p).profile.background=T.bgColor,w(p).profile.color=T.color)},null,10,dU)]))),128))])])])])]),R("div",{class:"button-my flex glow success success-glow mt-5 py-3",onClick:A[6]||(A[6]=T=>w(b)())},"Selesai"),R("div",{class:"button-my flex light-transparent",onClick:A[7]||(A[7]=T=>g.value=1)},"Kembali")])])):Wt("",!0)])])):P.value?(ue(),An(Qy,{key:2})):(ue(),ye("div",fU,[w(h)?(ue(),ye("div",pU,[_e(Jy,{msg:w(d)},null,8,["msg"])])):Wt("",!0),_.value==="login"?(ue(),ye("div",mU,[R("div",gU,[R("div",yU,[R("div",{class:Je(["kotak-1",z.value?"light-mode-bg":"dark-mode-layout"])},[vU,wU,R("div",{class:Je(["input-my flex border-bottom-primary",z.value?"light-mode-input-my":"dark-mode-input-my"])},[_U,nn(R("input",{type:"text","onUpdate:modelValue":A[8]||(A[8]=T=>w(u).userEmail=T),placeholder:"contoh@gmail.com",class:Je([z.value?"light-mode-input-my--input-nh":"dark-mode-input-my--input-nh","input-my--input-nh"]),onKeypress:A[9]||(A[9]=Jn(T=>w(u).userEmail!==""&&w(u).userPassword!==""&&y(w(u).userEmail)===!0?w(c)(w(u).userEmail,w(u).userPassword):"",["enter"]))},null,34),[[Ut,w(u).userEmail]]),IU,D.value?(ue(),ye("div",bU,[nn(R("input",{type:"text","onUpdate:modelValue":A[10]||(A[10]=T=>w(u).userPassword=T),placeholder:"Password",class:Je([z.value?"light-mode-input-my--input-nh":"dark-mode-input-my--input-nh","input-my--input-nh"]),onKeypress:A[11]||(A[11]=Jn(T=>w(u).userEmail!==""&&w(u).userPassword!==""&&y(w(u).userEmail)===!0?w(c)(w(u).userEmail,w(u).userPassword):"",["enter"]))},null,34),[[Ut,w(u).userPassword]]),_e(w(s),{class:"icon-mata",onClick:A[12]||(A[12]=T=>D.value=null)})])):(ue(),ye("div",EU,[nn(R("input",{type:"password","onUpdate:modelValue":A[13]||(A[13]=T=>w(u).userPassword=T),placeholder:"Password",class:Je([z.value?"light-mode-input-my--input-nh":"dark-mode-input-my--input-nh","input-my--input-nh"]),onKeypress:A[14]||(A[14]=Jn(T=>w(u).userEmail!==""&&w(u).userPassword!==""&&y(w(u).userEmail)===!0?w(c)(w(u).userEmail,w(u).userPassword):"",["enter"]))},null,34),[[Ut,w(u).userPassword]]),_e(w(n),{class:"icon-mata",onClick:A[15]||(A[15]=T=>D.value=!0)})]))],2),w(u).userEmail!==""&&w(u).userPassword!==""&&y(w(u).userEmail)===!0?(ue(),An(Yc,{key:0,msg:"Log In",color:"glow primary",class:"mt-6 flex",style:{"justify-content":"center"},onClick:A[16]||(A[16]=T=>w(c)(w(u).userEmail,w(u).userPassword))})):(ue(),An(Yc,{key:1,msg:"Log In",color:"primary",class:"mt-6 flex disable",style:{"justify-content":"center","pointer-events":"none"}})),R("div",TU,[SU,R("u",{class:"text-075 primary-text",style:{cursor:"pointer"},onClick:A[17]||(A[17]=T=>_.value="signup")},"Sign Up")])],2)])]),kU])):_.value==="signup"?(ue(),ye("div",CU,[R("div",AU,[R("div",RU,[R("div",{class:Je(["kotak-1",z.value?"light-mode-bg":"dark-mode-layout"])},[NU,xU,R("div",{class:Je(["input-my flex",z.value?"light-mode-input-my":"dark-mode-input-my"])},[DU,nn(R("input",{type:"text","onUpdate:modelValue":A[18]||(A[18]=T=>w(l).userEmail=T),placeholder:"contoh@gmail.com",class:Je(["input-my-email--input light-mode-input-my-email--input",[y(w(l).userEmail)===!0&&w(l).userEmail!==""?"border-bottom-2-success":y(w(l).userEmail)!==!0&&w(l).userEmail!==""?"border-bottom-2-danger":""]]),onKeypress:A[19]||(A[19]=Jn(T=>w(l).userEmail!==""&&w(l).userPassword!==""&&w(l).retypePassword!==""&&w(l).userPassword===w(l).retypePassword&&y(w(l).userEmail)===!0?w(a)(w(l).userEmail,w(l).userPassword):"",["enter"]))},null,34),[[Ut,w(l).userEmail]]),PU,I.value?(ue(),ye("div",OU,[nn(R("input",{type:"text","onUpdate:modelValue":A[20]||(A[20]=T=>w(l).userPassword=T),placeholder:"Password",class:"input-my--input-nh light-mode-input-my--input-nh",onKeypress:A[21]||(A[21]=Jn(T=>w(l).userEmail!==""&&w(l).userPassword!==""&&w(l).retypePassword!==""&&w(l).userPassword===w(l).retypePassword&&y(w(l).userEmail)===!0?w(a)(w(l).userEmail,w(l).userPassword):"",["enter"]))},null,544),[[Ut,w(l).userPassword]]),_e(w(s),{class:"icon-mata",onClick:A[22]||(A[22]=T=>I.value=null)})])):(ue(),ye("div",LU,[nn(R("input",{type:"password","onUpdate:modelValue":A[23]||(A[23]=T=>w(l).userPassword=T),placeholder:"Password",class:"input-my--input-nh light-mode-input-my--input-nh",onKeypress:A[24]||(A[24]=Jn(T=>w(l).userEmail!==""&&w(l).userPassword!==""&&w(l).retypePassword!==""&&w(l).userPassword===w(l).retypePassword&&y(w(l).userEmail)===!0?w(a)(w(l).userEmail,w(l).userPassword):"",["enter"]))},null,544),[[Ut,w(l).userPassword]]),_e(w(n),{class:"icon-mata",onClick:A[25]||(A[25]=T=>I.value=!0)})])),_e(w(zy),{password:w(l).userPassword},null,8,["password"]),MU,C.value?(ue(),ye("div",FU,[nn(R("input",{type:"text","onUpdate:modelValue":A[26]||(A[26]=T=>w(l).retypePassword=T),placeholder:"Ulangi Password",class:"input-my--input-nh light-mode-input-my--input-nh",onKeypress:A[27]||(A[27]=Jn(T=>w(l).userEmail!==""&&w(l).userPassword!==""&&w(l).retypePassword!==""&&w(l).userPassword===w(l).retypePassword&&y(w(l).userEmail)===!0?w(a)(w(l).userEmail,w(l).userPassword):"",["enter"]))},null,544),[[Ut,w(l).retypePassword]]),_e(w(s),{class:"icon-mata",onClick:A[28]||(A[28]=T=>C.value=null)})])):(ue(),ye("div",UU,[nn(R("input",{type:"password","onUpdate:modelValue":A[29]||(A[29]=T=>w(l).retypePassword=T),placeholder:"Ulangi Password",class:"input-my--input-nh light-mode-input-my--input-nh",onKeypress:A[30]||(A[30]=Jn(T=>w(l).userEmail!==""&&w(l).userPassword!==""&&w(l).retypePassword!==""&&w(l).userPassword===w(l).retypePassword&&y(w(l).userEmail)===!0?w(a)(w(l).userEmail,w(l).userPassword):"",["enter"]))},null,544),[[Ut,w(l).retypePassword]]),_e(w(n),{class:"icon-mata",onClick:A[31]||(A[31]=T=>C.value=!0)})])),_e(w(zy),{password:w(l).retypePassword},null,8,["password"])],2),w(l).userPassword!==""&&w(l).userPassword===w(l).retypePassword&&y(w(l).userEmail)===!0?(ue(),An(Yc,{key:0,msg:"Signup",color:"glow warning",class:"mt-5 flex",style:{"justify-content":"center"},onClick:A[32]||(A[32]=T=>w(a)(w(l).userEmail,w(l).userPassword))})):(ue(),An(Yc,{key:1,msg:"Signup",color:"warning",class:"mt-5 flex disable",style:{"justify-content":"center","pointer-events":"none"}})),R("div",VU,[BU,R("u",{class:"text-075 warning-text",style:{cursor:"pointer"},onClick:A[33]||(A[33]=T=>_.value="login")},"Login")])],2)])]),$U])):Wt("",!0)]))]),fallback:Fi(()=>[_e(Qy)]),_:1}))}};/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _i=typeof window<"u";function jU(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ve=Object.assign;function Ph(t,e){const n={};for(const s in e){const r=e[s];n[s]=Sn(r)?r.map(t):t(r)}return n}const pa=()=>{},Sn=Array.isArray,KU=/\/$/,HU=t=>t.replace(KU,"");function Oh(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=QU(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function GU(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function WU(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&no(e.matched[s],n.matched[r])&&wT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function no(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zU(t[n],e[n]))return!1;return!0}function zU(t,e){return Sn(t)?Xy(t,e):Sn(e)?Xy(e,t):t===e}function Xy(t,e){return Sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function QU(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Qa;(function(t){t.pop="pop",t.push="push"})(Qa||(Qa={}));var ma;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ma||(ma={}));function JU(t){if(!t)if(_i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HU(t)}const YU=/^[^#]+#/;function XU(t,e){return t.replace(YU,"#")+e}function ZU(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const sh=()=>({left:window.pageXOffset,top:window.pageYOffset});function eV(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ZU(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Zy(t,e){return(history.state?history.state.position-e:-1)+t}const Ud=new Map;function tV(t,e){Ud.set(t,e)}function nV(t){const e=Ud.get(t);return Ud.delete(t),e}let sV=()=>location.protocol+"//"+location.host;function _T(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Yy(c,"")}return Yy(n,t)+s+r}function rV(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const f=_T(t,location),p=n.value,b=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}_=b?d.position-b.position:0}else s(f);r.forEach(y=>{y(n.value,p,{delta:_,type:Qa.pop,direction:_?_>0?ma.forward:ma.back:ma.unknown})})};function c(){o=n.value}function u(d){r.push(d);const f=()=>{const p=r.indexOf(d);p>-1&&r.splice(p,1)};return i.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(Ve({},d.state,{scroll:sh()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function ev(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?sh():null}}function iV(t){const{history:e,location:n}=window,s={value:_T(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:sV()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=Ve({},e.state,ev(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=Ve({},r.value,e.state,{forward:c,scroll:sh()});i(l.current,l,!0);const h=Ve({},ev(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function oV(t){t=JU(t);const e=iV(t),n=rV(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ve({location:"",base:t,go:s,createHref:XU.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function aV(t){return typeof t=="string"||t&&typeof t=="object"}function IT(t){return typeof t=="string"||typeof t=="symbol"}const Is={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bT=Symbol("");var tv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tv||(tv={}));function so(t,e){return Ve(new Error,{type:t,[bT]:!0},e)}function zn(t,e){return t instanceof Error&&bT in t&&(e==null||!!(t.type&e))}const nv="[^/]+?",cV={sensitive:!1,strict:!1,start:!0,end:!0},uV=/[.+*?^${}()[\]/\\]/g;function lV(t,e){const n=Ve({},cV,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(uV,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:b,optional:_,regexp:y}=d;i.push({name:p,repeatable:b,optional:_});const g=y||nv;if(g!==nv){f+=10;try{new RegExp(`(${g})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+C.message)}}let I=b?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(I=_&&u.length<2?`(?:/${I})`:"/"+I),_&&(I+="?"),r+=I,f+=20,_&&(f+=-8),b&&(f+=-20),g===".*"&&(f+=-50)}l.push(f)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",p=i[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:p,repeatable:b,optional:_}=f,y=p in u?u[p]:"";if(Sn(y)&&!b)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=Sn(y)?y.join("/"):y;if(!g)if(_)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);l+=g}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function hV(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dV(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=hV(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(sv(s))return 1;if(sv(r))return-1}return r.length-s.length}function sv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const fV={type:0,value:""},pV=/[a-zA-Z0-9_]/;function mV(t){if(!t)return[[]];if(t==="/")return[[fV]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:pV.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function gV(t,e,n){const s=lV(mV(t.path),n),r=Ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function yV(t,e){const n=[],s=new Map;e=iv({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const f=!d,p=wV(l);p.aliasOf=d&&d.record;const b=iv(e,l),_=[p];if("alias"in l){const I=typeof l.alias=="string"?[l.alias]:l.alias;for(const C of I)_.push(Ve({},p,{components:d?d.record.components:p.components,path:C,aliasOf:d?d.record:p}))}let y,g;for(const I of _){const{path:C}=I;if(h&&C[0]!=="/"){const D=h.record.path,P=D[D.length-1]==="/"?"":"/";I.path=h.record.path+(C&&P+C)}if(y=gV(I,h,b),d?d.alias.push(y):(g=g||y,g!==y&&g.alias.push(y),f&&l.name&&!rv(y)&&o(l.name)),p.children){const D=p.children;for(let P=0;P<D.length;P++)i(D[P],y,d&&d.children[P])}d=d||y,c(y)}return g?()=>{o(g)}:pa}function o(l){if(IT(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&dV(l,n[h])>=0&&(l.record.path!==n[h].record.path||!ET(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!rv(l)&&s.set(l.record.name,l)}function u(l,h){let d,f={},p,b;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw so(1,{location:l});b=d.record.name,f=Ve(vV(h.params,d.keys.filter(g=>!g.optional).map(g=>g.name)),l.params),p=d.stringify(f)}else if("path"in l)p=l.path,d=n.find(g=>g.re.test(p)),d&&(f=d.parse(p),b=d.record.name);else{if(d=h.name?s.get(h.name):n.find(g=>g.re.test(h.path)),!d)throw so(1,{location:l,currentLocation:h});b=d.record.name,f=Ve({},h.params,l.params),p=d.stringify(f)}const _=[];let y=d;for(;y;)_.unshift(y.record),y=y.parent;return{name:b,path:p,params:f,matched:_,meta:IV(_)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function vV(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function wV(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_V(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _V(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function rv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function IV(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function iv(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ET(t,e){return e.children.some(n=>n===t||ET(t,n))}const TT=/#/g,bV=/&/g,EV=/\//g,TV=/=/g,SV=/\?/g,ST=/\+/g,kV=/%5B/g,CV=/%5D/g,kT=/%5E/g,AV=/%60/g,CT=/%7B/g,RV=/%7C/g,AT=/%7D/g,NV=/%20/g;function cm(t){return encodeURI(""+t).replace(RV,"|").replace(kV,"[").replace(CV,"]")}function xV(t){return cm(t).replace(CT,"{").replace(AT,"}").replace(kT,"^")}function Vd(t){return cm(t).replace(ST,"%2B").replace(NV,"+").replace(TT,"%23").replace(bV,"%26").replace(AV,"`").replace(CT,"{").replace(AT,"}").replace(kT,"^")}function DV(t){return Vd(t).replace(TV,"%3D")}function PV(t){return cm(t).replace(TT,"%23").replace(SV,"%3F")}function OV(t){return t==null?"":PV(t).replace(EV,"%2F")}function Gu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function LV(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ST," "),o=i.indexOf("="),a=Gu(o<0?i:i.slice(0,o)),c=o<0?null:Gu(i.slice(o+1));if(a in e){let u=e[a];Sn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ov(t){let e="";for(let n in t){const s=t[n];if(n=DV(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Sn(s)?s.map(i=>i&&Vd(i)):[s&&Vd(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MV(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Sn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const FV=Symbol(""),av=Symbol(""),um=Symbol(""),RT=Symbol(""),Bd=Symbol("");function Uo(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ss(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(so(4,{from:n,to:e})):h instanceof Error?a(h):aV(h)?a(so(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Lh(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(UV(a)){const u=(a.__vccOpts||a)[e];u&&r.push(Ss(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=jU(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Ss(d,n,s,i,o)()}))}}return r}function UV(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cv(t){const e=Vn(um),n=Vn(RT),s=xt(()=>e.resolve(w(t.to))),r=xt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(no.bind(null,l));if(d>-1)return d;const f=uv(c[u-2]);return u>1&&uv(l)===f&&h[h.length-1].path!==f?h.findIndex(no.bind(null,c[u-2])):d}),i=xt(()=>r.value>-1&&qV(n.params,s.value.params)),o=xt(()=>r.value>-1&&r.value===n.matched.length-1&&wT(n.params,s.value.params));function a(c={}){return $V(c)?e[w(t.replace)?"replace":"push"](w(t.to)).catch(pa):Promise.resolve()}return{route:s,href:xt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const VV=nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cv,setup(t,{slots:e}){const n=ro(cv(t)),{options:s}=Vn(um),r=xt(()=>({[lv(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[lv(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ic("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),BV=VV;function $V(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qV(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Sn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function uv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lv=(t,e,n)=>t!=null?t:e!=null?e:n,jV=nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Vn(Bd),r=xt(()=>t.route||s.value),i=Vn(av,0),o=xt(()=>{let u=w(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=xt(()=>r.value.matched[o.value]);Zo(av,xt(()=>o.value+1)),Zo(FV,a),Zo(Bd,r);const c=Oe();return Ai(()=>[c.value,a.value,t.name],([u,l,h],[d,f,p])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!no(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return hv(n.default,{Component:d,route:u});const f=h.props[l],p=f?f===!0?u.params:typeof f=="function"?f(u):f:null,_=ic(d,Ve({},p,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return hv(n.default,{Component:_,route:u})||_}}});function hv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KV=jV;function HV(t){const e=yV(t.routes,t),n=t.parseQuery||LV,s=t.stringifyQuery||ov,r=t.history,i=Uo(),o=Uo(),a=Uo(),c=Dv(Is);let u=Is;_i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ph.bind(null,N=>""+N),h=Ph.bind(null,OV),d=Ph.bind(null,Gu);function f(N,se){let G,ie;return IT(N)?(G=e.getRecordMatcher(N),ie=se):ie=N,e.addRoute(ie,G)}function p(N){const se=e.getRecordMatcher(N);se&&e.removeRoute(se)}function b(){return e.getRoutes().map(N=>N.record)}function _(N){return!!e.getRecordMatcher(N)}function y(N,se){if(se=Ve({},se||c.value),typeof N=="string"){const Ie=Oh(n,N,se.path),m=e.resolve({path:Ie.path},se),v=r.createHref(Ie.fullPath);return Ve(Ie,m,{params:d(m.params),hash:Gu(Ie.hash),redirectedFrom:void 0,href:v})}let G;if("path"in N)G=Ve({},N,{path:Oh(n,N.path,se.path).path});else{const Ie=Ve({},N.params);for(const m in Ie)Ie[m]==null&&delete Ie[m];G=Ve({},N,{params:h(N.params)}),se.params=h(se.params)}const ie=e.resolve(G,se),Me=N.hash||"";ie.params=l(d(ie.params));const Be=GU(s,Ve({},N,{hash:xV(Me),path:ie.path})),Ee=r.createHref(Be);return Ve({fullPath:Be,hash:Me,query:s===ov?MV(N.query):N.query||{}},ie,{redirectedFrom:void 0,href:Ee})}function g(N){return typeof N=="string"?Oh(n,N,c.value.path):Ve({},N)}function I(N,se){if(u!==N)return so(8,{from:se,to:N})}function C(N){return $(N)}function D(N){return C(Ve(g(N),{replace:!0}))}function P(N){const se=N.matched[N.matched.length-1];if(se&&se.redirect){const{redirect:G}=se;let ie=typeof G=="function"?G(N):G;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=g(ie):{path:ie},ie.params={}),Ve({query:N.query,hash:N.hash,params:"path"in ie?{}:N.params},ie)}}function $(N,se){const G=u=y(N),ie=c.value,Me=N.state,Be=N.force,Ee=N.replace===!0,Ie=P(G);if(Ie)return $(Ve(g(Ie),{state:Me,force:Be,replace:Ee}),se||G);const m=G;m.redirectedFrom=se;let v;return!Be&&WU(s,ie,G)&&(v=so(16,{to:m,from:ie}),ps(ie,ie,!0,!1)),(v?Promise.resolve(v):z(m,ie)).catch(k=>zn(k)?zn(k,2)?k:xe(k):Z(k,m,ie)).then(k=>{if(k){if(zn(k,2))return $(Ve({replace:Ee},g(k.to),{state:Me,force:Be}),se||m)}else k=A(m,ie,!0,Ee,Me);return X(m,ie,k),k})}function x(N,se){const G=I(N,se);return G?Promise.reject(G):Promise.resolve()}function z(N,se){let G;const[ie,Me,Be]=GV(N,se);G=Lh(ie.reverse(),"beforeRouteLeave",N,se);for(const Ie of ie)Ie.leaveGuards.forEach(m=>{G.push(Ss(m,N,se))});const Ee=x.bind(null,N,se);return G.push(Ee),mi(G).then(()=>{G=[];for(const Ie of i.list())G.push(Ss(Ie,N,se));return G.push(Ee),mi(G)}).then(()=>{G=Lh(Me,"beforeRouteUpdate",N,se);for(const Ie of Me)Ie.updateGuards.forEach(m=>{G.push(Ss(m,N,se))});return G.push(Ee),mi(G)}).then(()=>{G=[];for(const Ie of N.matched)if(Ie.beforeEnter&&!se.matched.includes(Ie))if(Sn(Ie.beforeEnter))for(const m of Ie.beforeEnter)G.push(Ss(m,N,se));else G.push(Ss(Ie.beforeEnter,N,se));return G.push(Ee),mi(G)}).then(()=>(N.matched.forEach(Ie=>Ie.enterCallbacks={}),G=Lh(Be,"beforeRouteEnter",N,se),G.push(Ee),mi(G))).then(()=>{G=[];for(const Ie of o.list())G.push(Ss(Ie,N,se));return G.push(Ee),mi(G)}).catch(Ie=>zn(Ie,8)?Ie:Promise.reject(Ie))}function X(N,se,G){for(const ie of a.list())ie(N,se,G)}function A(N,se,G,ie,Me){const Be=I(N,se);if(Be)return Be;const Ee=se===Is,Ie=_i?history.state:{};G&&(ie||Ee?r.replace(N.fullPath,Ve({scroll:Ee&&Ie&&Ie.scroll},Me)):r.push(N.fullPath,Me)),c.value=N,ps(N,se,G,Ee),xe()}let T;function le(){T||(T=r.listen((N,se,G)=>{if(!Mt.listening)return;const ie=y(N),Me=P(ie);if(Me){$(Ve(Me,{replace:!0}),ie).catch(pa);return}u=ie;const Be=c.value;_i&&tV(Zy(Be.fullPath,G.delta),sh()),z(ie,Be).catch(Ee=>zn(Ee,12)?Ee:zn(Ee,2)?($(Ee.to,ie).then(Ie=>{zn(Ie,20)&&!G.delta&&G.type===Qa.pop&&r.go(-1,!1)}).catch(pa),Promise.reject()):(G.delta&&r.go(-G.delta,!1),Z(Ee,ie,Be))).then(Ee=>{Ee=Ee||A(ie,Be,!1),Ee&&(G.delta&&!zn(Ee,8)?r.go(-G.delta,!1):G.type===Qa.pop&&zn(Ee,20)&&r.go(-1,!1)),X(ie,Be,Ee)}).catch(pa)}))}let O=Uo(),me=Uo(),ee;function Z(N,se,G){xe(N);const ie=me.list();return ie.length?ie.forEach(Me=>Me(N,se,G)):console.error(N),Promise.reject(N)}function re(){return ee&&c.value!==Is?Promise.resolve():new Promise((N,se)=>{O.add([N,se])})}function xe(N){return ee||(ee=!N,le(),O.list().forEach(([se,G])=>N?G(N):se()),O.reset()),N}function ps(N,se,G,ie){const{scrollBehavior:Me}=t;if(!_i||!Me)return Promise.resolve();const Be=!G&&nV(Zy(N.fullPath,0))||(ie||!G)&&history.state&&history.state.scroll||null;return tl().then(()=>Me(N,se,Be)).then(Ee=>Ee&&eV(Ee)).catch(Ee=>Z(Ee,N,se))}const mn=N=>r.go(N);let it;const De=new Set,Mt={currentRoute:c,listening:!0,addRoute:f,removeRoute:p,hasRoute:_,getRoutes:b,resolve:y,options:t,push:C,replace:D,go:mn,back:()=>mn(-1),forward:()=>mn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:re,install(N){const se=this;N.component("RouterLink",BV),N.component("RouterView",KV),N.config.globalProperties.$router=se,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>w(c)}),_i&&!it&&c.value===Is&&(it=!0,C(r.location).catch(Me=>{}));const G={};for(const Me in Is)G[Me]=xt(()=>c.value[Me]);N.provide(um,se),N.provide(RT,ro(G)),N.provide(Bd,c);const ie=N.unmount;De.add(N),N.unmount=function(){De.delete(N),De.size<1&&(u=Is,T&&T(),T=null,c.value=Is,it=!1,ee=!1),ie()}}};return Mt}function mi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function GV(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>no(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>no(u,c))||r.push(c))}return[n,s,r]}const WV=HV({history:oV("/"),scrollBehavior(t,e,n){return n||{top:0,left:0}},routes:[{path:"/",name:"home",components:{default:()=>nt(()=>import("./HomeView.4d845e76.js"),["assets/HomeView.4d845e76.js","assets/HomeView.3700c3ea.css","assets/OtherFunctions.92fbf448.js"]),rvRight:()=>nt(()=>import("./MenuRight.58bd95ed.js"),["assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js"])}},{path:"/pantau",name:"pantau",components:{default:()=>nt(()=>import("./PantauView.71e4d3df.js"),["assets/PantauView.71e4d3df.js","assets/PantauView.9d5bb091.css","assets/DataService.5f1e1429.js","assets/OtherFunctions.92fbf448.js"]),rvRight:()=>nt(()=>import("./MenuRight.58bd95ed.js"),["assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js"])}},{path:"/kriteria",name:"kriteria",components:{default:()=>nt(()=>import("./KriteriaView.1551f34a.js"),["assets/KriteriaView.1551f34a.js","assets/KriteriaView.bdb5ae71.css","assets/DataService.5f1e1429.js","assets/sweetalert.min.b2bbc6aa.js","assets/ToastDanger.22ae7b5a.js","assets/ToastDanger.41f8004f.css","assets/ToastSuccess.845655f8.js","assets/ToastSuccess.d61a8673.css","assets/SelectSingle.88bae576.js","assets/SelectSingle.1b664762.css","assets/OtherFunctions.92fbf448.js"]),rvRight:()=>nt(()=>import("./MenuRight.58bd95ed.js"),["assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js"])}},{path:"/alternatif",name:"alternatif",components:{default:()=>nt(()=>import("./AlternatifView.7ac946d6.js"),["assets/AlternatifView.7ac946d6.js","assets/AlternatifView.22db1b19.css","assets/sweetalert.min.b2bbc6aa.js","assets/DataService.5f1e1429.js","assets/ToastDanger.22ae7b5a.js","assets/ToastDanger.41f8004f.css","assets/ToastSuccess.845655f8.js","assets/ToastSuccess.d61a8673.css","assets/SelectSingle.88bae576.js","assets/SelectSingle.1b664762.css","assets/OtherFunctions.92fbf448.js"]),rvRight:()=>nt(()=>import("./MenuRight.58bd95ed.js"),["assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js"])}},{path:"/saw",name:"saw",components:{default:()=>nt(()=>import("./SawView2.8d1a0bc2.js"),["assets/SawView2.8d1a0bc2.js","assets/SawView2.2872199d.css","assets/LoadingComponent.a285501b.js","assets/LoadingComponent.9e531c11.css","assets/DataService.5f1e1429.js","assets/vue-spinner-tail.26a20ac7.js","assets/SelectSingle.88bae576.js","assets/SelectSingle.1b664762.css","assets/OtherFunctions.92fbf448.js","assets/sweetalert.min.b2bbc6aa.js"]),rvRight:()=>nt(()=>import("./MenuRight.58bd95ed.js"),["assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js"])}},{path:"/panduan",name:"panduan",components:{default:()=>nt(()=>import("./PanduanView.b7a2f05d.js"),["assets/PanduanView.b7a2f05d.js","assets/PanduanView.9e82886f.css","assets/MenuIcon.e7853690.js","assets/MenuIcon.5fcb4656.css","assets/FooterComponent.260ee909.js","assets/FooterComponent.4bf5177d.css","assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js","assets/OtherFunctions.92fbf448.js"]),rvRight:()=>nt(()=>import("./MenuRight.58bd95ed.js"),["assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js"])}},{path:"/pesan",name:"pesan",components:{default:()=>nt(()=>import("./PesanView2.467710e3.js"),["assets/PesanView2.467710e3.js","assets/PesanView2.01f3a3ec.css","assets/DataService.5f1e1429.js","assets/sweetalert.min.b2bbc6aa.js"]),rvRight:()=>nt(()=>import("./MenuRight.58bd95ed.js"),["assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js"])}},{path:"/profil",name:"profil",components:{default:()=>nt(()=>import("./ProfilView.838b2744.js"),["assets/ProfilView.838b2744.js","assets/ProfilView.5716ac80.css","assets/OtherFunctions.92fbf448.js","assets/DataService.5f1e1429.js","assets/sweetalert.min.b2bbc6aa.js","assets/ToastDanger.22ae7b5a.js","assets/ToastDanger.41f8004f.css"]),rvRight:()=>nt(()=>import("./MenuRight.58bd95ed.js"),["assets/MenuRight.58bd95ed.js","assets/MenuRight.989df309.css","assets/DataService.5f1e1429.js"])}},{path:"/:catchAll(.*)*",component:()=>nt(()=>import("./NotFound.9d4f1fec.js"),["assets/NotFound.9d4f1fec.js","assets/NotFound.2401b2ac.css"])}]}),zV=t=>{typeof t.remove<"u"?t.remove():t.parentNode.removeChild(t)};class QV{constructor(e,n){this.startedAt=Date.now(),this.callback=e,this.delay=n,this.timer=setTimeout(e,n)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const dr={TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"},dv=Object.freeze(dr);function fv(t,e,n){let s=null;switch(t){case dr.TOP:case dr.TOP_RIGHT:case dr.TOP_LEFT:s=e;break;case dr.BOTTOM:case dr.BOTTOM_RIGHT:case dr.BOTTOM_LEFT:s=n;break}return s}class JV{constructor(){this.queue={}}$on(e,n){this.queue[e]=this.queue[e]||[],this.queue[e].push(n)}$off(e,n){if(this.queue[e]){for(var s=0;s<this.queue[e].length;s++)if(this.queue[e][s]===n){this.queue[e].splice(s,1);break}}}$emit(e,n){this.queue[e]&&this.queue[e].forEach(function(s){s(n)})}}const $d=new JV;const YV={name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"default"},position:{type:String,default:dv.BOTTOM_RIGHT,validator(t){return Object.values(dv).includes(t)}},maxToasts:{type:[Number,Boolean],default:!1},duration:{type:[Number,Boolean],default:4e3},dismissible:{type:Boolean,default:!0},queue:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},useDefaultCss:{type:Boolean,default:!0},onClose:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1,timer:null}},beforeMount(){this.createParents(),this.setDefaultCss(),this.setupContainer()},mounted(){this.showNotice(),$d.$on("toast-clear",this.close)},methods:{createParents(){this.parentTop=document.querySelector(".c-toast-container--top"),this.parentBottom=document.querySelector(".c-toast-container--bottom"),!(this.parentTop&&this.parentBottom)&&(this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="c-toast-container c-toast-container--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="c-toast-container c-toast-container--bottom"))},setDefaultCss(){const t=this.useDefaultCss?"add":"remove";this.parentTop.classList[t]("v--default-css"),this.parentBottom.classList[t]("v--default-css")},setupContainer(){const t=document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom)},shouldQueue(){return!this.queue&&this.maxToasts===!1?!1:this.maxToasts!==!1?this.maxToasts<=this.parentTop.childElementCount+this.parentBottom.childElementCount:this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.timer=this.duration!==!1?new QV(this.close,this.duration):null},click(){this.onClick.apply(null,arguments),this.dismissible&&this.close()},toggleTimer(t){this.timer&&this.pauseOnHover&&(t?this.timer.pause():this.timer.resume())},stopTimer(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer)},close(){this.stopTimer(),this.isActive=!1,setTimeout(()=>{this.onClose.apply(null,arguments),zV(this.$el)},150)}},computed:{correctParent(){return fv(this.position,this.parentTop,this.parentBottom)},transition(){return fv(this.position,{enter:"fadeInDown",leave:"fadeOut"},{enter:"fadeInUp",leave:"fadeOut"})}},beforeUnmount(){$d.$off("toast-clear",this.close)}},XV=["innerHTML"];function ZV(t,e,n,s,r,i){return ue(),An(dl,{"enter-active-class":i.transition.enter,"leave-active-class":i.transition.leave},{default:Fi(()=>[nn(R("div",{class:Je(["c-toast",`c-toast--${n.type}`,`c-toast--${n.position}`]),onMouseover:e[0]||(e[0]=o=>i.toggleTimer(!0)),onMouseleave:e[1]||(e[1]=o=>i.toggleTimer(!1)),onClick:e[2]||(e[2]=(...o)=>i.click&&i.click(...o)),role:"alert",innerHTML:n.message},null,42,XV),[[wf,r.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}const lm=nh(YV,[["render",ZV]]),eB=()=>typeof document<"u"&&document.createElement("div"),tB=(t,{props:e,children:n,element:s,app:r}={})=>{let i=s||eB(),o=ic(t,e,n);return r&&r._context&&(o.appContext=r._context),Ia(o,i),{vNode:o,destroy:()=>{i&&Ia(null,i),i=null,o=null},el:i}},nB=(t={})=>({show(e,n={}){let s={message:e,...n};return tB(lm,{props:{...t,...s}})},clear(){$d.$emit("toast-clear")},success(e,n={}){return n.type="success",this.show(e,n)},error(e,n={}){return n.type="error",this.show(e,n)},info(e,n={}){return n.type="info",this.show(e,n)},warning(e,n={}){return n.type="warning",this.show(e,n)}}),sB=(t,e={})=>{let n=nB(e);t.$toast=n,t.config.globalProperties.$toast=n};lm.install=sB;const NT=zw(qU);NT.use(WV).use(lm);NT.mount("#app");export{As as A,oo as B,nn as C,Ut as D,Jy as E,He as F,yf as G,lt as H,iB as I,nc as J,ic as K,Ck as L,BV as M,rB as N,tl as O,hS as P,KV as R,dl as T,nh as _,nt as a,ue as b,xt as c,$o as d,ye as e,w as f,An as g,Wt as h,R as i,_e as j,Fi as k,cS as l,$t as m,Je as n,io as o,FM as p,oB as q,Oe as r,OS as s,qd as t,MM as u,of as v,Ai as w,af as x,Ja as y,aS as z};
