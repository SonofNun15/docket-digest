import React from 'react';
import { connect } from 'react-redux';
import MuiDialog from '@material-ui/core/Dialog';
import { closeDialog } from '../services/dialog/dialog.actions';

const Dialog = ({ open, dialogContent, dispatchCloseDialog }) => (
  <MuiDialog onClose={dispatchCloseDialog} aria-labelledby="dialog" open={open}>
    {dialogContent || <div/>}
  </MuiDialog>
);

export default connect(
  state => state.dialog,
  dispatch => ({
    dispatchCloseDialog: () => dispatch(closeDialog())
  })
)(Dialog);
