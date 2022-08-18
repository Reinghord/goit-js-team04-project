import { errorPopup } from '../notifications';
import { getCocktailsByLetter } from '../thecocktailsDB';
import {
  cocktailsMarkup,
  markupFilter,
  noResultsMarkup,
} from '../cocktails-markup';
import { cocktailsList } from '../refs';

//Function to call during click on Learn more button
//Fetching full details of cocktail ID
export async function onClickSearchLetter(e, array) {
  if (e.target.nodeName === 'BUTTON') {
    try {
      const letter = e.target.textContent;
      const response = await getCocktailsByLetter(letter);
      if (response.data.drinks) {
        array = cocktailsMarkup(response);
        const filteredMarkup = markupFilter(array);
        return (cocktailsList.innerHTML = filteredMarkup);
      }
      //INSERT HERE MARKUP FOR NOT FOUND
      return (cocktailsList.innerHTML = noResultsMarkup());
    } catch (error) {
      errorPopup();
    }
  }
}
