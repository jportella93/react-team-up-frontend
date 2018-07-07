import React, { Component } from 'react'
import './pongContainer.css'
import PongRed from '../pongRed'
import PongBlue from '../pongBlue'
import Ball from '../ball'
// import playGame from '../socket'



class PongContainer extends Component {
  constructor(props) {
    super(props);

    // playGame((err, frameCoordinates) => {this.setState})


    this.state = {
      ball: {
        x: 500,
        y: 500
      },
      bluePong:{
        y:100,
      },
      redPong:{
        y:500,
      },
      windowSize: {
        x: 0,
        y: 0
      },

    }
  }


//Button Functions


handleUpR = (e) => {
    e.preventDefault();
    let y = this.state.redPong.y - 10
    this.setState({redPong : { y : y}})
    console.log(this.state.redPong)
  }

handleDownR = (e) => {
    e.preventDefault();
    let y = this.state.redPong.y + 10
    this.setState({redPong : { y : y}})
    console.log(this.state.redPong)
  }
handleUpB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong.y - 10
    this.setState({bluePong : { y : y}})
    console.log(this.state)
  }

handleDownB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong.y + 10
    this.setState({bluePong : { y : y}})
  }

  windowSizer = () => {

  }


//Ball Functions

// let randomizer = Math.random() * 360 // we will use this to decide how initial ball drop starts
// let y;
// let x;
// let ball = this.state.ball
// let windowSize = this.state.windowSize
// let state;
// if (randomizer > 270) {
//   y = 1; x = -1
// } else if ( randomizer > 180) {
//   y = -1; x = -1
// } else if ( randomizer > 90) {
//   y = -1; x = 1
// } else {
//   y = 1; x = 1
// }


    // let ballx = 500;
    // let bally = 500;

    // let stateCopy = Object.assign({}, this.state);
    // stateCopy.ball.x = ballx;
    // stateCopy.ball.y = bally;


      // } else if (windowSize.y * 0.015 > position.y > windowSize.y * 0.985 ){
      //     if (y < 0) {y = 1} else {y = -1} // switch going down to going up
      //     position.y += y
      //     position.x += x
      //     console.log('X-coordinate: ', this.state.position.x, 'y-coordinate: ', this.state.position.y)
      //     this.setState({position: position, windowSize: windowSize})
      // } else if (position.x < 0.015 || position.x > windowSize.x * 0.985) {
      //   alert('game lost')
      // }



  //




  componentWillMount () {
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.setState({windowSize: {x: height, y: width}})
  }



  render() {

    return (
      <div className='pong-container'>
        {/* <h1>pong</h1> */}
        {/* Temporary Buttons */}
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
          y={this.state.redPong.y}/>

          <div className='center-line'>
          </div>

        <PongBlue
          className='pongBlue'
          y={this.state.bluePong.y}/>
      </div>
    );
  }
}

export default PongContainer;
