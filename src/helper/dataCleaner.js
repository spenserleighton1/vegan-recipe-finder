export const cleanData = data => {
  const cleanData = data.map(recipe => {
    return {     
      recipeTitle: recipe.title,
      recipeLink: recipe.source_url,
      recipeImage: recipe.image_url,
      recipeId: recipe.recipe_id }
    })
  return cleanData;
}

export const cleanRecipe = data => ({
  title: data.recipe.title,
  publisher: data.recipe.publisher,
  ingredients: data.recipe.ingredients,
  linkUrl: data.recipe.source_url,
  id: data.recipe.recipe_id 
})
