!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./public/js",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(e){const t="gallery-one-preview",n="b-preview_active";var o=document.querySelectorAll("["+t+"]"),l=document.querySelectorAll("[gallery-one-stage]");function c(e){var c=e.getAttribute("data-index"),r=e.getAttribute(t);!function(e,t){[].forEach.call(e,function(e,o){o==t&&e.classList.contains(n)||(o==t?e.classList.add(n):e.classList.contains(n)&&e.classList.remove(n))})}(o,c),[].forEach.call(l,function(e,t){t==c?e.classList.add(r):e.classList.contains(r)&&e.classList.remove(r)})}0!==o.length&&function(t){[].forEach.call(t,function(t,o){t.onclick=function(e){c(t)},t.classList.contains(n)?c(t):o==e&&c(t)})}(o)}(0),function(){const e="gallery-two-url";var t=document.querySelectorAll("[gallery-two-link]"),n=document.querySelectorAll("[gallery-two-popup]")[0],o=document.querySelectorAll("[gallery-two-popup-padd]")[0],l=document.querySelectorAll("[gallery-two-popup-content]")[0],c=document.querySelectorAll("[gallery-two-popup-close]")[0],r=document.querySelectorAll("[gallery-two-popup-prev]")[0],i=document.querySelectorAll("[gallery-two-popup-next]")[0],a="https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png",s=null;function u(c,u){var d,y="",f=c.getAttribute(e),p=""!==f?f:a;y=(d=function(e){let t=e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);return!!t&&t[1]}(p))?'<iframe id="content"  width="100%" height="100%" src="https://www.youtube.com/embed/'+d+'?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>':'<img id="content" width="100%"  height="100%" src="'+p+'"></img>',s=u,o.style.width="100%",o.style.height="100%",o.style.margin="0 auto",setTimeout(function(e){l.innerHTML=e,n.style.display="flex";var o=.5625*(e=document.getElementById("content")).clientWidth;e.style.height=o+"px",0===s?(r.style.display="none",i.style.display="block"):s===t.length-1?(r.style.display="block",i.style.display="none"):(r.style.display="block",i.style.display="block")}(y),100)}function d(e){u(t[e],e)}0!==t.length&&([].forEach.call(t,function(e,t){e.onclick=function(n){u(e,t)}}),c.onclick=function(e){l.innerHTML="",n.style.display="none"},r.onclick=function(e){d(s-1)},i.onclick=function(e){d(s+1)})}(),function(){const e="gallery-three-url";var t=document.querySelectorAll("[gallery-three-link]"),n=document.querySelectorAll("[gallery-three-popup]")[0],o=document.querySelectorAll("[gallery-three-popup-padd]")[0],l=document.querySelectorAll("[gallery-three-popup-content]")[0],c=document.querySelectorAll("[gallery-three-popup-close]")[0],r="https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png";function i(){l.innerHTML="",n.style.display="none"}0!==t.length&&([].forEach.call(t,function(t,c){t.onclick=function(c){!function(t){var c="";let i=!1;var a=t.getAttribute(e),s=""!==a?a:r;c=(i=function(e){let t=e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);return!!t&&t[1]}(s))?'<iframe id="contentGalleryThreePopup"  width="100%" height="100%" src="https://www.youtube.com/embed/'+i+'?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>':'<img id="contentGalleryThreePopup" width="100%"  height="100%" src="'+s+'"></img>',o.style.width="100%",o.style.height="100%",o.style.margin="0 auto",setTimeout(function(e){l.innerHTML=e,n.style.display="flex";var t=.5625*(e=document.getElementById("contentGalleryThreePopup")).clientWidth;e.style.height=t+"px"}(c),500)}(t)}}),c.onclick=function(e){i()},n.onclick=function(e){i()})}(),Array.from(document.querySelectorAll(".b-gallery-carousel-body")).forEach(function(e){const t=e.querySelector(".b-gallery-carousel-body__arrow-prev"),n=e.querySelector(".b-gallery-carousel-body__arrow-next");t.addEventListener("click",function(){const t=e.querySelectorAll(".b-gallery-carousel-body-item");Array.from(t).forEach(function(n,o){if(n.classList.remove("b-gallery-carousel-body-item_active"),o===t.length-1){const t=e.querySelector(".b-gallery-carousel-body__items");t.insertBefore(n,t.firstChild)}0===o&&n.classList.add("b-gallery-carousel-body-item_active")})}),n.addEventListener("click",function(){const t=e.querySelectorAll(".b-gallery-carousel-body-item");Array.from(t).forEach(function(t,n){t.classList.remove("b-gallery-carousel-body-item_active"),0===n&&e.querySelector(".b-gallery-carousel-body__items").appendChild(t),2===n&&t.classList.add("b-gallery-carousel-body-item_active")})})}),function(){for(var e=document.querySelectorAll("[tabs-link]"),t=document.querySelectorAll("[tabs-content]"),n=0;n<e.length;n++)!function(n){var o=e[n];o.onclick=function(){for(var l=0;l<e.length;l++){var c=e[l];l!=n&&c.classList.remove("b-system-platforms__item_active")}o.classList.toggle("b-system-platforms__item_active");for(var r=0;r<t.length;r++)"block"==window.getComputedStyle(t[r]).display&&(t[r].style.display="none");t[n].style.display="block"}}(n)}(),function(e){const t="product-extend-preview",n="b-products-list__item_active";var o=document.querySelectorAll("["+t+"]"),l=document.querySelectorAll("[product-extend-stage]");function c(e){var c=e.getAttribute("data-index"),r=e.getAttribute(t);!function(e,t){[].forEach.call(e,function(e,o){o==t&&e.classList.contains(n)||(o==t?e.classList.add(n):e.classList.contains(n)&&e.classList.remove(n))})}(o,c),[].forEach.call(l,function(e,t){t==c?e.classList.add(r):e.classList.contains(r)&&e.classList.remove(r)})}0!==o.length&&function(t){[].forEach.call(t,function(t,o){t.onclick=function(e){c(t)},t.classList.contains(n)?c(t):o==e&&c(t)})}(o)}(0),function(){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);const n=[];window.onYouTubeIframeAPIReady=function(){n.forEach(function(e){e()})},Array.from(document.querySelectorAll(".b-video-section")).forEach(function(e){const t=e.querySelector("video"),o=e.querySelector("iframe");t&&function(e,t){t.addEventListener("play",function(){e.classList.add("b-video-section_playing")}),t.addEventListener("pause",function(){e.classList.remove("b-video-section_playing")}),t.addEventListener("ended",function(){e.classList.remove("b-video-section_playing")})}(e,t),o&&function(e,t){n.push(function(){new window.YT.Player(t,{events:{onStateChange:function(t){1!==t.data&&3!==t.data||e.classList.add("b-video-section_playing"),0!==t.data&&2!==t.data||e.classList.remove("b-video-section_playing")}}})})}(e,o)})}()}]);