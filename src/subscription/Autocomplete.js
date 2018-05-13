import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}>
      {suggestion}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.string.isRequired,
};

function getSuggestions(inputValue, suggestions) {
  let count = 0;

  return suggestions.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    right: 0,
    width: '40em',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
});

export class Autocomplete extends Component {
  state = { selection: '', textValue: '' };

	static getDerivedStateFromProps(props, previousState) {
    return {...previousState, selection: props.selection || '', textValue: '' };
  }
  
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ 
      textValue: value,
      selection: '',
    });
  }
  
  onSelection = value => {
    this.setState({ selection: value, textValue: '' })
    this.props.onChange(value);
  }
  
  render() {
    const { classes, suggestions, placeholder } = this.props;
    const { selection, textValue } = this.state;

    return (
      <div className={classes.root}>
        <Downshift inputValue={textValue} selectedItem={selection} onChange={this.onSelection}>
          {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder,
                  id: 'integration-downshift-simple',
                  onChange: this.handleInputChange,
                  value: inputValue || selection,
                  disabled: !suggestions,
                }),
              })}
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue, suggestions).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion }),
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          )}
        </Downshift>
      </div>
    );
  }
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  suggestions: PropTypes.array,
  placeholder: PropTypes.string.isRequired,
  selection: PropTypes.string,
  onChange: PropTypes.func,
};

export default withStyles(styles)(Autocomplete);
