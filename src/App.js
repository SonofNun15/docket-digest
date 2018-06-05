import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './navigation/Header';
import Snackbar from './components/Snackbar';
import Dialog from './components/Dialog';

import MainContainer from './pages/MainContainer';
import About from './pages/About';
import Help from './pages/Help';
import PasswordRecovery from './pages/PasswordRecovery';

import { update, withUser } from './helpers/WithUser';

import './App.css';

class App extends Component {
  componentWillMount() {
    axios.get('/api/users/')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }

  render() {
    const { user } = this.props;
    return (
      <Router>
        <div className="App">
          <Header user={user} />
          <Route exact path="/" component={MainContainer} />
          <Route path="/About" component={About} />
          <Route path="/Help" component={Help} />
          <Route path="/password-recovery/:token" component={PasswordRecovery} />
          <Snackbar/>
          <Dialog/>
        </div>
      </Router>
    );
  }
}

export default withUser(App);
