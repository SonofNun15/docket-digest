import { snackbar } from './snackbar.reducer';
import { openSnackbar, closeSnackbar } from './snackbar.actions';

describe('snackbar.reducer', () => {
  it('should change the state to open with the given message and type', () => {
    const currentState = { open: false };
    const action = openSnackbar('message', 'snackbar type');

    const newState = snackbar(currentState, action);

    expect(newState.open).toEqual(true);
    expect(newState.message).toEqual('message');
    expect(newState.snackbarType).toEqual('snackbar type');
  });

  it('should change the state to closed without changing the message', () => {
    const currentState = { 
      open: true,
      message: 'message',
      snackbarType: 'snackbar type',
    };
    const action = closeSnackbar();

    const newState = snackbar(currentState, action);

    expect(newState.open).toEqual(false);
    expect(newState.message).toEqual('message');
    expect(newState.snackbarType).toEqual('snackbar type');
  });
});
