webpackJsonp([0x9427c64ab85d],{27:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,u,c=n(e),f=1;f<arguments.length;f++){r=Object(arguments[f]);for(var i in r)l.call(r,i)&&(c[i]=r[i]);if(a){u=a(r);for(var s=0;s<u.length;s++)o.call(r,u[s])&&(c[u[s]]=r[u[s]])}}return c}},242:function(e,t){},121:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a);n(242);var o=function(e){return l.default.createElement("a",{href:e.link,className:"button "+e.className},e.text)};t.default=o,e.exports=t.default},128:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(121),u=r(o),c=function(e){return l.default.createElement("main",null,l.default.createElement("div",{className:"container",id:"not-found-page"},l.default.createElement("div",{className:"row justify-content-md-center"},l.default.createElement("div",{className:"col-lg-12 text-center"},l.default.createElement("h1",null,"404"),l.default.createElement("p",null,"Sorry, the page you are looking is no where to be found."),l.default.createElement("br",null),l.default.createElement(u.default,{text:"Go back to homepage",link:"/"})))))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-404-js-2e01b9fe09cd3e56d185.js.map