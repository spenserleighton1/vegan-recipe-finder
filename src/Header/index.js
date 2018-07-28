import React from 'react';
import { auth } from '../firebase';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = ({ authUser }) => {
  return (
    <div>
      { authUser ? <HeaderAuth /> : <HeaderNonAuth /> } 
    </div>
  )
}

const HeaderAuth = () => {
  return (
  <div className='header'>
    <h1>Vegan Recipe Finder</h1>
      <button><Link className='header-link' to={'/savedRecipes'}>Saved Recipes</Link></button>
      <button className='header-btn' type='button' onClick={ () => {auth.doSignOut()}}>Sign Out</button>
  </div>
    )
}

const HeaderNonAuth = () => { 
  return (
  <div className='header'>
    <h1>Vegan Recipe Finder</h1>
    <button className='header-btn'><Link className='header-link' to={'/signIn'}>Sign In</Link></button>
  </div>
    )
}

export default Header;


