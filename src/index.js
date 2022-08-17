//Imports
import { cocktailsMarkup, markupFilter } from './js/cocktails-markup';
import getCocktails from './js/thecocktailsDB';
import debounce from 'lodash.debounce';
//ref
const cocktailsList = document.querySelector('.cocktails-list');

let markup = [];

async function doMagic() {
  const response = await getCocktails();
  markup = cocktailsMarkup(response);
  const filteredMarkup = markupFilter(markup);
  cocktailsList.innerHTML = filteredMarkup;
}

doMagic();

function debounceMarkup() {
  cocktailsList.innerHTML = markupFilter(markup);
}

window.addEventListener('resize', debounce(debounceMarkup, 200));
