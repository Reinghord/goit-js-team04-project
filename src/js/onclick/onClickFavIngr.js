import { getFavouriteCocktails } from '../../service/firebase';
import {
  backdrop,
  btnFavIngr,
  btnLoadMore,
  cocktailsList,
  sectionHero,
  titleCocktails,
  modalIngrWrapper,
  modalIngr,
  cocktailModalMain,
  ingrCloseBnt,
  searchForm,
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
import { onChange } from '../header';

btnFavIngr.addEventListener('click', () => {
  searchForm.removeEventListener('input', onChange);
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
    await getFavouriteIngredients(renderFavouriteIngredientsIconModal);

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
      return `<li class="cocktails__item" id="${ingr.idIngredient}" >
  <img class="cocktails__img" src="https://www.thecocktaildb.com/images/ingredients/${ingr.strIngredient}-Medium.png" alt="${ingr.strIngredient}" />
  <p class="cocktails__name">${ingr.strIngredient}</p>
<div class="btn__wrapper">  
  <button class="btn btn__learn" data-name="${ingr.strIngredient}">Learn more</button>
  <button class="btn btn__add" data-action="addedToFavouriteIngr" data-idingrpage="${ingr.idIngredient}"><svg width="21px" height="19px" class="btn__svg btn__svg--fav">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
  </button>
    </div>
</li>`;
    })
    .join('');
};

export function onClickIngr(e) {
  const id = e.target.dataset.idingrpage;
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
      e.target.firstElementChild.classList.remove('btn__svg--fav');
      e.target.dataset.action = 'favouriteIngr';
      return;
    }
    errorNoLogin();
  }
}
