import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let reviews = document.querySelector('.swiper-wrapper');

let swiper;

async function getFeedbacks() {
  try {
    const url = 'https://furniture-store.b.goit.study/api/feedbacks';
    const response = await axios.get(url);
    return response.data.feedbacks;
  } catch (error) {
    console.error('Помилка отримання відгуків:', error);
    return [];
  }
}

try {
  const MAX_SLIDES = 10;
  const rev = (await getFeedbacks()).slice(0, MAX_SLIDES);

  const review = rev
    .map(elem => {
      return `
          <div class="reviews-item swiper-slide ">
            <div class="star-containers">
              <div class="rating value-${roundRating(elem.rate)}">
                <div class="star-container">
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    <div class="star">
                        <svg class="icon icon-slider star-filled" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector"></use>
                        </svg>
                        <svg class="icon icon-slider star-half" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-Vector-half"></use>
                        </svg>
                        <svg class="icon icon-slider star-empty" width="13" height="13">
                            <use href="./images/reviews/icons.svg#icon-field-star"></use>
                        </svg>
                    </div>
                    </div>
              </div>
            </div>
            <p class="reviews-text">${elem.descr}</p>
            <p class="reviews-reviewer">${elem.name}</p>
          </div>
        `;
    })
    .join('');

  reviews.insertAdjacentHTML('beforeend', review);

  applyHalfStarClass();
  swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    infinite: false,
    slidesPerView: 3,
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.reviews-actual-slide',
      clickable: true,
      renderBullet: function (index, className) {
        const activeIndex = this.activeIndex || 0;
        const isActive = index === activeIndex ? 'icon-active' : '';
        return `
        <svg class="icon icon-Dot ${className}" width="8" height="8">
          <use href="./images/reviews/icons.svg#icon-Dot"></use>
        </svg>
      `;
      },
      bulletClass: 'icon-Dot',
      bulletActiveClass: 'icon-active',
      dynamicBullets: false,
    },
    navigation: {
      nextEl: '.after',
      prevEl: '.before',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  updateNavButtons();

  swiper.on('slideChange', () => {
    updateNavButtons();
  });
} catch {
} finally {
}

function roundRating(value) {
  if (value >= 3.3 && value <= 3.7) return 3.5;
  if (value >= 3.8 && value <= 4.2) return 4;
  return Math.round(value * 2) / 2;
}
function applyHalfStarClass() {
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(ratingEl => {
    const valueClass = Array.from(ratingEl.classList).find(cls =>
      cls.startsWith('value-')
    );
    if (!valueClass) return;

    const value = parseFloat(valueClass.replace('value-', ''));
    console.log('Original value:', value);

    if (value % 1 !== 0) {
      ratingEl.classList.add('half');
    }

    ratingEl.classList.remove(valueClass);
    ratingEl.classList.add(`value-${Math.floor(value)}`);
  });
}

const prevBtn = document.querySelector('.before');
const nextBtn = document.querySelector('.after');

function updateNavButtons() {
  if (swiper.isBeginning) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}
