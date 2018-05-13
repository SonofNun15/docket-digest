import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import api from '../services/api';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';import './loginDialog.css';

class LoginDialog extends React.Component {
    state = {
        email : "",
        password : ""
    };
    handleClose = () => {
      this.props.onClose();
    };

    handleSubmit = () => {
        const { email, password } = this.state;
        api.login(email, password);
        this.props.onClose();
    };

    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
    };
    
    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;
        const { email, password } = this.state;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="login-dialog" open = {true}>
                <DialogTitle id="login-dialog">User Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Login using your e-mail address and password.
                    </DialogContentText>
                    <Link to="/Help"><font size="2">Create Account</font></Link>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        value={email}
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={this.onChange}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        name="password"
                        value={password}
                        label="Password"
                        type="password"
                        fullWidth
                        onChange={this.onChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>        
        )
    }
}

export default LoginDialog;