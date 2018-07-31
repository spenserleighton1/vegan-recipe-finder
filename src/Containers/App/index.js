import { addRecipes, isLoading } from '../../actions';
import SingleRecipeContainer from '../../Components/SingleRecipeContainer';
import SavedRecipesContainer from '../SavedRecipesContainer';
import { Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { firebase } from '../../firebase';
import RecipesContainer from '../RecipesContainer';
import { fetchRecipes } from '../../helper/apiCalls';
import { cleanData } from '../../helper/dataCleaner';
import { connect } from 'react-redux';
import { apiKey } from '../../helper/apiKey';
import SignUpPage from '../../Components/SignUp';
import SignInPage from '../../Components/SignIn';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import PropTypes from 'prop-types';

import './styles.css';


export class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { authUser: null };
  }

  async componentDidMount() {
    this.props.isLoading(true);
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });

    const results = await fetchRecipes(apiKey);
    const recipes = await cleanData(results.recipes);
    this.props.addRecipes(recipes);
    await this.props.isLoading(false);
  }

  render() {
    const loaded = this.props.loading ? <Loader /> && <RecipesContainer /> : <RecipesContainer />;
    return (
      <div className="App">
        <Header authUser={ this.state.authUser } />
        <Route exact path={'/signUp'} component={SignUpPage} />
        <Route exact path={'/signIn'} component={SignInPage} />
        <Route exact path={'/savedRecipes'} render={() => <SavedRecipesContainer authUser={ this.state.authUser } />} />
        <Route exact path={'/'} render={()=> <SingleRecipeContainer authUser={ this.state.authUser } /> } />
        <Route exact path={'/'} render={()=> loaded } />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  loading: state.loading
});

export const mapDispatchToProps = (dispatch) => ({
  isLoading: (bool) => dispatch(isLoading(bool)),
  addRecipes: (recipes)=> dispatch(addRecipes(recipes))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  isLoading: PropTypes.func.isRequired,
  addRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool
};
