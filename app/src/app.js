const colorThemes=[{theme:"clp-theme-01",indicator:".clp-index-01"},{theme:"clp-theme-02",indicator:".clp-index-02"},{theme:"clp-theme-03",indicator:".clp-index-03"},{theme:"clp-theme-04",indicator:".clp-index-04"},{theme:"clp-theme-05",indicator:".clp-index-05"},{theme:"clp-theme-06",indicator:".clp-index-06"}];function initColorTheme(){const e=null!==window.localStorage.getItem("clp-color-theme")?window.localStorage.getItem("clp-color-theme"):"clp-theme-01";document.body.setAttribute("data-clp-theme",e)}function saveColorTheme(e){window.localStorage.setItem("clp-color-theme",e)}function setColorTheme(e,t){document.body.setAttribute("data-clp-theme","");for(let c=0;c<e.length;c++){if(e[c].theme.includes(t)){document.body.setAttribute("data-clp-theme",t);break}}}function indexColorThemeInidicators(e,t){const c=null!==window.localStorage.getItem("clp-color-theme")?window.localStorage.getItem("clp-color-theme"):"theme is not set";for(let o=0;o<e.length;o++){const l=e[o];if(l.theme===c){document.querySelectorAll(l.indicator).forEach(e=>e.classList.add(t));break}}}initColorTheme(),indexColorThemeInidicators(colorThemes,"clp-current-theme"),document.querySelectorAll(".clp-index").forEach(function(e){e.onmouseenter=function(){this.classList.contains("clp-current-theme")||document.querySelectorAll(".clp-current-theme").forEach(function(e){e.classList.add("clp-disable")}),this.classList.add("active-theme")},e.onmouseleave=function(){this.classList.remove("active-theme"),document.querySelectorAll(".clp-current-theme").forEach(function(e){e.classList.remove("clp-disable")})},e.onclick=function(){document.querySelectorAll(".clp-current-theme").forEach(function(e){e.classList.remove("clp-current-theme"),e.classList.remove("clp-disable")});const e=this.getAttribute("data-clp-select");setColorTheme(colorThemes,e),saveColorTheme(e),indexColorThemeInidicators(colorThemes,"clp-current-theme")}});
