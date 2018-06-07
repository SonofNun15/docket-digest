import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import DocketList from '../components/DocketList.js';

import './ManageAccount.css';

class ManageAccount extends Component {
  state = {
    dirty: false,
    newName: "My Name",
    newEmail: this.props.location.email
  };

  onChangeName = (event) => {
    this.setState({ dirty : true });
    this.setState({ newName: event.target.value })
  };

  onChangeEmail = (event) => {
    this.setState({ dirty : true });
    this.setState({ newEmail: event.target.value });
  };

  render() {

    return (
      <div className="accountInfo">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          value={this.state.newName}
          label="Name"
          type="name"
          style={{width: 450}}
          onChange={this.onChangeName}
        />
        <br/>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          name="email"
          value={this.state.newEmail}
          label="Email Address"
          type="email"
          style={{width: 450}}
          onChange={this.onChangeEmail}
        />
        <br/><br/>
        <Button variant="raised" disabled={!this.state.dirty}>Save</Button>
        <br/><br/>
        <Button variant="raised">Change Password</Button>
        <br/><br/>
        <DocketList/>
      </div>
    )
  }
}

export default ManageAccount;
