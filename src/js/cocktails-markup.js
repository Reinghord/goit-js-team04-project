const cocktailsMarkup = function (cocktailsData) {
  return cocktailsData.data.drinks.map(drink => {
    return `<li class="cocktails-item">
  <img class="cocktails-img" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
  <p class="cocktails-name">${drink.strDrink}</p>
  <button class="cocktails-btn cocktails-learn">Learn more</button>
  <button class="cocktails-btn cocktails-add">
    Add to
    <svg width="21px" height="19px">
      <use class="cocktails-svg" href="./images/icons.svg#icon-icon-fav"></use>
    </svg>
  </button>
</li>`;
  });
};

// window.addEventListener('resize', debounce(markupFilter(cocktailsMarkup), 200));
function markupFilter(cocktailsMarkup) {
  let filteredMarkup = [];
  if (window.screen.width < 768) {
    filteredMarkup = cocktailsMarkup.filter((_, index) => index <= 2);
  } else if (window.screen.width >= 768) {
    filteredMarkup = cocktailsMarkup.filter((_, index) => index <= 8);
    const finalMarkup = filteredMarkup.join('');
  }
  return filteredMarkup;
}

export { cocktailsMarkup, markupFilter };
