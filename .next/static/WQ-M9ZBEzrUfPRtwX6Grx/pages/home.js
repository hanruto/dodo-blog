(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5XSU":function(t,e,n){"use strict";n.r(e);var r=n("r6tY"),a=n.n(r),u=n("u20+"),i=n.n(u),o=n("ZxvJ"),c=n.n(o),f=n("Ah5Y"),s=n.n(f),p=n("w2yW"),l=n.n(p),h=n("AkfJ"),d=n.n(h),v=n("CvBr"),g=n("2w0b"),b=n.n(g),y=n("Hcux"),m=n("1s8z"),x=n.n(m),w=n("4x1K"),E=n.n(w),j=n("D+9D"),T=n.n(j),S=n("LIto"),k=n.n(S),L=n("+2Na"),O=n.n(L),N=n("NxXM"),R=n.n(N),M=n("ILhb"),D=n.n(M),H=n("4Ufw"),I=n.n(H),F=n("yl5b"),C=(n("gtKq"),n("9xLo"),n("rQbW"));function J(t,e){J=function(t,e){return new u(t,void 0,e)};var n=Object(C.a)(RegExp),r=RegExp.prototype,a=new I.a;function u(t,e,r){var u=n.call(this,t,e);return a.set(u,r||a.get(t)),u}function i(t,e){var n=a.get(e);return d()(n).reduce((function(e,r){return e[r]=t[n[r]],e}),R()(null))}return Object(F.a)(u,n),u.prototype.exec=function(t){var e=r.exec.call(this,t);return e&&(e.groups=i(e,this)),e},u.prototype[D.a]=function(t,e){if("string"===typeof e){var n=a.get(this);return r[D.a].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+n[e]})))}if("function"===typeof e){var u=this;return r[D.a].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==typeof t[t.length-1]&&t.push(i(t,u)),e.apply(this,t)}))}return r[D.a].call(this,t,e)},J.apply(this,arguments)}var X=[{type:"h1",reg:/^# .*$/},{type:"h2",reg:/^## .*$/},{type:"h3",reg:/^### .*$/},{type:"h4",reg:/^#### .*$/}],$=J(/\[(.*?)\]([\+\x2D])\((.*?)\)/g,{text:1,isNewTarget:2,href:3});function _(t){return t.split("\n").filter((function(t){return""!==t})).map((function(t){for(var e=0;e<X.length;e++)if(X[e].reg.test(t))return{type:X[e].type,content:t.replace(/#+ /,"").trim()};return{type:"p",content:t}})).map((function(t){var e=t.content,n=t.type,r=[],a=0;return(e=e.replace($,(function(t,e,n,u,i){return r.push({start:i-a,end:i+e.length-1-a,href:u,text:e,targetSign:n}),a+=t.length-e.length,e}))).split("").map((function(t,a){var u=!1,i=!1,o="",c=!1;return r.forEach((function(t){var e=t.start,n=t.end,r=t.href,f=t.targetSign;a===e&&(u=!0),a===n&&(i=!0),a>=e&&a<=n&&(o=r,c="+"===f)})),{href:o,isHrefStart:u,isHrefEnd:i,isNewTarget:c,type:n,isStart:0===a,content:t,isEnd:a===e.length-1}}))})).flat()}n("fJQi");var A=b.a.createElement;function P(t){var e=t.content,n=t.rendered,r=Object(g.useRef)(null),a=0,u=function(t){var e=t.target&&t.target.getAttribute("data-href");e&&(t.stopPropagation(),O.a.push(e))};return Object(g.useEffect)((function(){return function(){var t,u,i,o,c,f,s,p,l,h;E.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(t=r.current){d.next=3;break}return d.abrupt("return");case 3:u=_(e),i={h1:300,h2:200,h3:200,h4:150,p:60},o=null,c=null,f=null,s=null,p=function(e){var r,p,l,h,d,v,g,b,y,m,x;return E.a.async((function(w){for(;;)switch(w.prev=w.next){case 0:if(r=u[e],p=r.type,l=r.content,h=r.isStart,d=r.isEnd,v=r.isHrefStart,g=r.isHrefEnd,b=r.href,y=r.isNewTarget,m=i[p],h&&(o=document.createElement(p),(f=document.createElement("i")).classList.add("cursor"),s=document.createElement("span"),o.appendChild(s),o.appendChild(f),t.appendChild(o)),n){w.next=6;break}return w.next=6,E.a.awrap(new k.a((function(t){return a=window.setTimeout(t,m)})));case 6:if(o){w.next=8;break}return w.abrupt("return",{v:void 0});case 8:if(v&&(c=document.createElement("a"),y?(c.setAttribute("href",b),c.setAttribute("target","_new")):c.setAttribute("data-href",b),s.appendChild(c)),c?c.innerHTML+=l:s.innerHTML+=l,g&&(c=null),!d){w.next=20;break}if(o.classList.add("wait"),x=T()((600*Math.random()+400).toString()),w.t0=!n,!w.t0){w.next=18;break}return w.next=18,E.a.awrap(new k.a((function(t){return a=window.setTimeout(t,x)})));case 18:o.classList.remove("wait"),o.removeChild(f);case 20:case"end":return w.stop()}}))},l=0;case 11:if(!(l<u.length)){d.next=20;break}return d.next=14,E.a.awrap(p(l));case 14:if("object"!==typeof(h=d.sent)){d.next=17;break}return d.abrupt("return",h.v);case 17:l++,d.next=11;break;case 20:case"end":return d.stop()}}))}(),document.addEventListener("click",u),function(){clearInterval(a),document.removeEventListener("click",u)}}),[]),A("div",{className:"c-typer",ref:r})}var U=n("rEMe"),W=(n("3MmF"),b.a.createElement);function G(t,e){var n=d()(t);if(l.a){var r=l()(t);e&&(r=r.filter((function(e){return s()(t,e).enumerable}))),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){Object(v.a)(t,e,n[e])})):c.a?i()(t,c()(n)):G(Object(n)).forEach((function(e){a()(t,e,s()(n,e))}))}return t}var Q="\n## \u55e8\u3002\n#### \u6211\u53eb\u5c0f\u5bd2\uff0c\n\u662f\u8fd9\u4e2a\u7f51\u7ad9\u7684\u8bbe\u8ba1\u8005\u548c\u5f00\u53d1\u8005\u3002\n\u5f88\u5f00\u5fc3\u4f60\u80fd\u6765\u5230\u4e86\u6211\u7684\u5c0f\u7ad9\u3002\n\u7f51\u7ad9\u7684\u8d44\u6e90\u4e0d\u591a\uff0c\u4f46\u5e0c\u671b\u80fd\u7ed9\u4f60\u5e26\u6765\u4e00\u4e9b\u5e2e\u52a9\u3002\n\u535a\u5ba2\u7684\u4ee3\u7801\u662f\u5f00\u6e90\u7684\uff0c\u8fd9\u662f\u8fd9\u4e2a\u9879\u76ee\u7684 [github\u5730\u5740]+(https://github.com/hanruto/dodo-blog)\uff0c\u8bb0\u5f97\u7ed9\u4e2astar\u54e6\u3002\n\u770b\u535a\u5ba2\u70b9 [\u8fd9\u91cc]-(/) \u3002\n";e.default=Object(y.b)((function(t){return K({},t.globalModel)}),(function(t){return K({},t.globalModel)}))((function(t){var e=t.isTyperFirstRendered;return Object(g.useEffect)((function(){Object(U.b)("enter-home","route-change"),t.isTyperFirstRenderedRef||t.setIsTyperFirstRendered(!0)}),[]),W("div",{className:"page-common-container home-page"},W(x.a,null,W("title",null,"\u5c0f\u5bd2\u7684\u535a\u5ba2-\u9996\u9875")),W("div",{className:"home-page-typer"},W(P,{content:Q,rendered:e})))}))},"D+9D":function(t,e,n){t.exports=n("nseT")},ILhb:function(t,e,n){t.exports=n("uubt")},MmJ7:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n("5XSU")}])},hiug:function(t,e,n){var r=n("NfTU"),a=n("j+Va");r(r.G+r.F*(parseInt!=a),{parseInt:a})},hy6D:function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"j+Va":function(t,e,n){var r=n("zoxk").parseInt,a=n("oRKG").trim,u=n("hy6D"),i=/^[-+]?0[xX]/;t.exports=8!==r(u+"08")||22!==r(u+"0x16")?function(t,e){var n=a(String(t),3);return r(n,e>>>0||(i.test(n)?16:10))}:r},nseT:function(t,e,n){n("hiug"),t.exports=n("c01Q").parseInt},oRKG:function(t,e,n){var r=n("NfTU"),a=n("Si3G"),u=n("dqLm"),i=n("hy6D"),o="["+i+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),s=function(t,e,n){var a={},o=u((function(){return!!i[t]()||"\u200b\x85"!="\u200b\x85"[t]()})),c=a[t]=o?e(p):i[t];n&&(a[n]=c),r(r.P+r.F*o,"String",a)},p=s.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(f,"")),t};t.exports=s},rQbW:function(t,e,n){"use strict";var r=n("NxXM"),a=n.n(r),u=n("lu+e"),i=n.n(u),o=n("9xLo"),c=n("45mZ");var f=n("b9LC"),s=n.n(f);function p(t,e,n){return(p=function(){if("undefined"===typeof Reflect||!s.a)return!1;if(s.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(s()(Date,[],(function(){}))),!0}catch(t){return!1}}()?s.a:function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&Object(c.a)(a,n.prototype),a}).apply(null,arguments)}function l(t){var e="function"===typeof i.a?new i.a:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return p(t,arguments,Object(o.a)(this).constructor)}return r.prototype=a()(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Object(c.a)(r,t)})(t)}n.d(e,"a",(function(){return l}))},uWaH:function(t,e){},uubt:function(t,e,n){n("uWaH"),t.exports=n("0axr").f("replace")}},[["MmJ7",1,0,2]]]);