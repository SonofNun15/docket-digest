import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Account from './Account';

const Header = ({ user }) => {
  return (
    <header className="app-header">
      <ul>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Help">Help</Link></li>
      </ul>
      <Account user={user} />
    </header>
  );
};

export default Header;
