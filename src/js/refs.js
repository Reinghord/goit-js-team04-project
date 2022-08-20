//Refs
export const {
  backdrop,
  modalIngr,
  modalIngrBtnClose,
  modalIngrWrapper,
  modalWrapper,
  ingrCloseBnt,
  cocktailsList,
  cocktailsListCloseBtn,
  letterList,
  heroButtonRef,
  heroSelectRef,
  titleCocktails,
  btnLoadMore,
  btnLogIn,
  btnFavCoks,
  btnFavIngr,
  sectionHero,
} = {
  backdrop: document.querySelector('[data-modal]'),
  modalIngr: document.querySelector('.cocktails-ingredients-modal'),
  modalIngrBtnClose: document.querySelector('.ingr-close-btn'),
  modalIngrWrapper: document.querySelector(
    '.cocktails-ingredients-modal__wrapper'
  ),
  modalWrapper: document.querySelector('.modal-wrapper'),
  ingrCloseBnt: document.querySelector('.ingr-close-btn'),
  cocktailsListCloseBtn: document.querySelector(
    '.cocktails-learn-more__modal__close__btn'
  ),
  cocktailsList: document.querySelector('.cocktails-list'),
  letterList: document.querySelector('.hero-list-button'),
  heroButtonRef: document.querySelector('.hero-list-button'),
  heroSelectRef: document.querySelector('[name="search"]'),
  titleCocktails: document.querySelector('.title-cocktails'),
  btnLoadMore: document.querySelector('.btn_load-more'),
  btnLogIn: document.querySelector('.btn-login'),
  btnFavCoks: document.querySelector('[data-action="link-fav-cock"]'),
  btnFavIngr: document.querySelector('[data-action="link-fav-ingr"]'),
  sectionHero: document.querySelector('.hero'),
};
