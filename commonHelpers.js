import{a as g,i as u,S as b}from"./assets/vendor-5b76a5ec.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const L="42787384-4c627c93f7dff570902230658",w="https://pixabay.com/api/";async function d(t,r){const o=`${w}?key=${L}&q=${t}&image_type=photo&per_page=15&page=${r}`;console.log(o);try{const n=await g.get(o);return n.data.hits.length===0?(r===1?u.error({message:"Sorry, there are no images matching your search query. Please try again!"}):u.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",[]):n.data}catch(n){console.error(`Error: ${n}`)}}function y(t){return t.hits.map(({largeImageURL:r,webformatURL:o,tags:n,likes:e,views:s,comments:a,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img 
            src="${o}" 
            alt="${n}" 
            width="360" height="260"/>
        </a>
        <div>
            <p>
                <span>Likes: <span>${e}</span>
                </span>    
            </p>
            <p>
                <span>Views: <span>${s}</span>
                </span>    
            </p>
            <p>
                <span>Comments: <span>${a}</span>
                </span>    
            </p>
            <p>
                <span>Downloads: <span>${m}</span>
                </span>    
            </p>
        </div>
    </li>`).join("")}const c=document.querySelector(".card-place"),p=document.querySelector(".form"),S=p.querySelector(".input"),l=document.querySelector(".load-btn");let h;l.style.display="none";let $=15;const v=Math.ceil(100/$);p.addEventListener("submit",t=>{t.preventDefault(),i=1,c.innerHTML="";const r=S.value.trim().toLowerCase().replace(/ /g,"+");h=r,l.style.display="block",d(r,i).then(o=>{c.innerHTML=y(o),f.refresh(),p.reset()}).catch(o=>{console.error("Error:",o)})});const f=new b(".gallery-link",{captionsData:"alt",captionDelay:250});let i=1;l.addEventListener("click",async()=>{if(i++,i>v){l.style.display="none",iziToast.show({message:"We're sorry, but you've reached the end of search results."});return}try{const t=await d(h,i);if(t.hits.length>0){const r=y(t);c.insertAdjacentHTML("beforeend",r),f.refresh(),E(c.firstElementChild.getBoundingClientRect().height*2)}else iziToast.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none"}catch(t){console.error("Error:",t)}});function E(t){window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
