import{a as v,i,S as L}from"./assets/vendor-5b76a5ec.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const w="42787384-4c627c93f7dff570902230658",q="https://pixabay.com/api/";async function f(n,r=1){const t=`${q}?key=${w}&q=${n}&image_type=photo&per_page=15&page=${r}`;console.log(t);try{const s=await v.get(t);return s.data.hits.length>15?(r===1?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):i.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",[]):s.data}catch(s){console.error(`Error: ${s}`)}}function h(n){return n.hits.map(({largeImageURL:r,webformatURL:t,tags:s,likes:e,views:o,comments:l,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img 
            src="${t}" 
            alt="${s}" 
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
                <span>Comments: <span>${l}</span>
                </span>    
            </p>
            <p>
                <span>Downloads: <span>${S}</span>
                </span>    
            </p>
        </div>
    </li>`).join("")}const p=document.querySelector(".card-place"),u=document.querySelector(".form"),$=u.querySelector(".input"),y=document.querySelector(".load-btn"),a=document.querySelector(".loader-div");a.style.display="none";let m;y.style.display="none";let g=15,c=1,d;u.addEventListener("submit",E);y.addEventListener("click",P);async function E(n){n.preventDefault(),a.style.display="flex",c=1,p.innerHTML="";const r=$.value.trim().toLowerCase().replace(/ /g,"+");m=r,f(r).then(t=>{d=t.totalHits,console.log(d),d<g?(i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none"):(p.innerHTML=h(t),b.refresh(),u.reset(),y.style.display="block",a.style.display="none")}).catch(t=>{console.error("Error:",t)})}async function P(n){n.preventDefault(),c++;const r=Math.floor(d/g);console.log(r),c>=r&&(y.style.display="none",i.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",a.style.display="none");try{const t=await f(m,c);if(t.hits.length>0){const s=h(t);p.insertAdjacentHTML("beforeend",s),b.refresh(),B(p.firstElementChild.getBoundingClientRect().height*2),a.style.display="none"}else i.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",a.style.display="none"}catch(t){console.error("Error:",t)}}const b=new L(".gallery-link",{captionsData:"alt",captionDelay:250});function B(n){window.scrollBy({top:n,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
