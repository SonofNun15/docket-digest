import { dialog } from './dialog.reducer';
import { openDialog, closeDialog } from './dialog.actions';

describe('dialog.reducer', () => {
  it('should change the state to open with the given content', () => {
    const currentState = { open: false };
    const dialogOptions = { 
      header: 'header',
      content: 'content',
      footer: 'footer',
    };
    const action = openDialog(dialogOptions);

    const newState = dialog(currentState, action);

    expect(newState.open).toEqual(true);
    expect(newState.dialogOptions.header).toEqual('header');
    expect(newState.dialogOptions.content).toEqual('content');
    expect(newState.dialogOptions.footer).toEqual('footer');
  });

  it('should change the state to closed without changing the content', () => {
    const currentState = { 
      open: true,
      dialogOptions: {
        header: 'header',
        content: 'content',
        footer: 'footer',
      }
    };
    const action = closeDialog();

    const newState = dialog(currentState, action);

    expect(newState.open).toEqual(false);
    expect(newState.dialogOptions.header).toEqual('header');
    expect(newState.dialogOptions.content).toEqual('content');
    expect(newState.dialogOptions.footer).toEqual('footer');
  });
});
