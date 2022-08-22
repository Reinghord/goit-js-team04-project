import { getRandomCocktails } from '../thecocktailsDB';
import { markupFilter } from '../cocktails-markup';
import { cocktailsList } from '../refs';
import { errorPopup } from '../notifications';
import * as icons from '../../images/icons.svg';

//Function to get random cocktails, prepare markup and render depending on screen size
export async function getAndRenderRandomCocktails() {
  try {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const fetchArray = array.map(_ => getRandomCocktails());
    const response = await Promise.all(fetchArray);
    const filteredResponse = response.map(element => element.data.drinks[0]);
    const markup = cocktailsMarkup(filteredResponse);
    localStorage.setItem('markup', JSON.stringify(markup));
    const filteredMarkup = markupFilter(markup);
    cocktailsList.innerHTML = filteredMarkup;
  } catch (error) {
    errorPopup();
  }
}

// Function to create an array of markup
const cocktailsMarkup = function (cocktailsData) {
  return cocktailsData.map(drink => {
    return `<li class="cocktails__item" id="${drink.idDrink}" data-aos="fade-up" >
        <img class="cocktails__img" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
        <p class="cocktails__name">${drink.strDrink}</p>
      <div class="btn__wrapper">
        <button class="btn btn__learn" data-action="learn-more">Learn more</button>
        <button class="btn btn__add" data-action="favourite"><svg width="21px" height="19px" class="btn__svg">
            <use  href="${icons}#icon-icon-fav"></use>
          </svg>
        </button>
          </div>
      </li>`;
  });
};
