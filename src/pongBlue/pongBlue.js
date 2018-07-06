import React, { Component } from 'react'
import './pongBlue.css'

class PongBlue extends Component {
  constructor(props) {
    super(props);
    this.state = {
        y:0,
    }
  }





  render() {
    return (
      <div
        className='pongBlue'
        style={{
          top: this.props.y
        }}>
        </div>
    );
  }
}

export default PongBlue;
