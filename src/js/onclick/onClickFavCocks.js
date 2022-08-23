import { getFavouriteCocktails } from '../../service/firebase';
import {
  btnFavCoks,
  cocktailsList,
  sectionHero,
  titleCocktails,
  btnLoadMore,
  searchForm,
} from '../refs';
import { getCocktailById } from '../thecocktailsDB';
import * as icons from '../../images/icons.svg';
import { noResultsMarkup, noResultsMarkupForFilter } from '../cocktails-markup';
import { cocktailByName, DEBOUNCE_DELAY, onChange } from '../header';
import { errorNoLogin } from '../notifications';
import debounce from 'lodash.debounce';
import { onChangeFilteredByIngt } from './onClickFavIngr';

btnFavCoks.addEventListener('click', async () => {
  try {
    await getFavouriteCocktails(onClickFavCocks);
    searchForm.removeEventListener('input', onChange);
    searchForm.removeEventListener('input', onChangeFilteredByIngt);
    searchForm.addEventListener('input', onChangeFilteredByName);
    sectionHero.style.display = 'none';
    titleCocktails.textContent = 'Favourite Cocktails';
    btnLoadMore.classList.add('btn_hidden');
  } catch (error) {
    errorNoLogin();
  }
});

function onClickFavCocks(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    const keys = Object.keys(data);
    const get = keys.map(key => getCocktailById(key));
    Promise.all(get).then(response => {
      const filteredResponse = response.map(elem => elem.data.drinks[0]);
      localStorage.setItem('favourite', JSON.stringify(filteredResponse));
      const markup = cocktailsMarkup(filteredResponse);
      cocktailsList.innerHTML = markup;
    });
  } else {
    titleCocktails.textContent = `Sorry, we didn't find any cocktail for you`;
    cocktailsList.innerHTML = noResultsMarkup();
  }
}

// Function to create an array of markup
const cocktailsMarkup = function (cocktailsData) {
  return cocktailsData
    .map(drink => {
      return `<li class="cocktails__item" id="${drink.idDrink}" data-aos="fade-up">
  <img class="cocktails__img" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
  <p class="cocktails__name">${drink.strDrink}</p>
<div class="btn__wrapper">  
  <button class="btn btn__learn" data-action="learn-more">Learn more</button>
  <button class="btn btn__add" data-action="addedToFavourite"><svg width="21px" height="19px" class="btn__svg btn__svg--fav">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
  </button>
    </div>
</li>`;
    })
    .join('');
};

// search by Name

// const getFavouriteNameCocktails = e => {
//   const liElement = cocktailByName[0].childNodes;
//   const newArray = [];
//   for (let i = 0; i <= liElement.length; i++) {
//     const pElement = liElement[i];
//     const pElementValue = pElement.childNodes[3];
//     const normalizeElementValue = pElementValue.textContent.toLocaleLowerCase();
//     liElement[i].classList.remove('hide-my__li');
//     if (normalizeElementValue.includes(e)) {
//       cocktailByName.innerHTML = liElement[i];
//     } else if (!normalizeElementValue.includes(e)) {
//       newArray.push(Object(liElement[i]));
//       liElement[i].classList.toggle('hide-my__li');
//       if (newArray.length >= cocktailByName[0].childNodes.length) {
//       }
//     }
//   }
// };

const filteredMarckup = element => {
  return element
    .map(drink => {
      return `<li class="cocktails__item" id="${drink.idDrink}" data-aos="fade-up">
  <img class="cocktails__img" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
  <p class="cocktails__name">${drink.strDrink}</p>
<div class="btn__wrapper">  
  <button class="btn btn__learn" data-action="learn-more">Learn more</button>
  <button class="btn btn__add" data-action="addedToFavourite"><svg width="21px" height="19px" class="btn__svg btn__svg--fav">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
  </button>
    </div>
</li>`;
    })
    .join('');
};

export const onChangeFilteredByName = debounce(e => {
  e.preventDefault();
  const cocktails = localStorage.getItem('favourite');
  const parsedFav = JSON.parse(cocktails);
  const markup = filteredMarckup(parsedFav);
  cocktailsList.innerHTML = markup;
  titleCocktails.innerHTML = `Favourite Cocktails`;
  const value = e.target.value.toLocaleLowerCase().trim();
  const filteredLi = parsedFav.filter(el =>
    el.strDrink.toLocaleLowerCase().includes(value)
  );
  if (filteredLi.length >= 1) {
    const markup = filteredMarckup(filteredLi);
    cocktailsList.innerHTML = markup;
  } else {
    titleCocktails.innerHTML = `Sorry, we didn't find any cocktail for you`;
    cocktailsList.innerHTML = noResultsMarkup();
  }
}, DEBOUNCE_DELAY);
