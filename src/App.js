import React, { Component } from 'react';
import Header from './navigation/Header';
import logo from './logo.svg';
import { Subscription } from './subscription/Subscription';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Subscription/>
      </div>
    );
  }
}

export default App;
