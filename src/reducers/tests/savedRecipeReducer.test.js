import { savedRecipesReducer } from '../savedRecipesReducer';
import * as actions from '../../actions';

describe('savedRecipesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const results = savedRecipesReducer(undefined, {});

    expect(results).toEqual(expected);
  });

  it('should return an array of  saved recipes', () => {
    const recipes = [{recipeTitle: 'best food ever',
      recipeImage: 'cute picture',
      recipeLink: 'bestlink.com',
      id: 1},
    {
      recipeTitle: 'another good food',
      recipeImage: 'cuter picture',
      recipeLink: 'evenbetterlink.com',
      id: 1
    }];

    const expected = [[{"id": 1, 
      "recipeImage": "cute picture", 
      "recipeLink": "bestlink.com", 
      "recipeTitle": "best food ever"}, 
    {"id": 1, 
      "recipeImage": "cuter picture", 
      "recipeLink": "evenbetterlink.com", 
      "recipeTitle": "another good food"}]];
    const results = savedRecipesReducer(undefined, actions.addSavedRecipes(recipes)); 

    expect(results).toEqual(expected);
  });
});