import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../helper/apiCalls';
import { apiKey } from '../../helper/apiKey';
import { cleanData } from '../../helper/dataCleaner';
import { addRecipes } from '../../actions';
import './styles.css';


export class Search extends Component {
  constructor() {
    super()

    this.state = {
      userInput: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({ userInput: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const results = await fetchRecipes(apiKey,this.state.userInput);
    const recipes = await cleanData(results.recipes);
    this.props.addRecipes(recipes)
  }

  render() {
    return (
      <form
        onSubmit={ this.handleSubmit } >
        <input
          placeholder="   search by ingredient"
          className='search-input'
          type='text' 
          onChange={ this.handleChange } />
        <button
          className='search-btn'>Search</button>
      </form>
      )
    }
  }

export const mapDispatchToProps = (dispatch) => ({
  addRecipes: (recipes)=> dispatch(addRecipes(recipes))
})

export default connect(null, mapDispatchToProps)(Search);