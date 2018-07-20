import { fetchRecipes } from '../apiCalls'

describe('apiCalls', () => {
  describe('fetchRecipes', () => {
    it('should fetch all the Nicolas Cage movies', async () => {
      const mockUrl = 'www.notNickCage.com'
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
})