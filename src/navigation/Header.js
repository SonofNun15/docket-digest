import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <div className="account"></div>
    </header>
  );
};

export default Header;
