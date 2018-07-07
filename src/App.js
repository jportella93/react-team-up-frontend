import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PongContainer from './pongContainer'
// import openSocket from 'socket.io-client'
// const socket = openSocket('192.168.1.187:2000');
class App extends Component {



  render() {

    return (
      <div className="App">

           <PongContainer  />

      </div>
    );
  }
}

export default App;
