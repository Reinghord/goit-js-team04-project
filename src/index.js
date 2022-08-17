//Imports
import './js/header';
import cocktailsMarkup from './js/cocktails-markup';
import getCocktails from './js/thecocktailsDB';

//ref
const cocktailsList = document.querySelector('.cocktails-list');

async function doMagic() {
  const response = await getCocktails();
  const markup = cocktailsMarkup(response);
  cocktailsList.innerHTML = markup;
}

doMagic();
