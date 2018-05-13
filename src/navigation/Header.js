import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Account from './Account';

const Header = () => {
  return (
    <header className="app-header">
      <ul>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Help">Help</Link></li>
      </ul>
      <Account />
    </header>
  );
};

export default Header;
