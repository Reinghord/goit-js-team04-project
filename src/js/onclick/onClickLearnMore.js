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
