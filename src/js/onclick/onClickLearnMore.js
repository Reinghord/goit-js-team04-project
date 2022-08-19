import { errorPopup } from '../notifications';
import { getCocktailById } from '../thecocktailsDB';
import { markupForModal } from '../cocktailsModalRender';
import { backdrop, modalWrapper } from '../refs';

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
    } catch (error) {
      errorPopup();
    }
  }
}
// Function closing modal window

export function onClickLearnMoreClose() {
  document.body.classList.toggle('modal-open');
  backdrop.classList.toggle('is-hidden');
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
      return `<li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${ingr}</button></li>`;
    })
    .join('');
  list.innerHTML = filteredMarkup;
}
