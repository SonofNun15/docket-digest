import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from './snackbar.actions';

const initialState = {
  open: false,
  message: '',
  snackbarType: '',
}

export function snackbar(state = initialState, action) {
  if (action.type === OPEN_SNACKBAR) {
    return {
      ...state,
      open: true,
      message: action.message,
      snackbarType: action.snackbarType,
    };
  } else if (action.type === CLOSE_SNACKBAR) {
    return {
      ...state,
      open: false,
    };
  }
  return state;
}
