import React, { Component } from 'react'
import './ball.css'

class Ball extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ball: {
  //       x: 100,
  //       y: 100,
  //     },
  //     windowSize: {
  //       x:0,
  //       y:0,
  //     },
  //   }
  // }

  // endGame () {
  //   let ball = this.state.ball
  //   let windo = this.state.windowSize
  //   if (ball.x < 0 || ball.x > windo.x) {
  //     alert('game lost')
  //   }
  // }




  render() {
    // this.game();
    return (
      <div
        className='ball'
        style={{
          top: this.props.position.y,
          left: this.props.position.x
        }}
        >
      </div>
    );
  }






}

export default Ball;
