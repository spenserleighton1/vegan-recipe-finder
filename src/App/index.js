import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './styles.css';
import { fetchRecipes } from '../helper/apiCalls';
import { apiKey } from '../helper/apiKey';
import { cleanData } from '../helper/dataCleaner';
import { addRecipes } from '../actions';
import RecipesContainer from '../RecipesContainer';
import Header from '../Header'
import Search from '../Search'

class App extends Component {

async componentDidMount() {
    const results = await fetchRecipes(apiKey);
    const recipes = await cleanData(results.recipes);
    this.props.addRecipes(recipes)
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Search />
      <RecipesContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addRecipes: (recipes)=> dispatch(addRecipes(recipes))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
