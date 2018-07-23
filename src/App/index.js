import { Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { fetchRecipes } from '../helper/apiCalls';
import { addRecipes } from '../actions';
import { cleanData } from '../helper/dataCleaner';
import { connect } from 'react-redux';
import { apiKey } from '../helper/apiKey';
import SingleRecipeContainer from '../SingleRecipeContainer'
import RecipesContainer from '../RecipesContainer';
import Header from '../Header'
import Search from '../Search'
import './styles.css';

export class App extends Component {

async componentDidMount() {
    const results = await fetchRecipes(apiKey);
    const recipes = await cleanData(results.recipes);
    this.props.addRecipes(recipes)
  }

  render() {
    return (
      <div className="App">
      <Route path='/' component={Header}/>
      <Route path='/' component={Search}/>
      <SingleRecipeContainer />
      <RecipesContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addRecipes: (recipes)=> dispatch(addRecipes(recipes))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
