"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{713:function(e,t,r){r.d(t,{J:function(){return u}});var n=r(861),a=r(757),c=r.n(a),s=r(243),i=r(791),o="1f94c3a5b4000089afa1d5a1ae98ab1d",l="https://api.themoviedb.org/3",u=function(){var e=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(l,"/trending/movie/day?api_key=").concat(o,"&page=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),t=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(l,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=").concat(r));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),[]),r=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(l,"/movie/").concat(t,"?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),a=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(l,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),u=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(l,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{getTrendingMovies:e,searchMovies:t,getMovieDetails:r,getMovieCast:a,getMovieReviews:u}}},888:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o=r(689),l=r(87),u=r(713),_=r(883),v={container:"MovieDetails_container__o8VqJ",box:"MovieDetails_box__3lVdP",details:"MovieDetails_details__tmd20",details__img:"MovieDetails_details__img__74DKe",details__context:"MovieDetails_details__context__jDzKB",details__vote:"MovieDetails_details__vote__Qt+46",more_info_list:"MovieDetails_more_info_list__tk4CD",more_info_list__link:"MovieDetails_more_info_list__link__r4FPa"},p=r(184),d=function(){var e=(0,u.J)().getMovieDetails,t=(0,o.UO)().movieId,r=(0,i.useState)(null),c=(0,a.Z)(r,2),d=c[0],f=c[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(t);case 3:n=r.sent,f(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e,t]),(0,p.jsx)("div",{className:v.container,children:d?(0,p.jsxs)("div",{className:v.box,children:[(0,p.jsxs)("div",{className:v.details,children:[d.poster_path?(0,p.jsx)("img",{className:v.details__img,src:"https://image.tmdb.org/t/p/w500".concat(d.poster_path),alt:d.title}):(0,p.jsx)("div",{className:v.list__noimg,children:(0,p.jsx)("p",{children:"No Image"})}),(0,p.jsxs)("div",{className:v.details__context,children:[(0,p.jsxs)("h2",{children:[d.title," ",(0,p.jsxs)("span",{children:["(",d.release_date.slice(0,4),")"]})]}),(0,p.jsx)("p",{className:v.details__vote,children:Math.round(10*d.vote_average)/10}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:d.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:d.genres.map((function(e){return e.name})).join(" | ")})]})]}),(0,p.jsxs)("ul",{className:v.more_info_list,children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.OL,{to:"cast",className:v.more_info_list__link,style:function(e){return{color:e.isActive?"#FFF":"#000",backgroundColor:e.isActive?"rgb(72, 103, 195)":"#FFF"}},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.OL,{to:"reviews",className:v.more_info_list__link,style:function(e){return{color:e.isActive?"#FFF":"#000",backgroundColor:e.isActive?"rgb(72, 103, 195)":"#FFF"}},children:"Reviews"})})]}),(0,p.jsx)(o.j3,{})]}):(0,p.jsx)(_.a,{})})}}}]);
//# sourceMappingURL=888.7a707d70.chunk.js.map