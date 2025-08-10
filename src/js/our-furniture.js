import axios from 'axios';
import {fetchCategories, fetchProducts, showLoaderMore, hideLoaderMore, handleLoadMore, renderProducts, currentPage, handlerClickOnCategory } from '../js/api.js';

const categoriesList = document.querySelector(".categories-list");
const moreBtn = document.querySelector(".load-more-btn");
moreBtn.addEventListener("click", handleLoadMore);
categoriesList.addEventListener("click", handlerClickOnCategory);

fetchCategories();
fetchProducts(currentPage);