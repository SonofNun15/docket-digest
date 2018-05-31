import React from 'react';
import { OPEN_DIALOG, CLOSE_DIALOG } from './dialog.actions';

const initialState = {
  open: false,
  dialogContent: null
}

export function dialog(state = initialState, action) {
  if (action.type === OPEN_DIALOG) {
    return {
      ...state,
      open: true,
      dialogContent: action.dialogContent,
    };
  } else if (action.type === CLOSE_DIALOG) {
    return {
      ...state,
      open: false,
    };
  }
  return state;
}
