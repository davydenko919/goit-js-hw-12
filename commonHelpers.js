import{a as g,i as d,S as b}from"./assets/vendor-5b76a5ec.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const L="42787384-4c627c93f7dff570902230658",S="https://pixabay.com/api/";async function u(t,r){const s=`${S}?key=${L}&q=${t}&image_type=photo&per_page=15&page=${r}`;console.log(s);try{const n=await g.get(s);return n.data.hits.length===0?(r===1?d.error({message:"Sorry, there are no images matching your search query. Please try again!"}):d.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",[]):n.data}catch(n){console.error(`Error: ${n}`)}}function y(t){return t.hits.map(({largeImageURL:r,webformatURL:s,tags:n,likes:e,views:o,comments:a,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img 
            src="${s}" 
            alt="${n}" 
            width="360" height="260"/>
        </a>
        <div>
            <p>
                <span>Likes: <span>${e}</span>
                </span>    
            </p>
            <p>
                <span>Views: <span>${o}</span>
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
    </li>`).join("")}const l=document.querySelector(".card-place"),p=document.querySelector(".form"),v=p.querySelector(".input"),c=document.querySelector(".load-btn"),w=document.querySelector(".loader-div");w.style.display="none";let h;c.style.display="none";let $=15;const q=Math.ceil(100/$);p.addEventListener("submit",t=>{t.preventDefault(),i=1,l.innerHTML="";const r=v.value.trim().toLowerCase().replace(/ /g,"+");h=r,c.style.display="block",u(r,i).then(s=>{l.innerHTML=y(s),f.refresh(),p.reset()}).catch(s=>{console.error("Error:",s)})});const f=new b(".gallery-link",{captionsData:"alt",captionDelay:250});let i=1;c.addEventListener("click",async()=>{if(i++,i>q){c.style.display="none",iziToast.show({message:"We're sorry, but you've reached the end of search results."});return}try{const t=await u(h,i);if(t.hits.length>0){const r=y(t);l.insertAdjacentHTML("beforeend",r),f.refresh(),E(l.firstElementChild.getBoundingClientRect().height*2)}else iziToast.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none"}catch(t){console.error("Error:",t)}});function E(t){window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
