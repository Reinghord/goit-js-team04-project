//Imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import debounce from 'lodash.debounce';
import { cocktailsMarkup, markupFilter } from './js/cocktails-markup';
import getCocktails from './js/thecocktailsDB';

//Refs and vars
const { cocktailsList } = {
  cocktailsList: document.querySelector('.cocktails-list'),
};
let markup = [];

//!!! Initial page loading !!!

//Renders random cocktails
getAndRenderRandomCocktails();
//Captures changes to window size to render 3, 6 or 9 items
//Using debounce to prevent chatty events
window.addEventListener('resize', debounce(debounceMarkup, 200));

//Function to update markup amount based on window width
function debounceMarkup() {
  cocktailsList.innerHTML = markupFilter(markup);
}

//Function to get random cocktails, prepare markup and render depending on screen size
async function getAndRenderRandomCocktails() {
  try {
    const response = await getCocktails();
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
