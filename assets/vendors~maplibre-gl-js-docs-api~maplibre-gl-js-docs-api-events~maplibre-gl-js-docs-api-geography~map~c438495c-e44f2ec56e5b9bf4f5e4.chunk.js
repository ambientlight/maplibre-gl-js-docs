(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e3w":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=a(n("tcEi"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){f(n,e);var t=p(n);function n(){return c(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e="inline-block";return this.props.classes&&(e+=" ".concat(this.props.classes)),r.default.createElement("form",{className:e,method:"POST",action:this.props.action,target:"_blank"},this.props.children)}}]),n}(r.default.Component),b=function(e){f(n,e);var t=p(n);function n(){return c(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props.platform;return r.default.createElement("input",{style:{border:0},type:"submit",className:"btn btn--s cursor-pointer round",value:"Edit in ".concat(e),onClick:function(){window&&window.analytics&&analytics.track("Clicked Edit in ".concat(e))}})}}]),n}(r.default.Component),g=function(e){f(n,e);var t=p(n);function n(){return c(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.css,n=e.js,o=e.html,a=e.head,l=e.resources,c=function(e){var t=e.description,n="https://docs.mapbox.com/".concat(e.pathname);return t+="\n\nSee the example: [".concat(n,"](").concat(n,")"),{title:e.title,description:t,tags:["mapbox","maps"]}}(e.frontMatter);return r.default.createElement(r.default.Fragment,null,r.default.createElement(m,{action:"https://jsfiddle.net/api/post/library/pure/"},r.default.createElement(b,{platform:"JSFiddle"}),r.default.createElement("input",{type:"hidden",name:"wrap",value:"b"}),r.default.createElement("input",{type:"hidden",name:"css",value:t}),r.default.createElement("input",{type:"hidden",name:"html",value:o}),r.default.createElement("input",{type:"hidden",name:"js",value:n}),r.default.createElement("input",{type:"hidden",name:"title",value:c.title}),r.default.createElement("input",{type:"hidden",name:"resources",value:l?l.js.concat(l.css):[]}),r.default.createElement("input",{type:"hidden",name:"description",value:(0,i.default)(c.description)})),r.default.createElement(m,{classes:"ml6",action:"https://codepen.io/pen/define"},r.default.createElement("input",{type:"hidden",name:"data",value:JSON.stringify({title:c.title,html:o,html_pre_processor:"none",description:c.description,tags:c.tags,css:t,css_pre_processor:"none",js:n,js_pre_processor:"none",css_external:l&&l.css?l.css.join(";"):"",js_external:l&&l.js?l.js.join(";"):"",head:a})}),r.default.createElement(b,{platform:"CodePen"})))}}]),n}(r.default.Component);t.default=g,m.propTypes={children:o.default.node.isRequired,action:o.default.string.isRequired,classes:o.default.string},b.propTypes={platform:o.default.oneOf(["JSFiddle","CodePen"]).isRequired},g.propTypes={css:o.default.string.isRequired,js:o.default.string.isRequired,html:o.default.string.isRequired,head:o.default.string,frontMatter:o.default.shape({title:o.default.string.isRequired,description:o.default.string.isRequired,pathname:o.default.string.isRequired}),resources:o.default.shape({js:o.default.array,css:o.default.array})}},"3eVy":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightThemeCss=void 0;t.highlightThemeCss="code[class*='language-'],pre[class*='language-']{color:#273d56;background:none;font-family:Consolas,Monaco,'AndaleMono','UbuntuMono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}/*Codeblocks*/pre[class*='language-']{padding:1em;margin:0.5em0;overflow:auto;border-radius:0.3em;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:#272822;}/*Inlinecode*/:not(pre)>code[class*='language-']{padding:0.1em;border-radius:0.3em;white-space:normal;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#53708e;}.token.punctuation{color:#273d56;}.namespace{opacity:0.7;}.token.property,.token.tag,.token.constant,.token.symbol,.token.deleted{color:#314ccd;}.token.boolean,.token.number{color:#7753eb;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#ce2c69;}.token.operator,.token.entity,.token.url,.language-css.token.string,.style.token.string,.token.variable{color:#273d56;}.token.atrule,.token.attr-value,.token.function,.token.class-name{color:#385af5;}/*slightlydarkertomakeimprovecontrastwhencodeisinaNote*/.dr-ui--note.token.atrule,.dr-ui--note.token.attr-value,.dr-ui--note.token.function,.dr-ui--note.token.class-name{color:#2a4de4;}/*slightlydarkertomakeimprovecontrastwhencodeisinaNote*/.dr-ui--note.token.selector,.dr-ui--note.token.attr-name,.dr-ui--note.token.string,.dr-ui--note.token.char,.dr-ui--note.token.builtin,.dr-ui--note.token.inserted{color:#ae2056;}.token.keyword{color:#314ccd;}.token.regex,.token.important{color:#fd971f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}/*Linenumbers*/[data-content]::before{content:attr(data-content);}"},"724T":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("/e3w"))&&r.__esModule?r:{default:r}).default;t.default=o},"8TQ7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n("q1tI")),o=c(n("17x9")),i=c(n("sBL/")),a=c(n("dNW3")),l=c(n("rmz/"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?y(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=[],g=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(y(n=d(this,(e=p(t)).call.apply(e,[this].concat(o))))),"adjustPositions",(0,i.default)((function(){var e=y(y(n)).containerElement;if(e)for(var t=e.querySelectorAll("[data-chunk-overlay]"),r=0,o=t.length;r<o;r++){var i=t[r],a=i.getAttribute("data-chunk-overlay"),l=e.querySelector('[data-chunk-code="'.concat(a,'"]'));if(!l)throw new Error('No code element found with [data-chunk-code="'.concat(a,'"]'));var c=e.querySelector('[data-chunk-copy="'.concat(a,'"]'));if(!c)throw new Error('No copy element found with [data-chunk-copy="'.concat(a,'"]'));i.style.top="".concat(l.offsetTop,"px"),c.style.top="".concat(l.offsetTop+2,"px"),i.style.height="".concat(l.clientHeight,"px"),i.style.opacity="1",c.style.opacity="1"}}),300)),m(y(y(n)),"onContainerElement",(function(e){n.containerElement=e})),n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.adjustPositions(),(0,a.default)().addEventListener("resize",this.adjustPositions);var e=this.props.highlightThemeCss;if(-1===b.indexOf(e)){b.push(e);var t=(0,a.default)().document;this.styleTag=t.createElement("style"),this.styleTag.innerHTML=e,t.head.appendChild(this.styleTag)}}},{key:"componentDidUpdate",value:function(){this.adjustPositions()}},{key:"componentWillUnmount",value:function(){(0,a.default)().removeEventListener("resize",this.adjustPositions)}},{key:"render",value:function(){for(var e=this,t=this.props,n=t.code.trim().split("\n"),o=(t.highlightedCode||t.code).trim().split("\n"),i=void 0!==t.copyRanges&&t.copyRanges.slice(),a=i&&i.shift(),c=[],u=[],s=function(e){var t=e.live;u.push({live:t,highlightedLines:c.map((function(e){return e.highlighted})),raw:c.reduce((function(e,t){return e+(t.raw+"\n")}),""),element:void 0}),c=[]},f=0,d=o.length;f<d;f++){var p=o[f],h=f+1;a&&h===a[0]?s({live:!1}):a&&h>a[1]&&(s({live:!0}),a=i&&i.shift()),c.push({highlighted:p,raw:n[f]})}c.length&&s({live:!1});var y=[],m=[],b=[],g=-1;u.forEach((function(n,o){var i="chunk-".concat(o),a=n.highlightedLines.map((function(e,o){var i="pr12";n.live&&(i+=" py3"),n.live||void 0===t.copyRanges||(i+=" opacity75");var a=e.match(/^[ ]*/),l=(a?a[0]:"").length*t.characterWidth+12,c=e.replace(/^[ ]*/,"");return r.default.createElement("div",{key:o,className:i,style:{paddingLeft:l}},r.default.createElement("div",{dangerouslySetInnerHTML:{__html:c||" "},style:{textIndent:-2*t.characterWidth,marginLeft:2*t.characterWidth}}))}));if(y.push(r.default.createElement("div",{key:o,className:"relative z2","data-chunk-code":i},a)),n.live){m.push(r.default.createElement("div",{key:o,"data-chunk-overlay":i,className:"bg-darken75 absolute left right",style:{opacity:0,transition:"opacity 300ms linear"}},r.default.createElement("div",{className:"bg-blue h-full w6"})));var c=++g;t.onCopy&&b.push(r.default.createElement("div",{key:o,"data-chunk-copy":i,className:"absolute z3 right mr3 color-white",style:{opacity:0,transition:"opacity 300ms linear"}},r.default.createElement(l.default,{text:n.raw,onCopy:function(){return e.props.onCopy(c)}})))}}));var v=null;void 0===t.copyRanges&&t.onCopy&&(v=r.default.createElement("div",{className:"absolute z2 top right mr6 mt6 color-white"},r.default.createElement(l.default,{text:t.code,onCopy:t.onCopy})));var k="relative round z0 scroll-styled";void 0!==t.maxHeight&&(k+=" scroll-auto");var w={};return void 0!==t.maxHeight&&(w.maxHeight=t.maxHeight),r.default.createElement("div",{className:k,ref:this.onContainerElement,style:w},r.default.createElement("pre",null,r.default.createElement("code",{className:"px0 hljs"},y)),v,m,b)}}])&&f(n.prototype,o),c&&f(n,c),t}(r.default.PureComponent);t.default=g,m(g,"propTypes",{code:o.default.string.isRequired,highlightedCode:o.default.string,copyRanges:o.default.arrayOf(o.default.arrayOf(o.default.number)),maxHeight:o.default.number,onCopy:o.default.func,highlightThemeCss:o.default.string,characterWidth:o.default.number}),m(g,"defaultProps",{characterWidth:7.225,highlightThemeCss:"\n.hljs-comment,\n.hljs-quote {\n  color: #7285b7;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #ff9da4;\n}\n\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #ffc58f;\n}\n\n.hljs-attribute {\n  color: #ffeead;\n}\n\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #d1f1a9;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #bbdaff;\n}\n\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #ebbbff;\n}\n\n.hljs {\n  display: block;\n  font-family: 'Menlo', 'Bitstream Vera Sans Mono', 'Monaco', 'Consolas', monospace;\n  font-size: 12px;\n  line-height: 1.5em;\n  overflow-x: auto;\n  background: #273d56;\n  color: #fff;\n  padding: 12px;\n  border-radius: 3px;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}"})},DnIG:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("8TQ7"))&&r.__esModule?r:{default:r}).default;t.default=o},GiJw:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("ilnc"))&&r.__esModule?r:{default:r}).default;t.default=o},Kyok:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("q1tI")),o=u(n("17x9")),i=u(n("DnIG")),a=u(n("GiJw")),l=u(n("724T")),c=n("3eVy");function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(s,e);var t,n,o,u=y(s);function s(){var e;d(this,s);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return v(b(e=u.call.apply(u,[this].concat(n))),"editButtons",(function(){var t=e.props.edit;return t&&t.css&&t.html&&t.js&&t.frontMatter.title&&t.frontMatter.description?r.default.createElement("div",{className:"absolute-mm mb6 mb0-mm top right mr36-mm z2",style:{marginTop:"4px"}},r.default.createElement(l.default,{css:t.css,html:t.html,js:t.js,head:t.head,resources:t.resources,frontMatter:t.frontMatter})):""})),v(b(e),"codeSnippetTitle",(function(){var t=e.props.filename;return t&&r.default.createElement(a.default,{filename:t})})),e}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.code,n=e.maxHeight,o=e.highlighter,a=o()(t);if(o||t)return r.default.createElement("div",{"data-swiftype-index":"false"},this.codeSnippetTitle(),r.default.createElement("div",{className:"relative prose"},this.editButtons(),r.default.createElement(i.default,f({maxHeight:n,code:t},this.props,{highlightThemeCss:c.highlightThemeCss,highlightedCode:a,onCopy:function(){analytics.track("Copied example with clipboard")}}))))}}])&&p(t.prototype,n),o&&p(t,o),s}(r.default.Component);k.propTypes={code:o.default.string.isRequired,highlighter:o.default.func.isRequired,filename:o.default.string,maxHeight:o.default.number,edit:o.default.shape({css:o.default.string.isRequired,js:o.default.string.isRequired,html:o.default.string.isRequired,head:o.default.string,frontMatter:o.default.shape({title:o.default.string.isRequired,description:o.default.string.isRequired,pathname:o.default.string.isRequired}),resources:o.default.shape({js:o.default.array,css:o.default.array})})};var w=k;t.default=w},aYGk:function(e,t,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
e.exports=function(){return n={},e.m=t=[function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,a=r.length;i<a;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),o=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return d=t,p=n,(f=e).addEventListener(d,p),{destroy:function(){f.removeEventListener(d,p)}};if(r.nodeList(e))return c=e,u=t,s=n,Array.prototype.forEach.call(c,(function(e){e.addEventListener(u,s)})),{destroy:function(){Array.prototype.forEach.call(c,(function(e){e.removeEventListener(u,s)}))}};if(r.string(e))return i=e,a=t,l=n,o(document.body,i,a,l);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var i,a,l,c,u,s,f,d,p}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function o(e,t,n,o,i){var a=function(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),this.resolveOptions(e),this.initSelection()}var c=(function(e,t,n){t&&a(e.prototype,t)}(l,[{key:"resolveOptions",value:function(e){var t=0<arguments.length&&void 0!==e?e:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(e){var t=0<arguments.length&&void 0!==e?e:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),l),u=n(1),s=n.n(u),f=n(2),d=n.n(f),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(m,s.a),function(e,t,n){t&&h(e.prototype,t),n&&h(e,n)}(m,[{key:"resolveOptions",value:function(e){var t=0<arguments.length&&void 0!==e?e:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return b("action",e)}},{key:"defaultTarget",value:function(e){var t=b("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return b("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(e){var t=0<arguments.length&&void 0!==e?e:["copy","cut"],n="string"==typeof t?[t]:t,r=!!document.queryCommandSupported;return n.forEach((function(e){r=r&&!!document.queryCommandSupported(e)})),r}}]),m);function m(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(m.__proto__||Object.getPrototypeOf(m)).call(this));return n.resolveOptions(t),n.listenClick(e),n}function b(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=y}],e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.p="",e(e.s=6).default;function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t,n}()},dFFd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n("q1tI")),o=s(n("TSYQ")),i=s(n("17x9")),a=s(n("aYGk")),l=s(n("5sBR")),c=s(n("9cLM")),u=s(n("UJnQ"));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?g(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(){var e,n;p(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return v(g(g(n=y(this,(e=m(t)).call.apply(e,[this].concat(o))))),"state",{showingFeedback:!1}),v(g(g(n)),"handleCopyButtonClick",(function(e){var t=n.props,r=t.onCopy,o=t.text;r&&r(o),n.showFeedback(),n.destroyClipboard(),e&&n.setClipboard(e.target)})),v(g(g(n)),"showFeedback",(function(){n.setState({showingFeedback:!0}),n.revertTimer=setTimeout((function(){n.setState({showingFeedback:!1})}),800)})),v(g(g(n)),"setContainer",(function(e){if(e){var t=n.props.textEl;n.container=e,!t&&a.default.isSupported()&&n.setClipboard(e)}})),v(g(g(n)),"getContainer",(function(){return n.container})),v(g(g(n)),"destroyClipboard",(function(){n.clipboard&&n.clipboard.destroy()})),n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){this.props.textEl&&a.default.isSupported()&&this.setClipboard(this.props.textEl)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.revertTimer),this.destroyClipboard()}},{key:"componentWillReceiveProps",value:function(e){var t=a.default.isSupported();e.textEl!==this.props.textEl&&t&&this.setClipboard(e.textEl),t||this.destroyClipboard()}},{key:"setClipboard",value:function(e){var t=this.props.focusTrapPaused;this.clipboard=new a.default(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},!t&&{container:e}))}},{key:"renderFeedbackPopover",value:function(){return this.state.showingFeedback?r.default.createElement(c.default,{getAnchorElement:this.getContainer,placement:"top",alignment:"center",hideWhenAnchorIsOffscreen:!0,accessibleTitle:null,padding:"small"},r.default.createElement("div",{className:"txt-s"},"Copied!")):null}},{key:"render",value:function(){var e=this.props,t=this.state;if("undefined"!=typeof document&&!a.default.isSupported())return null;var n=t.showingFeedback?"check":"clipboard",i=(0,o.default)(e.className,{block:e.block});return r.default.createElement(u.default,{disabled:t.showingFeedback,content:"Copy",block:e.block},r.default.createElement("button",d({"aria-label":"Copy",type:"button",className:i},e.passthroughProps,{ref:this.setContainer,"data-clipboard-text":e.text,onClick:this.handleCopyButtonClick}),r.default.createElement(l.default,{name:n}),this.renderFeedbackPopover()))}}])&&h(n.prototype,i),s&&h(n,s),t}(r.default.PureComponent);t.default=k,k.propTypes={text:i.default.string.isRequired,textEl:i.default.object,onCopy:i.default.func,block:i.default.bool,focusTrapPaused:i.default.bool,className:i.default.string,passthroughProps:i.default.object},k.defaultProps={className:"btn btn--xs py3 px3 round",block:!1},k.isCopySupported=function(){return a.default.isSupported()}},ilnc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=a(n("5sBR"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,o,a=f(l);function l(){var e;c(this,l);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return y(p(e=a.call.apply(a,[this].concat(n))),"renderFilename",(function(){return r.default.createElement("div",{className:"inline-block txt-bold mb6 color-gray-dark"},e.props.filename)})),y(p(e),"renderLink",(function(){return r.default.createElement("div",{className:"inline-block ml12-mm"},r.default.createElement("a",{className:"unprose link",href:e.props.link,title:"View ".concat(e.props.filename," on GitHub")},r.default.createElement(i.default,{name:"github",inline:!0})," View on GitHub"))})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.link,n=e.toggle;return r.default.createElement("div",{className:"flex-parent-mm flex-parent--space-between-main-mm mb6"},r.default.createElement("div",{className:"flex-child"},this.renderFilename(),t&&this.renderLink()),n&&r.default.createElement("div",{className:"flex-child"},n))}}])&&u(t.prototype,n),o&&u(t,o),l}(r.default.Component);t.default=m,m.propTypes={filename:o.default.string,link:function(e,t,n){if(e[t]&&!/^https:\/\/github\.com\//.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed.")},toggle:o.default.node}},irdr:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("Kyok"))&&r.__esModule?r:{default:r}).default;t.default=o},"rmz/":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("dFFd"))&&r.__esModule?r:{default:r}).default;t.default=o},tcEi:function(e,t){e.exports=function(e,t){(t=t||{}).listUnicodeChar=!!t.hasOwnProperty("listUnicodeChar")&&t.listUnicodeChar,t.stripListLeaders=!t.hasOwnProperty("stripListLeaders")||t.stripListLeaders,t.gfm=!t.hasOwnProperty("gfm")||t.gfm,t.useImgAltText=!t.hasOwnProperty("useImgAltText")||t.useImgAltText;var n=e||"";n=n.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{t.stripListLeaders&&(n=t.listUnicodeChar?n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,t.listUnicodeChar+" $1"):n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),t.gfm&&(n=n.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),n=n.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,t.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(t){return console.error(t),e}return n}}}]);
//# sourceMappingURL=vendors~maplibre-gl-js-docs-api~maplibre-gl-js-docs-api-events~maplibre-gl-js-docs-api-geography~map~c438495c-e44f2ec56e5b9bf4f5e4.chunk.js.map