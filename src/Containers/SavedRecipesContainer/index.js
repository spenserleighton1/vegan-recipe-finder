import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleRecipe } from '../../helper/apiCalls';
import { cleanRecipe } from '../../helper/dataCleaner';
import { apiKey } from '../../helper/apiKey';
import SavedRecipeDetailsCard from '../../Components/SavedRecipeDetailsCard';
import { docRef } from '../../firebase';
import { saveRecipe, deleteRecipe, addSavedRecipes } from '../../actions';
import { Link } from 'react-router-dom'
import Loader from '../../Components/Loader';
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
      console.log(recipe)
      return <SavedRecipeDetailsCard {...recipe}
        authUser={ this.props.authUser } />
    })
    if(this.props.savedRecipesFull.length) {
      return (
        <div className='saved-recipes-container'>
          <Link className='home-btn' exact to="/">Home</Link>
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