export const addRecipes = (recipes) => ({
  type: 'ADD_RECIPES',
  recipes
})

export const addSingleRecipe = (recipe) => ({
  type: 'ADD_SINGLE_RECIPE', 
  recipe
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const singleIsLoading = (bool) => ({
  type: 'SINGLE_IS_LOADING',
  singleIsLoading: bool
})