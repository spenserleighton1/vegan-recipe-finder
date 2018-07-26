import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { singleRecipeReducer } from './singleRecipeReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { singleIsLoadingReducer } from './singleIsLoadingReducer'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  singleRecipe: singleRecipeReducer,
  loading: isLoadingReducer,
  singleLoading: singleIsLoadingReducer
});

export default rootReducer;