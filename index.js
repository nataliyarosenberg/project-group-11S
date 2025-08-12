import{a as E,i as f,A as G,S as K,N as Q,P as Z,b as J}from"./assets/vendor-U7RKvRu8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const I=document.querySelector(".loader-more"),P=document.querySelector(".loader-more-container"),D=document.querySelector(".furniture-list"),T=document.querySelector(".load-more-btn");let l=1,d=null;const $=8;window.allFurnitures=window.allFurnitures||[];async function Y(){try{const t=(await E("https://furniture-store.b.goit.study/api/categories")).data;t.unshift({_id:"0",name:"Всі товари"}),document.querySelectorAll(".category-card").forEach((o,n)=>{const r=t[n];if(!r)return;o.dataset.id=r._id;const c=o.querySelector(".category-title");c&&(c.textContent=r.name)})}catch{f.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"../images/our-furniture/bi_x-octagon-2.svg",maxWidth:432})}}async function v(e=1,t){try{oe(),M();let s=`https://furniture-store.b.goit.study/api/furnitures?limit=${$}&page=${e}`;t&&t!=="0"&&(s+=`&category=${t}`);const n=(await E(s)).data;ee(n),d===null&&(d=Math.ceil(n.totalItems/$)),e>=d?M():re()}catch{f.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"../images/our-furniture/bi_x-octagon-2.svg",maxWidth:432})}finally{ne()}}function ee(e){const t=e.furnitures;window.allFurnitures=[...new Map([...window.allFurnitures,...t].map(o=>[o._id,o])).values()];const s=t.map(o=>{const{_id:n,name:r,description:c,price:U,images:X}=o;return`
    <li class="furniture-card" id="${n}"> 
  <img src="${X[0]}" alt="${c}" class="furniture-image" />
      <p class="furniture-name">${r}</p>
      <div class="color-wrap">
        <span class="grey-color"></span>
        <span class="beige-color"></span>
        <span class="black-color"></span>
      </div>
      <p class="furniture-price">${U} грн</p>
  <button class="details-btn" type="button">Детальніше</button>
