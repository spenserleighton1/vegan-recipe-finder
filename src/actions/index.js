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

export const saveRecipe = (id) => ({
  type: 'SAVE_RECIPE',
  id
})

export const deleteRecipe = (id) => ({
  type: 'DELETE_RECIPE',
  id
})

export const addSavedRecipes = (savedRecipe) => ({
  type: 'ADD_SAVED_RECIPES',
  savedRecipe
})