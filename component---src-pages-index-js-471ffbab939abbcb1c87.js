(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("qhky"),c=(a("f3/d"),a("a1Th"),a("Btvt"),a("XfO3"),a("HEwt"),a("rGqo"),a("rE2o"),a("ioFf"),a("91GP"),a("7vrA")),o=a("/eHF"),s=a.n(o),i=n.a.createContext(),m=i.Provider,u=(i.Consumer,i),p=function(){var e=Object(r.useContext)(u).hero.cta,t=Object(r.useState)(!1),a=t[0],l=t[1],o=Object(r.useState)(!1),i=o[0],m=o[1];Object(r.useEffect)((function(){window.innerWidth>769?(l(!0),m(!1)):(m(!0),l(!1))}),[]);var p=["beautiful","delightful","amazing","fast","scalable","reliable"],f=Math.floor(Math.random()*p.length);return n.a.createElement("section",{id:"hero",className:"jumbotron"},n.a.createElement(c.a,{className:"hero-container"},n.a.createElement(s.a,{left:a,bottom:i,duration:1e3,delay:500,distance:"30px"},n.a.createElement("h1",{className:"hero-title"},"we design and build ",n.a.createElement("br",null),p[f]," web and mobile apps")),n.a.createElement(s.a,{left:a,bottom:i,duration:1e3,delay:1e3,distance:"30px"},n.a.createElement("p",{className:"hero-cta"},n.a.createElement("a",{className:"cta-btn cta-btn--hero",href:"#about"},e||"Know more")))))},f=(a("8+KV"),a("wx14")),b=a("zLVn"),E=a("TSYQ"),d=a.n(E),h=a("vUet"),v=["xl","lg","md","sm","xs"],w=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.noGutters,c=e.as,o=void 0===c?"div":c,s=Object(b.a)(e,["bsPrefix","className","noGutters","as"]),i=Object(h.a)(a,"row"),m=i+"-cols",u=[];return v.forEach((function(e){var t,a=s[e];delete s[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&u.push(""+m+r+"-"+t)})),n.a.createElement(o,Object(f.a)({ref:t},s,{className:d.a.apply(void 0,[r,i,l&&"no-gutters"].concat(u))}))}));w.displayName="Row",w.defaultProps={noGutters:!1};var g=w,y=["xl","lg","md","sm","xs"],N=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.as,c=void 0===l?"div":l,o=Object(b.a)(e,["bsPrefix","className","as"]),s=Object(h.a)(a,"col"),i=[],m=[];return y.forEach((function(e){var t,a,r,n=o[e];if(delete o[e],null!=n&&"object"==typeof n){var l=n.span;t=void 0===l||l,a=n.offset,r=n.order}else t=n;var c="xs"!==e?"-"+e:"";null!=t&&i.push(!0===t?""+s+c:""+s+c+"-"+t),null!=r&&m.push("order"+c+"-"+r),null!=a&&m.push("offset"+c+"-"+a)})),i.length||i.push(s),n.a.createElement(c,Object(f.a)({},o,{ref:t,className:d.a.apply(void 0,[r].concat(i,m))}))}));N.displayName="Col";var j=N,x=function(e){var t=e.title,a=e.upperSubtitle,r=e.lowerSubtitle;return n.a.createElement(s.a,{bottom:!0,duration:1e3,delay:300,distance:"0px"},n.a.createElement("h3",null,a),n.a.createElement("h2",{className:"section-title"},t),n.a.createElement("h3",null,r))},_=function(){var e=Object(r.useContext)(u).about,t=e.paragraphOne,a=e.paragraphTwo,l=Object(r.useState)(!1),o=l[0],i=l[1],m=Object(r.useState)(!1),p=m[0],f=m[1];return Object(r.useEffect)((function(){window.innerWidth>769?(i(!0),f(!1)):(f(!0),i(!1))}),[]),n.a.createElement("section",{id:"about"},n.a.createElement(c.a,null,n.a.createElement(x,{title:"Technical Co-Founders",upperSubtitle:"We are your"}),n.a.createElement(g,{className:"about-wrapper"},n.a.createElement(j,{md:12,sm:12},n.a.createElement(s.a,{left:o,bottom:p,duration:500,delay:100,distance:"30px"},n.a.createElement("div",{className:"about-wrapper__info"},n.a.createElement("p",{className:"about-wrapper__info-text"},t),n.a.createElement("p",{className:"about-wrapper__info-text"},a),n.a.createElement("p",{className:"hero-cta"},n.a.createElement("a",{className:"cta-btn cta-btn--about",href:"#about2"},"Who are we for?"))))))))},O=function(){var e,t=Object(r.useContext)(u).about2,a=t.title,l=t.paragraphOne,o=t.paragraphTwo,i=t.businesses,m=Object(r.useState)(!1),p=m[0],f=m[1],b=Object(r.useState)(!1),E=b[0],d=b[1];return Object(r.useEffect)((function(){window.innerWidth>769?(f(!0),d(!1)):(d(!0),f(!1))}),[]),i&&(e=i.map((function(e){return n.a.createElement("li",{key:e.id,className:"about2-business"},n.a.createElement("h2",{className:"about2-business-title"},e.title),n.a.createElement("h3",{className:"about2-business-subtitle"},e.subtitle),n.a.createElement("p",{className:"about2-business-description"},e.description))}))),n.a.createElement("section",{id:"about2"},n.a.createElement(c.a,null,n.a.createElement(g,{className:"about2-wrapper"},n.a.createElement(j,{md:6,sm:12,className:"about2-wrapper__left"},n.a.createElement("div",{className:"about-wrapper__info"},n.a.createElement("h1",null,a),n.a.createElement("p",{className:"about-wrapper__info-text"},l),n.a.createElement("p",{className:"about-wrapper__info-text"},o))),n.a.createElement(j,{md:6,sm:12,className:"about2-wrapper__right"},n.a.createElement(s.a,{left:p,bottom:E,duration:1e3,delay:100,distance:"30px"},n.a.createElement("div",{className:"about-wrapper__info"},e))))))},S=function(){var e=Object(r.useContext)(u).services,t=Object(r.useState)(!1),a=t[0],l=t[1],o=Object(r.useState)(!1),i=o[0],m=o[1];return Object(r.useEffect)((function(){window.innerWidth>769?(l(!0),m(!1)):(m(!0),l(!1))}),[]),n.a.createElement("section",{id:"services"},n.a.createElement(c.a,null,n.a.createElement("div",{className:"service-wrapper"},n.a.createElement(s.a,{left:a,bottom:i,duration:1e3,delay:500,distance:"30px"},n.a.createElement("h1",{className:"service-wrapper__title"},"we have the skills",n.a.createElement("br",null),"you need"),n.a.createElement("hr",{className:"title-divider__pink"}),n.a.createElement("h3",{className:"service-wrapper__subtitle"},"We create products from the ground up. Research, UI/UX design, web and mobile software development.")),e.map((function(e){var t=e.title,r=e.description;return n.a.createElement(g,null,n.a.createElement(j,{lg:12,sm:12},n.a.createElement(s.a,{left:a,bottom:i,duration:1e3,delay:500,distance:"30px"},n.a.createElement("div",{className:"service-wrapper__text"},n.a.createElement("h3",{className:"service-wrapper__text-title"},t||"Service Title"),n.a.createElement("div",{className:"service-wrapper__text-description"},n.a.createElement("p",null,r||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.")),n.a.createElement(g,{className:"service-tool"},e.tools.map((function(e){return n.a.createElement(j,{lg:4,xs:12},n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("strong",null,e.name)),n.a.createElement("p",{className:"service-tool__description"},n.a.createElement("small",null,e.description))))})))))))})))))},k=function(){var e=Object(r.useContext)(u).contact,t=e.cta,a=e.btn,l=e.email;return n.a.createElement("section",{id:"contact"},n.a.createElement(c.a,null,n.a.createElement(x,{title:"Do you like what you see?"}),n.a.createElement(s.a,{bottom:!0,duration:1e3,delay:800,distance:"30px"},n.a.createElement("div",{className:"contact-wrapper"},n.a.createElement("p",{className:"contact-wrapper__text"},t||"Let us help you bring your idea to life"),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:l?"mailto:"+l:"https://conflux.tech"},a||"Let's talk!")))))},C=function(){var e=Object(r.useContext)(u).footer.networks;return n.a.createElement("footer",{className:"footer navbar-static-bottom"},n.a.createElement(c.a,null,n.a.createElement(g,{className:"footer-wrapper"},n.a.createElement(j,{md:6,sm:12,className:"footer-wrapper__left"},n.a.createElement("h1",null,"Every idea starts with a conversation,"),n.a.createElement("h1",null,n.a.createElement("a",{href:"mailto:info@conflux.tech"},"let's have one"))),n.a.createElement(j,{md:6,sm:12,className:"footer-wrapper__right"},n.a.createElement("h1",null,"Email us at: ",n.a.createElement("a",{href:"mailto:info@conflux.tech"},"info@conflux.tech")),n.a.createElement("div",{className:"social-links"},e&&e.map((function(e){var t=e.id,a=e.name,r=e.url;return n.a.createElement("a",{key:t,href:r||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":a},n.a.createElement("i",{className:"fa fa-"+(a||"refresh")+" fa-inverse"}))}))))),n.a.createElement(g,null,n.a.createElement(j,{md:12,sm:12},n.a.createElement("p",{className:"footer__text"},"© ",(new Date).getFullYear()," Conflux")))))},A=a("jooN");function T(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return q(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var G=function(){var e=Object(r.useState)({}),t=e[0],a=e[1],l=Object(r.useState)({}),c=l[0],o=l[1],s=Object(r.useState)({}),i=s[0],u=s[1],f=Object(r.useState)([]),b=f[0],E=f[1],d=Object(r.useState)({}),h=d[0],v=d[1],w=Object(r.useState)({}),g=w[0],y=w[1];return Object(r.useEffect)((function(){a(Object.assign({},A.f)),o(Object.assign({},A.b)),u(Object.assign({},A.a)),E(T(A.g)),v(Object.assign({},A.c)),y(Object.assign({},A.d))}),[]),n.a.createElement(m,{value:{hero:t,about:c,about2:i,services:b,contact:h,footer:g}},n.a.createElement(p,null),n.a.createElement(_,null),n.a.createElement(O,null),n.a.createElement(S,null),n.a.createElement(k,null),n.a.createElement(C,null))};a("q4sD"),a("J9yo"),t.default=function(){var e=A.e.title,t=A.e.lang,a=A.e.description,r=A.e.url,c=A.e.ogImage,o=A.e.keywords;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,e||"Conflux"),n.a.createElement("html",{lang:t||"en"}),n.a.createElement("meta",{name:"description",content:a||"Conflux"}),n.a.createElement("meta",{property:"description",content:a}),n.a.createElement("meta",{property:"og:site_name",content:"Conflux"}),n.a.createElement("meta",{property:"og:title",content:e}),n.a.createElement("meta",{property:"og:description",content:a}),n.a.createElement("meta",{property:"og:url",content:r}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:image",content:c}),n.a.createElement("meta",{property:"twitter:title",content:e}),n.a.createElement("meta",{property:"twitter:url",content:r}),n.a.createElement("meta",{property:"twitter:image",content:c}),n.a.createElement("meta",{name:"keywords",content:o.join(",")}),n.a.createElement("meta",{name:"google-site-verification",content:"VGX_sKkC_A0LTDNYF-QXuISDoiYD7GFj0QpKQ3TGZf4"})),n.a.createElement(G,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-471ffbab939abbcb1c87.js.map