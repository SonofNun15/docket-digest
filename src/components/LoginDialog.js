import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../services/api';
import { closeDialog } from '../services/dialog/dialog.actions';
import './loginDialog.css';

import { update } from '../helpers/WithUser';

class LoginDialog extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    regVis: false,
    passwordResetVis: false,
  };

  static defaultProps = {
    onSuccess: () => null
  }

  handleClose = () => {
    this.props.dispatch(closeDialog());
  };

  handleSubmit = (event) => {
    const { email, password, confirmPassword, name, regVis, passwordResetVis } = this.state;
    const { dispatch, onSuccess } = this.props;

    event.preventDefault();

    if (passwordResetVis) {
      console.log(email);
      dispatch(closeDialog());
      return;
    }

    if (regVis) {
      if (password !== confirmPassword) {
        this.setState({ passwordWarning: 'The passwords do not match!' });
      } else {
        dispatch(closeDialog());
        api.register(name, email, password)
          .then(user => {
            update(user);
            onSuccess();
          });
      }
    } else {
      dispatch(closeDialog());
      api.login(email, password)
        .then(user => {
          update(user);
          onSuccess();
        });
    }
  };

  handleToggleRegistration = () => {
    const { regVis } = this.state;
    this.setState({ regVis: !regVis });
  };

  handleForgotPassword = () => {
    this.setState({ passwordResetVis: true });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderLoginContent() {
    const { regVis, passwordResetVis, email, password, name, confirmPassword, passwordWarning } = this.state;
    
    if (passwordResetVis) {
      return (
        <DialogContent className="loginContent">
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
        </DialogContent>
      );
    }
    
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
            error={passwordWarning && passwordWarning.length > 0}
            errorText={passwordWarning}
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
    } else {
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
          <Button onClick={this.handleForgotPassword} className="forgot-password">Forgot password?</Button>
        </DialogContent>
      )
    }
  };

  render() {
    const { regVis, passwordResetVis } = this.state;

    let header;
    if (passwordResetVis) {
      header = "Reset Password";
    } else {
      header = regVis ? "Create Account" : "User Login";
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <DialogTitle id="dialog">{header}</DialogTitle>
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
    )
  }
}

export default connect()(LoginDialog);
