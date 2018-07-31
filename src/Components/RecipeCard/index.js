import React from 'react';
import './styles.css';
import { apiKey } from '../../helper/apiKey';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipeTitle, recipeImage, fetchRecipe, recipeId }) => {
  return (
    <div className='recipe-card'>
      <h3 className='recipe-title'>{ recipeTitle }</h3>
      <img className='recipe-img' src={ recipeImage } alt={ recipeTitle } />
      <button className='recipe-btn' onClick={ () => { fetchRecipe(apiKey, recipeId); } }>view recipe</button>
    </div>
  );
};

export default RecipeCard;
      
RecipeCard.propTypes = {
  recipeTitle: PropTypes.string,
  recipeImage: PropTypes.string,
  fetchRecipe: PropTypes.func,
  recipeId: PropTypes.number
};