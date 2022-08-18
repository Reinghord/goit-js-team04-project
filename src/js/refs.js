//Refs
export const {
  backdrop,
  modalWrapper,
  cocktailsList,
  cocktailsListCloseBtn,
  letterList,
  heroButtonRef,
  heroSelectRef,
} = {
  backdrop: document.querySelector('[data-modal]'),
  modalWrapper: document.querySelector('.modal-wrapper'),
  cocktailsListCloseBtn: document.querySelector(
    '.cocktails-learn-more__modal__close__btn'
  ),
  cocktailsList: document.querySelector('.cocktails-list'),
  letterList: document.querySelector('.hero-list-button'),
  heroButtonRef: document.querySelector('.hero-list-button'),
  heroSelectRef: document.querySelector('[name="search"]'),
};
