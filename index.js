import{i as g,A as M}from"./assets/vendor-Bffpt9Uq.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const x=`<div id="order-backdrop" class="backdrop" aria-hidden="true">
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
`,_="/JS-project/assets/icons-DZ36DW-g.svg";let y=null,v=null;async function L(){try{if(!document.getElementById("svg-sprite")){const r=await(await fetch(_)).text(),s=document.createElement("div");s.id="svg-sprite",s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.innerHTML=r,document.body.prepend(s)}document.getElementById("order-backdrop")||document.body.insertAdjacentHTML("beforeend",x);const e=document.getElementById("order-backdrop"),n=e?.querySelector(".modal-button-close"),t=e?.querySelector(".modal-form");e?.addEventListener("click",o=>{o.target===e&&l()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&e?.classList.contains("is-open")&&l()}),n?.addEventListener("click",l),t?.addEventListener("submit",I),C(e)}catch(e){console.error("Помилка завантаження модалки:",e)}}function l(){const e=document.getElementById("order-backdrop");e&&(e.classList.remove("is-open"),document.body.classList.remove("no-scroll"),e.querySelector(".modal-form")?.reset(),y=null,v=null)}function A(e){if(!e.name||e.name.length<2)throw new Error("Імʼя має містити щонайменше 2 символи");if(!/^\+?\d{10,15}$/.test(e.phone))throw new Error("Введіть коректний номер телефону")}async function $(e,n){return new Promise((t,o)=>{setTimeout(()=>{Math.random()<.85?t({ok:!0,json:async()=>({message:"Замовлення успішно прийнято"})}):o(new Error("Сервер тимчасово недоступний"))},800)})}async function I(e){e.preventDefault();const n=e.target,t={name:n.elements["user-name"]?.value?.trim()||"",phone:n.elements["user-phone"]?.value?.trim()||"",comment:n.elements["user-comment"]?.value?.trim()||"",furnitureId:y,marker:v};try{A(t);const o=await $("/orders",t);if(!o.ok){const r=await o.json().catch(()=>({}));throw new Error(r?.message||"Помилка запиту")}g.success({title:"Успіх",message:"Форма успішно відправлена",position:"topRight"}),l()}catch(o){g.error({title:"Помилка",message:o?.message||"Щось пішло не так",position:"topRight"})}}function b(e=!0,n=null,t=null){const o=document.getElementById("order-backdrop");o&&(o.classList.toggle("is-open",e),document.body.classList.toggle("no-scroll",e),e&&(y=n,v=t,o.querySelector("#user-name")?.focus()))}function C(e){if(!e)return;e.querySelectorAll("button").forEach(t=>{t.style.cursor="pointer",t.addEventListener("mouseenter",()=>t.classList.add("hover")),t.addEventListener("mouseleave",()=>t.classList.remove("hover")),t.addEventListener("focus",()=>t.classList.add("focus")),t.addEventListener("blur",()=>t.classList.remove("focus")),t.addEventListener("mousedown",()=>t.classList.add("active")),t.addEventListener("mouseup",()=>t.classList.remove("active")),t.addEventListener("mouseout",()=>t.classList.remove("active"))})}L();const i=document.querySelector(".modal"),E=document.querySelector(".modal_close"),h=document.querySelector(".modal_main-image img"),k=document.querySelector(".modal_title"),T=document.querySelector(".modal_category"),B=document.querySelector(".modal_price"),O=document.querySelector(".modal_description"),f=document.querySelector(".modal_rate"),p=document.querySelector(".color-checkboxes"),H=document.querySelector(".modal_sizes"),a=document.querySelector(".modal_order-btn"),w=document.querySelector(".modal_thumbnails"),D=document.querySelector(".furniture-list");let c=0,d=[];function S(e){e.key==="Escape"&&m()}function q(){if(!d.length)return;h.src=d[c],h.alt=k.textContent||"Фото товару";const e=d.map((n,t)=>({src:n,i:t})).filter(({i:n})=>n!==c).map(({src:n,i:t})=>`
      <img class="thumbnail-img" src="${n}" alt="thumb ${t}" data-index="${t}">
    `).join("");w.innerHTML=e}w?.addEventListener("click",e=>{const n=e.target.closest(".thumbnail-img");n&&(c=Number(n.dataset.index),q())});D?.addEventListener("click",e=>{const n=e.target.closest(".details-btn");if(!n)return;const t=n.closest(".furniture-card");if(!t)return;const o=t.dataset.id||t.id;if(!o||!window.allFurnitures)return;const r=window.allFurnitures.find(s=>s._id===o);r&&P(r)});function P(e){if(k.textContent=e.name||"Без назви",T.textContent=e.type||"Тип невідомий",B.textContent=`${e.price} грн`||"Ціна невідома",O.textContent=e.description||"Опис відсутній",a.dataset.model=e.name||"",a.setAttribute("data-modal-open",""),a.setAttribute("data-id",e._id),a.setAttribute("data-marker","product-modal"),f&&typeof e.rate=="number"){const n=Math.round(e.rate*10)/10,t=Math.min(5,n)/5*100;f.innerHTML=`
      <div class="star-rating" style="--star-fill: ${t}%"></div>
      <span class="rating-text">${n.toFixed(1)}</span>
    `}else f.innerHTML="";p&&Array.isArray(e.color)?p.innerHTML=e.color.map((n,t)=>{const o=`color-${t}`;return`
          <input type="radio" id="${o}" name="color" data-color="${n}" ${t===0?"checked":""} />
          <label for="${o}" style="background-color: ${n}"></label>
        `}).join(""):p.innerHTML="",H.textContent=`Розміри: ${e.sizes||"невідомі"}`,d=Array.isArray(e.images)?e.images.slice():[],c=0,q(),a.dataset.id=e._id||"",i.classList.remove("visually-hidden"),E.focus(),document.body.style.overflow="hidden",document.addEventListener("keydown",S)}function m(){i.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",S)}E?.addEventListener("click",m);i?.addEventListener("click",e=>{e.target===i&&m()});a.addEventListener("click",()=>{const e=document.querySelector('.color-checkboxes input[type="radio"]:checked'),n=e?e.dataset.color:null;n&&a.setAttribute("data-color",n),a.dataset.model&&a.setAttribute("data-model",a.dataset.model),m();const t=new CustomEvent("open-order-modal",{detail:{model:a.dataset.model||"",color:n}});document.dispatchEvent(t)});function j(){document.addEventListener("DOMContentLoaded",()=>{new M(".accordion",{duration:300,showMultiple:!1}).open(0)})}document.addEventListener("DOMContentLoaded",async()=>{await L(),document.addEventListener("click",e=>{const n=e.target.closest("[data-modal-open]");n&&b(!0,n.dataset.id??null,n.dataset.marker??null)}),document.addEventListener("open-order-modal",e=>{b(!0,null,"product-modal")})});j();
//# sourceMappingURL=index.js.map
