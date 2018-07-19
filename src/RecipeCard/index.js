import React from 'react';
import './styles.css'

const RecipeCard = ({recipeTitle, recipeLink, recipeImage }) => {
  return (
    <div className='recipe-card'>
      <h3 className='recipe-title'>{ recipeTitle }</h3>
      <img className='recipe-img' src={ recipeImage } alt={ recipeTitle } />
      <a className='recipe-link' href={ recipeLink }>View Recipe</a>
    </div>
    )
}

export default RecipeCard;
      
      