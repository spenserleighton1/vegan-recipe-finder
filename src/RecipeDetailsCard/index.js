import React from 'react';

const RecipeDetailsCard = ({ title, publisher, ingredients, linkUrl, id, addFavorite, authUser }) => {
  return (
    <div>
      <h2>{ title }</h2>
      <p>{ publisher }</p>
      <ul>
        { ingredients.map((ingredient, index) => <li key={ index }>{ ingredient }</li>)}
      </ul>
      <button  
        className='favorite-btn' 
        disabled={ !authUser } 
        onClick={ () => { addFavorite(id) } }>fav
      </button>
      <a href={ linkUrl }>Directions</a>
    </div>
    )
}

export default RecipeDetailsCard;