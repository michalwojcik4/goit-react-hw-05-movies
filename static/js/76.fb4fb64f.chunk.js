"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{713:function(t,e,n){n.d(e,{Df:function(){return s},M1:function(){return _},TP:function(){return f},tx:function(){return l},z1:function(){return p}});var r=n(861),c=n(757),a=n.n(c),o=n(243),u={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,i="https://api.themoviedb.org/3",s=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u,"&page=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e,n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e,"&page=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},328:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(439),c=n(791),a=n(689),o=n(713),u="Cast_list__GlWio",i="Cast_list__item__6kI+k",s="Cast_list__img__PHIDR",p="Cast_list__noimg__lH7lj",f=n(184),_=function(){var t=(0,a.UO)().movieId,e=(0,c.useState)([]),n=(0,r.Z)(e,2),_=n[0],l=n[1];return(0,c.useEffect)((function(){(0,o.M1)(t).then((function(t){l(t.cast)}))}),[t]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:u,children:_.map((function(t){return(0,f.jsxs)("li",{className:i,children:[t.profile_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:_.name,className:s}):(0,f.jsx)("div",{className:p,children:"No Image"}),(0,f.jsx)("p",{children:t.name})]},t.id)}))})})}}}]);
//# sourceMappingURL=76.fb4fb64f.chunk.js.map