import React from 'react';

const RecipeCard = ({recipeTitle, recipeLink, recipeImage }) => {
  return (
    <div>
      <h2>{ recipeTitle }</h2>
      <img src={ recipeImage } alt={ recipeTitle } />
      <a href={ recipeLink }>View Recipe</a>
    </div>
    )
}

export default RecipeCard;
      
      