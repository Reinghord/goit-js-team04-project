//Imports
import debounce from 'lodash.debounce';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cocktailsMarkup, markupFilter } from './js/cocktails-markup';
import {
  getRandomCocktails,
  getCocktailsByLetter,
  getCocktailById,
} from './js/thecocktailsDB';
import './js/header';
import {
  buttons,
  createSearchButtons,
  createSearchButtonsMobile,
} from './js/hero';
import { errorPopup } from './js/notifications';
import { markupForModal } from './js/cocktailsModalRender';
import {
  onClickLearnMore,
  onClickLearnMoreClose,
} from './js/onclick/onClickLearnMore';
import { onClickSearchLetter } from './js/onclick/onclicksearchletter';
import { getAndRenderRandomCocktails } from './js/onclick/getRandomCocktails';
import { pagination } from './js/pagination';
import './js/firebase/authentication';
import './js/firebase/addToFavourite';
import './js/onclick/onClickFavCocks';
import './js/onclick/onClickFavIngr';
import './js/onclick/onClickAddFavIngrModal';
import './js/scroll';
//Refs
import {
  backdrop,
  modalWrapper,
  cocktailsList,
  cocktailsListCloseBtn,
  letterList,
  heroButtonRef,
  heroSelectRef,
  btnLoadMore,
} from './js/refs';

////Var to control listener on window for resize event
const debounceResizedMarkup = debounce(resizeMarkup, 200);

//!!! Initial page loading !!!
onLoadingHome();
AOS.init();

//Function to execute on initial page loading OR when returned to Home window for SPA
async function onLoadingHome() {
  createSearchButtons(buttons);
  createSearchButtonsMobile(buttons);
  await getAndRenderRandomCocktails();
  // window.addEventListener('resize', debounceResizedMarkup);
  cocktailsList.addEventListener('click', e => onClickLearnMore(e));
  letterList.addEventListener('click', e => onClickSearchLetter(e));
  cocktailsListCloseBtn.addEventListener('click', onClickLearnMoreClose);
}

//Function to update markup amount based on window width
function resizeMarkup() {
  cocktailsList.innerHTML = markupFilter();
}

//Function to get random cocktails, prepare markup and render depending on screen size
// async function getAndRenderRandomCocktails() {
//   try {
//     const response = await getRandomCocktails();
//     markup = cocktailsMarkup(response);
//     localStorage.setItem('markup', JSON.stringify(markup));
//     const filteredMarkup = markupFilter(markup);
//     cocktailsList.innerHTML = filteredMarkup;
//   } catch (error) {
//     errorPopup();
//   }
// }
