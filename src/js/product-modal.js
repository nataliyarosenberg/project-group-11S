const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal_close');

const modalImg = document.querySelector('.modal_main-image img');
const modalTitle = document.querySelector('.modal_title');
const modalCategory = document.querySelector('.modal_category');
const modalPrice = document.querySelector('.modal_price');
const modalDescription = document.querySelector('.modal_description');
const modalRate = document.querySelector('.modal_rate');
const modalColors = document.querySelector('.color-checkboxes');
const modalSize = document.querySelector('.modal_sizes');
const orderBtn = document.querySelector('.modal_order-btn');
const thumbsContainer = document.querySelector('.modal_thumbnails');

const list = document.querySelector('.furniture-list');

let currentIndex = 0;
let currentImages = [];

function handleEscape(e) {
  if (e.key === 'Escape') closeModal();
}

function renderGallery() {
  if (!currentImages.length) return;

  modalImg.src = currentImages[currentIndex];
  modalImg.alt = modalTitle.textContent || 'Фото товару';

  const thumbs = currentImages
    .map((src, i) => ({ src, i }))
    .filter(({ i }) => i !== currentIndex)
    .map(
      ({ src, i }) => `
      <img class="thumbnail-img" src="${src}" alt="thumb ${i}" data-index="${i}">
    `
    )
    .join('');

  thumbsContainer.innerHTML = thumbs;
}

thumbsContainer?.addEventListener('click', e => {
  const t = e.target.closest('.thumbnail-img');
  if (!t) return;
  currentIndex = Number(t.dataset.index);
  renderGallery();
});

list?.addEventListener('click', event => {
  const btn = event.target.closest('.details-btn');
  if (!btn) return;

  const card = btn.closest('.furniture-card');
  if (!card) return;

  const id = card.dataset.id || card.id;
  if (!id || !window.allFurnitures) return;

  const product = window.allFurnitures.find(item => item._id === id);
  if (!product) return;

  openModal(product);
});

function openModal(product) {
  modalTitle.textContent = product.name || 'Без назви';
  modalCategory.textContent = product.type || 'Тип невідомий';
  modalPrice.textContent = `${product.price} грн` || 'Ціна невідома';
  modalDescription.textContent = product.description || 'Опис відсутній';
  orderBtn.dataset.model = product.name || '';
  orderBtn.setAttribute('data-modal-open', '');
  orderBtn.setAttribute('data-id', product._id);
  orderBtn.setAttribute('data-marker', 'product-modal');

  if (modalRate && typeof product.rate === 'number') {
    const rounded = Math.round(product.rate * 10) / 10;
    const percentage = (Math.min(5, rounded) / 5) * 100;
    modalRate.innerHTML = `
      <div class="star-rating" style="--star-fill: ${percentage}%"></div>
      <span class="rating-text">${rounded.toFixed(1)}</span>
    `;
  } else {
    modalRate.innerHTML = '';
  }

  // кольори (radio)
  if (modalColors && Array.isArray(product.color)) {
    modalColors.innerHTML = product.color
      .map((color, i) => {
        const id = `color-${i}`;
        return `
          <input type="radio" id="${id}" name="color" data-color="${color}" ${
          i === 0 ? 'checked' : ''
        } />
          <label for="${id}" style="background-color: ${color}"></label>
        `;
      })
      .join('');
  } else {
    modalColors.innerHTML = '';
  }

  modalSize.textContent = `Розміри: ${product.sizes || 'невідомі'}`;

  currentImages = Array.isArray(product.images) ? product.images.slice() : [];
  currentIndex = 0;
  renderGallery();

  orderBtn.dataset.id = product._id || '';

  modal.classList.remove('visually-hidden');
  closeModalBtn.focus();
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscape);
}

function closeModal() {
  modal.classList.add('visually-hidden');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEscape);
}

closeModalBtn?.addEventListener('click', closeModal);
modal?.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

orderBtn.addEventListener('click', () => {
  const selected = document.querySelector(
    '.color-checkboxes input[type="radio"]:checked'
  );
  const color = selected ? selected.dataset.color : null;

  if (color) orderBtn.setAttribute('data-color', color);
  if (orderBtn.dataset.model)
    orderBtn.setAttribute('data-model', orderBtn.dataset.model);

  closeModal();

  const evt = new CustomEvent('open-order-modal', {
    detail: {
      model: orderBtn.dataset.model || '',
      color,
    },
  });
  document.dispatchEvent(evt);
});
