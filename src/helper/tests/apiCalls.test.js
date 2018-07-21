import { fetchRecipes, fetchSingleRecipe } from '../apiCalls'

describe('apiCalls', () => {
  describe('fetchRecipes', () => {
    it('should fetch all recipes', async () => {
      const mockUrl = 'www.notNickCageRecipes.com'
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok:true,
        json: () => Promise.resolve({
          results: ['recipes']
        })
      }));
      const results = await fetchRecipes(mockUrl);
      expect(results).toEqual({ results: ['recipes']});
    });
  })

  describe('fetchSingleRecipe', () => {
    it('should fetch a single recipe', async () => {
      const mockUrl = 'www.notNickCageRecipes.com';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok:true,
        json: () => Promise.resolve({
          results: {recipe: 'recipe!!'}
        })
      }));
      const results = await fetchSingleRecipe(mockUrl)

      expect(results).toEqual({"results": {"recipe": "recipe!!"}})

    })
  })
})