import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SavedRecipeCard extends Component {
  constructor() {
    super();
    this.state = { displayDetails: false };
  }

  handleClick() {
    this.setState({ displayDetails: !this.state.displayDetails });
  }

  render() {
    const { title, image, ingredients, linkUrl } = this.props;
    const details = this.state.displayDetails ? 
      <ul>
        { ingredients.map((ingredient, index) => <li key={ index }>{ ingredient }</li>)}
        <li><a href={ linkUrl }>Directions</a></li>
      </ul> : '';
    return (
      <div className='recipe-card'>
        <h3 className='recipe-title'>{ title }</h3>
        <img className='recipe-img' src={ image } alt={ title } />
        <button onClick={() => { this.handleClick(); } }> Details </button>;
        { details }
      </div>
    );
  }
}

export default SavedRecipeCard;
      
SavedRecipeCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.url,
  ingredients: PropTypes.array,
  linkUrl: PropTypes.url
};