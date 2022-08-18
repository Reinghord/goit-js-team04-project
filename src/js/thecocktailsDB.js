import axios from 'axios';

// Fetching 10 random cocktails
export default async function getRandomCocktails() {
  try {
    const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
    const searchParams = new URLSearchParams({
      f: 'a',
    });
    const searchResponse = await axios.get(`${BASE_URL}/?${searchParams}`);
    return searchResponse;
  } catch (error) {
    throw new Error(error);
  }
}
