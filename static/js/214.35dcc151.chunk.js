"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[214],{76:function(e,t,r){r.r(t),r.d(t,{TermContext:function(){return p},default:function(){return x}});var n=r(433),a=r(439),u=r(791),c=r(87),o=r(771),s=r(713),i=r(744),h="SearchTerm_form__VTBd0",f="SearchTerm_form__button__Er2pJ",l="SearchTerm_form__input__AoIjH",_=r(184);function m(){var e=(0,u.useContext)(p),t=e.handleSearch,r=e.searchTerm,n=e.setSearchTerm;return(0,_.jsxs)("form",{onSubmit:t,className:h,children:[(0,_.jsx)("button",{type:"submit",className:f,children:"Search"}),(0,_.jsx)("input",{className:l,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search for a movie...",value:r,onChange:function(e){return n(e.target.value)}})]})}var d=r(883),v="Movies_conteiner__cFPtt",p=(0,u.createContext)(),x=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],h=t[1],f=(0,u.useState)(""),l=(0,a.Z)(f,2),x=l[0],S=l[1],j=(0,u.useState)(1),T=(0,a.Z)(j,2),Z=T[0],g=T[1],C=(0,c.lr)(),b=(0,a.Z)(C,2),w=b[0],k=b[1],y=w.get("query");(0,u.useEffect)((function(){y&&(0,s.z1)(y,Z).then((function(e){h((function(t){return function(e,t){return(0,n.Z)(new Map(e.map((function(e){return[t(e),e]}))).values())}([].concat((0,n.Z)(t),(0,n.Z)(e.results)),(function(e){return e.id}))}))}))}),[y,Z]);return(0,_.jsxs)(o.Z,{className:v,dataLength:r.length,next:function(){g(Z+1)},hasMore:!0,loader:(0,_.jsx)(d.a,{}),children:[(0,_.jsx)(p.Provider,{value:{searchTerm:x,setSearchTerm:S,handleSearch:function(e){e.preventDefault(),""!==x&&(k({query:x}),h([]))}},children:(0,_.jsx)(m,{})}),r&&(0,_.jsx)(i.O,{data:r})]})}}}]);
//# sourceMappingURL=214.35dcc151.chunk.js.map