(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"79JR":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return c}));var r=e("2w0b"),a=e.n(r),u=(e("UBOE"),a.a.createElement);function c(n){return u("div",{className:"robot-chat-head"},"\u5c0f\u5bd2")}},"8EMx":function(n,t,e){"use strict";e.r(t);var r=e("r6tY"),a=e.n(r),u=e("u20+"),c=e.n(u),i=e("ZxvJ"),o=e.n(i),l=e("Ah5Y"),f=e.n(l),s=e("w2yW"),v=e.n(s),b=e("AkfJ"),d=e.n(b),p=e("CvBr"),h=e("2w0b"),m=e.n(h),y=e("Hcux"),w=e("Mudp"),g=e("l1Ty"),j=e("79JR"),O=(e("L6t4"),m.a.createElement);function E(n,t){var e=d()(n);if(v.a){var r=v()(n);t&&(r=r.filter((function(t){return f()(n,t).enumerable}))),e.push.apply(e,r)}return e}function N(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?E(Object(e),!0).forEach((function(t){Object(p.a)(n,t,e[t])})):o.a?c()(n,o()(e)):E(Object(e)).forEach((function(t){a()(n,t,f()(e,t))}))}return n}function C(n){var t=n.currentChat,e=n.initChat,r=n.clearChats,a=n.robotReply,u=n.getSelects;return Object(h.useEffect)((function(){return e(),function(){return r()}}),[]),Object(h.useEffect)((function(){t&&("user"===t.role&&a(t.chatId),"robot"===t.role&&u(t.chatId))}),[t]),O("div",{className:"robot-page"},O("div",{className:"robot-panel"},O(j.default,null),O(w.default,null),O(g.default,null)))}C.getInitialProps=function(){return{navigator:!1}};t.default=Object(y.b)((function(n){return N({},n.robotModel)}),(function(n){return N({},n.robotModel)}))(C)},"9m3z":function(n,t,e){"use strict";e.r(t);var r=e("2w0b"),a=e.n(r),u=e("iczh"),c=e.n(u),i=(e("4c5X"),a.a.createElement);t.default=a.a.memo((function(n){var t=n.choose,e=n.onChange,a=n.visible,u=n.onCancel,o=Object(r.useState)(a),l=o[0],f=o[1];return Object(r.useEffect)((function(){var n;return a?f(!0):n=setTimeout((function(){return f(!1)}),250),function(){return clearTimeout(n)}}),[a]),l?i("div",{className:c()("robot-selects-panel",a?"show":"hidden")},i("div",{className:"selects-list"},t.map((function(n){return i("div",{key:n.label,className:"select-item",onClick:function(){return e(n.value)}},n.label)}))),i("div",{className:"selects-panel-mask",onClick:function(){return u()}})):null}))},Mudp:function(n,t,e){"use strict";e.r(t);var r=e("r6tY"),a=e.n(r),u=e("u20+"),c=e.n(u),i=e("ZxvJ"),o=e.n(i),l=e("Ah5Y"),f=e.n(l),s=e("w2yW"),v=e.n(s),b=e("AkfJ"),d=e.n(b),p=e("CvBr"),h=e("2w0b"),m=e.n(h),y=e("iczh"),w=e.n(y),g=e("Hcux"),j=e("c22y"),O=(e("CBBb"),m.a.createElement);function E(n,t){var e=d()(n);if(v.a){var r=v()(n);t&&(r=r.filter((function(t){return f()(n,t).enumerable}))),e.push.apply(e,r)}return e}function N(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?E(Object(e),!0).forEach((function(t){Object(p.a)(n,t,e[t])})):o.a?c()(n,o()(e)):E(Object(e)).forEach((function(t){a()(n,t,f()(e,t))}))}return n}t.default=Object(g.b)((function(n){return N({},n.robotModel)}),(function(n){return N({},n.robotModel)}))((function(n){var t=n.chats,e=n.status,r=Object(h.useRef)(null),a=Object(h.useRef)(null);return Object(h.useEffect)((function(){var n;if(r&&a){var t=a.current.offsetHeight;n=setTimeout((function(){return r.current.scrollTo(0,t)}),0)}return function(){return clearTimeout(n)}}),[t]),O("div",{className:"chat-panel",ref:r},O("div",{className:"chat-list",ref:a},t.map((function(n,t){var e=n.content,r=n.role,a=n.id;if("string"!==typeof e&&!(e instanceof Array)&&"status"===e.type){var u=e.status;return O("div",{key:"".concat(a,"-").concat(t),className:w()("chat-status",u)},function(n){return{offline:"\u5bf9\u65b9\u5df2\u79bb\u7ebf",online:"\u5bf9\u65b9\u5df2\u4e0a\u7ebf"}[n]}(u))}return O("div",{key:a,className:w()("chat-item",r)},O("div",{className:"chat-content-wrapper"},O("div",{className:"chat-content"},function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t.type){var r=t.type,a=t.src,u=void 0===a?"":a,c=t.text,i=void 0===c?"":c,o=t.href,l=void 0===o?"":o;if("img"===r)return O("img",{src:u,key:e});if("link"===r)return O("a",{href:l,key:e,target:"_new"},i);if("text"===r)return O("span",null,i);if("label"===r)return O("span",null,i)}if(t instanceof Array)return t.map((function(t,e){return n(t,e)}))}(e))))})),"inputing"===e&&O("div",{className:w()("chat-item robot","inputing"===e&&"expand")},O("div",{className:"chat-content-wrapper"},O("div",{className:"chat-content"},O(j.default,null))))))}))},c22y:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return c}));var r=e("2w0b"),a=e.n(r),u=(e("KC0O"),a.a.createElement);function c(){return u("div",{className:"robot-chat-loading"},u("i",null),u("i",null),u("i",null),u("i",null),u("i",null))}},iczh:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function a(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var u=typeof r;if("string"===u||"number"===u)n.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&n.push(c)}else if("object"===u)for(var i in r)e.call(r,i)&&r[i]&&n.push(i)}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(n.exports=r)}()},l1Ty:function(n,t,e){"use strict";e.r(t);var r=e("r6tY"),a=e.n(r),u=e("u20+"),c=e.n(u),i=e("ZxvJ"),o=e.n(i),l=e("Ah5Y"),f=e.n(l),s=e("w2yW"),v=e.n(s),b=e("AkfJ"),d=e.n(b),p=e("CvBr"),h=e("2w0b"),m=e.n(h),y=e("Hcux"),w=e("9m3z"),g=(e("1Cjw"),m.a.createElement);function j(n,t){var e=d()(n);if(v.a){var r=v()(n);t&&(r=r.filter((function(t){return f()(n,t).enumerable}))),e.push.apply(e,r)}return e}function O(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?j(Object(e),!0).forEach((function(t){Object(p.a)(n,t,e[t])})):o.a?c()(n,o()(e)):j(Object(e)).forEach((function(t){a()(n,t,f()(e,t))}))}return n}t.default=Object(y.b)((function(n){return O({},n.robotModel)}),(function(n){return O({},n.robotModel)}))((function(n){var t=n.status,e=n.selects,r=n.userReply,a=Object(h.useState)(!1),u=a[0],c=a[1];return g(m.a.Fragment,null,"waiting"===t&&g("div",{className:"robot-input-area",onClick:function(){c(!0)}},"\u8bf7\u8f93\u5165..."),"waiting"!==t&&g("div",{className:"robot-info-area"},function(n){return{offline:"\u5c0f\u5bd2\u5df2\u79bb\u7ebf...",action:"\u5c0f\u5bd2\u64cd\u4f5c\u4e2d...",inputing:"\u5c0f\u5bd2\u6b63\u5728\u8f93\u5165\u4e2d..."}[n]}(t)),g(w.default,{choose:e,visible:u,onChange:function(n){r(n),c(!1)},onCancel:function(){c(!1)}}))}))},pZto:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/robot",function(){return e("8EMx")}])}},[["pZto",1,0,2]]]);