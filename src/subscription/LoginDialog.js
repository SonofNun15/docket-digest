import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';import './loginDialog.css';

class LoginDialog extends React.Component {
    handleClose = () => {
      this.props.onClose();
    };

    handleSubmit = () => {
        this.props.onClose();
      };
    
    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="login-dialog" open = {true}>
                <DialogTitle id="login-dialog">User Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                    </DialogContentText>
                    <Link to="/Help">Create Account</Link>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>        
        )
    }
}

export default LoginDialog;