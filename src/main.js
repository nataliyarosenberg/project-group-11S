// import { loadOrderModal, toggleModal } from './js/order-modal.js';
import { initAccordion } from './js/faq.js';
import 'css-star-rating/css/star-rating.css';

// Завантажуємо модалку при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', () => {
//   loadOrderModal();

//   //  відкрити модалку по кліку на кнопку (якщо є)
//   const openModalBtn = document.querySelector('[data-modal-open]');
//   if (openModalBtn) {
//     openModalBtn.addEventListener('click', () => toggleModal(true));
//   }
// });

// Приклад відкриття модалки з даними
//   document.addEventListener('click', e => {
//     if (e.target.closest('[data-modal-open]')) {
//       const furnitureId = e.target.closest('[data-modal-open]').dataset.id;
//       const marker = e.target.closest('[data-modal-open]').dataset.marker;
//       toggleModal(true, furnitureId, marker);
//     }
//   });
// });
import { loadOrderModal, toggleModal } from './js/order-modal.js';
import './js/product-modal.js'; // ensures it sets up its listeners

document.addEventListener('DOMContentLoaded', async () => {
  await loadOrderModal();

  // A) any element with [data-modal-open] opens the order modal
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-modal-open]');
    if (!opener) return;
    toggleModal(true, opener.dataset.id ?? null, opener.dataset.marker ?? null);
  });

  // B) when the product modal fires the custom event, open & prefill
  document.addEventListener('open-order-modal', evt => {
    const { model, color } = evt.detail || {};
    // optional: prefill comment
    const comment = document.querySelector('#user-comment');
    if (comment) {
      comment.value = [
        model ? `Модель: ${model}` : '',
        color ? `Колір: ${color}` : '',
      ].filter(Boolean).join(', ');
    }
    toggleModal(true, null, 'product-modal');
  });
});

initAccordion();
