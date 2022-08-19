import { errorPopup } from '../notifications';
import { getCocktailById } from '../thecocktailsDB';
import { markupForModal } from '../cocktailsModalRender';
import { backdrop, modalWrapper } from '../refs';

const learnMoreIngredient = document.querySelectorAll('ingr-wrapper__btn');
const learnMoreLi = document.querySelectorAll('ingr-wrapper__ingredient');

//Function to call during click on Learn more button
//Fetching full details of cocktail ID
export async function onClickLearnMore(e) {
  if (e.target.dataset.action === 'learn-more') {
    try {
      const id = e.target.parentElement.parentElement.id;
      const response = await getCocktailById(id);
      const createdMarkup = markupForModal(response);
      checkIngredients(createdMarkup);
      console.log(createdMarkup);
      modalWrapper.innerHTML = createdMarkup;

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

function checkIngredients() {
  if (learnMoreIngredient.textContent === 'null') {
    learnMoreLi.classList.add('@mixin visually-hidden');
    console.log('test');
  }
  return;
}

export { checkIngredients };
