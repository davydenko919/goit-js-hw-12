import{a as S,i as l,S as v}from"./assets/vendor-5b76a5ec.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const L="42787384-4c627c93f7dff570902230658",w="https://pixabay.com/api/";async function y(n,r){const t=`${w}?key=${L}&q=${n}&image_type=photo&per_page=15`;console.log(t);try{const s=await S.get(t);return s.data.hits.length===0?(r===1?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):l.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",[]):s.data}catch(s){console.error(`Error: ${s}`)}}function f(n){return n.hits.map(({largeImageURL:r,webformatURL:t,tags:s,likes:e,views:o,comments:a,downloads:b})=>`<li class="gallery-item">
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
                <span>Comments: <span>${a}</span>
                </span>    
            </p>
            <p>
                <span>Downloads: <span>${b}</span>
                </span>    
            </p>
        </div>
    </li>`).join("")}const u=document.querySelector(".card-place"),p=document.querySelector(".form"),q=p.querySelector(".input"),d=document.querySelector(".load-btn"),$=document.querySelector(".loader-div");$.style.display="none";let h;d.style.display="none";let m=15,c=1,i;p.addEventListener("submit",E);d.addEventListener("click",P);async function E(n){n.preventDefault(),c=1,u.innerHTML="";const r=q.value.trim().toLowerCase().replace(/ /g,"+");h=r,y(r).then(t=>{i=t.totalHits,console.log(i),i<m?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(u.innerHTML=f(t),g.refresh(),p.reset(),d.style.display="block")}).catch(t=>{console.error("Error:",t)})}async function P(n){n.preventDefault(),c++;const r=Math.floor(i/m);console.log(r),c>=r&&(d.style.display="none",l.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none");try{const t=await y(h,c);if(t.hits.length>0){const s=f(t);u.insertAdjacentHTML("beforeend",s),g.refresh(),B(u.firstElementChild.getBoundingClientRect().height*2)}else l.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none"}catch(t){console.error("Error:",t)}}const g=new v(".gallery-link",{captionsData:"alt",captionDelay:250});function B(n){window.scrollBy({top:n,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
