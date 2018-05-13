import React from 'react';
import './Header.css';
import Account from './Account';

const Header = () => {
  return (
    <header className="app-header">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <Account />
    </header>
  );
};

export default Header;
