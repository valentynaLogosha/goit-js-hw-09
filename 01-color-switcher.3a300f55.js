const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let o=null;function n(t,e,r){t.setAttribute("disabled",r),e.removeAttribute("disabled")}function a(a){const d=a.target;d===e?(n(e,r,!0),o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)):d===r&&(n(r,e,!0),clearInterval(o))}r.setAttribute("disabled",""),e.addEventListener("click",a),r.addEventListener("click",a);
//# sourceMappingURL=01-color-switcher.3a300f55.js.map