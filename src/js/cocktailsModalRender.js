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
      <h3 class="instructions__name">Instractions:</h3>
      <p class="instructions__text">${drink.strInstructions}</p>
    </div>
    <button type="button" class="cocktails-learn cocktails-learn-more__modal__btn">
      Add to favorite
    </button>
`;
    })
    .join('');
}
export { markupForModal };

{
  /* <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient1}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient2}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient3}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient4}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient5}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient6}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient7}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient8}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient9}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient10}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient11}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient12}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient13}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient14}</button></li>
        <li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">${drink.strIngredient15}</button></li> */
}
