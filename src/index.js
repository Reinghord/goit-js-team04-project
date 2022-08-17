//Imports
import { cocktailsMarkup } from './js/cocktails-markup';
import getCocktails from './js/thecocktailsDB';
import { markupFilter } from './js/cocktails-markup';
import debounce from 'lodash.debounce';
//ref
const cocktailsList = document.querySelector('.cocktails-list');

async function doMagic() {
  const response = await getCocktails();
  const markup = cocktailsMarkup(response);
  const filteredMarkup = markupFilter(markup);
  cocktailsList.innerHTML = filteredMarkup;

  // window.addEventListener('resize', debounce(debounceMarkup, 200));

  // function debounceMarkup() {
  //   cocktailsList.innerHTML = markupFilter(markup);
  // }
}

doMagic();
