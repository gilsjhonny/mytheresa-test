(window.webpackJsonp=window.webpackJsonp||[]).push([[3,8],{56:function(e,t,a){},6:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),i=a(37),s=a.n(i),c=a(38),o=a.n(c),l=a(19),u=a.n(l),d=a(39),m=a.n(d),p=a(40),h=a.n(p),v=a(28),f=a.n(v),b=a(11),g=a.n(b),w=a(24),k=a.n(w),y=a(0),E=a.n(y),_=a(36),W=a(42),A=a(35);a(56);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}var O=function(e){m()(n,e);var t,a=N(n);function n(){var e;s()(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=a.call.apply(a,[this].concat(r)),g()(u()(e),"state",{movieDetails:void 0}),g()(u()(e),"handleAddOrRemoveFromWishlist",(function(){var t=e.props,a=t.addToWishlist,n=t.isAddedToWishlist,r=t.removeFromWishlist,i=e.state.movieDetails;n?r(i.id):a(i)})),e}return o()(n,[{key:"componentDidMount",value:(t=r()(k.a.mark((function e(){var t,a,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match,!(a=t&&t.params.id)){e.next=16;break}return e.prev=3,e.next=6,fetch("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=57c98f3bc2b2cd4213729ff48dc9c3e2&language=en-US"));case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,this.setState({movieDetails:{id:r.id,backdrop_path:"https://image.tmdb.org/t/p/original".concat(r.backdrop_path),overview:r.overview,poster_src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),genres:r.genres,release_date:r.release_date,title:r.title,vote_average:r.vote_average}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[3,13]])}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.isAddedToWishlist,t=this.state.movieDetails;if(!t)return null;var a=t.release_date.substr(0,4),n=t.genres.map((function(e){return e.name})).join(", ");return E.a.createElement("div",{className:"Movie"},E.a.createElement("div",{className:"backdrop-img",style:{backgroundImage:"url('".concat(t.backdrop_path,"')")}}),E.a.createElement(A.d,null,E.a.createElement("div",{className:"details"},E.a.createElement("div",{className:"details--left"},E.a.createElement(A.h,{className:"thumbnail",height:500,posterSrc:t.poster_src,width:320}),E.a.createElement(A.a,{alreadyAdded:e,onClick:this.handleAddOrRemoveFromWishlist})),E.a.createElement("div",{className:"details--right"},E.a.createElement("h1",null,t.title," ",E.a.createElement("span",null,"(",a,")")),E.a.createElement("div",{className:"genres"},n),E.a.createElement("h2",null,"Overview"),t&&E.a.createElement("p",null,t.overview)))),E.a.createElement(A.f,null))}}]),n}(E.a.Component);t.default=Object(_.b)((function(e,t){return{isAddedToWishlist:t.match&&!!e.wishlist.movies[t.match.params.id]}}),(function(e){return{addToWishlist:function(t){return e(Object(W.a)(t))},removeFromWishlist:function(t){return e(Object(W.b)(t))}}}))(O)}}]);