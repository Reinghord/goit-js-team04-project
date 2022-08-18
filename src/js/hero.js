import { heroButtonRef, heroSelectRef } from './refs';

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
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.currentTarget.children;
  for (const iterator of event.currentTarget.children) {
    if (iterator.classList.contains('hero-button-color')) {
      iterator.classList.remove('hero-button-color');
      break;
    }
  }
  event.target.classList.add('hero-button-color');
}
