export const saveRecipeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_RECIPE':
     let index = state.findIndex(recipeId => recipeId === action.id);
    if(index === -1)
        return [...state, action.id];
    case 'DELETE_RECIPE':
      return state.filter(recipeId => recipeId !== action.id)
    default:
      return state;
  }
}