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
    courtName: '',
    docketNumber: '',
    showLoginDialog: false
  };

  setCourtCategory = event => {
    if (!event.target.value) {
      this.setState({ category: { identifier: 0 }, courtName: '' });
      return;
    }
    const category = this.props.data.find(x => x.identifier === event.target.value);
    this.setState({ category, courtName: '' });
  }
  
  setCourt = courtName => {
    this.setState({ courtName });
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
                    selection={this.state.courtName}
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

function getCourts() {
  return [
    { label: 'Alabama Middle - ECF CM/ECF-DC V6.1 Court RSS Feed Court Information' },
    { label: 'Alabama Northern - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'Alabama Southern - ECF CM/ECF-DC V6.2.1 Court RSS Feed Court Information' },
    { label: 'Alaska - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Arizona - ECF CM/ECF-DC V6.2.1 Court RSS Feed Court Information' },
    { label: 'Arkansas Eastern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Arkansas Western - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'California Central - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'California Eastern - ECF CM/ECF-DC V6.2 Court Information' },
    { label: 'California Northern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'California Southern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Colorado - ECF CM/ECF-DC V6.1 Court RSS Feed Court Information' },
    { label: 'Connecticut - NextGen NextGen CM/ECF Release 1.2 (Revision 1.2) Court RSS Feed Court Information' },
    { label: 'Delaware - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'District Of Columbia - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Florida Middle - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Florida Northern - NextGen NextGen CM/ECF Release 1.1 (Revision 1.1.1) Court Information' },
    { label: 'Florida Southern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Georgia Middle - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Georgia Northern - ECF CM/ECF-DC V6.1.1.2 Court Information' },
    { label: 'Georgia Southern - ECF CM/ECF-DC V6.2 Court Information' },
    { label: 'Guam - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Hawaii - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'Idaho - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Illinois Central - ECF CM/ECF-DC V6.1 Court RSS Feed Court Information' },
    { label: 'Illinois Northern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Illinois Southern - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'Indiana Northern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Indiana Southern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Iowa Northern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Iowa Southern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Kansas - NextGen NextGen CM/ECF Release 1.1 (Revision 1.1.1) Court RSS Feed Court Information' },
    { label: 'Kentucky Eastern - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'Kentucky Western - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Louisiana Eastern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Louisiana Middle - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Louisiana Western - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Maine - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Maryland - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'Massachusetts - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Michigan Eastern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Michigan Western - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Minnesota - NextGen NextGen CM/ECF Release 1.2 (Revision 1.2) Court RSS Feed Court Information' },
    { label: 'Mississippi Northern - ECF CM/ECF-DC V6.2 Court Information' },
    { label: 'Mississippi Southern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Missouri Eastern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Missouri Western - NextGen NextGen CM/ECF Release 1.2 (Revision 1.2) Court RSS Feed Court Information' },
    { label: 'Montana - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Nebraska - NextGen NextGen CM/ECF Release 1.2 (Revision 1.2) Court RSS Feed Court Information' },
    { label: 'Nevada - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'New Hampshire - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'New Jersey - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'New Mexico - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'New York Eastern - ECF CM/ECF-DC V6.2.1 Court RSS Feed Court Information' },
    { label: 'New York Northern - NextGen NextGen CM/ECF Release 1.2 (Revision 1.2) Court RSS Feed Court Information' },
    { label: 'New York Southern - ECF CM/ECF-DC V6.2.1 Court RSS Feed Court Information' },
    { label: 'New York Western - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'North Carolina Eastern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'North Carolina Middle - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'North Carolina Western - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'North Dakota - ECF CM/ECF-DC V6.2 Court Information' },
    { label: 'Northern Mariana Islands - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Ohio Northern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Ohio Northern (asbestos) - ECF CM/ECF-DC V6.1 Court RSS Feed Court Information' },
    { label: 'Ohio Southern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Oklahoma Eastern - ECF CM/ECF-DC V6.2.1 Court Information' },
    { label: 'Oklahoma Northern - ECF CM/ECF-DC V6.2 Court Information' },
    { label: 'Oklahoma Western - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Oregon - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Pennsylvania Eastern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Pennsylvania Middle - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'Pennsylvania Western - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Puerto Rico - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Rhode Island - ECF CM/ECF-DC V6.1.1.2u Court RSS Feed Court Information' },
    { label: 'South Carolina - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'South Dakota - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Tennessee Eastern - ECF CM/ECF-DC V6.2.1 Court RSS Feed Court Information' },
    { label: 'Tennessee Middle - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Tennessee Western - NextGen NextGen CM/ECF Release 1.2 (Revision 1.2) Court Information' },
    { label: 'Texas Eastern - ECF CM/ECF-DC V6.1.1.2u Court RSS Feed Court Information' },
    { label: 'Texas Northern - ECF CM/ECF-DC V6.1.1 Court Information' },
    { label: 'Texas Southern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Texas Western - ECF CM/ECF-DC V6.1 Court RSS Feed Court Information' },
    { label: 'Utah - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Vermont - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Virgin Islands - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Virginia Eastern - ECF CM/ECF-DC V6.1 Court Information' },
    { label: 'Virginia Western - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Washington Eastern - ECF CM/ECF-DC V6.2.1 Court RSS Feed Court Information' },
    { label: 'Washington Western - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'West Virginia Northern - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'West Virginia Southern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Wisconsin Eastern - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
    { label: 'Wisconsin Western - ECF CM/ECF-DC V6.1.1 Court RSS Feed Court Information' },
    { label: 'Wyoming - ECF CM/ECF-DC V6.2 Court RSS Feed Court Information' },
  ];
}
