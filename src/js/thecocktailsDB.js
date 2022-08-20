import axios from 'axios';

const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1`;

// Fetching 10 random cocktails
export async function getRandomCocktails() {
  try {
    const searchParams = new URLSearchParams({
      f: 'a',
    });
    return await axios.get(`${BASE_URL}/search.php?${searchParams}`);
  } catch (error) {
    throw new Error(error);
  }
}

// Fetching cocktails by first letter
export async function getCocktailsByLetter(letter) {
  try {
    const searchParams = new URLSearchParams({
      f: `${letter}`,
    });
    return await axios.get(`${BASE_URL}/search.php?${searchParams}`);
  } catch (error) {
    throw new Error(error);
  }
}

// Fetching full cocktail detail
export async function getCocktailById(id) {
  try {
    const searchParams = new URLSearchParams({
      i: `${id}`,
    });
    return await axios.get(`${BASE_URL}/lookup.php?${searchParams}`);
  } catch (error) {
    throw new Error(error);
  }
}

// Fetching cocktails by name
export async function getCocktailsByName(name) {
  try {
    const searchParams = new URLSearchParams({
      s: `${name}`,
    });
    return await axios.get(`${BASE_URL}/search.php?${searchParams}`);
  } catch (error) {
    throw new Error(error);
  }
}

// Function for fetching info about ingredient
export async function getIngredientIncsructions(name) {
  try {
    const searchParams = new URLSearchParams({
      i: `${name}`,
    });
    return await axios.get(`${BASE_URL}/search.php?${searchParams}`);
  } catch (error) {
    throw new Error(error);
  }
}

// Function to fetch ingredient details by ID
export async function getIngredientById(id) {
  try {
    const searchParams = new URLSearchParams({
      iid: `${id}`,
    });
    return await axios.get(`${BASE_URL}/lookup.php?${searchParams}`);
  } catch (error) {
    throw new Error(error);
  }
}
