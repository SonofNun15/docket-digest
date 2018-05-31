import { dialog } from './dialog.reducer';
import { openDialog, closeDialog } from './dialog.actions';

describe('dialog.reducer', () => {
  it('should change the state to open with the given content', () => {
    const currentState = { open: false };
    const action = openDialog('content');

    const newState = dialog(currentState, action);

    expect(newState.open).toEqual(true);
    expect(newState.dialogContent).toEqual('content');
  });

  it('should change the state to closed without changing the content', () => {
    const currentState = { 
      open: true,
      dialogContent: 'content',
    };
    const action = closeDialog();

    const newState = dialog(currentState, action);

    expect(newState.open).toEqual(false);
    expect(newState.dialogContent).toEqual('content');
  });
});
