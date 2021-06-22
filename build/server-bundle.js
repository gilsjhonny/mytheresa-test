!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("webpack")},function(e,t,n){(function(t){var r=n(5),o=n(3),a=n(14).BundleAnalyzerPlugin,i=n(15);n(16);e.exports={entry:{main:["webpack-hot-middleware/client?reload=true","./src/index.js"]},mode:"development",output:{filename:"[name]-bundle.js",path:r.resolve(t,"../dist"),publicPath:"/"},devServer:{contentBase:"dist",overlay:!0,hot:!0,stats:{colors:!0}},devtool:"source-map",module:{rules:[{test:/\.(js|jsx)$/,exclude:/node_modules/,use:[{loader:"babel-loader"}]},{test:/\.sass$/,use:[i.loader,"css-loader","resolve-url-loader",{loader:"postcss-loader"},{loader:"sass-loader",options:{implementation:n(17)}}]},{test:/\.(woff|woff2|eot|ttf|otf)$/,use:[{loader:"file-loader"}]}]},plugins:[new i,new o.HotModuleReplacementPlugin,new a({generateStatsFile:!0})]}}).call(this,"/")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-static-gzip")},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,n){e.exports=n(12)},function(e,t,n){n(13),n(25)},function(e,t){e.exports=require("@babel/register")},function(e,t){e.exports=require("webpack-bundle-analyzer")},function(e,t){e.exports=require("mini-css-extract-plugin")},function(e,t){e.exports=require("html-webpack-plugin")},function(e,t){e.exports=require("sass")},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n.n(a),c=(n(4),n(7)),l=n.n(c),u=n(8),s=n.n(u),f=(n(5),n(3),n(9),n(10),n(1)),p=n.n(f),d=n(2),m=n.n(d),y=(n(18),function(e){var t=e.children,n=e.className,r=e.leadingElement,a=e.onClick,i=e.trailingElement,c=m()("Button",n);return o.a.createElement("button",{className:c,onClick:function(){return a&&a()}},r&&r,t,i&&i)});y.propTypes={children:p.a.node,className:p.a.node,leadingElement:p.a.node,onClick:p.a.func,trailingElement:p.a.node};var v=y,b=(n(19),function(e){var t=e.alreadyAdded,n=e.compact,r=e.onClick,a=m()("AddToWishlistButton__text",{"AddToWishlistButton__text--gray":t}),i=function(){return o.a.createElement("span",{className:"AddToWishlistButton__icon"},o.a.createElement("svg",{viewBox:"0 0 38 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M35.3123 40.4996C34.2767 40.4996 33.4373 41.3391 33.4373 42.3746C33.4373 42.8974 33.2602 43.3372 32.9109 43.6822C32.5443 44.0441 32.0125 44.2538 31.4923 44.2497C30.979 44.2432 30.5624 44.0683 30.2185 43.7149L20.3437 33.567C19.9907 33.2043 19.5061 32.9996 19 32.9996C18.4939 32.9996 18.0092 33.2043 17.6563 33.567L7.7814 43.7149C7.44006 44.0657 7.02034 44.2406 6.49834 44.2498C5.9724 44.2606 5.443 44.0511 5.07896 43.6933C4.73631 43.3567 4.56259 42.924 4.56259 42.4072V7.49991C4.56259 5.43216 6.24484 3.74991 8.31259 3.74991H29.6873C31.7551 3.74991 33.4373 5.43216 33.4373 7.49991V33.0934C33.4373 34.1289 34.2767 34.9684 35.3123 34.9684C36.3479 34.9684 37.1873 34.1289 37.1873 33.0934V7.49991C37.1872 3.3645 33.8228 0 29.6873 0H8.31259C4.17709 0 0.812683 3.3645 0.812683 7.49991V42.4072C0.812683 43.9236 1.3945 45.3303 2.45087 46.3682C3.50968 47.4084 4.9675 48 6.4645 48C6.49778 48 6.53115 47.9997 6.56443 47.9992C8.08234 47.9724 9.43243 47.3953 10.4689 46.33L19 37.5631L27.5311 46.33C28.5751 47.4029 29.9284 47.9801 31.4448 47.9993C32.967 48.015 34.465 47.4177 35.5457 46.3505C36.6043 45.3052 37.1872 43.8932 37.1872 42.3746C37.1873 41.3391 36.3479 40.4996 35.3123 40.4996Z",fill:"white"})))};return o.a.createElement(v,{className:"AddToWishlistButton",leadingElement:o.a.createElement(i,null),onClick:r},!n&&o.a.createElement("span",{className:a},"Add".concat(t?"ed":""," to Wishlist")))});b.propTypes={alreadyAdded:p.a.bool,compact:p.a.bool,onClick:p.a.func};var h=b,w=function(){return o.a.createElement("svg",{viewBox:"0 0 281 445",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M270.025 196.712L83.884 10.848C77.029 3.615 68.469 0 58.187 0C47.905 0 39.345 3.619 32.49 10.848L10.792 32.264C3.74805 39.307 0.226044 47.868 0.226044 57.956C0.226044 67.853 3.74705 76.516 10.792 83.937L149.545 222.41L10.786 361.168C3.74405 368.211 0.222046 376.772 0.222046 386.861C0.222046 396.757 3.74305 405.423 10.786 412.841L32.486 434.254C39.529 441.297 48.098 444.818 58.183 444.818C68.272 444.818 76.8391 441.297 83.8801 434.254L270.025 248.39C277.071 240.967 280.596 232.306 280.596 222.409C280.597 212.321 277.071 203.755 270.025 196.712Z",fill:"currentColor"}))};n(20);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(i,e);var t,n,r,a=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).carouselViewport=o.a.createRef(),t.carouselViewportContent=o.a.createRef(),t.state={offset:0,viewportWidth:0,viewportContentWidth:0},t}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this.carouselViewport.current.clientWidth,t=this.carouselViewportContent.current.clientWidth;this.setState({viewportWidth:e,viewportContentWidth:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.steps,a=this.state,i=a.viewportWidth,c=a.viewportContentWidth>i;return o.a.createElement("div",{className:"Carousel"},c&&o.a.createElement("button",{className:"Carousel__button--left",onClick:function(){return e.setState((function(e){return{offset:e.offset+r}}))}},o.a.createElement(w,null)),o.a.createElement("div",{className:"Carousel__viewport",ref:this.carouselViewport},o.a.createElement("div",{className:"Carousel__viewport__content",ref:this.carouselViewportContent,style:{transform:"translateX(".concat(this.state.offset,"px)")}},n)),c&&o.a.createElement("button",{className:"Carousel__button--right",onClick:function(){return e.setState((function(e){return{offset:e.offset-r}}))}},o.a.createElement(w,null)))}}])&&_(t.prototype,n),r&&_(t,r),i}(o.a.Component);j.propTypes={children:p.a.node,steps:p.a.number};var P=j,S=(n(21),function(e){var t=e.title,n=void 0===t?"No Title":t,r=e.date,a=void 0===r?"Unknown":r;return o.a.createElement("div",{className:"MovieCard"},o.a.createElement("div",{className:"MovieCard__thumbnail-container"},o.a.createElement("img",{alt:"movie-poster",src:"https://www.themoviedb.org/t/p/w500/nyDU092PeGGcd6wUIzlhFoaWcyX.jpg"})),o.a.createElement("div",{className:"MovieCard__info"},o.a.createElement("span",{className:"MovieCard__info__title"},n),o.a.createElement("span",{className:"MovieCard__info__date"},a)))}),k=(n(22),function(){return o.a.createElement("div",{className:"Home"},o.a.createElement("h1",{className:"Home__title"},"Home"),o.a.createElement(S,null),o.a.createElement(h,null),o.a.createElement(h,{compact:!0}),o.a.createElement(h,{alreadyAdded:!0}),o.a.createElement(P,{steps:220},o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null)))});n(23),n(24);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=A(e);if(t){var o=A(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(i,e);var t,n,r,a=B(i);function i(){var e;R(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return L(M(e=a.call.apply(a,[this].concat(n))),"state",{}),e}return t=i,(n=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k,null))}}])&&T(t.prototype,n),r&&T(t,r),i}(o.a.Component),H=l()();H.use(s()("dist",{enableBrotli:!0,orderPreference:["br","gz"]})),H.get("*",(function(e,t){t.send('\n  <html>\n    <head>\n      <link href="server.css" rel="stylesheet" />\n    </head>\n    <body>\n      <div id="react-root">\n        '.concat(i.a.renderToString(o.a.createElement(V,null)),'\n      </div>\n      <script src="vendors-bundle.js"><\/script>\n      <script src="main-bundle.js"><\/script>\n    </body>\n  </html>  \n  '))})),H.listen(process.env.PORT||8080,(function(){console.log("Server is listening")}))}]);