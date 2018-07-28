import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { savedRecipesReducer } from './savedRecipesReducer';
import { singleRecipeReducer } from './singleRecipeReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { saveRecipeReducer } from './saveRecipeReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  singleRecipe: singleRecipeReducer,
  loading: isLoadingReducer,
  savedRecipes: saveRecipeReducer,
  superSavedRecipes: savedRecipesReducer
});

export default rootReducer;