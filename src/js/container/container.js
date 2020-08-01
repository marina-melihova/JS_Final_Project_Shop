import { refs } from '../components/refs';
import { catalogListMarkup} from '../catalog/catalog'
import { header } from '../header/header';
import {
  categoriesListMarkup,
  categoriesListMarkupAddListeners,
} from '../category/category-markup';
import {
  searchSideBar
} from '../search/searchsidebar/searchSideBar.js';


//В каждом диве запустить функцию определенного модуля который булет отрисовывать блок.

const containerHeaderMarkup = function () {
  return `
    <div class="header-wrapper"></div>
    `;
};
const containerFooterMarkup = function () {
  return `
    <div class="footer"></div>
    `;
};
const containerSectionsMarkup = function () {
  return `
    <div class="slider-wrapper"></div>
    <div class="category-wrapper">${categoriesListMarkup()}</div>
    <div class="new-products-wrapper"></div>
    <div class="last-seen-wrapper"></div>
    `;
};

export const containerHandler = () => {
  refs.container.insertAdjacentHTML('afterbegin', containerHeaderMarkup());
  refs.container.insertAdjacentHTML('beforeend', containerFooterMarkup());
  refs.sections.innerHTML = containerSectionsMarkup();
  categoriesListMarkupAddListeners();
};

// categoriesListMarkup(categories);
