import { createSingleCardMarkup } from './cardModule';
// /* <section class="card container"></section> *
const createListMarkup = array => {
  if (array.length < 1) {
    return `
<section class="card">
<h2 class="card_description">Ничего не найдено</h2>`;
  } else {
    return `
   <section class="card">
  <h2 class="card_description">Результат поиска </h2>
  <ul class="card_list">${array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element, 'sale');
    return acc;
  }, '')}</ul></section>`;
  }
};

const getItem = event => {
  if (event.target !== current.target) {
    const id = event.target.closest('[data-id]').dataset.id;
    console.log(id);
    productCard(id); // функция Ани(id)
  } else return id;
};
export const createList = array => {
  const container = document.querySelector('.container');
  // console.log(createListMarkup(array));
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', getItem);

  // cardList.addEventListener('click', getVector);
};

function getVector(e) {
  console.log(e.target);
}
