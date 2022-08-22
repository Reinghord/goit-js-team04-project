import debounce from 'lodash.debounce';
import {
  getFavouriteCocktails,
  renderFavouriteCocktailsIcon,
} from '../service/firebase';
import {
  cocktailsMarkup,
  markupFilter,
  noResultsMarkup,
} from './cocktails-markup';
import { pagination } from './pagination';
import {
  btnLoadMore,
  cocktailsList,
  heroButtonRef,
  titleCocktails,
  searchForm,
} from './refs';
import { getCocktailsByName } from './thecocktailsDB';

const menuOpenBtn = document.querySelector('.mob-btn-open');
const menuCloseBtn = document.querySelector('.mob-btn-close');
const menu = document.querySelector('[data-menu]');
const theme = document.getElementById('checkbox');
const themeNameLight = document.querySelector('.theme__name--light');
const themeNameDark = document.querySelector('.theme__name--dark');
const favorite = document.querySelector('.favourite--acctive');
const LinksTheme = document.querySelector('.favourite__wrapper');
const favoriteLink = document.querySelectorAll('button.favorite__link');
export const searchInput = document.querySelector('.search__input');

const active = document.querySelectorAll(
  'div.header__wrapper, div.theme__wrapper, form.search__form, div.menu__wrapper'
);
menuOpenBtn.addEventListener('click', onMenuBtnClick);
menuCloseBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick() {
  menu.classList.toggle('is-hidden');
  active.forEach(el => el.classList.toggle('active'));
}

theme.addEventListener('change', e => {
  themeNameLight.classList.toggle('theme--acctive');
  themeNameDark.classList.toggle('theme--acctive');
  toggleTheme(e.target.checked ? 'theme-dark' : 'theme-light');
});

function toggleFavoriteMod() {
  LinksTheme.classList.toggle('favourite__wrapper--close');
}

favorite.addEventListener('click', toggleFavoriteMod);

favoriteLink.forEach(e => {
  e.addEventListener('click', toggleFavoriteMod);
  e.addEventListener('click', onMenuBtnClick);
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
    themeNameDark.classList.toggle('theme--acctive');
  } else {
    setTheme('theme-light');
    theme.checked = false;
    themeNameLight.classList.toggle('theme--acctive');
  }
})();

// searching coctails

const removeStyle = () => {
  heroButtonRef.childNodes.forEach(e => {
    if (e.classList.contains('hero__button--color')) {
      e.classList.remove('hero__button--color');
    }
  });
};

searchForm.addEventListener('click', removeStyle);

const DEBOUNCE_DELAY = 300;

export const onChange = debounce(async e => {
  e.preventDefault();
  titleCocktails.innerHTML = `Cocktails`;
  const filterNum = 9;
  try {
    const value = e.target.value.trim();
    const res = await getCocktailsByName(value);
    const searchCoctails = cocktailsMarkup(res);
    cocktailsList.innerHTML = markupFilter(searchCoctails);
    pagination();
    getFavouriteCocktails(renderFavouriteCocktailsIcon);

    if (res.data.drinks.length <= filterNum) {
      btnLoadMore.classList.add('btn_hidden');
    }
  } catch (error) {
    titleCocktails.innerHTML = `Sorry, we didn't find any cocktail for you`;
    cocktailsList.innerHTML = noResultsMarkup();
    btnLoadMore.classList.add('btn_hidden');
  }
  e.target.value = '';
}, DEBOUNCE_DELAY);

searchForm.addEventListener('input', onChange);
