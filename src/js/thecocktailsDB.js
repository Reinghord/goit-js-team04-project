import axios from 'axios';

export default async function getCocktails(request) {
  try {
    const URL = 'www.thecocktaildb.com/api/json/v1/1/search.php';
    const searchParams = new URLSearchParams({
      key: '1',
    });
    const searchResponse = await axios.get(`${URL}/?${searchParams}`);
    console.log(searchResponse);
    return searchResponse;
  } catch (error) {
    throw new Error(error);
  }
}
