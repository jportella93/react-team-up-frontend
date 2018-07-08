import React, { Component } from 'react'
import './pongBlue.css'

class PongBlue extends Component {
  constructor(props) {
    super(props);

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
