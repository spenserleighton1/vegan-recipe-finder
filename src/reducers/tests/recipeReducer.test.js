import { recipeReducer } from '../recipeReducer';
import * as actions from '../../actions';

describe('recipeReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const results = recipeReducer(undefined, {});

    expect(results).toEqual(expected);
  });

  it('should return an array of recipes', () => {
    const recipes = [{recipeTitle: 'best food ever',
                      recipeImage: 'cute picture',
                      recipeLink: 'bestlink.com'},
                      {
                      recipeTitle: 'another good food',
                      recipeImage: 'cuter picture',
                      recipeLink: 'evenbetterlink.com'
                      }];

    const expected = [{
        "recipeImage": "cute picture",
        "recipeLink": "bestlink.com",
        "recipeTitle": "best food ever",
      },{
        "recipeImage": "cuter picture",
        "recipeLink": "evenbetterlink.com",
        "recipeTitle": "another good food",
      }
    ]
    const results = recipeReducer(undefined, actions.addRecipes(recipes))

    expect(results).toEqual(expected);
  });
});