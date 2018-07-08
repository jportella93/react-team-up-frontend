import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PongContainer from './pongContainer'
import openSocket from 'socket.io-client'
import Pending from './Pending'
import Waiting from './waiting'

const socket = openSocket.connect('192.168.1.187:2000');

class App extends Component {
  constructor(props) {
    super(props);
    socket.on('startGame', () => {
      this.setState({gamePlay: true})
    })
    this.state = {
      gamePlay: false,
      pending: false,
    }

  socket.on('gameTimedOut', () => {
    this.setState({gamePlay: false, pending: false})
  })
  }

  endGame = () => {
    this.setState({gamePlay: false, pending: true})
    setTimeout(() => {
      this.setState({pending: false})
    }, 5000)
  }




  render() {

    return (
      <div className="App">

        {this.state.pending
          ? <Waiting/>
          : this.state.gamePlay
             ? <PongContainer socket={socket} endGame={this.endGame}  />
             : <Pending/>
         }

      </div>
    );
  }
}

export default App;
