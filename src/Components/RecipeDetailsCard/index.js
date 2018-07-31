import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const RecipeDetailsCard = ({ title, publisher, ingredients, linkUrl, id, addFavorite, authUser }) => {
  return (
    <div className='recipe-card'>
      <h2>{ title }</h2>
      <p>{ publisher }</p>
      <ul>
        { ingredients.map((ingredient, index) => <li key={ index }>{ ingredient }</li>)}
      </ul>
      <button  
        className='save-recipe-btn' 
        disabled={ !authUser }
        onClick={ () => { addFavorite(id); } }>Save Recipe
      </button>
      <a className='directions-link' href={ linkUrl }>Directions</a>
    </div>
  );
};

export default RecipeDetailsCard;

RecipeDetailsCard.propTypes = {
  title: PropTypes.string,
  publisher: PropTypes.string,
  ingredients: PropTypes.array,
  linkUrl: PropTypes.url,
  id: PropTypes.number,
  addFavorite: PropTypes.func,
  authUser: PropTypes.object
};