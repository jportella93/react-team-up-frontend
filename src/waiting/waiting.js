import React, {Component} from 'react'
import './waiting.css'
import Pending from '.././Pending'

class Waiting extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 5
    }
    this.fivesecs()
  }


  fivesecs = () => {
    setInterval(() => {
      let secs = this.state.seconds
      if (secs == 0) {
      }
      secs -= 1
      this.setState({seconds: secs})
    }, 1000)
  }

    render() {
      return (
        <p className='remain'><span>{this.state.seconds}</span></p>
      );
    }
}

export default Waiting
