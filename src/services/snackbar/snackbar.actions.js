export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const snackbarTypes = {
  success: 'success',
};

export function openSnackbar(message, snackbarType) {
  return {
    type: OPEN_SNACKBAR,
    message,
    snackbarType,
  };
}

export function closeSnackbar() {
  return {
    type: CLOSE_SNACKBAR,
  };
}
