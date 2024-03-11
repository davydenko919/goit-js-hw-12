import{a as L,i as d,S as $}from"./assets/vendor-5b76a5ec.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const q="42787384-4c627c93f7dff570902230658",v="https://pixabay.com/api/";async function m(o,r=1){try{return(await L.get(`${v}?key=${q}&q=${o}&image_type=photo&per_page=15&page=${r}`)).data}catch(t){throw console.error("Error fetching data:",t),t}}function u(o){return o.hits.map(({largeImageURL:r,webformatURL:t,tags:i,likes:e,views:s,comments:a,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img 
            src="${t}" 
            alt="${i}" 
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
                <span>Downloads: <span>${S}</span>
                </span>    
            </p>
        </div>
    </li>`).join("")}const l=document.querySelector(".card-place"),y=document.querySelector(".form"),w=y.querySelector(".input"),h=document.querySelector(".load-btn"),n=document.querySelector(".loader-div");n.style.display="none";let g;h.style.display="none";let p=1,c,b;y.addEventListener("submit",E);h.addEventListener("click",M);async function E(o){o.preventDefault(),n.style.display="flex",p=1,l.innerHTML="";const r=w.value.trim().toLowerCase().replace(/ /g,"+");g=r,m(r).then(t=>{c=t.totalHits,b=Math.ceil(c/15),c===0?(d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),document.querySelector(".load-btn").style.display="none",n.style.display="none"):c<=15?(l.innerHTML=u(t),f.refresh(),y.reset(),document.querySelector(".load-btn").style.display="none"):(l.innerHTML=u(t),f.refresh(),y.reset(),document.querySelector(".load-btn").style.display="block"),n.style.display="none"}).catch(t=>{d.error({message:`${t}`})})}async function M(o){o.preventDefault(),n.style.display="flex",p++,p>=b&&(d.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",n.style.display="none");try{const r=await m(g,p),t=u(r);l.insertAdjacentHTML("beforeend",t),f.refresh(),P(l.firstElementChild.getBoundingClientRect().height*2),n.style.display="none"}catch(r){d.error({message:`${r}`})}}const f=new $(".gallery-link",{captionsData:"alt",captionDelay:250});function P(o){window.scrollBy({top:o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
