const container = document.querySelector('.modalModule');
// const btnTest = document.querySelector('.test'); // test button need to be made in index.html

// === Hot to send data in modal module ===
// ===  через component должна заходить Ваша динамицеская разметка ===

// const component = () => {
//   return `<div class="component">
//   <button class="btn__component"> action</button>
//   </div>`;
// };

// ===  через listeners должны заходить Ваши слушатели ===

// const listeners = action => {
//   const btnComponent = document.querySelector('.btn__component');
//   btnComponent.addEventListener('click', action);
// };

//  === MODAL MODULE ===

const modalModule = (component, listeners) => {
  const closeModalComponent = () => {
    container.innerHTML = '';
  };

  const closeModalWindow = e => {
    if (
      e.target.classList.contains('modalOverlay') ||
      e.target.dataset.action === 'btn__closeModal' ||
      e.key === 'Escape'
    ) {
      container.innerHTML = '';
    }
  };

  const markup = `
    <div class="modalOverlay">
  
    <div class="modalComponent"></div>
  
    <button
        type="button"
        class="btn__closeModal"
        data-action="btn__closeModal"
    ></button>
    </div>
    `;

  container.innerHTML = markup;

  const modalComponent = document.querySelector('.modalComponent');
  modalComponent.innerHTML = component();
  listeners(closeModalComponent);
  const modalOverlay = document.querySelector('.modalOverlay');
  modalOverlay.addEventListener('click', closeModalWindow);
  window.addEventListener('keydown', closeModalWindow);
};

export { modalModule };
// === test button need to be made in index.html to use it ===
// btnTest.addEventListener('click', () => modalModule(component, listeners));

// ===  used styles are in modalModule.scss - classes=> component and btn__closeModal.
