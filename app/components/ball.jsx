import React from 'react';
import { ballRadius } from '../constants/game';



export default class Ball extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg>
        <circle cx={this.props.cx} cy={this.props.cy} r={ballRadius} fill="red" />
      </svg>
    )
  }

}