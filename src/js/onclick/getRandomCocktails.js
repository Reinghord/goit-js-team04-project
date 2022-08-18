import { getRandomCocktails } from '../thecocktailsDB';
import { cocktailsMarkup, markupFilter } from '../cocktails-markup';
import { cocktailsList } from '../refs';
import { errorPopup } from '../notifications';

//Function to get random cocktails, prepare markup and render depending on screen size
export async function getAndRenderRandomCocktails() {
  try {
    const response = await getRandomCocktails();
    const markup = cocktailsMarkup(response);
    localStorage.setItem('markup', JSON.stringify(markup));
    const filteredMarkup = markupFilter(markup);
    cocktailsList.innerHTML = filteredMarkup;
  } catch (error) {
    errorPopup();
  }
}
