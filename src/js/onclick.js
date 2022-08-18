//Function to call during click on Learn more button
//Fetching full details of cocktail ID
export async function onClickSearchLetter(e) {
  if (e.target.nodeName === 'BUTTON') {
    try {
      const letter = e.target.textContent;
      const response = await getCocktailsByLetter(letter);
      if (response.data.drinks) {
        markup = cocktailsMarkup(response);
        const filteredMarkup = markupFilter(markup);
        return (cocktailsList.innerHTML = filteredMarkup);
      }
      //INSERT HERE MARKUP FOR NOT FOUND
      return console.log('problem');
    } catch (error) {
      errorPopup();
    }
  }
}
