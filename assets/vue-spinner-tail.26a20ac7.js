import{c as h,J as d,K as i,b as g,e as p,F as w,A as k,y as f,i as E,L as ee,f as U}from"./index.772c5328.js";function Z(){}function ae(){return typeof WeakMap<"u"?new WeakMap:_e()}function _e(){return{add:Z,delete:Z,get:Z,set:Z,has:function(t){return!1}}}var De=Object.prototype.hasOwnProperty,Q=function(t,e){return De.call(t,e)};function K(t,e){for(var a in e)Q(e,a)&&(t[a]=e[a]);return t}var $e=/^[ \t]*(?:\r\n|\r|\n)/,Se=/(?:\r\n|\r|\n)[ \t]*$/,Ne=/^(?:[\r\n]|$)/,Te=/(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,ze=/^[ \t]*[\r\n][ \t\r\n]*$/;function ne(t,e,a){var n=0,l=t[0].match(Te);l&&(n=l[1].length);var s="(\\r\\n|\\r|\\n).{0,"+n+"}",r=new RegExp(s,"g");e&&(t=t.slice(1));var c=a.newline,u=a.trimLeadingNewline,m=a.trimTrailingNewline,o=typeof c=="string",v=t.length,A=t.map(function(x,te){return x=x.replace(r,"$1"),te===0&&u&&(x=x.replace($e,"")),te===v-1&&m&&(x=x.replace(Se,"")),o&&(x=x.replace(/\r\n|\n|\r/g,function(Ca){return c})),x});return A}function Me(t,e){for(var a="",n=0,l=t.length;n<l;n++)a+=t[n],n<l-1&&(a+=e[n]);return a}function je(t){return Q(t,"raw")&&Q(t,"length")}function Be(t){var e=ae(),a=ae();function n(s){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];if(je(s)){var u=s,m=(r[0]===n||r[0]===B)&&ze.test(u[0])&&Ne.test(u[1]),o=m?a:e,v=o.get(u);if(v||(v=ne(u,m,t),o.set(u,v)),r.length===0)return v[0];var A=Me(v,m?r.slice(1):r);return A}else return Be(K(K({},t),s||{}))}var l=K(n,{string:function(s){return ne([s],!1,t)[0]}});return l}var B=Be({trimLeadingNewline:!0,trimTrailingNewline:!0});if(typeof module<"u")try{module.exports=B,Object.defineProperty(B,"__esModule",{value:!0}),B.default=B,B.outdent=B}catch{}function qe(t,e){e===void 0&&(e={});var a=e.insertAt;if(!(!t||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}const b={size:{type:[Number,String],default:"1em"},color:String};let re=!1;function C(t){if(!re){const e=B`
			.vue-spinner {
				vertical-align: middle;
			}
		`;qe(e),re=!0}return{cSize:h(()=>t.size),classes:h(()=>"vue-spinner"),style:h(()=>({color:t.color}))}}var ie=[],_=[];function Oe(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=ie.indexOf(s);r===-1&&(r=ie.push(s)-1,_[r]={}),a=_[r]&&_[r][n]?_[r][n]:_[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var Re=`
.vue-spinner-mat {
	animation: vue-spinner-spin 2s linear infinite;
	transform-origin: center center;
}
.vue-spinner-mat .path {
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	animation: vue-spinner-mat-dash 1.5s ease-in-out infinite;
}
@keyframes vue-spinner-spin {
0% {
		transform: rotate3d(0, 0, 1, 0deg);
}
25% {
		transform: rotate3d(0, 0, 1, 90deg);
}
50% {
		transform: rotate3d(0, 0, 1, 180deg);
}
75% {
		transform: rotate3d(0, 0, 1, 270deg);
}
100% {
		transform: rotate3d(0, 0, 1, 359deg);
}
}
@keyframes vue-spinner-mat-dash {
0% {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
}
50% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -35px;
}
100% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -124px;
}
}
`;Oe(Re,{});var Ve=(t,e)=>{const a=t.__vccOpts||t;for(const[n,l]of e)a[n]=l;return a};const Le=d({name:"VueSpinner",props:{...b,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value+" vue-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[i("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});var Ea=Ve(Le,[["__file","/Users/leonzalion/projects/vue3-spinners/packages/vue3-spinners/src/spinners/vue-spinner.vue"]]);const Ye=[i("g",{transform:"matrix(1 0 0 -1 0 80)"},[i("rect",{width:"10",height:"20",rx:"3"},[i("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})]),i("rect",{x:"15",width:"10",height:"80",rx:"3"},[i("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})]),i("rect",{x:"30",width:"10",height:"50",rx:"3"},[i("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})]),i("rect",{x:"45",width:"10",height:"30",rx:"3"},[i("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})])])];d({name:"VueSpinnerAudio",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,fill:"currentColor",width:e.value,height:e.value,viewBox:"0 0 55 80",xmlns:"http://www.w3.org/2000/svg"},Ye)}});const Xe=[i("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"},[i("circle",{cx:"5",cy:"50",r:"5"},[i("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"27",cy:"5",r:"5"},[i("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"49",cy:"50",r:"5"},[i("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})])])];d({name:"VueSpinnerBall",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,stroke:"currentColor",width:e.value,height:e.value,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg"},Xe)}});function F(t){const e={color:{type:String,default:"#000000"}},a={size:{type:[String,Number],default:t.size},margin:{type:String,default:t.margin},height:{type:[String,Number],default:t.height},width:{type:[String,Number],default:t.width},radius:{type:[String,Number],default:t.radius}},n={...e};for(const l of Object.keys(t))n[l]=a[l];return n}var Ae={exports:{}},Pe=[{value:"#B0171F",name:"indian red"},{value:"#DC143C",css:!0,name:"crimson"},{value:"#FFB6C1",css:!0,name:"lightpink"},{value:"#FFAEB9",name:"lightpink 1"},{value:"#EEA2AD",name:"lightpink 2"},{value:"#CD8C95",name:"lightpink 3"},{value:"#8B5F65",name:"lightpink 4"},{value:"#FFC0CB",css:!0,name:"pink"},{value:"#FFB5C5",name:"pink 1"},{value:"#EEA9B8",name:"pink 2"},{value:"#CD919E",name:"pink 3"},{value:"#8B636C",name:"pink 4"},{value:"#DB7093",css:!0,name:"palevioletred"},{value:"#FF82AB",name:"palevioletred 1"},{value:"#EE799F",name:"palevioletred 2"},{value:"#CD6889",name:"palevioletred 3"},{value:"#8B475D",name:"palevioletred 4"},{value:"#FFF0F5",name:"lavenderblush 1"},{value:"#FFF0F5",css:!0,name:"lavenderblush"},{value:"#EEE0E5",name:"lavenderblush 2"},{value:"#CDC1C5",name:"lavenderblush 3"},{value:"#8B8386",name:"lavenderblush 4"},{value:"#FF3E96",name:"violetred 1"},{value:"#EE3A8C",name:"violetred 2"},{value:"#CD3278",name:"violetred 3"},{value:"#8B2252",name:"violetred 4"},{value:"#FF69B4",css:!0,name:"hotpink"},{value:"#FF6EB4",name:"hotpink 1"},{value:"#EE6AA7",name:"hotpink 2"},{value:"#CD6090",name:"hotpink 3"},{value:"#8B3A62",name:"hotpink 4"},{value:"#872657",name:"raspberry"},{value:"#FF1493",name:"deeppink 1"},{value:"#FF1493",css:!0,name:"deeppink"},{value:"#EE1289",name:"deeppink 2"},{value:"#CD1076",name:"deeppink 3"},{value:"#8B0A50",name:"deeppink 4"},{value:"#FF34B3",name:"maroon 1"},{value:"#EE30A7",name:"maroon 2"},{value:"#CD2990",name:"maroon 3"},{value:"#8B1C62",name:"maroon 4"},{value:"#C71585",css:!0,name:"mediumvioletred"},{value:"#D02090",name:"violetred"},{value:"#DA70D6",css:!0,name:"orchid"},{value:"#FF83FA",name:"orchid 1"},{value:"#EE7AE9",name:"orchid 2"},{value:"#CD69C9",name:"orchid 3"},{value:"#8B4789",name:"orchid 4"},{value:"#D8BFD8",css:!0,name:"thistle"},{value:"#FFE1FF",name:"thistle 1"},{value:"#EED2EE",name:"thistle 2"},{value:"#CDB5CD",name:"thistle 3"},{value:"#8B7B8B",name:"thistle 4"},{value:"#FFBBFF",name:"plum 1"},{value:"#EEAEEE",name:"plum 2"},{value:"#CD96CD",name:"plum 3"},{value:"#8B668B",name:"plum 4"},{value:"#DDA0DD",css:!0,name:"plum"},{value:"#EE82EE",css:!0,name:"violet"},{value:"#FF00FF",vga:!0,name:"magenta"},{value:"#FF00FF",vga:!0,css:!0,name:"fuchsia"},{value:"#EE00EE",name:"magenta 2"},{value:"#CD00CD",name:"magenta 3"},{value:"#8B008B",name:"magenta 4"},{value:"#8B008B",css:!0,name:"darkmagenta"},{value:"#800080",vga:!0,css:!0,name:"purple"},{value:"#BA55D3",css:!0,name:"mediumorchid"},{value:"#E066FF",name:"mediumorchid 1"},{value:"#D15FEE",name:"mediumorchid 2"},{value:"#B452CD",name:"mediumorchid 3"},{value:"#7A378B",name:"mediumorchid 4"},{value:"#9400D3",css:!0,name:"darkviolet"},{value:"#9932CC",css:!0,name:"darkorchid"},{value:"#BF3EFF",name:"darkorchid 1"},{value:"#B23AEE",name:"darkorchid 2"},{value:"#9A32CD",name:"darkorchid 3"},{value:"#68228B",name:"darkorchid 4"},{value:"#4B0082",css:!0,name:"indigo"},{value:"#8A2BE2",css:!0,name:"blueviolet"},{value:"#9B30FF",name:"purple 1"},{value:"#912CEE",name:"purple 2"},{value:"#7D26CD",name:"purple 3"},{value:"#551A8B",name:"purple 4"},{value:"#9370DB",css:!0,name:"mediumpurple"},{value:"#AB82FF",name:"mediumpurple 1"},{value:"#9F79EE",name:"mediumpurple 2"},{value:"#8968CD",name:"mediumpurple 3"},{value:"#5D478B",name:"mediumpurple 4"},{value:"#483D8B",css:!0,name:"darkslateblue"},{value:"#8470FF",name:"lightslateblue"},{value:"#7B68EE",css:!0,name:"mediumslateblue"},{value:"#6A5ACD",css:!0,name:"slateblue"},{value:"#836FFF",name:"slateblue 1"},{value:"#7A67EE",name:"slateblue 2"},{value:"#6959CD",name:"slateblue 3"},{value:"#473C8B",name:"slateblue 4"},{value:"#F8F8FF",css:!0,name:"ghostwhite"},{value:"#E6E6FA",css:!0,name:"lavender"},{value:"#0000FF",vga:!0,css:!0,name:"blue"},{value:"#0000EE",name:"blue 2"},{value:"#0000CD",name:"blue 3"},{value:"#0000CD",css:!0,name:"mediumblue"},{value:"#00008B",name:"blue 4"},{value:"#00008B",css:!0,name:"darkblue"},{value:"#000080",vga:!0,css:!0,name:"navy"},{value:"#191970",css:!0,name:"midnightblue"},{value:"#3D59AB",name:"cobalt"},{value:"#4169E1",css:!0,name:"royalblue"},{value:"#4876FF",name:"royalblue 1"},{value:"#436EEE",name:"royalblue 2"},{value:"#3A5FCD",name:"royalblue 3"},{value:"#27408B",name:"royalblue 4"},{value:"#6495ED",css:!0,name:"cornflowerblue"},{value:"#B0C4DE",css:!0,name:"lightsteelblue"},{value:"#CAE1FF",name:"lightsteelblue 1"},{value:"#BCD2EE",name:"lightsteelblue 2"},{value:"#A2B5CD",name:"lightsteelblue 3"},{value:"#6E7B8B",name:"lightsteelblue 4"},{value:"#778899",css:!0,name:"lightslategray"},{value:"#708090",css:!0,name:"slategray"},{value:"#C6E2FF",name:"slategray 1"},{value:"#B9D3EE",name:"slategray 2"},{value:"#9FB6CD",name:"slategray 3"},{value:"#6C7B8B",name:"slategray 4"},{value:"#1E90FF",name:"dodgerblue 1"},{value:"#1E90FF",css:!0,name:"dodgerblue"},{value:"#1C86EE",name:"dodgerblue 2"},{value:"#1874CD",name:"dodgerblue 3"},{value:"#104E8B",name:"dodgerblue 4"},{value:"#F0F8FF",css:!0,name:"aliceblue"},{value:"#4682B4",css:!0,name:"steelblue"},{value:"#63B8FF",name:"steelblue 1"},{value:"#5CACEE",name:"steelblue 2"},{value:"#4F94CD",name:"steelblue 3"},{value:"#36648B",name:"steelblue 4"},{value:"#87CEFA",css:!0,name:"lightskyblue"},{value:"#B0E2FF",name:"lightskyblue 1"},{value:"#A4D3EE",name:"lightskyblue 2"},{value:"#8DB6CD",name:"lightskyblue 3"},{value:"#607B8B",name:"lightskyblue 4"},{value:"#87CEFF",name:"skyblue 1"},{value:"#7EC0EE",name:"skyblue 2"},{value:"#6CA6CD",name:"skyblue 3"},{value:"#4A708B",name:"skyblue 4"},{value:"#87CEEB",css:!0,name:"skyblue"},{value:"#00BFFF",name:"deepskyblue 1"},{value:"#00BFFF",css:!0,name:"deepskyblue"},{value:"#00B2EE",name:"deepskyblue 2"},{value:"#009ACD",name:"deepskyblue 3"},{value:"#00688B",name:"deepskyblue 4"},{value:"#33A1C9",name:"peacock"},{value:"#ADD8E6",css:!0,name:"lightblue"},{value:"#BFEFFF",name:"lightblue 1"},{value:"#B2DFEE",name:"lightblue 2"},{value:"#9AC0CD",name:"lightblue 3"},{value:"#68838B",name:"lightblue 4"},{value:"#B0E0E6",css:!0,name:"powderblue"},{value:"#98F5FF",name:"cadetblue 1"},{value:"#8EE5EE",name:"cadetblue 2"},{value:"#7AC5CD",name:"cadetblue 3"},{value:"#53868B",name:"cadetblue 4"},{value:"#00F5FF",name:"turquoise 1"},{value:"#00E5EE",name:"turquoise 2"},{value:"#00C5CD",name:"turquoise 3"},{value:"#00868B",name:"turquoise 4"},{value:"#5F9EA0",css:!0,name:"cadetblue"},{value:"#00CED1",css:!0,name:"darkturquoise"},{value:"#F0FFFF",name:"azure 1"},{value:"#F0FFFF",css:!0,name:"azure"},{value:"#E0EEEE",name:"azure 2"},{value:"#C1CDCD",name:"azure 3"},{value:"#838B8B",name:"azure 4"},{value:"#E0FFFF",name:"lightcyan 1"},{value:"#E0FFFF",css:!0,name:"lightcyan"},{value:"#D1EEEE",name:"lightcyan 2"},{value:"#B4CDCD",name:"lightcyan 3"},{value:"#7A8B8B",name:"lightcyan 4"},{value:"#BBFFFF",name:"paleturquoise 1"},{value:"#AEEEEE",name:"paleturquoise 2"},{value:"#AEEEEE",css:!0,name:"paleturquoise"},{value:"#96CDCD",name:"paleturquoise 3"},{value:"#668B8B",name:"paleturquoise 4"},{value:"#2F4F4F",css:!0,name:"darkslategray"},{value:"#97FFFF",name:"darkslategray 1"},{value:"#8DEEEE",name:"darkslategray 2"},{value:"#79CDCD",name:"darkslategray 3"},{value:"#528B8B",name:"darkslategray 4"},{value:"#00FFFF",name:"cyan"},{value:"#00FFFF",css:!0,name:"aqua"},{value:"#00EEEE",name:"cyan 2"},{value:"#00CDCD",name:"cyan 3"},{value:"#008B8B",name:"cyan 4"},{value:"#008B8B",css:!0,name:"darkcyan"},{value:"#008080",vga:!0,css:!0,name:"teal"},{value:"#48D1CC",css:!0,name:"mediumturquoise"},{value:"#20B2AA",css:!0,name:"lightseagreen"},{value:"#03A89E",name:"manganeseblue"},{value:"#40E0D0",css:!0,name:"turquoise"},{value:"#808A87",name:"coldgrey"},{value:"#00C78C",name:"turquoiseblue"},{value:"#7FFFD4",name:"aquamarine 1"},{value:"#7FFFD4",css:!0,name:"aquamarine"},{value:"#76EEC6",name:"aquamarine 2"},{value:"#66CDAA",name:"aquamarine 3"},{value:"#66CDAA",css:!0,name:"mediumaquamarine"},{value:"#458B74",name:"aquamarine 4"},{value:"#00FA9A",css:!0,name:"mediumspringgreen"},{value:"#F5FFFA",css:!0,name:"mintcream"},{value:"#00FF7F",css:!0,name:"springgreen"},{value:"#00EE76",name:"springgreen 1"},{value:"#00CD66",name:"springgreen 2"},{value:"#008B45",name:"springgreen 3"},{value:"#3CB371",css:!0,name:"mediumseagreen"},{value:"#54FF9F",name:"seagreen 1"},{value:"#4EEE94",name:"seagreen 2"},{value:"#43CD80",name:"seagreen 3"},{value:"#2E8B57",name:"seagreen 4"},{value:"#2E8B57",css:!0,name:"seagreen"},{value:"#00C957",name:"emeraldgreen"},{value:"#BDFCC9",name:"mint"},{value:"#3D9140",name:"cobaltgreen"},{value:"#F0FFF0",name:"honeydew 1"},{value:"#F0FFF0",css:!0,name:"honeydew"},{value:"#E0EEE0",name:"honeydew 2"},{value:"#C1CDC1",name:"honeydew 3"},{value:"#838B83",name:"honeydew 4"},{value:"#8FBC8F",css:!0,name:"darkseagreen"},{value:"#C1FFC1",name:"darkseagreen 1"},{value:"#B4EEB4",name:"darkseagreen 2"},{value:"#9BCD9B",name:"darkseagreen 3"},{value:"#698B69",name:"darkseagreen 4"},{value:"#98FB98",css:!0,name:"palegreen"},{value:"#9AFF9A",name:"palegreen 1"},{value:"#90EE90",name:"palegreen 2"},{value:"#90EE90",css:!0,name:"lightgreen"},{value:"#7CCD7C",name:"palegreen 3"},{value:"#548B54",name:"palegreen 4"},{value:"#32CD32",css:!0,name:"limegreen"},{value:"#228B22",css:!0,name:"forestgreen"},{value:"#00FF00",vga:!0,name:"green 1"},{value:"#00FF00",vga:!0,css:!0,name:"lime"},{value:"#00EE00",name:"green 2"},{value:"#00CD00",name:"green 3"},{value:"#008B00",name:"green 4"},{value:"#008000",vga:!0,css:!0,name:"green"},{value:"#006400",css:!0,name:"darkgreen"},{value:"#308014",name:"sapgreen"},{value:"#7CFC00",css:!0,name:"lawngreen"},{value:"#7FFF00",name:"chartreuse 1"},{value:"#7FFF00",css:!0,name:"chartreuse"},{value:"#76EE00",name:"chartreuse 2"},{value:"#66CD00",name:"chartreuse 3"},{value:"#458B00",name:"chartreuse 4"},{value:"#ADFF2F",css:!0,name:"greenyellow"},{value:"#CAFF70",name:"darkolivegreen 1"},{value:"#BCEE68",name:"darkolivegreen 2"},{value:"#A2CD5A",name:"darkolivegreen 3"},{value:"#6E8B3D",name:"darkolivegreen 4"},{value:"#556B2F",css:!0,name:"darkolivegreen"},{value:"#6B8E23",css:!0,name:"olivedrab"},{value:"#C0FF3E",name:"olivedrab 1"},{value:"#B3EE3A",name:"olivedrab 2"},{value:"#9ACD32",name:"olivedrab 3"},{value:"#9ACD32",css:!0,name:"yellowgreen"},{value:"#698B22",name:"olivedrab 4"},{value:"#FFFFF0",name:"ivory 1"},{value:"#FFFFF0",css:!0,name:"ivory"},{value:"#EEEEE0",name:"ivory 2"},{value:"#CDCDC1",name:"ivory 3"},{value:"#8B8B83",name:"ivory 4"},{value:"#F5F5DC",css:!0,name:"beige"},{value:"#FFFFE0",name:"lightyellow 1"},{value:"#FFFFE0",css:!0,name:"lightyellow"},{value:"#EEEED1",name:"lightyellow 2"},{value:"#CDCDB4",name:"lightyellow 3"},{value:"#8B8B7A",name:"lightyellow 4"},{value:"#FAFAD2",css:!0,name:"lightgoldenrodyellow"},{value:"#FFFF00",vga:!0,name:"yellow 1"},{value:"#FFFF00",vga:!0,css:!0,name:"yellow"},{value:"#EEEE00",name:"yellow 2"},{value:"#CDCD00",name:"yellow 3"},{value:"#8B8B00",name:"yellow 4"},{value:"#808069",name:"warmgrey"},{value:"#808000",vga:!0,css:!0,name:"olive"},{value:"#BDB76B",css:!0,name:"darkkhaki"},{value:"#FFF68F",name:"khaki 1"},{value:"#EEE685",name:"khaki 2"},{value:"#CDC673",name:"khaki 3"},{value:"#8B864E",name:"khaki 4"},{value:"#F0E68C",css:!0,name:"khaki"},{value:"#EEE8AA",css:!0,name:"palegoldenrod"},{value:"#FFFACD",name:"lemonchiffon 1"},{value:"#FFFACD",css:!0,name:"lemonchiffon"},{value:"#EEE9BF",name:"lemonchiffon 2"},{value:"#CDC9A5",name:"lemonchiffon 3"},{value:"#8B8970",name:"lemonchiffon 4"},{value:"#FFEC8B",name:"lightgoldenrod 1"},{value:"#EEDC82",name:"lightgoldenrod 2"},{value:"#CDBE70",name:"lightgoldenrod 3"},{value:"#8B814C",name:"lightgoldenrod 4"},{value:"#E3CF57",name:"banana"},{value:"#FFD700",name:"gold 1"},{value:"#FFD700",css:!0,name:"gold"},{value:"#EEC900",name:"gold 2"},{value:"#CDAD00",name:"gold 3"},{value:"#8B7500",name:"gold 4"},{value:"#FFF8DC",name:"cornsilk 1"},{value:"#FFF8DC",css:!0,name:"cornsilk"},{value:"#EEE8CD",name:"cornsilk 2"},{value:"#CDC8B1",name:"cornsilk 3"},{value:"#8B8878",name:"cornsilk 4"},{value:"#DAA520",css:!0,name:"goldenrod"},{value:"#FFC125",name:"goldenrod 1"},{value:"#EEB422",name:"goldenrod 2"},{value:"#CD9B1D",name:"goldenrod 3"},{value:"#8B6914",name:"goldenrod 4"},{value:"#B8860B",css:!0,name:"darkgoldenrod"},{value:"#FFB90F",name:"darkgoldenrod 1"},{value:"#EEAD0E",name:"darkgoldenrod 2"},{value:"#CD950C",name:"darkgoldenrod 3"},{value:"#8B6508",name:"darkgoldenrod 4"},{value:"#FFA500",name:"orange 1"},{value:"#FF8000",css:!0,name:"orange"},{value:"#EE9A00",name:"orange 2"},{value:"#CD8500",name:"orange 3"},{value:"#8B5A00",name:"orange 4"},{value:"#FFFAF0",css:!0,name:"floralwhite"},{value:"#FDF5E6",css:!0,name:"oldlace"},{value:"#F5DEB3",css:!0,name:"wheat"},{value:"#FFE7BA",name:"wheat 1"},{value:"#EED8AE",name:"wheat 2"},{value:"#CDBA96",name:"wheat 3"},{value:"#8B7E66",name:"wheat 4"},{value:"#FFE4B5",css:!0,name:"moccasin"},{value:"#FFEFD5",css:!0,name:"papayawhip"},{value:"#FFEBCD",css:!0,name:"blanchedalmond"},{value:"#FFDEAD",name:"navajowhite 1"},{value:"#FFDEAD",css:!0,name:"navajowhite"},{value:"#EECFA1",name:"navajowhite 2"},{value:"#CDB38B",name:"navajowhite 3"},{value:"#8B795E",name:"navajowhite 4"},{value:"#FCE6C9",name:"eggshell"},{value:"#D2B48C",css:!0,name:"tan"},{value:"#9C661F",name:"brick"},{value:"#FF9912",name:"cadmiumyellow"},{value:"#FAEBD7",css:!0,name:"antiquewhite"},{value:"#FFEFDB",name:"antiquewhite 1"},{value:"#EEDFCC",name:"antiquewhite 2"},{value:"#CDC0B0",name:"antiquewhite 3"},{value:"#8B8378",name:"antiquewhite 4"},{value:"#DEB887",css:!0,name:"burlywood"},{value:"#FFD39B",name:"burlywood 1"},{value:"#EEC591",name:"burlywood 2"},{value:"#CDAA7D",name:"burlywood 3"},{value:"#8B7355",name:"burlywood 4"},{value:"#FFE4C4",name:"bisque 1"},{value:"#FFE4C4",css:!0,name:"bisque"},{value:"#EED5B7",name:"bisque 2"},{value:"#CDB79E",name:"bisque 3"},{value:"#8B7D6B",name:"bisque 4"},{value:"#E3A869",name:"melon"},{value:"#ED9121",name:"carrot"},{value:"#FF8C00",css:!0,name:"darkorange"},{value:"#FF7F00",name:"darkorange 1"},{value:"#EE7600",name:"darkorange 2"},{value:"#CD6600",name:"darkorange 3"},{value:"#8B4500",name:"darkorange 4"},{value:"#FFA54F",name:"tan 1"},{value:"#EE9A49",name:"tan 2"},{value:"#CD853F",name:"tan 3"},{value:"#CD853F",css:!0,name:"peru"},{value:"#8B5A2B",name:"tan 4"},{value:"#FAF0E6",css:!0,name:"linen"},{value:"#FFDAB9",name:"peachpuff 1"},{value:"#FFDAB9",css:!0,name:"peachpuff"},{value:"#EECBAD",name:"peachpuff 2"},{value:"#CDAF95",name:"peachpuff 3"},{value:"#8B7765",name:"peachpuff 4"},{value:"#FFF5EE",name:"seashell 1"},{value:"#FFF5EE",css:!0,name:"seashell"},{value:"#EEE5DE",name:"seashell 2"},{value:"#CDC5BF",name:"seashell 3"},{value:"#8B8682",name:"seashell 4"},{value:"#F4A460",css:!0,name:"sandybrown"},{value:"#C76114",name:"rawsienna"},{value:"#D2691E",css:!0,name:"chocolate"},{value:"#FF7F24",name:"chocolate 1"},{value:"#EE7621",name:"chocolate 2"},{value:"#CD661D",name:"chocolate 3"},{value:"#8B4513",name:"chocolate 4"},{value:"#8B4513",css:!0,name:"saddlebrown"},{value:"#292421",name:"ivoryblack"},{value:"#FF7D40",name:"flesh"},{value:"#FF6103",name:"cadmiumorange"},{value:"#8A360F",name:"burntsienna"},{value:"#A0522D",css:!0,name:"sienna"},{value:"#FF8247",name:"sienna 1"},{value:"#EE7942",name:"sienna 2"},{value:"#CD6839",name:"sienna 3"},{value:"#8B4726",name:"sienna 4"},{value:"#FFA07A",name:"lightsalmon 1"},{value:"#FFA07A",css:!0,name:"lightsalmon"},{value:"#EE9572",name:"lightsalmon 2"},{value:"#CD8162",name:"lightsalmon 3"},{value:"#8B5742",name:"lightsalmon 4"},{value:"#FF7F50",css:!0,name:"coral"},{value:"#FF4500",name:"orangered 1"},{value:"#FF4500",css:!0,name:"orangered"},{value:"#EE4000",name:"orangered 2"},{value:"#CD3700",name:"orangered 3"},{value:"#8B2500",name:"orangered 4"},{value:"#5E2612",name:"sepia"},{value:"#E9967A",css:!0,name:"darksalmon"},{value:"#FF8C69",name:"salmon 1"},{value:"#EE8262",name:"salmon 2"},{value:"#CD7054",name:"salmon 3"},{value:"#8B4C39",name:"salmon 4"},{value:"#FF7256",name:"coral 1"},{value:"#EE6A50",name:"coral 2"},{value:"#CD5B45",name:"coral 3"},{value:"#8B3E2F",name:"coral 4"},{value:"#8A3324",name:"burntumber"},{value:"#FF6347",name:"tomato 1"},{value:"#FF6347",css:!0,name:"tomato"},{value:"#EE5C42",name:"tomato 2"},{value:"#CD4F39",name:"tomato 3"},{value:"#8B3626",name:"tomato 4"},{value:"#FA8072",css:!0,name:"salmon"},{value:"#FFE4E1",name:"mistyrose 1"},{value:"#FFE4E1",css:!0,name:"mistyrose"},{value:"#EED5D2",name:"mistyrose 2"},{value:"#CDB7B5",name:"mistyrose 3"},{value:"#8B7D7B",name:"mistyrose 4"},{value:"#FFFAFA",name:"snow 1"},{value:"#FFFAFA",css:!0,name:"snow"},{value:"#EEE9E9",name:"snow 2"},{value:"#CDC9C9",name:"snow 3"},{value:"#8B8989",name:"snow 4"},{value:"#BC8F8F",css:!0,name:"rosybrown"},{value:"#FFC1C1",name:"rosybrown 1"},{value:"#EEB4B4",name:"rosybrown 2"},{value:"#CD9B9B",name:"rosybrown 3"},{value:"#8B6969",name:"rosybrown 4"},{value:"#F08080",css:!0,name:"lightcoral"},{value:"#CD5C5C",css:!0,name:"indianred"},{value:"#FF6A6A",name:"indianred 1"},{value:"#EE6363",name:"indianred 2"},{value:"#8B3A3A",name:"indianred 4"},{value:"#CD5555",name:"indianred 3"},{value:"#A52A2A",css:!0,name:"brown"},{value:"#FF4040",name:"brown 1"},{value:"#EE3B3B",name:"brown 2"},{value:"#CD3333",name:"brown 3"},{value:"#8B2323",name:"brown 4"},{value:"#B22222",css:!0,name:"firebrick"},{value:"#FF3030",name:"firebrick 1"},{value:"#EE2C2C",name:"firebrick 2"},{value:"#CD2626",name:"firebrick 3"},{value:"#8B1A1A",name:"firebrick 4"},{value:"#FF0000",vga:!0,name:"red 1"},{value:"#FF0000",vga:!0,css:!0,name:"red"},{value:"#EE0000",name:"red 2"},{value:"#CD0000",name:"red 3"},{value:"#8B0000",name:"red 4"},{value:"#8B0000",css:!0,name:"darkred"},{value:"#800000",vga:!0,css:!0,name:"maroon"},{value:"#8E388E",name:"sgi beet"},{value:"#7171C6",name:"sgi slateblue"},{value:"#7D9EC0",name:"sgi lightblue"},{value:"#388E8E",name:"sgi teal"},{value:"#71C671",name:"sgi chartreuse"},{value:"#8E8E38",name:"sgi olivedrab"},{value:"#C5C1AA",name:"sgi brightgray"},{value:"#C67171",name:"sgi salmon"},{value:"#555555",name:"sgi darkgray"},{value:"#1E1E1E",name:"sgi gray 12"},{value:"#282828",name:"sgi gray 16"},{value:"#515151",name:"sgi gray 32"},{value:"#5B5B5B",name:"sgi gray 36"},{value:"#848484",name:"sgi gray 52"},{value:"#8E8E8E",name:"sgi gray 56"},{value:"#AAAAAA",name:"sgi lightgray"},{value:"#B7B7B7",name:"sgi gray 72"},{value:"#C1C1C1",name:"sgi gray 76"},{value:"#EAEAEA",name:"sgi gray 92"},{value:"#F4F4F4",name:"sgi gray 96"},{value:"#FFFFFF",vga:!0,css:!0,name:"white"},{value:"#F5F5F5",name:"white smoke"},{value:"#F5F5F5",name:"gray 96"},{value:"#DCDCDC",css:!0,name:"gainsboro"},{value:"#D3D3D3",css:!0,name:"lightgrey"},{value:"#C0C0C0",vga:!0,css:!0,name:"silver"},{value:"#A9A9A9",css:!0,name:"darkgray"},{value:"#808080",vga:!0,css:!0,name:"gray"},{value:"#696969",css:!0,name:"dimgray"},{value:"#696969",name:"gray 42"},{value:"#000000",vga:!0,css:!0,name:"black"},{value:"#FCFCFC",name:"gray 99"},{value:"#FAFAFA",name:"gray 98"},{value:"#F7F7F7",name:"gray 97"},{value:"#F2F2F2",name:"gray 95"},{value:"#F0F0F0",name:"gray 94"},{value:"#EDEDED",name:"gray 93"},{value:"#EBEBEB",name:"gray 92"},{value:"#E8E8E8",name:"gray 91"},{value:"#E5E5E5",name:"gray 90"},{value:"#E3E3E3",name:"gray 89"},{value:"#E0E0E0",name:"gray 88"},{value:"#DEDEDE",name:"gray 87"},{value:"#DBDBDB",name:"gray 86"},{value:"#D9D9D9",name:"gray 85"},{value:"#D6D6D6",name:"gray 84"},{value:"#D4D4D4",name:"gray 83"},{value:"#D1D1D1",name:"gray 82"},{value:"#CFCFCF",name:"gray 81"},{value:"#CCCCCC",name:"gray 80"},{value:"#C9C9C9",name:"gray 79"},{value:"#C7C7C7",name:"gray 78"},{value:"#C4C4C4",name:"gray 77"},{value:"#C2C2C2",name:"gray 76"},{value:"#BFBFBF",name:"gray 75"},{value:"#BDBDBD",name:"gray 74"},{value:"#BABABA",name:"gray 73"},{value:"#B8B8B8",name:"gray 72"},{value:"#B5B5B5",name:"gray 71"},{value:"#B3B3B3",name:"gray 70"},{value:"#B0B0B0",name:"gray 69"},{value:"#ADADAD",name:"gray 68"},{value:"#ABABAB",name:"gray 67"},{value:"#A8A8A8",name:"gray 66"},{value:"#A6A6A6",name:"gray 65"},{value:"#A3A3A3",name:"gray 64"},{value:"#A1A1A1",name:"gray 63"},{value:"#9E9E9E",name:"gray 62"},{value:"#9C9C9C",name:"gray 61"},{value:"#999999",name:"gray 60"},{value:"#969696",name:"gray 59"},{value:"#949494",name:"gray 58"},{value:"#919191",name:"gray 57"},{value:"#8F8F8F",name:"gray 56"},{value:"#8C8C8C",name:"gray 55"},{value:"#8A8A8A",name:"gray 54"},{value:"#878787",name:"gray 53"},{value:"#858585",name:"gray 52"},{value:"#828282",name:"gray 51"},{value:"#7F7F7F",name:"gray 50"},{value:"#7D7D7D",name:"gray 49"},{value:"#7A7A7A",name:"gray 48"},{value:"#787878",name:"gray 47"},{value:"#757575",name:"gray 46"},{value:"#737373",name:"gray 45"},{value:"#707070",name:"gray 44"},{value:"#6E6E6E",name:"gray 43"},{value:"#666666",name:"gray 40"},{value:"#636363",name:"gray 39"},{value:"#616161",name:"gray 38"},{value:"#5E5E5E",name:"gray 37"},{value:"#5C5C5C",name:"gray 36"},{value:"#595959",name:"gray 35"},{value:"#575757",name:"gray 34"},{value:"#545454",name:"gray 33"},{value:"#525252",name:"gray 32"},{value:"#4F4F4F",name:"gray 31"},{value:"#4D4D4D",name:"gray 30"},{value:"#4A4A4A",name:"gray 29"},{value:"#474747",name:"gray 28"},{value:"#454545",name:"gray 27"},{value:"#424242",name:"gray 26"},{value:"#404040",name:"gray 25"},{value:"#3D3D3D",name:"gray 24"},{value:"#3B3B3B",name:"gray 23"},{value:"#383838",name:"gray 22"},{value:"#363636",name:"gray 21"},{value:"#333333",name:"gray 20"},{value:"#303030",name:"gray 19"},{value:"#2E2E2E",name:"gray 18"},{value:"#2B2B2B",name:"gray 17"},{value:"#292929",name:"gray 16"},{value:"#262626",name:"gray 15"},{value:"#242424",name:"gray 14"},{value:"#212121",name:"gray 13"},{value:"#1F1F1F",name:"gray 12"},{value:"#1C1C1C",name:"gray 11"},{value:"#1A1A1A",name:"gray 10"},{value:"#171717",name:"gray 9"},{value:"#141414",name:"gray 8"},{value:"#121212",name:"gray 7"},{value:"#0F0F0F",name:"gray 6"},{value:"#0D0D0D",name:"gray 5"},{value:"#0A0A0A",name:"gray 4"},{value:"#080808",name:"gray 3"},{value:"#050505",name:"gray 2"},{value:"#030303",name:"gray 1"},{value:"#F5F5F5",css:!0,name:"whitesmoke"}];(function(t){var e=Pe,a=e.filter(function(l){return!!l.css}),n=e.filter(function(l){return!!l.vga});t.exports=function(l){var s=t.exports.get(l);return s&&s.value},t.exports.get=function(l){return l=l||"",l=l.trim().toLowerCase(),e.filter(function(s){return s.name.toLowerCase()===l}).pop()},t.exports.all=t.exports.get.all=function(){return e},t.exports.get.css=function(l){return l?(l=l||"",l=l.trim().toLowerCase(),a.filter(function(s){return s.name.toLowerCase()===l}).pop()):a},t.exports.get.vga=function(l){return l?(l=l||"",l=l.trim().toLowerCase(),n.filter(function(s){return s.name.toLowerCase()===l}).pop()):n}})(Ae);const He=Ae.exports,Ie=(t,e)=>{let a="";const n=He(t);if(n!==void 0?a=n.slice(1):t.startsWith("#")&&(a=t.slice(1)),a.length===3){let r="";for(const c of a)r+=c,r+=c;a=r}const l=a.match(/.{2}/g);if(l===null)throw new Error(`Could not identify RGB value of color \`${t}\``);return`rgba(${l.map(r=>Number.parseInt(r,16)).join(", ")}, ${e})`};var We=function(e,a){a||(a=[0,""]),e=String(e);var n=parseFloat(e,10);return a[0]=n,a[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",a};function y(t){return h(()=>{const e=t();let[a,n]=We(String(e));return n=n===void 0||n===""?"px":n,{value:a,unit:n,string:`${a}${n}`}})}var le=[],D=[];function Ge(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=le.indexOf(s);r===-1&&(r=le.push(s)-1,D[r]={}),a=D[r]&&D[r][n]?D[r][n]:D[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var Ze=`
@keyframes vue-spinner-long {
0% {
		left: -35%;
		right: 100%;
}
60% {
		left: 100%;
		right: -90%;
}
100% {
		left: 100%;
		right: -90%;
}
}
@keyframes vue-spinner-short {
0% {
		left: -200%;
		right: 100%;
}
60% {
		left: 107%;
		right: -8%;
}
100% {
		left: 107%;
		right: -8%;
}
}
`;Ge(Ze,{});const Ue={name:"VueSpinnerBar"};({...Ue,props:F({height:4,width:100})});const Je=[i("rect",{y:"10",width:"15",height:"120",rx:"6"},[i("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),i("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},[i("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),i("rect",{x:"60",width:"15",height:"140",rx:"6"},[i("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),i("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},[i("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),i("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},[i("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})])];d({name:"VueSpinnerBars",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,fill:"currentColor",width:e.value,height:e.value,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg"},Je)}});var se=[],$=[];function Ke(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=se.indexOf(s);r===-1&&(r=se.push(s)-1,$[r]={}),a=$[r]&&$[r][n]?$[r][n]:$[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var Qe=`
@keyframes vue-spinner-beat {
50% {
		transform: scale(0.75);
		opacity: 0.2;
}
100% {
		transform: scale(1);
		opacity: 1;
}
}
`;Ke(Qe,{});F({size:15,margin:"2px"});var ue=[],S=[];function et(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=ue.indexOf(s);r===-1&&(r=ue.push(s)-1,S[r]={}),a=S[r]&&S[r][n]?S[r][n]:S[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var tt=`
@keyframes vue-spinner-bounce {
0%,
	100% {
		transform: scale(0);
}
50% {
		transform: scale(1);
}
}
`;et(tt,{});const at={name:"VueSpinnerBeat"};({...at,props:F({size:60})});const nt=[i("rect",{x:"25",y:"25",width:"50",height:"50",fill:"none","stroke-width":"4",stroke:"currentColor"},[i("animateTransform",{id:"spinnerBox",attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",dur:"0.5s",begin:"rectBox.end"})]),i("rect",{x:"27",y:"27",width:"46",height:"50",fill:"currentColor"},[i("animate",{id:"rectBox",attributeName:"height",begin:"0s;spinnerBox.end",dur:"1.3s",from:"50",to:"0",fill:"freeze"})])];d({name:"VueSpinnerBox",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},nt)}});var oe=[],N=[];function rt(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=oe.indexOf(s);r===-1&&(r=oe.push(s)-1,N[r]={}),a=N[r]&&N[r][n]?N[r][n]:N[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var it=`
@keyframes vue-spinner-circle {
0% {
		transform: rotate(0deg);
}
50% {
		transform: rotate(180deg);
}
100% {
		transform: rotate(360deg);
}
}
`;rt(it,{});const lt={name:"VueSpinnerCircle"};({...lt,props:F({size:50})});var ce=[],T=[];function st(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=ce.indexOf(s);r===-1&&(r=ce.push(s)-1,T[r]={}),a=T[r]&&T[r][n]?T[r][n]:T[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var ut=`
@keyframes vue-spinner-climbing-box {
0% {
		transform: translate(0, -1em) rotate(-45deg);
}
5% {
		transform: translate(0, -1em) rotate(-50deg);
}
20% {
		transform: translate(1em, -2em) rotate(47deg);
}
25% {
		transform: translate(1em, -2em) rotate(45deg);
}
30% {
		transform: translate(1em, -2em) rotate(40deg);
}
45% {
		transform: translate(2em, -3em) rotate(137deg);
}
50% {
		transform: translate(2em, -3em) rotate(135deg);
}
55% {
		transform: translate(2em, -3em) rotate(130deg);
}
70% {
		transform: translate(3em, -4em) rotate(217deg);
}
75% {
		transform: translate(3em, -4em) rotate(220deg);
}
100% {
		transform: translate(0, -1em) rotate(-225deg);
}
}
`;st(ut,{});const ot={name:"VueSpinnerClimbingBox"};({...ot,props:F({size:15})});var me=[],z=[];function ct(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=me.indexOf(s);r===-1&&(r=me.push(s)-1,z[r]={}),a=z[r]&&z[r][n]?z[r][n]:z[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var mt=`
@keyframes vue-spinner-clip {
0% {
		transform: rotate(0deg) scale(1);
}
50% {
		transform: rotate(180deg) scale(0.8);
}
100% {
		transform: rotate(360deg) scale(1);
}
}
`;ct(mt,{});const vt={name:"VueSpinnerClip"};({...vt,props:F({size:35})});const dt=[i("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),i("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),i("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];d({name:"VueSpinnerClock",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},dt)}});const gt=[i("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none"}),i("path",{d:"M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",fill:"currentColor"}),i("circle",{cx:"30",cy:"47",r:"5",fill:"#fff"},[i("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;1;1",keyTimes:"0;0.2;1",dur:"1s",repeatCount:"indefinite"})]),i("circle",{cx:"50",cy:"47",r:"5",fill:"#fff"},[i("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;0;1;1",keyTimes:"0;0.2;0.4;1",dur:"1s",repeatCount:"indefinite"})]),i("circle",{cx:"70",cy:"47",r:"5",fill:"#fff"},[i("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;0;1;1",keyTimes:"0;0.4;0.6;1",dur:"1s",repeatCount:"indefinite"})])];d({name:"VueSpinnerComment",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},gt)}});const pt=[i("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none"}),i("g",{transform:"translate(25 25)"},[i("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.9"},[i("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),i("g",{transform:"translate(75 25)"},[i("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.8"},[i("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.1s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),i("g",{transform:"translate(25 75)"},[i("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.7"},[i("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.3s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),i("g",{transform:"translate(75 75)"},[i("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.6"},[i("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.2s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])])];d({name:"VueSpinnerCube",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},pt)}});var ve=[],M=[];function ft(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=ve.indexOf(s);r===-1&&(r=ve.push(s)-1,M[r]={}),a=M[r]&&M[r][n]?M[r][n]:M[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var yt=`
@keyframes vue-spinner-rotate {
100% {
		transform: rotate(360deg);
}
}
@keyframes vue-spinner-bounce {
0%,
	100% {
		transform: scale(0);
}
50% {
		transform: scale(1);
}
}
`;ft(yt,{});const ht={name:"VueSpinnerDot"};({...ht,props:F({size:60})});const bt=[i("circle",{cx:"15",cy:"15",r:"15"},[i("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[i("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"105",cy:"15",r:"15"},[i("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];d({name:"VueSpinnerDots",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,fill:"currentColor",width:e.value,height:e.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},bt)}});const Ct=[i("g",{transform:"translate(20 50)"},[i("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[i("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),i("g",{transform:"translate(50 50)"},[i("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[i("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),i("g",{transform:"translate(80 50)"},[i("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[i("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];d({name:"VueSpinnerFacebook",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},Ct)}});var de=[],j=[];function Ft(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=de.indexOf(s);r===-1&&(r=de.push(s)-1,j[r]={}),a=j[r]&&j[r][n]?j[r][n]:j[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var Et=`
@keyframes vue-spinner-fade {
50% {
		opacity: 0.3;
}
100% {
		opacity: 1;
}
}
`;Ft(Et,{});const wt={name:"VueSpinnerFade"};({...wt,props:F({color:"#000000",height:"15px",width:"5px",margin:"2px",radius:"2px"})});const kt=[i("g",{transform:"translate(-20,-20)"},[i("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),i("g",{transform:"translate(20,20) rotate(15 50 50)"},[i("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])];d({name:"VueSpinnerGears",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},kt)}});const xt=[i("circle",{cx:"12.5",cy:"12.5",r:"12.5"},[i("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":".5"},[i("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"52.5",cy:"12.5",r:"12.5"},[i("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"52.5",cy:"52.5",r:"12.5"},[i("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"92.5",cy:"12.5",r:"12.5"},[i("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"92.5",cy:"52.5",r:"12.5"},[i("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"12.5",cy:"92.5",r:"12.5"},[i("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"52.5",cy:"92.5",r:"12.5"},[i("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"92.5",cy:"92.5",r:"12.5"},[i("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})])];d({name:"VueSpinnerGrid",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,fill:"currentColor",width:e.value,height:e.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg"},xt)}});var ge=[],q=[];function Bt(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=ge.indexOf(s);r===-1&&(r=ge.push(s)-1,q[r]={}),a=q[r]&&q[r][n]?q[r][n]:q[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var At=`
@keyframes vue-spinner-grid {
0% {
		transform: scale(1);
}
50% {
		transform: scale(0.5);
		opacity: 0.7;
}
100% {
		transform: scale(1);
		opacity: 1;
}
}
`;Bt(At,{});const _t={name:"VueSpinnerGridPop"};({..._t,props:F({size:15,margin:"2px"})});const Dt=[i("path",{d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z","fill-opacity":".5"},[i("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})]),i("path",{d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z","fill-opacity":".5"},[i("animate",{attributeName:"fill-opacity",begin:"0.7s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})]),i("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"})];d({name:"VueSpinnerHearts",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,fill:"currentColor",width:e.value,height:e.value,viewBox:"0 0 140 64",xmlns:"http://www.w3.org/2000/svg"},Dt)}});const $t=[i("g",[i("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),i("clipPath",{id:"uil-hourglass-clip1"},[i("rect",{x:"15",y:"20",width:"70",height:"25"},[i("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),i("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),i("clipPath",{id:"uil-hourglass-clip2"},[i("rect",{x:"15",y:"55",width:"70",height:"25"},[i("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),i("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),i("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),i("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})])];d({name:"VueSpinnerHourglass",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},$t)}});const St=[i("path",{d:"M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z",fill:"none",stroke:"currentColor","stroke-width":"8","stroke-dasharray":"10.691205342610678 10.691205342610678","stroke-dashoffset":"0"},[i("animate",{attributeName:"stroke-dashoffset",from:"0",to:"21.382410685221355",begin:"0",dur:"2s",repeatCount:"indefinite",fill:"freeze"})])];d({name:"VueSpinnerInfinity",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},St)}});const Nt=[i("g",{"stroke-width":"4","stroke-linecap":"round"},[i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"})]),i("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"},[i("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})])])];d({name:"VueSpinnerIos",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,stroke:"currentColor",fill:"currentColor",viewBox:"0 0 64 64"},Nt)}});var pe=[],O=[];function Tt(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=pe.indexOf(s);r===-1&&(r=pe.push(s)-1,O[r]={}),a=O[r]&&O[r][n]?O[r][n]:O[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var zt=`
@keyframes vue-spinner-moon {
100% {
		transform: rotate(360deg);
}
}
`;Tt(zt,{});const Mt={name:"VueSpinnerMoon"};({...Mt,props:F({size:60})});const jt=[i("circle",{cx:"50",cy:"50",r:"44",fill:"none","stroke-width":"4","stroke-opacity":".5",stroke:"currentColor"}),i("circle",{cx:"8",cy:"54",r:"6",fill:"currentColor","stroke-width":"3",stroke:"currentColor"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 48",to:"360 50 52",dur:"2s",repeatCount:"indefinite"})])];d({name:"VueSpinnerOrbit",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},jt)}});const qt=[i("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"},[i("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),i("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])];d({name:"VueSpinnerOval",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,stroke:"currentColor",width:e.value,height:e.value,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},qt)}});var J=Ot;function Ot(t,e,a){if(t!=null&&typeof t!="number")throw new Error("start must be a number or null");if(e!=null&&typeof e!="number")throw new Error("stop must be a number or null");if(a!=null&&typeof a!="number")throw new Error("step must be a number or null");e==null&&(e=t||0,t=0),a==null&&(a=e>t?1:-1);for(var n=[],l=t<e;l?t<e:t>e;t+=a)n.push(t);return n}var fe=[],R=[];function Rt(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=fe.indexOf(s);r===-1&&(r=fe.push(s)-1,R[r]={}),a=R[r]&&R[r][n]?R[r][n]:R[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var Vt=`
@keyframes vue-spinner-pacman0 {
0% {
		transform: rotate(0deg);
}
50% {
		transform: rotate(-44deg);
}
}
@keyframes vue-spinner-pacman1 {
0% {
		transform: rotate(0deg);
}
50% {
		transform: rotate(44deg);
}
}
@keyframes vue-spinner-pacman-ball-animation {
75% {
		opacity: 0.7;
}
100% {
		transform: translate(
			var(--6ccace4f-___-4___size_value___size_unit__),
			var(--6ccace4f-___-size_value___4___size_unit__)
		);
}
}
`;Rt(Vt,{});const Lt={name:"VueSpinnerPacman"};({...Lt,props:F({size:"25px",margin:"2px"})});const Yt=[i("path",{d:"M0 50A50 50 0 0 1 50 0L50 50L0 50",fill:"currentColor",opacity:"0.5"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"0.8s",repeatCount:"indefinite"})]),i("path",{d:"M50 0A50 50 0 0 1 100 50L50 50L50 0",fill:"currentColor",opacity:"0.5"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"1.6s",repeatCount:"indefinite"})]),i("path",{d:"M100 50A50 50 0 0 1 50 100L50 50L100 50",fill:"currentColor",opacity:"0.5"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2.4s",repeatCount:"indefinite"})]),i("path",{d:"M50 100A50 50 0 0 1 0 50L50 50L50 100",fill:"currentColor",opacity:"0.5"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"3.2s",repeatCount:"indefinite"})])];d({name:"VueSpinnerPie",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Yt)}});var ye=[],V=[];function Xt(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=ye.indexOf(s);r===-1&&(r=ye.push(s)-1,V[r]={}),a=V[r]&&V[r][n]?V[r][n]:V[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var Pt=`
@keyframes vue-spinner-propagate0 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___left__)) scale(0.75);
}
50% {
		transform: translateX(var(--4d723eb2-getDistance_1___left__)) scale(0.6);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_2___left__)) scale(0.5);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate1 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___left__)) scale(0.75);
}
50% {
		transform: translateX(var(--4d723eb2-getDistance_1___left__)) scale(0.6);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_1___left__)) scale(0.6);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate2 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___left__)) scale(0.75);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_0___left__)) scale(0.75);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate3 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___right__)) scale(0.75);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_0___right__)) scale(0.75);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate4 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___right__)) scale(0.75);
}
50% {
		transform: translateX(var(--4d723eb2-getDistance_1___right__)) scale(0.6);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_1___right__)) scale(0.6);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate5 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___right__)) scale(0.75);
}
50% {
		transform: translateX(var(--4d723eb2-getDistance_1___right__)) scale(0.6);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_2___right__)) scale(0.5);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
