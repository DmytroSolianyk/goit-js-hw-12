import{a as c,S as u,i as s}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const d="48841275-5fdf514aecbb5a7f0d9901bba",p="https://pixabay.com/api/";function f(r){return c.get(p,{params:{key:d,q:r,image_type:"photo",safesearch:!0,orientation:"horizontal"}}).then(t=>t.data.hits??[]).catch(t=>{throw console.error("Помилка при виконанні запиту:",t),t})}function m(r){return r.map(({webformatURL:t,tags:a,largeImageURL:o,views:e,downloads:n,likes:i,comments:l})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${t}" alt="${a}" />
          </a>
          <div class="gallery-item-description">
            <label>
              Likes
              <span>${i}</span>
            </label>
    
            <label>
              Views
              <span>${e}</span>
            </label>
    
            <label>
              Comments
              <span>${l}</span>
            </label>
    
            <label>
              Downloads
              <span>${n}</span>
            </label>
          </div>
        </li>
      `).join("")}document.addEventListener("DOMContentLoaded",y);function y(){document.getElementById("search-form").addEventListener("submit",g)}async function g(r){r.preventDefault();const t=h();if(t===""){v();return}const a=document.getElementById("gallery");b(a);try{const o=await f(t);L(a,o)}catch(o){I(o)}}function h(){return document.getElementById("search-input").value}function b(r){r.innerHTML='<span class="loader"></span>'}function L(r,t){if(r.innerHTML="",t.length>0){const a=m(t);r.innerHTML=a,new u(".gallery a").refresh()}else E(),S()}function E(){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function v(){s.error({message:"Sorry, search input cannot be empty!",position:"topRight"})}function I(r){console.error("Помилка при виконанні запиту:",r)}function S(){document.getElementById("search-input").value=""}
//# sourceMappingURL=index.js.map
