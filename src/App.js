import React, { Component } from 'react';
import Header from './navigation/Header';
import MainContainer from './MainContainer';
import { update, withUser } from './components/WithUser';
import axios from 'axios';
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
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default withUser(App);
