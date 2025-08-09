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

document.querySelector('.furniture-list').addEventListener('click', event => {
  const btn = event.target.closest('.details-btn');
  if (!btn) return;

  const card = btn.closest('.furniture-card');
  const id = card.dataset.id || card.id;
  if (!card) return;

  if (!id || !window.allFurnitures) return;

  const product = window.allFurnitures.find(item => item._id === id);
  if (!product) return;

  openModal(product);
});

function handleEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function openModal(product) {
  modalImg.src = product.images?.[0] || '';
  modalImg.alt = product.description || '';
  modalTitle.textContent = product.name || 'Без назви';
  modalCategory.textContent = product.type || 'Тип невідомий';
  modalPrice.textContent = `${product.price} грн` || 'Ціна невідома';
  modalDescription.textContent = product.description || 'Опис відсутній';
  orderBtn.dataset.model = product.name;

  if (modalRate && typeof product.rate === 'number') {
  const rounded = Math.round(product.rate * 10) / 10;
  const percentage = (Math.min(5, rounded) / 5) * 100;

  modalRate.innerHTML = `
    <div class="star-rating" style="--star-fill: ${percentage}%"></div>
    <span class="rating-text">${rounded.toFixed(1)}</span>
  `;
}

  if (thumbsContainer && Array.isArray(product.images)) {
    thumbsContainer.innerHTML = product.images
      .slice(1)
      .map(img => `<img src="${img}" alt="${product.name}" class="thumbnail-img" />`)
      .join('');
  }

  if (modalColors && Array.isArray(product.color)) {
 modalColors.innerHTML = product.color
  .map((color, i) => {
    const id = `color-${i}`;
    return `
      <input type="radio" id="${id}" name="color" data-color="${color}" ${i === 0 ? 'checked' : ''} />
      <label for="${id}" style="background-color: ${color}"></label>
    `;
  })
  .join('');
  }

  if (modalSize) {
    modalSize.textContent = `Розміри: ${product.sizes || 'невідомі'}`;
  }

  if (orderBtn) {
    orderBtn.dataset.id = product._id;
  }

  modal.classList.remove('visually-hidden');

  thumbsContainer.addEventListener('click', event => {
    const clickedImg = event.target.closest('.thumbnail-img');
    if (!clickedImg) return;

    modalImg.src = clickedImg.src;
    modalImg.alt = clickedImg.alt;
});
  closeModalBtn.focus();

  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscape);
}

function closeModal() {
  modal.classList.add('visually-hidden');
document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEscape);
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

orderBtn.addEventListener('click', () => {
  closeModal();

  const selectedColorInput = document.querySelector('.color-checkboxes input[type="radio"]:checked');
  const selectedColor = selectedColorInput ? selectedColorInput.dataset.color : null;

  const modelName = orderBtn.dataset.model;

  const event = new CustomEvent('open-order-modal', {
    detail: {
      model: modelName,
      color: selectedColor
    }
  });
  
  document.body.style.overflow = '';
  document.dispatchEvent(event);
});
