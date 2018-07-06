import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PongContainer from './pongContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <PongContainer />
      </div>
    );
  }
}

export default App;
