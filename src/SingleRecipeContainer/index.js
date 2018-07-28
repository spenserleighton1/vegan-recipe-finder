import React, { Component } from 'react';
import { connect } from 'react-redux';
import { docRef } from '../firebase'
import { saveRecipe } from '../actions'
import './styles.css'

export class SingleRecipeContainer extends Component {

  addFavorite = (id) => {
    const { uid } = this.props.authUser 
    this.props.saveRecipe(id)

    // docRef.set({
    //   userId: uid,
    //   recipes: savedRecipes
    // }).then(() => console.log('saved'))
    //   .catch(error => console.log(error.message))
  }

  removeFavorite = (id) => {
    docRef.get()
      .then(doc => {
        if (doc && doc.exists) {
          const myData = doc.data();
          console.log(myData)
        }
      })
      .catch(error => console.log(error.message))
  }
  
  render() {
    const { title, publisher, ingredients, linkUrl, id } = this.props.recipe
    
    if(Object.keys(this.props.recipe).length > 0) {
      return(
        <div className='single-recipe'>
          <h2>{ title }</h2>
          <p>{ publisher }</p>
          <ul>
            { ingredients.map((ingredient, index) => <li key={ index }>{ ingredient }</li>)}
          </ul>
          <button className='favorite-btn' disabled={!this.props.authUser} onClick={ () => { this.addFavorite(id) } }>fav</button>
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

export const mapDispatchToProps = (dispatch) => ({
  saveRecipe: (id) => dispatch(saveRecipe(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(SingleRecipeContainer);