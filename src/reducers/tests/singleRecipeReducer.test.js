import { singleRecipeReducer } from '../singleRecipeReducer';
import * as actions from '../../actions';

describe('singleRecipeReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const results = singleRecipeReducer(undefined, {});

    expect(results).toEqual(expected);
  });

  it('should return an object with a single recipe', () => {
    const recipe = {
      title: 'some title',
      publisher: 'some publisher',
      ingredients: 'some ingredients',
      linkUrl: 'a url',
      id: 666 
    };

    const expected = {
      id: 666,
      ingredients: "some ingredients",
      linkUrl: "a url", 
      publisher: "some publisher", 
      title: "some title"
    };
    const results = singleRecipeReducer(undefined, actions.addSingleRecipe(recipe));

    expect(results).toEqual(expected);
  });
});