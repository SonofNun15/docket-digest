import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import DocketList from '../components/DocketList.js';

import './ManageAccount.css';

class ManageAccount extends Component {

  render() {

    return (
      <div className="accountInfo">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          value='My Name'
          label="Name"
          type="name"
          style={{width: 450}}
        />
        <br/>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          name="email"
          value={this.props.location.email}
          label="Email Address"
          type="email"
          style={{width: 450}}
        />
        <br/><br/>
        <Button variant="raised">Save</Button>
        <br/><br/>
        <Button variant="raised">Change Password</Button>
        <br/><br/>
        <DocketList/>
      </div>
    )
  }
}

export default ManageAccount;
