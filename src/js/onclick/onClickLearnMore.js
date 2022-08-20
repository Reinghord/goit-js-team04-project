import { errorPopup } from '../notifications';
import { getCocktailById, getIngredientIncsructions } from '../thecocktailsDB';
import { markupForModal, markupIngredients } from '../cocktailsModalRender';
import {
  backdrop,
  modalWrapper,
  modalIngrWrapper,
  modalIngr,
  ingrCloseBnt,
} from '../refs';
import {
  onClickAddFavModal,
  renderFavouriteCocktailsIconModal,
} from './onClickAddFavModal';
import {
  getFavouriteCocktails,
  renderFavouriteCocktailsIcon,
} from '../../service/firebase';
import { onClick } from './onClickAddFavModal';
import {
  getFavouriteIngredients,
  renderFavouriteIngredientsIconModal,
} from './onClickAddFavIngrModal';
//Function to call during click on Learn more button
//Fetching full details of cocktail ID
export async function onClickLearnMore(e) {
  if (e.target.dataset.action === 'learn-more') {
    try {
      const id = e.target.parentElement.parentElement.id;
      const response = await getCocktailById(id);
      const createdMarkup = markupForModal(response);
      modalWrapper.innerHTML = createdMarkup;
      checkIngredients(response);
      document.body.classList.toggle('modal-open');
      backdrop.classList.toggle('is-hidden');
      document.addEventListener('click', onClickOutside);
      document.addEventListener('keydown', onCloseEsc);
      modalWrapper.addEventListener('click', onClickIngr);
      ingrCloseBnt.addEventListener('click', onCloseIngrModal);
      getFavouriteCocktails(renderFavouriteCocktailsIconModal);
    } catch (error) {
      errorPopup();
    }
  }
}

//   modalIngr,
// modalIngrBtnClose,
async function onClickIngr(e) {
  if (e.target.className === 'ingr-wrapper__btn') {
    const name = e.target.innerHTML;
    const ingrResponse = await getIngredientIncsructions(name);
    const ingrMarkup = markupIngredients(ingrResponse);
    modalIngrWrapper.innerHTML = ingrMarkup;
    modalIngr.classList.toggle('is-hidden');
    getFavouriteIngredients(renderFavouriteIngredientsIconModal);
  }
}
// function on close ingr modal
function onCloseIngrModal(e) {
  modalIngr.classList.toggle('is-hidden');
}

// function to close modal on esc
function onCloseEsc(e) {
  if (e.code === 'Escape') {
    document.body.classList.remove('modal-open');
    backdrop.classList.add('is-hidden');
    modalIngr.classList.add('is-hidden');
    document.removeEventListener('keydown', onCloseEsc);
  }
}

// function to close on clock outside

function onClickOutside(e) {
  if (e.target === backdrop) {
    document.body.classList.remove('modal-open');
    backdrop.classList.add('is-hidden');
    modalIngr.classList.add('is-hidden');
    document.removeEventListener('click', onClickOutside);
  }
}

// Function closing modal window

export function onClickLearnMoreClose() {
  document.body.classList.toggle('modal-open');
  backdrop.classList.toggle('is-hidden');
  getFavouriteCocktails(renderFavouriteCocktailsIcon);
}

// fucking function checking fucking elements

function checkIngredients(response) {
  const list = document.querySelector('.ingr-wrapper__list');
  const singleDrink = response.data.drinks[0];
  const singleDrinkKeys = Object.values(singleDrink);
  let newMassive = [];
  for (let i = 17; i < singleDrinkKeys.length; i++) {
    if (i < 31) {
      newMassive.push(singleDrinkKeys[i]);
    }
  }
  const filteredMassive = newMassive.filter(item => item);
  const filteredMarkup = filteredMassive
    .map(ingr => {
      return `<li class="ingr-wrapper__ingredient"><button type="button" class="ingr-wrapper__btn">${ingr}</button></li>`;
    })
    .join('');
  list.innerHTML = filteredMarkup;
}
