(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{72:function(e,t,J){},73:function(e,t,J){"use strict";J.r(t);var n=J(1),c=J.n(n),i=J(9),S=J.n(i),A=J(5),m=J(6),a=J(4),r=J(20),s=J.n(r).a.create({baseURL:"https://api.themoviedb.org/3"}),o=J(21),u=J(0);var l=function(e){var t=e.movie,J=e.isLargeRow,n=e.onClick;return Object(u.jsxs)("div",{className:"movie__container",onClick:n,children:[Object(u.jsx)(o.LazyLoadImage,{className:"movie__poster",src:"".concat("https://image.tmdb.org/t/p/original").concat(J?null===t||void 0===t?void 0:t.poster_path:(null===t||void 0===t?void 0:t.backdrop_path)||(null===t||void 0===t?void 0:t.poster_path)),alt:t.name||t.title}),Object(u.jsx)("p",{children:t.name||t.title})]},t.id)},E=J(22),w=J(25),M=J.n(w);var v=function(e){var t=e.title,J=e.fetchUrl,c=e.isLargeRow,i=Object(n.useState)([]),S=Object(a.a)(i,2),r=S[0],o=S[1],w=Object(n.useState)(""),v=Object(a.a)(w,2),d=v[0],h=v[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(Object(A.a)().mark((function e(){var t;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get(J);case 2:return t=e.sent,o(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[J]),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("div",{className:"row__posters",children:r.map((function(e){return Object(u.jsx)(l,{movie:e,isLargeRow:c,onClick:function(t){return function(e,t){d?h(""):M()((null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)).then((function(e){if(e){var t=new URLSearchParams(new URL(e).search);h(t.get("v"))}}))}(0,e)}},e.id)}))}),d&&Object(u.jsx)(E.a,{opts:{width:"100%",height:"390px",playerVars:{autoplay:1}},videoId:d},d)]})},d="ef3a446fdd6cff689b3feced7e1979cd",h={fetchTrending:"/trending/all/week?api_key=".concat(d,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(d,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(d),fetchActionMovies:"/discover/movie?api_key=".concat(d,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(d,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(d,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(d,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(d,"&with_genres=99")};J(72);var b=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),J=t[0],c=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(u.jsxs)("div",{className:"banner__nav ".concat(J&&"nav__black"),children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAEsCAYAAAAfPc2WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUY3RDFCNTVGQkQ2MTFFMzkzOEFEMjQyQzk1MUFERDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUY3RDFCNTZGQkQ2MTFFMzkzOEFEMjQyQzk1MUFERDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRjdEMUI1M0ZCRDYxMUUzOTM4QUQyNDJDOTUxQURENyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRjdEMUI1NEZCRDYxMUUzOTM4QUQyNDJDOTUxQURENyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlOkGwoAAB2DSURBVHja7d15lFzV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",alt:"Netflix Logo"})}),Object(u.jsx)("div",{className:"avatar",children:Object(u.jsx)("a",{href:"",children:"Sign up/Login"})})]})};var j=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),J=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(Object(A.a)().mark((function e(){var t,J;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get(h.fetchNetflixOriginals);case 2:return t=e.sent,J=Math.floor(Math.random()*t.data.results.length-1),c(t.data.results[J]),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("header",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===J||void 0===J?void 0:J.backdrop_path,'")')},children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{className:"banner__fader",children:Object(u.jsxs)("div",{className:"banner__details",children:[Object(u.jsx)("h1",{children:(null===J||void 0===J?void 0:J.name)||(null===J||void 0===J?void 0:J.title)||(null===J||void 0===J?void 0:J.original_name)}),Object(u.jsxs)("div",{className:"banner__buttons",children:[Object(u.jsx)("button",{className:"banner__button",children:"Play"}),Object(u.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(u.jsx)("p",{className:"banner__description",children:J.overview})]})})]})};var k=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{}),Object(u.jsx)(v,{title:"Netflix Originals",fetchUrl:h.fetchNetflixOriginals,isLargeRow:!0}),Object(u.jsx)(v,{title:"Trending",fetchUrl:h.fetchTrending}),Object(u.jsx)(v,{title:"Top Rated",fetchUrl:h.fetchTopRated}),Object(u.jsx)(v,{title:"Action Movies",fetchUrl:h.fetchActionMovies}),Object(u.jsx)(v,{title:"Comedy Movies",fetchUrl:h.fetchComedyMovies}),Object(u.jsx)(v,{title:"Horror Movies",fetchUrl:h.fetchHorrorMovies}),Object(u.jsx)(v,{title:"Romance Movies",fetchUrl:h.fetchRomanceMovies}),Object(u.jsx)(v,{title:"Documentaries",fetchUrl:h.fetchDocumentaries})]})};S.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.d9f9ac99.chunk.js.map