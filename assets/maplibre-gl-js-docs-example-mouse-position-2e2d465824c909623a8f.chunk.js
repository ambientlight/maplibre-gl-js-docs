(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"/CYR":function(t,e,n){var r=n("gcNx");r=r.default||r,t.exports={component:r,props:{frontMatter:{title:"Get coordinates of the mouse pointer",description:"Show mouse position on hover with pixel and latitude and longitude coordinates.",topics:["User interaction"],thumbnail:"mouse-position",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],prependJs:["import Example from '../../components/example';","import html from './mouse-position.html';"]}}}},KFre:function(t,e,n){"use strict";n.r(e),e.default="<style type=\"text/css\">\n    #info {\n        display: block;\n        position: relative;\n        margin: 0px auto;\n        width: 50%;\n        padding: 10px;\n        border: none;\n        border-radius: 3px;\n        font-size: 12px;\n        text-align: center;\n        color: #222;\n        background: #fff;\n    }\n</style>\n<div id=\"map\"></div>\n<pre id=\"info\"></pre>\n<script>\n    var map = new mapboxgl.Map({\n        container: 'map', // container id\n        style: 'mapbox://styles/mapbox/streets-v11',\n        center: [-74.5, 40], // starting position\n        zoom: 9 // starting zoom\n    });\n\n    map.on('mousemove', function (e) {\n        document.getElementById('info').innerHTML =\n            // e.point is the x, y coordinates of the mousemove event relative\n            // to the top-left corner of the map\n            JSON.stringify(e.point) +\n            '<br />' +\n            // e.lngLat is the longitude, latitude geographical position of the event\n            JSON.stringify(e.lngLat.wrap());\n    });\n<\/script>\n"},M4Oy:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;e.default=o},gcNx:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("q1tI")),i=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),a=s(n("KFre")),c=s(n("1wO5"));function s(t){return t&&t.__esModule?t:{default:t}}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b={title:"Get coordinates of the mouse pointer",description:"Show mouse position on hover with pixel and latitude and longitude coordinates.",topics:["User interaction"],thumbnail:"mouse-position",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],headings:[]},h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,s=d(m);function m(){return u(this,m),s.apply(this,arguments)}return e=m,(n=[{key:"render",value:function(){var t=this.props;return o.default.createElement(c.default,p({},t,{frontMatter:b}),o.default.createElement("div",null,o.default.createElement("p",null,"Show mouse position on hover with pixel and latitude and longitude coordinates."),o.default.createElement(i.default,p({html:a.default},this.props))))}}])&&l(e.prototype,n),r&&l(e,r),m}(o.default.PureComponent);e.default=h},mOgX:function(t,e,n){"use strict";n.r(e);var r=n("f4rJ");n("yr+R");function o(t,e){return e&&e.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(t)}e.default={js:function(t){return o("js",t)},css:function(t){return o("css",t)}}},uLm5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),i=(n("17x9"),n("mOgX")),a=n("v8ZZ"),c=n.n(a),s=n("irdr"),p=n.n(s),u=n("M4Oy"),l=n.n(u),f=n("umIL"),d=n("wdKx");function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,r,a=w(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,t)).state={token:void 0,unsupported:!1},e}return e=s,(n=[{key:"addToken",value:function(t){var e=this.state.token?"":"\n\t// TO MAKE THE MAP APPEAR YOU MUST\n\t// ADD YOUR ACCESS TOKEN FROM\n\t// https://account.mapbox.com";return t.replace("<script>","<script>".concat(e,"\n\tmapboxgl.accessToken = '").concat(this.state.token||"<your access token here>","';"))}},{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(i.default.js(),'"><\/script>\n<link href="').concat(i.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(this.addToken(t),"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(i.default.js({local:!0}),"'><\/script>\n<link href='").concat(i.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n<script>mapboxgl.accessToken = '").concat(MapboxPageShell.getMapboxAccessToken(),"'<\/script>\n</head>\n<body>\n").concat(t,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,n=t.location,r=this.displayHTML(e),i=d.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(p.a,{code:this.displayHTML(e),highlighter:function(){return f.highlightHtml},edit:{frontMatter:b(b({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:i.js,html:i.html,css:i.css,resources:i.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,n=e.frontMatter,r=e.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(l.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),c()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){var t=this;if(c()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close(),MapboxPageShell.afterUserCheck((function(){t.setState({token:MapboxPageShell.getUserPublicAccessToken()})}))}}}])&&h(e.prototype,n),r&&h(e,r),s}(o.a.Component);x(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,n){"use strict";function r(t){return!o(t)}function o(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{e=new Worker(r),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(r),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const t=document.createElement("canvas");t.width=t.height=1;const e=t.getContext("2d");if(!e)return!1;const n=e.getImageData(0,0,1,1);return n&&n.width===t.width}()?function(t){void 0===i[t]&&(i[t]=function(t){const e=function(t){var e=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,e.probablySupportsContext?e.probablySupportsContext("webgl",n)||e.probablySupportsContext("experimental-webgl",n):e.supportsContext?e.supportsContext("webgl",n)||e.supportsContext("experimental-webgl",n):e.getContext("webgl",n)||e.getContext("experimental-webgl",n)}(t);if(!e)return!1;const n=e.createShader(e.VERTEX_SHADER);if(!n||e.isContextLost())return!1;return e.shaderSource(n,"void main() {}"),e.compileShader(n),!0===e.getShaderParameter(n,e.COMPILE_STATUS)}(t));return i[t]}(t&&t.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.exports?t.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var i={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,i=/<script>((.|\n)*)<\/script>/,a=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=t.match(a),p="".concat(t.replace(i,"")),u=t.match(i)[1];s&&(s.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),p="".concat(p.replace(a,"")));if(t.match(r)){var l=t.match(r).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),p="".concat(p.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(o)){var f=t.match(o).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),p="".concat(p.replace(/<link[\s\S]*?>/g,""))}p.match(c)&&(p=p.match(c)[1]);return{html:p,css:e,js:u,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-mouse-position-2e2d465824c909623a8f.chunk.js.map