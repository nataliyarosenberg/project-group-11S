import{a as w,i as k,S as N,N as z,P as R,b as W}from"./assets/vendor-7WN_uEAT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const $=document.querySelector(".loader-more"),x=document.querySelector(".loader-more-container"),_=document.querySelector(".furniture-list"),A=document.querySelector(".load-more-btn");let c=1,l=null;const L=8;window.allFurnitures=window.allFurnitures||[];async function U(){try{const t=(await w("https://furniture-store.b.goit.study/api/categories")).data;t.unshift({_id:"0",name:"Всі товари"}),document.querySelectorAll(".category-card").forEach((o,r)=>{const i=t[r];if(!i)return;o.dataset.id=i._id;const a=o.querySelector(".category-title");a&&(a.textContent=i.name)})}catch{k.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"../images/our-furniture/bi_x-octagon-2.svg",maxWidth:432})}}async function u(e=1,t){try{J(),S();let s=`https://furniture-store.b.goit.study/api/furnitures?limit=${L}&page=${e}`;t&&t!=="0"&&(s+=`&category=${t}`);const r=(await w(s)).data;X(r),l===null&&(l=Math.ceil(r.totalItems/L)),e>=l?S():Y()}catch{k.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"../images/our-furniture/bi_x-octagon-2.svg",maxWidth:432})}finally{Q()}}function X(e){const t=e.furnitures;window.allFurnitures=[...new Map([...window.allFurnitures,...t].map(o=>[o._id,o])).values()];const s=t.map(o=>{const{_id:r,name:i,description:a,price:H,images:j}=o;return`
    <li class="furniture-card" id="${r}"> 
  <img src="${j[0]}" alt="${a}" class="furniture-image" />
      <p class="furniture-name">${i}</p>
      <div class="color-wrap">
        <span class="grey-color"></span>
        <span class="beige-color"></span>
        <span class="black-color"></span>
      </div>
      <p class="furniture-price">${H} грн</p>
  <button class="details-btn" type="button">Детальніше</button>
