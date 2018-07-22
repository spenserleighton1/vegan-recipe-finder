export const fetchRecipes = jest.fn().mockImplementation(() => ({
  recipes: [{title: 'a food'}, {title: 'more a food'}, {title: 'even more a food'}]
}));