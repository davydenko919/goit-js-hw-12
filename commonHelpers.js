import{a as L,i as d,S as $}from"./assets/vendor-5b76a5ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="42787384-4c627c93f7dff570902230658",v="https://pixabay.com/api/";async function u(s,t=1){try{return(await L.get(`${v}?key=${q}&q=${s}&image_type=photo&per_page=15&page=${t}`)).data}catch(o){throw console.error("Error fetching data:",o),o}}function f(s){return s.hits.map(({largeImageURL:t,webformatURL:o,tags:c,likes:e,views:r,comments:l,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
            <img 
            src="${o}" 
            alt="${c}" 
            width="360" height="260"/>
        </a>
        <div>
            <p>
                <span>Likes: <span>${e}</span>
                </span>    
            </p>
            <p>
                <span>Views: <span>${r}</span>
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
    </li>`).join("")}const i=document.querySelector(".card-place"),y=document.querySelector(".form"),w=y.querySelector(".input"),h=document.querySelector(".load-btn"),n=document.querySelector(".loader-div");n.style.display="none";let b;h.style.display="none";let p=1,a,m;y.addEventListener("submit",E);h.addEventListener("click",M);async function E(s){s.preventDefault(),n.style.display="flex",p=1,i.innerHTML="";const t=w.value.trim().toLowerCase().replace(/ /g,"+");b=t,console.log(u(t)),u(t).then(o=>{a=o.totalHits,m=Math.floor(a/15),console.log(a),console.log(m),a<15?(d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),document.querySelector(".load-btn").style.display="none",n.style.display="none"):a>=15&&a<30?(i.innerHTML=f(o),g.refresh(),y.reset(),document.querySelector(".load-btn").style.display="none"):(i.innerHTML=f(o),g.refresh(),y.reset(),document.querySelector(".load-btn").style.display="block"),n.style.display="none"}).catch(o=>{d.error({message:`${o}`})})}async function M(s){s.preventDefault(),n.style.display="flex",p++,p>=m&&(d.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",n.style.display="none");try{const t=await u(b,p),o=f(t);i.insertAdjacentHTML("beforeend",o),g.refresh(),P(i.firstElementChild.getBoundingClientRect().height*2),n.style.display="none"}catch(t){d.error({message:`${t}`})}}const g=new $(".gallery-link",{captionsData:"alt",captionDelay:250});function P(s){window.scrollBy({top:s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
