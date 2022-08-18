function markupForModal(response) {
  return response.data.drinks
    .map(drink => {
      return `<img
      class="learn-more__image"
      src="${drink.strDrinkThumb}"
      alt="${drink.strDrink}"
    />
    <div class="ingr-wrapper">
      <h3 class="ingr-wrapper__name">${drink.strDrink}</h3>
      <h4 class="ingr-wrapper__components">INGREDIENTS</h4>
      <p class="ingr-wrapper__subtitle">Per cocktail</p>
      <ul class="ingr-wrapper__list">
        <li class="ingr-wrapper__ingredient">${drink.strIngredient1}</li>
        <li class="ingr-wrapper__ingredient">${drink.strIngredient2}</li>
        <li class="ingr-wrapper__ingredient">${drink.strIngredient3}</li>
        <li class="ingr-wrapper__ingredient">${drink.strIngredient4}</li>
        <li class="ingr-wrapper__ingredient">${drink.strIngredient5}</li>
      </ul>
    </div>
    <div class="instructions">
      <h3 class="instructions__name">Instractions:</h3>
      <p class="instructions__text">${drink.strInstructions}</p>
    </div>
    <button type="button" class="cocktails-learn cocktails-learn-more__modal__btn">
      Add to favorite
    </button>`;
    })
    .join('');
}
export { markupForModal };
