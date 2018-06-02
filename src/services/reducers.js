import { combineReducers } from 'redux';
import { dialog } from './dialog/dialog.reducer';
import { snackbar } from './snackbar/snackbar.reducer';

export default combineReducers({
  dialog,
  snackbar,
});
