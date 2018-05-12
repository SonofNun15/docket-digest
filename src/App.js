import React, { Component } from 'react';
import Header from './navigation/Header';
import MainContainer from './MainContainer';
import { Subscription } from './subscription/Subscription';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Subscription/>
        <MainContainer />
      </div>
    );
  }
}

export default App;
