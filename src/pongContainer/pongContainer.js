import React, { Component } from 'react'
import './pongContainer.css'
import PongRed from '../pongRed'
import PongBlue from '../pongBlue'
import Ball from '../ball'
import openSocket from 'socket.io-client'
const socket = openSocket('192.168.1.187:2000')



class PongContainer extends Component {
  constructor(props) {
    super(props);
    this.playGame()
    this.state = {
      ball: {
        x: 500,
        y: 500
      },

      bluePong:0,

      redPong:0,

      windowSize: {
        x: 0,
        y: 0
      },

    }
  }




playGame = () => {
    socket.on(
      'frame', frame => {
        this.setState({
          bluePong: frame.bluePong,
          redPong: frame.redPong
        })
        console.log('red: ', this.state.redPong, 'blue: ',  this.state.bluePong)
      })
}


//Button Functions


handleUpR = (e) => {
    e.preventDefault();
    let y = this.state.redPong - 10
    this.setState({redPong : y})
    console.log(this.state.redPong)
  }

handleDownR = (e) => {
    e.preventDefault();
    let y = this.state.redPong + 10
    this.setState({redPong : y})
    console.log(this.state.redPong)
  }
handleUpB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong - 10
    this.setState({bluePong : y})
    console.log(this.state)
  }

handleDownB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong + 10
    this.setState({bluePong : y})
  }



//Ball Functions



  componentWillMount () {
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.setState({windowSize: {x: height, y: width}})
  }

  componentDidMount() {
    // this.playGame()
  }





  render() {
    return (
      <div className='pong-container'>


        <div className='button-red'>
          <button className='redPongUp' onClick={(e) => {this.handleUpR(e)}}>Up</button>
          <button className='redPongDown' onClick={(e) => {this.handleDownR(e)}}>Down</button>
        </div>
        <div className='button-blue'>
          <button className='bluePongUp' onClick={(e) => {this.handleUpB(e)}}>Up</button>
          <button className='bluePongDown' onClick={(e) => {this.handleDownB(e)}}>Down</button>
        </div>


        <div className='scoreRed'>
          <p className='score'>3</p>
        </div>
        <div className='scoreBlue'>
          <p className='score'>0</p>
        </div>



        <Ball
          position={{
            x:  500,
            y: 500
          }}

        />

        <PongRed
          className='pongRed'
          y={this.state.redPong}/>

          <div className='center-line'>
          </div>

        <PongBlue
          className='pongBlue'
          y={this.state.bluePong}/>
      </div>
    );
  }
}

export default PongContainer;
