import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loaderMore = document.querySelector(".loader-more")
const loaderMoreContainer = document.querySelector(".loader-more-container");
const furnituresListContainer = document.querySelector(".furniture-list");
const loadMoreBtn = document.querySelector(".load-more-btn");

export let currentPage = 1;
let totalPages = null;
const limit = 8;
// ініціація кеша для модалки
window.allFurnitures = window.allFurnitures || [];
// 

export async function fetchCategories() {
    try {
        const response = await axios('https://furniture-store.b.goit.study/api/categories');
        const categories = response.data;

      categories.unshift({ _id: "0", name: "Всі товари" })
      const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach((card, index) => {
      const category = categories[index];
      if (!category) return;

      card.dataset.id = category._id;

      const title = card.querySelector('.category-title');
      if (title) {
        title.textContent = category.name;
      }
    });} catch (error) {
        iziToast.show({
      message: 'Sorry, something went wrong. Please try again!',
      position: 'topRight',
      messageColor: '#fff',
      titleColor: '#fff',
      color: '#ef4040',
      iconUrl: '../images/our-furniture/bi_x-octagon-2.svg',
      maxWidth: 432
    });
    }
}

export async function fetchProducts(page = 1, id) {
  try {
    showLoaderMore();
    hideLoadMoreButton();

    let url = `https://furniture-store.b.goit.study/api/furnitures?limit=${limit}&page=${page}`;
    
    if (id && id !== "0") {
      url += `&category=${id}`;
    }

    const response = await axios(url);
    const productsObject = response.data;
    
    renderProducts(productsObject);

    if (totalPages === null) {
      totalPages = Math.ceil(productsObject.totalItems / limit);
    }

    if (page >= totalPages) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton(); 
    }
  } catch (error) {
    iziToast.show({
      message: 'Sorry, something went wrong. Please try again!',
      position: 'topRight',
      messageColor: '#fff',
      titleColor: '#fff',
      color: '#ef4040',
      iconUrl: '../images/our-furniture/bi_x-octagon-2.svg',
      maxWidth: 432
    });
  } finally {
    hideLoaderMore();
  }
}

export function renderProducts(obj) {
  const furnitures = obj.furnitures;
  // збираємо всі товари для модалки
    window.allFurnitures = [
  ...new Map(
    [...window.allFurnitures, ...furnitures].map(item => [item._id, item])
  ).values()
  ];
  // 
  const markup = furnitures.map(product => {
    const { _id, name, description, price, images } = product;
    return `
    <li class="furniture-card" id="${_id}"> 
  <img src="${images[0]}" alt="${description}" class="furniture-image" />
      <p class="furniture-name">${name}</p>
      <div class="color-wrap">
        <span class="grey-color"></span>
        <span class="beige-color"></span>
        <span class="black-color"></span>
      </div>
      <p class="furniture-price">${price} грн</p>
  <button class="details-btn" type="button">Детальніше</button>
</li>`
  }).join("");

  furnituresListContainer.insertAdjacentHTML('beforeend', markup);
}

export async function handlerClickOnCategory(event){
    const currentCategory = event.target.closest(".category-card")
    if (!currentCategory) {
        return
    }

    document.querySelectorAll(".category-card.active").forEach(card =>
    card.classList.remove("active")
  );

    currentCategory.classList.add("active");
    
    const currentCategoryID = currentCategory.dataset.id;
    
    clearProducts();
    currentPage = 1; 

  if (currentCategoryID === "0") { 
    totalPages = null; 
    fetchProducts(currentPage);
  } else {
    totalPages = null; 
    fetchProducts(currentPage, currentCategoryID);
  }
}




 export function handleLoadMore() {
  currentPage += 1;
  fetchProducts(currentPage);
 }

 export function showLoaderMore() {
  loaderMore.classList.remove("hidden");
  loaderMoreContainer.style.display = 'flex';

}

 export function hideLoaderMore() {
  loaderMore.classList.add("hidden");
  loaderMoreContainer.style.display = 'none';
 }

 
export function showLoadMoreButton() {
  loadMoreBtn.classList.remove("hidden");
  
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add("hidden");
}

function clearProducts() {
  furnituresListContainer.innerHTML = "";
  // очіщення кешу при зміні категорії
  window.allFurnitures = []; 
  // 
}