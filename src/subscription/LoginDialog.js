import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import { Link } from 'react-router-dom';
import api from '../services/api';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';import './loginDialog.css';

import { update } from '../components/WithUser';

class LoginDialog extends React.Component {
    state = {
        email : "",
        password : "",
        regVis : false
    };
    handleClose = () => {
        this.props.onClose();
    };

    handleSubmit = () => {
        const { email, password } = this.state;
        api.login(email, password)
            .then(user => update(user));
        this.props.onClose();
    };

    handleToggleRegistration = () => {
        const { regVis } = this.state;
        this.setState({regVis:!regVis});
    };

    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
    };

    renderLoginContent() {
        const { regVis, email, password } = this.state;
        if (regVis) {
            return ;
        }
        else {
            return (
                <DialogContent>
                    <DialogContentText>
                        Login using your e-mail address and password.
                    </DialogContentText>
                    <Button onClick={this.handleToggleRegistration}><font size="2">Create Account</font></Button>
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
            )
        }
    };

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="login-dialog" open = {true}>
                <form onSubmit={this.handleSubmit}>
                    <DialogTitle id="login-dialog">User Login</DialogTitle>
                    {this.renderLoginContent()}
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}

export default LoginDialog;
