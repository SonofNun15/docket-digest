import React, { Component } from 'react';
import Autocomplete from './Autocomplete';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import LoginDialog from './LoginDialog';
import { withCourts } from './withCourts';
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
  }
  
  setCourt = courtName => {
    const court = this.state.category.courts.find(x => x.name === courtName);
    this.setState({ court });
  }

  setDocketNumber = event => {
    this.setState({ docketNumber: event.target.value });
  }

  openLoginDialog = () => {
    console.log(this.state.showLoginDialog);
    this.setState({ showLoginDialog: true });
  }

  closeLoginDialog = () => {
    console.log(this.state.showLoginDialog);
    this.setState({ showLoginDialog: false });
  }
  
  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }

    return <div className="subscription">
      <h3>Find a federal case</h3>
      <div>
        <InputLabel htmlFor="court-category">Federal Court:</InputLabel>
        <div className="court-group">
          <FormControl className="court-category">
            <Select
              value={this.state.category.identifier}
              onChange={this.setCourtCategory}
              input={<Input name="court-category" id="court-category" />}>
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
                    suggestions={this.state.category.courts 
                            && this.state.category.courts.map(x => x.name)}
                    selection={this.state.court ? this.state.court.name : ''}
                    onChange={this.setCourt}
                    placeholder="Search for a court"/>
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
            margin="normal" />
        </div>
      </div>
      <Button onClick={this.openLoginDialog} variant="raised">Subscribe</Button>
      {this.state.showLoginDialog && 
        <LoginDialog onClose={this.closeLoginDialog} />}
    </div>;
  }
}

function getCourtCategories() {
  return [
    { id: 1, name: 'U.S. Supreme Court' },
    { id: 2, name: 'National Locator' },
    { id: 3, name: 'U.S. Court of Appeals' },
    { id: 4, name: 'U.S. District Courts' },
    { id: 5, name: 'U.S. Bankruptcy Courts' },
  ];
}

export default withCourts(Subscription);