</li>`}).join("");_.insertAdjacentHTML("beforeend",s)}async function G(e){const t=e.target.closest(".category-card");if(!t)return;document.querySelectorAll(".category-card.active").forEach(o=>o.classList.remove("active")),t.classList.add("active");const s=t.dataset.id;Z(),c=1,s==="0"?(l=null,u(c)):(l=null,u(c,s))}function K(){c+=1,u(c)}function J(){$.classList.remove("hidden"),x.style.display="flex"}function Q(){$.classList.add("hidden"),x.style.display="none"}function Y(){A.classList.remove("hidden")}function S(){A.classList.add("hidden")}function Z(){_.innerHTML="",window.allFurnitures=[]}const ee=document.querySelector(".categories-list"),te=document.querySelector(".load-more-btn");te.addEventListener("click",K);ee.addEventListener("click",G);U();u(c);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".hero__button"),t=document.querySelector("#reviews");e&&t&&e.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})});const b=document.querySelector("[data-menu]"),P=document.querySelector("[data-menu-open]"),se=document.querySelector("[data-menu-close]"),oe=document.querySelectorAll(".mobile-nav-list a, .mobile-btn");function re(){b.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",B),document.addEventListener("click",I)}function v(){b.classList.remove("is-open"),document.body.style.overflow="",document.removeEventListener("keydown",B),document.removeEventListener("click",I)}function B(e){e.key==="Escape"&&v()}function I(e){!b.contains(e.target)&&!P.contains(e.target)&&v()}P.addEventListener("click",re);se.addEventListener("click",v);oe.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href"),o=document.querySelector(s);o&&(v(),o.scrollIntoView({behavior:"smooth"}))})});const m=document.querySelector(".modal"),V=document.querySelector(".modal_close"),q=document.querySelector(".modal_main-image img"),F=document.querySelector(".modal_title"),ie=document.querySelector(".modal_category"),ne=document.querySelector(".modal_price"),ae=document.querySelector(".modal_description"),y=document.querySelector(".modal_rate"),p=document.querySelector(".color-checkboxes"),ce=document.querySelector(".modal_sizes"),n=document.querySelector(".modal_order-btn"),O=document.querySelector(".modal_thumbnails"),le=document.querySelector(".furniture-list");let f=0,d=[];function T(e){e.key==="Escape"&&h()}function D(){if(!d.length)return;q.src=d[f],q.alt=F.textContent||"Фото товару";const e=d.map((t,s)=>({src:t,i:s})).filter(({i:t})=>t!==f).map(({src:t,i:s})=>`
      <img class="thumbnail-img" src="${t}" alt="thumb ${s}" data-index="${s}">
    `).join("");O.innerHTML=e}O?.addEventListener("click",e=>{const t=e.target.closest(".thumbnail-img");t&&(f=Number(t.dataset.index),D())});le?.addEventListener("click",e=>{const t=e.target.closest(".details-btn");if(!t)return;const s=t.closest(".furniture-card");if(!s)return;const o=s.dataset.id||s.id;if(!o||!window.allFurnitures)return;const r=window.allFurnitures.find(i=>i._id===o);r&&de(r)});function de(e){if(F.textContent=e.name||"Без назви",ie.textContent=e.type||"Тип невідомий",ne.textContent=`${e.price} грн`||"Ціна невідома",ae.textContent=e.description||"Опис відсутній",n.dataset.model=e.name||"",n.setAttribute("data-modal-open",""),n.setAttribute("data-id",e._id),n.setAttribute("data-marker","product-modal"),y&&typeof e.rate=="number"){const t=Math.round(e.rate*10)/10,s=Math.min(5,t)/5*100;y.innerHTML=`
      <div class="star-rating" style="--star-fill: ${s}%"></div>
      <span class="rating-text">${t.toFixed(1)}</span>
    `}else y.innerHTML="";p&&Array.isArray(e.color)?p.innerHTML=e.color.map((t,s)=>{const o=`color-${s}`;return`
          <input type="radio" id="${o}" name="color" data-color="${t}" ${s===0?"checked":""} />
          <label for="${o}" style="background-color: ${t}"></label>
        `}).join(""):p.innerHTML="",ce.textContent=`Розміри: ${e.sizes||"невідомі"}`,d=Array.isArray(e.images)?e.images.slice():[],f=0,D(),n.dataset.id=e._id||"",m.classList.remove("visually-hidden"),V.focus(),document.body.style.overflow="hidden",document.addEventListener("keydown",T)}function h(){m.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",T)}V?.addEventListener("click",h);m?.addEventListener("click",e=>{e.target===m&&h()});n.addEventListener("click",()=>{const e=document.querySelector('.color-checkboxes input[type="radio"]:checked'),t=e?e.dataset.color:null;t&&n.setAttribute("data-color",t),n.dataset.model&&n.setAttribute("data-model",n.dataset.model),h();const s=new CustomEvent("open-order-modal",{detail:{model:n.dataset.model||"",color:t}});document.dispatchEvent(s)});let ue=document.querySelector(".swiper-wrapper"),g;async function me(){try{return(await w.get("https://furniture-store.b.goit.study/api/feedbacks")).data.feedbacks}catch(e){return console.error("Помилка отримання відгуків:",e),[]}}try{const s=(await me()).slice(0,10).map(o=>`
          <div class="reviews-item swiper-slide ">
            <div class="star-containers">
              <div class="rating value-${fe(o.rate)}">
                <div class="star-container">
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/iconsa.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    </div>
              </div>
            </div>
            <p class="reviews-text">${o.descr}</p>
            <p class="reviews-reviewer">${o.name}</p>
          </div>
        `).join("");ue.insertAdjacentHTML("beforeend",s),ge(),g=new N(".reviews-swiper",{modules:[z,R,W],infinite:!1,slidesPerView:3,direction:"horizontal",loop:!1,pagination:{el:".reviews-actual-slide",clickable:!0,renderBullet:function(o,r){const i=this.activeIndex||0,a=o===i?"icon-active":"";return`
        <svg class="icon icon-Dot ${r}" width="8" height="8">
          <use href="./images/reviews/iconsa.svg#icon-Dot"></use>
        </svg>
      `},bulletClass:"icon-Dot",bulletActiveClass:"icon-active",dynamicBullets:!1},navigation:{nextEl:".after",prevEl:".before"},scrollbar:{el:".swiper-scrollbar",draggable:!0}}),M(),g.on("slideChange",()=>{M()})}catch{}finally{}function fe(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e*2)/2}function ge(){document.querySelectorAll(".rating").forEach(t=>{const s=Array.from(t.classList).find(r=>r.startsWith("value-"));if(!s)return;const o=parseFloat(s.replace("value-",""));console.log("Original value:",o),o%1!==0&&t.classList.add("half"),t.classList.remove(s),t.classList.add(`value-${Math.floor(o)}`)})}const E=document.querySelector(".before"),C=document.querySelector(".after");function M(){g.isBeginning?E.classList.add("disabled"):E.classList.remove("disabled"),g.isEnd?C.classList.add("disabled"):C.classList.remove("disabled")}
//# sourceMappingURL=index.js.map
