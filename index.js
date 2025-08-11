import{a as S,i as m,A as W,S as U,N as X,P as G,b as K}from"./assets/vendor-PjITybrQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const A=document.querySelector(".loader-more"),_=document.querySelector(".loader-more-container"),B=document.querySelector(".furniture-list"),I=document.querySelector(".load-more-btn");let c=1,l=null;const k=8;window.allFurnitures=window.allFurnitures||[];async function Z(){try{const t=(await S("https://furniture-store.b.goit.study/api/categories")).data;t.unshift({_id:"0",name:"Всі товари"}),document.querySelectorAll(".category-card").forEach((s,n)=>{const r=t[n];if(!r)return;s.dataset.id=r._id;const a=s.querySelector(".category-title");a&&(a.textContent=r.name)})}catch{m.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"../images/our-furniture/bi_x-octagon-2.svg",maxWidth:432})}}async function f(e=1,t){try{ee(),q();let o=`https://furniture-store.b.goit.study/api/furnitures?limit=${k}&page=${e}`;t&&t!=="0"&&(o+=`&category=${t}`);const n=(await S(o)).data;J(n),l===null&&(l=Math.ceil(n.totalItems/k)),e>=l?q():se()}catch{m.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"../images/our-furniture/bi_x-octagon-2.svg",maxWidth:432})}finally{te()}}function J(e){const t=e.furnitures;window.allFurnitures=[...new Map([...window.allFurnitures,...t].map(s=>[s._id,s])).values()];const o=t.map(s=>{const{_id:n,name:r,description:a,price:R,images:z}=s;return`
    <li class="furniture-card" id="${n}"> 
  <img src="${z[0]}" alt="${a}" class="furniture-image" />
      <p class="furniture-name">${r}</p>
      <div class="color-wrap">
        <span class="grey-color"></span>
        <span class="beige-color"></span>
        <span class="black-color"></span>
      </div>
      <p class="furniture-price">${R} грн</p>
  <button class="details-btn" type="button">Детальніше</button>
</li>`}).join("");B.insertAdjacentHTML("beforeend",o)}async function Q(e){const t=e.target.closest(".category-card");if(!t)return;document.querySelectorAll(".category-card.active").forEach(s=>s.classList.remove("active")),t.classList.add("active");const o=t.dataset.id;oe(),c=1,o==="0"?(l=null,f(c)):(l=null,f(c,o))}function Y(){c+=1,f(c)}function ee(){A.classList.remove("hidden"),_.style.display="flex"}function te(){A.classList.add("hidden"),_.style.display="none"}function se(){I.classList.remove("hidden")}function q(){I.classList.add("hidden")}function oe(){B.innerHTML="",window.allFurnitures=[]}const ne=document.querySelector(".categories-list"),re=document.querySelector(".load-more-btn");re.addEventListener("click",Y);ne.addEventListener("click",Q);Z();f(c);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".hero__button"),t=document.querySelector("#reviews");e&&t&&e.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})});const E=document.querySelector("[data-menu]"),O=document.querySelector("[data-menu-open]"),ie=document.querySelector("[data-menu-close]"),ae=document.querySelectorAll(".mobile-nav-list a, .mobile-btn");function ce(){E.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",P),document.addEventListener("click",D)}function p(){E.classList.remove("is-open"),document.body.style.overflow="",document.removeEventListener("keydown",P),document.removeEventListener("click",D)}function P(e){e.key==="Escape"&&p()}function D(e){!E.contains(e.target)&&!O.contains(e.target)&&p()}O.addEventListener("click",ce);ie.addEventListener("click",p);ae.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href"),s=document.querySelector(o);s&&(p(),s.scrollIntoView({behavior:"smooth"}))})});function le(){document.addEventListener("DOMContentLoaded",()=>{new W(".accordion",{duration:300,showMultiple:!1}).open(0)})}const de=`<div id="order-backdrop" class="backdrop" aria-hidden="true">
  <div
    class="modal-order"
    role="dialog"
    aria-labelledby="order-title"
    aria-modal="true"
  >
    <button class="modal-button-close" aria-label="Закрити модальне вікно">
      ×
    </button>

    <h2 class="title-order" id="order-title">
      Замовити зворотний <br />зв’язок
    </h2>

    <form class="modal-form" novalidate>
      <div class="modal-div-input_label">
        <label class="modal-label" for="user-name">Ім’я*</label>
        <input
          class="modal-input"
          id="user-name"
          name="user-name"
          type="text"
          placeholder="Дмитро"
          required
        />
      </div>

      <div class="modal-div-input_label">
        <label class="modal-label" for="user-phone">Телефон*</label>
        <input
          class="modal-input"
          id="user-phone"
          name="user-phone"
          type="tel"
          placeholder="+38 (099) 123 22 11"
          required
        />
      </div>

      <div class="modal-div-input_label">
        <label class="modal-label" for="user-comment">Коментар</label>
        <textarea
          class="modal-texarea"
          id="user-comment"
          name="user-comment"
          placeholder="Type your message..."
        ></textarea>
      </div>

      <button class="modal-btn" type="submit">Надіслати заявку</button>
    </form>
  </div>
