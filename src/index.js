//Imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import debounce from 'lodash.debounce';
import { cocktailsMarkup, markupFilter } from './js/cocktails-markup';
import getRandomCocktails from './js/thecocktailsDB';
import './js/header';
import {
  buttons,
  createSearchButtons,
  createSearchButtonsMobile,
} from './js/hero';

//Refs and vars
const { cocktailsList, heroButtonRef, heroSelectRef } = {
  cocktailsList: document.querySelector('.cocktails-list'),
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
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Oops... something went wrong!',
      position: 'topRight',
    });
  }
}
