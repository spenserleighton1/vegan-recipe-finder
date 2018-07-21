export const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_BY_INGREDIENT':
      return [...state, action.ingredients];
    default:
      return state;  
  }
}