</li>`}).join("");D.insertAdjacentHTML("beforeend",s)}async function te(e){const t=e.target.closest(".category-card");if(!t)return;document.querySelectorAll(".category-card.active").forEach(o=>o.classList.remove("active")),t.classList.add("active");const s=t.dataset.id;ie(),l=1,s==="0"?(d=null,v(l)):(d=null,v(l,s))}function se(){l+=1,v(l)}function oe(){I.classList.remove("hidden"),P.style.display="flex"}function ne(){I.classList.add("hidden"),P.style.display="none"}function re(){T.classList.remove("hidden")}function M(){T.classList.add("hidden")}function ie(){D.innerHTML="",window.allFurnitures=[]}const ae=document.querySelector(".categories-list"),ce=document.querySelector(".load-more-btn");ce.addEventListener("click",se);ae.addEventListener("click",te);Y();v(l);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".hero__button"),t=document.querySelector("#review");e&&t&&e.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})});const S=document.querySelector("[data-menu]"),O=document.querySelector("[data-menu-open]"),le=document.querySelector("[data-menu-close]"),de=document.querySelectorAll(".mobile-nav-list a, .mobile-btn");function ue(){S.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",V),document.addEventListener("click",F)}function y(){S.classList.remove("is-open"),document.body.style.overflow="",document.removeEventListener("keydown",V),document.removeEventListener("click",F)}function V(e){e.key==="Escape"&&y()}function F(e){!S.contains(e.target)&&!O.contains(e.target)&&y()}O.addEventListener("click",ue);le.addEventListener("click",y);de.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href"),o=document.querySelector(s);o&&(y(),o.scrollIntoView({behavior:"smooth"}))})});const me=`<div id="order-backdrop" class="backdrop" aria-hidden="true">
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
`,fe="/project-group-11S/assets/icons-DZ36DW-g.svg";let k=null,q=null;async function j(){try{if(!document.getElementById("svg-sprite")){const n=await(await fetch(fe)).text(),r=document.createElement("div");r.id="svg-sprite",r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.overflow="hidden",r.innerHTML=n,document.body.prepend(r)}document.getElementById("order-backdrop")||document.body.insertAdjacentHTML("beforeend",me);const e=document.getElementById("order-backdrop"),t=e?.querySelector(".modal-button-close"),s=e?.querySelector(".modal-form");e?.addEventListener("click",o=>{o.target===e&&u()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&e?.classList.contains("is-open")&&u()}),t?.addEventListener("click",u),s?.addEventListener("submit",ge),pe(e)}catch(e){console.error("Помилка завантаження модалки:",e)}}function u(){const e=document.getElementById("order-backdrop");e&&(e.classList.remove("is-open"),document.body.classList.remove("no-scroll"),e.querySelector(".modal-form")?.reset(),k=null,q=null)}function ve(e){if(!e.name||e.name.length<2)throw new Error("Імʼя має містити щонайменше 2 символи");if(!/^\+?\d{10,15}$/.test(e.phone))throw new Error("Введіть коректний номер телефону")}async function he(e,t){return new Promise((s,o)=>{setTimeout(()=>{Math.random()<.85?s({ok:!0,json:async()=>({message:"Замовлення успішно прийнято"})}):o(new Error("Сервер тимчасово недоступний"))},800)})}async function ge(e){e.preventDefault();const t=e.target,s={name:t.elements["user-name"]?.value?.trim()||"",phone:t.elements["user-phone"]?.value?.trim()||"",comment:t.elements["user-comment"]?.value?.trim()||"",furnitureId:k,marker:q};try{ve(s);const o=await he("/orders",s);if(!o.ok){const n=await o.json().catch(()=>({}));throw new Error(n?.message||"Помилка запиту")}f.success({title:"Успіх",message:"Форма успішно відправлена",position:"topRight"}),u()}catch(o){f.error({title:"Помилка",message:o?.message||"Щось пішло не так",position:"topRight"})}}function C(e=!0,t=null,s=null){const o=document.getElementById("order-backdrop");o&&(o.classList.toggle("is-open",e),document.body.classList.toggle("no-scroll",e),e&&(k=t,q=s,o.querySelector("#user-name")?.focus()))}function pe(e){if(!e)return;e.querySelectorAll("button").forEach(s=>{s.style.cursor="pointer",s.addEventListener("mouseenter",()=>s.classList.add("hover")),s.addEventListener("mouseleave",()=>s.classList.remove("hover")),s.addEventListener("focus",()=>s.classList.add("focus")),s.addEventListener("blur",()=>s.classList.remove("focus")),s.addEventListener("mousedown",()=>s.classList.add("active")),s.addEventListener("mouseup",()=>s.classList.remove("active")),s.addEventListener("mouseout",()=>s.classList.remove("active"))})}j();const h=document.querySelector(".modal"),H=document.querySelector(".modal_close"),x=document.querySelector(".modal_main-image img"),N=document.querySelector(".modal_title"),ye=document.querySelector(".modal_category"),be=document.querySelector(".modal_price"),we=document.querySelector(".modal_description"),w=document.querySelector(".modal_rate"),L=document.querySelector(".color-checkboxes"),Le=document.querySelector(".modal_sizes"),a=document.querySelector(".modal_order-btn"),R=document.querySelector(".modal_thumbnails"),Ee=document.querySelector(".furniture-list");let g=0,m=[];function z(e){e.key==="Escape"&&b()}function W(){if(!m.length)return;x.src=m[g],x.alt=N.textContent||"Фото товару";const e=m.map((t,s)=>({src:t,i:s})).filter(({i:t})=>t!==g).map(({src:t,i:s})=>`
      <img class="thumbnail-img" src="${t}" alt="thumb ${s}" data-index="${s}">
    `).join("");R.innerHTML=e}R?.addEventListener("click",e=>{const t=e.target.closest(".thumbnail-img");t&&(g=Number(t.dataset.index),W())});Ee?.addEventListener("click",e=>{const t=e.target.closest(".details-btn");if(!t)return;const s=t.closest(".furniture-card");if(!s)return;const o=s.dataset.id||s.id;if(!o||!window.allFurnitures)return;const n=window.allFurnitures.find(r=>r._id===o);n&&Se(n)});function Se(e){if(N.textContent=e.name||"Без назви",ye.textContent=e.type||"Тип невідомий",be.textContent=`${e.price} грн`||"Ціна невідома",we.textContent=e.description||"Опис відсутній",a.dataset.model=e.name||"",a.setAttribute("data-modal-open",""),a.setAttribute("data-id",e._id),a.setAttribute("data-marker","product-modal"),w&&typeof e.rate=="number"){const t=Math.round(e.rate*10)/10,s=Math.min(5,t)/5*100;w.innerHTML=`
      <div class="star-rating" style="--star-fill: ${s}%"></div>
      <span class="rating-text">${t.toFixed(1)}</span>
    `}else w.innerHTML="";L&&Array.isArray(e.color)?L.innerHTML=e.color.map((t,s)=>{const o=`color-${s}`;return`
          <input type="radio" id="${o}" name="color" data-color="${t}" ${s===0?"checked":""} />
          <label for="${o}" style="background-color: ${t}"></label>
        `}).join(""):L.innerHTML="",Le.textContent=`Розміри: ${e.sizes||"невідомі"}`,m=Array.isArray(e.images)?e.images.slice():[],g=0,W(),a.dataset.id=e._id||"",h.classList.remove("visually-hidden"),H.focus(),document.body.style.overflow="hidden",document.addEventListener("keydown",z)}function b(){h.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",z)}H?.addEventListener("click",b);h?.addEventListener("click",e=>{e.target===h&&b()});a.addEventListener("click",()=>{const e=document.querySelector('.color-checkboxes input[type="radio"]:checked'),t=e?e.dataset.color:null;t&&a.setAttribute("data-color",t),a.dataset.model&&a.setAttribute("data-model",a.dataset.model),b();const s=new CustomEvent("open-order-modal",{detail:{model:a.dataset.model||"",color:t}});document.dispatchEvent(s)});function ke(){document.addEventListener("DOMContentLoaded",()=>{new G(".accordion",{duration:300,showMultiple:!1}).open(0)})}document.addEventListener("DOMContentLoaded",async()=>{await j(),document.addEventListener("click",e=>{const t=e.target.closest("[data-modal-open]");t&&C(!0,t.dataset.id??null,t.dataset.marker??null)}),document.addEventListener("open-order-modal",e=>{C(!0,null,"product-modal")})});ke();const i="/project-group-11S/assets/iconsa-Bk7QmqtL.svg";let qe=document.querySelector(".swiper-wrapper"),p;async function $e(){try{return(await E.get("https://furniture-store.b.goit.study/api/feedbacks")).data.feedbacks}catch(e){return console.error("Помилка отримання відгуків:",e),[]}}try{const s=(await $e()).slice(0,10).map(o=>`
          <div class="reviews-item swiper-slide ">
            <div class="star-containers">
              <div class="rating value-${Me(o.rate)}">
                <div class="star-container">
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="${i}#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="${i}#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="${i}#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="${i}#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="${i}#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="${i}#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="${i}#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="${i}#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="${i}#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="${i}#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="${i}#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="${i}#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="${i}#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="${i}#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="${i}#icon-field-star"></use>
                        </svg>
                    </div>
                    </div>
              </div>
            </div>
            <p class="reviews-text">${o.descr}</p>
            <p class="reviews-reviewer">${o.name}</p>
          </div>
        `).join("");qe.insertAdjacentHTML("beforeend",s),Ce(),p=new K(".reviews-swiper",{modules:[Q,Z,J],infinite:!1,slidesPerView:3,direction:"horizontal",loop:!1,pagination:{el:".reviews-actual-slide",clickable:!0,renderBullet:function(o,n){const r=this.activeIndex||0,c=o===r?"icon-active":"";return`
        <svg class="icon icon-Dot ${n}" width="8" height="8">
          <use href="./images/reviews/iconsa.svg#icon-Dot"></use>
        </svg>
      `},bulletClass:"icon-Dot",bulletActiveClass:"icon-active",dynamicBullets:!1},navigation:{nextEl:".after",prevEl:".before"},scrollbar:{el:".swiper-scrollbar",draggable:!0}}),B(),p.on("slideChange",()=>{B()})}catch{}finally{}function Me(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e*2)/2}function Ce(){document.querySelectorAll(".rating").forEach(t=>{const s=Array.from(t.classList).find(n=>n.startsWith("value-"));if(!s)return;const o=parseFloat(s.replace("value-",""));console.log("Original value:",o),o%1!==0&&t.classList.add("half"),t.classList.remove(s),t.classList.add(`value-${Math.floor(o)}`)})}const A=document.querySelector(".before"),_=document.querySelector(".after");function B(){p.isBeginning?A.classList.add("disabled"):A.classList.remove("disabled"),p.isEnd?_.classList.add("disabled"):_.classList.remove("disabled")}
//# sourceMappingURL=index.js.map
