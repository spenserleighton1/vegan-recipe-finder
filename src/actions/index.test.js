import { addRecipes } from './'

describe('addRecipes', () => {
  it('should add initial recipes to the redux Store', () => {
      const recipes = [{recipeTitle: 'best food ever',
                        recipeImage: 'cute picture',
                        recipeLink: 'bestlink.com'},
                        {
                        recipeTitle: 'another good food',
                        recipeImage: 'cuter picture',
                        recipeLink: 'evenbetterlink.com'
                        }];
      const expected = { type: 'ADD_RECIPES', recipes};
      const result = addRecipes(recipes);

      expect(result).toEqual(expected);
  });
});
