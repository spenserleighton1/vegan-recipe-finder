import React from 'react';
import carrot from '../Images/carrotspinner.png'
import './styles.css';

const Loader = () => (
<div className='loader'>
  <img src={carrot} className="image" alt="laoding" />
</div>
)

export default Loader;