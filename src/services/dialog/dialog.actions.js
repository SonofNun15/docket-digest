import React from 'react';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export function openDialog(dialogOptions) {
  return {
    type: OPEN_DIALOG,
    dialogOptions
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
    dialogOptions: {
      header: <div>Login header</div>,
      content: <div>Login content</div>,
      footer: <div>Login footer</div>
    }
  };
}
