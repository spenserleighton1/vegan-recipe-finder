export const addRecipes = (recipes) => ({
  type: 'ADD_RECIPES',
  recipes
})

export const searchByIngredient = (ingredients) => ({
  type: 'SEARCH_BY_INGREDIENT', 
  ingredients
})