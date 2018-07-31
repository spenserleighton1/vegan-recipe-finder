import React from 'react';
import leaf from '../../Images/leaf.svg';
import './styles.css';

const Loader = () => (
  <div className='loader'>
    <img src={ leaf } className="image" alt="laoding" />
  </div>
);

export default Loader;