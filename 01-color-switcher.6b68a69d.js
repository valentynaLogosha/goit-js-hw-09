!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),n=null;function a(t,e,r){t.setAttribute("disabled",r),e.removeAttribute("disabled")}function o(o){var c=o.target;c===e?(a(e,r,!0),n=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)):c===r&&(a(r,e,!0),clearInterval(n))}r.setAttribute("disabled",""),e.addEventListener("click",o),r.addEventListener("click",o)}();
//# sourceMappingURL=01-color-switcher.6b68a69d.js.map