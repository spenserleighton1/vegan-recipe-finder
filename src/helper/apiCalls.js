export const fetchRecipes = async (key,ingredient) => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${corsAnywhereUrl}https://food2fork.com/api/search?key=${key}&q=vegan,${ingredient}`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export const fetchSingleRecipe = async (key,rId) => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${corsAnywhereUrl}http://food2fork.com/api/get?key=${key}&rId=${rId}`
  const response = await fetch(url);
  const results = await response.json();
  return results;
}
