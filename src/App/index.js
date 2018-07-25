import SingleRecipeContainer from '../SingleRecipeContainer';
import { Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import RecipesContainer from '../RecipesContainer';
import { fetchRecipes } from '../helper/apiCalls';
import { addRecipes } from '../actions';
import { cleanData } from '../helper/dataCleaner';
import { connect } from 'react-redux';
import { apiKey } from '../helper/apiKey';
import Header from '../Header';
import Search from '../Search';
import { firebase, auth } from '../firebase';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import './styles.css';


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

async componentDidMount() {
  firebase.auth.onAuthStateChanged(authUser => {
  authUser
    ? this.setState({ authUser })
    : this.setState({ authUser: null });
  });

  const results = await fetchRecipes(apiKey);
  const recipes = await cleanData(results.recipes);
  this.props.addRecipes(recipes)
  }

  render() {
    return (
      <div className="App">
        <Header authUser={ this.state.authUser } />

        <Route exact path={'/'} component={() => <LandingPage />} />
        <Route exact path={'/signUp'} component={() => <SignUpPage />} />
        <Route exact path={'/signIn'} component={() => <SignInPage />} />
        <Route exact path={'/passwordForgetPage'} component={() => <PasswordForgetPage />} />
        <Route exact path={'/home'} component={() => <HomePage />} />

        <Search />
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
