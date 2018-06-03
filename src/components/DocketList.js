import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

let dList = new Array();

function generate(element) {
  return dList.map(value =>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={value.number}
        secondary={value.court}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>,

    /*React.cloneElement(element, {
      key: value,
    }),*/
  );
}

class DocketList extends Component {
  state = {
    dense: false,
    secondary: false,
  };

  constructor() {
    super();
    dList[0] = { number: 'docket 1', court: 'U.S. District Courts: Alabama Middle'};
    dList[1] = { number: 'docket 2', court: 'U.S. District Courts: Alabama Middle'};
    dList[2] = { number: 'docket 3', court: 'U.S. District Courts: Alabama Middle'};
    dList[3] = { number: 'docket 4', court: 'U.S. District Courts: Alabama Middle'};
    dList[4] = { number: 'docket 5', court: 'U.S. District Courts: Alabama Middle'};
  }


  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;

    return (
      <div className='docketList'/*{classes.root}*/>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="title" /*className={classes.title}*/>
              Subscribed Dockets
            </Typography>
            <div className={classes.demo}>
              <List id='docketList' dense={dense}>
                {generate(
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

export default withStyles(styles)(DocketList);
