(function(t){function e(e){for(var s,r,l=e[0],c=e[1],o=e[2],v=0,_=[];v<l.length;v++)r=l[v],a[r]&&_.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(_.length)_.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"04d3":function(t,e,n){},"0c76":function(t,e,n){},"114c":function(t,e,n){},"15c4":function(t,e,n){},"19bd":function(t,e,n){},2478:function(t,e,n){t.exports=n.p+"img/bgMoon.461c6f59.png"},"31f4d":function(t,e,n){},"484b":function(t,e,n){t.exports=n.p+"img/globe.19e3f119.gif"},"49ec":function(t,e,n){t.exports=n.p+"img/moon.b971c792.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("onenineninenine"),n("header-app"),n("homepage"),n("aboutpage"),n("skillproject"),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[t._v("\n    This website is made with "),n("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("VueJS ")]),t._v("❤"),n("br"),t._v("\n    Visit my "),n("a",{attrs:{href:"https://github.com/tuttarealstep/",target:"_blank"}},[t._v("GitHub 💻")]),n("br"),n("small",[t._v("Image "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/The_Starry_Night"}},[t._v("The Starry Night")])]),n("br"),n("small",[t._v("(Inspired by a a fantastic person that is near me always)")])])}],r=(n("df38"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"headerMain"},[n("a",{staticClass:"logo"},[t._v("SV")])])}],c=(n("114c"),{name:"headerApp",components:{}}),o=c,p=n("2877"),v=Object(p["a"])(o,r,l,!1,null,null,null);v.options.__file="header.vue";var _=v.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"homepage"},[n("h1",{staticClass:"homeTitle"},[t._v("Stefano Valenzano")]),n("h2",{staticClass:"homeDescription"},[t._v("Developer - Computer Scientist")]),n("art"),n("span",{staticClass:"homeDesc"},[t._v("« code is art »")])],1)},g=[],d=(n("19bd"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"artImage"}},[s("div",{staticClass:"imageContainer",on:{click:t.changeImage}},[s("img",{staticClass:"show",attrs:{src:n("662f"),id:"normalImage"}}),s("img",{staticClass:"asciiArt hide",attrs:{src:n("86cf"),id:"asciiImage"}})])])}),m=[],h=(n("15c4"),{name:"art",components:{},methods:{changeImage:function(){document.getElementById("normalImage").classList.toggle("show"),document.getElementById("asciiImage").classList.toggle("hide")}},mounted:function(){}}),f=h,b=Object(p["a"])(f,d,m,!1,null,null,null);b.options.__file="art.vue";var C=b.exports,y={name:"homepage",components:{Art:C}},w=y,A=Object(p["a"])(w,u,g,!1,null,null,null);A.options.__file="homepage.vue";var I=A.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"aboutpage"},[s("span",{staticClass:"waveDivider",attrs:{id:"waveDivider"}}),s("div",{staticClass:"moonDiv",on:{click:t.nightMode}},[s("img",{staticClass:"bgMoon",attrs:{src:n("2478")}}),s("img",{staticClass:"moon",attrs:{src:n("49ec")}})]),s("div",{staticClass:"titleContainer"},[t._v("\n        About\n    ")]),s("div",{staticClass:"textContainer"},[s("p",[t._v("Hi, my name is "),s("b",[t._v("Stefano Valenzano")]),t._v(". I was born in "),s("span",{staticClass:"oneninenineninetext",on:{click:t.onenineninenine}},[t._v("1999")]),t._v(".\n            I'm a developer and I do many projects to improve my skills and knowledge.\n            I have a passion to learning new technologies, how they works and what's behind."),s("br"),t._v('\n            I graduated at Technical Institute Telecommunications and Computer Science student at the State Technical Institute "Alessandro Artom" in 2018.\n            I enjoy making websites because I think that I can do what I wish and what I want. I like build awesome things for me and for all people.\n            '),s("br"),s("br"),s("small",[t._v('Diplomato in Informatica e Telecomunicazioni presso l\'istituto tecnico industriale statale "Alessandro Artom" nel 2018.')])]),s("br"),s("a",{staticClass:"about_info",attrs:{href:"mailto:valenzano.stefano99@gmail.com"}},[t._v("valenzano.stefano99@gmail.com")])])])},k=[],x=(n("0c76"),{name:"aboutpage",components:{},methods:{nightMode:function(){document.body.classList.toggle("nightmode")},onenineninenine:function(){document.getElementById("onenineninenine").classList.toggle("hidden")}},mounted:function(){this.$anime({targets:"img.moon",keyframes:[{rotate:"360deg"}],duration:1e4,loop:!0,easing:"linear"});var t,e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);window.addEventListener("scroll",function(n){var s=document.getElementById("waveDivider"),a=s.getBoundingClientRect().top,i=a-e;i>0?s.classList.remove("show"):(a<e/2&&a>t&&s.classList.remove("show"),-1===s.className.indexOf("show")&&a<t&&s.classList.add("show"),t=a)})}}),S=x,E=Object(p["a"])(S,j,k,!1,null,null,null);E.options.__file="about.vue";var O=E.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"onenineninenine hidden",attrs:{id:"onenineninenine"}},[s("div",{staticClass:"nintetext"},[s("a",{staticStyle:{color:"#fff"},attrs:{href:"#"},on:{click:t.closenine}},[t._v("Close")]),s("marquee",[s("h1",[t._v("Hello, you are welcome in 90's")])]),t._m(0),s("br"),s("br"),t._m(1),s("br"),s("img",{attrs:{src:n("484b")}})],1)])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{color:"red"}},[n("b",[t._v("The best website in the world!")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"blink"},[t._v("I love blink ")])])}],B=(n("31f4d"),{name:"onenineninenine",components:{},methods:{closenine:function(){document.getElementById("onenineninenine").classList.toggle("hidden")}},mounted:function(){}}),L=B,M=Object(p["a"])(L,$,T,!1,null,null,null);M.options.__file="1999.vue";var P=M.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"skillproject"},[n("div",{staticClass:"codeCard"},[n("div",{staticClass:"codeCardContainer",on:{click:t.codeBg}},[t._m(0),t._m(1),n("br"),n("span",{staticClass:"cyan"},[t._v("/*")]),n("br"),n("span",{staticClass:"cyan"},[t._v("My last sideproject:")]),n("br"),n("span",{staticClass:"cyan"},[t._v("https://tuttarealstep.github.io/drawing-password-generator/")]),n("br"),n("span",{staticClass:"cyan"},[t._v("*/")]),n("br"),n("br"),t._m(2)])])])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"cyan"},[t._v("/*"),n("br"),t._v("\n            « I like start to code things from scratch and brings ideas to life. »"),n("br"),t._v("\n                */"),n("br"),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"purple"},[t._v("let")]),t._v(" recentProjects "),n("span",{staticClass:"cyan"},[t._v("=")]),t._v(" { "),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("CConnect")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("'https://cconnet.com'")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("AM2000Tipograifa")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("'https://am2000tipografia.it'")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("GlobalPellet")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("'https://globalpelletpolska.com'")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("Agripassione")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("'http://agripassione.it'")]),n("br"),t._v("\n                };\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"purple"},[t._v("let")]),t._v(" skills "),n("span",{staticClass:"cyan"},[t._v("=")]),t._v(" { "),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("html")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("css")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("javascript")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("php")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("nodeJs")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("VuejJ")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("jQuery")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("Java")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("cPlusPlus")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("visualBasic")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("cSharp")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("arduino")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("bootstrap")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("bulmaCSS")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("mySql")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("windows")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),t._v(","),n("br"),n("span",{staticClass:"red rightAlign"},[t._v("linux")]),n("span",{staticClass:"cyan"},[t._v(":")]),t._v(" "),n("span",{staticClass:"green"},[t._v("true")]),n("br"),t._v("\n                };\n            ")])}],z=(n("04d3"),{name:"skillproject",components:{},methods:{codeBg:function(){var t=document.getElementsByTagName("body")[0];t.classList.add("codeBg"),setTimeout(function(){t.classList.remove("codeBg")},4e3)}},mounted:function(){}}),V=z,J=Object(p["a"])(V,D,H,!1,null,null,null);J.options.__file="skillprojects.vue";var N=J.exports,q={name:"app",components:{Skillproject:N,Onenineninenine:P,Aboutpage:O,Homepage:I,HeaderApp:_},mounted:function(){console.log("Hi o/"),console.log("I'm Stefano Valenzano <valenzano.stefano99@gmail.com>"),console.log("If you want search something, in this website there are many easter eggs :D (Like this)")}},G=q,Q=Object(p["a"])(G,a,i,!1,null,null,null);Q.options.__file="App.vue";var R=Q.exports,F=n("1209");s["a"].config.productionTip=!1,Object.defineProperty(s["a"].prototype,"$anime",{value:F["a"]}),new s["a"]({render:function(t){return t(R)}}).$mount("#app")},"662f":function(t,e,n){t.exports=n.p+"img/starry_night.aff4c556.jpg"},"86cf":function(t,e,n){t.exports=n.p+"img/starry_night_ascii.e75d172d.png"},df38:function(t,e,n){}});
//# sourceMappingURL=app.bd7ec050.js.map