import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleRecipe } from '../helper/apiCalls';
import { cleanRecipe } from '../helper/dataCleaner';
import { apiKey } from '../helper/apiKey';
import RecipeDetailsCard from '../RecipeDetailsCard';
import { docRef } from '../firebase'
import { saveRecipe, deleteRecipe, addSavedRecipes } from '../actions'
import './styles.css';

export class SavedRecipesContainer extends Component {

  componentDidMount() {
    this.fetchRecipes(apiKey)
  }

  fetchRecipes = (key) => {
    this.props.savedRecipes.map(async rId => {
      const results = await fetchSingleRecipe(key, rId)
      const recipe = await cleanRecipe(results)
      this.props.addSavedRecipes(recipe)
    })
  }

  addFavorite = (id) => {
    const { uid } = this.props.authUser 
    // this.props.saveRecipe(id)
    // docRef.set({
    //   userId: uid,
    //   recipes: this.props.savedRecipes
    // }).then(() => console.log('saved'))
    //   .catch(error => console.log(error.message))
  }

  render() {
    const recipesToDisplay = this.props.superSavedRecipes.map(recipe => {
      return <RecipeDetailsCard {...recipe}
        addFavorite={ this.addFavorite }
        authUser={ true } />
    })
    return (
      <div className='saved-recipes-container'>
        { recipesToDisplay }
      </div>
      )
  }
}

export const mapStateToProps = (state) => ({
  savedRecipes: state.savedRecipes,
  superSavedRecipes: state.superSavedRecipes
})

export const mapDispatchToProps = (dispatch) => ({
  addSavedRecipes: (savedRecipes) => dispatch(addSavedRecipes(savedRecipes)),
  saveRecipe: (id) => dispatch(saveRecipe(id)),
  deleteRecipe: (id) => dispatch(deleteRecipe(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(SavedRecipesContainer);