import { loadOrderModal, toggleModal } from './js/order-modal.js';
import { initAccordion } from './js/faq.js';

// Завантажуємо модалку при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  loadOrderModal();

  //   //  відкрити модалку по кліку на кнопку (якщо є)
  //   const openModalBtn = document.querySelector('[data-modal-open]');
  //   if (openModalBtn) {
  //     openModalBtn.addEventListener('click', () => toggleModal(true));
  //   }
  // });

  // Приклад відкриття модалки з даними
  document.addEventListener('click', e => {
    if (e.target.closest('[data-modal-open]')) {
      const furnitureId = e.target.closest('[data-modal-open]').dataset.id;
      const marker = e.target.closest('[data-modal-open]').dataset.marker;
      toggleModal(true, furnitureId, marker);
    }
  });
});

initAccordion();
