import{a as L,i as m,A as X,S as G,N as K,P as Z,b as J}from"./assets/vendor-U7RKvRu8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const I=document.querySelector(".loader-more"),B=document.querySelector(".loader-more-container"),P=document.querySelector(".furniture-list"),D=document.querySelector(".load-more-btn");let c=1,l=null;const q=8;window.allFurnitures=window.allFurnitures||[];async function Q(){try{const t=(await L("https://furniture-store.b.goit.study/api/categories")).data;t.unshift({_id:"0",name:"Всі товари"}),document.querySelectorAll(".category-card").forEach((n,o)=>{const r=t[o];if(!r)return;n.dataset.id=r._id;const a=n.querySelector(".category-title");a&&(a.textContent=r.name)})}catch{m.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"../images/our-furniture/bi_x-octagon-2.svg",maxWidth:432})}}async function f(e=1,t){try{se(),M();let s=`https://furniture-store.b.goit.study/api/furnitures?limit=${q}&page=${e}`;t&&t!=="0"&&(s+=`&category=${t}`);const o=(await L(s)).data;Y(o),l===null&&(l=Math.ceil(o.totalItems/q)),e>=l?M():oe()}catch{m.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"../images/our-furniture/bi_x-octagon-2.svg",maxWidth:432})}finally{ne()}}function Y(e){const t=e.furnitures;window.allFurnitures=[...new Map([...window.allFurnitures,...t].map(n=>[n._id,n])).values()];const s=t.map(n=>{const{_id:o,name:r,description:a,price:W,images:U}=n;return`
    <li class="furniture-card" id="${o}"> 
  <img src="${U[0]}" alt="${a}" class="furniture-image" />
      <p class="furniture-name">${r}</p>
      <div class="color-wrap">
        <span class="grey-color"></span>
        <span class="beige-color"></span>
        <span class="black-color"></span>
      </div>
      <p class="furniture-price">${W} грн</p>
  <button class="details-btn" type="button">Детальніше</button>
