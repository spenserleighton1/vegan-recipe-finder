export const singleRecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SINGLE_RECIPE':
      return action.recipe;
    default:
      return state;  
  }
}