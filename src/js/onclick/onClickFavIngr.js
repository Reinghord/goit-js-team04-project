import { getFavouriteCocktails } from '../../service/firebase';
import {
  btnFavIngr,
  cocktailsList,
  sectionHero,
  titleCocktails,
  btnLoadMore,
} from '../refs';
import { getIngredientById } from '../thecocktailsDB';
import * as icons from '../../images/icons.svg';
import { noResultsMarkup } from '../cocktails-markup';
import {
  getFavouriteIngredients,
  renderFavouriteIngredientsIconModal,
} from './onClickAddFavIngrModal';
import { auth } from '../../service/firebase';
import { removeFromFavouriteIngr } from '../../service/firebase';
import { addToFavouriteIngr } from '../../service/firebase';

btnFavIngr.addEventListener('click', () => {
  sectionHero.style.display = 'none';
  titleCocktails.textContent = 'Favourite Ingredients';
  getFavouriteIngredients(onClickFavIngr);
  btnLoadMore.classList.add('btn_hidden');
});

function onClickFavIngr(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    const keys = Object.keys(data);
    const get = keys.map(key => getIngredientById(key));
    Promise.all(get).then(response => {
      const filteredResponse = response.map(elem => elem.data.ingredients[0]);

      const markup = ingredientsMarkup(filteredResponse);

      cocktailsList.innerHTML = markup;
      cocktailsList.addEventListener('click', onClickIngr);
    });
  } else {
    titleCocktails.textContent = `Sorry, we didn't find any ingredient for you`;
    cocktailsList.innerHTML = noResultsMarkup();
  }
}

// Function to create an array of markup
const ingredientsMarkup = function (ingredientsData) {
  return ingredientsData
    .map(ingr => {
      return `<li class="cocktails-item" id="${ingr.idIngredient}" >
  <img class="cocktails-img" src="https://www.thecocktaildb.com/images/ingredients/${ingr.strIngredient}-Medium.png" alt="${ingr.strIngredient}" />
  <p class="cocktails-name">${ingr.strIngredient}</p>
<div class="cocktails-btn__wrapper">  
  <button class="cocktails-btn cocktails-learn" data-action="learn-more">Learn more</button>
  <button class="cocktails-btn cocktails-add" data-action="addedToFavouriteIngr" data-idingr="${ingr.idIngredient}"><svg width="21px" height="19px" class="cocktails-svg cocktails-svg--fav">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
  </button>
    </div>
</li>`;
    })
    .join('');
};

export function onClickIngr(e) {
  const id = e.target.dataset.idingr;
  if (e.target.dataset.action === 'favouriteIngr') {
    if (auth.currentUser) {
      addToFavouriteIngr(id);
      getFavouriteIngredients(renderFavouriteIngredientsIconModal);
      e.target.dataset.action = 'addedToFavouriteIngr';
      return;
    }
    errorNoLogin();
  }
  if (e.target.dataset.action === 'addedToFavouriteIngr') {
    if (auth.currentUser) {
      removeFromFavouriteIngr(id);
      e.target.firstElementChild.classList.remove('cocktails-svg--fav');
      e.target.dataset.action = 'favouriteIngr';
      return;
    }
    errorNoLogin();
  }
}
