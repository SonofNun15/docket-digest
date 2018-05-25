import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiDownshift from 'mui-downshift';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function getSuggestions(inputValue, suggestions) {
  return suggestions.filter(suggestion =>
    (!inputValue || suggestion.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
  );
}

export class Autocomplete extends Component {
  state = { selection: null, textValue: '' };

  static propTypes = {
    suggestions: PropTypes.array,
    placeholder: PropTypes.string.isRequired,
    selection: PropTypes.object,
    onChange: PropTypes.func,
  };

  static getDerivedStateFromProps(props, previousState) {
    return { ...previousState, selection: props.selection, textValue: '' };
  }

  handleInputChange = value => {
    if (this.state.selection && this.state.selection.name !== value) {
      this.setState({
        textValue: value,
        selection: null,
      });
    } else {
      this.setState({ textValue: value });
    }
  };

  onSelection = value => {
    this.setState({ selection: value })
    this.props.onChange(value);
  };

  itemToString = item => item ? item.name : '';

  getListItem = ({ getItemProps, item, index }) => {
    return item ? (
      <ListItem button {...getItemProps()}>
        <ListItemText primary={item.primary || item.name} />
      </ListItem>
    ) : null;
  };

  render() {
    const { suggestions, placeholder } = this.props;
    const { selection, textValue } = this.state;
    const suggestionResults = suggestions ? getSuggestions(textValue, suggestions) : [];

    return (
      <div>
        <MuiDownshift
          itemToString={this.itemToString}
          getInputProps={() => ({
            value: textValue,
            placeholder: placeholder,
            disabled: !suggestions,
          })}
          selectedItem={selection}
          onChange={this.onSelection}
          onInputValueChange={this.handleInputChange}
          items={suggestionResults}
          getListItem={this.getListItem} />
      </div>
    );
  }
}

export default Autocomplete;
