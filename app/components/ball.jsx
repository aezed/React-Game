import React from 'react';
import {speed, ballRadius, intervalTime} from '/app/constants/game';

const direction = 1;

export default class Ball extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cx: 50,
      cy: 50
    }
  }


  componentDidMount() {
    setInterval(() => {
      const {cx, cy} = this.state;      
      this.setState({
        cx: cx + Math.cos(direction) * speed / timeElapsed,
        cy: cy + Math.sin(direction) * speed / timeElapsed
      });
    }, intervalTime)
  }


  render() {
    return (
      <svg>
        <circle cx={this.state.cx} cy={this.state.cy} r={ballRadius} fill="red" />
      </svg>
    )
  }

}