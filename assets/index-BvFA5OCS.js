(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i={modalAuth:document.getElementById("modal-auth"),btnDemo:document.getElementById("btn-demo"),btnClose:document.getElementById("btn-close-modal"),formSignIn:document.getElementById("form-sign-in"),inputLogoSignIn:document.getElementById("login-sign-in"),inputPassSignIn:document.getElementById("password-sign-in")};function u(){const l=i.btnDemo,o=i.btnClose,n=i.modalAuth;l.addEventListener("click",r),o.addEventListener("click",e),n.addEventListener("click",t);function r(){n.classList.add("open")}function e(){n.classList.remove("open")}function t(s){s.target===n&&n.classList.remove("open")}}function m(){const l=i.inputLogoSignIn,o=i.inputPassSignIn,n=i.formSignIn,r=i.modalAuth;n.addEventListener("submit",e);function e(t){t.preventDefault();const s=l.value,d=o.value,c=new FormData;c.append("logo",s),c.append("password",d);const a=Object.fromEntries(c.entries());console.log(a),r.classList.remove("open"),n.reset()}}u();m();