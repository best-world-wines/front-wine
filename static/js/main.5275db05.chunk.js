(this["webpackJsonpfront-wine"]=this["webpackJsonpfront-wine"]||[]).push([[0],{67:function(e,c,n){},68:function(e,c,n){},70:function(e,c,n){},73:function(e,c,n){},75:function(e,c,n){},76:function(e,c,n){},77:function(e,c,n){},78:function(e,c,n){},79:function(e,c,n){},80:function(e,c,n){},81:function(e,c,n){},82:function(e,c,n){},83:function(e,c,n){},88:function(e,c,n){},92:function(e,c,n){"use strict";n.r(c);var t=n(13),s=(n(67),n(6)),i=(n(68),n(5)),a=n(0),r=(n(70),n(57)),j=n(27),l=(n(71),n(72),n(73),n(1)),o=[{src:"img/1.jpeg",id:"1"},{src:"img/2.jpeg",id:"2"},{src:"img/3.jpeg",id:"3"},{src:"img/4.jpeg",id:"4"},{src:"img/1.jpeg",id:"5"},{src:"img/2.jpeg",id:"6"},{src:"img/3.jpeg",id:"7"},{src:"img/4.jpeg",id:"8"},{src:"img/1.jpeg",id:"9"},{src:"img/2.jpeg",id:"10"}],d=function(){var e=Object(a.useState)(null),c=Object(s.a)(e,2);c[0],c[1];return Object(l.jsx)("div",{className:"slider-component",children:Object(l.jsx)(r.a,{modules:[j.b,j.c,j.a],centeredSlides:!0,navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},spaceBetween:20,slidesPerView:1,children:o.map((function(e){return Object(l.jsx)(r.b,{children:Object(l.jsx)(t.b,{to:"wines",children:Object(l.jsx)("img",{alt:"wine",src:e.src,className:"slider-component__img"})})},e.id)}))})})},b=(n(75),function(){return Object(l.jsx)("section",{className:"in-vino",children:Object(l.jsx)("h1",{className:"in-vino__title",children:"In vino veritas in aqua sanitas"})})}),m=(n(76),function(e){return Object(l.jsx)("div",{className:"container-wrap",children:e.children})}),h=(n(77),[{id:1,name:"Wine",src:"wine.jpg",url:"wine"},{id:2,name:"Champange",src:"champage.jpg",url:"champage"},{id:3,name:"Sparkling wine",src:"sprakling.jpg",url:"sprakling"}]),u=function(){return Object(l.jsx)(m,{children:Object(l.jsxs)("section",{className:"category",children:[Object(l.jsx)("h2",{className:"category__title",children:"Shop category"}),Object(l.jsx)("div",{className:"category__wrap",children:h.map((function(e){return Object(l.jsx)(t.b,{to:"/".concat(e.url),style:{textDecoration:"none"},children:Object(l.jsxs)("div",{className:"category-card",children:[Object(l.jsx)("img",{src:"img/category/".concat(e.src),alt:e.name,className:"category-card__img"}),Object(l.jsx)("h3",{className:"category-card__title",children:e.name})]},e.id)},e.id)}))})]})})},O=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{children:Object(l.jsx)("div",{className:"homepage",children:Object(l.jsxs)("div",{className:"homepage__wrap",children:[Object(l.jsxs)("div",{className:"homepage__text",children:[Object(l.jsx)("h1",{className:"homepage__title",children:"Title for wine"}),Object(l.jsx)("p",{className:"homepage__description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis dignissimos corrupti magnam, exercitationem ipsum."}),Object(l.jsx)(t.b,{to:"wines",className:"homepage__link",children:"By now"})]}),Object(l.jsx)("div",{className:"homepage__slider",children:Object(l.jsx)(d,{})})]})})}),Object(l.jsx)(b,{}),Object(l.jsx)(u,{})]})},x=(n(78),n(79),function(e){var c=e.wine,n=c.name,t=c.type,s=c.price,i=c.bouttleVolume,a=c.year,r=c.coutry,j=c.region,o=c.mainImage;return Object(l.jsx)("div",{className:"wine-card",children:Object(l.jsxs)("div",{className:"wine-card__wrap",children:[Object(l.jsxs)("div",{className:"wine-card__left",children:[Object(l.jsx)("img",{src:o,alt:n,className:"wine-card__img"}),Object(l.jsx)("h3",{className:"wine-card__title",children:n}),Object(l.jsx)("div",{className:"wine-card__type",children:t}),Object(l.jsxs)("div",{className:"wine-card__region",children:[j," ",a," ",r]})]}),Object(l.jsxs)("div",{className:"wine-card__right",children:[Object(l.jsxs)("div",{className:"wine-card__price",children:["pice:",Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"wine-card__price--number",children:s})]}),Object(l.jsxs)("div",{className:"wine-card__volume",children:["volume:",Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"wine-card__volume--number",children:i})]}),Object(l.jsx)("button",{className:"wine-card__buy",children:"buy"})]})]})})}),p=function(e){var c=e.wine,n=e.setOneWine;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(m,{children:[Object(l.jsx)("div",{children:"Test"}),Object(l.jsx)("div",{className:"winelist__title",children:"WinesList"}),Object(l.jsx)("div",{className:"winelist__wrap",children:c.map((function(e){return Object(l.jsx)("div",{className:"winelist__card",children:Object(l.jsx)(t.b,{to:"/wines/".concat(e.id),style:{textDecoration:"none"},onClick:function(){n(e)},children:Object(l.jsx)(x,{wine:e})})},e.id)}))})]})})},_=(n(80),function(){return Object(l.jsx)("div",{children:"NotFoundPage"})}),g=n(61),v=n.n(g),w=function(e){var c=e.to,n=e.text;return Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(t.c,{to:c,className:function(e){var c=e.isActive;return v()("nav__link",{"nav__link--active":c})},children:n})})},f=(n(81),n(82),function(){return Object(l.jsx)("img",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"logo",src:"img/logo.svg",alt:"wine"})}),N=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(f,{}),Object(l.jsx)("nav",{className:"header__nav nav",children:Object(l.jsxs)("ul",{className:"nav__list",children:[Object(l.jsx)(w,{to:"/",text:"Home"}),Object(l.jsx)(w,{to:"wines",text:"Wines"})]})})]})},y=n(107),k=n(109),B=n.p+"static/media/bread.d85e171c.svg",W=(n(83),[{path:"/",name:"Home",showBreadcrumb:!1},{path:"/wines",name:"Wines",showBreadcrumb:!0},{path:"wines/1",name:"Wines > 1",showBreadcrumb:!0}]),S=function(){var e=Object(i.m)(),c=Object(i.r)(W.map((function(e){return{path:e.path,element:e.showBreadcrumb?Object(l.jsx)(k.a,{variant:"body1",children:e.name}):null}})));return Object(l.jsx)("div",{className:"breadcrumbs",children:Object(l.jsxs)(y.a,{separator:">",children:["/"!==e.pathname&&Object(l.jsx)(t.b,{to:"/",children:Object(l.jsx)("img",{className:"breadcrumbs__icon",src:B,alt:"bread"})}),c]})})},C=(n(88),function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)(f,{}),Object(l.jsxs)("div",{className:"footer__links",children:[Object(l.jsx)(t.b,{className:"footer__links-link",to:"https://github.com/best-world-wines",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),Object(l.jsx)(t.b,{className:"footer__links-link",to:"/contact_us",children:"Contact"}),Object(l.jsx)(t.b,{className:"footer__links-link",to:"/license",children:"License"})]}),Object(l.jsx)("button",{className:"footer__button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"\u2191"})]})}),I=function(){return Object(l.jsx)(m,{children:Object(l.jsx)("h1",{children:"Header"})})},H=function(){var e=Object(a.useState)([]),c=Object(s.a)(e,2),n=c[0],t=c[1],r=Object(a.useState)({}),j=Object(s.a)(r,2),o=(j[0],j[1]);return Object(a.useEffect)((function(){fetch("https://api.wine.exisvitae.com/api/v1/wines/pages").then((function(e){return e.json()})).then((function(e){t(e.productsDto)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(N,{}),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)(S,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(O,{})}),Object(l.jsx)(i.b,{path:"wines",element:Object(l.jsx)(p,{wine:n,setOneWine:o})}),Object(l.jsx)(i.b,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(_,{})}),Object(l.jsx)(i.b,{path:"wines/:vineId",element:Object(l.jsx)(I,{})})]})]}),Object(l.jsx)(C,{})]})},T=n(63);n.n(T).a.render(Object(l.jsx)(t.a,{children:Object(l.jsx)(H,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.5275db05.chunk.js.map