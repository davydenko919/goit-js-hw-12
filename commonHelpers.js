import{a as w,i as l,S as L}from"./assets/vendor-5b76a5ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const $="42787384-4c627c93f7dff570902230658",q="https://pixabay.com/api/";async function h(o,t=1){try{return(await w.get(`${q}?key=${$}&q=${o}&image_type=photo&per_page=15&page=${t}`)).data}catch(s){throw console.error("Error fetching data:",s),s}}function g(o){return o.hits.map(({largeImageURL:t,webformatURL:s,tags:i,likes:e,views:r,comments:a,downloads:v})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
            <img 
            src="${s}" 
            alt="${i}" 
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
                <span>Comments: <span>${a}</span>
                </span>    
            </p>
            <p>
                <span>Downloads: <span>${v}</span>
                </span>    
            </p>
        </div>
    </li>`).join("")}const p=document.querySelector(".card-place"),u=document.querySelector(".form"),E=u.querySelector(".input"),f=document.querySelector(".load-btn"),n=document.querySelector(".loader-div");n.style.display="none";let b;f.style.display="none";let m=15,c=1,d,y;u.addEventListener("submit",P);f.addEventListener("click",x);async function P(o){o.preventDefault(),n.style.display="flex",c=1,p.innerHTML="";const t=E.value.trim().toLowerCase().replace(/ /g,"+");b=t,h(t).then(s=>{d=s.totalHits,y=Math.floor(d/m),d<m?(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),document.querySelector(".load-btn").style.display="none",n.style.display="none"):(p.innerHTML=g(s),S.refresh(),u.reset(),f.style.display="block",y===1&&(document.querySelector(".load-btn").style.display="none"),n.style.display="none")}).catch(s=>{l.error({message:`${s}`})})}async function x(o){o.preventDefault(),n.style.display="flex",c++,c>=y&&(l.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",n.style.display="none");try{const t=await h(b,c);if(t.hits.length>0){const s=g(t);p.insertAdjacentHTML("beforeend",s),S.refresh(),B(p.firstElementChild.getBoundingClientRect().height*2),n.style.display="none"}else l.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",n.style.display="none"}catch(t){l.error({message:`${t}`})}}const S=new L(".gallery-link",{captionsData:"alt",captionDelay:250});function B(o){window.scrollBy({top:o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
