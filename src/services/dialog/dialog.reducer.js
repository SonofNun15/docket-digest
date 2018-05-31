import React from 'react';
import { OPEN_DIALOG, CLOSE_DIALOG } from './dialog.actions';

const initialState = {
  open: false,
  dialogOptions: {
    header: <div/>,
    content: <div/>,
    footer: <div/>,
  }
}

export function dialog(state = initialState, action) {
  if (action.type === OPEN_DIALOG) {
    return {
      ...state,
      open: true,
      dialogOptions: action.dialogOptions,
    };
  } else if (action.type === CLOSE_DIALOG) {
    return {
      ...state,
      open: false,
    };
  }
  return state;
}
