import React, { Component } from 'react';
import { all as starwarsNames } from 'starwars-names';
import MuiDownshift from 'mui-downshift';
import { ListItem, ListItemText } from '@material-ui/core/List';

const items = starwarsNames.map((name, identifier) => ({ name, identifier }));

export default class StarWarsSelect extends Component {
  state = {
	filteredItems: items,
	selectedItem: null,
	textValue: '',
  };

  handleStateChange = changes => {
	let filteredItems;
	if (typeof changes.inputValue === 'string') {
      filteredItems = items.filter(item => item.name.toLowerCase().includes(changes.inputValue.toLowerCase()));
	  this.setState({ 
		  filteredItems, 
		  textValue: changes.inputValue,
		  selectedItem: changes.selectedItem,
	  });
	}
  };

  clearSearch = () => this.setState({ textValue: '', selectedItem: null });

  itemToString = item => {
	  return item ? item.name : '';
  };

  getListItem = ({ getItemProps, item, index }) => {
	return item ? (
	  <ListItem button {...getItemProps()}>
		<ListItemText primary={item.primary || item.name} secondary={item.secondary} />
	  </ListItem>
	) : index === 0 ? (
	  <ListItem button disabled>
		<ListItemText primary={<span style={{ fontStyle: 'italic' }}>No items found</span>} />
	  </ListItem>
	) : null; // TODO: should we handle this or require user to implement `getListItem` at this point (`includeFooter` or an array of null/undefined)?
  }

  render() {
    const { filteredItems, selectedItem, textValue } = this.state;
    return (
	<div>
		<MuiDownshift
			items={filteredItems}
			itemToString={this.itemToString}
			selectedItem={selectedItem}
			onStateChange={this.handleStateChange}
			getInputProps={() => ({ value: textValue })}
			getListItem={this.getListItem}
			// keyMapper={rowIndex => filteredItems[rowIndex] && filteredItems[rowIndex].label}
			{...this.props}
		/>
		<button onClick={this.clearSearch}>Clear</button>
	  </div>
    );
  }
}
