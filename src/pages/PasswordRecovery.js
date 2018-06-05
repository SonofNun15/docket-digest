import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class PasswordRecovery extends Component {
  state = {
    password: '',
    confirmPassword: '',
    passwordWarning: ''
  };
  
  // validate this.props.match.params.token

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const { password, confirmPassword } = this.state;

    event.preventDefault();

    if (password !== confirmPassword) {
      this.setState({ passwordWarning: 'The passwords do not match!' });
    } else {
      this.setState({ passwordWarning: '' });
      console.log(event);
      console.log(this.state);
    }
  };
  
  render() {
    const { password, confirmPassword, passwordWarning } = this.state;

    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h3>Password recovery</h3>
            <div>Enter your new password</div>
            <TextField
              margin="dense"
              id="password"
              name="password"
              value={password}
              label="New password"
              type="password"
              error={passwordWarning && passwordWarning.length > 0}
              fullWidth
              onChange={this.onChange}
            />
            <TextField
              margin="dense"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              label="Confirm Password"
              type="password"
              fullWidth
              onChange={this.onChange}
            />
            <Button type="button" color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default PasswordRecovery;
