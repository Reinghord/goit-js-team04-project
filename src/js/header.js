import debounce from 'lodash.debounce';
import { getFavouriteCocktails } from '../service/firebase';
import {
  cocktailsMarkup,
  markupFilter,
  noResultsMarkup,
} from './cocktails-markup';
import { errorPopup } from './notifications';
import { pagination } from './pagination';
import { btnLoadMore, cocktailsList, titleCocktails } from './refs';
import { getCocktailsByName } from './thecocktailsDB';

const menuOpenBtn = document.querySelector('.mob-btn-open');
const menuCloseBtn = document.querySelector('.mob-btn-close');
const menu = document.querySelector('[data-menu]');
const theme = document.getElementById('checkbox');
const themeNameLight = document.querySelector('.theme-name__light');
const themeNameDark = document.querySelector('.theme-name__dark');
const favorite = document.querySelector('.favorite-acctive');
const LinksTheme = document.querySelector('.favorite-wrapper');
const searchForm = document.querySelector('[data-search]');

const active = document.querySelectorAll(
  'div.navigation-wrapper, div.theme-wrapper, form.search__form'
);
menuOpenBtn.addEventListener('click', onMenuBtnClick);
menuCloseBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick() {
  menu.classList.toggle('is-hidden');
  active.forEach(el => el.classList.toggle('active'));
}

theme.addEventListener('change', e => {
  themeNameLight.classList.toggle('theme-acctive');
  themeNameDark.classList.toggle('theme-acctive');
  toggleTheme(e.target.checked ? 'theme-dark' : 'theme-light');
});

favorite.addEventListener('click', () => {
  LinksTheme.classList.toggle('favorite-wrapper__close');
});

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    theme.checked = true;
    themeNameDark.classList.toggle('theme-acctive');
  } else {
    setTheme('theme-light');
    theme.checked = false;
    themeNameLight.classList.toggle('theme-acctive');
  }
})();

// searching coctails

const DEBOUNCE_DELAY = 300;

const onChange = debounce(async e => {
  e.preventDefault();
  titleCocktails.innerHTML = `Cocktails`;
  try {
    const value = e.target.value.trim();
    const res = await getCocktailsByName(value);
    const searchCoctails = cocktailsMarkup(res);
    cocktailsList.innerHTML = markupFilter(searchCoctails);
    pagination();
    getFavouriteCocktails();
  } catch (error) {
    titleCocktails.innerHTML = `Sorry, we didn't find any cocktail for you`;
    cocktailsList.innerHTML = noResultsMarkup();
    btnLoadMore.classList.add('btn_hidden');
  }
}, DEBOUNCE_DELAY);

searchForm.addEventListener('input', onChange);
