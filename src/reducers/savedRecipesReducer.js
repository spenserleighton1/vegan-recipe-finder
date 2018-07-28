export const savedRecipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SAVED_RECIPES':
      return [...state, action.savedRecipe];
    default:
      return state;
  }
}