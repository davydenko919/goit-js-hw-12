import{a as L,i as l,S as $}from"./assets/vendor-5b76a5ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v="42787384-4c627c93f7dff570902230658",w="https://pixabay.com/api/";async function h(o,t=1){const s=`${w}?key=${v}&q=${o}&image_type=photo&per_page=15&page=${t}`;try{const n=await L.get(s);return n.data.hits.length>15?(t===1&&(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),document.querySelector(".load-btn").style.display="none"),document.querySelector(".load-btn").style.display="none",[]):n.data}catch(n){console.error(`Error: ${n}`)}}function g(o){return o.hits.map(({largeImageURL:t,webformatURL:s,tags:n,likes:e,views:r,comments:i,downloads:q})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
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
                <span>Views: <span>${r}</span>
                </span>    
            </p>
            <p>
                <span>Comments: <span>${i}</span>
                </span>    
            </p>
            <p>
                <span>Downloads: <span>${q}</span>
                </span>    
            </p>
        </div>
    </li>`).join("")}const d=document.querySelector(".card-place"),u=document.querySelector(".form"),E=u.querySelector(".input"),f=document.querySelector(".load-btn"),a=document.querySelector(".loader-div");a.style.display="none";let b;f.style.display="none";let m=15,c=1,y,p;u.addEventListener("submit",P);f.addEventListener("click",x);async function P(o){o.preventDefault(),a.style.display="flex",c=1,d.innerHTML="";const t=E.value.trim().toLowerCase().replace(/ /g,"+");b=t,h(t).then(s=>{y=s.totalHits,p=Math.floor(y/m),y<m?(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),document.querySelector(".load-btn").style.display="none",a.style.display="none"):(d.innerHTML=g(s),S.refresh(),u.reset(),f.style.display="block",p===1&&(document.querySelector(".load-btn").style.display="none"),a.style.display="none")}).catch(s=>{l.error({message:`${s}`})})}async function x(o){o.preventDefault(),a.style.display="flex",c++,c>=p&&(l.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",a.style.display="none");try{const t=await h(b,c);if(t.hits.length>0){const s=g(t);d.insertAdjacentHTML("beforeend",s),S.refresh(),B(d.firstElementChild.getBoundingClientRect().height*2),a.style.display="none"}else l.show({message:"We're sorry, but you've reached the end of search results."}),document.querySelector(".load-btn").style.display="none",a.style.display="none"}catch(t){l.error({message:`${t}`})}}const S=new $(".gallery-link",{captionsData:"alt",captionDelay:250});function B(o){window.scrollBy({top:o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
