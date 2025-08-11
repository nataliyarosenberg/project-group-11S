import iconSprite from '../img/icons.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let furnitureId = null;
let markerValue = null;

// Функція для завантаження HTML модалки
export async function loadOrderModal() {
  try {
    // Додаємо SVG спрайт
    if (!document.getElementById('svg-sprite')) {
      const response = await fetch(iconSprite);
      const svgText = await response.text();
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.width = '0';
      div.style.height = '0';
      div.style.overflow = 'hidden';
      div.id = 'svg-sprite';
      div.innerHTML = svgText;
      document.body.prepend(div);
    }

    const response = await fetch('./partials/order-modal.html');
    const html = await response.text();
    document.body.insertAdjacentHTML('beforeend', html);

    const backdrop = document.querySelector('.backdrop');
    const closeBtn = document.querySelector('.modal-button-close');
    const form = document.querySelector('.modal-form');

    if (backdrop) {
      // Закриття по кліку на бекдроп
      backdrop.addEventListener('click', e => {
        if (e.target === backdrop) {
          closeModal();
        }
      });

      // Закриття по ESC
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
          closeModal();
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
  } catch (error) {
    console.error('Помилка завантаження модалки:', error);
  }
}

function closeModal() {
  const backdrop = document.querySelector('.backdrop');
  if (backdrop) {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    resetForm();
  }
}

function resetForm() {
  const form = document.querySelector('.modal-form');
  if (form) {
    form.reset();
  }
}

// async function handleFormSubmit(e) {
//   e.preventDefault();

//   const form = e.target;
//   const formData = new FormData(form);
//   const data = {
//     name: formData.get('user-name'),
//     phone: formData.get('user-phone'),
//     comment: formData.get('user-comment'),
//     furnitureId,
//     marker: markerValue,
//   };

//   try {
//     const response = await fetch('/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       iziToast.success({
//         title: 'Успіх',
//         message: 'Ваше замовлення успішно відправлено!',
//         position: 'topRight',
//       });
//       closeModal();
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Помилка сервера');
//     }
//   } catch (error) {
//     iziToast.error({
//       title: 'Помилка',
//       message: error.message || 'Не вдалося відправити форму',
//       position: 'topRight',
//     });
//   }
// }

async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = {
    name: formData.get('user-name'),
    phone: formData.get('user-phone'),
    comment: formData.get('user-comment'),
    furnitureId,
    marker: markerValue,
  };
  try {
    iziToast.success({
      title: 'Успіх',
      message: 'Форма успішно відправлена',
      position: 'topRight',
    });
    closeModal();
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так ',
      position: 'topRight',
    });
  }
}

export function toggleModal(open = true, id = null, marker = null) {
  const backdrop = document.querySelector('.backdrop');
  if (backdrop) {
    backdrop.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';

    if (open) {
      furnitureId = id;
      markerValue = marker;
    }
  }
}

//     // Додаємо обробники подій
//     const backdrop = document.querySelector('.backdrop');
//     if (backdrop) {
//       backdrop.addEventListener('click', () => {
//         backdrop.classList.remove('is-open');
//       });
//     }
//   } catch (error) {
//     console.error('Помилка завантаження модалки:', error);
//   }
// }

// // Функція для відкриття/закриття модалки
// export function toggleModal(open = true) {
//   const backdrop = document.querySelector('.backdrop');
//   if (backdrop) {
//     backdrop.classList.toggle('is-open', open);
//   }
// }
