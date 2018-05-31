import React from 'react';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export function openDialog(dialogContent) {
  return {
    type: OPEN_DIALOG,
    dialogContent
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG,
  };
}

export function openLoginDialog() {
  return {
    type: OPEN_DIALOG,
    dialogContent: null
  };
}
