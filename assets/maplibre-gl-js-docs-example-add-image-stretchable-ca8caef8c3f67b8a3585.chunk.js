(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},aAuZ:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("er0T")),c=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Add a stretchable image to the map",description:"Use a stretchable image as a background for text.",topics:["Styles","Layers"],thumbnail:"add-image-stretchable",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(m,e);var t,n,r,s=d(m);function m(){return p(this,m),s.apply(this,arguments)}return t=m,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,u({},e,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"Use a stretchable image as a background for text. Stretchable images allow some parts of the image to stretch while keeping other parts, such as corners, at a constant size. Set the ",o.default.createElement("code",null,"layout")," property ",o.default.createElement("code",null,"'icon-text-fit': 'both'")," to use the image as background for the text."),o.default.createElement(a.default,u({html:i.default},this.props))))}}])&&l(t.prototype,n),r&&l(t,r),m}(o.default.PureComponent);t.default=b},er0T:function(e,t,n){"use strict";n.r(t),t.default="<div id=\"map\"></div>\n\n<script>\n    var map = new maplibregl.Map({\n        container: 'map',\n        style:\n            'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',\n        zoom: 0.1\n    });\n\n    var images = {\n        'popup': 'https://maplibre.org/maplibre-gl-js-docs/assets/popup.png',\n        'popup-debug':\n            'https://maplibre.org/maplibre-gl-js-docs/assets/popup_debug.png'\n    };\n\n    loadImages(images, function (loadedImages) {\n        map.on('load', function () {\n            map.addImage('popup-debug', loadedImages['popup-debug'], {\n                // The two (blue) columns of pixels that can be stretched horizontally:\n                //   - the pixels between x: 25 and x: 55 can be stretched\n                //   - the pixels between x: 85 and x: 115 can be stretched.\n                stretchX: [\n                    [25, 55],\n                    [85, 115]\n                ],\n                // The one (red) row of pixels that can be stretched vertically:\n                //   - the pixels between y: 25 and y: 100 can be stretched\n                stretchY: [[25, 100]],\n                // This part of the image that can contain text ([x1, y1, x2, y2]):\n                content: [25, 25, 115, 100],\n                // This is a high-dpi image:\n                pixelRatio: 2\n            });\n            map.addImage('popup', loadedImages['popup'], {\n                stretchX: [\n                    [25, 55],\n                    [85, 115]\n                ],\n                stretchY: [[25, 100]],\n                content: [25, 25, 115, 100],\n                pixelRatio: 2\n            });\n\n            map.addSource('points', {\n                'type': 'geojson',\n                'data': {\n                    'type': 'FeatureCollection',\n                    'features': [\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [40, -30]\n                            },\n                            'properties': {\n                                'image-name': 'popup-debug',\n                                'name': 'Line 1\\nLine 2\\nLine 3'\n                            }\n                        },\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [40, 30]\n                            },\n                            'properties': {\n                                'image-name': 'popup',\n                                'name': 'Line 1\\nLine 2\\nLine 3'\n                            }\n                        },\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [-40, -30]\n                            },\n                            'properties': {\n                                'image-name': 'popup-debug',\n                                'name': 'One longer line'\n                            }\n                        },\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [-40, 30]\n                            },\n                            'properties': {\n                                'image-name': 'popup',\n                                'name': 'One longer line'\n                            }\n                        }\n                    ]\n                }\n            });\n            map.addLayer({\n                'id': 'points',\n                'type': 'symbol',\n                'source': 'points',\n                'layout': {\n                    'text-field': ['get', 'name'],\n                    'icon-text-fit': 'both',\n                    'icon-image': ['get', 'image-name'],\n                    'icon-overlap': 'always',\n                    'text-overlap': 'always'\n                }\n            });\n\n            // the original, unstretched image for comparison\n            map.addSource('original', {\n                'type': 'geojson',\n                'data': {\n                    'type': 'FeatureCollection',\n                    'features': [\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [0, -70]\n                            }\n                        }\n                    ]\n                }\n            });\n            map.addLayer({\n                'id': 'original',\n                'type': 'symbol',\n                'source': 'original',\n                'layout': {\n                    'text-field': 'unstretched image',\n                    'icon-image': 'popup-debug',\n                    'icon-overlap': 'always',\n                    'text-overlap': 'always'\n                }\n            });\n        });\n    });\n\n    function loadImages(urls, callback) {\n        var results = {};\n        for (var name in urls) {\n            map.loadImage(urls[name], makeCallback(name));\n        }\n\n        function makeCallback(name) {\n            return function (err, image) {\n                results[name] = err ? null : image;\n\n                // if all images are loaded, call the callback\n                if (Object.keys(results).length === Object.keys(urls).length) {\n                    callback(results);\n                }\n            };\n        }\n    }\n<\/script>\n"},mOgX:function(e,t,n){"use strict";n.r(t);var r=n("f4rJ");n("yr+R");function o(e,t){return t&&t.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(e)}t.default={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n("q1tI"),o=n.n(r),a=n("mOgX"),i=n("v8ZZ"),c=n("irdr"),s=n.n(c),u=n("M4Oy"),p=n.n(u),l=n("umIL"),f=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',x="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,r,c=g(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={unsupported:!1},t}return t=u,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(x,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(x,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(s.a,{code:this.displayHTML(t),highlighter:function(){return l.highlightHtml},edit:{frontMatter:y(y({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(i.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(i.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&h(t.prototype,n),r&&h(t,r),u}(o.a.Component);O(S,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){var t,n=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!n)return!1;try{t=n.createShader(n.VERTEX_SHADER)}catch(e){return!1}if(!t||n.isContextLost())return!1;return n.shaderSource(t,"void main() {}"),n.compileShader(t),!0===n.getShaderParameter(t,n.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=r,t.notSupportedReason=o;var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},vIFJ:function(e,t,n){var r=n("aAuZ");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Add a stretchable image to the map",description:"Use a stretchable image as a background for text.",topics:["Styles","Layers"],thumbnail:"add-image-stretchable",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './add-image-stretchable.html';"]}}}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(i),u="".concat(e.replace(a,"")),p=e.match(a)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),u="".concat(u.replace(i,"")));if(e.match(r)){var l=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),u="".concat(u.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),u="".concat(u.replace(/<link[\s\S]*?>/g,""))}u.match(c)&&(u=u.match(c)[1]);return{html:u,css:t,js:p,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-add-image-stretchable-ca8caef8c3f67b8a3585.chunk.js.map