function markupForModal(response) {
  return response.data.drinks
    .map(drink => {
      return `<div class="img-and-text-wrapper"><img
      class="learn-more__image"
      src="${drink.strDrinkThumb}"
      alt="${drink.strDrink}"
    />
    <div class="ingr-wrapper">
      <h3 class="ingr-wrapper__name">${drink.strDrink}</h3>
      <h4 class="ingr-wrapper__components">INGREDIENTS</h4>
      <p class="ingr-wrapper__subtitle">Per cocktail</p>
      <ul class="ingr-wrapper__list"></ul>
      </div>
    </div>
    <div class="instructions">
      <h3 class="instructions__name">Instructions:</h3>
      <p class="instructions__text">${drink.strInstructions}</p>
    </div>
    <button type="button" class="cocktails-learn cocktails-learn-more__modal__btn">
      Add to favorite
    </button>
`;
    })
    .join('');
}

function markupIngredients(ingrResponse) {
  return ingrResponse.data.ingredients
    .map(ingr => {
      return `<h3 class="cocktails-ingredients-modal__title">${ingr.strIngredient}</h3>
      <h4 class="cocktails-ingredients-modal__subtitle">${ingr.strType}</h4>
      <p class="cocktails-ingredients-modal__text">${ingr.strDescription}</p>
      <ul class="cocktails-ingredients-modal__list">
        <li class="cocktails-ingredients-modal__item">✶ Type: ${ingr.strType}</li>
        <li class="cocktails-ingredients-modal__item">
          ✶ Country of origin: No information available!
        </li>
        <li class="cocktails-ingredients-modal__item">
          ✶ Alcohol by volume: ${ingr.strABV}%
        </li>
        <li class="cocktails-ingredients-modal__item">
          ✶ Flavour: No informanion available!
        </li>
      </ul>`;
    })
    .join('');
}
export { markupForModal, markupIngredients };
