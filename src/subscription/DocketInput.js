import React, { Component } from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import './DocketInput.css';

export class DocketInput extends Component {
	render() {
	  return <div>
		<InputLabel htmlFor="docket-number">Docket #:</InputLabel>
		  <div className="docket-group">
			<TextField
				className="nomargin"
				onChange={console.log}
				margin="normal" />
			<span className="seperator">:</span>
			<Select
              value={0}
              onChange={console.log}
              input={<Input name="docket-number" id="docket-number" />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                getYears().map(year => 
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                )
              }
            </Select>
			<span className="seperator">-</span>
			<Select
              value={0}
              onChange={console.log}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                getCourtTypes().map(courtType => 
                  <MenuItem key={courtType} value={courtType}>{courtType}</MenuItem>
                )
              }
            </Select>
			<span className="seperator">-</span>
			<TextField
				className="nomargin"
				onChange={console.log}
				margin="normal" />
		  </div>
	  </div>;
	}
  }

export function getYears() {
	return [
		2018,
		2017,
		2016,
		2015,
	];
}

export function getCourtTypes() {
	return [
		'cv',
	];
}
