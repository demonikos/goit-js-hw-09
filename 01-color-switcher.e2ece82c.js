const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body;function a(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,d.style.backgroundColor=a(),console.log("started!"),startInterval=setInterval((()=>{d.style.backgroundColor=a()}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,clearInterval(startInterval),console.log("stoped!")})),window.addEventListener("load",(()=>{t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.e2ece82c.js.map
