import React from 'react';

export default class Paddle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const paddleX = 200 * Math.cos(this.props.paddlePosition) + 250;
    const paddleY = 200 * Math.sin(this.props.paddlePosition) + 250;

    return (
      <div>
        <svg width={500} height={500} style={{ 'border': '1px solid black' }}>
          <rect x={paddleX} y={paddleY} width={100} height={20} fill="red" />
        </svg>
      </div>
    );
  }
}
