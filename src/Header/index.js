import React from 'react';
import SignOutButton from '../SignOut';
import { auth } from '../firebase';
import './styles.css';
import { Route, Link, withRouter } from 'react-router-dom';

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
      <button className='header-btn' type="button" onClick={ () => {auth.doSignOut()}}>Sign Out</button>
  </div>
    )
}

const HeaderNonAuth = () => { 
  return (
  <div className='header'>
    <h1>Vegan Recipe Finder</h1>
    <Link className="header-link" to={'/signIn'}>Sign In</Link>
  </div>
    )
}

export default Header;


