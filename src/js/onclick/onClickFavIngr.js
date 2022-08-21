import { getFavouriteCocktails } from '../../service/firebase';
import {
  backdrop,
  btnFavIngr,
  cocktailsList,
  sectionHero,
  titleCocktails,
  modalIngrWrapper,
  modalIngr,
  cocktailModalMain,
  ingrCloseBnt,

} from '../refs';
import {
  onCloseIngrModal,
  onCloseEsc,
  onCloseIngrModal,
  onClickOutside,
  onClickLearnMoreClose,
} from './onClickLearnMore';
import {
  getIngredientById,
  getIngredientIncsructions,
} from '../thecocktailsDB';
import * as icons from '../../images/icons.svg';
import { noResultsMarkup } from '../cocktails-markup';
import {
  getFavouriteIngredients,
  renderFavouriteIngredientsIconModal,
} from './onClickAddFavIngrModal';
import { auth } from '../../service/firebase';
import { removeFromFavouriteIngr } from '../../service/firebase';
import { addToFavouriteIngr } from '../../service/firebase';
import { markupIngredients } from '../cocktailsModalRender';
btnFavIngr.addEventListener('click', () => {
  sectionHero.style.display = 'none';
  titleCocktails.textContent = 'Favourite Ingredients';
  getFavouriteIngredients(onClickFavIngr);
  cocktailsList.addEventListener('click', onClickMoreInfoIngr);
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

// function for lean more about ingr

async function onClickMoreInfoIngr(e) {
  if (e.target.dataset.name) {
    const name = e.target.dataset.name;
    const ingrResponse = await getIngredientIncsructions(name);
    const ingrMarkup = markupIngredients(ingrResponse);
    modalIngrWrapper.innerHTML = ingrMarkup;
    document.body.classList.add('modal-open');
    backdrop.classList.toggle('is-hidden');
    modalIngr.classList.remove('is-hidden');
    cocktailModalMain.classList.add('is-hidden');
    getFavouriteIngredients(renderFavouriteIngredientsIconModal);

    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onCloseEsc);
    ingrCloseBnt.addEventListener('click', e => {
      backdrop.classList.add('is-hidden');
      modalIngr.classList.add('is-hidden');
      document.body.classList.remove('modal-open');
    });
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
  <button class="cocktails-btn cocktails-learn" data-name="${ingr.strIngredient}">Learn more</button>
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
