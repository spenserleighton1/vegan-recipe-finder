import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleRecipe } from '../../helper/apiCalls';
import { cleanRecipe } from '../../helper/dataCleaner';
import { apiKey } from '../../helper/apiKey';
import RecipeDetailsCard from '../../Components/RecipeDetailsCard';
import { docRef } from '../../firebase'
import { saveRecipe, deleteRecipe, addSavedRecipes } from '../../actions'
import Loader from '../../Components/Loader'
import './styles.css';

export class SavedRecipesContainer extends Component {
  constructor() {
    super()
    this.state = { loading: false }
  }

  componentDidMount() {
    this.fetchRecipes(apiKey)
  }

  fetchRecipes = (key) => {
    this.setState({ loading: true })
    this.props.savedRecipeIDs.map(async rId => {
      const results = await fetchSingleRecipe(key, rId)
      const recipe = await cleanRecipe(results)
      this.props.addSavedRecipes(recipe)
      this.setState({ loading: false })
    })
  }

  //saved recipes in redux store empties but not supersaved recipes
  
  addFavorite = (id) => {
    const { uid } = this.props.authUser 
    this.props.saveRecipe(id)
  }

  render() {
    const recipesToDisplay = this.props.savedRecipesFull.map(recipe => {
      return <RecipeDetailsCard {...recipe}
        addFavorite={ this.addFavorite }
        authUser={ this.props.authUser } />
    })
    if(this.props.savedRecipesFull.length) {
      return (
        <div className='saved-recipes-container'>
          { recipesToDisplay }
        </div>
      )
    } else {
      return <p></p>
    }
  }
}

export const mapStateToProps = (state) => ({
  savedRecipeIDs: state.savedRecipeIDs,
  savedRecipesFull: state.savedRecipesFull
})

export const mapDispatchToProps = (dispatch) => ({
  addSavedRecipes: (savedRecipes) => dispatch(addSavedRecipes(savedRecipes)),
  saveRecipe: (id) => dispatch(saveRecipe(id)),
  deleteRecipe: (id) => dispatch(deleteRecipe(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(SavedRecipesContainer);