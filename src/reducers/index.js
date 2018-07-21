import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { ingredientsReducer } from './ingredientsReducer'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientsReducer
});

export default rootReducer;