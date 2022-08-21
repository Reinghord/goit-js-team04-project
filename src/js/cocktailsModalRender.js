import * as icons from '../images/icons.svg';

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
    <button type="button" class="cocktails-btn cocktails-add cocktails-add-modal" data-action="favourite" data-id="${drink.idDrink}">
      <svg width="21px" height="19px" class="cocktails-svg">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
    </button>
`;
    })
    .join('');
}

function markupIngredients(ingrResponse) {
  return ingrResponse.data.ingredients
    .map(ingr => {
      return `<div class="ingr-modal-pict-wrapper">
  <img class="ingr-modal-pict" src='https://www.thecocktaildb.com/images/ingredients/${
    ingr.strIngredient
  }-Small.png'
  alt=${ingr.strIngredient}>
<div class="ingr-modal-title-wrapper">
  <h3 class="cocktails-ingredients-modal__title">${ingr.strIngredient}</h3>
      <h4 class="cocktails-ingredients-modal__subtitle">${
        ingr.strType === null
          ? 'Sorry lads, we do not know &#128542'
          : ingr.strType
      }</h4>
</div>
</div>
      <p class="cocktails-ingredients-modal__text">${
        ingr.strDescription === null
          ? 'Sorry lads, we do not know &#128542'
          : ingr.strDescription
      }</p>
      <ul class="cocktails-ingredients-modal__list">
        <li class="cocktails-ingredients-modal__item">✶ Type: ${
          ingr.strType === null
            ? 'Sorry lads, we do not know &#128542'
            : ingr.strType
        }</li>
        <li class="cocktails-ingredients-modal__item">
          ✶ Country of origin: Sorry lads, we do not know &#128542
        </li>
        <li class="cocktails-ingredients-modal__item">
          ✶ Alcohol : ${
            ingr.strAlcohol === 'No'
              ? 'Sadly No &#128542'
              : `Oh yeah baby! &#128512`
          }
        </li>
        <li class="cocktails-ingredients-modal__item">
          ✶ Flavour: Sorry lads, we do not know &#128542
        </li>
      </ul>
          <button
      type="button"
      class="cocktails-btn cocktails-add cocktails-add-modal" data-action="favouriteIngr" data-idingr="${
        ingr.idIngredient
      }"
    >
      <svg width="21px" height="19px" class="cocktails-svg">
      <use  href="${icons}#icon-icon-fav"></use>
    </svg>
    </button>`;
    })
    .join('');
}
export { markupForModal, markupIngredients };
