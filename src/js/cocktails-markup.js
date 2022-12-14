import * as NoResultsImg from '../images/03-cocktails/noresults.png';
import * as NoResultsImg2x from '../images/03-cocktails/noresults@2x.png';
import { titleCocktails } from './refs';
import * as icons from '../images/icons.svg';

// Function to create an array of markup
const cocktailsMarkup = function (cocktailsData) {
  return cocktailsData.data.drinks.map(drink => {
    return `<li class="cocktails__item" id="${drink.idDrink}" data-aos="fade-up" >
  <img class="cocktails__img" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
  <p class="cocktails__name">${drink.strDrink}</p>
<div class="btn__wrapper">  
  <button class="btn btn__learn" data-action="learn-more">Learn more</button>
  <button class="btn btn__add" data-action="favourite"><svg width="21px" height="19px" class="btn__svg">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
  </button>
    </div>
</li>`;
  });
};

// Function to filter amount of objects to render based on screen width
function markupFilter(markup) {
  if (window.screen.width < 768) {
    const filteredMarkup = markup.filter((_, index) => index <= 2);
    return filteredMarkup.join('');
  } else if (window.screen.width >= 768 && window.screen.width < 1280) {
    const filteredMarkup = markup.filter((_, index) => index <= 5);
    return filteredMarkup.join('');
  }
  const filteredMarkup = markup.filter((_, index) => index <= 8);
  return filteredMarkup.join('');
}

function noResultsMarkup() {
  return `<img class="image_no-result" srcset="${NoResultsImg} 1x, ${NoResultsImg2x} 2x" src="${NoResultsImg}" alt="No Results"></img>`;
}
export { cocktailsMarkup, markupFilter, noResultsMarkup };
