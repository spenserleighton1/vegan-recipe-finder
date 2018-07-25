import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase'

const SignUpPage = ({ history }) =>
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    };
  };

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({
          username: '',
          email: '',
          passwordOne: '',
          passwordTwo: '',
          error: null,
        }));
      this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ 'error': error });
      });

    event.preventDefault();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {

    const isInvalid =
      this.state.passwordOne !== this.state.passwordTwo ||
      this.state.passwordOne === '' ||
      this.state.email === '' ||
      this.state.username === '';

    return (
      <form onSubmit={this.onSubmit}>
       <input
        name="username"
        value={this.state.username}
        onChange={ this.handleChange }
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={this.state.email}
        onChange={ this.handleChange }
        type="text"
        placeholder="Email Address"
      />
      <input
        name="passwordOne"
        value={this.state.passwordOne}
        onChange={ this.handleChange }
        type="password"
        placeholder="Password"
      />
      <input
        name="passwordTwo"
        value={this.state.passwordTwo}
        onChange={ this.handleChange }
        type="password"
        placeholder="Confirm Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={'/signUp'}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};