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
import { onClickSearchLetter } from './js/onclick';

//Refs and vars
const {
  backdrop,
  cocktailsList,
  cocktailsListCloseBtn,
  letterList,
  heroButtonRef,
  heroSelectRef,
} = {
  backdrop: document.querySelector('[data-modal]'),
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
  createSearchButtons(buttons, heroButtonRef);
  createSearchButtonsMobile(buttons, heroSelectRef);
  getAndRenderRandomCocktails();
  window.addEventListener('resize', debounceResizedMarkup);
  cocktailsList.addEventListener('click', e => onClickLearnMore(e));
  letterList.addEventListener('click', e => onClickSearchLetter(e));
  cocktailsListCloseBtn.addEventListener('click', e =>
    onClickLearnMoreClose(e)
  );
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

//Function to call during click on Learn more button
//Fetching full details of cocktail ID
async function onClickLearnMore(e) {
  if (e.target.dataset.action === 'learn-more') {
    try {
      const id = e.target.parentElement.parentElement.id;
      const response = await getCocktailById(id);
      document.body.classList.toggle('modal-open');
      backdrop.classList.toggle('is-hidden');
    } catch (error) {
      errorPopup();
    }
  }
}

// Function closing modal window

function onClickLearnMoreClose(e) {
  document.body.classList.toggle('modal-open');
  backdrop.classList.toggle('is-hidden');
}
