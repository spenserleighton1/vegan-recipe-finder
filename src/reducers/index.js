import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { singleRecipeReducer } from './singleRecipeReducer'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  singleRecipe: singleRecipeReducer
});

export default rootReducer;