// Function to create an array of markup
const cocktailsMarkup = function (cocktailsData) {
  return cocktailsData.data.drinks.map(drink => {
    return `<li class="cocktails-item" >
  <img class="cocktails-img" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
  <p class="cocktails-name">${drink.strDrink}</p>
<div class="cocktails-btn__wrapper">  
  <button class="cocktails-btn cocktails-learn">Learn more</button>
  <button class="cocktails-btn cocktails-add">
    Add to
    <svg width="21px" height="19px" class="cocktails-svg">
      <use  href="./images/icons.svg#icon-icon-fav"></use>
    </svg>
  </button>
    </div>
</li>`;
  });
};

// Function to filter amount of objects to render based on screen width
function markupFilter(cocktailsMarkup) {
  if (window.screen.width < 768) {
    const filteredMarkup = cocktailsMarkup.filter((_, index) => index <= 2);
    return filteredMarkup.join('');
  } else if (window.screen.width >= 768 && window.screen.width < 1280) {
    const filteredMarkup = cocktailsMarkup.filter((_, index) => index <= 5);
    return filteredMarkup.join('');
  }
  const filteredMarkup = cocktailsMarkup.filter((_, index) => index <= 8);
  return filteredMarkup.join('');
}

export { cocktailsMarkup, markupFilter };
