import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleRecipe } from '../../helper/apiCalls';
import { cleanRecipe } from '../../helper/dataCleaner';
import { apiKey } from '../../helper/apiKey';
import SavedRecipeDetailsCard from '../../Components/SavedRecipeDetailsCard';
import { saveRecipe, deleteRecipe, addSavedRecipes } from '../../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

export class SavedRecipesContainer extends Component {
  constructor() {
    super();
    this.state = { loading: false };
  }

  componentDidMount() {
    this.fetchRecipes(apiKey);
  }

  fetchRecipes = (key) => {
    this.setState({ loading: true });
    this.props.savedRecipeIDs.map(async rId => {
      const results = await fetchSingleRecipe(key, rId);
      const recipe = await cleanRecipe(results);
      this.props.addSavedRecipes(recipe);
      this.setState({ loading: false });
    });
  }
  
  addFavorite = (id) => {
    this.props.saveRecipe(id);
  }

  render() {
    const recipesToDisplay = this.props.savedRecipesFull.map((recipe, index) => {
      return <SavedRecipeDetailsCard {...recipe}
        key={ index }
        authUser={ this.props.authUser } />;
    });
    if (this.props.savedRecipesFull.length) {
      return (
        <div className='saved-recipes-container'>
          <Link className='home-btn' exact to="/">Home</Link>
          { recipesToDisplay }
        </div>
      );
    } else {
      return <p></p>;
    }
  }
}

export const mapStateToProps = (state) => ({
  savedRecipeIDs: state.savedRecipeIDs,
  savedRecipesFull: state.savedRecipesFull
});

export const mapDispatchToProps = (dispatch) => ({
  addSavedRecipes: (savedRecipes) => dispatch(addSavedRecipes(savedRecipes)),
  saveRecipe: (id) => dispatch(saveRecipe(id)),
  deleteRecipe: (id) => dispatch(deleteRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipesContainer);

SavedRecipesContainer.propTypes = {
  authUser: PropTypes.object.isRequired,
  savedRecipeIDs: PropTypes.array.isRequired,
  addSavedRecipes: PropTypes.func.isRequired,
  saveRecipe: PropTypes.func.isRequired,
  savedRecipesFull: PropTypes.array.isRequired

};