import React, { Component } from 'react';
import Autocomplete from './Autocomplete';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import { DocketInput } from './DocketInput';
import './Subscription.css';

export class Subscription extends Component {
  state = {
    categoryId: 0,
  };
  
  setCourtCategory = event => {
    this.setState({ categoryId: event.target.value });
  }
  
  render() {
    return <div className="subscription">
      <h3>Find a federal case</h3>
      <div>
        <InputLabel htmlFor="court-category">Federal Court:</InputLabel>
        <div className="court-group">
          <FormControl className="court-category">
            <Select
              value={this.state.categoryId}
              onChange={this.setCourtCategory}
              input={<Input name="court-category" id="court-category" />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                getCourtCategories().map(category => 
                  <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                )
              }
            </Select>
          </FormControl>
          <div/>
          <Autocomplete 
                    className="court"
                    suggestions={getCourts().map(x => x.label)}
                    placeholder="Search for a court"/>
        </div>
      </div>
      <div>
        <DocketInput/>
      </div>
      <Button variant="raised">Subscribe</Button>
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
