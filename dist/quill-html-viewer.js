!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){o(this,e),this.quill=t,this.toolbar=t.getModule("toolbar"),void 0!==this.toolbar&&this.toolbar.addHandler("htmlViewer",this.htmlViewer);var n=document.getElementsByClassName("ql-htmlViewer");n&&[].slice.call(n).forEach(function(e){e.innerHTML="[Source]",e.id="ql-source-btn",e.style.fontWeight="bold",e.style.width="80px",e.parentNode.style.cssText="float:right;"})}return r(e,[{key:"htmlViewer",value:function(){var e=this.quill;if(document.getElementById("sourceView"))t=document.getElementById("sourceView");else{var t=document.createElement("textarea");t.style.cssText="width: 100%;margin: 0px;background: #eee;box-sizing: border-box;color: #000;font-size: 15px;outline: none;padding: 20px;line-height: 24px;font-family: Consolas, Menlo, Monaco, &quot;Courier New&quot;, monospace;position: absolute;top: 0;bottom: 0;border: none;display:none;overflow-y:scroll;",t.id="sourceView"}var n=document.getElementById("ql-source-btn");n.innerHTML="[Visual]";for(var o=document.querySelectorAll(".ql-formats"),r=0;r<o.length;r++)o[r].style.visibility="hidden";n.parentNode.style.visibility="visible";var i=document.querySelector(".ql-custom");i||(i=e.addContainer("ql-custom")),i.appendChild(t);document.querySelector("#quill-editor");if("none"===t.style.display){var l=e.root.innerHTML;t.value=l}if(e.on("text-change",function(n,o,r){var i=e.root.innerHTML;t.value=i}),""===t.style.display){var u=t.value;this.quill.pasteHTML(u),n.innerHTML="[Source]";for(var r=0;r<o.length;r++)o[r].style.visibility="visible"}t.style.display="none"===t.style.display?"":"none"}}]),e}();Quill.register("modules/html_viewer",i)},function(e,t){},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),i=(o(r),n(0));o(i)}]);