`;Xt(Pt,{});const Ht={name:"VueSpinnerPropagate"};({...Ht,props:F({size:"15px"})});const It=[i("g",{fill:"none","fill-rule":"evenodd","stroke-width":"2"},[i("circle",{cx:"22",cy:"22",r:"1"},[i("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),i("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]),i("circle",{cx:"22",cy:"22",r:"1"},[i("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),i("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})])])];d({name:"VueSpinnerPuff",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,stroke:"currentColor",width:e.value,height:e.value,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},It)}});var he=[],L=[];function Wt(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=he.indexOf(s);r===-1&&(r=he.push(s)-1,L[r]={}),a=L[r]&&L[r][n]?L[r][n]:L[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var Gt=`
@keyframes vue-spinner-pulse {
0% {
		transform: scale(1);
		opacity: 1;
}
45% {
		transform: scale(0.1);
		opacity: 0.7;
}
80% {
		transform: scale(1);
		opacity: 1;
}
}
`;Wt(Gt,{});const Zt={name:"VueSpinnerPulse"};({...Zt,props:F({size:"15px",margin:"2px"})});const Ut=[i("g",{transform:"scale(0.55)"},[i("circle",{cx:"30",cy:"150",r:"30",fill:"currentColor"},[i("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})]),i("path",{d:"M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z",fill:"currentColor"},[i("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0.1",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})]),i("path",{d:"M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z",fill:"currentColor"},[i("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0.2",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})])])];d({name:"VueSpinnerRadio",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Ut)}});var be=[],Y=[];function Jt(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=be.indexOf(s);r===-1&&(r=be.push(s)-1,Y[r]={}),a=Y[r]&&Y[r][n]?Y[r][n]:Y[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var Kt=`
@keyframes vue-spinner-right {
0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
		transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
}
}
@keyframes vue-spinner-left {
0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
		transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
}
}
`;Jt(Kt,{});const Qt={name:"VueSpinnerRing"};({...Qt,props:F({size:"60px"})});const ea=[i("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)","stroke-width":"2"},[i("circle",{cx:"22",cy:"22",r:"6"},[i("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"22",cy:"22",r:"6"},[i("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"22",cy:"22",r:"8"},[i("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})])])];d({name:"VueSpinnerRings",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,stroke:"currentColor",width:e.value,height:e.value,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg"},ea)}});var Ce=[],X=[];function ta(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=Ce.indexOf(s);r===-1&&(r=Ce.push(s)-1,X[r]={}),a=X[r]&&X[r][n]?X[r][n]:X[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var aa=`
@keyframes vue-spinner-even {
0% {
		transform: scale(1.1);
}
25% {
		transform: translateY(var(--515f9cd0--riseAmount____px_));
}
50% {
		transform: scale(0.4);
}
75% {
		transform: translateY(var(--515f9cd0-riseAmount____px_));
}
100% {
		transform: translateY(0) scale(1);
}
}
@keyframes vue-spinner-odd {
0% {
		transform: scale(0.4);
}
25% {
		transform: translateY(var(--515f9cd0-riseAmount____px_));
}
50% {
		transform: scale(1.1);
}
75% {
		transform: translateY(var(--515f9cd0--riseAmount____px_));
}
100% {
		transform: translateY(0) scale(0.75);
}
}
`;ta(aa,{});const na={name:"VueSpinnerRise"};({...na,props:F({size:"15px",margin:"2px"})});var Fe=[],P=[];function ra(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=Fe.indexOf(s);r===-1&&(r=Fe.push(s)-1,P[r]={}),a=P[r]&&P[r][n]?P[r][n]:P[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var ia=`
@keyframes vue-spinner-rotate-079b92bc {
0% {
		transform: rotate(0deg);
}
50% {
		transform: rotate(180deg);
}
100% {
		transform: rotate(360deg);
}
}
`;ra(ia,{});const la={name:"VueSpinnerRotate"};({...la,props:F({size:"15px",margin:"2px"})});var Ee=[],H=[];function sa(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=Ee.indexOf(s);r===-1&&(r=Ee.push(s)-1,H[r]={}),a=H[r]&&H[r][n]?H[r][n]:H[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var ua=`
@keyframes vue-spinner-scale {
0% {
		transform: scaleY(1);
}
50% {
		transform: scaleY(0.4);
}
100% {
		transform: scaleY(1);
}
}
`;sa(ua,{});const oa={name:"VueSpinnerScale"};({...oa,props:F({height:"35px",width:"4px",radius:"2px",margin:"2px"})});var we=[],I=[];function ca(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=we.indexOf(s);r===-1&&(r=we.push(s)-1,I[r]={}),a=I[r]&&I[r][n]?I[r][n]:I[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var ma=`
@keyframes vue-spinner-skew {
25% {
		transform: perspective(100px) rotateX(180deg) rotateY(0);
}
50% {
		transform: perspective(100px) rotateX(180deg) rotateY(180deg);
}
75% {
		transform: perspective(100px) rotateX(0) rotateY(180deg);
}
100% {
		transform: perspective(100px) rotateX(0) rotateY(0);
}
}
`;ca(ma,{});const va={name:"VueSpinnerSkew"};({...va,props:F({size:"20px"})});var ke=[],W=[];function da(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=ke.indexOf(s);r===-1&&(r=ke.push(s)-1,W[r]={}),a=W[r]&&W[r][n]?W[r][n]:W[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var ga=`
@keyframes vue-spinner-square {
25% {
		transform: rotateX(180deg) rotateY(0);
}
50% {
		transform: rotateX(180deg) rotateY(180deg);
}
75% {
		transform: rotateX(0) rotateY(180deg);
}
100% {
		transform: rotateX(0) rotateY(0);
}
}
`;da(ga,{});const pa={name:"VueSpinnerSquare"};({...pa,props:F({size:"50px"})});var xe=[],G=[];function fa(t,e){if(t&&typeof document<"u"){var a,n=e.prepend===!0?"prepend":"append",l=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(l){var r=xe.indexOf(s);r===-1&&(r=xe.push(s)-1,G[r]={}),a=G[r]&&G[r][n]?G[r][n]:G[r][n]=c()}else a=c();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function c(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),e.attributes)for(var m=Object.keys(e.attributes),o=0;o<m.length;o++)u.setAttribute(m[o],e.attributes[m[o]]);var v=n==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(v,u),u}}var ya=`
@keyframes vue-spinner-sync {
33% {
		transform: translateY(10px);
}
66% {
		transform: translateY(-10px);
}
100% {
		transform: translateY(0);
}
}
`;fa(ya,{});const ha={name:"VueSpinnerBounce"};({...ha,props:F({size:"15px",margin:"2px"})});const ba=[i("defs",[i("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},[i("stop",{"stop-color":"currentColor","stop-opacity":"0",offset:"0%"}),i("stop",{"stop-color":"currentColor","stop-opacity":".631",offset:"63.146%"}),i("stop",{"stop-color":"currentColor",offset:"100%"})])]),i("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd"},[i("path",{d:"M36 18c0-9.94-8.06-18-18-18",stroke:"url(#a)","stroke-width":"2"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})]),i("circle",{fill:"currentColor",cx:"36",cy:"18",r:"1"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})])])];d({name:"VueSpinnerTail",props:b,setup(t){const{cSize:e,classes:a,style:n}=C(t);return()=>i("svg",{style:n.value,class:a.value,width:e.value,height:e.value,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},ba)}});export{Ea as v};
