import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '../components/Autocomplete';
import LoginDialog from '../components/LoginDialog';

import { withCourts } from './withCourts';
import { withUser } from '../helpers/WithUser';
import Api from '../services/api';
import { openSnackbar, snackbarTypes } from '../services/snackbar/snackbar.actions';

import './Subscription.css';

class Subscription extends Component {
  state = {
    category: { identifier: 0 },
    court: null,
    docketNumber: '',
    showLoginDialog: false
  };

  setCourtCategory = event => {
    if (!event.target.value) {
      this.setState({ category: { identifier: 0 }, court: null });
      return;
    }
    const category = this.props.data.find(x => x.identifier === event.target.value);
    this.setState({ category, court: null });
  };

  setCourt = court => {
    // const court = this.state.category.courts.find(x => x.identifier === courtSelection.value);
    this.setState({ court });
  };

  setDocketNumber = event => {
    this.setState({ docketNumber: event.target.value });
  };

  openLoginDialog = () => {
    if (this.props.user) {
      this.subscribe();
    } else {
      this.setState({ showLoginDialog: true });
    }
  };

  closeLoginDialog = success => {
    this.setState({ showLoginDialog: false });
    if (success) {
      this.subscribe();
    }
  };

  subscribe = () => {
    Api.subscribe(this.state.category, this.state.court, this.state.docketNumber)
      .then(this.openSuccessMessage);
  };

  openSuccessMessage = () => {
    this.props.dispatch(openSnackbar('You have been successfully subscribed to this docket', snackbarTypes.success));
  };

  canSubscribe = () => {
    return this.state.category && this.state.court && this.state.docketNumber;
  };

  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }

    return (
      <div className="subscription">
        <h3>Find a federal case</h3>
        <div>
          <InputLabel htmlFor="court-category">Federal Court:</InputLabel>
          <div className="court-group">
            <FormControl className="court-category">
              <Select
                value={this.state.category.identifier}
                onChange={this.setCourtCategory}
                input={<Input name="court-category" id="court-category" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  this.props.data.map(category =>
                    <MenuItem key={category.identifier} value={category.identifier}>{category.name}</MenuItem>
                  )
                }
              </Select>
            </FormControl>
            <div/>
            <Autocomplete
                      className="court"
                      suggestions={this.state.category.courts}
                      selection={this.state.court}
                      onChange={this.setCourt}
                      placeholder="Search for a court"
            />
          </div>
        </div>
        <div className="docket-group">
          <div><InputLabel htmlFor="docket-number">Docket #:</InputLabel></div>
          <div>
            <TextField
              id="docket-number"
              className="full-width nomargin"
              placeholder="e.g. 5:15-cv-14002"
              onChange={this.setDocketNumber}
              margin="normal"
            />
          </div>
        </div>
        <Button onClick={this.openLoginDialog} disabled={!this.canSubscribe()} variant="raised">Subscribe</Button>
        {this.state.showLoginDialog &&
          <LoginDialog onClose={this.closeLoginDialog} />}
      </div>
    );
  }
}

export default withCourts(withUser(connect()(Subscription)));
