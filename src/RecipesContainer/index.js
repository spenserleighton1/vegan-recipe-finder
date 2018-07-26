import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../RecipeCard';
import { fetchSingleRecipe } from '../helper/apiCalls'
import { cleanRecipe } from '../helper/dataCleaner'
import { addSingleRecipe, isLoading } from '../actions'
import Loader from '../Loader'
import './styles.css';

export class RecipesContainer extends Component {

  fetchRecipe = async (key, id) => {
    this.props.isLoading(true)
    console.log(this.props.loading)
    const results = await fetchSingleRecipe(key,id)
    const recipe = await cleanRecipe(results)
    this.props.addSingleRecipe(recipe)
    this.props.isLoading(false)
  }

  recipesToDisplay = () => (
    this.props.recipes.map((recipe, index) => {
    return <RecipeCard {...recipe} 
                  key={ index }
                  fetchRecipe={ this.fetchRecipe }  />
    })
  ) 

render() {
  const a = this.props.loading ? <Loader /> :  this.recipesToDisplay()
  return (
    <div className='recipes-container'>{ a }</div>
    )
  }
}

export const mapStateToProps = (state) => ({
  recipes: state.recipes,
  loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
  isLoading: (bool) => dispatch(isLoading(bool)),
  addSingleRecipe: (recipe) => dispatch(addSingleRecipe(recipe))
})

export default connect(mapStateToProps,mapDispatchToProps)(RecipesContainer);
