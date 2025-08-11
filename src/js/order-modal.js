import modalHtml from '../partials/order-modal.html?raw'; // vite raw import
import iconSprite from '../img/icons.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let furnitureId = null;
let markerValue = null;

export async function loadOrderModal() {
  try {
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

    if (!document.getElementById('order-backdrop')) {
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    const backdrop = document.getElementById('order-backdrop');
    const closeBtn = backdrop?.querySelector('.modal-button-close');
    const form = backdrop?.querySelector('.modal-form');

    backdrop?.addEventListener('click', e => {
      if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && backdrop?.classList.contains('is-open')) {
        closeModal();
      }
    });

    closeBtn?.addEventListener('click', closeModal);

    form?.addEventListener('submit', handleFormSubmit);

    addButtonInteractionStyles(backdrop);

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
  furnitureId = null;
  markerValue = null;
}

function validateForm(data) {
  if (!data.name || data.name.length < 2) {
    throw new Error('Імʼя має містити щонайменше 2 символи');
  }
  if (!/^\+?\d{10,15}$/.test(data.phone)) {
    throw new Error('Введіть коректний номер телефону');
  }
}

async function fakePostRequest(url, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) {
        resolve({ ok: true, json: async () => ({ message: 'Замовлення успішно прийнято' }) });
      } else {
        reject(new Error('Сервер тимчасово недоступний'));
      }
    }, 800);
  });
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.elements['user-name']?.value?.trim() || '',
    phone: form.elements['user-phone']?.value?.trim() || '',
    comment: form.elements['user-comment']?.value?.trim() || '',
    furnitureId,
    marker: markerValue,
  };

  try {
    validateForm(data);

    const res = await fakePostRequest('/orders', data);

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData?.message || 'Помилка запиту');
    }

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

    const firstInput = backdrop.querySelector('#user-name');
    firstInput?.focus();
  }
}

function addButtonInteractionStyles(container) {
  if (!container) return;
  const buttons = container.querySelectorAll('button');

  buttons.forEach(button => {
    button.style.cursor = 'pointer';

    button.addEventListener('mouseenter', () => button.classList.add('hover'));
    button.addEventListener('mouseleave', () => button.classList.remove('hover'));

    button.addEventListener('focus', () => button.classList.add('focus'));
    button.addEventListener('blur', () => button.classList.remove('focus'));

    button.addEventListener('mousedown', () => button.classList.add('active'));
    button.addEventListener('mouseup', () => button.classList.remove('active'));
    button.addEventListener('mouseout', () => button.classList.remove('active'));
  });
}

loadOrderModal();
// initOrderModalBridge(); // Видалено
