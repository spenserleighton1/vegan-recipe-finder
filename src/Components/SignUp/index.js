import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';
import './styles.css';

export class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, passwordOne } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({
          username: '',
          email: '',
          passwordOne: '',
          passwordTwo: '',
          error: null
        }));
        this.props.history.push('/');
      })
      .catch(error => this.setState({ error: error.message }));

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    const isInvalid =
      this.state.passwordOne !== this.state.passwordTwo ||
      this.state.passwordOne === '' ||
      this.state.email === '' ||
      this.state.username === '';

    return (
      <div className='sign-up'>
        <h1>SignUp</h1>
        <form className='signup-form' onSubmit={this.onSubmit}>
        Username: 
          <input
            name="username"
            value={this.state.username}
            onChange={ this.handleChange }
            type="text"
            placeholder="Full Name"
          />
          Email: 
          <input
            name="email"
            value={this.state.email}
            onChange={ this.handleChange }
            type="text"
            placeholder="Email Address"
          />
          Password: 
          <input
            name="passwordOne"
            value={this.state.passwordOne}
            onChange={ this.handleChange }
            type="password"
            placeholder="Password"
          />
          Confirm Password: 
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
          <p>{this.state.error}</p>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpPage);

SignUpPage.propTypes = {
  history: PropTypes.object
};