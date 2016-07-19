import React from 'react';

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
      console.log(cx)
      this.setState({
        cx: cx + 5,
        cy: cy + 5
      });
    }, 1000)
  }


  render() {
    return (
      <svg>
        <circle cx={this.state.cx} cy={this.state.cy} r={10} fill="red" />
      </svg>
    )
  }

}