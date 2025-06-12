import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();let l=null;function p(i){const a=document.querySelector(".gallery");a.innerHTML="";const o=i.map(({webformatURL:s,largeImageURL:e,tags:r,likes:t,views:c,comments:u,downloads:d})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${s}"
            data-source="${e}"
            alt="${r}"
          />
          <ul class='metadata'>
                <li>
                    <p class='metadata-heading'>Likes</p>
                    <p>${t}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Views</p>
                    <p>${c}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Comments</p>
                    <p>${u}</p>
                </li>
                <li>
                    <p metadata-heading>Downloads</p>
                    <p>${d}</p>
                </li>
            </ul>
        </a>
        
      </li>
      `).join("");a.insertAdjacentHTML("beforeend",o),l?l.refresh():l=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function f(i){i.preventDefault();const o=i.target.elements.user_query.value.trim(),s=document.querySelector(".gallery");s.innerHTML="";const e=document.querySelector(".loader");if(o===""){n.warning({message:"Please enter a search query.",position:"topRight"});return}const r=new URLSearchParams({key:"50817296-2eab3913ceee07bc816ca0d08",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});e.classList.add("js-loader"),fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(t.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t.hits)}).catch(t=>{n.error({message:`An error occurred: ${t.message}`,position:"topRight"})}).finally(()=>{e.classList.remove("js-loader")})}const h={form:document.querySelector(".search")};h.form.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