</div>
`,ue="/project-group-11S/assets/icons-DZ36DW-g.svg";async function T(){try{if(!document.getElementById("svg-sprite")){const n=await(await fetch(ue)).text(),r=document.createElement("div");r.id="svg-sprite",r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.overflow="hidden",r.innerHTML=n,document.body.prepend(r)}document.getElementById("order-backdrop")||document.body.insertAdjacentHTML("beforeend",de);const e=document.getElementById("order-backdrop"),t=e?.querySelector(".modal-button-close"),o=e?.querySelector(".modal-form");e?.addEventListener("click",s=>{s.target===e&&d()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&e?.classList.contains("is-open")&&d()}),t?.addEventListener("click",d),o?.addEventListener("submit",me)}catch(e){console.error("Помилка завантаження модалки:",e)}}function d(){const e=document.getElementById("order-backdrop");e&&(e.classList.remove("is-open"),document.body.classList.remove("no-scroll"),e.querySelector(".modal-form")?.reset())}async function me(e){e.preventDefault();const t=e.target;t.elements["user-name"]?.value?.trim(),t.elements["user-phone"]?.value?.trim(),t.elements["user-comment"]?.value?.trim();try{m.success({title:"Успіх",message:"Форма успішно відправлена",position:"topRight"}),d()}catch(o){m.error({title:"Помилка",message:o?.message||"Щось пішло не так",position:"topRight"})}}function L(e=!0,t=null,o=null){const s=document.getElementById("order-backdrop");s&&(s.classList.toggle("is-open",e),document.body.classList.toggle("no-scroll",e),e&&s.querySelector("#user-name")?.focus())}function fe(){document.addEventListener("open-order-modal",e=>{const{model:t,color:o}=e.detail||{};L(!0,null,"product-modal");const s=document.getElementById("user-comment");s&&(s.value=[t&&`Модель: ${t}`,o&&`Колір: ${o}`].filter(Boolean).join(", "))})}T();fe();const g=document.querySelector(".modal"),V=document.querySelector(".modal_close"),M=document.querySelector(".modal_main-image img"),F=document.querySelector(".modal_title"),ge=document.querySelector(".modal_category"),ve=document.querySelector(".modal_price"),he=document.querySelector(".modal_description"),b=document.querySelector(".modal_rate"),w=document.querySelector(".color-checkboxes"),pe=document.querySelector(".modal_sizes"),i=document.querySelector(".modal_order-btn"),H=document.querySelector(".modal_thumbnails"),ye=document.querySelector(".furniture-list");let v=0,u=[];function j(e){e.key==="Escape"&&y()}function N(){if(!u.length)return;M.src=u[v],M.alt=F.textContent||"Фото товару";const e=u.map((t,o)=>({src:t,i:o})).filter(({i:t})=>t!==v).map(({src:t,i:o})=>`
      <img class="thumbnail-img" src="${t}" alt="thumb ${o}" data-index="${o}">
    `).join("");H.innerHTML=e}H?.addEventListener("click",e=>{const t=e.target.closest(".thumbnail-img");t&&(v=Number(t.dataset.index),N())});ye?.addEventListener("click",e=>{const t=e.target.closest(".details-btn");if(!t)return;const o=t.closest(".furniture-card");if(!o)return;const s=o.dataset.id||o.id;if(!s||!window.allFurnitures)return;const n=window.allFurnitures.find(r=>r._id===s);n&&be(n)});function be(e){if(F.textContent=e.name||"Без назви",ge.textContent=e.type||"Тип невідомий",ve.textContent=`${e.price} грн`||"Ціна невідома",he.textContent=e.description||"Опис відсутній",i.dataset.model=e.name||"",i.setAttribute("data-modal-open",""),i.setAttribute("data-id",e._id),i.setAttribute("data-marker","product-modal"),b&&typeof e.rate=="number"){const t=Math.round(e.rate*10)/10,o=Math.min(5,t)/5*100;b.innerHTML=`
      <div class="star-rating" style="--star-fill: ${o}%"></div>
      <span class="rating-text">${t.toFixed(1)}</span>
    `}else b.innerHTML="";w&&Array.isArray(e.color)?w.innerHTML=e.color.map((t,o)=>{const s=`color-${o}`;return`
          <input type="radio" id="${s}" name="color" data-color="${t}" ${o===0?"checked":""} />
          <label for="${s}" style="background-color: ${t}"></label>
        `}).join(""):w.innerHTML="",pe.textContent=`Розміри: ${e.sizes||"невідомі"}`,u=Array.isArray(e.images)?e.images.slice():[],v=0,N(),i.dataset.id=e._id||"",g.classList.remove("visually-hidden"),V.focus(),document.body.style.overflow="hidden",document.addEventListener("keydown",j)}function y(){g.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",j)}V?.addEventListener("click",y);g?.addEventListener("click",e=>{e.target===g&&y()});i.addEventListener("click",()=>{const e=document.querySelector('.color-checkboxes input[type="radio"]:checked'),t=e?e.dataset.color:null;t&&i.setAttribute("data-color",t),i.dataset.model&&i.setAttribute("data-model",i.dataset.model),y();const o=new CustomEvent("open-order-modal",{detail:{model:i.dataset.model||"",color:t}});document.dispatchEvent(o)});document.addEventListener("DOMContentLoaded",async()=>{await T(),document.addEventListener("click",e=>{const t=e.target.closest("[data-modal-open]");t&&L(!0,t.dataset.id??null,t.dataset.marker??null)}),document.addEventListener("open-order-modal",e=>{const{model:t,color:o}=e.detail||{},s=document.querySelector("#user-comment");s&&(s.value=[t?`Модель: ${t}`:"",o?`Колір: ${o}`:""].filter(Boolean).join(", ")),L(!0,null,"product-modal")})});le();let we=document.querySelector(".swiper-wrapper"),h;async function Le(){try{return(await S.get("https://furniture-store.b.goit.study/api/feedbacks")).data.feedbacks}catch(e){return console.error("Помилка отримання відгуків:",e),[]}}try{const o=(await Le()).slice(0,10).map(s=>`
          <div class="reviews-item swiper-slide ">
            <div class="star-containers">
              <div class="rating value-${Se(s.rate)}">
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
            <p class="reviews-text">${s.descr}</p>
            <p class="reviews-reviewer">${s.name}</p>
          </div>
        `).join("");we.insertAdjacentHTML("beforeend",o),Ee(),h=new U(".reviews-swiper",{modules:[X,G,K],infinite:!1,slidesPerView:3,direction:"horizontal",loop:!1,pagination:{el:".reviews-actual-slide",clickable:!0,renderBullet:function(s,n){const r=this.activeIndex||0,a=s===r?"icon-active":"";return`
        <svg class="icon icon-Dot ${n}" width="8" height="8">
          <use href="./images/reviews/iconsa.svg#icon-Dot"></use>
        </svg>
      `},bulletClass:"icon-Dot",bulletActiveClass:"icon-active",dynamicBullets:!1},navigation:{nextEl:".after",prevEl:".before"},scrollbar:{el:".swiper-scrollbar",draggable:!0}}),$(),h.on("slideChange",()=>{$()})}catch{}finally{}function Se(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e*2)/2}function Ee(){document.querySelectorAll(".rating").forEach(t=>{const o=Array.from(t.classList).find(n=>n.startsWith("value-"));if(!o)return;const s=parseFloat(o.replace("value-",""));console.log("Original value:",s),s%1!==0&&t.classList.add("half"),t.classList.remove(o),t.classList.add(`value-${Math.floor(s)}`)})}const C=document.querySelector(".before"),x=document.querySelector(".after");function $(){h.isBeginning?C.classList.add("disabled"):C.classList.remove("disabled"),h.isEnd?x.classList.add("disabled"):x.classList.remove("disabled")}
//# sourceMappingURL=index.js.map
