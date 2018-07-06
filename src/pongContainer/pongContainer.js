import React, { Component } from 'react'
import './pongContainer.css'
import PongRed from '../pongRed'
import PongBlue from '../pongBlue'
import Ball from '../ball'

class PongContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ball:{
        x: 0,
        y: 0
      },
      bluePong:{
        y:100,
      },
      redPong:{
        y:500,
      },
    }
  }


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
    console.log(this.state.bluePong)
  }

handleDownB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong.y + 10
    this.setState({bluePong : { y : y}})
    console.log(this.state.bluePong)
  }

//







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

        <Ball/>

        <PongRed
          className='pongRed'
          y={this.state.redPong.y}/>

        <PongBlue
          className='pongBlue'
          y={this.state.bluePong.y}/>
      </div>
    );
  }
}

export default PongContainer;