</li>`}).join("");P.insertAdjacentHTML("beforeend",s)}async function ee(e){const t=e.target.closest(".category-card");if(!t)return;document.querySelectorAll(".category-card.active").forEach(n=>n.classList.remove("active")),t.classList.add("active");const s=t.dataset.id;re(),c=1,s==="0"?(l=null,f(c)):(l=null,f(c,s))}function te(){c+=1,f(c)}function se(){I.classList.remove("hidden"),B.style.display="flex"}function ne(){I.classList.add("hidden"),B.style.display="none"}function oe(){D.classList.remove("hidden")}function M(){D.classList.add("hidden")}function re(){P.innerHTML="",window.allFurnitures=[]}const ie=document.querySelector(".categories-list"),ae=document.querySelector(".load-more-btn");ae.addEventListener("click",te);ie.addEventListener("click",ee);Q();f(c);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".hero__button"),t=document.querySelector("#review");e&&t&&e.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})});const E=document.querySelector("[data-menu]"),T=document.querySelector("[data-menu-open]"),ce=document.querySelector("[data-menu-close]"),le=document.querySelectorAll(".mobile-nav-list a, .mobile-btn");function de(){E.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",O),document.addEventListener("click",V)}function p(){E.classList.remove("is-open"),document.body.style.overflow="",document.removeEventListener("keydown",O),document.removeEventListener("click",V)}function O(e){e.key==="Escape"&&p()}function V(e){!E.contains(e.target)&&!T.contains(e.target)&&p()}T.addEventListener("click",de);ce.addEventListener("click",p);le.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href"),n=document.querySelector(s);n&&(p(),n.scrollIntoView({behavior:"smooth"}))})});const ue=`<div id="order-backdrop" class="backdrop" aria-hidden="true">
  <div
    class="modal-order"
    role="dialog"
    aria-labelledby="order-title"
    aria-modal="true"
  >
    <button class="modal-button-close" aria-label="Закрити модальне вікно">
      <img src="./img/close.svg" alt="">
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
`,me="/project-group-11S/assets/icons-DZ36DW-g.svg";let S=null,k=null;async function F(){try{if(!document.getElementById("svg-sprite")){const o=await(await fetch(me)).text(),r=document.createElement("div");r.id="svg-sprite",r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.overflow="hidden",r.innerHTML=o,document.body.prepend(r)}document.getElementById("order-backdrop")||document.body.insertAdjacentHTML("beforeend",ue);const e=document.getElementById("order-backdrop"),t=e?.querySelector(".modal-button-close"),s=e?.querySelector(".modal-form");e?.addEventListener("click",n=>{n.target===e&&d()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&e?.classList.contains("is-open")&&d()}),t?.addEventListener("click",d),s?.addEventListener("submit",ge),he(e)}catch(e){console.error("Помилка завантаження модалки:",e)}}function d(){const e=document.getElementById("order-backdrop");e&&(e.classList.remove("is-open"),document.body.classList.remove("no-scroll"),e.querySelector(".modal-form")?.reset(),S=null,k=null)}function fe(e){if(!e.name||e.name.length<2)throw new Error("Імʼя має містити щонайменше 2 символи");if(!/^\+?\d{10,15}$/.test(e.phone))throw new Error("Введіть коректний номер телефону")}async function ve(e,t){return new Promise((s,n)=>{setTimeout(()=>{Math.random()<.85?s({ok:!0,json:async()=>({message:"Замовлення успішно прийнято"})}):n(new Error("Сервер тимчасово недоступний"))},800)})}async function ge(e){e.preventDefault();const t=e.target,s={name:t.elements["user-name"]?.value?.trim()||"",phone:t.elements["user-phone"]?.value?.trim()||"",comment:t.elements["user-comment"]?.value?.trim()||"",furnitureId:S,marker:k};try{fe(s);const n=await ve("/orders",s);if(!n.ok){const o=await n.json().catch(()=>({}));throw new Error(o?.message||"Помилка запиту")}m.success({title:"Успіх",message:"Форма успішно відправлена",position:"topRight"}),d()}catch(n){m.error({title:"Помилка",message:n?.message||"Щось пішло не так",position:"topRight"})}}function C(e=!0,t=null,s=null){const n=document.getElementById("order-backdrop");n&&(n.classList.toggle("is-open",e),document.body.classList.toggle("no-scroll",e),e&&(S=t,k=s,n.querySelector("#user-name")?.focus()))}function he(e){if(!e)return;e.querySelectorAll("button").forEach(s=>{s.style.cursor="pointer",s.addEventListener("mouseenter",()=>s.classList.add("hover")),s.addEventListener("mouseleave",()=>s.classList.remove("hover")),s.addEventListener("focus",()=>s.classList.add("focus")),s.addEventListener("blur",()=>s.classList.remove("focus")),s.addEventListener("mousedown",()=>s.classList.add("active")),s.addEventListener("mouseup",()=>s.classList.remove("active")),s.addEventListener("mouseout",()=>s.classList.remove("active"))})}F();const v=document.querySelector(".modal"),H=document.querySelector(".modal_close"),x=document.querySelector(".modal_main-image img"),j=document.querySelector(".modal_title"),pe=document.querySelector(".modal_category"),ye=document.querySelector(".modal_price"),we=document.querySelector(".modal_description"),w=document.querySelector(".modal_rate"),b=document.querySelector(".color-checkboxes"),be=document.querySelector(".modal_sizes"),i=document.querySelector(".modal_order-btn"),N=document.querySelector(".modal_thumbnails"),Le=document.querySelector(".furniture-list");let g=0,u=[];function R(e){e.key==="Escape"&&y()}function z(){if(!u.length)return;x.src=u[g],x.alt=j.textContent||"Фото товару";const e=u.map((t,s)=>({src:t,i:s})).filter(({i:t})=>t!==g).map(({src:t,i:s})=>`
      <img class="thumbnail-img" src="${t}" alt="thumb ${s}" data-index="${s}">
    `).join("");N.innerHTML=e}N?.addEventListener("click",e=>{const t=e.target.closest(".thumbnail-img");t&&(g=Number(t.dataset.index),z())});Le?.addEventListener("click",e=>{const t=e.target.closest(".details-btn");if(!t)return;const s=t.closest(".furniture-card");if(!s)return;const n=s.dataset.id||s.id;if(!n||!window.allFurnitures)return;const o=window.allFurnitures.find(r=>r._id===n);o&&Ee(o)});function Ee(e){if(j.textContent=e.name||"Без назви",pe.textContent=e.type||"Тип невідомий",ye.textContent=`${e.price} грн`||"Ціна невідома",we.textContent=e.description||"Опис відсутній",i.dataset.model=e.name||"",i.setAttribute("data-modal-open",""),i.setAttribute("data-id",e._id),i.setAttribute("data-marker","product-modal"),w&&typeof e.rate=="number"){const t=Math.round(e.rate*10)/10,s=Math.min(5,t)/5*100;w.innerHTML=`
      <div class="star-rating" style="--star-fill: ${s}%"></div>
      <span class="rating-text">${t.toFixed(1)}</span>
    `}else w.innerHTML="";b&&Array.isArray(e.color)?b.innerHTML=e.color.map((t,s)=>{const n=`color-${s}`;return`
          <input type="radio" id="${n}" name="color" data-color="${t}" ${s===0?"checked":""} />
          <label for="${n}" style="background-color: ${t}"></label>
        `}).join(""):b.innerHTML="",be.textContent=`Розміри: ${e.sizes||"невідомі"}`,u=Array.isArray(e.images)?e.images.slice():[],g=0,z(),i.dataset.id=e._id||"",v.classList.remove("visually-hidden"),H.focus(),document.body.style.overflow="hidden",document.addEventListener("keydown",R)}function y(){v.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",R)}H?.addEventListener("click",y);v?.addEventListener("click",e=>{e.target===v&&y()});i.addEventListener("click",()=>{const e=document.querySelector('.color-checkboxes input[type="radio"]:checked'),t=e?e.dataset.color:null;t&&i.setAttribute("data-color",t),i.dataset.model&&i.setAttribute("data-model",i.dataset.model),y();const s=new CustomEvent("open-order-modal",{detail:{model:i.dataset.model||"",color:t}});document.dispatchEvent(s)});function Se(){document.addEventListener("DOMContentLoaded",()=>{new X(".accordion",{duration:300,showMultiple:!1}).open(0)})}document.addEventListener("DOMContentLoaded",async()=>{await F(),document.addEventListener("click",e=>{const t=e.target.closest("[data-modal-open]");t&&C(!0,t.dataset.id??null,t.dataset.marker??null)}),document.addEventListener("open-order-modal",e=>{C(!0,null,"product-modal")})});Se();let ke=document.querySelector(".swiper-wrapper"),h;async function qe(){try{return(await L.get("https://furniture-store.b.goit.study/api/feedbacks")).data.feedbacks}catch(e){return console.error("Помилка отримання відгуків:",e),[]}}try{const s=(await qe()).slice(0,10).map(n=>`
          <div class="reviews-item swiper-slide ">
            <div class="star-containers">
              <div class="rating value-${Me(n.rate)}">
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
            <p class="reviews-text">${n.descr}</p>
            <p class="reviews-reviewer">${n.name}</p>
          </div>
        `).join("");ke.insertAdjacentHTML("beforeend",s),Ce(),h=new G(".reviews-swiper",{modules:[K,Z,J],infinite:!1,slidesPerView:3,direction:"horizontal",loop:!1,pagination:{el:".reviews-actual-slide",clickable:!0,renderBullet:function(n,o){const r=this.activeIndex||0,a=n===r?"icon-active":"";return`
        <svg class="icon icon-Dot ${o}" width="8" height="8">
          <use href="./images/reviews/iconsa.svg#icon-Dot"></use>
        </svg>
      `},bulletClass:"icon-Dot",bulletActiveClass:"icon-active",dynamicBullets:!1},navigation:{nextEl:".after",prevEl:".before"},scrollbar:{el:".swiper-scrollbar",draggable:!0}}),_(),h.on("slideChange",()=>{_()})}catch{}finally{}function Me(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e*2)/2}function Ce(){document.querySelectorAll(".rating").forEach(t=>{const s=Array.from(t.classList).find(o=>o.startsWith("value-"));if(!s)return;const n=parseFloat(s.replace("value-",""));console.log("Original value:",n),n%1!==0&&t.classList.add("half"),t.classList.remove(s),t.classList.add(`value-${Math.floor(n)}`)})}const $=document.querySelector(".before"),A=document.querySelector(".after");function _(){h.isBeginning?$.classList.add("disabled"):$.classList.remove("disabled"),h.isEnd?A.classList.add("disabled"):A.classList.remove("disabled")}
//# sourceMappingURL=index.js.map
