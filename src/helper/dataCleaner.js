export const cleanData = (data) => {
  const cleanData = data.map(recipe => {
     return {
        recipeTitle: recipe.title,
        recipeLink: recipe.source_url,
        recipeImage: recipe.image_url }
  })
return cleanData;
}

