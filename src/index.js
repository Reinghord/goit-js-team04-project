//Imports
import debounce from 'lodash.debounce';
import { cocktailsMarkup, markupFilter } from './js/cocktails-markup';
import {
  getRandomCocktails,
  getCocktailsByLetter,
  getCocktailById,
} from './js/thecocktailsDB';
import './js/header';
import {
  buttons,
  createSearchButtons,
  createSearchButtonsMobile,
} from './js/hero';
import { errorPopup } from './js/notifications';
import { markupForModal } from './js/cocktailsModalRender';
import {
  onClickLearnMore,
  onClickLearnMoreClose,
} from './js/onclick/onClickLearnMore';
import { onClickSearchLetter } from './js/onclick/onclicksearchletter';
//Refs
import {
  backdrop,
  modalWrapper,
  cocktailsList,
  cocktailsListCloseBtn,
  letterList,
  heroButtonRef,
  heroSelectRef,
} from './js/refs';

//Refs and vars
const {
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
////Var to store markup data on init loading or query
let markup = [];
////Var to control listener on window for resize event
const debounceResizedMarkup = debounce(resizeMarkup, 200);

//!!! Initial page loading !!!
onLoadingHome();

//Function to execute on initial page loading OR when returned to Home window for SPA
function onLoadingHome() {
  createSearchButtons(buttons);
  createSearchButtonsMobile(buttons);
  getAndRenderRandomCocktails();
  window.addEventListener('resize', debounceResizedMarkup);
  cocktailsList.addEventListener('click', e => onClickLearnMore(e));
  letterList.addEventListener('click', e => onClickSearchLetter(e, markup));
  cocktailsListCloseBtn.addEventListener('click', onClickLearnMoreClose);
}

//Function to update markup amount based on window width
function resizeMarkup() {
  cocktailsList.innerHTML = markupFilter(markup);
}

//Function to get random cocktails, prepare markup and render depending on screen size
async function getAndRenderRandomCocktails() {
  try {
    const response = await getRandomCocktails();
    markup = cocktailsMarkup(response);
    const filteredMarkup = markupFilter(markup);
    cocktailsList.innerHTML = filteredMarkup;
  } catch (error) {
    errorPopup();
  }
}
