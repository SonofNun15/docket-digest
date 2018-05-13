import React, { Component } from 'react';

import Menu, { MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom';

import { update } from '../components/WithUser';

import api from '../services/api';

import './Account.css';

function gravatarUrl(gravatarId) {
  return `https://www.gravatar.com/avatar/${gravatarId}?s=96`
}

class Account extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleAccount = () => {
    const { history, location } = this.props;

    this.close();

    const destination = '/account';

    if (location.pathname !== destination) {
      history.push(destination);
    }
  };

  handleLogout = () => {
    api.logout();
    update(null);

    this.close();
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
