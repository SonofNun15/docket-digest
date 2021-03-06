import React from 'react';
import { connect } from 'react-redux';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Icon from '@material-ui/core/Icon';
import { snackbarTypes, closeSnackbar } from '../services/snackbar/snackbar.actions';
import './Snackbar.css';

const Snackbar = ({ open, message, snackbarType, dispatchCloseSnackbar }) => (
  <MuiSnackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={open}
    onClose={dispatchCloseSnackbar}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={
    <span className="snackbar">
      {snackbarType === snackbarTypes.success && <Icon className="snackbar-success">check</Icon>}
      <span className="snackbar-message" id="message-id">{message}</span>
    </span>}
  />
);

export default connect(
  state => state.snackbar,
  dispatch => ({
    dispatchCloseSnackbar: () => dispatch(closeSnackbar())
  })
)(Snackbar);
