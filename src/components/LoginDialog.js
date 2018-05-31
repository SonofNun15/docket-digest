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
  };

  static defaultProps = {
    onSuccess: () => null
  }

  handleClose = () => {
    this.props.dispatch(closeDialog());
  };

  handleSubmit = (event) => {
    const { email, password, confirmPassword, name, regVis } = this.state;

    event.preventDefault();

    if (regVis) {
      if (password !== confirmPassword) {
        this.setState({ passwordWarning: 'The passwords do not match!' });
      } else {
        this.props.dispatch(closeDialog());
        api.register(name, email, password)
          .then(user => {
            update(user);
            this.props.onSuccess();
          });
      }
    } else {
      this.props.dispatch(closeDialog());
      api.login(email, password)
        .then(user => {
          update(user);
          this.props.onSuccess();
        });
    }
  };

  handleToggleRegistration = () => {
    const { regVis } = this.state;
    this.setState({ regVis: !regVis });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderLoginContent() {
    const { regVis, email, password, name, confirmPassword, passwordWarning } = this.state;
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
        </DialogContent>
      )
    }
  };

  render() {
    const { regVis } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <DialogTitle id="login-dialog">
          {regVis ? "Create Account" : "User Login"}
        </DialogTitle>
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
