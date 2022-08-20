import { getFavouriteCocktails } from '../../service/firebase';
import {
  btnFavCoks,
  cocktailsList,
  sectionHero,
  titleCocktails,
} from '../refs';
import { getCocktailById } from '../thecocktailsDB';
import * as icons from '../../images/icons.svg';
import { noResultsMarkup } from '../cocktails-markup';

btnFavCoks.addEventListener('click', () => {
  sectionHero.style.display = 'none';
  titleCocktails.textContent = 'Favourite Cocktails';
  getFavouriteCocktails(onClickFavCocks);
});

function onClickFavCocks(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    const keys = Object.keys(data);
    const get = keys.map(key => getCocktailById(key));
    Promise.all(get).then(response => {
      const filteredResponse = response.map(elem => elem.data.drinks[0]);
      const markup = cocktailsMarkup(filteredResponse);

      cocktailsList.innerHTML = markup;
    });
  } else {
    titleCocktails.textContent = `Sorry, we didn't find any cocktail for you`;
    cocktailsList.innerHTML = noResultsMarkup();
  }
}

// Function to create an array of markup
const cocktailsMarkup = function (cocktailsData) {
  return cocktailsData
    .map(drink => {
      return `<li class="cocktails-item" id="${drink.idDrink}" >
  <img class="cocktails-img" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
  <p class="cocktails-name">${drink.strDrink}</p>
<div class="cocktails-btn__wrapper">  
  <button class="cocktails-btn cocktails-learn" data-action="learn-more">Learn more</button>
  <button class="cocktails-btn cocktails-add" data-action="addedToFavourite"><svg width="21px" height="19px" class="cocktails-svg cocktails-svg--fav">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
  </button>
    </div>
</li>`;
    })
    .join('');
};
