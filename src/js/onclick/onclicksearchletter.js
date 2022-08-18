import { errorPopup } from '../notifications';
import { getCocktailsByLetter } from '../thecocktailsDB';
import {
  cocktailsMarkup,
  markupFilter,
  noResultsMarkup,
} from '../cocktails-markup';
import { cocktailsList, titleCocktails } from '../refs';

//Function to call during click on Learn more button
//Fetching full details of cocktail ID
export async function onClickSearchLetter(e) {
  if (e.target.nodeName === 'BUTTON') {
    try {
      const letter = e.target.textContent;
      const response = await getCocktailsByLetter(letter);
      if (response.data.drinks) {
        array = cocktailsMarkup(response);
        localStorage.setItem('markup', JSON.stringify(array));
        const filteredMarkup = markupFilter(array);
        titleCocktails.innerHTML = `Cocktails`;
        return (cocktailsList.innerHTML = filteredMarkup);
      }
      titleCocktails.innerHTML = `Sorry, we didn't find any cocktail for you`;
      return (cocktailsList.innerHTML = noResultsMarkup());
    } catch (error) {
      errorPopup();
    }
  }
}
