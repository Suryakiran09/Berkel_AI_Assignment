import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='app-header'>
      <h1><Link to='/'>My Notes</Link></h1>
    </div>
  );
}

export default Header;
