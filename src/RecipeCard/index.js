import React from 'react';
import './styles.css'
import { apiKey } from '../helper/apiKey';

const RecipeCard = ({recipeTitle, recipeLink, recipeImage, fetchRecipe, recipeId }) => {
  return (
    <div className='recipe-card'>
      <h3 className='recipe-title'>{ recipeTitle }</h3>
      <img className='recipe-img' src={ recipeImage } alt={ recipeTitle } />
      <a className='recipe-link' href={ recipeLink }>View Recipe</a>
      <button onClick={ () => { fetchRecipe(apiKey, recipeId) } }>view recipe</button>
    </div>
    )
}

export default RecipeCard;
      
      