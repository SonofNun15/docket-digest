import React, { Component } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom';

import { update } from '../helpers/WithUser';

import api from '../services/api';
import gravatarUrl from '../services/gravatar';

import './Account.css';

class Account extends Component {
  state = {
    anchorEl: null,
    username: '',
    email: ''
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleAccount = () => {
    const { history, location } = this.props;

    this.close();

    const destination = '/account';

    if (location.pathname !== destination) {
      history.push({
        pathname: destination,
        email: this.props.user.username
      });
    }
  };

  handleLogout = () => {
    const { history } = this.props;
    
    api.logout();
    update(null);

    this.close();
    
    history.push({
      pathname: '/'
    });
};

  close = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { user } = this.props;

    if (user == null) {
      return <div />
    }

    const { gravatarId } = user;
    const { anchorEl } = this.state;
    const ITEM_HEIGHT = 48;

    return (
      <div className="account-container">
        <div
          className="menu-host"
          onClick={this.handleClick}
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-label="More"
          aria-haspopup="true"
        >
          <img src={gravatarUrl(gravatarId)} width="48" height="48" className="profile" alt="profile" />
          <MoreVertIcon />
        </div>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <MenuItem onClick={this.handleAccount}>
            Account
          </MenuItem>
          <Divider />
          <MenuItem onClick={this.handleLogout}>
            Log out
          </MenuItem>
        </Menu>
      </div>
    );
  }
};

export default withRouter(Account);
