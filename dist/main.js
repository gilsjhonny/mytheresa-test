(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{25:function(e,n,t){"use strict";(function(e){var r=t(26),o=t.n(r),i=t(27),a=t.n(i),c=t(0),u=t.n(c),s=t(11),l=t(1),f=t(14),p=t.n(f)()((function(n){return a()({id:"./pages/",load:function(){return Promise.all([t(46)("./".concat(n.page))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"./pages/".concat(n.page))},resolve:function(){return t(47).resolve("./".concat(n.page))},chunkName:function(){return"pages/".concat(n.page)}})}),{ignoreBabelRename:!0});n.a=function(){return u.a.createElement("div",null,u.a.createElement("nav",null,u.a.createElement(s.b,{to:"/home"},"Home"),u.a.createElement(s.b,{to:"/movie"},"Movie"),u.a.createElement(s.b,{to:"/wishlist"},"Wishlist")),u.a.createElement(l.c,null,u.a.createElement(l.a,{exact:!0,path:"/"},u.a.createElement(p,{page:"Home"})),u.a.createElement(l.a,{exact:!0,path:"/home"},u.a.createElement(p,{page:"Home"})),u.a.createElement(l.a,{path:"/movie"},u.a.createElement(p,{page:"Movie"})),u.a.createElement(l.a,{path:"/wishlist"},u.a.createElement(p,{page:"Wishlist"}))))}}).call(this,"/")},32:function(e,n,t){e.exports=t(52)},37:function(e,n,t){},40:function(e,n,t){var r={".":13,"./":13,"./index":13,"./index.js":13};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=40},46:function(e,n,t){var r={"./":[12,9,0],"./Home":[7,9,1],"./Home/":[7,9,1],"./Home/index":[7,9,1],"./Home/index.js":[7,9,1],"./Home/index.sass":[29,7,6],"./Movie":[8,9,2],"./Movie/":[8,9,2],"./Movie/index":[8,9,2],"./Movie/index.js":[8,9,2],"./Movie/index.sass":[30,7,7],"./Wishlist":[9,9,3],"./Wishlist/":[9,9,3],"./Wishlist/index":[9,9,3],"./Wishlist/index.js":[9,9,3],"./Wishlist/index.sass":[31,7,8],"./index":[12,9,0],"./index.js":[12,9,0]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[2]).then((function(){return t.t(o,n[1])}))}o.keys=function(){return Object.keys(r)},o.id=46,e.exports=o},47:function(e,n,t){var r={"./":12,"./Home":7,"./Home/":7,"./Home/index":7,"./Home/index.js":7,"./Home/index.sass":29,"./Movie":8,"./Movie/":8,"./Movie/index":8,"./Movie/index.js":8,"./Movie/index.sass":30,"./Wishlist":9,"./Wishlist/":9,"./Wishlist/index":9,"./Wishlist/index.js":9,"./Wishlist/index.sass":31,"./index":12,"./index.js":12};function o(e){var n=i(e);if(!t.m[n]){var r=new Error("Module '"+e+"' ('"+n+"') is not available (weak dependency)");throw r.code="MODULE_NOT_FOUND",r}return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,o.id=47,e.exports=o},50:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(24),a=t.n(i),c=t(28),u=t(11),s=(t(37),t(25));t(50);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=y(e);if(n){var o=y(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return v(this,t)}}function v(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?h(e):n}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var x,E=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(a,e);var n,t,r,i=d(a);function a(){var e;f(this,a);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return b(h(e=i.call.apply(i,[this].concat(t))),"state",{}),e}return n=a,(t=[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement(s.a,null))}}])&&p(n.prototype,t),r&&p(n,r),a}(o.a.Component);x=E,a.a.hydrate(o.a.createElement(c.AppContainer,null,o.a.createElement(x,null)),document.getElementById("react-root"))}},[[32,4,9]]]);