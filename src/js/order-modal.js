// /js/order-modal.js
import modalHtml from '../partials/order-modal.html?raw'; // vite raw import
import iconSprite from '../img/icons.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let furnitureId = null;
let markerValue = null;

export async function loadOrderModal() {
  try {
    // Inject SVG sprite once so <use href="#icon-x-icon"> works
    if (!document.getElementById('svg-sprite')) {
      const response = await fetch(iconSprite);
      const svgText = await response.text();
      const div = document.createElement('div');
      div.id = 'svg-sprite';
      div.style.position = 'absolute';
      div.style.width = '0';
      div.style.height = '0';
      div.style.overflow = 'hidden';
      div.innerHTML = svgText;
      document.body.prepend(div);
    }

    // Inject modal markup once
    if (!document.getElementById('order-backdrop')) {
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    const backdrop = document.getElementById('order-backdrop');
    const closeBtn = backdrop?.querySelector('.modal-button-close');
    const form = backdrop?.querySelector('.modal-form');

    // Close on backdrop click
    backdrop?.addEventListener('click', e => {
      if (e.target === backdrop) closeModal();
    });

    // Close on ESC only when open
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && backdrop?.classList.contains('is-open')) {
        closeModal();
      }
    });

    // Close button
    closeBtn?.addEventListener('click', closeModal);

    // Form submit
    form?.addEventListener('submit', handleFormSubmit);
  } catch (err) {
    console.error('Помилка завантаження модалки:', err);
  }
}

function closeModal() {
  const backdrop = document.getElementById('order-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  backdrop.querySelector('.modal-form')?.reset();
}

async function handleFormSubmit(e) {
  e.preventDefault();

  // Collect values
  const form = e.target;
  const data = {
    name: form.elements['user-name']?.value?.trim() || '',
    phone: form.elements['user-phone']?.value?.trim() || '',
    comment: form.elements['user-comment']?.value?.trim() || '',
    furnitureId,
    marker: markerValue,
  };

  try {
    // TODO: swap this for your real POST if needed
    // await fetch('/orders', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });

    iziToast.success({
      title: 'Успіх',
      message: 'Форма успішно відправлена',
      position: 'topRight',
    });
    closeModal();
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: error?.message || 'Щось пішло не так',
      position: 'topRight',
    });
  }
}

export function toggleModal(open = true, id = null, marker = null) {
  const backdrop = document.getElementById('order-backdrop');
  if (!backdrop) return;

  backdrop.classList.toggle('is-open', open);
  document.body.classList.toggle('no-scroll', open);

  if (open) {
    furnitureId = id;
    markerValue = marker;

    // Focus first input for accessibility
    const firstInput = backdrop.querySelector('#user-name');
    firstInput?.focus();
  }
}

/** Bridge: open order modal from product modal */
export function initOrderModalBridge() {
  document.addEventListener('open-order-modal', e => {
    const { model, color } = e.detail || {};
    toggleModal(true, null, 'product-modal');

    const comment = document.getElementById('user-comment');
    if (comment) {
      comment.value = [model && `Модель: ${model}`, color && `Колір: ${color}`]
        .filter(Boolean)
        .join(', ');
    }
  });
}

// Call these once in your app bootstrap (e.g., main.js)
loadOrderModal();
initOrderModalBridge();
