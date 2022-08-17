import axios from 'axios';

export default async function getCocktails() {
  try {
    const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
    const searchParams = new URLSearchParams({
      f: 'a',
    });
    const searchResponse = await axios.get(`${BASE_URL}/?${searchParams}`);
    console.log(searchResponse);
    return searchResponse;
  } catch (error) {
    throw new Error(error);
  }
}
