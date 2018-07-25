import React from 'react';
import SignOutButton from '../SignOut';
import './styles.css';
import { Route, Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
  <div>
    <h1 className='header'>????? Recipe Finder</h1>
    <ul>
      <li><Link to={'/signIn'}>Sign In</Link></li>
      <li><Link to={'/'}>Landing</Link></li>
      <li><Link to={'/home'}>Home</Link></li>

      <li><SignOutButton /></li>
    </ul>
  </div>
    )
}

export default Header;


