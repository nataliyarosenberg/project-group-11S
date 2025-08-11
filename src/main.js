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

  // B) when the product modal fires the custom event, just open modal without prefill
  document.addEventListener('open-order-modal', evt => {
    // Просто відкриваємо модалку, без префілду коментаря
    toggleModal(true, null, 'product-modal');
  });
});

import { initAccordion } from './js/faq.js';
initAccordion();
