import { errorPopup } from '../notifications';
import { getRandomCocktails } from '../thecocktailsDB';
import { cocktailsMarkup, markupFilter } from '../cocktails-markup';

//Function to get random cocktails, prepare markup and render depending on screen size
export async function getAndRenderRandomCocktails(array, elem) {
  try {
    const response = await getRandomCocktails();
    array = cocktailsMarkup(response);
    console.log(array);
    const filteredMarkup = markupFilter(array);
    elem.innerHTML = filteredMarkup;
    return (array = cocktailsMarkup(response));
  } catch (error) {
    errorPopup();
  }
}
