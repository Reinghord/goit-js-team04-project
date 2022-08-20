import { errorPopup } from '../notifications';
import { getCocktailsByLetter } from '../thecocktailsDB';
import {
  cocktailsMarkup,
  markupFilter,
  noResultsMarkup,
} from '../cocktails-markup';
import { cocktailsList, titleCocktails, btnLoadMore } from '../refs';
import { pagination } from '../pagination';
import { getFavouriteCocktails } from '../../service/firebase';

//Function to call during click on Learn more button
//Fetching full details of cocktail ID
export async function onClickSearchLetter(e) {
  if (e.target.nodeName === 'BUTTON') {
    try {
      const letter = e.target.textContent;
      const response = await getCocktailsByLetter(letter);
      if (response.data.drinks) {
        const array = cocktailsMarkup(response);
        localStorage.setItem('markup', JSON.stringify(array));
        const filteredMarkup = markupFilter(array);
        titleCocktails.innerHTML = `Cocktails`;
        cocktailsList.innerHTML = filteredMarkup;
        pagination();
        getFavouriteCocktails();
        return;
      }
      titleCocktails.innerHTML = `Sorry, we didn't find any cocktail for you`;
      btnLoadMore.classList.add('btn_hidden');
      return (cocktailsList.innerHTML = noResultsMarkup());
    } catch (error) {
      errorPopup();
    }
  }
}
