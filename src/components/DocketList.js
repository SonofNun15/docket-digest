import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

class DocketList extends Component {
  state = {
    dList: null,
  };

  constructor() {
    super();
    this.state.dList = new Array();
    this.state.dList[0] = { number: 'docket 1', court: 'U.S. District Courts: Alabama Middle'};
    this.state.dList[1] = { number: 'docket 2', court: 'U.S. District Courts: Alabama Middle'};
    this.state.dList[2] = { number: 'docket 3', court: 'U.S. District Courts: Alabama Middle'};
    this.state.dList[3] = { number: 'docket 4', court: 'U.S. District Courts: Alabama Middle'};
    this.state.dList[4] = { number: 'docket 5', court: 'U.S. District Courts: Alabama Middle'};
  }

  deleteSubscription = (docket) => {
    alert('Deleting docket: ' + docket.number + ', court: ' + docket.court);
  };

  generate = () => {
    return this.state.dList.map(docket =>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={docket.number}
          secondary={docket.court}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={this.deleteSubscription.bind(this, docket)} >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>,
  
      /*React.cloneElement(element, {
        key: value,
      }),*/
    );
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="title">
              Subscribed Dockets
            </Typography>
            <div>
              <List dense={true}>
                {this.generate(
                  /*<ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary="Secondary text"
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>,*/
                )}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

DocketList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DocketList;
