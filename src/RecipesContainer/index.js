import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../RecipeCard';
import './styles.css';

class RecipesContainer extends Component {
  recipesToDisplay = () => (
    this.props.recipes.map((recipe, index) => {
    return <RecipeCard {...recipe} key={ index }/>
    })
  ) 

render() {
  return (
    <div className='recipes-container'>{ this.recipesToDisplay() }</div>
    )
  }
}

export const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipesContainer);
