import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import Account from './Account';
import { openLoginDialog } from '../services/dialog/dialog.actions';

class Header extends Component {
  openLoginDialog = () => {
    this.props.dispatch(openLoginDialog());
  }

  renderLoginOrAccountLink() {
    if (this.props.user != null) {
      return (
        <Account user={this.props.user} />
      )
    }
    else {
      return (
        <div className="loginBtn" onClick={this.openLoginDialog}>Login</div>
      )
    }
  };

  render() {
    return <header className="app-header">
        <ul>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Help">Help</Link></li>
        </ul>
        {this.renderLoginOrAccountLink()}
      </header>
  }
}

export default connect()(Header);
