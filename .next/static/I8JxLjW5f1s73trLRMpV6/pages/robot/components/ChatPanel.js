(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Mudp:function(n,t,e){"use strict";e.r(t);var r=e("r6tY"),a=e.n(r),i=e("u20+"),u=e.n(i),c=e("ZxvJ"),o=e.n(c),l=e("Ah5Y"),s=e.n(l),f=e("w2yW"),p=e.n(f),v=e("AkfJ"),d=e.n(v),h=e("CvBr"),m=e("2w0b"),b=e.n(m),y=e("iczh"),w=e.n(y),N=e("Hcux"),g=e("c22y"),j=(e("CBBb"),b.a.createElement);function O(n,t){var e=d()(n);if(p.a){var r=p()(n);t&&(r=r.filter((function(t){return s()(n,t).enumerable}))),e.push.apply(e,r)}return e}function k(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?O(Object(e),!0).forEach((function(t){Object(h.a)(n,t,e[t])})):o.a?u()(n,o()(e)):O(Object(e)).forEach((function(t){a()(n,t,s()(e,t))}))}return n}t.default=Object(N.b)((function(n){return k({},n.robotModel)}),(function(n){return k({},n.robotModel)}))((function(n){var t=n.chats,e=n.status,r=Object(m.useRef)(null),a=Object(m.useRef)(null);return Object(m.useEffect)((function(){var n;if(r&&a){var t=a.current.offsetHeight;n=setTimeout((function(){return r.current.scrollTo(0,t)}),0)}return function(){return clearTimeout(n)}}),[t]),j("div",{className:"chat-panel",ref:r},j("div",{className:"chat-list",ref:a},t.map((function(n,t){var e=n.content,r=n.role,a=n.id;if("string"!==typeof e&&!(e instanceof Array)&&"status"===e.type){var i=e.status;return j("div",{key:"".concat(a,"-").concat(t),className:w()("chat-status",i)},function(n){return{offline:"\u5bf9\u65b9\u5df2\u79bb\u7ebf",online:"\u5bf9\u65b9\u5df2\u4e0a\u7ebf"}[n]}(i))}return j("div",{key:a,className:w()("chat-item",r)},j("div",{className:"chat-content-wrapper"},j("div",{className:"chat-content"},function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t.type){var r=t.type,a=t.src,i=void 0===a?"":a,u=t.text,c=void 0===u?"":u,o=t.href,l=void 0===o?"":o;if("img"===r)return j("img",{src:i,key:e});if("link"===r)return j("a",{href:l,key:e,target:"_new"},c);if("text"===r)return j("span",null,c);if("label"===r)return j("span",null,c)}if(t instanceof Array)return t.map((function(t,e){return n(t,e)}))}(e))))})),"inputing"===e&&j("div",{className:w()("chat-item robot","inputing"===e&&"expand")},j("div",{className:"chat-content-wrapper"},j("div",{className:"chat-content"},j(g.default,null))))))}))},PVNZ:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/robot/components/ChatPanel",function(){return e("Mudp")}])},c22y:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return u}));var r=e("2w0b"),a=e.n(r),i=(e("KC0O"),a.a.createElement);function u(){return i("div",{className:"robot-chat-loading"},i("i",null),i("i",null),i("i",null),i("i",null),i("i",null))}},iczh:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function a(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var u=a.apply(null,r);u&&n.push(u)}else if("object"===i)for(var c in r)e.call(r,c)&&r[c]&&n.push(c)}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(n.exports=r)}()}},[["PVNZ",1,0,2]]]);