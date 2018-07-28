export const saveRecipeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_RECIPE':
     let index = state.findIndex(el => el == action.id);

    if(index == -1)
        return [...state, action.id];
    return state;
      return [...state, action.id]
    default:
      return state;
  }
}