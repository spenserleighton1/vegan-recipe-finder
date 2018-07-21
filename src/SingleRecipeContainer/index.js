import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleRecipeContainer extends Component {
  
  render() {
    if(Object.keys(this.props.recipe).length > 0) {
      const { title, publisher, ingredients, linkUrl, id } = this.props.recipe
      return(
        <div>
          <h3>{ title }</h3>
          <p>{ publisher }</p>
          <ul>
            { ingredients.map(ingredient => <li>{ ingredient }</li>)}
          </ul>
          <a href={ linkUrl }>Directions</a>
        </div>
      )      
    } else {
      return (<p></p>)
    }
  }
}

export const mapStateToProps = (state) => ({
  recipe: state.singleRecipe
});

export default connect(mapStateToProps)(SingleRecipeContainer);