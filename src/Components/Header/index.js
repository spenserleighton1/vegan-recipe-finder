import React from 'react';
import { auth } from '../../firebase';
import './styles.css';
import { Link } from 'react-router-dom';
import Search from '../../Containers/Search';
import PropTypes from 'prop-types';

const Header = ({ authUser }) => {
  return (
    <div>
      { authUser ? <HeaderAuth /> : <HeaderNonAuth /> } 
    </div>
  );
};

const HeaderAuth = () => {
  return (
    <div className='header'>
      <h1>Vegan Recipe Finder</h1>
      <Search />
      <button className='header-btn'>
        <Link className='header-link' exact to={'/savedRecipes'}>Saved Recipes</Link>
      </button>
      <button className='header-btn' type='button' onClick={ () => { auth.doSignOut(); }}>
        <Link className='header-link' to={'/'}>Sign Out</Link>
      </button>
    </div>
  );
};

const HeaderNonAuth = () => { 
  return (
    <div className='header'>
      <Search />
      <h1>Vegan Recipe Finder</h1>
      <button className='header-btn'>
        <Link className='header-link' to={'/signIn'}>Sign In</Link>
      </button>
    </div>
  );
};

export default Header;

Header.propTypes = {
  authUser: PropTypes.object
};

