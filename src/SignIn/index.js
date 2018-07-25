import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../SignUp';

import { auth } from '../firebase';


const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };
  };

  onSubmit = (event) => {
    event.preventDefault();

    const {
      email,
      password,
    } = this.state;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({
          email: '',
          password: '',
          error: null,
        }));
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ 'error': error });
      });

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const isInvalid =
      this.state.password === '' ||
      this.state.email === '';

    return (
      <form onSubmit={ this.onSubmit }>
        <input
          name="email"
          value={ this.state.email }
          onChange={ this.handleChange }
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={ this.state.password }
          onChange={ this.handleChange }
          type="password"
          placeholder="Password"
        />
        <button disabled={ isInvalid } type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};