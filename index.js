import{a as p,S as y,i as d}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const h="48841275-5fdf514aecbb5a7f0d9901bba",b="https://pixabay.com/api/";function E(e,r=1,n=10){return p.get(b,{params:{key:h,q:e,image_type:"photo",safesearch:!0,orientation:"horizontal",page:r,per_page:n}}).then(a=>a.data).catch(a=>{throw console.error("Помилка при виконанні запиту:",a),a})}function L(e){return e.map(({webformatURL:r,tags:n,largeImageURL:a,views:t,downloads:o,likes:i,comments:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img class="gallery-image" src="${r}" alt="${n}" />
          </a>
          <div class="gallery-item-description">
            <label>
              Likes
              <span>${i}</span>
            </label>
    
            <label>
              Views
              <span>${t}</span>
            </label>
    
            <label>
              Comments
              <span>${f}</span>
            </label>
    
            <label>
              Downloads
              <span>${o}</span>
            </label>
          </div>
        </li>
      `).join("")}let l=1,m=40,s="";document.addEventListener("DOMContentLoaded",I);function I(){document.getElementById("search-form").addEventListener("submit",v),document.getElementById("load-more").addEventListener("click",async()=>{u(!1),l++,await g(s),P()})}async function v(e){e.preventDefault();const r=document.getElementById("gallery");if(r.innerHTML="",u(!1),l=1,s=B(),s===""){O();return}await g(s)}async function g(e){const r=document.getElementById("gallery");c(!0);try{const n=await E(e.trim(),l,m);w(r,n.hits),n.totalHits>l*m?u(!0):n.hits.length>0&&M()}catch(n){R(n),c(!1)}}function B(){return document.getElementById("search-input").value}function c(e){e?document.getElementById("loading").classList.remove("hidden"):document.getElementById("loading").classList.add("hidden")}function u(e){e?document.getElementById("load-more").classList.remove("hidden"):document.getElementById("load-more").classList.add("hidden")}function w(e,r){if(r.length>0){const n=L(r);e.innerHTML+=n,new y(".gallery a").refresh(),c(!1)}else S(),$(),c(!1)}function S(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function M(){d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function O(){d.error({message:"Sorry, search input cannot be empty!",position:"topRight"})}function R(e){d.error({message:e.code,position:"topRight"})}function $(){document.getElementById("search-input").value=""}function P(){const e=document.querySelectorAll(".gallery-item");if(e.length>0){const r=e[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
