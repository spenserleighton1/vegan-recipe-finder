import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../RecipeCard';
import { fetchSingleRecipe } from '../helper/apiCalls'
import { cleanRecipe } from '../helper/dataCleaner'
import { addSingleRecipe } from '../actions'
import './styles.css';

class RecipesContainer extends Component {

  fetchRecipe = async (key, id) => {
    const results = await fetchSingleRecipe(key,id)
    const recipe = await cleanRecipe(results)
    this.props.addSingleRecipe(recipe)
  }

  recipesToDisplay = () => (
    this.props.recipes.map((recipe, index) => {
    return <RecipeCard {...recipe} 
                  key={ index }
                  fetchRecipe={ this.fetchRecipe }  />
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

export const mapDispatchToProps = (dispatch) => ({
  addSingleRecipe: (recipe) => dispatch(addSingleRecipe(recipe))
})

export default connect(mapStateToProps,mapDispatchToProps)(RecipesContainer);
