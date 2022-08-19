import { cocktailsList, btnLoadMore } from './refs';
import { markupFilter } from './cocktails-markup';

btnLoadMore.addEventListener('click', loadMore);

export function pagination() {
  const markup = JSON.parse(localStorage.getItem('markup'));
  if (cocktailsList.childElementCount < markup.length - 1) {
    btnLoadMore.classList.remove('btn_hidden');
    return;
  }
  return btnLoadMore.classList.add('btn_hidden');
}

function loadMore() {
  const markup = JSON.parse(localStorage.getItem('markup'));
  const remainingMarkup = markup.filter(
    (_, index) => index > cocktailsList.childElementCount - 1
  );
  const filteredMarkup = markupFilter(remainingMarkup);
  cocktailsList.insertAdjacentHTML('beforeend', filteredMarkup);
  pagination();
}
