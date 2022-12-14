import { heroButtonRef, heroSelectRef } from './refs';
import { getCocktailsByLetter } from './thecocktailsDB';
import {
  cocktailsMarkup,
  markupFilter,
  noResultsMarkup,
} from './cocktails-markup';
import { pagination } from './pagination';
import {
  cocktailsList,
  titleCocktails,
  btnLoadMore,
  heroSelectRef,
} from './refs';

import { errorPopup } from './notifications';
import { searchForm, searchInput } from './header';

export const buttons = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];
export function createSearchButtons(buttons) {
  const markup = buttons
    .map(button => {
      return `<button type = "button" class="hero__button">${button}</button>`;
    })
    .join('');
  heroButtonRef.innerHTML = markup;
}

export function createSearchButtonsMobile(buttons) {
  const markup = buttons
    .map(button => {
      return `<option value="${button}">${button}</option>`;
    })
    .join('');
  heroSelectRef.innerHTML = markup;
}

heroButtonRef.addEventListener('click', buttonColor);

function buttonColor(event) {
  searchInput.value = '';
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.currentTarget.children;
  for (const iterator of event.currentTarget.children) {
    if (iterator.classList.contains('hero__button--color')) {
      iterator.classList.remove('hero__button--color');
      break;
    }
  }
  event.target.classList.add('hero__button--color');
}

async function letterListMob(e) {
  if (e.target.nodeName === 'SELECT') {
    try {
      const letter = e.target.value;
      const response = await getCocktailsByLetter(letter);
      if (response.data.drinks) {
        const array = cocktailsMarkup(response);
        localStorage.setItem('markup', JSON.stringify(array));
        const filteredMarkup = markupFilter(array);
        titleCocktails.innerHTML = `Cocktails`;
        cocktailsList.innerHTML = filteredMarkup;
        pagination();
        return;
      }
      titleCocktails.innerHTML = `Sorry, we didn't find any cocktail for you`;
      btnLoadMore.classList.add('btn_hidden');
      return (cocktailsList.innerHTML = noResultsMarkup());
    } catch (error) {
      errorPopup();
    }
  }
}
heroSelectRef.addEventListener('change', e => letterListMob(e));
