import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';
import './styles.css';

export class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({
          email: '',
          password: '',
          error: null
        }));
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ error: error.message });
      });

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const isInvalid =
      this.state.password === '' ||
      this.state.email === '';

    return (
      <div className='sign-in'>
        <h2>SignIn</h2>
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
          <p>
            Don't have an account?
            <Link to={'/signUp'}> Sign Up</Link>
          </p>
          <p>{ this.state.error }</p>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);

SignInPage.propTypes = {
  history: PropTypes.object
};

