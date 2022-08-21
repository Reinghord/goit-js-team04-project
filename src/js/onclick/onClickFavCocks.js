import { getFavouriteCocktails } from '../../service/firebase';
import {
  btnFavCoks,
  cocktailsList,
  sectionHero,
  titleCocktails,
  btnLoadMore,
} from '../refs';
import { getCocktailById } from '../thecocktailsDB';
import * as icons from '../../images/icons.svg';
import { noResultsMarkup } from '../cocktails-markup';

btnFavCoks.addEventListener('click', () => {
  sectionHero.style.display = 'none';
  titleCocktails.textContent = 'Favourite Cocktails';
  getFavouriteCocktails(onClickFavCocks);
  btnLoadMore.classList.add('btn_hidden');
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
      return `<li class="cocktails__item" id="${drink.idDrink}" >
  <img class="cocktails__img" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
  <p class="cocktails__name">${drink.strDrink}</p>
<div class="btn__wrapper">  
  <button class="btn btn__learn" data-action="learn-more">Learn more</button>
  <button class="btn btn__add" data-action="addedToFavourite"><svg width="21px" height="19px" class="btn__svg btn__svg--fav">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
  </button>
    </div>
</li>`;
    })
    .join('');
};
