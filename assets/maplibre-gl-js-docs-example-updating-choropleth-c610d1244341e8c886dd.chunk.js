(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{HFUo:function(t,e,n){"use strict";n.r(e),e.default="<style>\n    .legend {\n        background-color: #fff;\n        border-radius: 3px;\n        bottom: 30px;\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n        padding: 10px;\n        position: absolute;\n        right: 10px;\n        z-index: 1;\n    }\n\n    .legend h4 {\n        margin: 0 0 10px;\n    }\n\n    .legend div span {\n        border-radius: 50%;\n        display: inline-block;\n        height: 10px;\n        margin-right: 5px;\n        width: 10px;\n    }\n</style>\n\n<div id=\"map\"></div>\n\n<div id=\"state-legend\" class=\"legend\">\n    <h4>Population</h4>\n    <div><span style=\"background-color: #723122\"></span>25,000,000</div>\n    <div><span style=\"background-color: #8b4225\"></span>10,000,000</div>\n    <div><span style=\"background-color: #a25626\"></span>7,500,000</div>\n    <div><span style=\"background-color: #b86b25\"></span>5,000,000</div>\n    <div><span style=\"background-color: #ca8323\"></span>2,500,000</div>\n    <div><span style=\"background-color: #da9c20\"></span>1,000,000</div>\n    <div><span style=\"background-color: #e6b71e\"></span>750,000</div>\n    <div><span style=\"background-color: #eed322\"></span>500,000</div>\n    <div><span style=\"background-color: #f2f12d\"></span>0</div>\n</div>\n\n<div id=\"county-legend\" class=\"legend\" style=\"display: none\">\n    <h4>Population</h4>\n    <div><span style=\"background-color: #723122\"></span>1,000,000</div>\n    <div><span style=\"background-color: #8b4225\"></span>500,000</div>\n    <div><span style=\"background-color: #a25626\"></span>100,000</div>\n    <div><span style=\"background-color: #b86b25\"></span>50,000</div>\n    <div><span style=\"background-color: #ca8323\"></span>10,000</div>\n    <div><span style=\"background-color: #da9c20\"></span>5,000</div>\n    <div><span style=\"background-color: #e6b71e\"></span>1,000</div>\n    <div><span style=\"background-color: #eed322\"></span>100</div>\n    <div><span style=\"background-color: #f2f12d\"></span>0</div>\n</div>\n\n<script>\n    var map = new mapboxgl.Map({\n        container: 'map',\n        style: 'mapbox://styles/mapbox/light-v10',\n        center: [-98, 38.88],\n        minZoom: 3,\n        zoom: 3\n    });\n\n    var zoomThreshold = 4;\n\n    map.on('load', function () {\n        map.addSource('population', {\n            'type': 'vector',\n            'url': 'mapbox://mapbox.660ui7x6'\n        });\n\n        map.addLayer(\n            {\n                'id': 'state-population',\n                'source': 'population',\n                'source-layer': 'state_county_population_2014_cen',\n                'maxzoom': zoomThreshold,\n                'type': 'fill',\n                'filter': ['==', 'isState', true],\n                'paint': {\n                    'fill-color': [\n                        'interpolate',\n                        ['linear'],\n                        ['get', 'population'],\n                        0,\n                        '#F2F12D',\n                        500000,\n                        '#EED322',\n                        750000,\n                        '#E6B71E',\n                        1000000,\n                        '#DA9C20',\n                        2500000,\n                        '#CA8323',\n                        5000000,\n                        '#B86B25',\n                        7500000,\n                        '#A25626',\n                        10000000,\n                        '#8B4225',\n                        25000000,\n                        '#723122'\n                    ],\n                    'fill-opacity': 0.75\n                }\n            },\n            'waterway-label'\n        );\n\n        map.addLayer(\n            {\n                'id': 'county-population',\n                'source': 'population',\n                'source-layer': 'state_county_population_2014_cen',\n                'minzoom': zoomThreshold,\n                'type': 'fill',\n                'filter': ['==', 'isCounty', true],\n                'paint': {\n                    'fill-color': [\n                        'interpolate',\n                        ['linear'],\n                        ['get', 'population'],\n                        0,\n                        '#F2F12D',\n                        100,\n                        '#EED322',\n                        1000,\n                        '#E6B71E',\n                        5000,\n                        '#DA9C20',\n                        10000,\n                        '#CA8323',\n                        50000,\n                        '#B86B25',\n                        100000,\n                        '#A25626',\n                        500000,\n                        '#8B4225',\n                        1000000,\n                        '#723122'\n                    ],\n                    'fill-opacity': 0.75\n                }\n            },\n            'waterway-label'\n        );\n    });\n\n    var stateLegendEl = document.getElementById('state-legend');\n    var countyLegendEl = document.getElementById('county-legend');\n    map.on('zoom', function () {\n        if (map.getZoom() > zoomThreshold) {\n            stateLegendEl.style.display = 'none';\n            countyLegendEl.style.display = 'block';\n        } else {\n            stateLegendEl.style.display = 'block';\n            countyLegendEl.style.display = 'none';\n        }\n    });\n<\/script>\n"},M4Oy:function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=((o=n("fG8n"))&&o.__esModule?o:{default:o}).default;e.default=r},fPLT:function(t,e,n){var o=n("gmQZ");o=o.default||o,t.exports={component:o,props:{frontMatter:{title:"Update a choropleth layer by zoom level",description:"Display state or county population depending on zoom level.",topics:["Layers","User interaction"],thumbnail:"updating-choropleth",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],prependJs:["import Example from '../../components/example';","import html from './updating-choropleth.html';"]}}}},gmQZ:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("HFUo")),c=s(n("1wO5"));function s(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b(t);if(e){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m={title:"Update a choropleth layer by zoom level",description:"Display state or county population depending on zoom level.",topics:["Layers","User interaction"],thumbnail:"updating-choropleth",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],headings:[]},h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(y,t);var e,n,o,s=d(y);function y(){return p(this,y),s.apply(this,arguments)}return e=y,(n=[{key:"render",value:function(){var t=this.props;return r.default.createElement(c.default,l({},t,{frontMatter:m}),r.default.createElement("div",null,r.default.createElement("p",null,"Use 2014 census data to display state or county population depending on zoom level."),r.default.createElement(a.default,l({html:i.default},this.props))))}}])&&u(e.prototype,n),o&&u(e,o),y}(r.default.PureComponent);e.default=h},mOgX:function(t,e,n){"use strict";n.r(e);var o=n("f4rJ");n("yr+R");function r(t,e){return e&&e.local,"https://unpkg.com/maplibre-gl@".concat(o.a,"/dist/maplibre-gl.").concat(t)}e.default={js:function(t){return r("js",t)},css:function(t){return r("css",t)}}},uLm5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return S}));var o=n("q1tI"),r=n.n(o),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),c=n.n(i),s=n("irdr"),l=n.n(s),p=n("M4Oy"),u=n.n(p),f=n("umIL"),d=n("wdKx");function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=x(t);if(e){var r=x(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',k="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,o,i=v(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this,t)).state={token:void 0,unsupported:!1},e}return e=s,(n=[{key:"addToken",value:function(t){var e=this.state.token?"":"\n\t// TO MAKE THE MAP APPEAR YOU MUST\n\t// ADD YOUR ACCESS TOKEN FROM\n\t// https://account.mapbox.com";return t.replace("<script>","<script>".concat(e,"\n\tmapboxgl.accessToken = '").concat(this.state.token||"<your access token here>","';"))}},{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(k,"\n</style>\n</head>\n<body>\n").concat(this.addToken(t),"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(k,"\n</style>\n<script>mapboxgl.accessToken = '").concat(MapboxPageShell.getMapboxAccessToken(),"'<\/script>\n</head>\n<body>\n").concat(t,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,n=t.location,o=this.displayHTML(e),a=d.extractor(o);return r.a.createElement("div",{className:"bg-white"},r.a.createElement("div",{id:"code",className:"relative"},r.a.createElement(l.a,{code:this.displayHTML(e),highlighter:function(){return f.highlightHtml},edit:{frontMatter:m(m({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,n=e.frontMatter,o=e.height;return r.a.createElement("div",{className:"prose"},this.state.unsupported&&r.a.createElement(u.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",r.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",r.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),c()()&&r.a.createElement("iframe",{id:"demo",style:{height:o},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){var t=this;if(c()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close(),MapboxPageShell.afterUserCheck((function(){t.setState({token:MapboxPageShell.getUserPublicAccessToken()})}))}}}])&&h(e.prototype,n),o&&h(e,o),s}(r.a.Component);O(S,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,n){"use strict";function o(t){return!r(t)}function r(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,n=new Blob([""],{type:"text/javascript"}),o=URL.createObjectURL(n);try{e=new Worker(o),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(o),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const t=document.createElement("canvas");t.width=t.height=1;const e=t.getContext("2d");if(!e)return!1;const n=e.getImageData(0,0,1,1);return n&&n.width===t.width}()?function(t){void 0===a[t]&&(a[t]=function(t){const e=function(t){var e=document.createElement("canvas"),n=Object.create(o.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,e.probablySupportsContext?e.probablySupportsContext("webgl",n)||e.probablySupportsContext("experimental-webgl",n):e.supportsContext?e.supportsContext("webgl",n)||e.supportsContext("experimental-webgl",n):e.getContext("webgl",n)||e.getContext("experimental-webgl",n)}(t);if(!e)return!1;const n=e.createShader(e.VERTEX_SHADER);if(!n||e.isContextLost())return!1;return e.shaderSource(n,"void main() {}"),e.compileShader(n),!0===e.getShaderParameter(n,e.COMPILE_STATUS)}(t));return a[t]}(t&&t.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.exports?t.exports=o:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=o,window.mapboxgl.notSupportedReason=r);var a={};o.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",n={js:[],css:[]},o=/src=("|')([^']*?)("|')/g,r=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=t.match(i),l="".concat(t.replace(a,"")),p=t.match(a)[1];s&&(s.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),l="".concat(l.replace(i,"")));if(t.match(o)){var u=t.match(o).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(u),l="".concat(l.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(r)){var f=t.match(r).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),l="".concat(l.replace(/<link[\s\S]*?>/g,""))}l.match(c)&&(l=l.match(c)[1]);return{html:l,css:e,js:p,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-updating-choropleth-c610d1244341e8c886dd.chunk.js.map