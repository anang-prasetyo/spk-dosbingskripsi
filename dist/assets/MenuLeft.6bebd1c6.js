import{_ as $,d as s,a as i,c as z,u as G,r,w as N,o as K,b as m,e as g,i as a,f as _,j as h,n as v,h as j,F,A as H,k as Q,g as U,l as W,t as Y,y as q,M as J,v as X,x as Z}from"./index.772c5328.js";import{s as ee}from"./sweetalert.min.b2bbc6aa.js";const te=l=>(X("data-v-da5b0856"),l=l(),Z(),l),oe={class:"side-top"},ne={key:0,class:"side-top-logo"},ae=te(()=>a("div",{class:"text-15 text-semi-bold"},"SPKPDPS.",-1)),se={style:{margin:".5rem 1rem 1rem",display:"flex","flex-direction":"column",gap:"1rem"}},ie={style:{display:"flex","justify-content":"space-between",gap:"1rem",height:"37.06px"}},re={__name:"MenuLeft",props:{isMenu:Boolean,activeMenu:String,lightMode:Boolean},setup(l){const f=l,b=s(()=>i(()=>import("./HomeIcon.d653bd58.js"),["assets/HomeIcon.d653bd58.js","assets/HomeIcon.5d19e726.css","assets/index.772c5328.js","assets/index.0fa03077.css"])),E=s(()=>i(()=>import("./AirDropIcon.ec58b02e.js"),["assets/AirDropIcon.ec58b02e.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),M=s(()=>i(()=>import("./ChartSuccessIcon.62c984dc.js"),["assets/ChartSuccessIcon.62c984dc.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),I=s(()=>i(()=>import("./StatusUpIcon.5ee14c13.js"),["assets/StatusUpIcon.5ee14c13.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),S=s(()=>i(()=>import("./RankingIcon.904c6d13.js"),["assets/RankingIcon.904c6d13.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),P=s(()=>i(()=>import("./MessagesIcon.1c820e1a.js"),["assets/MessagesIcon.1c820e1a.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),A=s(()=>i(()=>import("./ProfileIcon.73c83c7c.js"),["assets/ProfileIcon.73c83c7c.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),L=s(()=>i(()=>import("./MessageQuestionIcon.164d342b.js"),["assets/MessageQuestionIcon.164d342b.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),R=s(()=>i(()=>import("./LogoIcon.d37aaa96.js"),["assets/LogoIcon.d37aaa96.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),y=z(()=>f.isMenu),{signOut:C}=G(),D=()=>{ee({title:"Konfirmasi Signout",text:"Yakin ingin keluar?",buttons:["Batal","Keluar"],dangerMode:!0}).then(t=>{t&&C()})},u=r(null),x=[{name:"Home",to:"",icon:b},{name:"Pantau",to:"pantau",icon:E},{name:"Kriteria",to:"kriteria",icon:M},{name:"Alternatif",to:"alternatif",icon:I},{name:"SAW",to:"saw",icon:S},{name:"Pesan",to:"pesan",icon:P},{name:"Profil",to:"profil",icon:A},{name:"Panduan",to:"panduan",icon:L}],o=r(!0),p=r(!1),w=()=>{p.value=!0,setTimeout(()=>{p.value=!1},250)};N(()=>{p.value&&k()});const O=r({background:"inherit",color:"inherit"}),d=r({background:"var(--light-primary)",color:"white",borderRadius:"0 1rem 1rem 0",pointerEvents:"none"}),c=r({background:"var(--dark-primary)",color:"white",borderRadius:"0 1rem 1rem 0",pointerEvents:"none"}),V=()=>{for(var t=document.getElementsByClassName("router-link-active"),e=0;e<t.length;e++)o.value?(t[e].style.color=d.value.color,t[e].style.backgroundColor=d.value.background,t[e].style.borderRadius=d.value.borderRadius,t[e].style.pointerEvents=d.value.pointerEvents):(t[e].style.color=c.value.color,t[e].style.backgroundColor=c.value.background,t[e].style.borderRadius=c.value.borderRadius,t[e].style.pointerEvents=c.value.pointerEvents)},T=()=>{for(var t=document.getElementsByClassName("side-menu"),e=0;e<t.length;e++)t[e].style.color="inherit",t[e].style.backgroundColor="inherit",t[e].style.pointerEvents="all"},k=()=>{T(),V()};return K(()=>{k()}),(t,e)=>(m(),g("div",{class:v(["side-bar",o.value?"light-mode-bg":"dark-mode-bg"])},[a("div",null,[a("div",oe,[_(y)?j("",!0):(m(),g("div",ne,[h(_(R),{class:v(["mx-1",o.value?"primary-text":"dark-primary-text"]),style:{"max-width":"3rem"}},null,8,["class"]),ae]))]),(m(),g(F,null,H(x,(n,B)=>a("div",{key:B},[h(_(J),{id:"sideMenu",to:"/"+n.to,class:v(["side-menu",o.value&&u.value===n.to?"active-page-light":!o.value&&u.value===n.to?"active-page-dark":""]),style:q(o.value&&u.value===n.to?d.value:!o.value&&u.value===n.to?c.value:O.value),onClick:le=>(t.$emit("toggleMenu",!_(y)),u.value=n.to,w())},{default:Q(()=>[(m(),U(W(n.icon),{class:"side-icon"})),a("div",null,Y(n.name),1)]),_:2},1032,["to","class","style","onClick"])])),64))]),a("div",se,[a("div",{class:"button-my danger-transparent curzr-hover",onClick:e[0]||(e[0]=n=>D())},"Sign Out"),a("div",ie,[a("div",{class:v(["button-my curzr-hover",o.value?"dark-mode-bg":"dark-transparent"]),style:{width:"100%"},onClick:e[1]||(e[1]=n=>(o.value=!1,t.$emit("mode",o.value)))},"Dark",2),a("div",{class:v(["button-my curzr-hover",o.value?"light-transparent":"light-mode-bg"]),style:{width:"100%"},onClick:e[2]||(e[2]=n=>(o.value=!0,t.$emit("mode",o.value)))},"Light",2)])])],2))}},ce=$(re,[["__scopeId","data-v-da5b0856"]]);export{ce as default};