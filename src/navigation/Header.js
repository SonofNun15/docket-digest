import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Account from './Account';
import LoginDialog from '../components/LoginDialog';

class Header extends Component {
  state = {
    showLoginDialog: false,
  };

  openLoginDialog = () => {
    this.setState({ showLoginDialog: true });
  }

  closeLoginDialog = success => {
    this.setState({ showLoginDialog: false });
  }

  renderLoginOrAccountLink() {
    if (this.props.user != null) {
      return (
        <Account user={this.props.user} />
      )
    }
    else {
      return (
        <div>
          <div className="loginBtn" onClick={this.openLoginDialog}>Login</div>
          {this.state.showLoginDialog &&
            <LoginDialog onClose={this.closeLoginDialog} />}
        </div>
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

export default Header;
