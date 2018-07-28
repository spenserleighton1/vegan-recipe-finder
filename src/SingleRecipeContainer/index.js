import React, { Component } from 'react';
import { connect } from 'react-redux';
import { docRef } from '../firebase'
import RecipeDetailsCard from '../RecipeDetailsCard'
import { saveRecipe, deleteRecipe } from '../actions'
import './styles.css'

export class SingleRecipeContainer extends Component {

  addFavorite = (id) => {
    const { uid } = this.props.authUser 
    this.props.saveRecipe(id)
    // docRef.set({
    //   userId: uid,
    //   recipes: this.props.savedRecipes
    // }).then(() => console.log('saved'))
    //   .catch(error => console.log(error.message))
  }
  
  render() {    
    if(Object.keys(this.props.recipe).length > 0) {
      return(
        <div className='single-recipe'>
          <RecipeDetailsCard {...this.props.recipe } 
            addFavorite={ this.addFavorite } 
            authUser={ this.props.authUser }/>
        </div>
      )      
    } else {
      return (<p></p>)
    }
  }
}

export const mapStateToProps = (state) => ({
  recipe: state.singleRecipe,
  savedRecipes: state.savedRecipes
});

export const mapDispatchToProps = (dispatch) => ({
  saveRecipe: (id) => dispatch(saveRecipe(id)),
  deleteRecipe: (id) => dispatch(deleteRecipe(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(SingleRecipeContainer);














  // removeFavorite = (id) => {
  //   this.props.deleteRecipe(id)
  //   docRef.get()
  //     .then(doc => {
  //       if (doc && doc.exists) {
  //         const myData = doc.data();
  //         console.log(myData)
  //       }
  //     })
  //     .catch(error => console.log(error.message))
  // }

  // checkFavorites = (id) => {
  //   const { uid } = this.props.authUser 
  // }