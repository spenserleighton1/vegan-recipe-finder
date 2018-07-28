export const savedRecipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SAVED_RECIPES':
    let index = state.findIndex(recipe => recipe.id === action.savedRecipe.id);
    if(index === -1)
        return [...state, action.savedRecipe];
      // return [...state, action.savedRecipe];
    default:
      return state;
  }
}