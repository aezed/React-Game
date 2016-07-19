import React from 'react';

const intervalTime = 30;
const speed = 100;

export default class Ball extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cx: 50,
      cy: 50
    }
  }

  // speed = pixels / second
  // direction = radians (0 to 2pi)

  // x += cos(direction) * speed / timeElapsed
  // y += sin(direction) * speed / timeElapsed 
  componentDidMount() {
    setInterval(() => {
      const {cx, cy} = this.state;      
      this.setState({
        cx: cx + 5,
        cy: cy + 5
      });
    }, intervalTime)
  }


  render() {
    return (
      <svg>
        <circle cx={this.state.cx} cy={this.state.cy} r={15} fill="red" />
      </svg>
    )
  }

}