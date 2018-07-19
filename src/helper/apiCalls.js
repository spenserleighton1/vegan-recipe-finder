export const fetchRecipes = async (key) => {
  cosnt url = `http://food2fork.com/api/search?key=${key}q=vegan`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
}