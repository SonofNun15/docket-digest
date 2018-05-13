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
} from 'material-ui/Dialog';
import './loginDialog.css';

import { update } from '../components/WithUser';

class LoginDialog extends React.Component {
    state = {
        email : "",
        password : "",
        confirmPassword : "",
        name : "",
        regVis : false
    };
    handleClose = () => {
        this.props.onClose();
    };

    handleSubmit = () => {
        const { email, password, confirmPassword, name, regVis  } = this.state;
        if (regVis) {
            if (password != confirmPassword) {
                
            }
            else {
                api.register(name, email, password)
                .then(user => update(user));
                this.props.onClose();
            }
        }
        else {
            api.login(email, password)
            .then(user => update(user));
            this.props.onClose();
        }
    };

    handleToggleRegistration = () => {
        const { regVis } = this.state;
        this.setState({regVis:!regVis});
    };

    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
    };

    renderLoginContent() {
        const { regVis, email, password, name, confirmPassword } = this.state;
        if (regVis) {
            return (
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        value={name}
                        label="Name"
                        type="name"
                        fullWidth
                        onChange={this.onChange}
                    />
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
                    <TextField
                        margin="dense"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm Password"
                        errorText="error"
                        type="password"
                        fullWidth
                        onChange={this.onChange}
                    />
                </DialogContent>
            )
        }
        else {
            return (
                <DialogContent className="loginContent">
                    <div>
                        <font size="1">For new users:</font>
                        <Button onClick={this.handleToggleRegistration} className="regButton"><font size="1">Create Account</font></Button>
                    </div>
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
        const { regVis } = this.state;
 
        return (
            <Dialog onClose={this.handleClose} aria-labelledby="login-dialog" open = {true}>
                <form onSubmit={this.handleSubmit}>
                    <DialogTitle id="login-dialog">{regVis?"Create Account":"User Login"}</DialogTitle>
                    {this.renderLoginContent()}
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}

export default LoginDialog;
